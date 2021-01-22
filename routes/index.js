// Initialize express 
const express = require('express');
const rates = require('../controllers/RateController');

const router = express.Router();



router.get('/rates', rates.getRates);


module.exports = router;