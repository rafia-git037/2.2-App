// backend/Routes/AuthRouter.js

const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


const router = require('express').Router();

  
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);  // Make sure login is correctly imported

module.exports = router;
