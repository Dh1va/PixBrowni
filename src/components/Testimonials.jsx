import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      name: "Jonathan Wright",
      role: "Luxury Real Estate Photographer",
      text: "Pixbrowni transformed my workflow. Their HDR blending is the most natural I've seen in the industry. My delivery times have been cut in half.",
    },
    {
      name: "Sarah Jenkins",
      role: "Fashion Editor, Studio X",
      text: "The skin retouching is flawless—they maintain texture while achieving that high-end editorial look perfectly. Truly a premium partner.",
    },
    {
      name: "Michael Chen",
      role: "Commercial Architect",
      text: "Exceptional attention to detail. They understand light and shadow in a way that most editing houses simply don't.",
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section className="py-20 md:py-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 md:gap-16 items-center">
          
          {/* Header - Added relative z-20 to stay above slider if needed */}
          <motion.div
            className="relative z-20 " 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-orange-600 uppercase mb-4"
            >
              Reviews
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight"
            >
              What the <br className="hidden md:block" />
              <span className="italic font-light text-slate-400 text-3xl md:text-5xl lg:text-6xl">Industry Leaders</span> <br className="hidden md:block" />
              are saying.
            </motion.p>
          </motion.div>
          
          {/* Slider Container - Constraints added */}
          <div className="lg:col-span-2 w-full min-w-0 overflow-hidden md:overflow-visible py-10 -my-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  allowTouchMove: false,
                },
                0: {
                  slidesPerView: 1,
                  allowTouchMove: true,
                }
              }}
              className="testimonial-swiper !pb-16"
            >
              {reviews.map((rev, i) => (
                <SwiperSlide key={i} className="h-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="h-full p-8 md:p-10 rounded-[2rem] md:rounded-[32px] bg-slate-50 border border-slate-100 relative group transition-all duration-300 flex flex-col"
                  >
                    <Quote className="absolute top-8 right-8 w-8 h-8 text-orange-200 opacity-50 group-hover:text-orange-500 transition-colors duration-500" />
                    
                    <p className="text-slate-600 italic mb-8 leading-relaxed text-base">
                      "{rev.text}"
                    </p>
                    
                    <div className="mt-auto">
                      <p className="font-bold text-slate-900 text-lg">{rev.name}</p>
                      <p className="text-[10px] md:text-xs font-bold text-orange-600 uppercase tracking-widest mt-1.5">
                        {rev.role}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ea580c;
          width: 24px;
          border-radius: 4px;
        }
        /* Mobile specific constraint */
        @media (max-width: 767px) {
          .testimonial-swiper {
            width: 100%;
            padding-left: 4px;
            padding-right: 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;