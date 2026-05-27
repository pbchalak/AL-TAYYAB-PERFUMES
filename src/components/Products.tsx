import { motion } from 'motion/react';

const products = [
  {
    name: 'White Oudh',
    description: 'A rich and elegant fragrance with deep woody notes that create a royal and sophisticated experience.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703bc48b2a?q=80&w=1471&auto=format&fit=crop',
  },
  {
    name: 'Musk Amber',
    description: 'A warm and smooth blend of musk and amber crafted for a bold and lasting impression.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1587&auto=format&fit=crop',
  },
  {
    name: 'Combo Offers',
    description: 'Enjoy premium fragrance combinations specially curated for gifting and personal collections.',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745672?q=80&w=1480&auto=format&fit=crop',
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 tracking-[0.2em] text-sm uppercase mb-4"
          >
            Our Collection
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6"
          >
            Premium Attars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Explore our exclusive range of luxurious non-alcoholic attars designed for every personality and occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-stone-800 hover:border-gold-500/50 transition-colors duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-8 text-center bg-gradient-to-t from-[#050505] via-[#0a0a0a] to-transparent absolute bottom-0 w-full z-20">
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-400 transition-colors">{product.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {product.description}
                </p>
                <button className="text-gold-500 uppercase tracking-widest text-xs font-medium border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-stone-800 pt-16 flex flex-col items-center"
        >
           <h3 className="text-white font-serif text-2xl mb-8">Product Features</h3>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                "6 ml Roll On Attar",
                "Non-Alcoholic Formula",
                "Long Lasting Performance",
                "Travel Friendly",
                "Daily & Occasion Wear"
              ].map((feat, i) => (
                <div key={i} className="px-6 py-2 border border-stone-800 rounded-full text-stone-400 text-sm font-light tracking-wide">
                  {feat}
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
