import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Side: Content with Scroll Animations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50/50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
            <Sparkles className="w-3 h-3" />
            Precision Post-Processing
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] md:leading-[0.9] text-slate-900 mb-6 md:mb-8 text-balance">
            Pure <span className="italic text-orange-600">Visual</span> <br className="hidden md:block" /> Perfection.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-900 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
            Pixbrowni delivers high-end HDR blending and professional retouching for photographers who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Link to="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 group">
              Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/gallery" className="px-8 py-4 md:px-10 md:py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all">
              See Our Work
            </Link>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-2 sm:flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-orange-500" /> 24h Delivery
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-orange-500" /> Pro Quality
            </div>
          </div>
        </motion.div>

        {/* Right Side: Responsive Interactive Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                  // Updated filter: removes B&W, adds "dull/raw" effect
                  style={{ filter: 'saturate(0.6) brightness(0.7) contrast(0.9)' }} 
                  alt="Before Edit" 
                />
              }
              itemTwo={
                <ReactCompareSliderImage 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
                  alt="After Edit" 
                />
              }
              className="h-[400px] md:h-[600px] w-full object-cover cursor-col-resize"
            />
            
            {/* Interactive Labels */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">
              Raw Format
            </div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">
              Pixbrowni Edit
            </div>
          </div>

          {/* Background Glow Elements */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 bg-orange-100 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-blue-50 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;