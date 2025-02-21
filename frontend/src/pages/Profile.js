import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email'); 

    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;
