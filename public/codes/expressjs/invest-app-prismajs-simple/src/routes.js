import express from 'express';
import Investment from './models/Investment.js';

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const router = express.Router();

router.post('/investments', async (req, res) => {
  try {
    const investment = req.body;

    const createdInvestment = await Investment.create(investment);

    return res.json(createdInvestment);
  } catch (error) {
    throw new HTTPError('Unable to create investment', 400);
  }
});

router.get('/investments', async (req, res) => {
  try {
    const { name } = req.query;

    let investments;

    if (name) {
      investments = await Investment.read({ name });
    } else {
      investments = await Investment.read();
    }

    return res.json(investments);
  } catch (error) {
    throw new HTTPError('Unable to read investments', 400);
  }
});

router.get('/investments/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const investment = await Investment.readById(id);

    return res.json(investment);
  } catch (error) {
    throw new HTTPError('Unable to find investment', 400);
  }
});

router.put('/investments/:id', async (req, res) => {
  try {
    const investment = req.body;

    const id = req.params.id;

    const updatedInvestment = await Investment.update({ ...investment, id });

    return res.json(updatedInvestment);
  } catch (error) {
    throw new HTTPError('Unable to update investment', 400);
  }
});

router.delete('/investments/:id', async (req, res) => {
  const id = req.params.id;

  if (await Investment.remove(id)) {
    return res.sendStatus(204);
  } else {
    throw new HTTPError('Unable to remove investment', 400);
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
