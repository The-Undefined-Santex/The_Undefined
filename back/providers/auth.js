const { validerUser } = require('./user');

const logingUser = async (datos) => {
  const { user, pass } = datos;

  const userFound = await validerUser(user, pass);
  if (userFound) {
    return 'Valid User.';
  }
  return 'Invalid User wt.';
};

module.exports = { logingUser };
