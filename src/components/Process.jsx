import { motion } from 'framer-motion';
import { Upload, Cpu, SearchCheck, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Secure Upload",
      desc: "Send your raw files through our encrypted portal. We support all professional RAW formats.",
      icon: <Upload className="w-6 h-6" />,
    },
    {
      id: "02",
      title: "Artist Assignment",
      desc: "Your project is matched with a specialist in your niche, from real estate to high-fashion.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      id: "03",
      title: "Precision Edit",
      desc: "Our artists perform multi-layer blending and color grading with pixel-perfect care.",
      icon: <SearchCheck className="w-6 h-6" />,
    },
    {
      id: "04",
      title: "Quality Control",
      desc: "Every image passes through a senior editor for a final check before being cleared.",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- ANIMATED HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4"
          >
            Our Methodology
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight"
          >
            Crafting perfection <br /> 
            <span className="italic font-light text-slate-400">one pixel at a time.</span>
          </motion.p>
        </motion.div>

        {/* --- PROCESS STEPS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[1px] bg-slate-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative z-10 group"
            >
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                <span className="text-xl font-serif font-bold italic">{step.id}</span>
              </div>

              {/* Icon & Mini-line */}
              <div className="flex items-center gap-3 mb-6 text-orange-600">
                <div className="p-2 bg-orange-50 rounded-lg">
                  {step.icon}
                </div>
                <div className="h-[1px] w-12 bg-orange-200 hidden md:block"></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-900 text-sm md:text-base leading-relaxed font-medium">
                {step.desc}
              </p>
              
              {/* Decorative Arrow (Desktop Only) */}
              {/* {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-8 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )} */}
            </motion.div>
          ))}
        </div>

        {/* --- RESPONSIVE BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-8 md:p-16 rounded-[32px] md:rounded-[40px] bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative"
        >
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to see the <span className="text-orange-500">Pixbrowni</span> difference?
            </h4>
            <p className="text-slate-400 text-sm md:text-base tracking-wide max-w-md">
              Start with a risk-free trial. Get your first 3 images edited by our master artists for free.
            </p>
          </div>
          
          <Link 
            to="/contact" 
            className="relative z-10 px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-orange-600/20 whitespace-nowrap"
          >
            Start Free Trial
          </Link>
          
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;