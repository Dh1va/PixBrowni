import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      name: "Jonathan Wright",
      role: "Luxury Real Estate",
      text: "Pixbrowni transformed my workflow. Their HDR blending is the most natural I've seen in the industry. My delivery times have been cut in half.",
    },
    {
      name: "Sarah Jenkins",
      role: "Fashion Editor",
      text: "The skin retouching is flawless—they maintain texture while achieving that high-end editorial look perfectly. Truly a premium partner.",
    },
    {
      name: "Michael Chen",
      role: "Commercial Architect",
      text: "Exceptional attention to detail. They understand light and shadow in a way that most editing houses simply don't.",
    }
  ];

  // Scroll Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          
          {/* Section Heading - Animates on Scroll */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-orange-600 font-black tracking-[0.4em] uppercase text-[11px] mb-4">
                Service Showcase
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                What our <span className="text-orange-600 italic font-light">partners</span> <br /> say about us.
              </h3>
              <div className="w-16 h-1 bg-orange-600 mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
                From luxury boutiques to commercial architects, we deliver excellence at scale.
              </p>
            </motion.div>
          </div>

          {/* Slider - Entire container fades up on scroll */}
          <motion.div className="lg:w-2/3 min-w-0" variants={fadeUp}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoHeight={false}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="testimonial-swiper !pb-20"
            >
              {reviews.map((rev, i) => (
                <SwiperSlide key={i} className="!h-auto flex"> 
                  {/* Individual cards can also have subtle internal scroll delay if preferred */}
                  <div className="w-full p-8 md:p-12 bg-orange-50/40 rounded-[2.5rem] border border-orange-200 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(234,88,12,0.05)]">
                    <div>
                      <div className="text-orange-600 text-6xl font-serif mb-2 leading-none opacity-60">“</div>
                      <p className="text-slate-800 text-xl leading-relaxed mb-10 font-medium">
                        {rev.text}
                      </p>
                    </div>
                    
                    <div className="pt-8 border-t border-orange-200 flex items-center gap-4">
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg tracking-tight">{rev.name}</h4>
                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mt-1">
                          {rev.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-wrapper {
          display: flex;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #ffedd5; 
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ea580c; /* Primary Orange */
          width: 32px;
          border-radius: 8px;
          transition: all 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;