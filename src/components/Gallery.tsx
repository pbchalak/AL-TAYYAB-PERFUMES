import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1587&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615526674987-a279db4e0bfa?q=80&w=1587&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594034237199-5f2122616f73?q=80&w=1588&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610461888750-10bfc601b874?q=80&w=1498&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-stone-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Brand Showcase</h2>
          <p className="text-stone-400 font-light tracking-wide">The artistry behind every drop.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative overflow-hidden group cursor-pointer ${idx === 0 || idx === 3 ? 'aspect-square' : 'aspect-[3/4]'}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img} 
                alt={`Showcase ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
