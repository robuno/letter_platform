const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 🟢 REGISTER a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// 🟢 LOGIN a user
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// 🟢 GET USERNAME by user ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
