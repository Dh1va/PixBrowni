import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesShowcase = () => {
  const services = [
    {
      id: "hdr-blending",
      title: "HDR Blending",
      tagline: "Architecture",
      desc: "Our high-dynamic-range blending is engineered for luxury real estate. We specialize in natural luminosity, merging multiple exposures to preserve exterior views while maintaining inviting interior tones.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      bgColor: "bg-white",
      features: [
        { name: "Day to Dusk (Twilight)", path: "/services/hdr-blending" },
        { name: "Window View Preservation", path: "/services/hdr-blending" },
        { name: "Flash-Ambient (Flambient)", path: "/services/hdr-blending" },
        { name: "Color Cast Removal", path: "/services/photo-retouching" }
      ]
    },
    {
      id: "model-retouching",
      title: "Post Production",
      tagline: "Editorial",
      desc: "We provide high-end frequency separation and non-destructive dodge-and-burn for fashion and beauty. Our editors focus on micro-texture preservation, ensuring skin looks flawless yet authentic.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
      bgColor: "bg-[#F8FAFC]",
      features: [
        { name: "Frequency Separation", path: "/services/model-retouching" },
        { name: "Advanced Image Masking", path: "/services/image-masking" },
        { name: "Global Color Grading", path: "/services/photo-retouching" },
        { name: "Background Extensions", path: "/services/clipping-path" }
      ]
    },
    {
      id: "virtual-staging",
      title: "Virtual Staging",
      tagline: "3D Rendering",
      desc: "Transform vacant spaces into aspirational homes. Using high-fidelity 3D asset libraries, we match perspective and lighting to the original shot, providing buyers with a realistic sense of luxury.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
      bgColor: "bg-[#FFF7ED]",
      features: [
        { name: "Contemporary Staging", path: "/services/virtual-staging" },
        { name: "Virtual Decluttering", path: "/services/decluttering" },
        { name: "2D/3D Floor Planning", path: "/services/floor-planning" },
        { name: "Object Removal", path: "/services/decluttering" }
      ]
    }
  ];

  return (
    <section className="bg-[#FBFBFD] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Core Disciplines</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Specialized <span className="italic font-light text-slate-400">Expertise.</span>
            </p>
          </div>
          <Link 
            to="/services" 
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-2 hover:text-orange-600 hover:border-orange-600 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Sticky Stacking Container */}
        <div className="relative">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="sticky top-20 md:top-28 mb-12 md:mb-32"
              style={{ zIndex: index + 1 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl ${service.bgColor} p-6 md:p-10 lg:p-12`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* COL 1: IMAGE */}
                  <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-sm bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* COL 2: CONTENT */}
                  <div className="lg:col-span-5 space-y-4 md:space-y-6">
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-orange-200" /> {service.tagline}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    
                    {/* Clear Primary Button */}
                    <div className="pt-4">
                      <Link 
                        to={`/services/${service.id}`}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-orange-600 hover:shadow-lg shadow-slate-900/10 w-full md:w-auto"
                      >
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* COL 3: SUB-SERVICES - HIDDEN ON MOBILE */}
                  <div className="hidden lg:block lg:col-span-3 border-l border-slate-200 pl-10 h-full">
                    <p className="text-[14px] font-black uppercase tracking-widest text-slate-900 mb-8">WE DO</p>
                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <Link 
                          key={feature.name}
                          to={feature.path}
                          className="group flex flex-col gap-1 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[14px] font-bold text-slate-800 group-hover:text-orange-600 transition-colors tracking-tight">
                              {feature.name}
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-200 group-hover:text-orange-500 transition-colors" />
                          </div>
                          <div className="w-full h-[1px] bg-slate-100 group-hover:bg-orange-100 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;