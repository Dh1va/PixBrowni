import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Users,
  Layers,
  Globe2,
  CheckCircle2,
  Cloud,
  MousePointer2,
  Shield,
  Palette,
  Trophy,
  Activity,
  Maximize,
  HardHat
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

// --- Sub-Component: Counter Item ---
const CounterItem = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-900 mb-4 tracking-tighter">
        {count.toLocaleString()}
        <span className="text-orange-600 font-bold">{suffix}</span>
      </div>
      <div className="h-[2px] w-8 bg-orange-600 mb-6 rounded-full" />
      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 leading-relaxed max-w-[180px]">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const benefitFeatures = [
    {
      icon: <Layers size={24} />,
      highlight: "Technical Purity",
      title: "Manual Editing",
      desc: "We don't believe in automated shortcuts. Every asset is blended manually by senior artisans to ensure organic light and texture.",
    },
    {
      icon: <ShieldCheck size={24} />,
      highlight: "Quality Control",
      title: "10-Point Audit",
      desc: "Every file passes through a rigorous senior editorial quality check for pixel integrity and color accuracy before delivery.",
    },
    {
      icon: <Globe2 size={24} />,
      highlight: "Global Scale",
      title: "24/7 Pipeline",
      desc: "Operating across time zones to provide seamless overnight delivery, allowing your agency to maintain maximum listing momentum.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-orange-100">

      {/* 1️⃣ AUTHORITY HERO SECTION */}
      <section className="bg-white pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Industry Authority <span className="text-slate-300 mx-1">•</span> Est. 2014
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 leading-[0.85] tracking-tighter max-w-5xl mb-12"
            >
              Engineering Visual Precision<br />
              <span className="italic font-light text-orange-600 font-serif">at Production Scale.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mb-12"
            >
              Trusted by global real estate and commercial brands. We provide the technical infrastructure to transform raw captures into market-ready assets with industrial speed.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 shadow-2xl shadow-slate-900/20 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contact us now <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Immersive Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[3rem] md:rounded-[4rem] overflow-hidden aspect-video max-w-6xl mx-auto shadow-2xl border-[10px] border-white relative"
          >
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Pixbrowni Studio" />
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <CounterItem target={50000} suffix="+" label="High-Resolution Assets Delivered" />
            <CounterItem target={150} suffix="+" label="Global Studios & Trusted Agencies" />
            <CounterItem target={24} suffix="/7" label="Production Pipeline Active Weekly" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-slate-900 text-white rounded-[4rem] md:rounded-[6rem] -mx-2 mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">The Bottleneck</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-12 leading-tight">
              Scaling quality shouldn't <br />
              <span className="italic font-light text-orange-400 opacity-80">break your workflow.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                Agencies face a painful choice: hire expensive local editors who can't handle volume, or use cheap automation that delivers inconsistent results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mt-1 text-xs">×</div>
                  <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Inconsistent Color</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mt-1 text-xs">×</div>
                  <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Slow Turnaround</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-video"
          >
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" className="w-full h-full object-cover opacity-60" alt="Problem Solving Visual" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ BENEFITS / THE STANDARD (GRID STYLE) */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
              <motion.div variants={fadeInUp}>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  Why Choose 
                  <span className="italic font-light text-orange-600"> Pixbrowni </span>
                </h3>
              </motion.div>
              <motion.div variants={fadeInUp} className="max-w-sm ml-auto hidden lg:block">
                <p className="text-slate-500 font-medium leading-relaxed italic border-l-2 border-orange-100 pl-6">
                  "Precision is the bridge between a high-end photograph and a market-ready masterpiece."
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {benefitFeatures.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="relative inline-block mb-5">
                    <h4 className="relative z-10 text-2xl mb-2 font-serif font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <motion.div
                      className="absolute bottom-1 left-0 h-3 bg-orange-200/40 -z-0 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-8 opacity-90">
                    {item.desc}
                  </p>
                  <div className="absolute -inset-6 rounded-[3rem] bg-white opacity-0 group-hover:opacity-100 -z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-200/50" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMMERSIVE PROCESS IMAGE BREAK */}
      <section className="px-6 mb-48">
        <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden h-[400px] relative shadow-xl">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600" className="w-full h-full object-cover opacity-80" alt="Process Immersion" />
          <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-10">
            <h3 className="text-white text-3xl md:text-5xl font-serif font-bold leading-tight">Boutique Attention.<br />Industrial Output.</h3>
          </div>
        </div>
      </section>

      {/* 4️⃣ PROCESS SECTION (STREAMLINED WORKFLOW) */}
      <section className="bg-white py-20 overflow-hidden border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Operational approach <span className="text-slate-300 mx-1">•</span> our process
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight max-w-4xl"
            >
              Streamlined workflow <br />
              <span className="italic font-light text-orange-600">for global scale.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
            <div className="hidden md:block absolute top-12 left-1/4 w-1/2 h-[1px] bg-slate-100 -z-0" />

            {[
              {
                title: "Initial Test & Quote",
                desc: "Send us a test image. Receive the edited result and a fixed price quote within 24 hours.",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="70" cy="35" r="18" className="fill-orange-50" />
                    <path d="M25 50 L55 35 L25 20 Z" fill="none" stroke="#F97316" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M55 35 L75 50" fill="none" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                ),
              },
              {
                title: "Agreed Pricing",
                desc: "Once you're satisfied with the test results, you can begin sending high-volume orders via email.",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="70" cy="35" r="18" className="fill-orange-50" />
                    <rect x="20" y="30" width="40" height="30" rx="8" fill="none" stroke="#F97316" strokeWidth="2" />
                    <path d="M20 40 L40 50 L60 40" fill="none" stroke="#F97316" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: "Processing",
                desc: "Upload via Drive, WeTransfer, or Dropbox. Share the link, and we deliver market-ready assets.",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="70" cy="35" r="18" className="fill-orange-50" />
                    <path d="M25 65 Q25 45 45 45 Q45 35 55 35 Q70 35 70 50 Q85 50 85 65 Z" fill="none" stroke="#F97316" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="text-center group relative z-10"
              >
                <div className="mb-10 flex justify-center transition-transform duration-700 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-6 tracking-tight group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium px-4 opacity-90">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF & TESTIMONIALS --- */}
      <Testimonials />

      <ContactSection />
    </div>
  );
};

export default About;