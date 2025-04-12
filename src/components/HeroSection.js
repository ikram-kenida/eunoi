// src/components/HeroSection.js
import { Container, Button } from 'react-bootstrap';
import heroImg from '../images/homePage1.png'
import '../css/heroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomNavbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
  import { useEffect } from 'react';

function HeroSection() {


useEffect(() => {
  AOS.init({
    duration: 1000,  // Customize animation duration
    once: true,      // Makes the animation occur once
  });
}, []);

  return (
    <>
   
    <div className="py-2 heroSection" >
    <CustomNavbar />
      <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-between content ">
        <div className="text-center text-lg-start mb-4 mb-lg-0 col-md-6 p-md-3 col-12" >
          <h1 className="fw-bold mb-3 h1 mb-5">You deserve To be happy.</h1>
          <p className='p'>
            Mental health refers to our emotional, psychological, and social well-being.
            It affects how we think...
          </p>
          <Button variant="outline-dark" className="rounded-pill readmore mt-4">
  Read more <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " />
</Button>

        </div>
        <img
      data-aos="zoom-in"
          src={heroImg}
          alt="Therapist illustration"
         className='col-md-5  col-12 img-fluid'
        />
      </Container>
    </div>
    </>
  );
}

export default HeroSection;
