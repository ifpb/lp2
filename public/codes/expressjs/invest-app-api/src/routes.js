import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { investments } from './data/investments.js';

class HttpError extends Error {
  constructor(message, code = 400) {
    super(message);
    this.code = code;
  }
}

const router = express.Router();

router.post('/investments', (req, res) => {
  const { name, value } = req.body;

  if (!name || !value) {
    throw new HttpError('Error when passing parameters');
  }

  const id = uuidv4();

  const newInvestment = { name, value, id };

  investments.push(newInvestment);

  return res.status(201).json(newInvestment);
});

router.get('/investments', (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredInvestments = investments.filter((investment) =>
      investment.name.includes(name)
    );

    return res.json(filteredInvestments);
  }

  return res.json(investments);
});

router.get('/investments/:id', (req, res) => {
  const id = req.params.id;

  const index = investments.findIndex((investment) => investment.id === id);

  if (!investments[index]) {
    throw new HttpError('Investment not found', 404);
  }

  return res.json(investments[index]);
});

router.put('/investments/:id', (req, res) => {
  const { name, value } = req.body;

  const { id } = req.params;

  if (!name || !value) {
    throw new HttpError('Error when passing parameters');
  }

  const newInvestment = { name, value, id };

  const index = investments.findIndex((investment) => investment.id === id);

  if (!investments[index]) {
    throw new HttpError('Investment not found', 404);
  }

  investments[index] = newInvestment;

  return res.json(newInvestment);
});

router.delete('/investments/:id', (req, res) => {
  const { id } = req.params;

  const index = investments.findIndex((investment) => investment.id === id);

  if (!investments[index]) {
    throw new HttpError('Investment not found', 404);
  }

  investments.splice(index, 1);

  return res.sendStatus(204);
});

// 404 handler
router.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
  // console.error(err.stack);

  if (err instanceof HttpError) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Something broke!' });
});

export default router;
