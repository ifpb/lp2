const express = require('express');
const multer = require('multer');
const router = express.Router();
const foodsController = require('../controllers/foodsController');
const categoriesController = require('../controllers/categoriesController');
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');
const Auth = require('../middleware/auth');
const multerConfig = require('../config/multer');

router.get('/', (req, res) => res.redirect('/foods/index'));

router.post(
  '/foods',
  Auth.isAuthenticated,
  multer(multerConfig).single('image'),
  foodsController.create
);
router.get('/foods', Auth.isAuthenticated, foodsController.readAll);
router.get('/foods/index', Auth.isAuthenticated, foodsController.index);
router.delete('/foods/:id', Auth.isAuthenticated, foodsController.destroy);
router.put(
  '/foods/:id',
  Auth.isAuthenticated,
  multer(multerConfig).single('image'),
  foodsController.update
);

router.get('/categories', Auth.isAuthenticated, categoriesController.readAll);

router.get('/signin', authController.create);
router.post('/signin', authController.signin);

router.get('/signout', Auth.isAuthenticated, authController.signout);

router.get('/signup', usersController.create);
router.post('/signup', usersController.store);

module.exports = router;