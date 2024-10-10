import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { investments } from './data/investments.js';

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const router = express.Router();

router.post('/investments', (req, res) => {
  const investment = req.body;

  const id = uuidv4();

  const newInvestment = { ...investment, id };

  if (investment) {
    investments.push(newInvestment);

    res.json(newInvestment);
  } else {
    throw new HTTPError('Unable to create investment', 400);
  }
});

router.get('/investments', (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredInvestments = investments.filter((investment) =>
      investment.name.includes(name)
    );

    return res.json(filteredInvestments);
  }

  res.json(investments);
});

router.get('/investments/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const index = investments.findIndex((investment) => investment.id === id);

    if (!investments[index]) {
      throw new HTTPError('Investment not found', 400);
    }

    return res.json(investments[index]);
  } else {
    throw new HTTPError('Unable to find investment', 400);
  }
});

router.put('/investments/:id', (req, res) => {
  const investment = req.body;

  const id = req.params.id;

  if (investment && id) {
    const newInvestment = { ...investment, id };

    const index = investments.findIndex((investment) => investment.id === id);

    if (!investments[index]) {
      throw new HTTPError('Investment not found', 400);
    }

    investments[index] = newInvestment;

    res.json(newInvestment);
  } else {
    throw new HTTPError('Unable to update investment', 400);
  }
});

router.delete('/investments/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    const index = investments.findIndex((investment) => investment.id === id);

    investments.splice(index, 1);
  } else {
    throw new HTTPError('Investment not found', 400);
  }

  res.send(204);
});

// 404 handler
router.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
  // console.error(err.stack);
  if (err instanceof HTTPError) {
    res.status(err.code).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Something broke!' });
  }
});

export default router;
