import {
  create,
  readAll,
  readByName,
  readById,
  update,
  remove,
} from './services/api.js';

let id;

const food = {
  name: 'Salada 1',
  price: 15.5,
};

document.querySelector('#create').addEventListener('click', async () => {
  const createdFood = await create(food);

  console.log(createdFood);

  id = createdFood.id;
});

document.querySelector('#read-all').addEventListener('click', async () => {
  const foods = await readAll();

  console.log(foods);
});

document.querySelector('#read-by-id').addEventListener('click', async () => {
  const foods = await readById(id);

  console.log(foods);
});

document.querySelector('#read-by-name').addEventListener('click', async () => {
  const foods = await readByName('Salada');

  console.log(foods);
});

document.querySelector('#update').addEventListener('click', async () => {
  const updatedFood = await update(id, { ...food, price: 16 });

  console.log(updatedFood);
});

document.querySelector('#delete').addEventListener('click', async () => {
  await remove(id);
});
