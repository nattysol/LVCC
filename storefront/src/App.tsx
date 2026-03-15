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
const MEDUSA_ADMIN_TOKEN = import.meta.env.VITE_MEDUSA_ADMIN_TOKEN;
const MEDUSA_BASE_URL = import.meta.env.VITE_MEDUSA_BASE_URL || "https://chocolate.medusajs.app";

const getAdminHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${MEDUSA_ADMIN_TOKEN}` // This is the master key
});

const MedusaService = {
  // PULLS THE INGREDIENTS/RAW MATERIALS
  getProducts: async () => {
    try {
      const response = await fetch(`${MEDUSA_BASE_URL}/admin/products`, {
        headers: getAdminHeaders()
      });
      const { products } = await response.json();
      return products.map((p: any) => ({
        id: p.id,
        name: p.title,
        stockLevel: p.variants?.[0]?.inventory_quantity || 0,
        origin: p.metadata?.origin || "Madagascar",
      }));
    } catch (error) {
      console.error("Admin Product Fetch Failed:", error);
      return [];
    }
  },

  // PULLS CUSTOM FORMULATION QUOTES (DRAFT ORDERS)
  getQuotes: async () => {
  try {
    const response = await fetch(`${MEDUSA_BASE_URL}/admin/draft-orders`, {
      headers: getAdminHeaders()
    });
    const { draft_orders } = await response.json();
    return draft_orders.map((d: any) => ({
      id: d.id,
      displayId: d.display_id,
      clientName: `${d.cart?.customer?.first_name || ""} ${d.cart?.customer?.last_name || ""}`.trim(),
      projectName: d.metadata?.project_name || "Custom Chocolate Blend",
      recipeName: d.cart?.items?.[0]?.title || "Custom Formulation", // Map title to recipeName
      items: d.cart?.items || [], // Ensure items exists
      status: d.status,
      recipe: d.cart?.items || [] // For backward compatibility with your Batch logic
    }));
  } catch (error) {
    console.error("Draft Order Fetch Failed:", error);
    return [];
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
  const [user, setUser] = useState<any>({
  uid: "demo-tech-001",
  displayName: "DEMO_OPERATOR",
  email: "demo@lvcc.com"
});
const [isAuthReady, setIsAuthReady] = useState(true); // Set to true immediately
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

  // Ganache Timer Logic
  useEffect(() => {
    if (!activeBatch?.specifications?.isGanache) return;

    const timer = setInterval(() => {
      // For demo purposes, we'll just decrement a mock timer
      // In a real app, this would be based on a 'ganacheStartedAt' timestamp in Firestore
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

  // Medusa Data Fetching
  useEffect(() => {
    async function fetchMedusaData() {
      const products = await MedusaService.getProducts();
      setMedusaProducts(products);
      
      const orders = await MedusaService.getQuotes();
      setMedusaOrders(orders);
    }
    fetchMedusaData();
  }, []);

  // Route Detection - Redirect to manufacturing
  useEffect(() => {
    setView('manufacturing');
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auth Listener
  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);
*/
  // Firestore Connection Test
  /* useEffect(() => {
    if (!isAuthReady) return;
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if(error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    }
    testConnection();
  }, [isAuthReady]);
*/
  // Data Listeners
  useEffect(() => {
    if (!isAuthReady) return;

    const qQuotes = query(collection(db, "quotes"), orderBy("createdAt", "desc"));
    const unsubQuotes = onSnapshot(qQuotes, (snapshot) => {
      setQuotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Quote)));
    }, (err) => handleFirestoreError(err, OperationType.LIST, "quotes"));

    const qBatches = query(collection(db, "batches"), orderBy("dueDate", "asc"));
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
      unsubQuotes();
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
      
      // Save Ingredients
      for (const item of quote.recipe) {
        const ingredientId = `ing-${Math.random().toString(36).substr(2, 9)}`;
        await setDoc(doc(db, `batches/${batchId}/ingredients`, ingredientId), {
          id: ingredientId,
          batchId,
          name: item.name,
          amount: (item.percentage / 100) * 50, // Assuming 50kg batch
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

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (err) {
      console.error("Sign in failed:", err);
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

  if (!user) return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <FlaskConical className="text-primary size-10" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-display text-primary tracking-tighter">Las Vegas Craft Chocolate</h1>
          <p className="text-primary/60 font-mono text-xs uppercase tracking-[0.3em]">Manufacturing Lab Access</p>
        </div>
        <button 
          onClick={handleLogin}
          className="w-full bg-primary text-background-dark py-4 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all"
        >
          Authenticate Technician
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-dark text-cream font-sans selection:bg-accent-gold/30">
      {view === "manufacturing" ? (
        // --- MANUFACTURING VIEW (DESKTOP) ---
        <div className="flex h-screen overflow-hidden relative z-10">
          {/* Sidebar: Project Queue */}
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
                  <p className="mono-data text-[10px] opacity-40 mt-1">
                    {batch.recipeName}
                  </p>
                </div>
              ))}
                <div className="px-2 mt-6 mb-2">
                  <p className="mono-data text-[9px] opacity-40 mb-2">MEDUSA_ORDERS</p>
                </div>
                {medusaOrders.map((order) => (
                  <div 
                    key={order.id}
                    className="p-4 border-l-2 border-transparent hover:bg-white/5 cursor-pointer transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <span className="mono-data text-xs font-bold opacity-70">#{order.displayId}</span>
                      <span className="mono-data text-[10px] px-1 border border-white/20 opacity-50">
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm font-medium mt-1 opacity-80">{order.clientName}</p>
                    <p className="mono-data text-[10px] opacity-40 mt-1">{order.recipeName}</p>
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

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="h-20 border-b hairline-border flex items-center justify-between px-8 bg-espresso/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-6">
                <div>
                  <h2 className="mono-data text-lg font-bold">BATCH #{activeBatch?.id || "N/A"}</h2>
                  <p className="text-xs text-accent-gold/80 mono-data uppercase">CLIENT: {activeBatch?.clientName || "UNASSIGNED"}</p>
                </div>
                <div className="h-8 w-[0.5px] bg-accent-gold/20"></div>
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] mono-data opacity-50">HUMIDITY</span>
                    <span className="mono-data text-sm font-bold text-accent-gold">42%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] mono-data opacity-50">TEMP</span>
                    <span className="mono-data text-sm font-bold text-accent-gold">21°C</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 border hairline-border">
                  <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="mono-data text-[10px]">CORE_SYNC_ACTIVE</span>
                </div>
                <button 
                  onClick={() => setShowNewBatchModal(true)}
                  className="bg-primary text-cream px-6 py-2 mono-data text-xs font-bold tracking-widest hover:brightness-110 transition-all"
                >
                  NEW_BATCH
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-12 gap-8 custom-scrollbar">
              {/* Left Column: Master Batch Record */}
              <div className="col-span-4 space-y-8">
                <section>
                  <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">MASTER_BATCH_RECORD</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b hairline-border pb-1">
                      <span className="text-xs opacity-60">Run Size</span>
                      <span className="mono-data text-lg">{activeBatch?.specifications?.runSizeKg || 0}kg</span>
                    </div>
                    <div className="flex justify-between items-end border-b hairline-border pb-1">
                      <span className="text-xs opacity-60">Target Particle</span>
                      <span className="mono-data text-lg">{activeBatch?.specifications?.targetParticleSizeMicrons || 0} Microns</span>
                    </div>
                    <div className="flex justify-between items-end border-b hairline-border pb-1">
                      <span className="text-xs opacity-60">Tempering Curve</span>
                      <span className="mono-data text-lg">{activeBatch?.specifications?.temperingCurve || "N/A"}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">RESOURCES</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {activeBatch?.resources?.map((res, i) => (
                      <div key={i} className="p-3 border hairline-border bg-white/5">
                        <p className="text-[10px] opacity-50 mb-1">RESOURCE_{i+1}</p>
                        <p className="mono-data text-xs font-bold">{res}</p>
                      </div>
                    ))}
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
                          ing.verified 
                            ? "hairline-border hover:bg-white/5" 
                            : "border-primary/50 bg-primary/5 hover:bg-primary/10"
                        )}
                      >
                        <div>
                          <p className="text-xs font-medium">{ing.name}</p>
                          <p className="mono-data text-[10px] opacity-40">LOT: {ing.lotNumber || "PENDING"}</p>
                          {medusaProducts.find(p => p.name === ing.name) && (
                            <p className="mono-data text-[8px] text-accent-gold/60">MEDUSA_STOCK: {medusaProducts.find(p => p.name === ing.name).stockLevel}kg</p>
                          )}
                        </div>
                        <div className={cn(
                          "flex items-center gap-1",
                          ing.verified ? "text-accent-gold" : "text-primary"
                        )}>
                          {ing.verified ? (
                            <>
                              <CheckCircle className="size-3" />
                              <span className="mono-data text-[9px] font-bold">VERIFIED</span>
                            </>
                          ) : (
                            <>
                              <Scan className="size-3" />
                              <span className="mono-data text-[9px] font-bold">SCAN_REQ</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Ganache Module Alert */}
                {activeBatch?.specifications?.isGanache && (
                  <div className="border border-accent-gold p-4 bg-accent-gold/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1 bg-accent-gold text-espresso mono-data text-[8px] font-bold">ALERT</div>
                    <h4 className="mono-data text-xs font-bold text-accent-gold mb-2">GANACHE_PROTOCOL_ACTIVE</h4>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] opacity-60">SHELF-LIFE TIMER</p>
                        <p className="mono-data text-xl text-accent-gold">EXPIRY: {ganacheTimeLeft}</p>
                      </div>
                      <Clock className="text-accent-gold size-8 opacity-20" />
                    </div>
                  </div>
                )}
              </div>

              {/* Center Column: Workflow Engine */}
              <div className="col-span-5 space-y-6">
                <h3 className="mono-data text-xs font-bold text-accent-gold mb-6 flex items-center gap-2">
                  <Network className="size-3" />
                  WORKFLOW_ENGINE_V4.2
                </h3>
                <div className="relative space-y-4">
                  {stages.map((stage, idx) => (
                    <div key={stage.id} className="flex gap-4 items-start">
                      <div className={cn(
                        "w-12 mono-data text-[10px] pt-1",
                        stage.status === 'active' ? "text-accent-gold font-bold" : "opacity-40"
                      )}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      <div className={cn(
                        "flex-1 p-4 border transition-all",
                        stage.status === 'active' 
                          ? "border-2 border-accent-gold bg-accent-gold/5 p-6" 
                          : stage.status === 'completed'
                            ? "hairline-border bg-white/5 opacity-50"
                            : "hairline-border border-dashed opacity-30"
                      )}>
                        <div className="flex justify-between items-center">
                          <span className={cn(
                            "mono-data text-sm tracking-[0.2em]",
                            stage.status === 'active' && "font-bold text-accent-gold"
                          )}>
                            {stage.name}
                          </span>
                          
                          {stage.status === 'active' ? (
                            <span className="mono-data text-xs text-accent-gold">ACTIVE</span>
                          ) : stage.status === 'completed' ? (
                            <span className="mono-data text-[10px] px-2 py-0.5 border hairline-border">COMPLETED</span>
                          ) : (
                            <Lock className="size-3" />
                          )}
                        </div>

                        {stage.status === 'active' && (
                          <div className="mt-4">
                            <div className="w-full bg-white/10 h-1 mb-4">
                              <div className="bg-accent-gold h-full animate-pulse" style={{ width: '45%' }}></div>
                            </div>
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-[10px] opacity-50 mono-data">ELAPSED_TIME</p>
                                <p className="mono-data text-lg">02:44:12</p>
                              </div>
                              <div className="flex gap-2">
                                <button className="size-8 border hairline-border flex items-center justify-center hover:bg-white/10">
                                  <Pause className="size-3" />
                                </button>
                                <button className="size-8 border hairline-border flex items-center justify-center hover:bg-white/10">
                                  <RotateCw className="size-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Quality/Inputs */}
              <div className="col-span-3 space-y-6">
                <h3 className="mono-data text-xs font-bold text-accent-gold mb-4 border-b hairline-border pb-2">QUALITY_ENVIRONMENTAL</h3>
                <div className="space-y-6">
                  <div>
                    <label className="mono-data text-[10px] block mb-2 opacity-60">VISCOSITY (CP)</label>
                    <input 
                      className="w-full bg-espresso border hairline-border mono-data text-lg px-4 py-3 focus:border-accent-gold outline-none text-accent-gold transition-all" 
                      type="number" 
                      placeholder="0"
                      onChange={(e) => {
                        const activeStage = stages.find(s => s.status === 'active');
                        if (activeStage) updateStageQuality(activeStage.id, { viscosity: Number(e.target.value) });
                      }}
                    />
                  </div>
                  <div>
                    <label className="mono-data text-[10px] block mb-2 opacity-60">TEMPER SLOPE</label>
                    <input 
                      className="w-full bg-espresso border hairline-border mono-data text-lg px-4 py-3 focus:border-accent-gold outline-none text-accent-gold/50 transition-all" 
                      type="number" 
                      placeholder="0.00"
                      onChange={(e) => {
                        const activeStage = stages.find(s => s.status === 'active');
                        if (activeStage) updateStageQuality(activeStage.id, { temperSlope: Number(e.target.value) });
                      }}
                    />
                  </div>
                  <div>
                    <label className="mono-data text-[10px] block mb-2 opacity-60">YIELD CALCULATION (KG)</label>
                    <div className="flex items-center gap-4">
                      <input 
                        className="flex-1 bg-espresso border hairline-border mono-data text-lg px-4 py-3 focus:border-accent-gold outline-none text-accent-gold" 
                        type="number" 
                        placeholder="0.00"
                        onChange={(e) => {
                          const activeStage = stages.find(s => s.status === 'active');
                          if (activeStage) updateStageQuality(activeStage.id, { outputWeight: Number(e.target.value) });
                        }}
                      />
                      <span className="mono-data text-xs">KG</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="p-4 border hairline-border border-accent-gold/30 bg-white/5 space-y-3">
                      <div className="flex justify-between text-[10px] mono-data">
                        <span>EFFICIENCY_INDEX</span>
                        <span className="text-accent-gold">98.2%</span>
                      </div>
                      <div className="w-full bg-white/5 h-0.5">
                        <div className="bg-primary h-full" style={{ width: '98.2%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h4 className="mono-data text-[10px] opacity-40">RECENT_LOGS</h4>
                    <div className="space-y-4 max-h-52 overflow-y-auto custom-scrollbar">
                      {logs.slice(0, 5).map((log) => (
                        <div key={log.id} className="text-[10px] leading-relaxed">
                          <span className="mono-data opacity-40 mr-2">{new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          <span className={cn(
                            "font-bold mr-2",
                            log.type === 'error' ? "text-red-400" : "text-accent-gold"
                          )}>[{log.type.toUpperCase()}]</span>
                          <span className="opacity-70">{log.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Footer Actions */}
            <footer className="mt-auto border-t hairline-border p-6 bg-espresso/80 backdrop-blur-md flex justify-between items-center z-40">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary mono-data text-xs font-bold tracking-widest hover:bg-primary/10 transition-colors">
                  <AlertTriangle className="size-3" />
                  LOG QUALITY ISSUE
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border hairline-border mono-data text-xs font-bold tracking-widest hover:bg-white/5 transition-colors">
                  <FileText className="size-3" />
                  ADD SHIFT NOTE
                </button>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="mono-data text-[10px] opacity-40">CURRENT_OPERATOR</p>
                  <p className="mono-data text-xs font-bold">{user.displayName || 'TECH_ID_842'}</p>
                </div>
                <button 
                  onClick={handleCompleteStage}
                  className="bg-accent-gold text-espresso px-10 py-3 mono-data text-sm font-bold tracking-[0.2em] hover:brightness-110 shadow-lg shadow-accent-gold/10 transition-all active:scale-95"
                >
                  COMPLETE STAGE
                </button>
              </div>
            </footer>
          </main>
        </div>
      ) : (
        // --- MOBILE VIEW ---
        <div className="relative flex min-h-screen w-full flex-col bg-espresso overflow-x-hidden">
          {/* Batch Header */}
          <header className="border-b hairline-border bg-espresso/80 backdrop-blur-md p-6 pt-10 sticky top-0 z-30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                <span className="mono-data text-[10px] tracking-[0.2em] text-accent-gold">LIVE_PROD_A</span>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setShowNewBatchModal(true)} className="text-accent-gold">
                  <Plus className="size-5" />
                </button>
                <MoreVertical className="text-accent-gold size-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl font-bold tracking-tighter text-white mono-data">
                #{activeBatch?.id.split('-')[1] || activeBatch?.id || "N/A"}
              </h1>
            </div>
            <p className="mono-data text-[10px] tracking-[0.3em] mt-2 text-accent-gold/60">
              {activeBatch?.clientName || "INTERNAL"} // {activeBatch?.recipeName}
            </p>
          </header>

          {/* Quick Stats */}
          <section className="grid grid-cols-3 border-b hairline-border bg-white/5">
            <div className="p-4 border-r hairline-border text-center">
              <p className="mono-data text-[8px] opacity-40 mb-1">HUMIDITY</p>
              <p className="mono-data text-sm font-bold text-accent-gold">42%</p>
            </div>
            <div className="p-4 border-r hairline-border text-center">
              <p className="mono-data text-[8px] opacity-40 mb-1">TEMP</p>
              <p className="mono-data text-sm font-bold text-accent-gold">21°C</p>
            </div>
            <div className="p-4 text-center">
              <p className="mono-data text-[8px] opacity-40 mb-1">YIELD</p>
              <p className="mono-data text-sm font-bold text-accent-gold">98.2%</p>
            </div>
          </section>

          {/* Stages List */}
          <main className="flex-1 flex flex-col p-4 gap-4 bg-espresso pb-32">
            <h3 className="mono-data text-[10px] font-bold text-accent-gold/40 mb-2">WORKFLOW_SEQUENCE</h3>
            {stages.map((stage) => (
              <StageButton 
                key={stage.id}
                stage={stage}
                isActive={stage.status === 'active'}
                isCompleted={stage.status === 'completed'}
                onClick={() => {}}
              />
            ))}
          </main>

          {/* Footer Action */}
          <footer className="p-6 bg-espresso/90 backdrop-blur-xl border-t hairline-border sticky bottom-20 z-10">
            <button 
              onClick={handleCompleteStage}
              className="w-full bg-accent-gold py-5 text-espresso font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-lg shadow-accent-gold/10"
            >
              <CheckCircle2 className="size-5" />
              COMPLETE_STAGE
            </button>
          </footer>

          {/* Navigation Bar */}
          <nav className="flex border-t hairline-border bg-espresso px-4 py-4 sticky bottom-0 z-40">
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-accent-gold">
              <Archive className="size-5" />
              <p className="mono-data text-[8px] font-bold">BATCHES</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-accent-gold/30">
              <Layers className="size-5" />
              <p className="mono-data text-[8px] font-bold">INVENTORY</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-accent-gold/30">
              <FileText className="size-5" />
              <p className="mono-data text-[8px] font-bold">LOGS</p>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-accent-gold/30">
              <Settings className="size-5" />
              <p className="mono-data text-[8px] font-bold">CONFIG</p>
            </button>
          </nav>
        </div>
      )}

      {/* New Batch Modal */}
      <AnimatePresence>
        {showNewBatchModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100] flex items-center justify-center p-4 bg-background-dark/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-2xl w-full bg-background-dark border border-primary/20 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <FlaskConical className="text-primary size-6" />
                  <h2 className="text-2xl font-display text-primary tracking-tight">Initialize Production Batch</h2>
                </div>
                <button 
                  onClick={() => setShowNewBatchModal(false)}
                  className="text-primary/40 hover:text-primary transition-colors"
                >
                  <MoreVertical className="rotate-90" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.3em] mb-4">Select Approved Quote (Medusa.js)</p>
                  <div className="space-y-2 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
                    {approvedQuotes.map((quote) => (
                      <button
                        key={quote.id}
                        onClick={() => handleCreateBatch(quote)}
                        disabled={isCreatingBatch}
                        className="w-full text-left p-4 border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all group flex items-center justify-between"
                      >
                        <div>
                          <p className="text-primary font-bold tracking-tight">{quote.projectName}</p>
                          <p className="text-primary/60 text-xs font-mono uppercase tracking-widest mt-1">
                            {quote.clientName} • {quote.recipeName}
                          </p>
                          <div className="flex gap-3 mt-2">
                            <span className="text-[9px] bg-primary/10 text-primary/60 px-1.5 py-0.5 rounded border border-primary/10">
                              {quote.items.length} ITEMS
                            </span>
                            <span className="text-[9px] bg-primary/10 text-primary/60 px-1.5 py-0.5 rounded border border-primary/10">
                              {quote.email}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="text-primary/20 group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                    {approvedQuotes.length === 0 && (
                      <div className="p-8 text-center border border-dashed border-primary/20">
                        <p className="text-primary/40 font-mono text-xs uppercase tracking-widest">No approved quotes found in Medusa</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {isCreatingBatch && (
                <div className="mt-8 flex items-center gap-4 text-primary">
                  <div className="size-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="font-mono text-[10px] uppercase tracking-widest">Synchronizing with Medusa & Firestore...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217, 197, 178, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 197, 178, 0.2);
        }
      `}</style>
    </div>
  );
}
