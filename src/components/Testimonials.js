import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import student1 from '../images/student1.jpeg';
import student2 from '../images/student2.jpeg';
import student3 from '../images/student3.jpeg';
import student4 from '../images/student4.jpeg';
import '../css/Testimonials.css';


  const testimonials = [
    {
      name: 'Ananya R.',
      img: student1,
      rating: 5,
      text: 'I was struggling with anxiety during my final year, and this platform became my safe space. The counselors truly listened, and I felt seen for the first time in a long while. I’m graduating now with a clearer mind and so much more confidence.',
    },
    {
      name: 'Ravi M.',
      img: student2,
      rating: 4,
      text: 'Managing studies and personal life felt overwhelming. The journaling tools and guided meditations really helped me build a routine and control my stress. I still use them daily.',
    },
    {
      name: 'Sneha D.',
      img: student3,
      rating: 5,
      text: 'This platform changed the way I think about mental health. I learned that it’s okay to ask for help, and I don’t have to go through tough days alone. The support groups gave me a sense of belonging I never expected.',
    },
    {
      name: 'Kunal S.',
      img: student4,
      rating: 4,
      text: 'I used to ignore my feelings, thinking I just had to “deal with it.” But talking to a therapist through the app opened up a new perspective. It’s made a real difference in how I handle challenges now.',
    },
  
  
];

const Testimonials = () => {
  return (
    <div className="container my-5 Testimonials">
      <h1 className="text-center text-teal">Students testimonials</h1>
      <div className="row mt-5 p-md-5">
        {testimonials.map((item, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card p-3 mx-3 mt-4 comment shadow-sm border-0" data-aos="flip-right" style={{ borderRadius: '15px', backgroundColor: '#8cccc9' }}>
              <div className="d-flex align-items-center mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-circle me-3 profileImg "
                  width="80"
                  height="80"
                />
                <div className="d-flex">
                  {[...Array(item.rating)].map((_, i) => (
                    <FontAwesomeIcon icon={faStar} className="mx-2 mb-3" key={i} color="#FFD700" />
                  ))}
                </div>
              </div>
              <p className="mb-0 p-3">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
