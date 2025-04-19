import pomodoro from '../images/pomodoro.png'
import todo from '../images/ToDo.png'
import chatbot from '../images/chatbot.png'
import career from'../images/f72ddbce-e4a9-4154-8f28-79889fac4425-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/typesTherapy.css'



function TypesTherapy() {
    return (
        <>
           <div className="container-fluid  text-center typesTherapy p-5 m-0">
              <h1 className=''>What type of the therapy are you looking for !</h1>
              <div className="row justify-content-center mt-5">
                 <a href="/Task" className="col-md-3 col-12 text-center mt-5" data-aos="fade-up">
                     <img src={pomodoro} alt='pomodoro' className='pomodoro img-fluid' />
                     <p> pomodoro  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /></p>
                 </a>
                 <a href="/calendar" className="col-md-3 col-12 mt-5" data-aos="fade-up">
                     <img src={todo} alt='pomodoro'  className='todo img-fluid'/>
                     <p> To Do List  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /> </p>
                 </a>
                 <a href="/chatboot" className="col-md-3 col-12 mt-5" data-aos="fade-up">
  <img src={chatbot} alt="mental health chatbot" className="chatboot img-fluid" />
  <p>Student Support  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon" /></p>
</a>

<a href="/choose" className="col-md-3 col-12 mt-5" data-aos="fade-up">
  <img src={career} alt="career stress chatbot" className="career img-fluid" />
  <p>Career Help  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon" /></p>
</a>

              </div>
           </div>
        </>
    )
}

export default TypesTherapy;