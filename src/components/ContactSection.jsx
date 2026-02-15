import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Sparkles, CheckCircle2, ChevronDown, Gift, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Map form fields to the Common Dynamic Template variables
    const templateParams = {
      subject_line: `Free Trial Request: ${e.target.name.value}`,
      user_name: e.target.name.value,
      user_email: e.target.email.value,
      company: "New Trial Lead",
      service_type: e.target.service.value,
      volume: "N/A (Trial Request)",
      phone: e.target.phone.value || "Not Provided",
      message: e.target.message.value,
      intro_text: "A new lead has requested a Free Trial via the footer contact section."
    };

    // EmailJS SDK Integration using the single dynamic template
    emailjs.send(
      'service_riwmr9z',
      'template_dce4fnq',
      templateParams,
      'z10UeD5D-7Xxov_uB'
    )
      .then(() => {
        setStatus('success');
        setTimeout(() => {
          setIsSubmitted(true);
          setStatus('idle');
        }, 1000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('idle');
        alert("Submission failed. Please try again or email us directly at pixbrowni@gmail.com");
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#FF5B33] pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden relative">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* --- LEFT SIDE: THE OFFER --- */}
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm mb-8">
              <Gift className="w-4 h-4 text-white flex-shrink-0" />
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.25em] text-white whitespace-nowrap">
                Exclusive Invitation
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Contact now to get your <br />
              <span className="italic font-light text-slate-900 underline decoration-white decoration-2 underline-offset-8">free trial.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/90 text-sm md:text-xl leading-relaxed font-medium mb-12 max-w-md">
              Experience the Pixbrowni Standard risk-free. Our team is ready to transform your raw files into high-end gallery masterpieces.
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/70 mb-0.5">Instant Inquiry</p>
                  <p className="text-base font-bold text-white font-sans tracking-tight">pixbrowni@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/70 mb-0.5">Direct Support</p>
                  <p className="text-base font-bold text-white font-sans tracking-tight">+91 75024 73853</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-[400px] bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/20">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-900 ml-1">Full Name</label>
                      <input name="name" type="text" required placeholder="Enter your name" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:border-orange-600 transition-all placeholder:text-slate-900/40 text-slate-900" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-900 ml-1">Email Address</label>
                      <input name="email" type="email" required placeholder="hello@studio.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:border-orange-600 transition-all placeholder:text-slate-900/40 text-slate-900" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-900 ml-1">
                        Mobile Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input name="phone" type="tel" placeholder="Enter your mobile number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:border-orange-600 transition-all placeholder:text-slate-900/40 text-slate-900" />
                    </div>

                    <div className="space-y-1.5 relative">
                      <label className="text-sm font-medium text-slate-900 ml-1">Interested Service</label>
                      <div className="relative">
                        <select name="service" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:border-orange-600 transition-all appearance-none cursor-pointer">
                          <option value="" disabled selected>Select a discipline</option>
                          <optgroup label="Real Estate Suite">
                            <option>HDR Blending</option>
                            <option>Virtual Staging</option>
                            <option>Day to Dusk (Twilight)</option>
                            <option>Decluttering</option>
                            <option>Floor Planning</option>
                            <option>Aerial Editing</option>
                            <option>Panorama Stitching</option>
                          </optgroup>
                          <optgroup label="Retouching & Commercial">
                            <option>Photo Retouching</option>
                            <option>Model Retouching</option>
                            <option>Wedding Editing</option>
                            <option>Food Photo Editing</option>
                          </optgroup>
                          <optgroup label="Editing & Post-Process">
                            <option>Clipping Path</option>
                            <option>Image Masking</option>
                            <option>Video Editing</option>
                          </optgroup>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-900 ml-1">Project Brief</label>
                      <textarea name="message" rows="3" required placeholder="Tell us about your requirements..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-600/10 focus:border-orange-600 transition-all resize-none placeholder:text-slate-900/40 text-slate-900" />
                    </div>

                    <button
                      type="submit"
                      disabled={status !== 'idle'}
                      className={`w-full py-6 relative overflow-hidden rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 shadow-xl active:scale-95 group mt-4 cursor-pointer
                      ${status === 'success' ? 'bg-emerald-600' : 'bg-slate-900'}`}
                    >
                      <span className="relative z-10 flex items-center gap-3 text-white">
                        {status === 'idle' && "Claim Free Trial"}
                        {status === 'sending' && "Sending..."}
                        {status === 'success' && "Sent Successfully!"}
                        <Send className={`w-4 h-4 transition-transform duration-300 ease-out 
                        ${status === 'idle' ? 'group-hover:translate-x-1.5 group-hover:-translate-y-1.5' : ''} 
                        ${status === 'sending' ? 'animate-pulse' : ''}`}
                        />
                      </span>

                      {status === 'idle' && (
                        <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">You're in.</h3>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm px-4">
                      Our lead editor has received your trial request. We will contact you within 4 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm font-medium text-orange-600 border-b border-orange-600 pb-1 hover:text-slate-900 transition-all cursor-pointer"
                    >
                      Send another request
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