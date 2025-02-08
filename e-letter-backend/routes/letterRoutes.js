const express = require('express');
const letterController = require('../controllers/letterController');

const router = express.Router();

// send a letter
router.post('/send', letterController.sendLetter);

// get all letters for a user
router.get('/received/:userId', letterController.getReceivedLetters);

module.exports = router;