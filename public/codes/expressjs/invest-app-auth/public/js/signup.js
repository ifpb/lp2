import API from './services/api.js';

const form = document.querySelector('form');

window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  const user = Object.fromEntries(new FormData(form));

  const { email } = await API.create('/users', user, false);

  if (email) {
    location.href = '/signin.html';
  } else {
    console.log('Error no cadastro');
  }
}
