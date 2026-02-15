import React from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import {
  ArrowRight,
  Globe2,
  CheckCircle2,
  Cloud,
  Layers,
  Target,
  Image as ImageIcon,
  Zap,
  Mail
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import Process from "../../components/Process";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

export default function AerialEditing() {
  const location = useLocation();

  const relatedServices = [
    { name: "HDR Blending", path: "/services/hdr-blending" },
    { name: "Virtual Staging", path: "/services/virtual-staging" },
    { name: "Day to Dusk", path: "/services/day-to-dusk" },
    { name: "Decluttering", path: "/services/decluttering" },
    { name: "Floor Planning", path: "/services/floor-planning" },
    { name: "Aerial Editing", path: "/services/aerial-editing" },
    { name: "Panorama Stitching", path: "/services/panorama-stitching" },
   
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-orange-100 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-36 md:pt-44 pb-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Services <span className="text-slate-300 mx-1">•</span> Aerial editing
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-[0.95] mb-8 text-slate-900">
              Aerial Editing<br />
              <span className="italic text-orange-600 font-light tracking-tight">
                Built for Real Estate Scale
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10 font-medium">
              Professional drone image enhancement for real estate and commercial listings. 
              We correct perspective, enhance skies, and deliver market-ready visuals within 24 hours.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Free Sample <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link
                to="/gallery?category=aerial"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-200 text-slate-900 rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Our Works
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-12 mt-12 text-sm">
              <div><p className="text-2xl font-serif font-bold text-slate-900">24h</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Turnaround</p></div>
              <div><p className="text-2xl font-serif font-bold text-slate-900">99%</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Satisfaction</p></div>
              <div><p className="text-2xl font-serif font-bold text-slate-900">Global</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Scale</p></div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={imageReveal} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200" style={{ filter: "grayscale(1) brightness(0.8)" }} />}
                itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200" />}
                className="h-[460px] md:h-[600px] cursor-col-resize"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* MAIN CONTENT (Col 1-9) */}
            <main className="lg:col-span-9 space-y-48">
              
              {/* WHAT IS SECTION: FULL WIDTH TEXT */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="scroll-mt-32"
              >
                <div className="w-full">
                  <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Service Overview</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-slate-900 leading-tight">
                    What is <span className="italic font-light text-orange-600">Aerial Editing?</span>
                  </h2>
                  
                  <div className="space-y-6 mb-12">
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      Aerial editing is the specialized post-production of drone and high-altitude photography. Unlike standard ground-level shots, aerial captures often suffer from atmospheric haze, perspective distortion, and flat lighting that can diminish the perceived value of a property. 
                    </p>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      Our process involves manual geometric corrections and advanced dehazing techniques to ensure that property plots appear crystal clear, perfectly level, and visually compelling. By enhancing the vibrancy of the landscape and providing technical clarity, we help real estate professionals deliver market-ready visuals that capture attention instantly.
                    </p>
                  </div>

                  <motion.div 
                    variants={imageReveal}
                    className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border-[8px] border-slate-50"
                  >
                    <img src="https://images.unsplash.com/photo-1473963342623-7c0a7ef4200d?q=80&w=800" alt="Aerial view" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.section>

              {/* WHAT WE DELIVER */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="-mx-6 px-6"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.div variants={fadeInUp} className="mb-15">
                    <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Outcomes</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                      The Pixbrowni <br />
                      <span className="italic font-light text-orange-600"> Deliverable Standard</span>
                    </h2>
                  </motion.div>
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-15">
                    {[
                      { title: "Sky Replacement", desc: "We replace flat, overexposed skies with vibrant blue-hour horizons. Our editors manually mask around complex rooflines to ensure a perfect match.", icon: <Cloud /> },
                      { title: "Perspective Correction", desc: "Drone wide-angle lenses often warp horizons. We apply advanced geometric reconstruction to ensure structures look sound and horizons are level.", icon: <Layers /> },
                      { title: "Distraction Removal", desc: "We clear the canvas of visual clutter, including seamless removal of power lines, construction debris, and neighboring eyesores.", icon: <CheckCircle2 /> },
                      { title: "Color Matching", desc: "Using MLS-ready color standards, we enhance the natural greens and neutralize color casts caused by atmospheric conditions.", icon: <ImageIcon /> },
                      { title: "Atmospheric Dehaze", desc: "Aerial shots often capture 'air-smog' that flattens images. Our process restores clarity to distant details for a sharp, expansive look.", icon: <Zap /> },
                      { title: "Boundary Mapping", desc: "Essential for large estates. We add vector-precise boundary lines and location callouts to help buyers visualize the eagle-eye plot size.", icon: <Target /> }
                    ].map((item, i) => (
                      <motion.div key={i} variants={fadeInUp} className="group flex flex-col items-start">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 mb-8">{item.icon}</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-orange-600 transition-colors">{item.title}</h4>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <div >
                <Process />
              </div>

              {/* FINAL CTA SECTION */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-20 flex flex-col items-center text-center bg-[#FAF9F6] rounded-[3rem] border border-slate-100"
              >
                 <h3 className="text-3xl md:text-6xl font-serif font-bold mb-8 text-slate-900 leading-tight max-w-3xl">Elevate Your Property <br /><span className="italic font-light text-orange-600">Visuals Today.</span></h3>
                 <p className="text-slate-600 mb-12 max-w-2xl font-medium px-6">Join top-tier real estate agencies who rely on our 24-hour delivery for their elite listings. Experience high-end boutique quality at global scale.</p>
                 <Link to="/contact" className="group relative inline-flex items-center gap-4 bg-orange-600 text-white px-14 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 shadow-2xl shadow-orange-600/20 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">Start Your Free Test <ArrowRight size={16} /></span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>
              </motion.section>

            </main>

            {/* SIDEBAR MENU (Col 10-12) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-34 h-fit space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="relative bg-slate-900 text-white px-6 py-4 mb-1">
                  <h3 className="text-[11px] font-black uppercase tracking-widest">Real Estate Suite</h3>
                  <div className="absolute left-4 -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-slate-900" />
                </div>
                <div className="bg-white border border-slate-100 shadow-sm p-6 pt-10 rounded-b-xl">
                  <nav className="flex flex-col gap-5">
                    {relatedServices.map((service, i) => {
                      const isActive = location.pathname === service.path;
                      return (
                        <Link key={i} to={service.path} className="group flex items-center gap-3 transition-all duration-300">
                          <CheckCircle2 size={16} className={`shrink-0 transition-colors ${isActive ? "text-orange-600" : "text-slate-300 group-hover:text-orange-600"}`} />
                          <span className={`text-[13px] font-bold tracking-tight transition-colors ${isActive ? "text-orange-600" : "text-slate-600 group-hover:text-slate-900"}`}>{service.name}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative"
              >
                <div className="relative bg-slate-900 text-white px-6 py-4 mb-1">
                  <h3 className="text-[11px] font-black uppercase tracking-widest">Get In Touch</h3>
                  <div className="absolute left-4 -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-slate-900" />
                </div>
                <div className="bg-white border border-slate-100 shadow-sm p-8 pt-12 rounded-b-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                    <Mail size={12} className="text-orange-600" /> Email-
                  </p>
                  <div className="space-y-3">
                    <a href="mailto:pixbrowni@gmail.com" className="block text-[13px] font-bold text-slate-600 hover:text-orange-600 transition-colors font-sans">pixbrowni@gmail.com</a>
                    
                  </div>
                </div>
              </motion.div>
            </aside>

          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}