const User = require('../models/User');

const store = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    await User.createAutoInc(newUser);

    res.json({ message: 'user created' });
  } catch (error) {
    let message = error.message;

    if (error.message.includes('UNIQUE')) {
      message = 'email already registered';
    }

    console.error(error.message);

    res.status(500).json({ message });
  }
};

module.exports = { store };
