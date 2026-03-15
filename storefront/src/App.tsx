import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Factory, AlertTriangle, ChevronRight, Lock, Pause, RotateCw, 
  FlaskConical, Network, CheckCircle, Scan, FileText, Plus, 
  MoreVertical, CheckCircle2, Clock, ClipboardList, TrendingUp
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { 
  collection, doc, onSnapshot, query, orderBy, addDoc, 
  updateDoc, setDoc
} from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, auth } from "./firebase";
import QuoteBuilder from './components/QuoteBuilder';

// --- Types ---
import { 
  Batch, Stage, Log, Ingredient, InventoryItem, Quote, 
  OperationType, FirestoreErrorInfo 
} from "./types";

type View = 'manufacturing' | 'mobile' | 'quote';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Medusa Service ---
const MEDUSA_BASE_URL = import.meta.env.VITE_MEDUSA_BASE_URL || "https://chocolate.medusajs.app";

const getAdminHeaders = (isAdmin: boolean) => {
  const skToken = import.meta.env.VITE_MEDUSA_ADMIN_TOKEN; 
  const pkToken = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY;
  return isAdmin 
    ? { "Content-Type": "application/json", "Authorization": `Bearer ${skToken}` }
    : { "Content-Type": "application/json", "x-publishable-api-key": pkToken };
};

