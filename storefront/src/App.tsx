import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Factory, 
  Beaker, 
  ClipboardList, 
  Box, 
  TrendingUp, 
  AlertTriangle,
  ChevronRight,
  Menu,
  Settings,
  History,
  ChevronDown,
  CheckCircle2,
  Lock,
  Play,
  Pause,
  Clock,
  User,
  Thermometer,
  Droplets,
  Activity,
  Terminal,
  MoreVertical,
  CheckCircle,
  Archive,
  Layers,
  FileText,
  Plus,
  RotateCw,
  FlaskConical,
  Network,
  Scan,
  Check
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { 
  collection, 
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  addDoc, 
  updateDoc, 
  serverTimestamp, 
  getDocs,
  setDoc,
  getDocFromServer,
  Timestamp
} from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { db, auth } from "./firebase";
import QuoteBuilder from './components/QuoteBuilder';

// --- Types ---
type View = 'manufacturing' | 'mobile' | 'quote';

import { 
  Batch, 
  Stage, 
  Log, 
  Ingredient, 
  InventoryItem,
  Quote,
  BatchStatus, 
  StageStatus, 
  LogType,
  OperationType,
  FirestoreErrorInfo
} from "./types";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Error Handling ---
function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email || undefined,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
}

// --- Medusa Service ---
const MEDUSA_BASE_URL = import.meta.env.VITE_MEDUSA_BASE_URL || "https://chocolate.medusajs.app";

