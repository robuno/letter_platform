const Letter = require('../models/Letter');
const User = require('../models/User');

// Send a letter
exports.sendLetter = async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  try {
    const newLetter = new Letter({ senderId, receiverId, content });
    
    await newLetter.save();
    res.status(201).json({ 
        message: 'Letter sent successfully', 
        letter: newLetter
    });

  } catch (err) {
    res.status(400).json({ 
        message: 'Error sending letter', 
        error: err.message 
    });
  }
};

// Get all letters received by a user
exports.getReceivedLetters = async (req, res) => {
  const { userId } = req.params;

  try {
    const letters = await Letter.find({ 
      receiverId: userId 
    }).populate('senderId', 'username');

    res.status(200).json({ letters });

  } catch (err) {
    res.status(400).json({ 
      message: 'Error fetching letters', 
      error: err.message 
    });
  }
};