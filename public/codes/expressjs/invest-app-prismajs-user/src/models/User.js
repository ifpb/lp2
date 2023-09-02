import bcrypt from 'bcrypt';
import prisma from '../database/database.js';

const saltRounds = Number(process.env.BCRYPT_SALT);

async function create({ name, email, password }) {
  if (name && email && password) {
    const hash = await bcrypt.hash(password, saltRounds);

    const createdUser = await prisma.user.create({
      data: { name, email, password: hash },
    });

    return createdUser;
  } else {
    throw new Error('Unable to create user');
  }
}

async function read(where) {
  const users = await prisma.user.findMany({
    where,
  });

  if (users.length === 1 && where) {
    return users[0];
  }

  return users;
}

async function readById(id) {
  if (id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } else {
    throw new Error('Unable to find user');
  }
}

async function update({ id, name, email, password }) {
  if (name && email && password && id) {
    const hash = await bcrypt.hash(password, saltRounds);

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: { name, email, password: hash },
    });

    return updatedUser;
  } else {
    throw new Error('Unable to update user');
  }
}

async function remove(id) {
  if (id) {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    return true;
  } else {
    throw new Error('Unable to remove user');
  }
}

export default { create, read, readById, update, remove };
