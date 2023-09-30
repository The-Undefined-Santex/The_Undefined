const bcrypt = require('bcrypt');
const { StudentProvider } = require('../providers');
const { User, ContactInformation } = require('../models');

const getAllStudents = async () => {
  try {
    const students = await StudentProvider.getAllStudents();
    return students;
  } catch (error) {
    throw new Error('Error al obtener los estudiantes');
  }
};

const getStudentById = async (id) => {
  try {
    const student = await StudentProvider.getStudentById(id);
    return student;
  } catch (error) {
    throw new Error('Error al obtener el estudiante');
  }
};

const createStudent = async (student) => {
  try {
    // Crea el usuario con el mail del estudiante
    // y la contraseña es el documento de identidad del estudiante.
    // Esto es para que el usuario pueda iniciar sesión con el documento de identidad.
    const hashedPassword = await bcrypt.hash(student.dni.toString(), 10);
    const newUser = await User.create({
      userName: student.ContactInformation.email,
      password: hashedPassword,
    });

    // Asigna el id del usuario al estudiante
    student.userId = newUser.id;

    const newContactInformation = await ContactInformation.create(student.ContactInformation);

    // Asigna el id del contacto al estudiante
    student.contactInformationId = newContactInformation.id;

    // Llama al proveedor para crear el estudiante
    const newStudent = await StudentProvider.createStudent(student);
    return newStudent;
  } catch (error) {
    console.error('Error al crear el estudiante:', error);
    throw new Error('Error al crear el estudiante');
  }
};

const assignCohortToStudent = async (studentId, cohortId) => {
  try {
    const updatedStudentCount = await StudentProvider.assignCohortToStudent(studentId, cohortId);
    if (updatedStudentCount === 0) {
      throw new Error('Estudiante no encontrado');
    }
    return updatedStudentCount;
  } catch (error) {
    throw new Error('Error al asignar el cohorte al estudiante');
  }
};

const updateStudent = async (id, studentData) => {
  try {
    const updatedStudentCount = await StudentProvider.updateStudent(id, studentData);
    if (updatedStudentCount === 0) {
      throw new Error('Estudiante no encontrado');
    }
    return updatedStudentCount;
  } catch (error) {
    throw new Error('Error al actualizar el estudiante');
  }
};

const deleteStudent = async (id) => {
  try {
    const deletedStudentCount = await StudentProvider.deleteStudent(id);
    if (deletedStudentCount === 0) {
      throw new Error('Estudiante no encontrado');
    }
    return deletedStudentCount;
  } catch (error) {
    throw new Error('Error al eliminar el estudiante');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  assignCohortToStudent,
};
