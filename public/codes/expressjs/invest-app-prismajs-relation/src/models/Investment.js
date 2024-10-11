import prisma from '../database/database.js';

async function create({
  name,
  value,
  interest,
  createdAt,
  broker,
  categoryId,
}) {
  if (name && value && interest && createdAt && broker && categoryId) {
    const createdInvestment = await prisma.investment.create({
      data: {
        name,
        value,
        interest,
        createdAt,
        category: {
          connect: {
            id: categoryId,
          },
        },
        broker: {
          connectOrCreate: {
            where: {
              name: broker,
            },
            create: {
              name: broker,
            },
          },
        },
      },
      include: {
        category: true,
        broker: true,
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
      broker: true,
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
        broker: true,
      },
    });

    return investment;
  } else {
    throw new Error('Unable to find investment');
  }
}

async function update({
  id,
  name,
  value,
  interest,
  createdAt,
  broker,
  categoryId,
}) {
  if (name && value && id && categoryId && broker && interest && createdAt) {
    const updatedInvestment = await prisma.investment.update({
      where: {
        id,
      },
      data: {
        name,
        value,
        interest,
        createdAt,
        category: {
          connect: {
            id: categoryId,
          },
        },
        broker: {
          connectOrCreate: {
            where: {
              name: broker,
            },
            create: {
              name: broker,
            },
          },
        },
      },
      include: {
        category: true,
        broker: true,
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
