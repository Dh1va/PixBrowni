import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  CreditCard,
  Globe2,
  Sparkles,
  Zap,
  DollarSign,
  TimerReset,
  ArrowRight
} from 'lucide-react';
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

  const benefitFeatures = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost-Effective Scalability",
      desc: "Premium boutique editing at scale. Our flexible pay-per-project model eliminates the overhead of in-house staff while maintaining elite quality.",
      highlight: "Low Cost"
    },
    {
      icon: <TimerReset className="w-5 h-5" />,
      title: "Quick Delivery",
      desc: "Consistent, reliable speed. We perfect your shots within 24 hours without ever compromising on the technical Pixbrowni Standard.",
      highlight: "Quick Turnaround"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Priority Express Stream",
      desc: "For your most critical deadlines. Our dedicated emergency team handles urgent turnarounds in as little as 6-12 hours for special occasions.",
      highlight: "Emergency Support"
    }
  ];

  return (
    <section className="bg-[#F6F6F6] py-24 md:py-40 overflow-hidden">
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
                Trusted Partnership
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-slate-900 mb-10 tracking-tight"
            >
              Why choose<br className="hidden sm:block" />
              <span className="italic font-light text-orange-600">Pixbrowni.</span>
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
                  <div className={`shrink-0 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
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

        {/* --- MIDDLE SECTION: 1-ON-1 APPROACH --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://plus.unsplash.com/premium_photo-1686244745156-72376fc1d060?q=80&w=1170&auto=format&fit=crop"
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

            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Personalized <br />
              <span className="italic font-light text-orange-600">1-on-1 Approach.</span>
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-12">
              Working with multiple retouchers leads to inconsistent styles. We streamline your process with our personalized approach. You'll be assigned a <span className="text-slate-900 font-bold underline decoration-orange-300 underline-offset-4">dedicated editor</span> fully aligned with your visual aesthetic to handle every project you entrust to us.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-slate-900/10 active:scale-95 overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Partnership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* The Slide-up Hover Background */}
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: ELITE ADVANTAGES (MARKER UNDERLINE) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="pt-5"
        >
          <motion.div variants={fadeInUp} className="mb-20">

            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Benefits of choosing <br />
              <span className="italic font-light text-orange-600">Pixbrowni standard.</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {benefitFeatures.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group relative">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                    {item.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="relative inline-block mb-5">
                  <h4 className="relative z-10 text-2xl mb-2 font-serif font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  {/* Title Marker Underline */}
                  <motion.div
                    className="absolute bottom-1 left-0 h-3 bg-orange-200/40 -z-0 rounded-full "
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                  />
                </div>

                <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-8 opacity-90">
                  {item.desc}
                </p>

                {/* Marker Underline Effect */}


                {/* Background Card Hover Effect */}
                <div className="absolute -inset-6 rounded-[3rem] bg-white opacity-0 group-hover:opacity-100 -z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-200/50" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;