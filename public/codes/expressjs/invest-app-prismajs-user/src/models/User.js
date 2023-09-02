import bcrypt from 'bcrypt';
import prisma from '../database/database.js';

const saltRounds = Number(process.env.SALT);

async function create({ name, email, password }) {
  if (name && email && password) {
    const hash = await bcrypt.hash(password, saltRounds);

    password = hash;

    const createdUser = await prisma.user.create({
      data: { name, email, password },
    });

    return createdUser;
  } else {
    throw new Error('Unable to create user');
  }
}

async function read(field, value) {
  if (field && value) {
    const users = await prisma.user.findMany({
      where: {
        [field]: {
          contains: value,
        },
      },
    });

    return users;
  }

  const users = await prisma.user.findMany({
    include: {
      category: true,
    },
  });

  return users;
}

async function readById(id) {
  if (id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  } else {
    throw new Error('Unable to find user');
  }
}

async function update({ id, name, email, password }) {
  if (name && email && password && id) {
    const hash = await bcrypt.hash(password, saltRounds);

    password = hash;

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: { name, email, password },
    });

    if (updatedUser) {
      return updatedUser;
    } else {
      throw new Error('User not found');
    }
  } else {
    throw new Error('Unable to update user');
  }
}

async function remove(id) {
  if (id) {
    const removedUser = await prisma.user.delete({
      where: {
        id,
      },
    });

    if (removedUser) {
      return true;
    } else {
      throw new Error('User not found');
    }
  } else {
    throw new Error('Unable to remove user');
  }
}

export default { create, read, readById, update, remove };
