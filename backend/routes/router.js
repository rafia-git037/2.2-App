//router.js - backend
/*
const express = require('express');
const router = express.Router();
const mySchemas = require('../models/schemas');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
 console.log('data from frontend ', req.body);

  const newUser = new mySchemas.Users({
    name,
    email,
    password
  });

  try {
    await newUser.save();
    res.status(201).send('New user created!');
  } catch (error) {
    res.status(500).send('Error saving user: ' + error.message);
  }
});

module.exports = router; 


*/


const express = require('express');
const router = express.Router();
const mySchemas = require('../models/schemas');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('data from frontend ', req.body);

  try {
    // Check if the user with the same email or name already exists
    const existingUser = await mySchemas.Users.findOne({ $or: [{ name }, { email }] });
    
    if (existingUser) {
      return res.status(400).json({ message: 'User with the same name or email already exists' });
    }else{
      
    }

    const newUser = new mySchemas.Users({
      name,
      email,
      password
    });

    const savedUser = await newUser.save();
    console.log('User saved successfully:', savedUser);
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error saving user: ' + error.message });
  }
});



// Login route
router.post('/login', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('data from frontend ', req.body);

  try {
    // Check if the user exists
    const user = await mySchemas.Users.findOne({ name, email });
    
    if (!user) {
      return res.status(400).json({ message: 'User with the provided name and email does not exist' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user: ' + error.message });
  }
});

module.exports = router;


