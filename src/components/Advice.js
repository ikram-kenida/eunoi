import React from 'react';
import '../css/Advice.css';

import img1 from '../images/Screen Shot 2025-04-12 at 12.16.03 AM.png';
import img2 from '../images/Screen Shot 2025-04-12 at 12.16.27 AM.png';
import img3 from '../images/Screen Shot 2025-04-12 at 12.16.41 AM.png';
import img4 from '../images/Screen Shot 2025-04-12 at 12.17.22 AM.png';
import img5 from '../images/Screen Shot 2025-04-12 at 12.17.34 AM.png';
import img6 from '../images/Green and White Elegant Symmetrical Login Page Desktop Prototype (1).jpg'
import CustomNavbar from './Navbar';




const AdvicePage = () => {
  return (
    
    <>

    <div  className='mt-2'>
    <CustomNavbar  />
    </div>
    <div className="advice-page">
     
      <main>
      <h1 id="h">Healthy lifestyle </h1>

        <section className="advice-cards">
          {/* First Row */}
          <div className="card ">
          <img src={img1} alt="Time Management" />
            <h2>Time Management</h2>
            <p>Practice being present and reducing anxiety.</p>
          </div>
          <div className="card">
          <img src={img2} alt="Mindfulness and Meditation" />
            <h2>Mindfulness and Meditation</h2>
            <p>Deep breathing, yoga, and progressive muscle relaxation help.</p>
          </div>
          <div className="card">
          <img src={img3} alt="Relaxation Exercises" />
            <h2>Relaxation Exercises</h2>
            <p>Prioritize tasks and take breaks to avoid burnout.</p>
          </div>
          </section>
          <h1 id="h"> Social support and communication </h1>

          <section className="advice-cards">
          {/* Second Row */}
          <div className="card">
          <img src={img4} alt="Talk With Close Ones" />
            <h2>Talk With Close Ones</h2>
            <p>Discuss your feelings with freinds or family.</p>
          </div>
          <div className="card">
          <img src={img5} alt="Join Communities" />
            <h2>Join Communities </h2>
            <p>Find support grpups or social activities that you enjoy.</p>
          </div>
          <div className="card">
          <img src={img6} alt="Professional Consultation" />
            <h2> Professional Consultation </h2>
            <p>Don't hesitate to seek help from a psychologist or counselor if needed.</p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default AdvicePage;