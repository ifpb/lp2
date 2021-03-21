const bcrypt = require('bcrypt');
const User = require('../models/User');

const create = async (req, res) => {
  res.render('auth/create.njk');
};

async function signin(req, res) {
  const { email, password } = req.body;

  const user = await User.readByEmail(email);

  const match = user
    ? await bcrypt.compare(password, user.password)
    : undefined;

  if (user && match) {
    req.session.isAuth = true;
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.render('auth/create.njk', {
      error: 'Email ou Senha inválido',
      login: { email, password },
    });
  }
}

function signout(req, res) {
  req.session.destroy();
  res.redirect('/signin');
}

module.exports = { create, signin, signout };
