import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers,
  Cloud, Plane, Map
} from "lucide-react";
import { Link } from "react-router-dom";

const AerialEditing = () => {
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
    { q: "Can you remove power lines from drone shots?", a: "Yes, our editors specialize in removing distracting power lines, construction equipment, and neighboring clutter from high-altitude shots." },
    { q: "How do you handle hazy or flat sky data?", a: "We use advanced dehazing algorithms and sky replacement techniques to ensure your aerial views look crisp and vibrant." },
    { q: "Can you add property boundary lines?", a: "Absolutely. We can add professional, clean plot markings and boundary outlines to help buyers understand the land size." },
    { q: "What is the typical turnaround for bulk drone batches?", a: "Even for complex aerial batches, we maintain our standard 24-hour delivery window to keep your marketing timeline on track." }
  ];

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
              High-Altitude Precision
            </div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              Aerial <br /> <span className="italic font-light text-slate-400">Mastery.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Elevating drone photography to professional heights. We correct perspective, enhance colors, and purify the landscape from above.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
               <Link to="/contact" className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-600/20 hover:bg-slate-900 transition-all">Request Free Trial</Link>
               <Link to="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all">Service Details</Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200" 
                    style={{ filter: 'saturate(0.5) contrast(0.8) blur(1px)' }} 
                    alt="Raw Drone Shot" 
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200" 
                    alt="Enhanced Aerial" 
                  />
                }
                className="h-[400px] md:h-[600px] w-full object-cover cursor-col-resize"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">Raw Aerial</div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 bg-orange-600/90 backdrop-blur-md rounded-full text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">Pixbrowni Edit</div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-80 md:h-80 bg-blue-100 rounded-full blur-[60px] md:blur-[100px] opacity-60 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS AERIAL EDITING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32">
           <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
              <img src="https://images.unsplash.com/photo-1473177104440-ffe2f3760989?q=80&w=1200" className="w-full h-full object-cover" alt="Drone View" />
           </motion.div>
           <motion.div variants={fadeInUp}>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">Aerial Retouching?</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
                It is the specialized process of enhancing drone and high-altitude photography. Because aerial shots often suffer from haze and lens distortion, we apply advanced corrections to:
              </motion.p>
              <ul className="space-y-4">
                {["Neutralize atmospheric haze and smog", "Add property boundary lines and callouts", "Clean up construction sites and debris", "Replace flat grey skies with vibrant sunsets"].map((item, i) => (
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
            <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Sky-High Workflow</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">The Drone Process.</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Lens Correction", desc: "Drone wide-angle lenses often warp horizons; we fix all distortion." },
              { step: "02", title: "Dehazing", desc: "Removing 'air-smog' to reveal deep colors and sharp building details." },
              { step: "03", title: "Sky Sculpting", desc: "Manually masking and inserting a sky that matches the sun's angle." },
              { step: "04", title: "Boundary Prep", desc: "Adding vector-precise boundary lines or location markers." }
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
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Why Choose <br /> <span className="italic font-light text-slate-400">Our View?</span></motion.h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Boundary Expertise", icon: <Map />, desc: "We accurately map out property limits using provided surveys or blueprints." },
                 { title: "Atmospheric Clarity", icon: <Cloud />, desc: "Specialized tools to cut through fog and haze for crystal-clear results." },
                 { title: "Horizon Balance", icon: <Layers />, desc: "Ensuring the horizon line is perfectly level across all your aerial assets." },
                 { title: "Ready for Print", icon: <PackageCheck />, desc: "High-DPI delivery suitable for large property billboards and flyers." }
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
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Tailored for <br /> <span className="italic font-light text-slate-400">Elevation.</span></motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">Drone marketing is standard for modern real estate; we ensure yours stands out from the competition.</motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Luxury Estates", icon: <Sparkles color="currentColor" />, desc: "Capturing the full scope of high-value properties and their surroundings." },
                 { title: "Agricultural Land", icon: <Map color="currentColor" />, desc: "Marking boundaries for large acreage, farms, and undeveloped plots." },
                 { title: "Commercial Progress", icon: <Plane color="currentColor" />, desc: "Documenting construction phases for developers and stakeholders." },
                 { title: "Coastal Properties", icon: <Cloud color="currentColor" />, desc: "Enhancing the blue of the ocean and the vibrancy of tropical horizons." }
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
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Apex <br /> Visuals.</h2>
                 <p className="text-slate-400 text-lg font-light mb-12">We transform raw sensor data from drone cameras into vibrant, publication-ready marketing assets.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Atmospheric Correction", "Boundary Callouts", "Sky Replacement", "Debris Removal", "Horizon Leveling", "Sharpening & Clarity"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <PackageCheck size={20} className="text-orange-500 shrink-0" />
                         <span className="text-sm font-bold italic tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                 <h4 className="text-2xl font-serif italic mb-6">Aerial Metrics</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Standard Delivery</span>
                       <span className="font-bold">24 Hours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Revision Policy</span>
                       <span className="font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between pb-4">
                       <span className="text-slate-400 font-medium">Max Resolution</span>
                       <span className="font-bold">Native Sensor</span>
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
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Drone Packages.</motion.h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-xl flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Basic Enhancement</h3>
                    <p className="text-4xl font-serif font-bold mb-10 italic">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Color & Haze Fix</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Lens Correction</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-600" /> Sky Replacement</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-orange-600 transition-all">Get Quote</Link>
              </motion.div>

              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="p-12 md:p-16 rounded-[60px] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-orange-600/20">
                 <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                       <h3 className="text-2xl font-bold text-white">Full Plot Prep</h3>
                       <div className="bg-orange-600 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Top Choice</div>
                    </div>
                    <p className="text-4xl font-serif font-bold mb-10 italic text-white">Custom Quote</p>
                    <div className="space-y-5 mb-16 font-medium text-slate-300">
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Boundary Line Addition</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Advanced Object Removal</div>
                       <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Location Callouts</div>
                    </div>
                 </div>
                 <Link to="/contact" className="w-full py-6 bg-orange-600 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] text-center hover:bg-white hover:text-slate-900 transition-all relative z-10">Inquire Now</Link>
              </motion.div>
           </div>
        </motion.section>

      </div>
    </div>
  );
};

export default AerialEditing;