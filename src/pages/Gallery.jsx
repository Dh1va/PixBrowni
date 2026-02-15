import { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom'; // Added useSearchParams

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState('All');

  // Mapping URL query params to your category display names
  const categoryMap = {
    'all': 'All',
    'real-estate': 'Real Estate',
    'fashion': 'Fashion',
    'product': 'Product',
    'architectural': 'Architectural',
    'retouching': 'Retouching',
    'aerial': 'Real Estate', // Maps "aerial" button to "Real Estate" category
    'hdr': 'Real Estate',
    'twilight': 'Real Estate'
  };

  const categories = ['All', 'Real Estate', 'Fashion', 'Product', 'Architectural', 'Retouching'];

  const projects = [
    { id: 1, title: "The Glass House", category: "Real Estate", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200", size: "large" },
    { id: 2, title: "Vogue Editorial", category: "Fashion", image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1200", size: "small" },
    { id: 3, title: "Luxury Watch", category: "Product", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200", size: "small" },
    { id: 4, title: "Modern Loft", category: "Real Estate", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200", size: "medium" },
    { id: 5, title: "High-Rise Suite", category: "Architectural", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200", size: "medium" },
    { id: 6, title: "Minimalist Studio", category: "Architectural", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200", size: "small" },
  ];

  // Effect to listen to URL changes
  useEffect(() => {
    const categoryQuery = searchParams.get('category');
    if (categoryQuery && categoryMap[categoryQuery]) {
      setFilter(categoryMap[categoryQuery]);
    } else {
      setFilter('All');
    }
  }, [searchParams]);

  // Function to handle manual filter clicks (updates URL too)
  const handleFilterChange = (cat) => {
    setFilter(cat);
    // Find the slug key for the display name to keep URL clean
    const slug = Object.keys(categoryMap).find(key => categoryMap[key] === cat) || 'all';
    setSearchParams({ category: slug });
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white pt-24 md:pt-48 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-orange-600 mb-4 md:mb-6">Portfolio</h2>
            <h1 className="text-4xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.1] md:leading-[0.9] mb-8">
              The Art of <br />
              <span className="italic font-light text-slate-400">Post-Production.</span>
            </h1>
          </motion.div>

          {/* --- HORIZONTAL SCROLL FILTERS --- */}
          <div className="relative mt-12">
            <div className="flex overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
              <div className="flex gap-3 md:gap-4 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      filter === cat 
                      ? "bg-slate-900 text-white shadow-lg" 
                      : "text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BENTO GALLERY GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[350px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-slate-100 cursor-pointer ${
                  project.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : 
                  project.size === 'medium' ? 'sm:col-span-2' : ''
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-10 flex flex-col justify-end p-8 md:p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mb-2">{project.category}</p>
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">{project.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-xl">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-20 md:mt-32 p-10 md:p-16 rounded-[40px] md:rounded-[60px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4">Start your trial today.</h4>
            <p className="text-slate-400 font-light max-w-sm">Experience the Pixbrowni quality with 3 complimentary high-end edits.</p>
          </div>
          <Link to="/contact" className="relative z-10 px-8 py-4 bg-orange-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all">
            Get Started
          </Link>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Gallery;