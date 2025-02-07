// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect('your_mongodb_connection_string_here', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const user = new User({ name, email, phone, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(400).send({ error: 'Email already exists or invalid data' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'Login successful' });
  } catch (err) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
