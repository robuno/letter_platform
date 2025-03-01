import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LetterList from '../components/LetterList';

const Profile = () => {
  const [user, setUser] = useState({ username: '', email: '' });
  const userId = localStorage.getItem('userId'); // Get logged-in user ID

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUser({ username: response.data.username, email: response.data.email });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <LetterList userId={userId} /> {/* Show letters received */}
    </div>
  );
};

export default Profile;
