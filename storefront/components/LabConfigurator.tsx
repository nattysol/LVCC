"use client"

import { useState, useOptimistic, useTransition } from "react"
import * as Slider from "@radix-ui/react-slider"
import { motion, AnimatePresence } from "framer-motion"
import { Beaker, Calculator, CheckCircle2, AlertCircle } from "lucide-react"
import { submitInquiry } from "@/app/actions"
import { FormulationSchema } from "@/lib/validations"

export default function LabConfigurator() {
  const [beanId, setBeanId] = useState("bean_1")
  const [roast, setRoast] = useState("medium")
  const [inclusionPct, setInclusionPct] = useState(5)
  const [quantity, setQuantity] = useState(500)
  
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null)

  // Real-time price estimation logic
  const basePrice = 5.50
  const estimatedPrice = (basePrice + (inclusionPct * 0.15)) * quantity

  const [optimisticPrice, setOptimisticPrice] = useOptimistic(
    estimatedPrice,
    (state, newQuantity: number) => (basePrice + (inclusionPct * 0.15)) * newQuantity
  )

  const handleSubmit = async () => {
    const data = {
      beanId,
      roastProfile: roast as any,
      inclusions: [{ id: "inc_1", percentage: inclusionPct }],
      quantity
    }

    const validation = FormulationSchema.safeParse(data)
    if (!validation.success) {
      setResult({ error: validation.error.errors[0].message })
      return
    }

    startTransition(async () => {
      const res = await submitInquiry(data as any)
      setResult(res)
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="glass-morphic bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary/20 rounded-2xl text-primary">
            <Beaker className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Formulation Lab</h2>
            <p className="text-slate-400">Industrial Batch Configurator v2.6</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Bean Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Bean Origin</label>
              <select 
                value={beanId}
                onChange={(e) => setBeanId(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              >
                <option value="bean_1">Madagascar Sambirano</option>
                <option value="bean_2">Ecuador Arriba Nacional</option>
              </select>
            </div>

            {/* Inclusion Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Inclusion Capacity</label>
                <span className={`text-sm font-mono font-bold ${inclusionPct > 15 ? 'text-red-500' : 'text-primary'}`}>
                  {inclusionPct}% / 15%
                </span>
              </div>
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={[inclusionPct]}
                max={20}
                step={1}
                onValueChange={([val]) => setInclusionPct(val)}
              >
                <Slider.Track className="bg-white/10 relative grow rounded-full h-[3px]">
                  <Slider.Range className="absolute bg-primary rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:scale-110 transition-transform focus:outline-none" />
              </Slider.Root>
              {inclusionPct > 15 && (
                <p className="text-[10px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Exceeds machine capacity limits
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Batch Quantity (Units)</label>
              <input 
                type="number"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0
                  setQuantity(val)
                  setOptimisticPrice(val)
                }}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <p className="text-[10px] text-slate-500 italic">MOQ: 500 units per formulation</p>
            </div>
          </div>

          <div className="bg-black/40 rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <Calculator className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Price Estimation</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Base Formulation</span>
                  <span className="font-mono">${(basePrice * quantity).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Inclusion Premium</span>
                  <span className="font-mono">${(inclusionPct * 0.15 * quantity).toLocaleString()}</span>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">Total Estimate</span>
                  <motion.span 
                    key={optimisticPrice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-primary font-mono"
                  >
                    ${optimisticPrice.toLocaleString()}
                  </motion.span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isPending || inclusionPct > 15 || quantity < 500}
              className="w-full mt-8 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              {isPending ? "Processing..." : "Submit Inquiry"}
              <CheckCircle2 className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {result && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mt-4 p-4 rounded-xl text-sm font-bold flex items-center gap-2 ${result.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                >
                  {result.success ? "Inquiry submitted successfully!" : result.error}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
