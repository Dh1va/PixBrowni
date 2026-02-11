import { motion } from 'framer-motion';

const TechStack = () => {
  const tools = [
    { name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
    { name: "Lightroom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
    { name: "DaVinci Resolve", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/DaVinci_Resolve_Studio.png" },
    { name: "Capture One", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Capture_One_New_Logo_.png" },
    { name: "After Effects", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
    { name: "Premiere Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
  ];

  // Tripled array ensures the track length exceeds viewport width for a perfect loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-12 md:py-24 bg-white border-y border-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
        >
          Industry-Standard Infrastructure
        </motion.p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden select-none relative">
        <motion.div 
          className="flex flex-nowrap shrink-0 gap-16 md:gap-32 items-center px-8"
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, // Slow, elegant speed
            repeat: Infinity 
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 shrink-0 transition-transform duration-500 hover:scale-110"
            >
              <img 
                src={tool.logo} 
                alt={tool.name} 
                className="h-8 md:h-12 w-auto object-contain drop-shadow-sm"
              />
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-tight italic">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Seamless Handoff Track */}
        <motion.div 
          className="flex flex-nowrap shrink-0 gap-16 md:gap-32 items-center px-8"
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex items-center gap-6 shrink-0 transition-transform duration-500 hover:scale-110"
            >
              <img 
                src={tool.logo} 
                alt={tool.name} 
                className="h-8 md:h-12 w-auto object-contain drop-shadow-sm"
              />
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-tight italic">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Edge Masking for Professional Fade */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TechStack;