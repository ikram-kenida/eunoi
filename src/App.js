import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Chatbot from './components/ChatbotLanding';
import Task from './components/Task';
import Calendar from './components/Calendar';
import Advice from './components/Advice';
import ChatbotFuture from './components/ChatbotFuture';
import Profile from './components/EditProfile';
import EditProfile from './components/EditProfileCard';
import Roadmap from './components/RoadMap';
import ChooseCareerHelp from './components/ChooseCareerHelp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatboot" element={<Chatbot />} />
        <Route path="/chatbootFuture" element={<ChatbotFuture />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/editProfile" element={<Profile />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/choose" element={<ChooseCareerHelp />} />
      </Routes>
    </Router>
  );
}

export default App;
