import API from './services/api.js';

const form = document.querySelector('form');

window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    const user = Object.fromEntries(new FormData(form));

    const { email, message } = await API.create('/users', user, false);

    if (email) {
      location.href = '/signin.html';
    } else if (message === 'Email already exists') {
      const error = 'Email já cadastrado';

      const emailError = document.querySelector('#email + .invalid-feedback');

      emailError.textContent = error;

      form.email.setCustomValidity(error);

      form.email.classList.add('is-invalid');
    } else {
      showToast('Error no cadastro');
    }
  } else {
    form.classList.add('was-validated');
  }
}

form.email.oninput = () => {
  form.email.classList.remove('is-invalid');

  const confirmationPasswordError = document.querySelector(
    '#email + .invalid-feedback'
  );

  confirmationPasswordError.textContent = 'Informe o email do usuário.';
};

form.confirmationPassword.oninput = () => {
  const password = form.password.value;

  const confirmationPassword = form.confirmationPassword.value;

  if (password !== confirmationPassword) {
    const error = 'As senhas não são iguais.';

    const confirmationPasswordError = document.querySelector(
      '#confirmationPassword + .invalid-feedback'
    );

    confirmationPasswordError.textContent = error;

    form.confirmationPassword.setCustomValidity(error);
  } else {
    form.confirmationPassword.setCustomValidity('');
  }
};

function showToast(message) {
  document.querySelector('.toast-header strong').innerText = message;
  const toast = new bootstrap.Toast(document.querySelector('#liveToast'));
  toast.show();
}
