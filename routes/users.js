const express = require('express')
const router = express.Router()

//Login page
router.get('/login', (req, res) => res.render('login'));

//Resister page
router.get('/register', (req, res) => res.render('Register'));

module.exports = router;