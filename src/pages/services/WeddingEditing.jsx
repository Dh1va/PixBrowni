import React from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import {
  ArrowRight,
  Globe2,
  CheckCircle2,
  Zap,
  Mail,
  Heart,
  Milestone,
  Church,
  Sparkles,
  Camera,
  Layers,
  Palette,
  Briefcase
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import Process from "../../components/Process";

// --- Animation Variants ---
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
    transition: { staggerChildren: 0.15 }
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

export default function WeddingEditing() {
  const location = useLocation();

  // Creative Suite Sidebar Links
  const relatedServices = [
    { name: "Photo Retouching", path: "/services/photo-retouching" },
    { name: "Model Retouching", path: "/services/model-retouching" },
    { name: "Wedding Editing", path: "/services/wedding-editing" },
    { name: "Food Photo Editing", path: "/services/food-photo-editing" }
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
                Services <span className="text-slate-300 mx-1">•</span> Wedding Editing
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-[0.95] mb-8 text-slate-900">
              Wedding <br />
              <span className="italic text-orange-600 font-light tracking-tight">
                Cinematic Storytelling
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10 font-medium">
              Beyond color correction. We enhance the emotion of every moment, delivering cohesive galleries that tell a timeless love story across every frame.
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
                to="/gallery?category=wedding"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-200 text-slate-900 rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Our Works
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-12 mt-12 text-sm">
              <div><p className="text-2xl font-serif font-bold text-slate-900">3-5d</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Turnaround</p></div>
              <div><p className="text-2xl font-serif font-bold text-slate-900">100%</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Style Match</p></div>
              <div><p className="text-2xl font-serif font-bold text-slate-900">Bulk</p><p className="text-slate-600 font-bold uppercase text-[9px] tracking-widest">Culling Support</p></div>
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
                itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" style={{ filter: "saturate(0.5) contrast(0.8) sepia(0.1)" }} alt="RAW Memory" />}
                itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" alt="Signature Grade" />}
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
                  <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Editorial Overview</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-slate-900 leading-tight">
                    What is <span className="italic font-light text-orange-600">Wedding Post-Pro?</span>
                  </h2>
                  
                  <div className="space-y-6 mb-12">
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      Wedding post-production is the comprehensive journey of transforming thousands of raw event captures into a curated, unified aesthetic story. A single wedding involves rapidly shifting lighting—from harsh outdoor ceremonies to dim, ambient receptions—which requires expert technical balancing to maintain skin tone consistency and mood.
                    </p>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                      Our artisans go beyond basic adjustments to mirror your unique brand DNA. Whether you shoot Fine Art, Moody, or True-to-Life styles, we provide professional culling, global color synchronization, and high-end portrait polishing. We take care of the heavy lifting behind the screen, allowing you to spend more time behind the lens and less time on the workstation.
                    </p>
                  </div>

                  <motion.div 
                    variants={imageReveal}
                    className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border-[8px] border-slate-50"
                  >
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200" alt="Wedding Detail Editing" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.section>

              {/* WHAT WE DELIVER (OUTCOMES) */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="-mx-6 px-6"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.div variants={fadeInUp} className="mb-20">
                    <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Outcomes</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                      The Pixbrowni <br />
                      <span className="italic font-light text-orange-600"> Gallery Standard</span>
                    </h2>
                  </motion.div>
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
                    {[
                      { title: "Signature Style Match", desc: "We perfectly mimic your unique editing DNA (presets, grain, and tones) so your clients receive a seamless brand experience.", icon: <Layers /> },
                      { title: "Smart Gallery Culling", desc: "Selecting the strongest emotional 'hero' shots and removing duplicates or blurs to deliver a high-impact final set.", icon: <Sparkles /> },
                      { title: "Skin Tone Consistency", desc: "Expertly balancing color temperatures across varying lighting conditions to ensure healthy, natural skin tones throughout.", icon: <Palette /> },
                      { title: "High-End Beauty Polish", desc: "Frequency separation and detail enhancement for close-up portraits of the couple, ensuring magazine-ready results.", icon: <Heart /> },
                      { title: "Detail & Texture Pop", desc: "Preserving the intricate lace of the attire, the sparkle of jewelry, and the architectural textures of the venue.", icon: <Camera /> },
                      { title: "B&W Artistic Conversions", desc: "Thoughtful monochrome conversions that emphasize light, shadow, and raw emotion in key storytelling moments.", icon: <Zap /> }
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

              <Process />

              {/* FINAL CTA SECTION */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-20 flex flex-col items-center text-center bg-[#FAF9F6] rounded-[3rem] border border-slate-100"
              >
                 <h3 className="text-3xl md:text-6xl font-serif font-bold mb-8 text-slate-900 leading-tight max-w-3xl">Reclaim Your <br /><span className="italic font-light text-orange-600">Shooting Season.</span></h3>
                 <p className="text-slate-600 mb-12 max-w-2xl font-medium px-6">Join boutique studios and destination wedding photographers who rely on our 5-day editorial pipeline to stay ahead of their workflow.</p>
                 <Link to="/contact" className="group relative inline-flex items-center gap-4 bg-orange-600 text-white px-14 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 shadow-2xl shadow-orange-600/20 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">Start Your Free Test <ArrowRight size={16} /></span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>
              </motion.section>
            </main>

            {/* --- SIDEBAR MENU (RIGHT SIDE) --- */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-34 h-fit space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                {/* Talk Bubble Header */}
                <div className="relative bg-slate-900 text-white px-6 py-4 mb-1">
                  <h3 className="text-[11px] font-black uppercase tracking-widest">Creative Suite</h3>
                  <div className="absolute left-4 -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-slate-900" />
                </div>
                {/* List Box */}
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
                {/* Talk Bubble Header */}
                <div className="relative bg-slate-900 text-white px-6 py-4 mb-1">
                  <h3 className="text-[11px] font-black uppercase tracking-widest">Get In Touch</h3>
                  <div className="absolute left-4 -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-slate-900" />
                </div>
                {/* Contact Info Box */}
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