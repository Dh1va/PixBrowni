import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Globe2 } from 'lucide-react';

const CounterItem = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-900 mb-4 tracking-tighter">
        {count.toLocaleString()}<span className="text-orange-600 font-bold">{suffix}</span>
      </div>
      <div className="h-[2px] w-8 bg-orange-600 mb-6 rounded-full" />
      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 leading-relaxed max-w-[180px]">
        {label}
      </p>
    </div>
  );
};

const ImpactStats = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-white py-20 md:py-20 border-b border-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PROFESSIONAL HEADER (Matched to Process) --- */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
            <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
              Proven Excellence <span className="text-slate-300 mx-1">•</span> by the numbers
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight max-w-4xl"
          >
            Delivering precision <br />
            <span className="italic font-light text-orange-600">at a significant scale.</span>
          </motion.h2>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <CounterItem 
              target={50000} 
              suffix="+" 
              label="High-Resolution Assets Delivered" 
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <CounterItem 
              target={150} 
              suffix="+" 
              label="Global Studios & Trusted Agencies" 
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <CounterItem 
              target={24} 
              suffix="/7" 
              label="Production Pipeline Active Weekly" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;