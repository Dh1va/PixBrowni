import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Facebook, Mail, ArrowRight, Phone } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <footer className="bg-[#F9F8F6] text-slate-900 pt-24 md:pt-40 pb-12 overflow-hidden relative border-t border-slate-200">
      {/* Subtle Warm Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/30 blur-[120px] rounded-full -z-0" />

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-slate-200">
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <Link to="/" className="text-xl font-black tracking-tighter mb-10 block group">
              PIX<span className="text-orange-600">BROWNI</span>
            </Link>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight text-slate-900">
              Ready to elevate your <br className="hidden sm:block" />
              <span className="italic text-orange-600 font-light">visual standard?</span>
            </h3>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-end">
            <div className="max-w-md lg:ml-auto w-full">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-6">Weekly Insights</p>
              
              {/* RESTYLED EMAIL INPUT */}
              <form className="group relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white px-6 py-5 rounded-[1.2rem] text-sm font-medium focus:outline-none placeholder:text-slate-300 border border-slate-100 shadow-sm focus:border-orange-200 transition-all duration-300"
                />
                <button className="absolute right-2 w-12 h-12 bg-slate-900 text-white rounded-[1rem] flex items-center justify-center hover:bg-orange-600 transition-all duration-300 active:scale-90">
                   <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="mt-4 text-[9px] text-slate-400 font-medium px-2">Subscribe for technical updates and portfolio drops.</p>
            </div>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-20 md:py-28">
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              {['Real Estate HDR', 'Fashion Retouching', 'Virtual Staging', 'Product Clean-up'].map((item) => (
                <li key={item} className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1.5px] bg-orange-600 group-hover:w-3 transition-all duration-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><Link to="/process" className="hover:text-orange-600 transition">Workflow</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-600 transition">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* RESTYLED CONTACT INFORMATION CARDS */}
          <motion.div variants={fadeInUp} className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-[2.2rem] bg-white border border-slate-100 hover:border-orange-200 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Email Us</p>
              <p className="text-sm md:text-base font-bold select-all text-slate-900 tracking-tight">pixbrowni@gmail.com</p>
            </div>
            
            <div className="p-8 rounded-[2.2rem] bg-white border border-slate-100 hover:border-orange-200 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Direct Line</p>
              <p className="text-sm md:text-base font-bold text-slate-900 tracking-tight">+91 75024 73853</p>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <motion.div variants={fadeInUp} className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-6">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-orange-600 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] md:border-l md:border-slate-200 md:pl-8">
              © 2026 Pixbrowni Studio <span className="mx-2 text-slate-200">|</span> All Rights Reserved
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-orange-600 transition">Privacy</a>
            <a href="#" className="hover:text-orange-600 transition">Terms</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;