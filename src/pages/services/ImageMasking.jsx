import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers,
  Wand2, Wind, Smile
} from "lucide-react";
import { Link } from "react-router-dom";

const ImageMasking = () => {
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
    { q: "When do I need masking instead of clipping path?", a: "Masking is used for objects with complex, fuzzy, or translucent edges like hair, fur, smoke, or sheer fabrics where a vector path would look too sharp and unnatural." },
    { q: "How do you handle fine hair details?", a: "We use a combination of Channel Masking and Layer Masking techniques to isolate even the thinnest strands of hair while maintaining softness." },
    { q: "Can you change the background after masking?", a: "Yes. Once an image is masked, the object is isolated, allowing you to place it on any background—solid color, landscape, or commercial set." },
    { q: "Do you offer 'Alpha Channel' masking?", a: "Absolutely. We deliver Alpha Channel masks within your PSDs, giving you full control over transparency and edge selection." }
  ];

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-0 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div variants={fadeInUp}>
            <div className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 w-fit mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
              Soft Edge Complexity
            </div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              Image <br /> <span className="italic font-light text-slate-400">Masking.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Isolating the impossible. From fine hair strands to sheer fabrics, our masking services preserve the softness and transparency of your most complex subjects.
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
                    src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1200" 
                    style={{ filter: 'brightness(0.8)' }} 
                    alt="Original Subject" 
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1200" 
                    style={{ backgroundColor: '#F1F5F9' }}
                    alt="Masked Subject" 
                  />
                }
                className="h-[400px] md:h-[600px] w-full object-cover cursor-col-resize"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Complex Background</div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Perfect Mask</div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS MASKING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32">
           <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1521119989659-a83eee4882c2?q=80&w=1200" className="w-full h-full object-cover" alt="Model Hair Masking" />
           </motion.div>
           <motion.div variants={fadeInUp}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">Layer Masking?</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
                It is an advanced Photoshop technique used to isolate subjects with soft or difficult edges. Unlike clipping paths, masking allows for transparency control to:
              </motion.p>
              <ul className="space-y-4">
                {["Isolate human hair, animal fur, and fuzzy edges", "Retain the transparency of glass and sheer fabrics", "Create natural transitions for foliage and complex plants", "Enable high-end compositing without 'halo' effects"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-900 italic">
                    <CheckCircle2 size={20} className="text-orange-600" /> {item}
                  </li>
                ))}
              </ul>
           </motion.div>
        </motion.section>

        {/* --- SECTION: IDEAL FOR --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 border-t border-slate-100 pt-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Tailored for <br /> <span className="italic font-light text-slate-400">The Details.</span></motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">Handling the technical complexity that basic removal tools simply cannot touch.</motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Beauty & Fashion", icon: <Smile color="currentColor" />, desc: "Isolating models with flowing hair for high-fashion digital billboards." },
                 { title: "Pet Products", icon: <Wind color="currentColor" />, desc: "Perfectly masking fur for animal accessories and veterinary marketing." },
                 { title: "Beverage Brands", icon: <Layers color="currentColor" />, desc: "Retaining the transparency of bottles and the splash of liquids." },
                 { title: "Outdoor Lifestyle", icon: <Wand2 color="currentColor" />, desc: "Masking complex trees and landscapes for lifestyle composites." }
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

        {/* --- SECTION: PRICING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-48">
           <div className="text-center mb-24">
              <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Investment</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Masking Packages.</motion.h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Alpha Channel</h3>
                    <p className="text-4xl font-serif font-bold mb-10 italic">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Channel Masking Output</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Soft-Edge Processing</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> 24h Standard Delivery</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-orange-600 transition-all">Select Basic</Link>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-orange-600/20">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Transparency Master</h3>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-white">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium text-slate-300">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Hair & Mesh Detailing</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Glass & Liquid Transparency</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Layered PSD with Masks</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-orange-600 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-white hover:text-slate-900 transition-all relative z-10">Request Sample</Link>
              </motion.div>
           </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ImageMasking;