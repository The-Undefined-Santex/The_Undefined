const { User, Teacher, Student, Admin, sequelize } = require('../models');
const { passwordMiddleware } = require('../middleware');
const { generateToken } = require('../helpers/tokengenerator');

const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw new Error('Error when creating user, Email exist');
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error('Error when found an user');
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error when found the users');
  }
};
const deleteUser = async (id) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    return deletedUser;
  } catch (error) {
    throw new Error('Error when deleting an user');
  }
};

const updateUser = async (id, user) => {
  try {
    const [updatedUser] = await User.update(user, {
      where: {
        id,
      },
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Error when updating user');
  }
};

const validerUser = async (user, pass) => {
  try {
    const userFound = await User.findOne({
      atributes: ['userName', 'password', 'rol'],
      where: {
        userName: user,
      },
    });

    const hashPassword = await passwordMiddleware.comparePassword(
      pass.toString(),
      userFound.password,
    );
    if (userFound != null && hashPassword) {
      const userData = await sequelize.model(userFound.rol).findOne(
        { where: { userId: userFound.id }})

      const token = await generateToken({
        id: userFound.id,
        username: userFound.userName,
        rol: userFound.rol,
      });
      return ({ data: {
        id: userData.id,
        userName: userFound.userName,
        rol: userFound.rol
      }, token });
    }
    return false;
  } catch (err) {
    console.error('Error when validating User', err);
    return false;
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
  validerUser,
};
