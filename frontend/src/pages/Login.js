import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserId }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email });
  
      const { _id, username } = response.data.user;
      alert('Login successful!');
      
      localStorage.setItem('userId', _id);
      localStorage.setItem('username', username);  // Store username
      setUserId(_id);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;