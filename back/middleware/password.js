const bcrypt = require('bcrypt');

const hashPassword = async (plainPassword) => {
  const hash = await bcrypt.hash(plainPassword, 10);
  return hash;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};

module.exports = { hashPassword, comparePassword };
