import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { isAuthenticated } from './middleware/auth.js';

import Category from './models/Category.js';
import Investment from './models/Investment.js';
import User from './models/User.js';

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/signin.html');
});

router.post('/investments', isAuthenticated, async (req, res) => {
  try {
    const investment = req.body;

    const createdInvestment = await Investment.create(investment);

    return res.json(createdInvestment);
  } catch (error) {
    throw new HTTPError('Unable to create investment', 400);
  }
});

router.get('/investments', isAuthenticated, async (req, res) => {
  try {
    const { name } = req.query;

    let investments;

    if (name) {
      investments = await Investment.read('name', name);
    } else {
      investments = await Investment.read();
    }

    return res.json(investments);
  } catch (error) {
    throw new HTTPError('Unable to read investments', 400);
  }
});

router.get('/investments/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id;

    const investment = await Investment.readById(id);

    return res.json(investment);
  } catch (error) {
    throw new HTTPError('Unable to find investment', 400);
  }
});

router.put('/investments/:id', isAuthenticated, async (req, res) => {
  try {
    const investment = req.body;

    const id = req.params.id;

    const updatedInvestment = await Investment.update({ ...investment, id });

    return res.json(updatedInvestment);
  } catch (error) {
    throw new HTTPError('Unable to update investment', 400);
  }
});

router.delete('/investments/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id;

    if (await Investment.remove(id)) {
      return res.sendStatus(204);
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new HTTPError('Unable to remove investment', 400);
  }
});

router.get('/categories', isAuthenticated, async (req, res) => {
  try {
    const { name } = req.query;

    let categories;

    if (name) {
      categories = await Category.read('name', name);
    } else {
      categories = await Category.read();
    }

    return res.json(categories);
  } catch (error) {
    throw new HTTPError('Unable to read investments', 400);
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = req.body;

    delete user.confirmationPassword;

    const newUser = await User.create(user);

    delete newUser.password;

    res.status(201).json(newUser);
  } catch (error) {
    throw new HTTPError('Unable to create user', 400);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const [{ id: userId, password: hash }] = await User.read('email', email);

    const match = await bcrypt.compare(password, hash);

    if (match) {
      const token = jwt.sign(
        { userId },
        process.env.SECRET,
        { expiresIn: 3600 } // 1h
      );

      res.json({ auth: true, token });
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    res.status(401).json({ error: 'User not found' });
  }
});

// 404 handler
router.use((req, res, next) => {
  return res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
  // console.error(err.stack);
  if (err instanceof HTTPError) {
    return res.status(err.code).json({ message: err.message });
  } else {
    return res.status(500).json({ message: 'Something broke!' });
  }
});

export default router;
