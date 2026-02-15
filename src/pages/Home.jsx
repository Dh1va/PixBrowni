import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ServicesShowcase from '../components/ServicesShowcase';
import GalleryPreview from '../components/GalleryPreview';
import AboutSection from '../components/AboutSection';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import ImpactStats from '../components/ImpactStats';



const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <ImpactStats />
      {/* <TrustedBy /> */}
      <ServicesShowcase />
      <AboutSection />
      <Process />
      <ContactSection />
      <GalleryPreview />    
      <Testimonials />
      <FAQ/>
      
      
    </div>
  );
};

export default Home;