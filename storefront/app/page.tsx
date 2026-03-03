import { motion } from "framer-motion"
import LabConfigurator from "@/components/LabConfigurator"

export default function PartnerPortal() {
  return (
    <main className="min-h-screen bg-[#0f0d0b] text-white font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 px-8 py-6 flex justify-between items-center bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary size-10 rounded-xl flex items-center justify-center">
            <span className="font-black text-xl">LV</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Craft Chocolate <span className="text-primary">B2B</span></span>
        </div>
        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-white border-b-2 border-primary pb-1">The Lab</a>
          <a href="#" className="hover:text-primary transition-colors">Logistics</a>
          <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-orange-300 border-2 border-white/20" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl font-black tracking-tighter mb-4">
              PRECISION <span className="text-primary italic">FORMULATION</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Configure industrial-grade chocolate batches with real-time capacity validation and pricing.
            </p>
          </div>

          <LabConfigurator />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <span className="size-3 bg-primary rounded-full animate-pulse" />
            Active Production Batches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "LV-402", status: "Roasting", progress: 65, origin: "Madagascar" },
              { id: "LV-405", status: "Conching", progress: 22, origin: "Ecuador" },
              { id: "LV-408", status: "Queued", progress: 0, origin: "Peru" }
            ].map(batch => (
              <div key={batch.id} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Batch ID</span>
                    <h3 className="text-2xl font-black">{batch.id}</h3>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {batch.status}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Progress</span>
                    <span>{batch.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${batch.progress}%` }} />
                  </div>
                  <div className="pt-4 flex justify-between items-center">
                    <span className="text-xs text-slate-500">{batch.origin} Origin</span>
                    <button className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">
        © 2026 Las Vegas Craft Chocolate Manufacturing LLC.
      </footer>
    </main>
  )
}
