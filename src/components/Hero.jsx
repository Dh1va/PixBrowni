import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#FBFBFD] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-48 pb-16 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Side: Professional & Clean Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 order-2 lg:order-1"
          >
            {/* Minimalist Trust Badge - Whitespace nowrap prevents breaking */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 md:mb-8 max-w-full overflow-hidden">
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Global Post-Production Studio <span className="text-slate-300 mx-0.5 md:mx-1">•</span> Elite Quality
              </span>
            </div>
            
            {/* Professional Sized Header */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-slate-900 mb-6 tracking-tight">
              Premium Visual Assets <br className="hidden sm:block" />
              <span className="italic font-light text-orange-600">Perfectly Rendered.</span>
            </h1>
            
            {/* Professional Body Copy */}
            <p className="text-sm md:text-lg text-slate-600 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
              Pixbrowni provides world-class architectural retouching and specialized post-production. We partner with elite photographers globally to deliver high-fidelity imagery.
            </p>

            {/* Buttons on same row for mobile */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-10 md:mb-12">
              <Link to="/contact" className="relative group overflow-hidden flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-slate-900 text-white rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-500 shadow-lg shadow-slate-900/10">
                <span className="relative z-10 flex items-center gap-2">
                  Start <span className="hidden sm:inline">Project</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>

              <Link to="/gallery" className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center transition-all duration-300 hover:border-slate-900 hover:bg-slate-50">
                Our Work
              </Link>
            </div>

            {/* Clean Feature List - Stays as flex-wrap for mobile */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-8">
              {[
                { text: "Overnight Delivery", icon: <Zap className="w-3 h-3" /> },
                { text: "Non-Destructive", icon: <Sparkles className="w-3 h-3" /> },
                { text: "Dedicated Support", icon: <CheckCircle2 className="w-3 h-3" /> }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-900">
                  <span className="text-orange-500">{feature.icon}</span> {feature.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-End Interactive Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[4px] md:border-[6px] border-white bg-white">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                    style={{ filter: 'saturate(0.5) brightness(0.85) contrast(0.95)' }} 
                    alt="Before" 
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                    alt="Pixbrowni Edit" 
                  />
                }
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
              />
              
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/30 backdrop-blur-md rounded-lg text-white text-[8px] font-black uppercase tracking-widest">
                Before
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-orange-600/80 backdrop-blur-md rounded-lg text-white text-[8px] font-black uppercase tracking-widest">
                Pixbrowni Edit
              </div>
            </div>

            {/* Subtle Atmospheric Accents */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100/20 to-transparent -z-10 rounded-[40px] opacity-50 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Zap = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

export default Hero;