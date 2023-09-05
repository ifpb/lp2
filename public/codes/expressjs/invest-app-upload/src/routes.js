import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import multer from 'multer';
import { z } from 'zod';

import { isAuthenticated } from './middleware/auth.js';
import { validate } from './middleware/validate.js';

import uploadConfig from './config/multer.js';

import SendMail from './services/SendMail.js';

import Category from './models/Category.js';
import Investment from './models/Investment.js';
import User from './models/User.js';
import Image from './models/Image.js';

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

router.post(
  '/investments',
  isAuthenticated,
  validate(
    z.object({
      body: z.object({
        name: z.string(),
        value: z.number(),
        interest: z.string(),
        createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        broker: z.string(),
        categoryId: z.string().uuid(),
      }),
    })
  ),
  async (req, res) => {
    try {
      const investment = req.body;

      if (investment.createdAt) {
        investment.createdAt = new Date(
          investment.createdAt + 'T00:00:00-03:00'
        ).toISOString();
      }

      const userId = req.userId;

      const createdInvestment = await Investment.create({
        ...investment,
        userId,
      });

      return res.json(createdInvestment);
    } catch (error) {
      console.error(error.stack);
      throw new HTTPError('Unable to create investment', 400);
    }
  }
);

router.get(
  '/investments',
  isAuthenticated,
  validate(
    z.object({
      query: z.object({
        name: z.string().optional(),
      }),
    })
  ),
  async (req, res) => {
    try {
      const { name } = req.query;

      const userId = req.userId;

      let investments;

      if (name) {
        investments = await Investment.read({ name, userId });
      } else {
        investments = await Investment.read({ userId });
      }

      return res.json(investments);
    } catch (error) {
      throw new HTTPError('Unable to read investments', 400);
    }
  }
);

router.get(
  '/investments/:id',
  isAuthenticated,
  validate(
    z.object({
      params: z.object({
        id: z.string().uuid(),
      }),
    })
  ),
  async (req, res) => {
    try {
      const id = req.params.id;

      const userId = req.userId;

      const investment = await Investment.readById(id, { userId });

      return res.json(investment);
    } catch (error) {
      throw new HTTPError('Unable to find investment', 400);
    }
  }
);

router.put(
  '/investments/:id',
  isAuthenticated,
  validate(
    z.object({
      params: z.object({
        id: z.string().uuid(),
      }),
      body: z.object({
        name: z.string(),
        value: z.number(),
        interest: z.string(),
        createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        broker: z.string(),
        categoryId: z.string().uuid(),
      }),
    })
  ),
  async (req, res) => {
    try {
      const investment = req.body;

      if (investment.createdAt) {
        investment.createdAt = new Date(
          investment.createdAt + 'T00:00:00-03:00'
        ).toISOString();
      }

      const id = req.params.id;

      const userId = req.userId;

      const updatedInvestment = await Investment.update({
        ...investment,
        id,
        userId,
      });

      return res.json(updatedInvestment);
    } catch (error) {
      console.error(error.stack);
      throw new HTTPError('Unable to update investment', 400);
    }
  }
);

router.delete(
  '/investments/:id',
  isAuthenticated,
  validate(
    z.object({
      params: z.object({
        id: z.string().uuid(),
      }),
    })
  ),
  async (req, res) => {
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
  }
);

router.get(
  '/categories',
  isAuthenticated,
  validate(
    z.object({
      query: z.object({
        name: z.string().optional(),
      }),
    })
  ),
  async (req, res) => {
    try {
      const { name } = req.query;

      let categories;

      if (name) {
        categories = await Category.read({ name });
      } else {
        categories = await Category.read();
      }

      return res.json(categories);
    } catch (error) {
      throw new HTTPError('Unable to read investments', 400);
    }
  }
);

router.post(
  '/users',
  validate(
    z.object({
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
      }),
    })
  ),
  async (req, res) => {
    try {
      const user = req.body;

      delete user.confirmationPassword;

      const newUser = await User.create(user);

      delete newUser.password;

      await SendMail.createNewUser(user.email);

      res.status(201).json(newUser);
    } catch (error) {
      if (
        error.message.includes(
          'Unique constraint failed on the fields: (`email`)'
        )
      ) {
        throw new HTTPError('Email already exists', 400);
      }

      throw new HTTPError('Unable to create user', 400);
    }
  }
);

router.get('/users/me', isAuthenticated, async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.readById(userId);

    delete user.password;

    return res.json(user);
  } catch (error) {
    throw new HTTPError('Unable to find user', 400);
  }
});

router.post(
  '/users/image',
  isAuthenticated,
  multer(uploadConfig).single('image'),
  async (req, res) => {
    try {
      const userId = req.userId;

      if (req.file) {
        const path = `/imgs/profile/${req.file.filename}`;

        const image = await Image.create({ userId, path });

        res.status(201).json(image);
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new HTTPError('Unable to create image', 400);
    }
  }
);

router.put(
  '/users/image',
  isAuthenticated,
  multer(uploadConfig).single('image'),
  async (req, res) => {
    try {
      const userId = req.userId;

      if (req.file) {
        const path = `/imgs/profile/${req.file.filename}`;

        const image = await Image.update({ userId, path });

        res.json(image);
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new HTTPError('Unable to create image', 400);
    }
  }
);

router.post(
  '/signin',
  validate(
    z.object({
      body: z.object({
        email: z.string().email(),
        password: z.string().min(8),
      }),
    })
  ),
  async (req, res) => {
    try {
      const { email, password } = req.body;

      const { id: userId, password: hash } = await User.read({ email });

      const match = await bcrypt.compare(password, hash);

      if (match) {
        const token = jwt.sign(
          { userId },
          process.env.JWT_SECRET,
          { expiresIn: 3600 } // 1h
        );

        return res.json({ auth: true, token });
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      res.status(401).json({ error: 'User not found' });
    }
  }
);

// 404 handler
router.use((req, res, next) => {
  return res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((error, req, res, next) => {
  console.error(error.stack);
  if (error instanceof HTTPError) {
    return res.status(error.code).json({ message: error.message });
  } else {
    return res.status(500).json({ message: 'Something broke!' });
  }
});

export default router;
