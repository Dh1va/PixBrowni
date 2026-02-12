import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CreditCard, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.2 }
    }
  };

  const qualityFeatures = [
    {
      title: "Choosing Top-notch Retouchers",
      desc: "Start by working with two retouchers for free. Our support team will then help you find additional retouchers who match your style."
    },
    {
      title: "Consistent Quality Assurance",
      desc: "Save your preferred retouchers and templates for future projects to maintain consistent quality."
    },
    {
      title: "Flexible Replacements",
      desc: "Easily switch retouchers without limits if you're not fully satisfied with your current choice."
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- TOP SECTION: WHY US --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <Globe2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="text-[9px] font-sans font-black uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap">
                Trusted Partnership <span className="text-slate-300 mx-1"></span> 
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight">
              Why photographers <br /> 
              <span className="italic font-light text-orange-600">choose Pixbrowni.</span>
            </motion.h2>
            
            <div className="space-y-10">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Outstanding Image Quality",
                  text: "Our professional retouchers enhance image quality, remove imperfections, and deliver high-end visual products using advanced non-destructive techniques.",
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Reduced Workload Burden",
                  text: "Concentrate on capturing images while our editors perfect your shots. We streamline your creative process to match your unique personal style.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: <CreditCard className="w-6 h-6" />,
                  title: "Flexible Pricing",
                  text: "Outsourcing is more cost-effective than hiring in-house. We offer flexible payment options allowing you to pay per project with no hidden fees.",
                  color: "bg-emerald-50 text-emerald-600"
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-6 group">
                  <div className={`shrink-0 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-slate-900 mb-2 uppercase tracking-widest text-[11px]">{item.title}</h4>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium opacity-90">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200" 
                alt="Professional Photographer" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: 1-ON-1 --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://plus.unsplash.com/premium_photo-1686244745156-72376fc1d060?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Collaborative Editing" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
               <Sparkles className="w-4 h-4 text-orange-600" />
               <p className="text-slate-400 font-sans font-black text-[10px] uppercase tracking-[0.3em]">Efficient Workflow</p>
            </motion.div>

            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Personalized <br /> 
              <span className="italic font-light text-orange-600 text-3xl md:text-5xl lg:text-6xl">1-on-1 Approach.</span>
            </motion.h3> 

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-12">
              Working with multiple retouchers can lead to disappointment and inconsistent styles. We streamline your process with our personalized approach. You'll be assigned a <span className="text-slate-900 font-bold underline decoration-orange-300 underline-offset-4">dedicated editor</span> fully aligned with your visual aesthetic to handle every project you entrust to us.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="group relative inline-flex px-10 py-5 bg-slate-900 text-white rounded-2xl font-sans font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all duration-300 shadow-xl active:scale-95 overflow-hidden">
                <span className="relative z-10">Start Your Partnership</span>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* --- NEW SECTION: ENSURE QUALITY (IMAGE REF) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="pt-20 border-t border-slate-100"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-slate-400 font-sans font-black text-[10px] uppercase tracking-[0.3em] mb-4">Professional retouchers</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Ensure quality with <br /> 
              <span className="italic font-light text-orange-600">professional retouchers.</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {qualityFeatures.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-6 group">
                <div className="inline-flex px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-orange-100">
                  {item.title.split(' ')[0]}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="h-1 w-0 bg-orange-600 transition-all duration-500 group-hover:w-12 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;