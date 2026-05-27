import { motion } from 'motion/react';

const founders = [
  {
    name: "MD Tayyab Rao",
    role: "Founder",
    desc: "Focused on building a premium fragrance experience with innovation and elegance.",
    image: "https://images.unsplash.com/photo-1549473448-5d71981eceaf?q=80&w=1588&auto=format&fit=crop"
  },
  {
    name: "MD Faiz Rao",
    role: "Co-Founder",
    desc: "Dedicated to product quality, customer satisfaction, and fragrance excellence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop"
  },
  {
    name: "MD Shadab Rao",
    role: "Co-Founder",
    desc: "Committed to expanding the brand with trust, luxury, and premium craftsmanship.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop"
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-400 tracking-[0.2em] text-sm uppercase mb-4">Leadership</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">The Faces Behind The Brand</h2>
          <p className="text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
            Driven by passion, dedication and a vision for premium fragrance excellence, our team is committed to delivering world-class attars with authenticity and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-stone-800 p-2">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover rounded-full filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">{founder.name}</h3>
              <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-4" />
              <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs mx-auto">
                {founder.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-300 font-serif italic text-xl">
            "Together, bringing a shared vision of creating fragrances that leave a lasting impression."
          </p>
        </div>
      </div>
    </section>
  );
}
