import { motion } from 'framer-motion';
import { ArrowRight, Globe2, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesShowcase = () => {
  const services = [
    {
      title: "Real Estate & Architecture",
      tagline: "Property Portfolio",
      desc: "Luminosity-first approach to preserve natural window views while maintaining interior warmth.",
      features: [
        { name: "HDR Blending", path: "/services/hdr-blending" },
        { name: "Virtual Staging", path: "/services/virtual-staging" },
        { name: "Panorama Stitching", path: "/services/panorama-stitching" },
        { name: "Aerial Editing", path: "/services/aerial-editing" },
        { name: "Floor Planning", path: "/services/floor-planning" },
        { name: "Decluttering", path: "/services/decluttering" },
      ],
      path: "/services/real-estate",
      gradient: "from-orange-50/50 via-white to-white"
    },
    {
      title: "Retouching & Commercial",
      tagline: "Editorial Standards",
      desc: "High-end frequency separation and non-destructive dodge-and-burn for fashion and products.",
      features: [
        { name: "Photo Retouching", path: "/services/photo-retouching" },
        { name: "Model Retouching", path: "/services/model-retouching" },
        { name: "Wedding Editing", path: "/services/wedding-editing" },
        { name: "Food Photo Editing", path: "/services/food-photo-editing" },
      ],
      path: "/services/retouching",
      gradient: "from-white via-orange-50/30 to-white"
    },
    {
      title: "Editing & Post-Process",
      tagline: "Technical Accuracy",
      desc: "Precision masking and clipping services designed for e-commerce and high-volume catalogs.",
      features: [
        { name: "Clipping Path", path: "/services/clipping-path" },
        { name: "Image Masking", path: "/services/image-masking" },
        { name: "Video Editing", path: "/services/video-editing" },
      ],
      path: "/services/post-process",
      gradient: "from-white via-white to-orange-50/50"
    }
  ];

  // Scroll Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-28 gap-8"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
              <Globe2 className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-700">
                Core Disciplines
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-slate-900 mb-6 tracking-tight"
            >
              Specialized solutions <br className="hidden sm:block" />
              <span className="italic font-light text-orange-600">for visual creators.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              to="/services"
              className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-200 active:scale-95"
            >
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* --- SERVICE CARDS GRID --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group relative bg-gradient-to-br ${service.gradient} rounded-[48px] border border-slate-100 p-10 lg:p-12 flex flex-col justify-between transition-all duration-700 hover:border-orange-200 hover:shadow-[0_40px_80px_rgba(234,88,12,0.08)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-600">
                    {service.tagline}
                  </span>
                  <div className="p-3 rounded-2xl bg-white shadow-sm group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles className="w-5 h-5 text-orange-300 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 font-medium leading-relaxed mb-10">
                  {service.desc}
                </p>

                <div className="space-y-4 mb-12">
                  {service.features.map((feature) => (
                    <Link
                      key={feature.name}
                      to={feature.path}
                      className="flex items-center gap-4 group/link"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-600 opacity-20 group-hover/link:opacity-100 transition-opacity" />
                      <span className="text-lg font-bold text-slate-700 tracking-tight group-hover/link:text-orange-600 transition-colors">
                        {feature.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to={service.path}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 w-full py-5  text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg transition-all duration-500 group/btn"
                style={{
                  background: 'linear-gradient(to right, #ea580c 50%, #0f172a 50%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: 'right bottom',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = 'left bottom')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = 'right bottom')}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CALLOUT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-orange-200 to-transparent w-full max-w-lg mb-8" />
          <p className="text-slate-400 font-medium">
            Don't see a specific service?
            <Link to="/contact" className="text-orange-600 font-black ml-2 hover:tracking-widest transition-all">
              REQUEST CUSTOM SOLUTIONS
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesShowcase;