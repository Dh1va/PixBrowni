import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import HDRBlending from './pages/services/HDRBlending';
import AerialEditing from './pages/services/AerialEditing';
import PanoramaStitching from './pages/services/PanoramaStitching';
import FloorPlanning from './pages/services/FloorPlanning';
import PhotoRetouching from './pages/services/PhotoRetouching';
import ModelRetouching from './pages/services/ModelRetouching';
import WeddingEditing from './pages/services/WeddingEditing';
import FoodPhotoEditing from './pages/services/FoodPhotoEditing';
import ClippingPath from './pages/services/ClippingPath';
import ImageMasking from './pages/services/ImageMasking';
import VideoEditing from './pages/services/VideoEditing';
import VirtualStaging from './pages/services/VirtualStaging';
import Decluttering from './pages/services/Decluttering';
import ScrollToTop from './components/ScrollToTop';

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
            <Route path="/services/aerial-editing" element={<AerialEditing />} />
            <Route path="/services/panorama-stitching" element={<PanoramaStitching />} />
            <Route path="/services/floor-planning" element={<FloorPlanning />} />
            <Route path="/services/photo-retouching" element={<PhotoRetouching />} />
            <Route path="/services/model-retouching" element={<ModelRetouching />} />
            <Route path="/services/wedding-editing" element={<WeddingEditing />} />
            <Route path="/services/food-photo-editing" element={<FoodPhotoEditing />} />
            <Route path="/services/clipping-path" element={<ClippingPath />} />
            <Route path="/services/image-masking" element={<ImageMasking />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/services/virtual-staging" element={<VirtualStaging />} />
            <Route path="/services/decluttering" element={<Decluttering />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 

           
          </Routes>
        </main>

        {/* Footer stays at the bottom of all pages */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;