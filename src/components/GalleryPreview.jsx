import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1599693489843-c9fc954625b1?q=80&w=600", alt: "Real Estate HDR", span: "md:row-span-2" }, 
  { src: "https://images.unsplash.com/photo-1560518420-7c251d8b9f71?q=80&w=400", alt: "Product Retouching", span: "" },
  { src: "https://images.unsplash.com/photo-1549480967-152e0a6d10e7?q=80&w=400", alt: "Fashion Retouching", span: "" },
  { src: "https://images.unsplash.com/photo-1579782522079-c5211516e174?q=80&w=600", alt: "Food Photography", span: "md:row-span-2" }, 
  { src: "https://images.unsplash.com/photo-1600585152914-d07f90371427?q=80&w=400", alt: "Virtual Staging Example", span: "" },
  { src: "https://images.unsplash.com/photo-1554995207-c18c69306e26?q=80&w=400", alt: "Interior Design", span: "" },
];

const GalleryPreview = () => {
  // Animation variants for the header
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 overflow-hidden">
      {/* --- HEADER WITH SCROLL ANIMATION --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
      >
        <div className="max-w-2xl">
          <motion.h2 
            variants={fadeUp}
            className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight"
          >
            A Glimpse into <br className="hidden md:block" />
            <span className="italic font-light text-slate-400">Visual Excellence.</span>
          </motion.p>
        </div>
        
        <motion.div variants={fadeUp}>
          <Link to="/gallery" className="group flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all text-sm md:text-base">
            View Full Gallery <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* --- RESPONSIVE MASONRY GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[250px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 ${image.span}`}
          >
            {/* Image Container */}
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">Pixbrowni Edit</p>
              <h4 className="text-white text-xl font-bold">{image.alt}</h4>
            </div>

            {/* Subtle Border Overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPreview;