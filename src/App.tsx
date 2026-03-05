"use client";

import React, { useState, useEffect } from 'react';
import { 
  Factory, 
  Flame, 
  Wind, 
  Thermometer, 
  Package, 
  CheckCircle2, 
  Timer, 
  Beaker, 
  Database,
  ChevronRight,
  AlertCircle,
  Settings,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { medusa } from '../storefront/lib/medusa';
import { Batch, Ingredient } from './types';

const STAGES = [
  { id: 'roasting', icon: Flame, label: 'Roasting', color: 'text-orange-500' },
  { id: 'conching', icon: Wind, label: 'Conching', color: 'text-blue-400' },
  { id: 'tempering', icon: Thermometer, label: 'Tempering', color: 'text-emerald-400' },
  { id: 'packaging', icon: Package, label: 'Packaging', color: 'text-zinc-400' },
  { id: 'completed', icon: CheckCircle2, label: 'Completed', color: 'text-primary' }
];

export default function App() {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [activeTab, setActiveTab] = useState<'production' | 'formulations' | 'pantry'>('production');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // In a real Medusa v2 setup, these would be custom endpoints or module calls
      // For this storefront, we'll use the SDK to hit the store endpoints
      const [batchesRes, ingredientsRes] = await Promise.all([
        medusa.client.fetch('/store/batches'), // Custom endpoint in Medusa
        medusa.client.fetch('/store/ingredients') // Custom endpoint in Medusa
      ]);
      
      setBatches(batchesRes as Batch[]);
      setIngredients((ingredientsRes as any).ingredients as Ingredient[]);
    } catch (error) {
      console.error('Error fetching data from Medusa:', error);
      // Fallback for demo if backend isn't fully ready
      setBatches([]);
      setIngredients([]);
    } finally {
      setLoading(false);
    }
  };

  const updateBatchStatus = async (id: number, status: string) => {
    try {
      await medusa.client.fetch(`/store/batches/${id}/status`, {
        method: 'POST',
        body: { status }
      });
      fetchData();
    } catch (error) {
      console.error('Error updating batch status:', error);
    }
  };

  const activeBatch = batches.find(b => b.status !== 'completed');

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <Factory className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase">Factory Floor Controller</h1>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-medium text-primary/80 uppercase tracking-widest">Medusa v2.5.1 Active</span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
          {(['production', 'formulations', 'pantry'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab 
                  ? 'bg-primary text-zinc-950' 
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-zinc-100 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold">Kyle N.</p>
              <p className="text-[10px] text-zinc-500 uppercase">Master Chocolatier</p>
            </div>
            <div className="size-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'production' && (
            <motion.div
              key="production"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Active Batch Card */}
              {activeBatch ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 skeuo-lifted relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20 pulse-glow">
                          Active Production
                        </span>
                      </div>
                      
                      <div className="mb-8">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1 block">Batch Identification</span>
                        <h2 className="text-4xl font-black tracking-tighter">#{activeBatch.batch_number}</h2>
                        <p className="text-zinc-400 font-medium mt-1">{activeBatch.formulation_name}</p>
                      </div>

                      <div className="grid grid-cols-5 gap-4 mb-12">
                        {STAGES.map((stage, idx) => {
                          const isPast = STAGES.findIndex(s => s.id === activeBatch.status) > idx;
                          const isCurrent = activeBatch.status === stage.id;
                          const Icon = stage.icon;
                          
                          return (
                            <div key={stage.id} className="relative flex flex-col items-center">
                              {idx < STAGES.length - 1 && (
                                <div className={`absolute top-6 left-1/2 w-full h-0.5 ${isPast ? 'bg-primary' : 'bg-zinc-800'}`} />
                              )}
                              <div className={`relative z-10 size-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                                isCurrent ? 'bg-primary text-zinc-950 shadow-[0_0_20px_rgba(0,255,64,0.4)]' :
                                isPast ? 'bg-primary/20 text-primary border border-primary/30' :
                                'bg-zinc-800 text-zinc-600 border border-white/5'
                              }`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <span className={`mt-3 text-[10px] font-bold uppercase tracking-widest ${isCurrent ? 'text-primary' : 'text-zinc-500'}`}>
                                {stage.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between p-6 bg-zinc-950/50 rounded-xl border border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-900 rounded-lg border border-white/10">
                            <Timer className="w-6 h-6 text-zinc-400" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stage Duration</p>
                            <p className="text-2xl font-mono font-bold">14:20:45</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-white/10">
                            Pause
                          </button>
                          <button 
                            onClick={() => {
                              const nextIdx = STAGES.findIndex(s => s.id === activeBatch.status) + 1;
                              if (nextIdx < STAGES.length) {
                                updateBatchStatus(activeBatch.id, STAGES[nextIdx].id);
                              }
                            }}
                            className="px-6 py-2 bg-primary hover:bg-primary/90 text-zinc-950 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
                          >
                            Advance Stage
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Process Metrics</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-sm text-zinc-400">Motor Load</span>
                            <span className="text-sm font-mono font-bold text-primary">78%</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[78%]" />
                          </div>
                          <div className="flex justify-between items-end">
                            <span className="text-sm text-zinc-400">Temperature</span>
                            <span className="text-sm font-mono font-bold text-orange-400">55.2°C</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-400 w-[65%]" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Quality Assurance</h3>
                        <div className="flex items-center gap-4">
                          <div className="size-16 rounded-full border-4 border-primary/20 flex items-center justify-center">
                            <span className="text-xl font-black text-primary">98</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold">Consistency Index</p>
                            <p className="text-xs text-zinc-500">Within target range</p>
                          </div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-all">
                          Log Sample Data
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-6">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl flex flex-col h-full">
                      <div className="p-4 border-b border-white/10 flex items-center justify-between">
                        <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                          <Database className="w-4 h-4 text-primary" />
                          Audit Log
                        </h3>
                        <span className="text-[10px] font-bold text-zinc-500">LIVE</span>
                      </div>
                      <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[500px] font-mono">
                        <div className="relative pl-4 border-l border-primary/30">
                          <span className="text-[10px] text-zinc-500 block mb-1">10:45 AM</span>
                          <p className="text-xs text-zinc-300">Stage: <span className="text-primary">Conching</span> resumed by Kyle N.</p>
                        </div>
                        <div className="relative pl-4 border-l border-orange-500/30">
                          <span className="text-[10px] text-zinc-500 block mb-1">10:30 AM</span>
                          <p className="text-xs text-zinc-300">System: <span className="text-orange-500">Paused</span> for belt recalibration.</p>
                        </div>
                        <div className="relative pl-4 border-l border-primary/30">
                          <span className="text-[10px] text-zinc-500 block mb-1">08:00 AM</span>
                          <p className="text-xs text-zinc-300">Stage: <span className="text-primary">Roasting</span> completed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-20 flex flex-col items-center justify-center text-center">
                  <div className="p-6 bg-zinc-800 rounded-full mb-6">
                    <Package className="w-12 h-12 text-zinc-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No Active Production</h3>
                  <p className="text-zinc-500 max-w-md">All batches are currently completed or queued. Start a new batch from the formulations tab.</p>
                </div>
              )}

              {/* Batch History */}
              <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-xs font-black uppercase tracking-widest">Production History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-zinc-950 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      <tr>
                        <th className="p-4">Batch ID</th>
                        <th className="p-4">Formulation</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Started</th>
                        <th className="p-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {batches.length > 0 ? batches.map(batch => (
                        <tr key={batch.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-mono text-sm font-bold text-zinc-300">#{batch.batch_number}</td>
                          <td className="p-4 text-sm text-zinc-400">{batch.formulation_name}</td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                              batch.status === 'completed' ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-500'
                            }`}>
                              {batch.status}
                            </span>
                          </td>
                          <td className="p-4 text-xs text-zinc-500">{new Date(batch.started_at).toLocaleDateString()}</td>
                          <td className="p-4">
                            <button className="p-1 hover:text-primary transition-colors">
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-zinc-600 italic text-sm">No production history found on Medusa.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'formulations' && (
            <motion.div
              key="formulations"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="md:col-span-1 bg-zinc-900 border border-white/10 rounded-2xl p-6 h-fit sticky top-24">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-primary" />
                  Lab Configurator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Recipe Name</label>
                    <input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Dark Sea Salt" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Cocoa Percentage</label>
                    <div className="flex items-center gap-4">
                      <input type="range" className="flex-1 accent-primary" min="30" max="100" />
                      <span className="text-sm font-mono font-bold text-primary">72%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Inclusion Capacity (Max 15%)</label>
                    <div className="flex items-center gap-4">
                      <input type="range" className="flex-1 accent-primary" min="0" max="15" />
                      <span className="text-sm font-mono font-bold text-primary">8%</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-primary text-zinc-950 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                    Submit Workflow Inquiry
                  </button>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ingredients.filter(i => i.type === 'bean').map(bean => (
                  <div key={bean.id} className="bg-zinc-900 border border-white/10 rounded-2xl p-6 group hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Flame className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">Medusa Managed</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{bean.name}</h4>
                    <p className="text-xs text-zinc-500 mb-6">{bean.origin} • Premium Grade</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="size-6 rounded-full border-2 border-zinc-900 bg-zinc-800" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">Select Base</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pantry' && (
            <motion.div
              key="pantry"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {ingredients.length > 0 ? ingredients.map(ing => (
                  <div key={ing.id} className="bg-zinc-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Database className="w-12 h-12" />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{ing.type}</span>
                    <h4 className="text-lg font-bold mb-1">{ing.name}</h4>
                    <p className="text-xs text-zinc-500 mb-6">{ing.origin}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase">
                        <span className="text-zinc-500">Stock Level</span>
                        <span className={ing.stock_level < 100 ? 'text-orange-500' : 'text-primary'}>
                          {ing.stock_level} kg
                        </span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${ing.stock_level < 100 ? 'bg-orange-500' : 'bg-primary'}`} 
                          style={{ width: `${Math.min((ing.stock_level / 1000) * 100, 100)}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-4 p-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
                    <p className="text-zinc-600 italic">No ingredients found in Medusa Pantry.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-zinc-900/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Environment</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold">22.4°C</span>
              <span className="text-[10px] text-primary">OPTIMAL</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Humidity</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold">42%</span>
              <span className="text-[10px] text-primary">STABLE</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-600/10 hover:bg-red-600/20 text-red-500 font-black px-6 py-2 rounded-lg flex items-center gap-2 border border-red-500/30 transition-all animate-pulse">
            <AlertCircle className="w-4 h-4" />
            EMERGENCY STOP
          </button>
          <div className="hidden sm:flex items-center gap-4 text-zinc-500">
            <span className="text-[10px] font-bold uppercase">Medusa v2.5.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
