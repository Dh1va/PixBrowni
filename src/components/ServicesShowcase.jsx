import { motion } from 'framer-motion';
import { Home, Sparkles, Box, Video, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesShowcase = () => {
  const services = [
    {
      title: "HDR Blending",
      desc: "Perfectly balanced exposure for luxury architecture and real estate.",
      icon: <Home className="w-6 h-6" />,
      size: "lg",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      dark: true 
    },
    {
      title: "Model Retouching",
      desc: "Editorial skin & texture correction for fashion.",
      icon: <Sparkles className="w-6 h-6" />,
      size: "sm",
      color: "bg-orange-50",
    },
    {
      title: "Virtual Staging",
      desc: "Turn empty rooms into high-end living spaces.",
      icon: <Box className="w-6 h-6" />,
      size: "sm",
      color: "bg-slate-50",
    },
    {
      title: "Video Editing",
      desc: "Cinematic property films with smooth transitions & pacing.",
      icon: <Video className="w-6 h-6" />,
      size: "lg",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200",
      dark: true 
    },
  ];

  // Header Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-white overflow-hidden">
      {/* --- ANIMATED HEADER --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8"
      >
        <div className="max-w-3xl">
          <motion.h2 
            variants={headerVariants}
            className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]"
          >
            Specialized solutions <br className="hidden md:block" /> 
            <span className="text-slate-400 italic font-medium">for every</span> discipline.
          </motion.p>
        </div>
        
        <motion.div variants={headerVariants}>
          <Link to="/services" className="group flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all text-sm md:text-base">
            Explore All Services <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* --- RESPONSIVE BENTO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px] md:auto-rows-[400px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`group relative rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-700 shadow-sm hover:shadow-2xl ${
              service.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'
            } ${service.color || 'bg-white'}`}
          >
            {/* Background Image Logic */}
            {service.image && (
              <>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </>
            )}

            <div className={`relative z-20 h-full p-8 md:p-10 flex flex-col justify-between ${
              service.image || service.dark ? 'text-white' : 'text-slate-900'
            }`}>
              <div>
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                   service.image || service.dark ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white text-orange-600 border border-slate-100'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className={`max-w-xs text-xs md:text-sm leading-relaxed font-semibold ${
                  service.image || service.dark ? 'text-slate-200' : 'text-slate-900'
                }`}>
                  {service.desc}
                </p>
              </div>

              <div className="flex justify-between items-center">
                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-80">View Details</span>
                 <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                   service.image || service.dark 
                   ? 'border-white/40 group-hover:bg-white group-hover:text-slate-900' 
                   : 'border-slate-200 group-hover:bg-slate-900 group-hover:text-white'
                 }`}>
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- RESPONSIVE PILL TAGS --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-100 flex flex-wrap items-center gap-2 md:gap-3"
      >
        <span className="w-full md:w-auto text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 md:mb-0 mr-0 md:mr-4">
          Other Specialized Services:
        </span>
        {["Panorama Stitching", "Decluttering", "Aerial Editing", "Interactive Floor Planning", "Clipping Path"].map((item) => (
          <span key={item} className="px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-slate-100 bg-white text-slate-600 text-[10px] md:text-xs font-bold hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all cursor-pointer shadow-sm">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesShowcase;