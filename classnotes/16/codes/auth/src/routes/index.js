const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/SessionController');
const Auth = require('../middleware/auth');

router.get('/', (req, res) => res.redirect('signin'));
router.get('/session', (req, res) => res.json(req.session));
router.get('/signin', SessionController.index);
router.post('/signin', SessionController.signin);
router.get('/signout', SessionController.signout);
router.get('/home', Auth.isAuthenticated, (req, res) => res.render('home'));

module.exports = router;
