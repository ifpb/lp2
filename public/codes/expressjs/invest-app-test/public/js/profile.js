import API from './services/api.js';
import Auth from './lib/auth.js';

const form = document.querySelector('form');

let formMethod;

async function loadProfile() {
  const user = await API.read('/users/me');

  let image;

  if (user.image) {
    image = user.image.path;

    formMethod = 'put';
  } else {
    image = '/imgs/profile/avatar.png';

    formMethod = 'post';
  }

  document.querySelector('#profile-name').innerText = user.name;

  document.querySelector('#user-name').innerText = user.name;

  document.querySelector('#profile-email').innerText = user.email;

  document.querySelector('#profile-image').src = image;

  document.querySelector('#dropdown-avatar').src = image;

  document.querySelector('#userId').value = user.id;
}

form.onsubmit = async (event) => {
  event.preventDefault();

  const image = new FormData(form);

  let newImage;

  if (formMethod === 'post') {
    newImage = await API.create('/users/image', image, true, true);
  } else if (formMethod === 'put') {
    newImage = await API.update('/users/image', image, true);
  }

  document.querySelector('#profile-image').src = newImage.path;

  document.querySelector('#dropdown-avatar').src = newImage.path;

  form.reset();
};

if (Auth.isAuthenticated()) {
  loadProfile();
}
