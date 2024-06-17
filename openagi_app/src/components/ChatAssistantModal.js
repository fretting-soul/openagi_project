import React, { useState } from 'react';
import '../Modal.css';

const ChatAssistantModal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendClick = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');
      // Handle sending the message and receiving a response
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Chat Assistant</h2>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user}`}>
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default ChatAssistantModal;

