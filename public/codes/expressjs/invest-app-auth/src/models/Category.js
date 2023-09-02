import prisma from '../database/database.js';

async function create(category) {
  const newCategory = await prisma.category.create({
    data: category,
  });

  return newCategory;
}

async function read(field, value) {
  if (field && value) {
    const categories = await prisma.category.findMany({
      where: {
        [field]: {
          contains: value,
        },
      },
    });

    return categories;
  }

  const categories = await prisma.category.findMany();

  return categories;
}

async function readById(id) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return category;
}

export default { create, read, readById };
