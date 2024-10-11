import Auth from '../lib/auth.js';

const domain = '/api';

async function create(resource, data, auth = true, formData = false) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'POST',
    body: formData ? data : JSON.stringify(data),
    headers: {},
  };

  if (!formData) {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }

  if (auth) {
    config.headers.Authorization = `Bearer ${Auth.getToken()}`;
  }

  const res = await fetch(url, config);

  if (auth && res.status === 401) {
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

async function update(resource, data, formData = false) {
  const url = `${domain}${resource}`;

  const config = {
    method: 'PUT',
    body: formData ? data : JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  };

  if (!formData) {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }

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
