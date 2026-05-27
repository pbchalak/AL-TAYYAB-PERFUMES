import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, Droplets } from 'lucide-react';

const standards = [
  { icon: Droplets, title: "Finest Oils", desc: "Pure and concentrated natural elements." },
  { icon: Sparkles, title: "Premium Packaging", desc: "Designed for elegance and protection." },
  { icon: Award, title: "Lasting Aroma", desc: "Advanced long-lasting formula." },
  { icon: ShieldCheck, title: "Skin Friendly", desc: "100% Non-alcoholic and safe for skin." },
];

export default function Quality() {
  return (
    <section id="quality" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold-400 tracking-widest text-sm uppercase mb-4">Certified Quality</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Purity & Authenticity</h2>
            <p className="text-stone-300 font-light leading-relaxed mb-6">
              This is to certify that every product from <strong>AL TAYYAB PERFUMES</strong> is carefully crafted with premium quality ingredients and exquisite fragrance compositions.
            </p>
            <p className="text-stone-300 font-light leading-relaxed mb-10">
              We believe true luxury lies in purity, authenticity, and lasting impressions. At AL TAYYAB PERFUMES, each fragrance is designed to deliver elegance, confidence and sophistication in every application.
            </p>

            <blockquote className="border-l-2 border-gold-500 pl-6 py-2 mb-10">
              <p className="text-xl font-serif text-white italic">"Authentic Fragrance. <br/>Timeless Impression."</p>
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 border border-stone-800 bg-[#0a0a0a]/50 backdrop-blur-sm relative">
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-gold-500" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-gold-500" />
            
            {standards.map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="p-6 bg-[#050505] border border-stone-800/50 hover:border-gold-500/30 transition-colors"
              >
                <std.icon className="w-8 h-8 text-gold-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-medium mb-2">{std.title}</h3>
                <p className="text-stone-400 text-sm font-light">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
