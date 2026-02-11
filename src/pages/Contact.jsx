import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- NATIVE VALIDATION LOGIC ---
  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    
    const phoneRegex = /^[6-9]\d{9}$/; // Basic Indian mobile validation
    if (!formData.mobile) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobile.replace(/\s/g, ""))) {
      tempErrors.mobile = "Enter a valid 10-digit number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) tempErrors.email = "Valid email is required";
    
    if (!formData.inquiryType) tempErrors.inquiryType = "Please select a service";
    if (formData.message.length < 10) tempErrors.message = "Message must be at least 10 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const contactMethods = [
    { icon: <Mail size={20} />, label: "Email Us", val: "pixbrowni@gmail.com", link: "mailto:pixbrowni@gmail.com" },
    { icon: <Phone size={20} />, label: "Call Us", val: "+91 75024 73853", link: "tel:+917502473853" },
    { icon: <MapPin size={20} />, label: "Studio", val: "Global Remote / NY Hub", link: "#" },
  ];

  return (
    <div className="bg-[#F8FAFC] pt-32 md:pt-48 pb-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20">
          <div className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 w-fit mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 text-slate-900">
            Let’s Build <br /> <span className="italic font-light text-slate-400">The Future.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* --- CONTACT INFO --- */}
          <div className="lg:col-span-5 space-y-6">
            {contactMethods.map((method, i) => (
              <a key={i} href={method.link} className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{method.label}</p>
                  <p className="text-lg font-bold text-slate-900">{method.val}</p>
                </div>
              </a>
            ))}
          </div>

          {/* --- NATIVE VALIDATED FORM --- */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[60px] shadow-2xl border border-slate-50 relative">
            <AnimatePresence>
              {isSuccess && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md rounded-[60px] flex flex-col items-center justify-center text-center p-10">
                  <CheckCircle2 size={60} className="text-green-500 mb-6" />
                  <h3 className="text-3xl font-serif font-bold mb-4">Inquiry Received</h3>
                  <p className="text-slate-900 font-medium mb-8">A specialist will review your brief and contact you within 4 hours.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-orange-600 font-bold uppercase tracking-widest text-xs border-b-2 border-orange-600 pb-1">Send Another</button>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className={`w-full px-8 py-5 rounded-[24px] bg-slate-50 border ${errors.fullName ? 'border-red-500' : 'border-slate-100'} focus:border-orange-500 outline-none transition-all font-medium text-slate-900`} />
                  {errors.fullName && <p className="text-red-500 text-[10px] font-bold ml-4 flex items-center gap-1"><AlertCircle size={12}/> {errors.fullName}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4">Mobile Number</label>
                  <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91 00000 00000" className={`w-full px-8 py-5 rounded-[24px] bg-slate-50 border ${errors.mobile ? 'border-red-500' : 'border-slate-100'} focus:border-orange-500 outline-none transition-all font-medium text-slate-900`} />
                  {errors.mobile && <p className="text-red-500 text-[10px] font-bold ml-4 flex items-center gap-1"><AlertCircle size={12}/> {errors.mobile}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="john@studio.com" className={`w-full px-8 py-5 rounded-[24px] bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-100'} focus:border-orange-500 outline-none transition-all font-medium text-slate-900`} />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold ml-4 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4">Inquiry Type</label>
                  <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full px-8 py-5 rounded-[24px] bg-slate-50 border border-slate-100 focus:border-orange-500 outline-none transition-all font-medium text-slate-900 appearance-none">
                    <option value="">Select Service</option>
                    <option value="trial">Free Trial (3 Images)</option>
                    <option value="realestate">Real Estate</option>
                    <option value="fashion">Fashion & Editorial</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4">Project Brief</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your requirements..." className={`w-full px-8 py-6 rounded-[32px] bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-100'} focus:border-orange-500 outline-none transition-all font-medium resize-none text-slate-900`} />
                {errors.message && <p className="text-red-500 text-[10px] font-bold ml-4 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
              </div>

              <button disabled={isSubmitting} className="w-full py-6 bg-slate-900 text-white rounded-[32px] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-orange-600 transition-all shadow-xl disabled:opacity-50">
                {isSubmitting ? "Processing..." : "Submit Inquiry"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;