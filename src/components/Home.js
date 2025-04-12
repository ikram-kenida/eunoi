// src/pages/Home.js

import HeroSection from '../components/HeroSection';
import TypesTherapy from './TypesTherapy';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';

function Home() {
  return (
    <>
    
      <HeroSection />
     <TypesTherapy />
      <Testimonials /> 
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
