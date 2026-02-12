import { motion } from 'framer-motion';
import { ArrowRight, Globe2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assets
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

  return (
    <section className="bg-[#FBFBFD] py-12 md:py-24 -mt-20 md:-mt-32 overflow-hidden relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Visual Portfolio <span className="text-slate-300 mx-1"></span> 
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-slate-900 tracking-tight">
              A Glimpse into <br className="hidden sm:block" />
              <span className="italic font-light text-orange-600">Visual Excellence.</span>
            </h2>
          </div>

          <Link 
            to="/gallery" 
            className="group relative px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:border-slate-900 hover:shadow-lg"
          >
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* --- INFINITE SLIDER --- */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            ease: "linear", 
            duration: 45, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap gap-6 md:gap-8 px-6"
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index}
              className="relative w-[300px] md:w-[500px] aspect-[16/10] flex-shrink-0 rounded-[2rem] overflow-hidden group cursor-pointer bg-slate-100"
            >
              {/* Image - Static & Clear */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              
              {/* --- SOLID PROFESSIONAL HOVER --- */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 flex flex-col justify-between p-8 pointer-events-none">
                
                {/* Top Right Arrow Box */}
                <div className="flex justify-end">
                  <div className="h-10 w-10 md:h-12 md:w-12 bg-orange-600 text-white flex items-center justify-center rounded-xl shadow-lg transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* Bottom Service Pill */}
                <div className="flex justify-center">
                  <div className="bg-white px-6 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-slate-900 text-xs md:text-sm font-bold tracking-tight">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>

              {/* Permanent Subtle Frame */}
              <div className="absolute inset-0 border border-slate-200/20 rounded-[2rem] pointer-events-none group-hover:border-orange-600/30 transition-colors"></div>
            </div>
          ))}
        </motion.div>

        {/* Professional Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#FBFBFD] via-[#FBFBFD]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#FBFBFD] via-[#FBFBFD]/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default GalleryPreview;