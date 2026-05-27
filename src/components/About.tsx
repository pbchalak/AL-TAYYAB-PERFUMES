import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  const promises = [
    "100% Authentic Products",
    "Premium Ingredients",
    "Long Lasting Fragrance",
    "Elegant Packaging",
    "Customer Satisfaction"
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full group"
          >
            <div className="absolute inset-0 bg-gold-900/20 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
            <img 
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1500&auto=format&fit=crop" 
              alt="Luxury Perfume Bottle" 
              className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold-400 tracking-widest text-sm uppercase mb-4">About Us</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">More Than a Scent. <br/><span className="italic text-stone-400">An Identity.</span></h2>
            
            <p className="text-stone-300 leading-relaxed mb-6 font-light">
              At <strong className="text-white font-medium">AL TAYYAB PERFUMES</strong>, fragrance is a tradition and a statement of elegance. We specialize in premium non-alcoholic attars crafted using high-quality ingredients sourced for their richness and lasting aroma.
            </p>
            <p className="text-stone-300 leading-relaxed mb-10 font-light">
              Our mission is to deliver luxurious fragrances that blend modern sophistication with timeless oriental essence. Every bottle reflects purity, class, and craftsmanship designed for those who appreciate authenticity.
            </p>

            <div className="mb-10">
              <h3 className="text-white text-xl font-serif mb-6">Our Promise</h3>
              <ul className="space-y-4">
                {promises.map((promise, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center space-x-3 text-stone-300"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <Check size={14} className="text-gold-400" />
                    </span>
                    <span className="font-light tracking-wide">{promise}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-gold-400 font-serif italic text-xl">
              "Crafted for Those Who Appreciate Luxury."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
