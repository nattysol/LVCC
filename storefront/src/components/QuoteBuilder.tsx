import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus, 
  Trash2, 
  Calculator, 
  Send, 
  ChevronRight, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { db, auth } from '../firebase';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Ingredient, Quote } from '../types';

interface QuoteBuilderProps {
  onBack: () => void;
  products: any[];
}

export default function QuoteBuilder({ onBack, products }: QuoteBuilderProps) {
  const [recipe, setRecipe] = useState<{ ingredientId: string; name: string; percentage: number; pricePerKg: number }[]>([]);
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalPercentage = recipe.reduce((sum, item) => sum + item.percentage, 0);
  const estimatedCostPerKg = recipe.reduce((sum, item) => sum + (item.pricePerKg * (item.percentage / 100)), 0);

  const addIngredient = (ing: any) => {
    if (recipe.find(r => r.ingredientId === ing.id)) return;
    setRecipe([...recipe, { ingredientId: ing.id, name: ing.name, percentage: 0, pricePerKg: ing.pricePerKg }]);
  };

  const removeIngredient = (id: string) => {
    setRecipe(recipe.filter(r => r.ingredientId !== id));
  };

  const updatePercentage = (id: string, value: number) => {
    setRecipe(recipe.map(r => r.ingredientId === id ? { ...r, percentage: Math.max(0, Math.min(100, value)) } : r));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (totalPercentage !== 100) {
      setError("Total percentage must equal 100%");
      return;
    }
    if (!auth.currentUser) {
      setError("You must be logged in to submit a quote.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const quoteData: Quote = {
        uid: auth.currentUser.uid,
        clientName,
        projectName,
        email,
        recipe: recipe.map(r => ({
          ingredientId: r.ingredientId,
          name: r.name,
          percentage: r.percentage
        })),
        totalCostEstimate: estimatedCostPerKg,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'quotes'), {
        ...quoteData,
        createdAt: serverTimestamp()
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting quote:", err);
      setError("Failed to submit quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background-dark text-primary flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <div className="flex justify-center">
            <CheckCircle2 className="w-20 h-20 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-display italic">Formulation Submitted</h2>
          <p className="font-mono text-sm text-primary/60 uppercase tracking-widest">
            Your custom formulation for "{projectName}" has been sent to our master chocolatiers. 
            We will review the technical feasibility and cost structure and contact you at {email} within 48 hours.
          </p>
          <button 
            onClick={onBack}
            className="w-full border border-primary py-4 font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-background-dark transition-all"
          >
            Return to Storefront
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark text-primary p-4 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Formulator */}
        <div className="space-y-8">
          <header className="space-y-2">
            <button onClick={onBack} className="text-primary/40 hover:text-primary flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors">
              <ChevronRight className="rotate-180 w-4 h-4" /> Back
            </button>
            <h1 className="text-5xl font-display italic">Master Formulator</h1>
            <p className="font-mono text-xs text-primary/40 uppercase tracking-widest">Atelier v2.4 // Custom Product Engine</p>
          </header>

          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-primary/10 pb-4">
              <h2 className="font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                <Calculator className="w-4 h-4" /> Recipe Composition
              </h2>
              <div className={cn(
                "font-mono text-sm px-3 py-1 rounded-full border",
                totalPercentage === 100 ? "border-emerald-500/50 text-emerald-500 bg-emerald-500/10" : "border-primary/20 text-primary/60"
              )}>
                {totalPercentage}% / 100%
              </div>
            </div>

            <div className="space-y-4 min-h-[300px]">
              <AnimatePresence mode="popLayout">
                {recipe.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-primary/20 border-2 border-dashed border-primary/10 rounded-2xl p-12 text-center"
                  >
                    <Info className="w-8 h-8 mb-4" />
                    <p className="font-mono text-xs uppercase tracking-widest">Select ingredients from the library to begin your formulation</p>
                  </motion.div>
                ) : (
                  recipe.map((item) => (
                    <motion.div 
                      key={item.ingredientId}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center gap-6"
                    >
                      <div className="flex-1">
                        <h3 className="font-mono text-sm uppercase tracking-tight">{item.name}</h3>
                        <p className="text-[10px] text-primary/40 font-mono uppercase tracking-widest">${item.pricePerKg.toFixed(2)} / KG</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-background-dark border border-primary/20 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updatePercentage(item.ingredientId, item.percentage - 1)}
                            className="p-2 hover:bg-primary/10 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <input 
                            type="number" 
                            value={item.percentage}
                            onChange={(e) => updatePercentage(item.ingredientId, parseInt(e.target.value) || 0)}
                            className="w-12 bg-transparent text-center font-mono text-sm focus:outline-none"
                          />
                          <button 
                            onClick={() => updatePercentage(item.ingredientId, item.percentage + 1)}
                            className="p-2 hover:bg-primary/10 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono text-sm w-8">%</span>
                        <button 
                          onClick={() => removeIngredient(item.ingredientId)}
                          className="text-primary/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-sm uppercase tracking-widest border-b border-primary/10 pb-4">Ingredient Library</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((ing) => (
                <button
                  key={ing.id}
                  onClick={() => addIngredient(ing)}
                  disabled={!!recipe.find(r => r.ingredientId === ing.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border transition-all text-left group",
                    recipe.find(r => r.ingredientId === ing.id)
                      ? "bg-primary/5 border-primary/10 opacity-50 cursor-not-allowed"
                      : "bg-transparent border-primary/20 hover:border-primary hover:bg-primary/5"
                  )}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary/40 mb-1">{ing.type}</p>
                    <p className="font-mono text-xs uppercase tracking-tight">{ing.name}</p>
                  </div>
                  <Plus className="w-4 h-4 text-primary/20 group-hover:text-primary" />
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Summary & Submission */}
        <div className="lg:sticky lg:top-12 h-fit space-y-8">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 space-y-8">
            <h2 className="font-mono text-sm uppercase tracking-widest border-b border-primary/10 pb-4">Project Summary</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <p className="font-mono text-xs text-primary/40 uppercase tracking-widest">Estimated Cost</p>
                <div className="text-right">
                  <p className="text-4xl font-display italic">${estimatedCostPerKg.toFixed(2)}</p>
                  <p className="font-mono text-[10px] text-primary/40 uppercase tracking-widest">Per Kilogram (Excl. Labor)</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-primary/10">
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                  <span className="text-primary/40">Base Cacao</span>
                  <span>{recipe.filter(r => products.find(bi => bi.id === r.ingredientId)?.type === 'base').reduce((s, r) => s + r.percentage, 0)}%</span>
                </div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                  <span className="text-primary/40">Sweeteners</span>
                  <span>{recipe.filter(r => products.find(bi => bi.id === r.ingredientId)?.type === 'sweetener').reduce((s, r) => s + r.percentage, 0)}%</span>
                </div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest">
                  <span className="text-primary/40">Inclusions</span>
                  <span>{recipe.filter(r => products.find(bi => bi.id === r.ingredientId)?.type === 'inclusion').reduce((s, r) => s + r.percentage, 0)}%</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-8 border-t border-primary/10">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Project Name</label>
                <input 
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Signature Dark 72%"
                  className="w-full bg-background-dark border border-primary/20 rounded-xl px-4 py-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Client / Company</label>
                <input 
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Name or Business"
                  className="w-full bg-background-dark border border-primary/20 rounded-xl px-4 py-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-primary/40">Contact Email</label>
                <input 
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full bg-background-dark border border-primary/20 rounded-xl px-4 py-3 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] uppercase tracking-widest bg-red-500/10 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting || totalPercentage !== 100}
                className={cn(
                  "w-full py-5 rounded-2xl font-mono text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3",
                  totalPercentage === 100 
                    ? "bg-primary text-background-dark hover:bg-primary/90" 
                    : "bg-primary/10 text-primary/40 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    Submit for Approval <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {totalPercentage !== 100 && (
                <p className="text-center font-mono text-[10px] text-primary/40 uppercase tracking-widest">
                  Composition must equal 100% to submit
                </p>
              )}
            </form>
          </div>

          <div className="p-6 border border-primary/10 rounded-3xl flex gap-4 items-start">
            <Info className="w-5 h-5 text-primary/40 shrink-0" />
            <p className="font-mono text-[10px] text-primary/40 uppercase leading-relaxed tracking-widest">
              Pricing is an estimate based on current raw material costs. Final quote will include labor, packaging, and shipping. 
              Submitting this form creates a technical draft for our team to review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
