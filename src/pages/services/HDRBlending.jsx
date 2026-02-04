import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const HDRBlending = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // --- Animation Configurations ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-0 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION WITH INTERACTIVE SLIDER --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center mb-40"
        >
          <motion.div variants={fadeInUp}>
            <div className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 w-fit mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
              Natural Exposure Mastery
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              HDR <br /> <span className="italic font-light text-slate-400">Blending.</span>
            </h1>
            <p className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Bring out every detail in your photos with our expert HDR blending service. We combine multiple exposures into one balanced, realistic image.
            </p>
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-600/20 hover:bg-slate-900 transition-all">Upload Images</Link>
               <Link to="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">Free Sample</Link>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" 
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
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                Raw Format
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                Pixbrowni Edit
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 bg-orange-100 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-blue-50 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS HDR BLENDING --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32"
        >
           <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" className="w-full h-full object-cover" alt="HDR Explanation" />
           </motion.div>
           <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">HDR Blending?</span></h2>
              <p className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
                HDR (High Dynamic Range) blending is the process of merging multiple bracketed exposures into a single perfectly balanced photo. Instead of automated filters, we use manual layer blending techniques to:
              </p>
              <ul className="space-y-4">
                {["Recover bright highlights", "Reveal shadow details", "Maintain natural color tones", "Avoid halos and over-processed looks"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-900 italic">
                    <CheckCircle2 size={20} className="text-orange-600" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-900 font-medium italic">The result is a clean, realistic image that looks exactly how the human eye sees the scene.</p>
           </motion.div>
        </motion.section>

        {/* --- SECTION: OUR PROCESS --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-48 pt-20"
        >
          <div className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Precision Workflow</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">The HDR Blending Process.</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Exposure Review", desc: "We analyze all bracketed images to identify highlight and shadow data." },
              { step: "02", title: "Manual Blending", desc: "Each exposure is blended by hand using masks for precise control." },
              { step: "03", title: "Tone Correction", desc: "White balance, contrast, and brightness are professionally fine-tuned." },
              { step: "04", title: "Final Polish", desc: "A quality specialist reviews every image before final delivery." }
            ].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm relative group">
                <div className="text-5xl font-serif font-bold text-orange-200 mb-6 group-hover:text-orange-600 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SECTION: WHY CHOOSE OUR SERVICE --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-48"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                 Why Choose <br /> <span className="italic font-light text-slate-400">Our Service?</span>
               </motion.h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Natural Results", icon: <ShieldCheck />, desc: "No fake HDR look. We avoid harsh contrast, halos, and oversaturation for absolute realism." },
                 { title: "100% Manual Editing", icon: <MousePointer2 />, desc: "No automated HDR software—every single photo is hand-crafted by professional editors." },
                 { title: "Commercial Ready", icon: <Monitor />, desc: "Perfectly optimized for property listings, architecture, and high-end marketing visuals." },
                 { title: "Fast & Scalable", icon: <Zap />, desc: "Standard 12–24 hour delivery. Bulk orders supported with consistent quality for agencies." }
               ].map((item, i) => (
                 <motion.div variants={fadeInUp} key={i} className="group">
                    <div className="mb-6 p-4 bg-white shadow-sm border border-slate-50 rounded-2xl w-fit text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                       {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="font-medium text-slate-900 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.section>

        {/* --- SECTION: IDEAL FOR --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-48 border-t border-slate-100 pt-32"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                 Tailored for <br /> <span className="italic font-light text-slate-400">Industry Leaders.</span>
               </motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">
                 Our HDR workflows are engineered specifically for high-end sectors where color accuracy and shadow detail are non-negotiable.
               </motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Luxury Real Estate", icon: <Target className="" />, desc: "Perfectly exposed interiors for multi-million dollar MLS listings and boutique agency portfolios." },
                 { title: "Hospitality & Hotels", icon: <Briefcase className="" />, desc: "Capturing the inviting warmth of resort suites and commercial lobbies with absolute realism." },
                 { title: "Architectural Design", icon: <Camera className="" />, desc: "Preserving the structural integrity and material textures of award-winning architectural builds." },
                 { title: "Airbnb & Rentals", icon: <Sparkles className="" />, desc: "Boosting booking rates with high-impact, clean photography that builds immediate guest trust." }
               ].map((item, i) => (
                 <motion.div variants={fadeInUp} key={i} className="group">
                    <div className="mb-6 flex items-center gap-4">
                       <div className="p-3 bg-white shadow-sm border border-slate-50 rounded-2xl w-fit text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">{item.icon}</div>
                       <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="font-medium text-slate-900 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.section>

        {/* --- SECTION: PREMIUM DELIVERABLES --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-48 bg-slate-900 rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden"
        >
           <div className="relative z-10 grid lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Premium <br /> Deliverables.</h2>
                 <p className="text-slate-400 text-lg font-light mb-12">Every asset undergoes a 10-point senior editorial check to ensure it meets international publication standards.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Balanced Shadows", "Window Pulls", "Sky Recovery", "Color Correction", "Lens Straightening", "Artifact Removal"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <PackageCheck size={20} className="text-orange-500 shrink-0" />
                         <span className="text-sm font-bold italic tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                 <h4 className="text-2xl font-serif italic mb-6">File Formats & Delivery</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Standard TAT</span>
                       <span className="font-bold">12–24 Hours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Native Formats</span>
                       <span className="font-bold">RAW / TIFF / PSD</span>
                    </div>
                    <div className="flex justify-between pb-4">
                       <span className="text-slate-400 font-medium">Web Output</span>
                       <span className="font-bold">Optimized JPG</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </motion.section>

        {/* --- SECTION: PRICING --- */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-48"
        >
           <div className="text-center mb-24">
              <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Investment</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Professional Packages.</motion.h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-xl flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-center mb-10">
                       <h3 className="text-2xl font-bold">Basic HDR</h3>
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400"><Monitor size={20}/></div>
                    </div>
                    <p className="text-4xl font-serif font-bold mb-10 italic">Custom Quote</p>
                    <div className="space-y-5 mb-16">
                       {["Up to 3 exposures", "Natural manual blend", "Basic color correction", "12h delivery"].map((f, i) => (
                         <div key={i} className="flex items-center gap-3 font-medium text-slate-900">
                            <CheckCircle2 size={18} className="text-orange-600" /> {f}
                         </div>
                       ))}
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-orange-600 transition-all">Select Basic</Link>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-orange-600/20">
                 <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                       <h3 className="text-2xl font-bold text-white">Advanced HDR</h3>
                       <div className="bg-orange-600 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Recommended</div>
                    </div>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-white">Custom Quote</p>
                    <div className="space-y-5 mb-16">
                       {["5+ bracketed exposures", "Expert window pull & sky masking", "High-end texture recovery", "Dedicated account QC"].map((f, i) => (
                         <div key={i} className="flex items-center gap-3 font-medium text-white">
                            <CheckCircle2 size={18} className="text-orange-500" /> {f}
                         </div>
                       ))}
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-orange-600 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-white hover:text-slate-900 transition-all relative z-10">Request Free Trial</Link>
                 <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              </motion.div>
           </div>
        </motion.section>

      </div>
    </div>
  );
};

export default HDRBlending;