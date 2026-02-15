import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Mail, Phone, MapPin, CheckCircle2, 
  ChevronDown, Globe2, Shield
} from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Dynamic Variables to bypass EmailJS template limits
    const templateParams = {
      subject_line: `New Partnership Inquiry: ${e.target.company.value || e.target.user_name.value}`,
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      company: e.target.company.value || "Independent Professional",
      service_type: e.target.service_type.value,
      volume: e.target.volume.value,
      phone: e.target.phone.value || "Not Provided",
      message: e.target.message.value,
      intro_text: "A strategic partnership inquiry has been submitted via the Contact page production portal."
    };

    emailjs.send(
      'service_riwmr9z',
      'template_dce4fnq', // Your multi-purpose template ID
      templateParams,
      'z10UeD5D-7Xxov_uB'
    )
      .then(() => {
        setStatus('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('idle');
        alert("Transmission failed. Please email us directly at pixbrowni@gmail.com");
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-36 md:pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-24">
          <motion.span initial="hidden" animate="visible" variants={fadeInUp} className="text-orange-600 text-[11px] font-bold uppercase tracking-widest mb-4 block">Production Portal</motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-slate-900">
            Let’s build your <br />
            <span className="italic font-light text-slate-400">Production Hub.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* --- INFO PANEL --- */}
          <div className="lg:col-span-4 space-y-16">
            <section>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-6 font-sans">Headquarters</h3>
              <p className="text-xl font-bold leading-tight mb-3 font-serif text-slate-900">Pixbrowni Studio</p>
              <p className="text-slate-600 font-medium leading-relaxed">
                23/25 Sahul Residency,<br />
                Near Perundurai Park opp road,<br />
                Perundurai - 638052
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2 font-sans">Direct Reach</h3>
              <a href="mailto:pixbrowni@gmail.com" className="flex items-center gap-4 text-slate-900 hover:text-orange-600 transition-colors group">
                <Mail size={18} className="text-orange-600" />
                <span className="font-medium font-sans">pixbrowni@gmail.com</span>
              </a>
              <a href="tel:+917502473853" className="flex items-center gap-4 text-slate-900 hover:text-orange-600 transition-colors group">
                <Phone size={18} className="text-orange-600" />
                <span className="font-medium font-sans">+91 75024 73853</span>
              </a>
            </section>

            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden">
               <Shield className="text-orange-600 mb-6" size={24} />
               <h4 className="text-sm font-bold mb-3 uppercase text-slate-900">Data Security</h4>
               <p className="text-sm text-slate-600 leading-relaxed font-medium">Your raw assets and commercial IP are protected by strict NDA protocols and 256-bit encrypted storage.</p>
            </div>
          </div>

          {/* --- FORM PANEL --- */}
          <div className="lg:col-span-8">
            <div className="bg-white p-2 relative">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Full Name</label>
                        <input name="user_name" type="text" required placeholder="John Doe" className="w-full bg-transparent outline-none font-medium text-lg text-slate-900 placeholder:text-slate-600" />
                      </div>
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Company Name</label>
                        <input name="company" type="text" placeholder="Studio / Agency Name" className="w-full bg-transparent outline-none font-medium text-lg text-slate-900 placeholder:text-slate-600" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Business Email</label>
                        <input name="user_email" type="email" required placeholder="john@agency.com" className="w-full bg-transparent outline-none font-medium text-lg text-slate-900 placeholder:text-slate-600" />
                      </div>
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Contact Number</label>
                        <input name="phone" type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none font-medium text-lg text-slate-900 placeholder:text-slate-600" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Service Category</label>
                        <div className="relative">
                          <select name="service_type" required className="w-full bg-transparent outline-none font-medium text-lg appearance-none cursor-pointer text-slate-900">
                            <option value="" disabled selected>Select Discipline</option>
                            <optgroup label="Real Estate Suite">
                              <option>HDR Blending</option>
                              <option>Virtual Staging</option>
                              <option>Day to Dusk (Twilight)</option>
                              <option>Decluttering</option>
                              <option>Floor Planning</option>
                              <option>Aerial Editing</option>
                              <option>Panorama Stitching</option>
                            </optgroup>
                            <optgroup label="Creative Suite">
                              <option>Photo Retouching</option>
                              <option>Model Retouching</option>
                              <option>Wedding Editing</option>
                              <option>Food Photo Editing</option>
                            </optgroup>
                            <optgroup label="Vector Suite">
                              <option>Clipping Path</option>
                              <option>Image Masking</option>
                              <option>Video Editing</option>
                            </optgroup>
                          </select>
                          <ChevronDown className="absolute right-0 bottom-1 text-slate-400 pointer-events-none" size={16} />
                        </div>
                      </div>
                      <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Monthly Volume Estimate</label>
                        <div className="relative">
                          <select name="volume" required className="w-full bg-transparent outline-none font-medium text-lg appearance-none cursor-pointer text-slate-900">
                            <option value="" disabled selected>Select Range</option>
                            <option>Occasional (1-50 images)</option>
                            <option>Regular (50-200 images)</option>
                            <option>Enterprise (200-1000+ images)</option>
                          </select>
                          <ChevronDown className="absolute right-0 bottom-1 text-slate-400 pointer-events-none" size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="group relative border-b border-slate-200 focus-within:border-slate-900 transition-colors pb-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-slate-900">Project Brief / File Link (Drive/Dropbox)</label>
                      <textarea name="message" required rows="2" placeholder="Tell us about your technical standards or share a sample link..." className="w-full bg-transparent outline-none font-medium text-lg resize-none text-slate-900 placeholder:text-slate-600" />
                    </div>

                    <div className="pt-6">
                      <button type="submit" disabled={status !== 'idle'} className="w-full md:w-auto px-14 py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl disabled:opacity-50 group cursor-pointer">
                        {status === 'sending' ? "Transmitting..." : "Initiate Briefing"} <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24 bg-slate-50 rounded-[40px] border border-slate-100">
                    <div className="w-20 h-20 bg-white text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900 leading-tight">Brief successfully logged.</h3>
                    <p className="text-slate-600 font-medium mb-10 max-w-sm mx-auto leading-relaxed text-base px-6">
                      Our production lead is performing a feasibility check. We will reach out with a technical roadmap within 4 hours.
                    </p>
                    <button onClick={() => setStatus('idle')} className="text-[10px] font-bold uppercase tracking-widest text-orange-600 border-b-2 border-orange-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all cursor-pointer">Submit another brief</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;