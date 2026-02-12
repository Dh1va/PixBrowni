import { motion } from 'framer-motion';
import { 
  Home, Sparkles, Video, Scissors, Layers, ArrowRight, 
  CheckCircle2, Zap, ShieldCheck, Globe, Focus,
  Maximize, Camera, Lightbulb, Palette, Box, Users, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const primarySectors = [
    {
      title: "Real Estate & Architecture",
      icon: <Home className="w-10 h-10" />,
      tagline: "Property Excellence",
      description: "We provide the visual infrastructure for elite developers and real estate firms globally.",
      subServices: [
        { 
          name: "HDR Blending", 
          desc: "Our master editors manually blend multiple exposures to create a perfectly balanced image. We maintain highlight detail in windows while illuminating interior shadows for a natural, high-end look.", 
          icon: <Layers /> 
        },
        { 
          name: "Virtual Staging", 
          desc: "Transform cold, empty properties into inviting, fully-furnished homes. We use premium 3D assets and realistic lighting shadows to help potential buyers visualize themselves in the space.", 
          icon: <Focus /> 
        },
        { 
          name: "Day to Dusk", 
          desc: "Create an emotional connection with stunning twilight conversions. We replace dull skies with vibrant sunsets and manually turn on interior/exterior lights for a prestigious evening atmosphere.", 
          icon: <Lightbulb /> 
        },
        { 
          name: "Floor Plans", 
          icon: <Box />, 
          desc: "Convert your sketches or blueprints into clean, professional 2D or 3D floor plans. Our layouts are designed for clarity and visual appeal, helping buyers understand spatial flow instantly." 
        }
      ],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    },
    {
      title: "Commercial & Fashion",
      icon: <Sparkles className="w-10 h-10" />,
      tagline: "Editorial Standards",
      description: "Retouching that maintains natural skin texture while achieving high-end commercial finishes.",
      subServices: [
        { 
          name: "Skin Retouch", 
          desc: "We use advanced frequency separation and dodge-and-burn techniques to perfect the complexion. Our artists ensure that pores and natural textures are preserved for a high-fashion, editorial result.", 
          icon: <Sparkles /> 
        },
        { 
          name: "Color Correction", 
          desc: "Ensure absolute color accuracy across your entire product line. We meticulously match digital files to physical fabric swatches or samples, maintaining vital brand integrity.", 
          icon: <Palette /> 
        },
        { 
          name: "Jewelry Post", 
          desc: "Bring out the brilliance in every facet. Our specialized jewelry retouchers remove reflections, enhance stone clarity, and polish metal surfaces to create a captivating shine.", 
          icon: <Zap /> 
        },
        { 
          name: "Ghost Mannequin", 
          icon: <Users />, 
          desc: "Give your apparel a realistic, three-dimensional shape. By seamlessly combining multiple shots, we remove the mannequin to show the inner lining and structure of the garment." 
        }
      ],
      image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1200",
    }
  ];

  return (
    
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-24 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- EDITORIAL AUTHORITY HERO (Matching About Page) --- */}
        <div className="relative mb-40">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            
            {/* Left Side: The Narrative Frame */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 z-20 relative lg:-mr-20"
            >
              <div className="bg-white p-10 md:p-20 rounded-[60px] shadow-[40px_40px_100px_rgba(0,0,0,0.08)] border border-slate-50">
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">Expertise</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.85] mb-12">
                  Visual <br />
                  <span className="italic font-light text-slate-400">Mastery.</span>
                </motion.h1>

                <div className="space-y-8">
                  <motion.p variants={fadeInUp} className="text-xl font-bold leading-tight">
                    Technical infrastructure for the world's leading visual storytellers.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-lg font-medium leading-relaxed opacity-80">
                    We translate RAW data into gallery-ready assets. From luxury real estate to high-fashion editorials, we define the gold standard in post-production.
                  </motion.p>
                </div>

                <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8">
                  <Link to="/contact" className="px-10 py-5 bg-orange-600 text-white rounded-[24px] font-bold text-sm hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-orange-600/20">
                    Get Started
                  </Link>
                  <div className="hidden sm:block h-px w-20 bg-slate-200" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side: Immersive Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 h-[600px] lg:h-[850px] relative mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1200" 
                  alt="Professional Post Production" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Floating Performance Tag */}
              <div className="absolute bottom-12 right-12 bg-slate-900 text-white p-10 rounded-[48px] shadow-2xl max-w-[280px]">
                <div className="text-orange-500 mb-4">
                  <Zap size={32} />
                </div>
                <div className="text-3xl font-bold mb-1">
                  <CountUp end={99} duration={3} enableScrollSpy scrollSpyOnce />%
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accuracy & Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- DETAILED SERVICE SECTORS --- */}
        <div className="space-y-48 md:space-y-64">
          {primarySectors.map((sector, index) => (
            <div key={index} className="flex flex-col gap-20">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-between items-start lg:items-end gap-8`}>
                 <div className="max-w-2xl">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-4">{sector.tagline}</p>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">{sector.title}</h3>
                 </div>
                 <p className="text-slate-900 max-w-sm text-lg font-medium leading-relaxed">{sector.description}</p>
              </div>

              <div className={`grid lg:grid-cols-12 gap-8 items-start ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Sector Image Block */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="rounded-[48px] overflow-hidden shadow-2xl relative h-[400px] lg:h-[850px]">
                    <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </motion.div>

                {/* Sub-Service Detailed Bento Cards */}
<div className={`lg:col-span-7 grid sm:grid-cols-1 md:grid-cols-2 gap-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
  {sector.subServices.map((sub, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10 }}
      className="p-8 md:p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group flex flex-col justify-between min-h-[380px]"
    >
      {/* Top Content: Icon, Title, Description */}
      <div>
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
           {sub.icon}
        </div>
        <h5 className="text-2xl font-bold text-slate-900 mb-4">{sub.name}</h5>
        <p className="text-slate-900 text-sm font-medium leading-[1.8] mb-6">
          {sub.desc}
        </p>
      </div>
      
      {/* Bottom Content: Pill Button - Now locked at the bottom */}
      <Link 
        to="/contact" 
        className="inline-flex items-center w-fit gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500"
      >
        <span className="text-[11px] font-black uppercase tracking-widest">Discover More</span>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
           <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  ))}
</div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FINAL PREMIUM CTA --- */}
        <div className="mt-48 p-12 md:p-24 rounded-[60px] bg-slate-900 text-white text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-3xl mx-auto">
              <h4 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight text-white">Ready for a <span className="italic font-light text-slate-400">Sample?</span></h4>
              <p className="text-xl text-slate-400 font-medium mb-12">Experience our precision firsthand. We offer 3 complimentary images for new partners.</p>
              <Link to="/contact" className="px-12 py-6 bg-orange-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl">
                 Start Free Trial
              </Link>
           </div>
           <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;