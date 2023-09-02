import prisma from '../database/database.js';

async function create({ name, value }) {
  if (name && value) {
    const createdInvestment = await prisma.investment.create({
      data: { name, value },
    });

    return createdInvestment;
  } else {
    throw new Error('Unable to create investment');
  }
}

async function read(field, value) {
  if (field && value) {
    const investments = await prisma.investment.findMany({
      where: {
        [field]: value,
      },
    });

    return investments;
  }

  const investments = await prisma.investment.findMany();

  return investments;
}

async function readById(id) {
  if (id) {
    const investment = await prisma.investment.findUnique({
      where: {
        id,
      },
    });

    if (investment) {
      return investment;
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Unable to find investment');
  }
}

async function update({ id, name, value }) {
  if (name && value && id) {
    const updatedInvestment = await prisma.investment.update({
      where: {
        id,
      },
      data: { name, value },
    });

    if (updatedInvestment) {
      return updatedInvestment;
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Unable to update investment');
  }
}

async function remove(id) {
  if (id) {
    const removedInvestment = await prisma.investment.delete({
      where: {
        id,
      },
    });

    if (removedInvestment) {
      return true;
    } else {
      throw new Error('Investment not found');
    }
  } else {
    throw new Error('Unable to remove investment');
  }
}

export default { create, read, readById, update, remove };
