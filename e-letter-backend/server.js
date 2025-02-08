const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const letterRoutes = require('./routes/letterRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/letters', letterRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eletter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});