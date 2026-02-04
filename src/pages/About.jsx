import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Users,
  Layers,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import CountUp from "react-countup"; // Ensure this is installed via npm
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-0 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- EDITORIAL AUTHORITY HERO --- */}
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
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">Est. 2014</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.85] mb-12">
                  Beyond <br />
                  <span className="italic font-light text-slate-400">The Frame.</span>
                </motion.h1>

                <div className="space-y-8">
                  <motion.p variants={fadeInUp} className="text-xl font-bold leading-tight">
                    We are the technical architects for the world's most ambitious visual storytellers.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-lg font-medium leading-relaxed opacity-80">
                    Founded on the belief that precision is the bridge between a photograph and a masterpiece, Pixbrowni provides the global infrastructure for elite post-production.
                  </motion.p>
                </div>

                <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8">
                  <Link to="/contact" className="px-10 py-5 bg-orange-600 text-white rounded-[24px] font-bold text-sm hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-orange-600/20">
                    Our Studio
                  </Link>
                  <div className="hidden sm:block h-px w-20 bg-slate-200" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side: The Immersive Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 h-[600px] lg:h-[850px] relative mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" 
                  alt="Pixbrowni Studio" 
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
                  <CountUp end={1.2} decimals={1} duration={3} enableScrollSpy scrollSpyOnce />M+
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assets Processed</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- METHODOLOGY SECTION --- */}
        <section className="mb-48 pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mb-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4 tracking-widest">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Beyond the{" "}
              <span className="italic font-light text-slate-400">Ordinary.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: <Layers />,
                title: "Layered Precision",
                desc: "We utilize multi-exposure blending to ensure every asset retains its original soul while gaining professional polish.",
              },
              {
                icon: <Sparkles />,
                title: "Boutique Scale",
                desc: "Every project receives the same dedicated creative oversight to ensure total brand consistency across high volumes.",
              },
              {
                icon: <MousePointer2 />,
                title: "Artisan Intuition",
                desc: "Our decision-making is always human-led, ensuring the emotional feel of the image is perfectly preserved.",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="font-medium leading-relaxed opacity-90">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="mb-48 pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              The Competitive Edge
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Why Industry Leaders <br /> Choose Pixbrowni
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Zap />,
                title: "Accelerated Delivery",
                desc: "Our global infrastructure ensures a consistent 12-24 hour turnaround time, keeping your projects moving forward.",
              },
              {
                icon: <ShieldCheck />,
                title: "Senior Editorial QC",
                desc: "Every asset passes through a rigorous 10-point senior editorial check, ensuring absolute technical integrity.",
              },
              {
                icon: <Users />,
                title: "Scalable Solutions",
                desc: "Whether you need 5 images or 5,000, our decentralized studio model expands to meet your volume requirements.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_rgba(234,88,12,0.1)] transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="leading-relaxed font-medium opacity-90">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <Testimonials />

        {/* --- FINAL CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-16 md:p-24 rounded-[64px] bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative mb-20 shadow-2xl shadow-slate-900/40"
        >
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Start your trial today.
            </h4>
            <p className="text-slate-400 font-medium max-w-sm">
              Experience the Pixbrowni quality with 3 complimentary high-end edits.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 px-12 py-6 bg-orange-600 rounded-[20px] font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-orange-600/20"
          >
            Request Free Trial
          </Link>
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;