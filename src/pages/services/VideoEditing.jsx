import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, Zap, ArrowRight, ShieldCheck, 
  Monitor, Plus, Minus, Camera, Sparkles, 
  Target, PackageCheck, Briefcase, MousePointer2, Layers,
  PlayCircle, Film, Volume2
} from "lucide-react";
import { Link } from "react-router-dom";

const VideoEditing = () => {
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
    { q: "What software do you use for editing?", a: "We use Adobe Premiere Pro and DaVinci Resolve for professional grade editing and color correction." },
    { q: "Can you provide vertical videos for Instagram/TikTok?", a: "Yes, we can edit and export your content in multiple aspect ratios (16:9, 9:16, 1:1) to fit any platform." },
    { q: "Do you handle motion graphics?", a: "We offer essential motion graphics including lower thirds, animated callouts, and smooth logo reveals." },
    { q: "Do you provide royalty-free music?", a: "Yes, all our video packages include licensed, royalty-free background music to ensure your content is safe for all platforms." }
  ];

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-0 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION (Single Image instead of slider for Video) --- */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div variants={fadeInUp}>
            <div className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 w-fit mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
              Dynamic Visual Rhythm
            </div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-10 text-slate-900">
              Video <br /> <span className="italic font-light text-slate-400">Production.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-medium leading-relaxed max-w-md text-slate-900 mb-12">
              Bringing motion to life. We provide professional post-production for real estate walkthroughs, commercial promos, and high-impact social reels.
            </motion.p>
            <motion.div variants={fadeInUp}>
               <Link to="/contact" className="inline-block px-10 py-5 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-orange-600/20 hover:bg-slate-900 transition-all">
                  Request Free Trial
               </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative order-1 lg:order-2">
             <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-slate-900 aspect-video group">
                <img 
                   src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200" 
                   className="w-full h-full object-cover opacity-60" 
                   alt="Video Editing UI" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <PlayCircle size={80} className="text-white opacity-80 group-hover:scale-110 group-hover:text-orange-500 transition-all duration-500" />
                </div>
             </div>
          </motion.div>
        </motion.div>

        {/* --- SECTION: WHAT IS VIDEO PRODUCTION --- */}
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 grid lg:grid-cols-2 gap-20 items-center border-t border-slate-100 pt-32">
   <motion.div variants={fadeInUp} className="rounded-[56px] overflow-hidden shadow-2xl h-[500px]">
      <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200" className="w-full h-full object-cover" alt="Video Editing Suite" />
   </motion.div>
   <motion.div variants={fadeInUp}>
      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-slate-900">What is <br /><span className="italic font-light text-slate-400">Cinematic Editing?</span></h2>
      <p className="text-lg font-medium text-slate-900 leading-relaxed mb-8">
        It is the rhythmic assembly of footage to create a compelling narrative. We take your raw clips and apply professional techniques to:
      </p>
      <ul className="space-y-4">
        {["Correct exposure and color consistency across clips", "Apply smooth stabilization to shaky handheld footage", "Curate the perfect licensed soundtrack for your brand", "Optimize pacing to maintain viewer retention"].map((item, i) => (
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
            <motion.p variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">The Timeline Workflow</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900">The Editing Process.</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Footage Review", desc: "We sort through your raw clips to find the most cinematic moments." },
              { step: "02", title: "The Assembly", desc: "Clips are stitched together with smooth, professional transitions." },
              { step: "03", title: "Color & Sound", desc: "Grade application and professional audio balancing for a premium feel." },
              { step: "04", title: "Render & QC", desc: "Exporting in your requested resolution with a final quality check." }
            ].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm relative group">
                <div className="text-5xl font-serif font-bold text-orange-100 mb-6 group-hover:text-orange-600 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SECTION: IDEAL FOR --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-48 border-t border-slate-100 pt-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Tailored for <br /> <span className="italic font-light text-slate-400">Movement.</span></motion.h2>
               <motion.p variants={fadeInUp} className="mt-8 text-lg font-medium text-slate-600 leading-relaxed">Engaging audiences through high-retention cinematic editing.</motion.p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 { title: "Property Tours", icon: <Film color="currentColor" />, desc: "Smooth architectural walkthroughs that sell properties 3x faster." },
                 { title: "Social Reels", icon: <Sparkles color="currentColor" />, desc: "Fast-paced, engaging content for Instagram, TikTok, and YouTube Shorts." },
                 { title: "Brand Stories", icon: <Briefcase color="currentColor" />, desc: "Commercial-grade promos that communicate your agency's value." },
                 { title: "Aerial Reels", icon: <Camera color="currentColor" />, desc: "Stitching drone footage into cinematic high-altitude presentations." }
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
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Cinematic <br /> Output.</h2>
                 <p className="text-slate-400 text-lg font-light mb-12">We provide complete post-production packages that are ready for immediate publishing.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Cinematic Transitions", "Professional Color Grading", "Audio Mastering", "Lower Third Titles", "Stabilization Fixes", "Licensed Music Samples"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <PackageCheck size={20} className="text-orange-500 shrink-0" />
                         <span className="text-sm font-bold italic tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 flex flex-col justify-center">
                 <h4 className="text-2xl font-serif italic mb-6">Editing Metrics</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Standard TAT</span>
                       <span className="font-bold">48–72 Hours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                       <span className="text-slate-400 font-medium">Resolution Support</span>
                       <span className="font-bold">Up to 4K 60fps</span>
                    </div>
                    <div className="flex justify-between pb-4">
                       <span className="text-slate-400 font-medium">Audio Quality</span>
                       <span className="font-bold">Mastered Stereo</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </motion.section>

      </div>
    </div>
  );
};

export default VideoEditing;