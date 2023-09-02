import { v4 as uuidv4 } from 'uuid';
import { investments } from '../database/data.js';

function create({ name, value }) {
  const id = uuidv4();

  const investment = { name, value, id };

  if (name && value) {
    investments.push(investment);

    return investment;
  } else {
    throw new Error('Unable to create investment');
  }
}

function read(field, value) {
  if (field && value) {
    const filteredInvestments = investments.filter((investment) =>
      investment[field].includes(value)
    );

    return filteredInvestments;
  }

  return investments;
}

function readById(id) {
  if (id) {
    const index = investments.findIndex((investment) => investment.id === id);

    if (!investments[index]) {
      throw new Error('Investment not found');
    }

    return investments[index];
  } else {
    throw new Error('Unable to find investment');
  }
}

function update({ id, name, value }) {
  if (name && value && id) {
    const newInvestment = { name, value, id };

    const index = investments.findIndex((investment) => investment.id === id);

    if (!investments[index]) {
      throw new Error('Investment not found');
    }

    investments[index] = newInvestment;

    return newInvestment;
  } else {
    throw new Error('Unable to update investment');
  }
}

function remove(id) {
  if (id) {
    const index = investments.findIndex((investment) => investment.id === id);

    investments.splice(index, 1);

    return true;
  } else {
    throw new Error('Investment not found');
  }
}

export default { create, read, readById, update, remove };
