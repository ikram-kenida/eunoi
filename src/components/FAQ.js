import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/FAQ.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const faqData = [
  {
    question: 'How will this help me?',
    answer:
      'Every therapist providing services on BetterHelp is a qualified and experienced counselor ,psychologist, social worker,or therapist. They must also have a relevant academic degree, at least 3 years of experience, and have credentials from their professional organization. ',
  },
  {
    question: 'How will I communicate with my therapist?',
    answer:
      'You can communicate via secure messaging, video calls, or scheduled live chat sessions.',
  },
  {
    question: 'Is BetterHelp right for me?',
    answer:
      'BetterHelp is suitable for many people dealing with stress, anxiety, depression, and more. However, it may not replace in-person care for severe cases.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container-fluid p-5  faq">
      <h1 className="text-center ">FREQUENTLY ASKED QUESTIONS</h1>
      
      {faqData.map((item, index) => (
        
        <div key={index} className="question py-3 d-flex flex-column align-items-center  " data-aos="fade-up"
        data-aos-duration="3000">
          <div
            className="d-flex justify-content-between align-items-center col-12 col-md-8 px-3"
          
            onClick={() => toggle(index)}
          >
            <h5 className="mb-0 text-start">{item.question}</h5>
            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
          </div>

          {activeIndex === index && (
            <p className="mt-3 text-secondary px-3 text-start col-md-8 answer mt-4" >
              {item.answer}
            </p>
            
          )}
          <hr className='col-md-8 col-12'  />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