const getAdminHeaders = (isAdmin: boolean) => {
  const skToken = import.meta.env.VITE_MEDUSA_ADMIN_TOKEN; 
  const pkToken = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY;

  if (isAdmin) {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${skToken}`
    };
  }

  return {
    "Content-Type": "application/json",
    "x-publishable-api-key": pkToken
  };
};

const MedusaService = {
  getProducts: async () => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/store/products`, {
        headers: getAdminHeaders(false) 
      });
      
      if (!response.ok) return [];

      const data = await response.json();
      return (data.products || []).map((p: any) => ({
        id: p.id,
        name: p.title,
        stockLevel: p.variants?.[0]?.inventory_quantity || 0,
        origin: p.metadata?.origin || "Madagascar",
      }));
    } catch (error) {
      console.error("Product Fetch Failed:", error);
      return [];
    }
  },

  getQuotes: async () => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/admin/draft-orders`, {
        headers: getAdminHeaders(true)
      });

      if (!response.ok) throw new Error("Unauthorized");

      const data = await response.json();
      return (data.draft_orders || []).map((d: any) => ({
        id: d.id,
        displayId: d.display_id,
        clientName: `${d.cart?.customer?.first_name || ""} ${d.cart?.customer?.last_name || ""}`.trim(),
        projectName: d.metadata?.project_name || "Custom Chocolate Blend",
        recipeName: d.cart?.items?.[0]?.title || "Custom Formulation",
        status: d.status,
        items: d.cart?.items || [],
        recipe: d.cart?.items || [] 
      }));
    } catch (error) {
      console.warn("Medusa Admin 401: Injecting Demo Quote for Presentation.");
      // FALLBACK DATA FOR DEMO
      return [{
        id: "demo-q1",
        displayId: 1042,
        clientName: "Aria Resort & Casino",
        projectName: "Aria Signature 70%",
        recipeName: "DARK_VELVET_V4",
        status: "approved",
        items: [],
        recipe: [
          { name: "Cacao Nibs", percentage: 70 },
          { name: "Cocoa Butter", percentage: 25 },
          { name: "Cane Sugar", percentage: 5 }
        ]
      }];
    }
  }
};

// --- Components ---

const Gauge = ({ value, label, target, unit, icon: Icon }: { value: number; label: string; target: number; unit: string; icon: any }) => {
  const percentage = Math.min((value / (target * 1.5)) * 100, 100);
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-6">
      <div className="relative size-20 flex items-center justify-center shrink-0">
        <svg className="size-full absolute -rotate-90">
          <circle className="text-primary/5" cx="40" cy="40" fill="none" r="36" stroke="currentColor" strokeWidth={2} />
          <motion.circle 
            className="text-primary" 
            cx="40" 
            cy="40" 
            fill="none" 
            r="36" 
            stroke="currentColor" 
            strokeWidth={2}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            style={{ strokeDasharray: circumference }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <span className="font-mono text-xl font-light text-primary">{value}</span>
      </div>
      <div>
        <p className="font-mono text-[9px] text-primary/40 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="font-mono text-primary/80 text-xs">TARGET: {target}{unit}</p>
      </div>
    </div>
  );
};

const LogEntry = ({ log }: { log: Log; key?: any }) => {
  const time = new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="flex gap-4 group py-2 border-b hairline-border last:border-0">
      <span className="text-accent-gold/30 shrink-0 font-mono text-[10px]">{time}</span>
      <div className="flex flex-col gap-1">
        <span className={cn(
          "font-mono text-[10px] font-bold uppercase tracking-widest",
          log.type === 'error' ? "text-red-400" : 
          log.type === 'warning' ? "text-amber-400" : 
          log.type === 'success' ? "text-emerald-400" : "text-accent-gold"
        )}>
          [{log.type.toUpperCase()}]
        </span>
        <span className="text-cream/70 text-[11px] leading-relaxed">{log.message}</span>
      </div>
    </div>
  );
};

const StageButton = ({ stage, isActive, isCompleted, onClick }: { stage: Stage; isActive: boolean; isCompleted: boolean; onClick: () => void; key?: any }) => {
  return (
    <button 
      onClick={onClick}
      disabled={!isActive && !isCompleted}
      className={cn(
        "w-full transition-all duration-500 relative overflow-hidden flex items-center justify-between px-6 border",
        isActive 
          ? "h-28 border-accent-gold bg-accent-gold/10 shadow-[0_0_30px_rgba(217,197,178,0.1)]" 
          : isCompleted 
            ? "h-20 border-accent-gold/10 bg-white/5 opacity-40 grayscale" 
            : "h-20 border-accent-gold/10 bg-white/5 opacity-40"
      )}
    >
      {isActive && <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold" />}
      <div className="flex flex-col items-start">
        <span className={cn(
          "mono-data text-[9px] tracking-[0.2em] mb-1",
          isActive ? "text-accent-gold font-bold" : "text-accent-gold/40"
        )}>
          {isActive ? "ACTIVE_STAGE" : `STAGE_${String(stage.order).padStart(2, '0')}`}
        </span>
        <span className={cn(
          "font-display tracking-tight uppercase",
          isActive ? "text-xl font-bold text-white" : "text-lg font-light text-accent-gold/60"
        )}>
          {stage.name}
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        {isActive && (
          <div className="flex flex-col items-end">
            <span className="text-[9px] mono-data text-accent-gold/80 mb-1">ELAPSED</span>
            <span className="text-lg font-mono text-white">02:44:12</span>
          </div>
        )}
        {isCompleted ? (
          <CheckCircle2 className="text-accent-gold w-5 h-5" />
        ) : !isActive ? (
          <Lock className="text-accent-gold/20 w-4 h-4" />
        ) : null}
      </div>
    </button>
  );
};

// --- Main App ---

export default function App() {
  // DEMO AUTH BYPASS
  const [user, setUser] = useState<any>({
    uid: "demo-tech-001",
    displayName: "DEMO_OPERATOR",
    email: "demo@lvcc.com"
  });
  const [isAuthReady, setIsAuthReady] = useState(true); 

  const [activeBatch, setActiveBatch] = useState<Batch | null>(null);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [stages, setStages] = useState<Stage[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [view, setView] = useState<View>("manufacturing");
  const [isCreatingBatch, setIsCreatingBatch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showNewBatchModal, setShowNewBatchModal] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [medusaProducts, setMedusaProducts] = useState<any[]>([]);
  const [medusaOrders, setMedusaOrders] = useState<any[]>([]);
  const [ganacheTimeLeft, setGanacheTimeLeft] = useState<string>("72:00:00");

  useEffect(() => {
    if (!activeBatch?.specifications?.isGanache) return;
    const timer = setInterval(() => {
      setGanacheTimeLeft(prev => {
        const [h, m, s] = prev.split(':').map(Number);
        let totalSeconds = h * 3600 + m * 60 + s - 1;
        if (totalSeconds < 0) return "00:00:00";
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeBatch]);

  useEffect(() => {
    async function fetchMedusaData() {
      const products = await MedusaService.getProducts();
      setMedusaProducts(products);
      const orders = await MedusaService.getQuotes();
      setMedusaOrders(orders);
      setQuotes(orders); // Sync quotes state with Medusa results
    }
    fetchMedusaData();
  }, []);

  useEffect(() => {
    setView('manufacturing');
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Data Listeners
  useEffect(() => {
    if (!isAuthReady) return;

    const qBatches = query(collection(db, "batches"), orderBy("createdAt", "desc"));
    const unsubBatches = onSnapshot(qBatches, (snapshot) => {
      const batchList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Batch));
      setBatches(batchList);
      if (!activeBatch && batchList.length > 0) {
        const inProgress = batchList.find(b => b.status === 'in-progress') || batchList[0];
        setActiveBatch(inProgress);
      }
    }, (err) => handleFirestoreError(err, OperationType.LIST, "batches"));

    const unsubInventory = onSnapshot(collection(db, "inventory"), (snapshot) => {
      setInventory(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as InventoryItem)));
    }, (err) => handleFirestoreError(err, OperationType.LIST, "inventory"));

    return () => {
      unsubBatches();
      unsubInventory();
    };
  }, [isAuthReady]);

  useEffect(() => {
    if (!activeBatch) {
      setStages([]);
      setLogs([]);
      return;
    }

    const qStages = query(collection(db, `batches/${activeBatch.id}/stages`), orderBy("order", "asc"));
    const unsubStages = onSnapshot(qStages, (snapshot) => {
      setStages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Stage)));
    }, (err) => handleFirestoreError(err, OperationType.LIST, `batches/${activeBatch.id}/stages`));

    const qLogs = query(collection(db, `batches/${activeBatch.id}/logs`), orderBy("timestamp", "desc"));
    const unsubLogs = onSnapshot(qLogs, (snapshot) => {
      setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Log)));
    }, (err) => handleFirestoreError(err, OperationType.LIST, `batches/${activeBatch.id}/logs`));

    const unsubBatchIngredients = onSnapshot(collection(db, `batches/${activeBatch.id}/ingredients`), (snapshot) => {
      setIngredients(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ingredient)));
    }, (err) => handleFirestoreError(err, OperationType.LIST, `batches/${activeBatch.id}/ingredients`));

    return () => {
      unsubStages();
      unsubLogs();
      unsubBatchIngredients();
    };
  }, [activeBatch?.id]);

  const approvedQuotes = useMemo(() => quotes.filter(q => q.status === 'approved'), [quotes]);

  // --- Actions ---
  const startBatchFromQuote = async (quote: Quote) => {
    if (!user) return;
    setIsCreatingBatch(true);

    try {
      const batchId = `BATCH-${(quote.id || '0000').slice(-4)}-${Date.now().toString().slice(-4)}`;
      const newBatch: Batch = {
        id: batchId,
        quoteId: quote.id || "",
        recipeName: quote.projectName,
        status: "in-progress",
        currentStageIndex: 0,
        clientName: quote.clientName,
        projectName: quote.projectName,
        createdAt: new Date().toISOString(),
        specifications: {
          runSizeKg: 50,
          targetParticleSizeMicrons: 20,
          temperingCurve: "Standard Dark",
          isGanache: quote.projectName.toLowerCase().includes("ganache"),
          targetTemp: 45,
          targetHumidity: 40
        },
        resources: ["Melangeur #2", "Standard Molds"]
      };

      await setDoc(doc(db, "batches", batchId), newBatch);
      
      const recipeItems = quote.recipe || [];
      for (const item of recipeItems) {
  const ingredientId = `ing-${Math.random().toString(36).substr(2, 9)}`;
  await setDoc(doc(db, `batches/${batchId}/ingredients`, ingredientId), {
    id: ingredientId,
    batchId,
    // Fix: check for name OR title, then fallback to a default string
    name: item.name || (item as any).title || "Unknown Ingredient",
    amount: ((item.percentage || 0) / 100) * 50, 
    unit: "KG",
    verified: false
  });
}
      
      const stageNames = ["Roasting", "Winnowing", "Grinding", "Conching", "Tempering", "Molding", "Demolding"];
      if (newBatch.specifications?.isGanache) {
        stageNames.splice(4, 0, "Ganache Tech");
      }

      for (let i = 0; i < stageNames.length; i++) {
        const stageId = `stage-${i}`;
        await setDoc(doc(db, `batches/${batchId}/stages`, stageId), {
          batchId,
          name: stageNames[i],
          order: i,
          status: i === 0 ? "active" : "pending",
          qualityData: {}
        });
      }

      await addDoc(collection(db, `batches/${batchId}/logs`), {
        batchId,
        timestamp: new Date().toISOString(),
        type: "success",
        message: `Master Batch Record created for ${quote.projectName}`,
        technician: user.displayName || user.email
      });

      setActiveBatch(newBatch);
      setView('manufacturing');
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, "batches");
    } finally {
      setIsCreatingBatch(false);
    }
  };

  const updateStageQuality = async (stageId: string, data: Partial<Stage['qualityData']>) => {
    if (!activeBatch) return;
    try {
      const stage = stages.find(s => s.id === stageId);
      if (!stage) return;
      const updatedQuality = { ...(stage.qualityData || {}), ...data };
      if (updatedQuality.inputWeight && updatedQuality.outputWeight) {
        updatedQuality.yieldLoss = Number(((updatedQuality.inputWeight - updatedQuality.outputWeight) / updatedQuality.inputWeight * 100).toFixed(2));
      }
      await updateDoc(doc(db, `batches/${activeBatch.id}/stages`, stageId), {
        qualityData: updatedQuality
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `batches/${activeBatch.id}/stages/${stageId}`);
    }
  };

  const completeStage = async (stageId: string) => {
    if (!activeBatch) return;
    try {
      const stageIndex = stages.findIndex(s => s.id === stageId);
      if (stageIndex === -1) return;

      await updateDoc(doc(db, `batches/${activeBatch.id}/stages`, stageId), {
        status: "completed",
        endTime: new Date().toISOString()
      });

      if (stageIndex < stages.length - 1) {
        const nextStageId = stages[stageIndex + 1].id;
        await updateDoc(doc(db, `batches/${activeBatch.id}/stages`, nextStageId), {
          status: "active",
          startTime: new Date().toISOString()
        });
        await updateDoc(doc(db, "batches", activeBatch.id), {
          currentStageIndex: stageIndex + 1
        });
      } else {
        await updateDoc(doc(db, "batches", activeBatch.id), {
          status: "completed"
        });
      }

      await addDoc(collection(db, `batches/${activeBatch.id}/logs`), {
        batchId: activeBatch.id,
        timestamp: new Date().toISOString(),
        type: "info",
        message: `Stage ${stages[stageIndex].name} completed.`,
        technician: user?.displayName || user?.email
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `batches/${activeBatch.id}/stages/${stageId}`);
    }
  };

  const handleCompleteStage = async () => {
    if (!activeBatch || stages.length === 0) return;
    const activeStage = stages.find(s => s.status === 'active');
    if (activeStage) {
      await completeStage(activeStage.id);
    }
  };

  const handleCreateBatch = async (quote: Quote) => {
    await startBatchFromQuote(quote);
    setShowNewBatchModal(false);
  };

  const handleVerifyIngredient = async (ingredientId: string) => {
    if (!activeBatch) return;
    try {
      setIngredients(prev => prev.map(ing => 
        ing.id === ingredientId ? { ...ing, verified: true } : ing
      ));
      await addDoc(collection(db, `batches/${activeBatch.id}/logs`), {
        batchId: activeBatch.id,
        timestamp: new Date().toISOString(),
        type: "success",
        message: `Ingredient verified: ${ingredients.find(i => i.id === ingredientId)?.name}`,
        technician: user?.displayName || user?.email
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `batches/${activeBatch.id}/ingredients/${ingredientId}`);
    }
  };

  if (view === 'quote') {
    return <QuoteBuilder onBack={() => setView('manufacturing')} products={medusaProducts} />;
  }

  if (loading) return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="font-mono text-primary/60 text-xs uppercase tracking-widest">Initializing Lab Systems...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-dark text-cream font-sans selection:bg-accent-gold/30">
      {view === "manufacturing" ? (
        <div className="flex h-screen overflow-hidden relative z-10">
          <aside className="w-80 flex flex-col border-r hairline-border bg-espresso">
            <div className="p-6 border-b hairline-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 bg-accent-gold flex items-center justify-center">
                  <Factory className="text-espresso size-6" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-widest mono-data text-accent-gold">ATELIER V.04</h1>
                  <p className="text-[10px] opacity-60 mono-data">Production Interface</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-bold mono-data text-accent-gold tracking-tighter">ACTIVE_QUEUE</h2>
                <span className="text-[10px] mono-data opacity-50">{batches.length} BATCHES</span>
              </div>
            </div>
            
            <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2 custom-scrollbar">
              <div className="px-2 mb-2">
                <p className="mono-data text-[9px] opacity-40 mb-2">FIRESTORE_BATCHES</p>
              </div>
              {batches.map((batch) => (
                <div 
                  key={batch.id}
                  onClick={() => setActiveBatch(batch)}
                  className={cn(
                    "p-4 border-l-2 transition-all cursor-pointer",
                    activeBatch?.id === batch.id 
                      ? "bg-accent-gold/10 border-accent-gold" 
                      : "hover:bg-white/5 border-transparent"
                  )}
                >
                  <div className="flex justify-between items-start">
                    <span className={cn(
                      "mono-data text-xs font-bold",
                      activeBatch?.id === batch.id ? "text-accent-gold" : "opacity-70"
                    )}>
                      #{batch.id.split('-')[1] || batch.id}
                    </span>
                    <span className={cn(
                      "mono-data text-[10px] px-1",
                      batch.status === 'in-progress' 
                        ? "bg-accent-gold text-espresso" 
                        : "border border-white/20 opacity-50"
                    )}>
                      {batch.status.toUpperCase()}
                    </span>
                  </div>
                  <p className={cn(
                    "text-sm font-medium mt-1",
                    activeBatch?.id === batch.id ? "text-white" : "opacity-80"
                  )}>
                    {batch.clientName || "Internal Batch"}
                  </p>
                </div>
              ))}
            </nav>

            <div className="p-6 border-t hairline-border">
              <div className="flex items-center gap-2 text-primary">
                <AlertTriangle className="size-3" />
                <span className="mono-data text-[10px] font-bold">SYSTEM_LOG_ERR: 0</span>
              </div>
            </div>
          </aside>

          <main className="flex-1 flex flex-col overflow-hidden">
            <header className="h-20 border-b hairline-border flex items-center justify-between px-8 bg-espresso/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-6">
                <div>
                  <h2 className="mono-data text-lg font-bold">BATCH #{activeBatch?.id || "N/A"}</h2>
                  <p className="text-xs text-accent-gold/80 mono-data uppercase">CLIENT: {activeBatch?.clientName || "UNASSIGNED"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowNewBatchModal(true)}
                  className="bg-primary text-cream px-6 py-2 mono-data text-xs font-bold tracking-widest hover:brightness-110 transition-all"
                >
                  NEW_BATCH
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-12 gap-8 custom-scrollbar">
              <div className="col-span-4 space-y-8">
                <section>
                  <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">MASTER_BATCH_RECORD</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b hairline-border pb-1">
                      <span className="text-xs opacity-60">Run Size</span>
                      <span className="mono-data text-lg">{activeBatch?.specifications?.runSizeKg || 0}kg</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">INVENTORY_INTEGRATION</h3>
                  <div className="space-y-2">
                    {ingredients.map((ing) => (
                      <div 
                        key={ing.id} 
                        onClick={() => !ing.verified && handleVerifyIngredient(ing.id)}
                        className={cn(
                          "p-3 border flex justify-between items-center transition-all cursor-pointer",
                          ing.verified ? "hairline-border" : "border-primary/50 bg-primary/5"
                        )}
                      >
                        <div>
                          <p className="text-xs font-medium">{ing.name}</p>
                        </div>
                        {ing.verified && <CheckCircle className="size-3 text-accent-gold" />}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="col-span-5 space-y-6">
                <h3 className="mono-data text-xs font-bold text-accent-gold mb-6 flex items-center gap-2">
                  <Network className="size-3" />
                  WORKFLOW_ENGINE_V4.2
                </h3>
                <div className="relative space-y-4">
                  {stages.map((stage, idx) => (
                    <div key={stage.id} className="flex gap-4 items-start">
                      <div className={cn("w-12 mono-data text-[10px] pt-1", stage.status === 'active' ? "text-accent-gold font-bold" : "opacity-40")}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className={cn("flex-1 p-4 border transition-all", stage.status === 'active' ? "border-2 border-accent-gold bg-accent-gold/5 p-6" : "hairline-border opacity-50")}>
                        <div className="flex justify-between items-center">
                          <span className={cn("mono-data text-sm tracking-[0.2em]", stage.status === 'active' && "font-bold text-accent-gold")}>{stage.name}</span>
                          {stage.status === 'active' && <span className="mono-data text-xs text-accent-gold">ACTIVE</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-3 space-y-6">
                <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">QUALITY_LOGS</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {logs.slice(0, 5).map((log) => (
                    <div key={log.id} className="text-[10px] leading-relaxed">
                      <span className="font-bold mr-2 text-accent-gold">[{log.type.toUpperCase()}]</span>
                      <span className="opacity-70">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <footer className="mt-auto border-t hairline-border p-6 bg-espresso/80 backdrop-blur-md flex justify-between items-center z-40">
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="mono-data text-[10px] opacity-40">CURRENT_OPERATOR</p>
                  <p className="mono-data text-xs font-bold">{user.displayName}</p>
                </div>
                <button 
                  onClick={handleCompleteStage}
                  className="bg-accent-gold text-espresso px-10 py-3 mono-data text-sm font-bold tracking-[0.2em] hover:brightness-110 shadow-lg active:scale-95 transition-all"
                >
                  COMPLETE STAGE
                </button>
              </div>
            </footer>
          </main>
        </div>
      ) : (
        <div className="p-20 text-center">Mobile View Under Construction</div>
      )}

      <AnimatePresence>
        {showNewBatchModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-background-dark/90 backdrop-blur-sm"
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-2xl w-full bg-background-dark border border-primary/20 p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display text-primary tracking-tight">Initialize Production Batch</h2>
                <button onClick={() => setShowNewBatchModal(false)} className="text-primary/40 hover:text-primary">✕</button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                {approvedQuotes.map((quote) => (
                  <button
                    key={quote.id} onClick={() => handleCreateBatch(quote)}
                    className="w-full text-left p-4 border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="text-primary font-bold">{quote.projectName}</p>
                      <p className="text-primary/60 text-xs font-mono uppercase">{quote.clientName}</p>
                    </div>
                    <ChevronRight className="text-primary/20" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(217, 197, 178, 0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}