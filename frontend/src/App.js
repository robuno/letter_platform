import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [userId, setUserId] = useState(null); // State to store the logged-in user's ID

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home userId={userId} />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;