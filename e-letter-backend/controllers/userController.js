const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = new User({ username, email });

    await newUser.save();

    res.status(201).json({ 
        message: 'User registered successfully', 
        user: newUser 
    });


  } catch (err) {
    res.status(400).json({ 
        message: 'Error registering user', 
        error: err.message 
    });
  }
};

// Login 
exports.login = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err.message });
  }
};