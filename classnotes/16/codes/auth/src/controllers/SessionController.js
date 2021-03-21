const bcrypt = require('bcrypt');

const users = [
  {
    id: 1,
    username: 'admin',
    passwordHash:
      '$2b$12$IiKkSpSS9cM5zRJUzVVybePolDYU.VKP8a4xt91MTa.g0lCzLzgJ6', // await bcrypt.hash('admin', 12)
  },
];

function index(req, res) {
  const error = req.session.flash ? req.session.flash.error : '';
  res.render('signin', { error });
}

async function signin(req, res) {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  const match = user
    ? await bcrypt.compare(password, user.passwordHash)
    : undefined;

  if (user && match) {
    req.session.userId = user.id;
    req.session.flash = {};
    res.redirect('/home');
  } else {
    req.session.flash = { error: 'Usuário ou senha inválida' };
    res.redirect('/signin');
  }
}

function signout(req, res) {
  req.session.destroy();
  res.redirect('/signin');
}

module.exports = { index, signin, signout };
