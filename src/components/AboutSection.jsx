import { motion } from 'framer-motion';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';
import CountUp from 'react-countup';

const AboutSection = () => {
  const stats = [
    { label: "Images Processed", value: 1.2, suffix: "M+", icon: <Award className="w-5 h-5 text-orange-600" />, decimals: 1 },
    { label: "Active Clients", value: 850, suffix: "+", icon: <Users className="w-5 h-5 text-orange-600" />, decimals: 0 },
    { label: "Average TAT", value: 18, suffix: "hrs", icon: <Clock className="w-5 h-5 text-orange-600" />, decimals: 0 },
    { label: "Quality Score", value: 99.9, suffix: "%", icon: <ShieldCheck className="w-5 h-5 text-orange-600" />, decimals: 1 },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left: Imagery Composition - Stacks on top for mobile */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" 
              alt="Our Studio" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
          
          {/* Floating Experience Card - Hidden on very small screens, visible from md up */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-900 text-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl z-20 hidden sm:block">
            <p className="text-4xl md:text-5xl font-serif font-bold text-orange-500 mb-2">
              <CountUp end={12} duration={3} />+
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-400 leading-tight">
              Years of Creative <br /> Excellence
            </p>
          </div>

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-2"
        >
          <motion.h2 variants={fadeInUp} className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-6">
            About Pixbrowni
          </motion.h2>
          
          <motion.h3 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
            The bridge between <span className="italic font-medium text-slate-400">Raw Data</span> and Visual Art.
          </motion.h3>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-base md:text-lg text-slate-900 font-medium leading-relaxed mb-12">
            <p>
              Founded on the principle of precision, Pixbrowni is more than an editing service. We are a specialized post-production partner for photographers, realtors, and global brands.
            </p>
            <p>
              Our team of master retouchers combines advanced tools with artistic intuition to ensure every pixel serves a purpose.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                <div className="mt-1 shrink-0">{stat.icon}</div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900">
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.decimals} 
                      enableScrollSpy 
                      scrollSpyOnce 
                    />
                    {stat.suffix}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;