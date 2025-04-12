import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ChatbotLanding.css';
import robot from '../images/robot.png'; // Replace with your actual image
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaTelegram } from 'react-icons/fa';
import CustomNavbar from './Navbar';

const ChatbotLanding = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  const runChat = async (userInput) => {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [
          {
            role: 'system',
            content: `
              You are a mental health assistant. Only answer mental health-related questions in a calm, supportive, and helpful tone.
              If the user asks something unrelated to mental health, kindly respond: "I’m here to help with mental health. Let’s focus on that together."
            `
          },
          {
            role: 'user',
            content: userInput
          }
        ]
      })
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content;
    } else {
      return "Oops, I didn’t understand that. Please try again!";
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    if (!chatStarted) setChatStarted(true);

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const reply = await runChat(input);
    const botMessage = { role: 'assistant', text: reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
   
    <div className={`chat-container ${chatStarted ? 'chat-started' : ''}`}>
      
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center position-relative z-2">
        <h1 className="fw-bold mb-3">How can I help you today?</h1>
        <p className="text-secondary mb-4">Your conversation is private and not stored</p>

        {!chatStarted && (
          <img src={robot} alt="Robot" className="robot-img mb-4" />
        )}

        <div className="chatbox mb-4 w-100 px-3" style={{ maxHeight: '450px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'bot-bubble'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-group mt-5 chatbot-input rounded-pill overflow-hidden w-75">
          <input
            type="text"
            className="form-control border-0 text-uppercase fw-bold"
            placeholder="Ask anything"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: 'none',
              outline: 'none',
            }}
          />
          <button
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center me-2 "
            style={{ width: '60px', height: '60px' }}
            onClick={handleSend}
          >
           <FaTelegram className="text-white"  size={24} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChatbotLanding;
