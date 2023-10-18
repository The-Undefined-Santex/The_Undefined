const bcrypt = require('bcrypt');
const { teacherProvider } = require('../providers');
const { User, ContactInformation } = require('../models');
const { userTypeMiddleware, passwordMiddleware } = require('../middleware');

const getAllTeachers = async () => {
  try {
    const teachers = await teacherProvider.getAllTeachers();
    return teachers;
  } catch (error) {
    throw new Error('Error en el servicio al obtener los docentes');
  }
};

const getTeachersById = async (id) => {
  try {
    const teachers = await teacherProvider.getTeachersById(id);
    return teachers;
  } catch (error) {
    throw new Error('Error en el servicio al obtener el docente');
  }
};

const createTeacher = async (teacher) => {
  try {
    // Se crea el usuario a partir del mail del docente
    // y la contraseña a partir del DNI
    const pass = await passwordMiddleware.hashPassword((teacher.dni).toString());
    const newUser = await User.create({
      userName: teacher.ContactInformation.email,
      password: pass,
      rol: userTypeMiddleware.CATEGORIA_1,
    });
    // Asigna el id del usuario al docente
    teacher.userId = newUser.id;

    // Se crea el contacto
    const newContactInformation = await ContactInformation.create(teacher.ContactInformation);

    // Asigna el id del contacto al docente
    teacher.contactInformationId = newContactInformation.id;

    // Se crea el docente
    const newTeacher = await teacherProvider.createTeacher(teacher);
    return newTeacher;
  } catch (error) {
    console.log(error);
    throw new Error('Error en el servicio al crear el docente');
  }
};

const updateTeacher = async (id, teacher) => {
  try {
    const updatedTeacher = await teacherProvider.updateTeacher(id, teacher);
    return updatedTeacher;
  } catch (error) {
    throw new Error('Error en el servicio al actualizar el docente');
  }
};

const deleteTeacher = async (id) => {
  try {
    const deletedTeacherCount = await teacherProvider.deleteTeacher(id);
    if (deletedTeacherCount === 0) {
      throw new Error('Profesor no encontrado');
    }
    return deletedTeacherCount;
  } catch (error) {
    throw new Error('Error al eliminar el Profesor');
  }
};

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
