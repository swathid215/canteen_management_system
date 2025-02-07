const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./db'); // Import your user schema
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists!' });
  }

  // Create a new user
  const user = new User({ name, email, phone, password });
  await user.save();

  res.status(201).json({ message: 'User created successfully' });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Compare the passwords
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
