import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Will you retouch my photos, portrait, newborn, high-end, jewelry, or estate photos?",
      answer: "Yes, our master retouchers are specialized across all niches including high-end fashion, intricate jewelry, and luxury real estate."
    },
    {
      question: "I don't like the editing. Can I have it fixed?",
      answer: "Absolutely. We offer unlimited revisions as part of our commitment to your satisfaction until the results meet your standard."
    },
    {
      question: "Do you offer discounts for large orders?",
      answer: "We provide competitive per-image pricing and custom quotes for high-volume catalogs to help scale your business efficiently."
    },
    {
      question: "How does the free trial work?",
      answer: "Simply upload one test image through our contact form. We'll return the edited version and a quote within 24 hours."
    },
    {
      question: "Do I pay monthly and per-image?",
      answer: "We operate on a transparent pay-per-image model with no monthly subscription fees or hidden costs."
    },
    {
      question: "Can my pictures be leaked?",
      answer: "Your privacy is our priority. We use secure encrypted portals and strict data protection protocols for all client assets."
    },
    {
      question: "How soon will the images be deleted?",
      answer: "Standard policy is to retain files for 30 days to allow for revisions, after which they are permanently deleted from our servers."
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="lg:col-span-5">
            <p className="text-orange-600 font-bold text-sm mb-4">FAQs</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight mb-8">
              Everything you 
              need to know 
              about <span className="text-orange-600">Pixbrowni's</span> <br />
              services
            </h2>
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-sm">
              You might not know what to do at first. To help you get started, here are some common questions asked by our clients to help address any concerns.
            </p>
          </div>

          {/* --- RIGHT SIDE: ACCORDION --- */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-dashed divide-slate-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-2">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left py-6 flex justify-between items-center gap-6 group"
                  >
                    <span className={`text-sm md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                      openIndex === index ? 'text-orange-600' : 'text-slate-900 group-hover:text-orange-600'
                    }`}>
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-slate-400">
                      {openIndex === index ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="pb-8">
                          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {/* Bottom dashed line to complete the look */}
              <div className="border-t border-dashed border-slate-200 w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;