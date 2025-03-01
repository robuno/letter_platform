import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LetterForm from '../components/LetterForm';
import LetterList from '../components/LetterList';
import axios from 'axios';

const Home = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');

    if (storedUserId) {
      setUserId(storedUserId);
      if (storedUsername) {
        setUsername(storedUsername);    // get from cache
      } else {
        fetchUsername(storedUserId);    // api call
      }
    }
    }, []);

  const fetchUsername = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUsername(response.data.username);
      localStorage.setItem('username', response.data.username);
    } catch (error) {
      console.error('Error fetching username:', error);
    }
    };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('username');

    // Reset state
    setUserId(null);
    setUsername('');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to E-Letter Platform</h1>
      {userId ? (
        <>
          <p>Your Username: {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
      <LetterForm userId={userId} />
      <LetterList userId={userId} />
    </div>
  );
};

export default Home;
