const { validerUser } = require('./user');

const logingUser = async (datos) => {
  const { user, pass } = datos;

  const token = await validerUser(user, pass);
  if (token) {
    // return 'Valid User.';
    return token;
  }
  return 'Invalid User.';
};

module.exports = { logingUser };
