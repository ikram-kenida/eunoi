import pomodoro from '../images/pomodoro.png'
import todo from '../images/ToDo.png'
import chatbot from '../images/chatbot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/typesTherapy.css'



function TypesTherapy() {
    return (
        <>
           <div className="container-fluid  text-center typesTherapy p-5 m-0">
              <h1 className=''>What type of the therapy are you looking for !</h1>
              <div className="row justify-content-center mt-5">
                 <a href="/" className="col-md-3 col-12 text-center mt-5" data-aos="fade-up">
                     <img src={pomodoro} alt='pomodoro' className='pomodoro img-fluid' />
                     <p> pomodoro  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /></p>
                 </a>
                 <a href="/" className="col-md-3 col-12 mt-5" data-aos="fade-up">
                     <img src={todo} alt='pomodoro'  className='todo img-fluid'/>
                     <p> To Do List  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /> </p>
                 </a>
                 <a href="/chatboot" className="col-md-3 col-12 mt-5" data-aos="fade-up">
                     <img src={chatbot} alt='pomodoro' className='chatboot img-fluid' />
                     <p> ChatBoot  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /></p>
                 </a>
              </div>
           </div>
        </>
    )
}

export default TypesTherapy;