const jwt = require('jsonwebtoken');

const generateToken = async (user) => jwt.sign(
  {
    user,
  }, process.env.SESSION_SECRET,
  {
    expiresIn: '1h',
  },
);

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.SESSION_SECRET);
  } catch (error) {
    return null;
  }
};

const decodeToken = async (token) => jwt.decode(token, null);

module.exports = { generateToken, verifyToken, decodeToken };
