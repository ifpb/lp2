import prisma from '../database/database.js';

async function create({ userId, path }) {
  const newImage = await prisma.image.create({
    data: {
      path,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return newImage;
}

async function update({ userId, path }) {
  const newImage = await prisma.image.update({
    where: {
      userId,
    },
    data: {
      path,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return newImage;
}

export default { create, update };
