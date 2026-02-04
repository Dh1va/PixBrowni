import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers,
  Heart, Milestone, Church
} from "lucide-react";
import { Link } from "react-router-dom";

const WeddingEditing = () => {
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
    { q: "Can you match my specific editing style?", a: "Yes. We ask for a reference gallery or your 'Lightroom Presets' to ensure our color grading aligns perfectly with your brand's look and feel." },
    { q: "How do you handle large catalogs of 1000+ images?", a: "We have a dedicated culling and batch-processing workflow designed to handle high-volume wedding galleries while maintaining individual image quality." },
    { q: "Do you offer 'Culling' services?", a: "Absolutely. We can filter your raw shots to select the best emotional moments, reducing your workload from thousands to the final polished set." },
    { q: "What is your turnaround time during peak season?", a: "We scale our team to meet demand, typically delivering full wedding galleries within 3–5 business days even during the busiest months." }
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
              Cinematic Storytelling
            </div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              Wedding <br /> <span className="italic font-light text-slate-400">Post-Pro.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Beyond color correction. We enhance the emotion of every moment, delivering cohesive galleries that tell a timeless love story.
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
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" 
                    style={{ filter: 'saturate(0.5) contrast(0.8) sepia(0.1)' }} 
                    alt="Raw Wedding Shot" 
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200" 
                    alt="Edited Wedding Shot" 
                  />
                }
                className="h-[400px] md:h-[600px] w-full object-cover cursor-col-resize"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">RAW Memory</div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">Signature Grade</div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-orange-50 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS WEDDING EDITING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32">
           <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200" className="w-full h-full object-cover" alt="Wedding Detail Editing" />
           </motion.div>
           <motion.div variants={fadeInUp}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">Wedding Editing?</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
                It is the comprehensive post-production of a wedding day gallery. We go beyond basic adjustments to provide a unified aesthetic that captures the magic of the event:
              </motion.p>
              <ul className="space-y-4">
                {["Consistent skin tones across varying lighting", "Artistic color grading (Fine Art, Moody, or True-to-Life)", "Meticulous removal of distracting background elements", "Highlighting key details of decor, attire, and emotions"].map((item, i) => (
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
            <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">The Gallery Journey</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">The Editorial Process.</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Culling & Sorting", desc: "Selecting the 'hero' shots and removing duplicates or blurs." },
              { step: "02", title: "Global Correction", desc: "Balancing exposure, white balance, and tint across the set." },
              { step: "03", title: "Creative Grade", desc: "Applying your signature style for a cohesive look and feel." },
              { step: "04", title: "Beauty Polishing", desc: "High-end retouching for close-up portraits of the couple." }
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
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Why Choose <br /> <span className="italic font-light text-slate-400">Our Workflow?</span></motion.h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Style Adaptability", icon: <Layers />, desc: "We perfectly mimic your unique editing DNA so clients never see a difference." },
                 { title: "High-Volume Capacity", icon: <Milestone />, desc: "Handling back-to-back wedding weekends without quality bottlenecks." },
                 { title: "Detail Obsession", icon: <Sparkles />, desc: "Preserving the intricate lace of a dress and the sparkle of a ring." },
                 { title: "Stress Reduction", icon: <Zap />, desc: "Getting you out from behind the computer and back behind the camera." }
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
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Tailored for <br /> <span className="italic font-light text-slate-400">The Big Day.</span></motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">Our event suites are designed for photographers who value artistic consistency and rapid delivery.</motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Boutique Photographers", icon: <Camera color="currentColor" />, desc: "Maintaining a hand-crafted feel for high-end, luxury wedding clients." },
                 { title: "Destination Shooters", icon: <Milestone color="currentColor" />, desc: "Outsource your editing while traveling between global shoot locations." },
                 { title: "Wedding Agencies", icon: <Briefcase color="currentColor" />, desc: "Scalable post-production for studios managing multiple teams every weekend." },
                 { title: "Elopement Specialists", icon: <Heart color="currentColor" />, desc: "Bringing out the intimacy and raw emotion of smaller, private ceremonies." }
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
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Flawless <br /> Galleries.</h2>
                 <p className="text-slate-400 text-lg font-light mb-12">We ensure every image in your final delivery meets the highest standards of modern wedding photography.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Smart Culling", "Preserve Skin Pores", "Noise Reduction", "Grain Application", "Shadow Recovery", "Black & White Conversions"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <PackageCheck size={20} className="text-orange-500 shrink-0" />
                         <span className="text-sm font-bold italic tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                 <h4 className="text-2xl font-serif italic mb-6">Gallery Specs</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Standard TAT</span>
                       <span className="font-bold">3–5 Days</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Native Profiles</span>
                       <span className="font-bold">LR / C1 Support</span>
                    </div>
                    <div className="flex justify-between pb-4">
                       <span className="text-slate-400 font-medium">Max Output</span>
                       <span className="font-bold">Full-Res JPEG</span>
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
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Editing Packages.</motion.h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Essentials Set</h3>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-slate-900">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Color & Exposure Sync</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Basic Cropping</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> 5-Day Delivery</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-orange-600 transition-all">Get Quote</Link>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-orange-600/20">
                 <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                       <h3 className="text-2xl font-bold text-white">Full Gallery Story</h3>
                       <div className="bg-orange-600 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Pro Level</div>
                    </div>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-white">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium text-slate-300">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Professional Culling</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Advanced Portrait Retouching</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Custom B&W Selections</div>
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

export default WeddingEditing;