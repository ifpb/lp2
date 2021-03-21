const User = require('../models/User');
const mailController = require('./mailController');

const create = async (req, res) => {
  res.render('users/create.njk');
};

const store = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { name, email, password };

  try {
    await User.createAutoInc(newUser);

    await mailController.sendCreateUser(email);

    res.redirect('/signin');
  } catch (err) {
    if (String(err).includes('UNIQUE constraint failed')) {
      res.render('users/create.njk', {
        error: 'E-mail já cadastrado',
        newUser,
      });
    }
  }
};

module.exports = { create, store };
