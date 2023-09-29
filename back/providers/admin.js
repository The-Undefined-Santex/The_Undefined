const { Admin } = require('../models');
const { ContactInformation } = require('../models');
const { User } = require('../models');

const getAllAdmins = async () => {
  try {
    const admins = await Admin.findAll({
      include: [
        {
          model: ContactInformation,
          attributes: ['phone_number', 'country', 'state', 'address', 'email'],
        },
        {
          model: User,
          attributes: ['UserName'],
        },
      ],
    });
    return admins;
  } catch (error) {
    throw new Error('Error al obtener los Administradores');
  }
};

const getAdminsById = async (id) => {
  try {
    const admin = await Admin.findByPk(id);
    return admin;
  } catch (error) {
    throw new Error('Error al obtener el Admin');
  }
};

const createAdmin = async (admin) => {
  try {
    const createdAdmin = await Admin.create(admin);
    return createdAdmin;
  } catch (error) {
    throw new Error('Error al crear Admin');
  }
};

const updateAdmin = async (id, admin) => {
  try {
    const [updatedAdminCount] = await Admin.update(admin, {
      where: {
        id,
      },
    });
    return updatedAdminCount;
  } catch (error) {
    throw new Error('Error al actualizar el Admin');
  }
};

const deleteAdmin = async (id) => {
  try {
    const deletedAdminCount = await Admin.destroy({
      where: {
        id,
      },
    });
    return deletedAdminCount;
  } catch (error) {
    throw new Error('Error al eliminar al Admin');
  }
};

module.exports = {
  getAllAdmins,
  getAdminsById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
