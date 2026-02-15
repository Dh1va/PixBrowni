import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  MessageCircle } from 'lucide-react';

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HDRBlending from "./pages/services/HDRBlending";
import Twilight from "./pages/services/Twilight";
import AerialEditing from "./pages/services/AerialEditing";
import PanoramaStitching from "./pages/services/PanoramaStitching";
import FloorPlanning from "./pages/services/FloorPlanning";
import PhotoRetouching from "./pages/services/PhotoRetouching";
import ModelRetouching from "./pages/services/ModelRetouching";
import WeddingEditing from "./pages/services/WeddingEditing";
import FoodPhotoEditing from "./pages/services/FoodPhotoEditing";
import ClippingPath from "./pages/services/ClippingPath";
import ImageMasking from "./pages/services/ImageMasking";
import VideoEditing from "./pages/services/VideoEditing";
import VirtualStaging from "./pages/services/VirtualStaging";
import Decluttering from "./pages/services/Decluttering";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Container to push footer to bottom if page is short */}
      <div className="flex flex-col min-h-screen selection:bg-orange-100 selection:text-orange-900">
        {/* Navigation stays visible at all times */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/hdr-blending" element={<HDRBlending />} />
            <Route path="/services/day-to-dusk" element={<Twilight />} />

            <Route
              path="/services/aerial-editing"
              element={<AerialEditing />}
            />
            <Route
              path="/services/panorama-stitching"
              element={<PanoramaStitching />}
            />
            <Route
              path="/services/floor-planning"
              element={<FloorPlanning />}
            />
            <Route
              path="/services/photo-retouching"
              element={<PhotoRetouching />}
            />
            <Route
              path="/services/model-retouching"
              element={<ModelRetouching />}
            />
            <Route
              path="/services/wedding-editing"
              element={<WeddingEditing />}
            />
            <Route
              path="/services/food-photo-editing"
              element={<FoodPhotoEditing />}
            />
            <Route path="/services/clipping-path" element={<ClippingPath />} />
            <Route path="/services/image-masking" element={<ImageMasking />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route
              path="/services/virtual-staging"
              element={<VirtualStaging />}
            />
            <Route path="/services/decluttering" element={<Decluttering />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of all pages */}
        <Footer />
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] flex items-center gap-4 group">
        
        {/* Desktop Tooltip - Only visible on hover */}
        <div className="hidden md:block overflow-hidden">
          <div className="bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <p className="text-[11px] font-bold text-slate-900 whitespace-nowrap tracking-tight">
              Chat with a specialist
            </p>
          </div>
        </div>

        <a 
          href="https://wa.me/917502473853" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white w-12 h-12 md:w-12 md:h-12 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Aura */}
          <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 scale-75 group-hover:opacity-0 transition-opacity" />
          
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className="relative z-10 md:w-8 md:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.854 11.854 0 001.54 5.854L0 24l6.117-1.605a11.803 11.803 0 005.925 1.585h.005c6.635 0 12.03-5.39 12.033-12.03a11.825 11.825 0 00-3.58-8.502z"/>
          </svg>
        </a>
      </div>
      </div>
    </Router>
  );
}

export default App;
