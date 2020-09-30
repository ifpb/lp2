const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');

router.get('/index', foodsController.index);
router.post('/', foodsController.create);
router.get('/', foodsController.read);
router.get('/:id', foodsController.readById);
router.put('/:id', foodsController.update);
router.delete('/:id', foodsController.remove);

module.exports = router;
