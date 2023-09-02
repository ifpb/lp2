import API from './services/api.js';
import Auth from './lib/auth.js';

const form = document.querySelector('form');

window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    const user = Object.fromEntries(new FormData(form));

    const { auth, token } = await API.create('/signin', user, false);

    if (auth) {
      Auth.signin(token);
    } else {
      showToast('Error no login');
    }
  } else {
    form.classList.add('was-validated');
  }
}

function showToast(message) {
  document.querySelector('.toast-header strong').innerText = message;
  const toast = new bootstrap.Toast(document.querySelector('#liveToast'));
  toast.show();
}
