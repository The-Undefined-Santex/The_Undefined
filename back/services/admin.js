const { adminProvider } = require('../providers');
const { userTypeMiddleware, passwordMiddleware } = require('../middleware');
const { User, ContactInformation } = require('../models');

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
    // Crea el usuario con el mail del estudiante
    // y la contraseña es el documento de identidad del estudiante.
    // Esto es para que el usuario pueda iniciar sesión con el documento de identidad.

    const pass = await passwordMiddleware.hashPassword((admin.dni).toString());
    const newUser = await User.create({
      userName: admin.ContactInformation.email,
      password: pass,
      rol: userTypeMiddleware.CATEGORIA_0,
    });

    // Asigna el id del usuario al estudiante
    admin.userId = newUser.id;

    const newContactInformation = await ContactInformation.create(admin.ContactInformation);

    // Asigna el id del contacto al estudiante
    admin.contactInformationId = newContactInformation.id;

    // Llama al proveedor para crear el estudiante
    const newAdmin = await adminProvider.createAdmin(admin);
    return newAdmin;
  } catch (error) {
    console.error('Error al crear el Administrador:', error);
    throw new Error('Error al crear el Administrador');
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
