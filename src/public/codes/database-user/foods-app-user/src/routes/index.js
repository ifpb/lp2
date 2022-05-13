const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');
const categoriesController = require('../controllers/categoriesController');
const usersController = require('../controllers/usersController');

router.get('/', (req, res) => res.redirect('/foods/index'));

router.post('/foods', foodsController.create);
router.get('/foods', foodsController.readAll);
router.get('/foods/index', foodsController.index);
router.delete('/foods/:id', foodsController.destroy);
router.put('/foods/:id', foodsController.update);

router.get('/categories', categoriesController.readAll);

router.get('/signup', usersController.create);
router.post('/signup', usersController.store);

module.exports = router;