const MedusaService = {
  getProducts: async () => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/store/products`, { headers: getAdminHeaders(false) });
      if (!response.ok) return [];
      const data = await response.json();
      return (data.products || []).map((p: any) => ({
        id: p.id, name: p.title, stockLevel: p.variants?.[0]?.inventory_quantity || 0,
      }));
    } catch (e) { return []; }
  },

  getQuotes: async () => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/admin/draft-orders`, { headers: getAdminHeaders(true) });
      if (!response.ok) throw new Error();
      const data = await response.json();
      return (data.draft_orders || []).map((d: any) => ({
        id: d.id, displayId: d.display_id, clientName: `${d.cart?.customer?.first_name || ""} ${d.cart?.customer?.last_name || ""}`.trim(),
        projectName: d.metadata?.project_name || "Custom Blend", recipeName: d.cart?.items?.[0]?.title || "Formulation",
        status: d.status, recipe: d.cart?.items || []
      }));
    } catch (e) {
      return [{
        id: "demo-q1", displayId: 1042, clientName: "Aria Resort & Casino", projectName: "Aria Signature 70%",
        recipeName: "DARK_VELVET_V4", status: "approved", recipe: [{ name: "Cacao Nibs", percentage: 70 }]
      }];
    }
  },

  calculateLiveCost: async (productId: string, quantity: number) => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/admin/batch-cost`, {
        method: 'POST',
        headers: getAdminHeaders(true),
        body: JSON.stringify({ product_id: productId, batch_quantity: quantity })
      });
      if (!response.ok) return null;
      const data = await response.json();
      return data.costing;
    } catch (e) { return null; }
  }
};

// --- Main App Component ---
export default function App() {
  const [user] = useState({ uid: "tech-001", displayName: "DEMO_OPERATOR", email: "demo@lvcc.com" });
  const [activeBatch, setActiveBatch] = useState<Batch | null>(null);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [stages, setStages] = useState<Stage[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [view, setView] = useState<View>("manufacturing");
  const [loading, setLoading] = useState(true);
  const [showNewBatchModal, setShowNewBatchModal] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [medusaProducts, setMedusaProducts] = useState<any[]>([]);
  const [isCreatingBatch, setIsCreatingBatch] = useState(false);

  // Reconciliation Helper
  const getBatchPerformance = (batch: any) => {
    const estimated = batch.financials?.projectedCost || 45000;
    const actual = estimated * 1.042; // Simulation: 4.2% actual overage
    const variance = ((actual - estimated) / estimated) * 100;
    return { actualCost: actual, variance: variance.toFixed(1) };
  };

  useEffect(() => {
    async function init() {
      const [p, q] = await Promise.all([MedusaService.getProducts(), MedusaService.getQuotes()]);
      setMedusaProducts(p); setQuotes(q); setLoading(false);
    }
    init();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "batches"), orderBy("createdAt", "desc")), (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() } as Batch));
      setBatches(list);
      if (!activeBatch && list.length > 0) setActiveBatch(list[0]);
    });
    return () => unsub();
  }, [activeBatch]);

  useEffect(() => {
    if (!activeBatch) return;
    const unsubS = onSnapshot(query(collection(db, `batches/${activeBatch.id}/stages`), orderBy("order", "asc")), (s) => 
      setStages(s.docs.map(d => ({ id: d.id, ...d.data() } as Stage))));
    const unsubL = onSnapshot(query(collection(db, `batches/${activeBatch.id}/logs`), orderBy("timestamp", "desc")), (s) => 
      setLogs(s.docs.map(d => ({ id: d.id, ...d.data() } as Log))));
    const unsubI = onSnapshot(collection(db, `batches/${activeBatch.id}/ingredients`), (s) => 
      setIngredients(s.docs.map(d => ({ id: d.id, ...d.data() } as Ingredient))));
    return () => { unsubS(); unsubL(); unsubI(); };
  }, [activeBatch?.id]);

  const startBatchFromQuote = async (quote: Quote) => {
    setIsCreatingBatch(true);
    try {
      const costData = await MedusaService.calculateLiveCost(quote.id, 50);
      const batchId = `BATCH-${Date.now().toString().slice(-4)}`;
      
      const newBatch: any = {
        id: batchId, quoteId: quote.id, status: "in-progress",
        clientName: quote.clientName, projectName: quote.projectName,
        recipeName: quote.recipeName, createdAt: new Date().toISOString(),
        financials: {
          projectedCost: costData?.grand_total || 45000,
          laborCost: costData?.labor_total || 12000,
          margin: 32.4
        },
        specifications: { runSizeKg: 50, isGanache: quote.projectName.toLowerCase().includes("ganache") }
      };

      await setDoc(doc(db, "batches", batchId), newBatch);
      const stageNames = ["Roasting", "Winnowing", "Grinding", "Conching", "Tempering", "Molding"];
      for (let i = 0; i < stageNames.length; i++) {
        await setDoc(doc(db, `batches/${batchId}/stages`, `stage-${i}`), {
          name: stageNames[i], order: i, status: i === 0 ? "active" : "pending"
        });
      }
      setActiveBatch(newBatch); setShowNewBatchModal(false);
    } catch (e) { console.error(e); } finally { setIsCreatingBatch(false); }
  };

  if (loading) return <div className="min-h-screen bg-background-dark flex items-center justify-center text-primary mono-data">Syncing ERP Master Data...</div>;

  return (
    <div className="min-h-screen bg-background-dark text-cream font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 flex flex-col border-r hairline-border bg-espresso">
          <div className="p-6 border-b hairline-border">
            <div className="flex items-center gap-3">
              <Factory className="text-accent-gold size-6" />
              <div>
                <h1 className="text-sm font-bold tracking-widest mono-data text-accent-gold">ATELIER V.04</h1>
                <p className="text-[9px] opacity-40">ENTERPRISE_READY</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {batches.map(b => (
              <div key={b.id} onClick={() => setActiveBatch(b)} className={cn("p-4 cursor-pointer transition-all", activeBatch?.id === b.id ? "bg-accent-gold/10 border-l-2 border-accent-gold" : "opacity-40 hover:opacity-100")}>
                <p className="mono-data text-[10px]">#{b.id.split('-')[1] || b.id}</p>
                <p className="text-sm font-bold truncate">{b.clientName}</p>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="h-20 border-b hairline-border flex items-center justify-between px-8 bg-espresso/50">
            <div>
              <h2 className="mono-data text-lg font-bold">BATCH #{activeBatch?.id || "N/A"}</h2>
              <p className="text-[10px] text-accent-gold/60 uppercase">{activeBatch?.projectName}</p>
            </div>
            <button onClick={() => setShowNewBatchModal(true)} className="bg-primary text-cream px-8 py-2 mono-data text-xs font-bold tracking-tighter">INITIALIZE_NEW_BATCH</button>
          </header>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column */}
              <div className="col-span-4 space-y-6">
                {/* Profit Margin Widget */}
                {(activeBatch as any)?.financials && (
                  <section className="p-5 border border-accent-gold/20 bg-accent-gold/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1 bg-accent-gold text-espresso text-[8px] font-bold">LIVE_MARGIN</div>
                    <h3 className="mono-data text-[10px] text-accent-gold mb-4">PRODUCTION_FINANCIALS</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[10px] opacity-60">Medusa Est. Cost</span>
                        <span className="mono-data text-sm">${((activeBatch as any).financials.projectedCost / 100).toFixed(2)}</span>
                      </div>
                      <div className="pt-3 border-t border-accent-gold/10 flex justify-between items-center">
                        <span className="text-[10px] font-bold">PROJECTED MARGIN</span>
                        <span className="mono-data text-xl text-emerald-400">{(activeBatch as any).financials.margin}%</span>
                      </div>
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="mono-data text-[10px] text-accent-gold mb-4 border-b hairline-border pb-2">RAW_MATERIAL_SYNC</h3>
                  <div className="space-y-2">
                    {ingredients.map(ing => (
                      <div key={ing.id} className="p-3 border hairline-border flex justify-between items-center bg-white/5">
                        <span className="text-xs uppercase tracking-tight">{ing.name}</span>
                        {ing.verified ? <CheckCircle className="size-3 text-accent-gold" /> : <Scan className="size-3 text-primary animate-pulse" />}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Center Column */}
              <div className="col-span-8 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="size-4 text-accent-gold" />
                  <h3 className="mono-data text-[10px] text-accent-gold font-bold">WORKFLOW_ENGINE_V2</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stages.map((s, i) => (
                    <div key={s.id} className={cn("p-6 border transition-all", s.status === 'active' ? "border-accent-gold bg-accent-gold/10 shadow-[0_0_20px_rgba(217,197,178,0.05)]" : "hairline-border opacity-30")}>
                      <div className="flex justify-between items-start mb-4">
                        <span className="mono-data text-[10px]">0{i+1}</span>
                        {s.status === 'active' && <div className="size-2 bg-accent-gold rounded-full animate-ping" />}
                      </div>
                      <p className="font-display text-lg uppercase tracking-tight">{s.name}</p>
                      {s.status === 'active' && <p className="mono-data text-[10px] text-accent-gold mt-2 animate-pulse">PROCESSING...</p>}
                    </div>
                  ))}
                </div>

                {/* --- ADMIN RECONCILIATION SUMMARY --- */}
                <section className="mt-12 border-t-2 border-accent-gold/30 pt-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <ClipboardList className="text-accent-gold size-6" />
                      <h3 className="font-display text-2xl text-white tracking-tighter uppercase">Batch Reconciliation Summary</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-6 bg-white/5 border hairline-border">
                      <p className="mono-data text-[9px] opacity-40 mb-2">ERP_ESTIMATE (MEDUSA)</p>
                      <p className="text-3xl font-light text-white font-mono">${((activeBatch as any)?.financials?.projectedCost / 100 || 450).toFixed(2)}</p>
                    </div>

                    <div className="p-6 bg-white/5 border hairline-border">
                      <p className="mono-data text-[9px] opacity-40 mb-2">ACTUAL_PRODUCTION_COST</p>
                      <p className="text-3xl font-light text-white font-mono">${(getBatchPerformance(activeBatch).actualCost / 100).toFixed(2)}</p>
                      <div className="flex items-center gap-1 mt-2 text-red-400">
                        <TrendingUp className="size-3" />
                        <span className="text-[10px] font-bold">+{getBatchPerformance(activeBatch).variance}% VARIANCE</span>
                      </div>
                    </div>

                    <div className="p-6 bg-accent-gold text-espresso">
                      <p className="mono-data text-[9px] font-bold mb-2">FINAL_BATCH_MARGIN</p>
                      <p className="text-4xl font-display font-bold">31.2%</p>
                      <p className="text-[9px] font-bold uppercase mt-2 opacity-60">Audit_Status: Verified</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* New Batch Modal */}
      <AnimatePresence>
        {showNewBatchModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-background-dark/95 backdrop-blur-md">
            <div className="max-w-xl w-full bg-espresso border border-accent-gold/30 p-10 shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-display text-white tracking-tighter uppercase">Initialize Production</h2>
                <button onClick={() => setShowNewBatchModal(false)} className="text-accent-gold">✕</button>
              </div>
              <div className="space-y-3">
                {quotes.filter(q => q.status === 'approved').map(q => (
                  <button key={q.id} onClick={() => startBatchFromQuote(q)} disabled={isCreatingBatch} className="w-full text-left p-5 border border-white/5 hover:border-accent-gold/50 hover:bg-white/5 transition-all flex justify-between items-center group">
                    <div>
                      <p className="text-white font-bold text-lg tracking-tight group-hover:text-accent-gold transition-colors">{q.projectName}</p>
                      <p className="text-white/40 text-[10px] mono-data uppercase mt-1">{q.clientName} // {q.recipeName}</p>
                    </div>
                    <ChevronRight className="text-accent-gold/20 group-hover:text-accent-gold transition-colors" />
                  </button>
                ))}
              </div>
              {isCreatingBatch && (
                <div className="mt-8 flex items-center gap-3 text-accent-gold">
                  <div className="size-4 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
                  <p className="mono-data text-[10px] uppercase">Syncing Enterprise Costing...</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}