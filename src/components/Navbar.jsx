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
    setDesktopServices(false); // Close mega menu on route change
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
        <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b md:border border-slate-200/50">
          <div className="h-20 md:h-24 px-8 flex items-center justify-between">
            <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter hover:opacity-80 transition">
              PIX<span className="text-orange-600">BROWNI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-12 items-center">
              <Link to="/" className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight">
                Home
              </Link>

              <div 
                className="relative h-24 flex items-center cursor-pointer"
                onMouseEnter={() => setDesktopServices(true)}
              >
                <div className="flex items-center gap-1.5 text-base font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${desktopServices ? "rotate-180" : ""}`} />
                </div>
              </div>

              <Link to="/gallery" className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight">
                Gallery
              </Link>
              <Link to="/about" className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors uppercase tracking-tight">
                About
              </Link>
            </div>

            <div className="hidden md:block">
              <Link to="/contact" className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-slate-900/20">
                Get Started
              </Link>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 bg-slate-100 rounded-xl text-slate-900">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Full Width Mega Menu */}
          <AnimatePresence>
            {desktopServices && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className="absolute left-0 top-full w-full pt-2"
              >
                <div className="bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] md:rounded-3xl overflow-hidden">
                  <div className="max-w-7xl mx-auto grid grid-cols-3 gap-0 divide-x divide-slate-50">
                    {serviceCategories.map((cat, i) => (
                      <div key={i} className="p-10 hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-3 text-orange-600 mb-8">
                          <span className="p-2.5 bg-orange-50 rounded-2xl">
                            {cat.icon}
                          </span>
                          <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">
                            {cat.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-4">
                          {cat.items.map((item, x) => (
                            <Link
                              key={x}
                              to={item.path}
                              className="group flex items-center justify-between text-[15px] font-bold text-slate-500 hover:text-orange-600 transition-all"
                            >
                              {item.name}
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Bottom Strip */}
                  <div className="bg-slate-50 p-6 flex justify-center border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-500 italic">
                      Can't find what you're looking for? 
                      <Link to="/contact" className="ml-2 text-orange-600 font-bold not-italic hover:underline">Contact our custom solutions team</Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* --- MOBILE DRAWER (Remaining logic unchanged) --- */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[100] transform transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden shadow-2xl ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute top-0 left-0 w-full h-20 px-6 xs:px-8 flex items-center justify-between border-b border-slate-50 bg-white/80 backdrop-blur-md z-10">
          <Link to="/" onClick={closeMenu} className="text-xl xs:text-2xl font-black tracking-tighter">
            PIX<span className="text-orange-600">BROWNI</span>
          </Link>
          <button onClick={closeMenu} className="p-2.5 bg-slate-100 hover:bg-orange-50 hover:text-orange-600 rounded-full transition-all duration-300">
            <X size={22} />
          </button>
        </div>
        <div className="pt-24 px-6 xs:px-10 pb-12 space-y-8 overflow-y-auto h-full no-scrollbar">
          <div className="flex flex-col gap-6 xs:gap-8">
            <Link to="/" onClick={closeMenu} className="text-3xl xs:text-4xl font-serif font-black text-slate-900">Home</Link>
            <div className="space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Our Expertise</p>
              {serviceCategories.map((cat, i) => (
                <div key={i} className="border-b border-slate-100 pb-1">
                  <button onClick={() => setAccordion(accordion === i ? null : i)} className="w-full flex justify-between items-center py-3 text-[17px] xs:text-xl font-bold text-slate-900 text-left">
                    <span className="flex gap-3 items-center whitespace-nowrap overflow-hidden">
                      <span className="shrink-0 text-orange-600">{cat.icon}</span>
                      <span className="truncate">{cat.title}</span>
                    </span>
                    <ChevronDown className={`shrink-0 transition-transform duration-300 ${accordion === i && "rotate-180"}`} />
                  </button>
                  <AnimatePresence>
                    {accordion === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-11 space-y-3 overflow-hidden pb-4">
                        {cat.items.map((item, x) => (
                          <Link key={x} to={item.path} onClick={closeMenu} className="block text-base font-medium text-slate-500 hover:text-orange-600 transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <Link to="/gallery" onClick={closeMenu} className="text-3xl xs:text-4xl font-serif font-black text-slate-900">Gallery</Link>
            <Link to="/about" onClick={closeMenu} className="text-3xl xs:text-4xl font-serif font-black text-slate-900">About Us</Link>
          </div>
          <Link to="/contact" onClick={closeMenu} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 active:scale-95 transition-transform">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;