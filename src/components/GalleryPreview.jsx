import { motion } from 'framer-motion';
import { ArrowRight, Globe2, MoveUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
import realEstateHDR from '../assets/realestate-hdr-1.jpg.webp';
import productRetouching from '../assets/product-retouching1.jpg.webp';
import fashionRetouching from '../assets/fashion-retouching-1.jpg.webp';
import foodPhotography from '../assets/food-photography-1.jpg.webp';
import virtualStaging from '../assets/virtual-staging (1)-optimized.webp';
import interiorDesign from '../assets/interior-design-1.jpg.webp';

const galleryRow1 = [
  { src: realEstateHDR, alt: "Architecture HDR", tag: "Real Estate" },
  { src: productRetouching, alt: "Luxury Product", tag: "Retouching" },
  { src: fashionRetouching, alt: "Editorial Fashion", tag: "Fashion" },
];

const galleryRow2 = [
  { src: foodPhotography, alt: "Culinary Arts", tag: "Food" },
  { src: virtualStaging, alt: "Modern Staging", tag: "3D Render" },
  { src: interiorDesign, alt: "Interior Design", tag: "Architecture" },
];

const GalleryPreview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const ScrollingRow = ({ images, reverse = false }) => (
    <div className="flex overflow-hidden py-4">
      <motion.div 
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex whitespace-nowrap gap-6 md:gap-10"
      >
        {[...images, ...images].map((image, index) => (
          <div 
            key={index}
            className="relative w-[320px] md:w-[600px] aspect-[16/10] flex-shrink-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-none bg-slate-50 border border-slate-100 shadow-sm"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            
            {/* Minimal Modern Overlay */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                <div className="bg-white/95 px-6 py-4 rounded-3xl shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 border border-white flex items-center gap-4">
                  <div>
                    <p className="text-orange-600 text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">{image.tag}</p>
                    <p className="text-slate-900 text-sm font-bold tracking-tight">{image.alt}</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
                    <MoveUpRight size={18} />
                  </div>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-white py-20 md:py-20 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        
        {/* --- HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-8">
              <Zap className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                Visual Artifacts <span className="text-slate-300 mx-1">•</span>our works
              </span>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-slate-900 tracking-tight"
            >
              Curating <span className="italic font-light text-orange-600">extraordinary</span> <br />
              perspectives.
            </motion.h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:flex lg:justify-end"
          >
            <Link 
              to="/gallery" 
              className="group px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all hover:bg-orange-600 shadow-xl shadow-slate-900/10 active:scale-95"
            >
              Explore Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- DUAL DIRECTIONAL SLIDER --- */}
      <div className="relative space-y-2 md:space-y-6">
        <ScrollingRow images={galleryRow1} />
        <ScrollingRow images={galleryRow2} reverse />

        {/* Cinematic Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- FOOTER TAGS --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-40 grayscale">
            {["High-End HDR", "Editorial Retouching", "Virtual Staging", "Aerial Editing", "E-commerce Optimization"].map((text) => (
                <span key={text} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">{text}</span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;