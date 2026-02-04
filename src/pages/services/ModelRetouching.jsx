import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers,
  Smile, UserCheck, Wand2
} from "lucide-react";
import { Link } from "react-router-dom";

const ModelRetouching = () => {
  const [activeFaq, setActiveFaq] = useState(null);

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
      transition: { staggerChildren: 0.15 }
    }
  };

  const faqs = [
    { q: "Do you maintain natural skin texture?", a: "Always. We use advanced Frequency Separation and Dodge & Burn techniques to fix tones while keeping the original pores and skin texture intact." },
    { q: "Can you perform body contouring?", a: "Yes, we offer subtle and professional 'Liquify' adjustments for clothing fit and posture correction upon request." },
    { q: "Do you handle high-end beauty makeup retouching?", a: "Our senior editors specialize in beauty work, including eyeshadow blending, lipstick sharpening, and eyelash enhancement." },
    { q: "What is your turnaround for a full fashion editorial?", a: "We typically deliver a full 10-15 image editorial set within 24–48 hours, depending on the complexity of the grade." }
  ];

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-0 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center mb-40"
        >
          <motion.div variants={fadeInUp}>
            <div className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 w-fit mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
              High-Fashion Editorial
            </div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              Elite <br /> <span className="italic font-light text-slate-400">Portraiture.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Preserving the soul while perfecting the frame. We provide world-class skin and model retouching that meets the standards of Vogue and Harper’s Bazaar.
            </motion.p>
            <motion.div variants={fadeInUp}>
               <Link to="/contact" className="inline-block px-10 py-5 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-orange-600/20 hover:bg-slate-900 transition-all">
                  Request Free Trial
               </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" 
                    style={{ filter: 'saturate(0.6) contrast(0.9) blur(0.5px)' }} 
                    alt="Original Model" 
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" 
                    alt="Retouched Model" 
                  />
                }
                className="h-[400px] md:h-[600px] w-full object-cover cursor-col-resize"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">RAW Capture</div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">High-End Retouch</div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 bg-orange-50 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS MODEL RETOUCHING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32">
           <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200" className="w-full h-full object-cover" alt="Fashion Beauty Retouch" />
           </motion.div>
           <motion.div variants={fadeInUp}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">Model Retouching?</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
                It is the expert application of digital artistry to enhance human subjects. Unlike basic filters, our "Invisible Retouching" philosophy aims to:
              </motion.p>
              <ul className="space-y-4">
                {["Even out skin tones while preserving pores", "Remove stray hairs and flyaways precisely", "Whiten teeth and enhance eye clarity naturally", "Correct clothing wrinkles and garment symmetry"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-900 italic">
                    <CheckCircle2 size={20} className="text-orange-600" /> {item}
                  </li>
                ))}
              </ul>
           </motion.div>
        </motion.section>

        {/* --- SECTION: OUR PROCESS --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 pt-20">
          <div className="text-center mb-20">
            <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">The Beauty Blueprint</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">The Editorial Process.</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Skin Analysis", desc: "We map out blemishes, uneven tones, and areas requiring Dodge & Burn." },
              { step: "02", title: "Freq. Separation", desc: "Separating texture from color to fix tones without losing skin detail." },
              { step: "03", title: "Micro Retouching", desc: "Manual correction of eyes, hair, and clothing for a clean finish." },
              { step: "04", title: "Color Grading", desc: "Applying a cinematic or editorial 'vibe' that matches the mood." }
            ].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm relative group">
                <div className="text-5xl font-serif font-bold text-orange-100 mb-6 group-hover:text-orange-600 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SECTION: WHY CHOOSE --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Why Choose <br /> <span className="italic font-light text-slate-400">Our Artistry?</span></motion.h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Non-Destructive", icon: <Layers />, desc: "We use layered workflows that preserve original image data for maximum flexibility." },
                 { title: "Artisan Eye", icon: <Wand2 />, desc: "Our editors are artists who understand human anatomy and natural aesthetics." },
                 { title: "High-End Gear", icon: <Monitor />, desc: "All work is done on calibrated 4K displays for absolute color accuracy." },
                 { title: "Global Standard", icon: <ShieldCheck />, desc: "Trusted by photographers shooting for high-end international magazines." }
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
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 border-t border-slate-100 pt-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Tailored for <br /> <span className="italic font-light text-slate-400">The Spotlight.</span></motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">From portfolio updates to major advertising campaigns, we deliver a polished, professional look.</motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Fashion Photographers", icon: <Camera color="currentColor" />, desc: "Outsource your high-volume editorial work without sacrificing your signature style." },
                 { title: "Beauty Brands", icon: <Sparkles color="currentColor" />, desc: "Creating hyper-detailed skin shots for skincare and cosmetics marketing." },
                 { title: "Modeling Agencies", icon: <UserCheck color="currentColor" />, desc: "Professional 'Headshot' and 'Z-Card' retouching that builds model authority." },
                 { title: "Corporate Portraits", icon: <Smile color="currentColor" />, desc: "Clean, professional executive headshots for LinkedIn and company brochures." }
               ].map((item, i) => (
                 <motion.div variants={fadeInUp} key={i} className="group">
                    <div className="mb-6 flex items-center gap-4">
                       <div className="p-3 bg-white shadow-sm border border-slate-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">{item.icon}</div>
                       <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="font-medium text-slate-900 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.section>

        {/* --- SECTION: PREMIUM DELIVERABLES --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-48 bg-slate-900 rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
           <div className="relative z-10 grid lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Signature <br /> Polish.</h2>
                 <p className="text-slate-400 text-lg font-light mb-12">Every model portrait we deliver is treated with the same meticulous care, regardless of project size.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Texture Retention", "Frequency Separation", "Dodge & Burn", "Hair & Eye Cleanup", "Color Uniformity", "Body Contouring"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <PackageCheck size={20} className="text-orange-500 shrink-0" />
                         <span className="text-sm font-bold italic tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                 <h4 className="text-2xl font-serif italic mb-6">Execution Specs</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Standard TAT</span>
                       <span className="font-bold">24–48 Hours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Native Depth</span>
                       <span className="font-bold">16-Bit Pro</span>
                    </div>
                    <div className="flex justify-between pb-4">
                       <span className="text-slate-400 font-medium">Export Formats</span>
                       <span className="font-bold">PSD / TIFF / JPG</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </motion.section>

        {/* --- SECTION: PRICING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-48">
           <div className="text-center mb-24">
              <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Investment</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Retouching Packages.</motion.h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Basic Portrait</h3>
                    <p className="text-4xl font-serif font-bold mb-10 italic">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Blemish & Acne Removal</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Teeth & Eye Whitening</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Basic Global Grade</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-orange-600 transition-all">Select Basic</Link>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-orange-600/20">
                 <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                       <h3 className="text-2xl font-bold text-white">High-End Editorial</h3>
                       <div className="bg-orange-600 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Pro Level</div>
                    </div>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-white">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium text-slate-300">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Full Freq. Separation</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Dodge & Burn Texturing</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Detailed Hair & Makeup Work</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-orange-600 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-white hover:text-slate-900 transition-all relative z-10">Request Sample</Link>
                 <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              </motion.div>
           </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ModelRetouching;