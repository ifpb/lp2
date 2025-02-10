import prisma from '../database/database.js';

async function create(category) {
  const newCategory = await prisma.category.create({
    data: category,
  });

  return newCategory;
}

async function read(where) {
  const categories = await prisma.category.findMany({
    where,
  });

  if (categories.length === 1 && where) {
    return categories[0];
  }

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
