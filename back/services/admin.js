const { adminProvider } = require('../providers');

const getAllAdmins = async () => {
  try {
    const admins = await adminProvider.getAllAdmins();
    return admins;
  } catch (error) {
    throw new Error('Error en el servicio al obtener los Administradores');
  }
};

const getAdminsById = async (id) => {
  try {
    const admins = await adminProvider.getAdminsById(id);
    if (!admins) {
      throw new Error('Admin no encontrado');
    }
    return admins;
  } catch (error) {
    throw new Error('Error en el servicio al obtener el Admin');
  }
};

const createAdmin = async (admin) => {
  try {
    const newAdmin = await adminProvider.createAdmin(admin);
    return newAdmin;
  } catch (error) {
    throw new Error('Error en el servicio al crear el Admin');
  }
};

const updateAdmin = async (id, admin) => {
  try {
    const updatedAdminCount = await adminProvider.updateAdmin(id, admin);
    if (updatedAdminCount === 0) {
      throw new Error('Admin no encontrado');
    }
    return updatedAdminCount;
  } catch (error) {
    throw new Error('Error en el servicio al actualizar el Admin');
  }
};

const deleteAdmin = async (id) => {
  try {
    const deletedAdminCount = await adminProvider.deleteAdmin(id);
    if (deletedAdminCount === 0) {
      throw new Error('Admin no encontrado');
    }
    return deletedAdminCount;
  } catch (error) {
    throw new Error('Error al eliminar el Admin');
  }
};

module.exports = {
  getAllAdmins,
  getAdminsById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
