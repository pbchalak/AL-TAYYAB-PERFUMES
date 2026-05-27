import { motion } from 'motion/react';
import { MapPin, Phone, Package, Gift } from 'lucide-react';

const icons = [
  { icon: MapPin, text: "Premium Non-Alcoholic Attars" },
  { icon: Phone, text: "Contact Us for Orders & Distributors" },
  { icon: Package, text: "Available for Retail & Wholesale" },
  { icon: Gift, text: "Perfect for Personal Use & Gifting" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1608670185906-8ae4db9196b6?q=80&w=2574&auto=format&fit=crop" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-400 tracking-[0.2em] text-sm uppercase mb-4"
        >
          Get In Touch
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-white mb-6"
        >
          Experience Premium Fragrance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Discover luxury fragrances crafted for elegance, confidence, and timeless impressions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {icons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="flex items-center space-x-4 text-left bg-[#0a0a0a] p-4 border border-stone-800"
            >
              <div className="p-3 bg-stone-900 border border-stone-800 text-gold-400 flex-shrink-0">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-stone-300 text-sm font-light tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-gold-500 hover:bg-gold-600 text-black uppercase tracking-widest font-medium transition-all duration-300">
            Order Now
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-stone-600 hover:border-gold-400 text-white hover:text-gold-400 uppercase tracking-widest font-medium transition-all duration-300">
            Become a Distributor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
