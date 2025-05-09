import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ChatbotLanding.css';
import robot from '../images/robot.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomNavbar from './Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatbotLanding = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Typing indicator state

  const prompts = [
    "I'm feeling anxious lately",
    "I can’t sleep because of overthinking",
    "What are some tips for managing anxiety?",
    "How can I improve my study habits?",
    "I’m struggling to focus on my studies",
    "How do I stay motivated during exam season?",
    "I feel stressed about my grades, what should I do?",
  ];

  const runChat = async (userInput) => {
    setIsTyping(true); // Show typing indicator when the bot is processing the response

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
            `,
          },
          {
            role: 'user',
            content: userInput,
          },
        ],
      }),
    });

    const data = await response.json();
    setIsTyping(false); // Hide typing indicator after response is received

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

    const reply = await runChat(text);
    const botMessage = { role: 'assistant', text: reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleSend = () => sendMessage(input);

  return (
    <div className={`chat-container ${chatStarted ? 'chat-started' : ''}`}>
        <div className='mt-2'>
                 <CustomNavbar />
            </div>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center position-relative z-2">
        <h1 className="fw-bold mb-3">How can I help you today?</h1>
        <p className="text-secondary mb-4">Your conversation is private and not stored</p>

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

export default ChatbotLanding;
