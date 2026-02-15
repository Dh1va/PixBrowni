import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';
import Process from '../components/Process';
import {
  Globe2, ArrowRight, Zap, DollarSign, TimerReset, Moon,
  Layers, Focus, Wand2, Globe, HardHat, Box,
  CameraIcon, User, Heart, Utensils, Scissors, Frame, Video
} from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const benefitFeatures = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost-Effective Scalability",
      desc: "Premium boutique editing at scale. Our flexible pay-per-project model eliminates the overhead of in-house staff while maintaining elite quality.",
      highlight: "Low Cost"
    },
    {
      icon: <TimerReset className="w-5 h-5" />,
      title: "Quick Delivery",
      desc: "Consistent, reliable speed. We perfect your shots within 24 hours without ever compromising on the technical Pixbrowni Standard.",
      highlight: "Quick Turnaround"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Priority Express Stream",
      desc: "For your most critical deadlines. Our dedicated emergency team handles urgent turnarounds in as little as 6-12 hours for special occasions.",
      highlight: "Emergency Support"
    }
  ];

  const serviceData = [
    {
      id: "real-estate",
      title: "Real Estate & Architecture",
      tagline: "Property Excellence",
      items: [
        {
          name: "HDR Blending",
          path: "/services/hdr-blending",
          desc: "Balanced multi-exposure blending with window pulls. Bright interiors, preserved highlights, natural contrast.",
          images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800"
          ]
        },
        {
          name: "Day to Dusk",
          path: "/services/day-to-dusk",
          desc: "Twilight sky replacement with realistic interior lighting. Create dramatic exterior property visuals.",
          images: [
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800"
          ]
        },
        {
          name: "Virtual Staging",
          path: "/services/virtual-staging",
          desc: "Realistic 3D furniture placement with accurate lighting. Help buyers visualize living spaces instantly.",
          images: [
            "https://images.unsplash.com/photo-1600566753190-17f0bcd2a6c4?q=80&w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?q=80&w=800"
          ]
        },
        {
          name: "Decluttering",
          path: "/services/decluttering",
          desc: "Remove unwanted objects and visual distractions. Present clean, buyer-ready interiors effortlessly.",
          images: [
            "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800",
            "https://images.unsplash.com/photo-1527359443443-84a48abc73d2?q=80&w=800"
          ]
        },
        {
          name: "Panorama Stitching",
          path: "/services/panorama-stitching",
          desc: "Seamless wide-angle panorama stitching. Create immersive property walkthrough experiences.",
          images: [
            "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=800",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
          ]
        },
        {
          name: "Aerial Editing",
          path: "/services/aerial-editing",
          desc: "Professional drone photo enhancement and sky replacement. Highlight property scale and surroundings clearly.",
          images: [
            "https://images.unsplash.com/photo-1473963342623-7c0a7ef4200d?q=80&w=800",
            "https://images.unsplash.com/photo-1506941433945-99a2f4bd38df?q=80&w=800"
          ]
        },
        {
          name: "Floor Planning",
          path: "/services/floor-planning",
          desc: "Clean 2D and 3D floor layouts. Improve spatial clarity and buyer understanding.",
          images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
            "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800"
          ]
        }
      ]
    },

    {
      id: "retouching",
      title: "Retouching & Commercial",
      tagline: "Editorial Standards",
      items: [
        {
          name: "Photo Retouching",
          path: "/services/photo-retouching",
          desc: "High-end cleanup and visual refinement. Natural results with professional polish.",
          images: [
            "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
          ]
        },
        {
          name: "Model Retouching",
          path: "/services/model-retouching",
          desc: "Skin smoothing and hair refinement for editorials. Preserve texture while enhancing beauty.",
          images: [
            "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800"
          ]
        },
        {
          name: "Wedding Editing",
          path: "/services/wedding-editing",
          desc: "Culling, color grading, and batch consistency. Turn moments into cinematic memories.",
          images: [
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
          ]
        },
        {
          name: "Food Photo Editing",
          path: "/services/food-photo-editing",
          desc: "Color correction and texture enhancement. Make every dish look fresh and appetizing.",
          images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
            "https://images.unsplash.com/photo-1476224488681-aba35537002a?q=80&w=800"
          ]
        }
      ]
    },

    {
      id: "editing",
      title: "Editing & Post-Process",
      tagline: "Technical Precision",
      items: [
        {
          name: "Clipping Path",
          path: "/services/clipping-path",
          desc: "Hand-drawn product cutouts with pixel accuracy. Perfect edges for ecommerce listings.",
          images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800"
          ]
        },
        {
          name: "Image Masking",
          path: "/services/image-masking",
          desc: "Advanced masking for hair and transparent objects. Clean composites with natural edges.",
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
          ]
        },
        {
          name: "Video Editing",
          path: "/services/video-editing",
          desc: "Professional reels and cinematic cuts. Smooth transitions and brand-ready motion.",
          images: [
            "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800"
          ]
        }
      ]
    }
  ];


  return (
    <div className="text-slate-900 min-h-screen selection:bg-orange-100">

      {/* --- HERO SECTION: WHITE BG --- */}
      <section className="bg-white pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
            <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
            <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
              Proven Excellence <span className="text-slate-300 mx-1">•</span> Global Post-Production
            </span>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 leading-[0.85] tracking-tighter max-w-5xl mb-12">
            Image Editing Services<br />
            <span className="italic font-light text-orange-600 font-serif">Built for Scale and Quality</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-lg md:text-xl lg:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mb-12">
            Professional image editing services for real estate and commercial brands. We transform raw captures into market-ready visual assets with speed and craftsmanship.
          </motion.p>

          <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 shadow-2xl">
            <span className="relative z-10 flex items-center gap-3">Start Your Free Trial <ArrowRight className="w-4 h-4" /></span>
            <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* --- SERVICE SECTIONS: OFF-WHITE BG --- */}
      <div className="bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
          {serviceData.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{category.tagline}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">{category.title}</h2>
                <div className="w-16 h-1 bg-orange-600 mt-6 rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, idx) => (
                  <ServiceCard key={idx} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* --- PROCESS & BENEFITS: WHITE BG --- */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <Process />

          {/* --- BENEFITS SECTION --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="pt-32"
          >
            {/* Centered Heading */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center mb-20">
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Benefits of choosing <br />
                <span className="italic font-light text-orange-600 font-serif">Pixbrowni standard.</span>
              </h3>
              <div className="w-16 h-1 bg-orange-600 mt-8 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {benefitFeatures.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{item.highlight}</span>
                  </div>

                  <div className="relative inline-block mb-5">
                    <h4 className="relative z-10 text-2xl mb-2 font-serif font-bold text-slate-900 leading-tight">{item.title}</h4>
                    <motion.div
                      className="absolute bottom-1 left-0 h-3 bg-orange-200/40 -z-0 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                    />
                  </div>

                  <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-8 opacity-90">{item.desc}</p>
                  <div className="absolute -inset-6 rounded-[3rem] bg-slate-50 opacity-0 group-hover:opacity-100 -z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-200/50" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Services;