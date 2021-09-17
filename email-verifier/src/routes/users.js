const express = require('express');
const { signup, login } = require('../controllers/users');
const {verifyAccount} = require('../controllers/token')
const router = express.Router();

//router.post('/',postData);
router.post('/signup',signup);
router.post('/login', login);
router.get('/confirmation/:email/:token',verifyAccount);

module.exports = router;