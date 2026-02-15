import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Globe2, Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ServicesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Scroll Reveal Logic
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const services = [
    {
      title: "Real Estate & Architecture",
      tagline: "Property Portfolio",
      desc: "Luminosity-first approach to preserve natural window views while maintaining interior warmth.",
      beforeImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      subServices: [
        { name: "HDR Blending", path: "/services/hdr-blending" },
        { name: "Virtual Staging", path: "/services/virtual-staging" },
        { name: "Day to Dusk", path: "/services/day-to-dusk" },
        { name: "Decluttering", path: "/services/decluttering" },
        { name: "Panorama Stitching", path: "/services/panorama-stitching" },
        { name: "Aerial Editing", path: "/services/aerial-editing" },
        { name: "Floor Planning", path: "/services/floor-planning" },
      ]
    },
    {
      title: "Retouching & Commercial",
      tagline: "Editorial Standards",
      desc: "High-end frequency separation and non-destructive dodge-and-burn for fashion and products.",
      beforeImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
      subServices: [
        { name: "Photo Retouching", path: "/services/photo-retouching" },
        { name: "Model Retouching", path: "/services/model-retouching" },
        { name: "Wedding Editing", path: "/services/wedding-editing" },
        { name: "Food Photo Editing", path: "/services/food-photo-editing" },
      ]
    },
    {
      title: "Editing & Post-Process",
      tagline: "Technical Accuracy",
      desc: "Precision masking and clipping services designed for e-commerce and high-volume catalogs.",
      beforeImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
      afterImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
      subServices: [
        { name: "Clipping Path", path: "/services/clipping-path" },
        { name: "Image Masking", path: "/services/image-masking" },
        { name: "Video Editing", path: "/services/video-editing" },
      ]
    }
  ];

  const progress = (activeIndex + 1) / services.length;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white py-12 md:py-32 border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
              <Globe2 className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Core Disciplines <span className="text-slate-300 mx-1">•</span> our services
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
              Specialized solutions <br />
              <span className="italic font-light text-orange-600">for visual creators.</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="group relative inline-flex w-fit items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-slate-900/10 active:scale-95 overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              See All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </motion.div>

        {/* --- SWIPER SLIDER --- */}
        <motion.div variants={itemVariants} className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="rounded-[32px] overflow-visible"
            spaceBetween={30}
            allowTouchMove={false} // Prevents gesture conflict with compare slider
            simulateTouch={false}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F6F6F6] rounded-[32px] border border-slate-100 overflow-hidden flex flex-col md:flex-row md:h-[500px]">

                  {/* LEFT: SLIDER - Responsive height */}
                  <div className="h-[280px] md:h-full md:w-[45%] relative group cursor-ew-resize no-swiping">
                    <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={service.beforeImg} style={{ filter: 'grayscale(1) brightness(0.8)' }} alt="Original" />}
                      itemTwo={<ReactCompareSliderImage src={service.afterImg} alt="Pixbrowni Standard" />}
                      className="h-full w-full object-cover"
                      handle={
                        <div className="w-1 h-full bg-white/50 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-orange-600">
                            <div className="flex gap-0.5">
                              <div className="w-0.5 h-2 bg-orange-600 rounded-full" />
                              <div className="w-0.5 h-2 bg-orange-600 rounded-full" />
                            </div>
                          </div>
                        </div>
                      }
                    />
                    <div className="absolute top-4 left-4 z-10 px-2.5 py-1.5 bg-black/30 backdrop-blur-md rounded-xl text-white text-[8px] font-black uppercase tracking-widest border border-white/10">Before</div>
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1.5 bg-orange-600/80 backdrop-blur-md rounded-xl text-white text-[8px] font-black uppercase tracking-widest border border-white/10">After</div>
                  </div>

                  {/* RIGHT: CONTENT */}
                  <div className="md:w-[55%] p-7 md:p-12 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-orange-600 mb-1 block">{service.tagline}</span>
                        <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">{service.title}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-100">
                        <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                        <span className="text-xs font-black text-slate-900">4.9</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-8 max-w-xl">
                      {service.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                      {service.subServices?.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="flex items-center gap-2.5 group/sub text-slate-700 hover:text-orange-600 transition-all duration-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 group-hover/sub:scale-110 transition-transform" />
                          <span className="font-bold text-sm md:text-base tracking-tight border-b border-transparent group-hover/sub:border-orange-600/30">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-200/60">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                          <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] text-orange-600">Low cost</span>
                        </div>
                        <p className="text-lg md:text-2xl font-serif font-bold text-slate-900 leading-none tracking-tight">Quick Turnaround</p>
                      </div>

                      <Link
                        to="/contact"
                        className="group relative inline-flex w-fit items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-orange-600 text-white rounded-[1.2rem] md:rounded-[1.5rem] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] shadow-xl active:scale-95 overflow-hidden transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Test Edit
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* --- PROGRESS & CONTROLS --- */}
        <motion.div variants={itemVariants} className="mt-10 md:mt-16 flex items-center gap-8 w-full">
          <div className="flex items-baseline gap-1 font-sans text-lg md:text-xl tracking-tighter whitespace-nowrap">
            <span className="text-orange-600 font-bold">0{activeIndex + 1}</span>
            <span className="text-slate-300 font-light">/ 0{services.length}</span>
          </div>

          <div className="flex-1 h-[1px] bg-slate-100 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-orange-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center bg-orange-600 text-white hover:bg-slate-900 hover:text-white transition-all disabled:opacity-20 active:scale-90"
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center bg-orange-600 text-white hover:bg-slate-900 hover:text-white transition-all disabled:opacity-20 active:scale-90"
              disabled={activeIndex === services.length - 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesShowcase;