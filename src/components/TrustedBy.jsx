import { motion } from 'framer-motion';

const TrustedBy = () => {
  const brands = ["ESTATE.CO", "VOGUE", "ARCH-DIGEST", "LUXE-RE", "STUDIO_X"];
  
  return (
    <section className="py-12 md:py-16 border-y border-slate-50 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 md:mb-10"
        >
          Preferred Partner For
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-10 md:gap-8 grayscale opacity-40 contrast-125"
        >
          {brands.map((brand) => (
            <h2 
              key={brand} 
              className="text-lg md:text-xl lg:text-2xl font-black italic tracking-tighter whitespace-nowrap"
            >
              {brand}
            </h2>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;