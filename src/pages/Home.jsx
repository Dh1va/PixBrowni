import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ServicesShowcase from '../components/ServicesShowcase';
import GalleryPreview from '../components/GalleryPreview';
import AboutSection from '../components/AboutSection';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <TrustedBy />
      <ServicesShowcase />
      <GalleryPreview />
      <Process />
      <AboutSection />
      <Testimonials />
      
      
    </div>
  );
};

export default Home;