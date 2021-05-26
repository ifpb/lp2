const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function signin(req, res) {
  const { email, password } = req.body;

  const user = await User.readByEmail(email);

  const match = user
    ? await bcrypt.compare(password, user.password)
    : undefined;

  if (user && match) {
    var token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.SECRET,
      {
        expiresIn: 300, // 5min
      }
    );

    console.log(token);

    return res.json({ auth: true, token: token });
  } else {
    return res.status(401).send('Login inválido!');
  }
}

function signout(req, res) {
  return res.send({ auth: false, token: null });
}

module.exports = { signin, signout };
