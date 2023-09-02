import API from './services/api.js';
import Auth from './lib/auth.js';

const form = document.querySelector('form');

window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  const user = Object.fromEntries(new FormData(form));

  const { auth, token } = await API.create('/signin', user, false);

  if (auth) {
    Auth.signin(token);
  } else {
    console.log('Error no login');
  }
}
