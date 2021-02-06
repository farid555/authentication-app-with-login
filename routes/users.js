const express = require('express')
const router = express.Router()

//Login page
router.get('/', (req, res) => res.send('Login'));

//Resister page
router.get('/users', (req, res) => res.send('Login'));

module.exports = router;