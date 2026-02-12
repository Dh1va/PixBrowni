import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe2, Mail, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/pixbrowni@gmail.com", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
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
    <section className="bg-white pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: BRAND INFO (Title like Hero/Service) --- */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Boutique Badge Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Contact Inquiry <span className="text-slate-300 mx-1">•</span> Pixbrowni Standard
              </span>
            </motion.div>

            {/* Premium Boutique Heading */}
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Let's discuss your <br /> 
              <span className="italic font-light text-orange-600">next masterpiece.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-12 opacity-90 max-w-md">
              Our studio team is available 24/7 to provide consistent, high-quality visual solutions tailored to your unique personal style.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Communication</p>
                  <p className="text-lg font-bold text-slate-900 font-sans tracking-tight group-hover:text-orange-600 transition-colors">pixbrowni@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Global Support</p>
                  <p className="text-lg font-bold text-slate-900 font-sans tracking-tight">24/7 Availability</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: NEAT PROFESSIONAL FORM --- */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] relative min-h-[600px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-7"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div className="space-y-2.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                        <input name="name" type="text" required placeholder="Enter your name" className="w-full px-7 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all placeholder:text-slate-300" />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                        <input name="email" type="email" required placeholder="hello@studio.com" className="w-full px-7 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all placeholder:text-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2.5 relative">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Interested Service</label>
                      <div className="relative">
                        <select name="service" required className="w-full px-7 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all appearance-none cursor-pointer">
                          <option value="" disabled selected>Select a technical discipline</option>
                          <optgroup label="Real Estate & Architecture">
                            <option>HDR Blending</option>
                            <option>Virtual Staging</option>
                            <option>Decluttering</option>
                            <option>Panorama Stitching</option>
                            <option>Aerial Editing</option>
                            <option>Floor Planning</option>
                          </optgroup>
                          <optgroup label="Retouching & Commercial">
                            <option>Photo Retouching</option>
                            <option>Model Retouching</option>
                            <option>Wedding Editing</option>
                            <option>Food Photo Editing</option>
                            <option>High-end Retouching</option>
                          </optgroup>
                          <optgroup label="Editing & Post-Process">
                            <option>Clipping Path</option>
                            <option>Image Masking</option>
                            <option>Video Editing</option>
                          </optgroup>
                        </select>
                        <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Brief</label>
                      <textarea name="message" rows="5" required placeholder="Tell us about your project requirements or specific style guide..." className="w-full px-7 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all resize-none placeholder:text-slate-300" />
                    </div>

                    <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-2xl font-sans font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-600/30 active:scale-95 group">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Message Received.</h3>
                    <p className="text-slate-500 font-medium mb-12 max-w-sm mx-auto leading-relaxed md:text-lg">
                      Thank you for reaching out. A studio specialist will review your brief and contact you shortly to discuss your project.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 border-b-2 border-orange-600 pb-1.5 hover:text-slate-900 hover:border-slate-900 transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;