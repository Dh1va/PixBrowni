import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
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
      {/* <TechStack/> */}
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