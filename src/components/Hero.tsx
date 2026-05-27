import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image/Overlay (Using a stylistic dark abstract or luxury texture) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=2574&auto=format&fit=crop" 
          alt="Luxury Perfume Texture" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold-400 tracking-[0.3em] text-sm md:text-base uppercase mb-6"
        >
          Discover the Essence of Premium Fragrance
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
        >
          AL TAYYAB <br />
          <span className="text-4xl md:text-6xl text-stone-300 italic">Perfumes</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          A world of authentic, long-lasting and non-alcoholic attars crafted with elegance and purity. Experience luxury in every drop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black uppercase tracking-widest font-medium transition-all duration-300"
          >
            Shop Collection
          </a>
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 border border-stone-600 hover:border-gold-400 text-white hover:text-gold-400 uppercase tracking-widest font-medium transition-all duration-300"
          >
            Explore Combos
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent mx-auto" />
      </div>
    </section>
  );
}
