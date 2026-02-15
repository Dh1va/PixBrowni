import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GripVertical } from 'lucide-react';

const ServiceCard = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  
  // Check if the service is Video Editing to disable the slider
  const isVideo = item.name.toLowerCase().includes('video');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full group"
    >
      {/* Card Head: Conditional Slider or Static Image */}
      <div className="h-64 relative overflow-hidden select-none touch-none bg-slate-100">
        {isVideo ? (
          /* Static Image for Video Editing */
          <img 
            src={item.images[0]} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        ) : (
          /* Before/After Slider for Image Services */
          <>
            <img src={item.images[1]} alt="After" className="absolute inset-0 w-full h-full object-cover" />
            
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={item.images[0]} 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100vw' }} 
              />
            </div>

            {/* Visual Handler Line */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400">
                <GripVertical size={16} />
              </div>
            </div>

            <input 
              type="range" min="0" max="100" value={sliderPos}
              onChange={(e) => setSliderPos(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-col-resize"
            />

            <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-black/40 backdrop-blur-md text-[8px] text-white font-bold uppercase tracking-widest rounded">
              Before
            </div>
            <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-orange-600/80 backdrop-blur-md text-[8px] text-white font-bold uppercase tracking-widest rounded">
              After
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow items-start text-left">
        <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">
          {item.name}
        </h3>
        
        <p className="text-slate-500 text-[13px] leading-relaxed mb-8 font-medium">
          {item.desc}
        </p>
        
        <Link 
          to={item.path} 
          className="relative group/btn overflow-hidden mt-auto w-full py-4 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Know More
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;