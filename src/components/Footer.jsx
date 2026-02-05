import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowRight, Phone } from 'lucide-react';

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer className="bg-[#0a0f1a] text-white pt-24 md:pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full -z-0"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Top Section: Branding & Fixed Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 pb-12 sm:pb-16 md:pb-20 border-b border-white/5">
          <motion.div variants={itemVariants}>
            <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8 block">
              PIX<span className="text-orange-500">BROWNI</span>
            </Link>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
              Let's create something <br className="hidden sm:block" />
              <span className="italic text-slate-400 font-light underline decoration-orange-500/30">extraordinary</span> together.
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-end">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-4 sm:mb-6">Stay in the loop</p>
            
            {/* Newsletter: Improved Flex Layout */}
            <form className="group flex flex-col sm:flex-row items-stretch sm:items-center border-b-2 border-white/10 focus-within:border-orange-500 transition-all duration-500 pb-2">
              <input 
                type="email" 
                placeholder="Professional email" 
                className="flex-grow bg-transparent py-3 sm:py-4 text-base sm:text-lg md:text-xl font-medium focus:outline-none placeholder:text-slate-600"
              />
              <button className="flex items-center justify-center gap-2 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 group-hover:text-orange-500 transition-colors whitespace-nowrap sm:pl-4 py-2 sm:py-0">
                Subscribe <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 py-12 sm:py-16 md:py-20">
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4 sm:mb-8">Specializations</h4>
            <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-[15px] text-slate-400 font-semibold">
              <li className="hover:text-orange-500 transition cursor-pointer">HDR Blending</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Virtual Staging</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Model Retouching</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Panorama Stitching</li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4 sm:mb-8">Studio</h4>
            <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-[15px] text-slate-400 font-semibold">
              <li><Link to="/about" className="hover:text-orange-500 transition">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="col-span-2 space-y-6 sm:space-y-8">
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4 sm:mb-8">Get in touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Email</p>
                  <p className="text-xs sm:text-base md:text-lg font-bold">hello@pixbrowni.com</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase mb-1 tracking-widest">Call</p>
                  <p className="text-xs sm:text-base md:text-lg font-bold">+1 (555) 000 0000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex gap-4 sm:gap-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] sm:border-l sm:border-white/10 sm:pl-4 md:pl-6">
              © 2026 Pixbrowni Studio
            </p>
          </div>
          
          <div className="flex gap-4 sm:gap-8 text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-orange-500 transition">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;