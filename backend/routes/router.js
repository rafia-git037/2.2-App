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
 