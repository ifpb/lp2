const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');

router.get('/index', foodsController.index);

module.exports = router;
