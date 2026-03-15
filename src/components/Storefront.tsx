import React from 'react';
import { motion } from 'motion/react';

interface StorefrontProps {
  onBeginFormulation: () => void;
}

const Storefront: React.FC<StorefrontProps> = ({ onBeginFormulation }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col arch-grid bg-background-dark text-slate-100 selection:bg-primary selection:text-background-dark">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md border-b hairline border-primary/20 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
            <h2 className="font-display text-xl font-bold tracking-widest text-primary uppercase">Atelier V.04</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10 font-mono text-[10px] tracking-[0.2em] uppercase text-primary/70">
            <a className="hover:text-primary transition-colors" href="#">Collections</a>
            <a className="hover:text-primary transition-colors" href="#">Services</a>
            <a className="hover:text-primary transition-colors" href="#">Sourcing</a>
            <a className="hover:text-primary transition-colors" href="#">The Lab</a>
          </nav>
          <div className="flex items-center gap-6">
            <button 
              onClick={onBeginFormulation}
              className="hidden sm:block font-mono text-[10px] tracking-widest uppercase border border-primary/40 px-5 py-2 hover:bg-primary hover:text-background-dark transition-all"
            >
              Begin Formulation
            </button>
            <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-20 pt-20 pb-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase">Established MMXXIV</p>
                <h1 className="font-display text-6xl md:text-8xl text-primary leading-tight font-black">
                  The Art of <br />the Origin
                </h1>
                <p className="font-mono text-sm md:text-base tracking-widest text-primary/60 max-w-md leading-relaxed uppercase">
                  Bespoke Cacao Formulations for the World's Finest Chefs and Chocolatiers.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={onBeginFormulation}
                  className="bg-primary text-background-dark font-mono text-xs tracking-[0.2em] px-10 py-5 uppercase font-bold hover:brightness-110 transition-all"
                >
                  Begin Formulation
                </button>
                <button className="border border-primary text-primary font-mono text-xs tracking-[0.2em] px-10 py-5 uppercase hover:bg-primary/5 transition-all">
                  Request Wholesale Access
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-accent-dark border hairline border-primary/30"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2FYypXpinV9yDs49-lYmM6uSd_M0LKWCrR-hK8FH7x9d-PU_jbXll7Lgdu8bTpM4P8K9QKE_rMiOb--n-8B3VB9lmW1Q__Cty3kB_3_REVMbVKHuQwALCd3_XIqcyH2hJy4RV9n8jPIl1Oa8z_e87j1_fxDKyf6Tfim1eG7n_5SEYdGXWeRGqToS-JlF56-I5pKx19qq5Ak7qKGEFZZSMv6Bh3ag8Ybd6FeDchGlPdgi2KHspTFMPjKekJY7quTP2xCGPl4OrQl8')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 border border-primary/20 p-4 backdrop-blur-sm bg-background-dark/30">
                <p className="font-mono text-[9px] tracking-widest text-primary/50 uppercase">Origin Reference</p>
                <p className="font-display text-xl text-primary italic">Maroantsetra, Madagascar</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terroir Collection */}
        <section className="bg-accent-dark/50 border-y hairline border-primary/10 py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-4">The Collection</p>
                <h2 className="font-display text-5xl text-primary italic">Terroir Selection</h2>
              </div>
              <a className="font-mono text-[10px] tracking-widest text-primary/60 border-b border-primary/20 pb-1 hover:text-primary hover:border-primary transition-all uppercase" href="#">Browse All Origins</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Product 1 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border hairline border-primary/20 mb-8">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFFOqyzvHvcqXab0BwyQtC9eUpwk5lASsASXe7Zg_FsO0WW8JzkFgLLBBLS3LDZWOpoajlfD155kRoi8WugbazNGBEHR9lY3UdfvDgqmE3hnZ1dLkm8UiNhFLTR-BkVrzoFyRDwBJ-NTvm1LsOuJyHQls-oZxv81qLEW6x18W_X4VP9UkQ8oKtM4-OB52wuDjz5l1N2NtWKecoJA6eAuv6iqnp4659CyPl-6S-88QhOad4QL1GvPD0Mu5TmOdyyviUzy73LRak3C8')" }}
                  ></div>
                  <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-background-dark/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-primary text-background-dark font-mono text-[10px] tracking-widest px-6 py-3 uppercase font-bold">View Technical Specs</button>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">Madagascar 72%</h3>
                <div className="font-mono text-[10px] space-y-2 text-primary/50 uppercase tracking-widest leading-relaxed">
                  <p><span className="text-primary/30">Acidity:</span> High</p>
                  <p><span className="text-primary/30">Roast:</span> Light</p>
                  <p><span className="text-primary/30">Notes:</span> Red Fruit, Citrus, Floral</p>
                </div>
              </div>
              {/* Product 2 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border hairline border-primary/20 mb-8">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUy_1y31mupp5q2pbyc3PcrKehAvyBEoY-X-UIb5bO7SPlKe1N1eqv5I5yA9UgNu5aMw8kG_2ODdUTmD65RpInmaTVsGtsxEN6E44ooAF_0v7mctEneKdywMdE7rQnlCLHgWkHUsMwH96lmf0rjFEt3-tbyZ6M6QBNBRxyQ0V3mcLzh4x6gFda3GINc2kGB6uIgds334l43YkbUFbLjnnAlnFX6zsd1DGt-r5xqS29JXpEUxB85Ec9wQEjeCsWAFgaZE-OooLFQmQ')" }}
                  ></div>
                  <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-background-dark/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-primary text-background-dark font-mono text-[10px] tracking-widest px-6 py-3 uppercase font-bold">View Technical Specs</button>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">Peru 64%</h3>
                <div className="font-mono text-[10px] space-y-2 text-primary/50 uppercase tracking-widest leading-relaxed">
                  <p><span className="text-primary/30">Acidity:</span> Medium</p>
                  <p><span className="text-primary/30">Roast:</span> Medium</p>
                  <p><span className="text-primary/30">Notes:</span> Nutty, Caramel, Smoke</p>
                </div>
              </div>
              {/* Product 3 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border hairline border-primary/20 mb-8">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDX9Zm3l6PuuIkZoyrw0NGLrxOf1GQAR5utrG1lMyt7j7xMMY5yw0yOvs0BWvuXPP2VpsOwVvGyZdp1g3aCDb-V1dqchR36kydtowqOtwjs7TaXVufHR9V1nN8CHlHkyLUmpyBu2SJ5AeVYyeSd-7ZSU7p9CyCr5ncLpfdvGL3nlfBkRPuo4efQk7cnPmSAFCPp58EHvBUwwsIjrihyfPugfE-w3lTuABqBCk-YuWDwEI4AjwOYClklY8icqY-zAjquXPCCursyjOQ')" }}
                  ></div>
                  <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-background-dark/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-primary text-background-dark font-mono text-[10px] tracking-widest px-6 py-3 uppercase font-bold">View Technical Specs</button>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-primary mb-3">Ecuador 85%</h3>
                <div className="font-mono text-[10px] space-y-2 text-primary/50 uppercase tracking-widest leading-relaxed">
                  <p><span className="text-primary/30">Acidity:</span> Low</p>
                  <p><span className="text-primary/30">Roast:</span> Dark</p>
                  <p><span className="text-primary/30">Notes:</span> Earthy, Floral, Leather</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Label Excellence */}
        <section className="py-32 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <div className="relative aspect-square border hairline border-primary/30 bg-accent-dark flex items-center justify-center p-12">
                {/* SVG Blueprint Graphic */}
                <div className="w-full h-full border border-dashed border-primary/20 relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-1/2 border hairline border-primary/40 flex flex-col justify-between p-4">
                      <div className="flex justify-between border-b border-primary/10 pb-2">
                        <div className="h-2 w-12 bg-primary/20"></div>
                        <div className="h-2 w-4 bg-primary/20"></div>
                      </div>
                      <div className="flex items-center justify-center py-4">
                        <div className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-mono text-primary/40">LOGO</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-primary/5"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[8px] text-primary/40 uppercase">Spec No. 402-B // Packaging Structural</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-6">Service Suite</p>
              <h2 className="font-display text-5xl text-primary leading-tight mb-12">White Label <br />Excellence</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                  <div>
                    <h4 className="font-display text-xl text-primary mb-2">Custom Packaging</h4>
                    <p className="font-sans text-primary/60 text-sm leading-relaxed">Bespoke structural design and blueprinting tailored to your brand's physical identity.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                  <div>
                    <h4 className="font-display text-xl text-primary mb-2">Signature Blends</h4>
                    <p className="font-sans text-primary/60 text-sm leading-relaxed">Proprietary flavor profiles developed in our lab specifically for your pastry program.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                  <div>
                    <h4 className="font-display text-xl text-primary mb-2">Small-Batch Roasting</h4>
                    <p className="font-sans text-primary/60 text-sm leading-relaxed">Precision-controlled roasting protocols for micro-lots and experimental origins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Authority Footer */}
      <footer className="bg-accent-dark border-t hairline border-primary/20 px-6 lg:px-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">architecture</span>
                <h2 className="font-display text-lg font-bold tracking-widest text-primary uppercase">Atelier V.04</h2>
              </div>
              <p className="font-sans text-xs text-primary/40 leading-relaxed uppercase tracking-tighter">
                Advanced Chocolate Formulation Laboratory. Dedicated to the science of sensory excellence.
              </p>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-8">The Lab</h5>
              <ul className="font-mono text-[10px] space-y-4 text-primary/60 uppercase tracking-widest">
                <li><a className="hover:text-primary transition-colors" href="#">Technical Logs</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Equipment Specs</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Formulation API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-8">The Sourcing</h5>
              <ul className="font-mono text-[10px] space-y-4 text-primary/60 uppercase tracking-widest">
                <li><a className="hover:text-primary transition-colors" href="#">Origin Network</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ethics Protocol</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Supply Chain Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase mb-8">The Partnership</h5>
              <ul className="font-mono text-[10px] space-y-4 text-primary/60 uppercase tracking-widest">
                <li><a className="hover:text-primary transition-colors" href="#">Wholesale Portal</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">White Label</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Press Inquiry</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-primary/10 pt-12 gap-6">
            <div className="flex items-center gap-2 bg-background-dark/50 border hairline border-primary/20 px-4 py-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-primary uppercase">System Status: Online</span>
            </div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-primary/30 uppercase">
              © 2024 Atelier V.04 // All Rights Reserved // Technical Integrity Guaranteed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Storefront;
