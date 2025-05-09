import pomodoro from '../images/pomodoro.png'
import todo from '../images/ToDo.png'
import chatbot from '../images/chatbot.png'
import career from'../images/f72ddbce-e4a9-4154-8f28-79889fac4425-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/typesTherapy.css'
import job from '../images/8848682-removebg-preview.png'
import CustomNavbar from './Navbar';


function ChooseCareerHelp() {
    return (
        <>
        <CustomNavbar />
        <div className="container-fluid text-center typesTherapy typesTherapy2 p-5 m-0" style={{ backgroundColor: 'white' }}>

              {/* <h1 className=''>What type of the therapy are you looking for !</h1> */}
              <div className="row justify-content-center mt-5">
                 <a href="/chatbootFuture" className="col-md-3 col-12 text-center mt-5" >
                     <img src={chatbot} alt='pomodoro' className='pomodoro img-fluid' />
                     <p> Career help chatbot  <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /></p>
                 </a>
                 <a href="/roadmap" className="col-md-3 col-12 mt-5" >
                     <img src={job} alt='pomodoro'  className='todo img-fluid'/>
                     <p> job road map <FontAwesomeIcon icon={faCircleArrowRight} className="ms-2 icon " /> </p>
                 </a>
                 

              </div>
           </div>
        </>
    )
}

export default ChooseCareerHelp;