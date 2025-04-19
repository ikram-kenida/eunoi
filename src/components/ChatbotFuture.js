import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ChatbotLanding.css';
import robot from '../images/robot.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomNavbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const ChatbotFuture = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const prompts = [
    "I don’t know what career is right for me.",
    "How do I choose between two career paths?",
    "What skills should I learn for the future?",
    "I’m worried about not being successful. Any advice?",
    "How do I start planning for my future?",
    "What if I make the wrong career choice?",
    "I feel lost. Where do I even begin?"
  ];
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
              You are a supportive career guidance assistant. Focus only on helping users with their concerns about future careers, such as choosing the right career path, dealing with uncertainty, setting career goals, improving skills, or finding opportunities. 
              If the user asks about unrelated topics, kindly reply: "I'm here to talk about your future career concerns. Let's focus on that together."
              Always respond in a friendly and encouraging tone.
              Use line breaks to separate your advice clearly when needed.
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

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    if (!chatStarted) setChatStarted(true);

    const userMessage = { role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const reply = await runChat(text);
    const botMessage = { role: 'assistant', text: reply };
    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleSend = () => sendMessage(input);

  return (
    <div className={`chat-container ${chatStarted ? 'chat-started' : ''}`}>
      <div className='mt-2'>
           <CustomNavbar />
      </div>
   
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center position-relative z-2">
        <h1 className="fw-bold mb-3">Let’s talk about your career goals</h1>
        <p className="text-secondary mb-4">What's on your mind?</p>

        {!chatStarted && (
          <>
            <img src={robot} alt="Robot" className="robot-img mb-4" />
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {prompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(prompt)}
                  className="btn btn-outline-secondary rounded-pill px-3"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="chatbox mb-4 w-100 px-3" style={{ maxHeight: '450px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'bot-bubble'}`}
            >
              {msg.text.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </div>
          ))}

          {isTyping && (
            <div className="bot-bubble typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>

        <div className="input-group mt-5 chatbot-input rounded-pill overflow-hidden w-75">
          <input
            type="text"
            className="form-control border-0 text-uppercase fw-bold"
            placeholder="Ask anything about your future"
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
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: '60px', height: '60px' }}
            onClick={handleSend}
          >
           <FontAwesomeIcon icon={faPaperPlane} className="text-white" />

          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotFuture;
