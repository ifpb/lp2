const domain = '';

async function signin(data) {
  const res = await fetch(`${domain}/signin`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return res;
}

async function signup(data) {
  const res = await fetch(`${domain}/signup`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return res;
}

async function create(resource, data) {
  return requestWithToken('post', resource, data);
}

async function read(resource) {
  return requestWithToken('get', resource);
}

async function update(resource, data) {
  return requestWithToken('put', resource, data);
}

async function destroy(resource) {
  return requestWithToken('delete', resource);
}

async function requestWithToken(method, resource, data = null) {
  const token = localStorage.getItem('@FoodsApp:token');

  try {
    const header = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (data) {
      header.body = JSON.stringify(data);
      header.headers['Content-Type'] = 'application/json; charset=UTF-8';
    }

    const res = await fetch(`${domain}${resource}`, header);

    if (method !== 'delete') {
      if (!res.ok) throw new Error(res.statusText);

      const json = await res.json();

      if (json.auth && json.auth === false) throw new Error(json.message);

      return json;
    }
  } catch (error) {
    location.href = '/signin.html';
  }
}

export default { signin, signup, create, read, update, destroy };
