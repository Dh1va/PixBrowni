import { motion } from 'framer-motion';
import { ArrowRight, Globe2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets (Keep your current imports)
import realEstateHDR from '../assets/realestate-hdr-1.jpg.webp';
import productRetouching from '../assets/product-retouching1.jpg.webp';
import fashionRetouching from '../assets/fashion-retouching-1.jpg.webp';
import foodPhotography from '../assets/food-photography-1.jpg.webp';
import virtualStaging from '../assets/virtual-staging (1)-optimized.webp';
import interiorDesign from '../assets/interior-design-1.jpg.webp';

const galleryImages = [
  { src: realEstateHDR, alt: "Architecture HDR", tag: "Real Estate" },
  { src: productRetouching, alt: "Luxury Product", tag: "Retouching" },
  { src: fashionRetouching, alt: "Editorial Fashion", tag: "Fashion" },
  { src: foodPhotography, alt: "Culinary Arts", tag: "Food" },
  { src: virtualStaging, alt: "Modern Staging", tag: "3D Render" },
  { src: interiorDesign, alt: "Interior Design", tag: "Architecture" },
];

const GalleryPreview = () => {
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  // Scroll Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="bg-[#FBFBFD] py-24 md:py-32 -mt-20 md:-mt-32 overflow-hidden relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER WITH SCROLL ANIMATION --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Visual Portfolio
              </span>
            </motion.div>

            {/* Exactly Matched Hero Size */}
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-slate-900 mb-6 tracking-tight"
            >
              A Glimpse into <br className="hidden sm:block" />
              <span className="italic font-light text-orange-600">Visual Excellence.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link 
              to="/gallery" 
              className="group relative px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:border-orange-600 hover:text-orange-600 hover:shadow-lg active:scale-95"
            >
              View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* --- INFINITE SLIDER WITH ENTRANCE ANIMATION --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative flex overflow-hidden"
      >
        <motion.div 
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            ease: "linear", 
            duration: 50, // Slightly slower for more premium feel
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-6 md:gap-8 px-6"
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index}
              className="relative w-[300px] md:w-[520px] aspect-[16/10] flex-shrink-0 rounded-[2.5rem] overflow-hidden group cursor-pointer bg-slate-100 border border-slate-200/50"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* --- PREMIUM HOVER OVERLAY --- */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-900/40 flex flex-col justify-between p-10 pointer-events-none">
                <div className="flex justify-end">
                  <div className="h-12 w-12 bg-orange-600 text-white flex items-center justify-center rounded-2xl shadow-xl transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white">
                    <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{image.tag}</p>
                    <p className="text-slate-900 text-sm md:text-base font-bold tracking-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#FBFBFD] via-[#FBFBFD]/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#FBFBFD] via-[#FBFBFD]/40 to-transparent z-10 pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default GalleryPreview;