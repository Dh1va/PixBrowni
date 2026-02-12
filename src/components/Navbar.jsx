import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Image as ImageIcon,
  Home,
  Layers,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [desktopServices, setDesktopServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setAccordion(null);
    setDesktopServices(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const serviceCategories = [
    {
      title: "Real Estate & Architecture",
      icon: <Home className="w-5 h-5" />,
      items: [
        { name: "HDR Blending", path: "/services/hdr-blending" },
        { name: "Virtual Staging", path: "/services/virtual-staging" },
        { name: "Decluttering", path: "/services/decluttering" },
        { name: "Panorama Stitching", path: "/services/panorama-stitching" },
        { name: "Aerial Editing", path: "/services/aerial-editing" },
        { name: "Floor Planning", path: "/services/floor-planning" },
      ],
    },
    {
      title: "Retouching & Commercial",
      icon: <ImageIcon className="w-5 h-5" />,
      items: [
        { name: "Photo Retouching", path: "/services/photo-retouching" },
        { name: "Model Retouching", path: "/services/model-retouching" },
        { name: "Wedding Editing", path: "/services/wedding-editing" },
        { name: "Food Photo Editing", path: "/services/food-photo-editing" },
      ],
    },
    {
      title: "Editing & Post-Process",
      icon: <Layers className="w-5 h-5" />,
      items: [
        { name: "Clipping Path", path: "/services/clipping-path" },
        { name: "Image Masking", path: "/services/image-masking" },
        { name: "Video Editing", path: "/services/video-editing" },
      ],
    },
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] md:hidden"
          />
        )}
      </AnimatePresence>

      <header 
        className="fixed top-0 md:top-6 w-full z-[100] px-0 md:px-6"
        onMouseLeave={() => setDesktopServices(false)}
      >
        <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-b md:border border-slate-200/50">
          <div className="h-20 md:h-24 px-6 md:px-10 flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-slate-900">
              PIX<span className="text-orange-600">BROWNI</span>
            </Link>

            {/* --- DESKTOP NAVIGATION --- */}
            <div className="hidden md:flex gap-10 lg:gap-12 items-center">
              <Link to="/" className="text-[13px] font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-widest">
                Home
              </Link>
              <div 
                className="relative h-24 flex items-center cursor-pointer group"
                onMouseEnter={() => setDesktopServices(true)}
              >
                <Link to="/services" className="flex items-center gap-1.5 text-[13px] font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-widest">
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${desktopServices ? "rotate-180" : ""}`} />
                </Link>
              </div>
              <Link to="/gallery" className="text-[13px] font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-widest">
                Gallery
              </Link>
              <Link to="/about" className="text-[13px] font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-widest">
                About
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link to="/contact" className="px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95">
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-3 bg-slate-100 rounded-2xl text-slate-900 active:scale-90 transition-transform">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* --- DESKTOP MEGA MENU --- */}
          <AnimatePresence>
            {desktopServices && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute left-0 top-full w-full pt-2"
              >
                <div className="bg-white border border-slate-100 shadow-2xl md:rounded-3xl overflow-hidden">
                  <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-slate-50">
                    {serviceCategories.map((cat, i) => (
                      <div key={i} className="p-10">
                        <div className="flex items-center gap-3 text-orange-600 mb-8">
                          <span className="p-2.5 bg-orange-50 rounded-2xl">{cat.icon}</span>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">{cat.title}</h4>
                        </div>
                        <div className="flex flex-col gap-4">
                          {cat.items.map((item, x) => (
                            <Link key={x} to={item.path} className="group flex items-center justify-between text-[14px] font-bold text-slate-600 hover:text-orange-600 transition-all">
                              {item.name}
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* --- MOBILE DRAWER --- */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-[101] transform transition-transform duration-500 ease-in-out md:hidden shadow-2xl ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
          <Link to="/" onClick={closeMenu} className="text-xl font-bold tracking-tighter text-slate-900">
            PIX<span className="text-orange-600">BROWNI</span>
          </Link>
          <button onClick={closeMenu} className="p-3 bg-slate-100 rounded-2xl text-slate-900">
            <X size={20} />
          </button>
        </div>

        <div className="pt-8 px-8 pb-12 space-y-8 overflow-y-auto h-[calc(100%-80px)] no-scrollbar">
          <div className="flex flex-col gap-6">
            {['Home', 'Services', 'Gallery', 'About'].map((item) => (
              <div key={item} className="space-y-2">
                <div className="flex justify-between items-center">
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    onClick={closeMenu} 
                    className="text-2xl font-bold text-slate-900"
                  >
                    {item}
                  </Link>
                  
                  {item === 'Services' && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setAccordion(accordion === 'main' ? null : 'main');
                      }}
                      className={`p-2 rounded-xl transition-all ${accordion === 'main' ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-400'}`}
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${accordion === 'main' ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {item === 'Services' && (
                  <AnimatePresence>
                    {accordion === 'main' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        className="pl-2 space-y-6 pt-4 overflow-hidden  ml-1"
                      >
                        {serviceCategories.map((cat, i) => (
                          <div key={i} className="space-y-3">
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{cat.title}</p>
                            <div className="grid grid-cols-1 gap-4 pl-2">
                              {cat.items.map((subItem) => (
                                <Link key={subItem.name} to={subItem.path} onClick={closeMenu} className="text-[15px] font-bold text-slate-600 active:text-orange-600">
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <Link to="/contact" onClick={closeMenu} className="w-full py-4.5 bg-slate-900 text-white rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-transform">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;