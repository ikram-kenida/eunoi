import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ContactUs.css';
import contact from '../images/contact.png';

const ContactUs = () => {
  return (
    <div className="contact-container container-fluid p-0" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className="row w-100 mx-0">
        
        {/* Left Side - Form */}
        <div className="form-section d-flex justify-content-center align-items-center col-md-6 col-12 py-5">
        <form className='col-9'>
            <div className='phone_contact text-center'>
            <img src={contact} alt="Paper Plane" className="img-fluid col-10 col-md-8 text-start mb-5" />
            <h2 className="text-teal text-start mb-3 mb-4 fw-bold ">
            Contact us<span className="dot">.</span>
          </h2>
        
            </div>
  <div className="d-flex flex-column flex-md-row gap-3 mb-3">
    <div className="w-100">
      <label className="form-label text-start w-100">First Name</label>
      <input
        type="text"
        className="form-control rounded-pill light-input"
      />
    </div>
    <div className="w-100">
      <label className="form-label text-start w-100">Last Name</label>
      <input
        type="text"
        className="form-control rounded-pill light-input"
      />
    </div>
  </div>

  <div className="mb-3">
    <label className="form-label text-start w-100">Email Address</label>
    <input
      type="email"
      className="form-control rounded-pill light-input"
    />
  </div>

  <div className="mb-4">
    <label className="form-label text-start w-100">Message</label>
    <textarea
      rows="4"
      className="form-control rounded-4 light-input"
    ></textarea>
  </div>

  <button type="submit" className="btn btn-teal rounded-pill px-4">
    Submit
  </button>
</form>

        </div>

        {/* Right Side - Illustration */}
        <div className="illustration-section d-flex flex-column justify-content-center align-items-center col-md-6 col-12 p-5 text-center">
          <h2 className="text-teal mb-4 fw-bold">
            Contact us<span className="dot">.</span>
          </h2>
          <img src={contact} alt="Paper Plane" className="img-fluid col-10 col-md-8" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
