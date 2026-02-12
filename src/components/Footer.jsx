import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowRight, Phone } from 'lucide-react';

const Footer = () => {
  // Enhanced Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  return (
    <footer className="bg-[#1f2739] text-white pt-24 md:pt-40 pb-12 overflow-hidden relative">
      {/* Dynamic Glow - Animated on Scroll */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-0"
      ></motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* --- TOP SECTION: HERO-STYLE CTA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/5">
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <Link to="/" className="text-xl font-black tracking-tighter mb-10 block group">
              PIX<span className="text-orange-500 group-hover:text-white transition-colors duration-300">BROWNI</span>
            </Link>
            
            {/* Exactly Matched Hero Size Typography */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              Let's create something <br className="hidden sm:block" />
              <span className="italic text-slate-400 font-light">extraordinary</span> together.
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-end">
            <div className="max-w-md lg:ml-auto w-full">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-6">Stay in the loop</p>
              
              <form className="group relative">
                <input 
                  type="email" 
                  placeholder="Professional email" 
                  className="w-full bg-transparent py-4 text-xl font-medium focus:outline-none placeholder:text-slate-700 border-b border-white/10 group-focus-within:border-transparent transition-all"
                />
                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-orange-600 w-0 group-focus-within:w-full transition-all duration-700 ease-out"></div>
                
                <button className="absolute right-0 bottom-4 flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-orange-500 transition-colors">
                  Join <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: INFORMATION HUB --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-20 md:py-28">
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Capabilities</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              {['HDR Blending', 'Virtual Staging', 'Editorial Retouching', 'CGI Rendering'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Studio</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><Link to="/about" className="hover:text-white transition">The Process</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition">Showcase</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Inquiries</Link></li>
            </ul>
          </motion.div>

          {/* Contact Details with Modern Cards */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group">
              <Mail className="w-5 h-5 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1 tracking-widest">General Inquiries</p>
              <p className="text-base font-bold select-all">pixbrowni@gmail.com</p>
            </div>
            
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group">
              <Phone className="w-5 h-5 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-[9px] font-black text-slate-500 uppercase mb-1 tracking-widest">Direct Line</p>
              <p className="text-base font-bold">+91 75024 73853</p>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: LEGAL & SOCIAL --- */}
        <motion.div 
          variants={fadeInUp}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-orange-500 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] md:border-l md:border-white/10 md:pl-8">
              © 2026 Pixbrowni Studio <span className="mx-2 text-orange-900">|</span> All Rights Reserved
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;