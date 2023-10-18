const { authProvider } = require('../providers');

const logingUser = async (user, pass) => {
  try {
    const token = await authProvider.logingUser({ user, pass });
    return token;
  } catch (err) {
    console.error('Error en la autentificiación ahora.');
    throw err;
  }
};

module.exports = { logingUser };
