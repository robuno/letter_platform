import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LetterList = ({ userId }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/letters/received/${userId}`);
        setLetters(response.data.letters);
      } catch (error) {
        console.error('Error fetching letters:', error);
      }
    };
    if (userId) {
      fetchLetters(); // Fetch letters only if userId is available
    }
  }, [userId]);

  return (
    <div>
      <h2>Received Letters</h2>
      {letters.map((letter) => (
        <div key={letter._id}>
          <p>{letter.content}</p>
          <small>From: {letter.senderId.username}</small>
        </div>
      ))}
    </div>
  );
};

export default LetterList;