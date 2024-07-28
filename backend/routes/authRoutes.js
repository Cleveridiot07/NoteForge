const express = require('express');
const { signup, login, logout } = require('../controllers/authController');
const { validateSignup, validateLogin, validate } = require('../utils/validators');

const router = express.Router();

router.post('/signup', validateSignup, validate, signup);
router.post('/login', validateLogin, validate, login);
router.post('/logout', logout);

module.exports = router;
