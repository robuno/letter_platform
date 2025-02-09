import React, { useEffect, useState } from 'react';
import LetterForm from '../components/LetterForm';
import LetterList from '../components/LetterList';

const Home = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to E-Letter Platform</h1>
      {userId ? <p>Your User ID: {userId}</p> : <p>Please log in.</p>}
      <LetterForm userId={userId} />
      <LetterList userId={userId} />
    </div>
  );
};

export default Home;
