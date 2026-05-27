export default function Footer() {
  return (
    <footer className="bg-[#020202] py-12 border-t border-stone-900 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-serif text-white tracking-widest font-bold mb-4">
          AL TAYYAB
        </h2>
        <p className="text-stone-500 text-sm font-serif italic mb-8">
          Where Luxury Meets Fragrance.
        </p>

        <div className="flex space-x-6 mb-8 mt-2">
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Facebook</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">Twitter</a>
        </div>
        
        <p className="text-stone-600 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} AL TAYYAB PERFUMES. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
