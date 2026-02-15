import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe2, ArrowRight } from 'lucide-react';

const Process = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const steps = [
    {
      title: "Initial Test & Quote",
      desc: "Send us a test image along with your editing requirements. Receive the edited result and a price quote within 24 hours.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <circle cx="70" cy="35" r="18" className="fill-orange-50" />
          <path d="M25 50 L55 35 L25 20 Z" fill="none" stroke="#F97316" strokeWidth="2" strokeLinejoin="round" />
          <path d="M55 35 L75 50" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      title: "Agreed Pricing & Orders",
      desc: "Once you're satisfied with the result and the per-image price is agreed upon, you can begin sending orders via email.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <circle cx="70" cy="35" r="18" className="fill-orange-50" />
          <rect x="20" y="30" width="40" height="30" rx="8" fill="none" stroke="#F97316" strokeWidth="2" />
          <path d="M20 40 L40 50 L60 40" fill="none" stroke="#F97316" strokeWidth="2" />
          <path d="M10 45 L15 45 M10 52 L15 52" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Upload & Processing",
      desc: "Upload your photos for editing using Google Drive, WeTransfer, or Dropbox. Share the link with us, and we'll take it from there.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
          <circle cx="70" cy="35" r="18" className="fill-orange-50" />
          <path d="M25 65 Q25 45 45 45 Q45 35 55 35 Q70 35 70 50 Q85 50 85 65 Z" fill="none" stroke="#F97316" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- PROFESSIONAL HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
            <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
              Operational approach <span className="text-slate-300 mx-1">•</span> our process
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight max-w-4xl"
          >
            Streamlined workflow <br />
            <span className="italic font-light text-orange-600">for global scale.</span>
          </motion.h2>
        </div>

        {/* --- THREE COLUMN GRID --- */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
          {/* Subtle Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 w-1/2 h-[1px] bg-slate-100 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="text-center group relative z-10"
            >
              <div className="mb-10 flex justify-center transition-transform duration-700 group-hover:scale-110">
                <div className="relative">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-6 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium px-4 opacity-90">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-24 md:mt-32 text-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex w-fit items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-slate-900/10 active:scale-95 overflow-hidden transition-all duration-300"
          >
            
            <span className="relative z-10 flex items-center gap-3">
              Start Your First Test
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>

           
            <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;