import React, { useEffect, useState } from 'react';
import LetterForm from '../components/LetterForm';
import LetterList from '../components/LetterList';
import axios from 'axios';

const Home = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');

    if (storedUserId) {
      setUserId(storedUserId);
      
      // If username is not in localStorage, fetch it from backend
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        fetchUsername(storedUserId);
      }
    }
  }, []);

  const fetchUsername = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUsername(response.data.username);
      localStorage.setItem('username', response.data.username); // Store username
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to E-Letter Platform</h1>
      {userId ? <p>Your Username: {username}</p> : <p>Please log in.</p>}
      <LetterForm userId={userId} />
      <LetterList userId={userId} />
    </div>
  );
};

export default Home;
