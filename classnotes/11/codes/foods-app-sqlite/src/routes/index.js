const express = require('express');
const router = express.Router();
const foods = require('./foods');

router.get('/', (req, res) => res.redirect('/foods/index'));
router.use('/foods', foods);

module.exports = router;
