import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LetterForm = ({ userId }) => {
  const [content, setContent] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [senderId, setSenderId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setSenderId(storedUserId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!senderId) {
      alert('Please log in to send a letter.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/letters/send', {
        senderId,
        receiverId,
        content,
      });
      alert('Letter sent successfully!');
      setContent('');
      setReceiverId('');
    } catch (error) {
      console.error('Error sending letter:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h3>Sender ID: {senderId || 'Not Logged In'}</h3> */}
      <input
        type="text"
        placeholder="Receiver ID"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <textarea
        placeholder="Write your letter..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
