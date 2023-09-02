import Auth from '../lib/auth.js';

const domain = '';

async function create(resource, data, auth = true) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  if (auth) {
    config.headers.Authorization = `Bearer ${Auth.getToken()}`;
  }

  const res = await fetch(url, config);

  if (res.status === 401) {
    Auth.signout();
  }

  return await res.json();
}

async function read(resource) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  const res = await fetch(url, config);

  if (res.status === 401) {
    Auth.signout();
  }

  return await res.json();
}

async function update(resource, data) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  const res = await fetch(url, config);

  if (res.status === 401) {
    Auth.signout();
  }

  return await res.json();
}

async function remove(resource) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  const res = await fetch(url, config);

  if (res.status === 401) {
    Auth.signout();
  }

  return true;
}

export default { create, read, update, remove };
