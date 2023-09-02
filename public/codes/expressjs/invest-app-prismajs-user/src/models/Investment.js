import prisma from '../database/database.js';

async function create({ name, value, categoryId, userId }) {
  if (name && value && categoryId && userId) {
    const createdInvestment = await prisma.investment.create({
      data: { name, value, categoryId, userId },
      include: {
        category: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return createdInvestment;
  } else {
    throw new Error('Unable to create investment');
  }
}

async function read(where) {
  if (where?.name) {
    where.name = {
      contains: where.name,
    };
  }

  const investments = await prisma.investment.findMany({
    where,
    include: {
      category: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  if (investments.length === 1 && where) {
    return investments[0];
  }

  return investments;
}

async function readById(id) {
  if (id) {
    const investment = await prisma.investment.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return investment;
  } else {
    throw new Error('Unable to find investment');
  }
}

async function update({ id, name, value, categoryId, userId }) {
  if (name && value && id) {
    const updatedInvestment = await prisma.investment.update({
      where: {
        id,
      },
      data: { name, value, categoryId, userId },
      include: {
        category: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return updatedInvestment;
  } else {
    throw new Error('Unable to update investment');
  }
}

async function remove(id) {
  if (id) {
    await prisma.investment.delete({
      where: {
        id,
      },
    });

    return true;
  } else {
    throw new Error('Unable to remove investment');
  }
}

export default { create, read, readById, update, remove };
