const { Teacher, ContactInformation, User } = require('../models');

const getAllTeachers = async () => {
  try {
    const teachers = await Teacher.findAll(
      {
        attributes: ['id', 'dni', 'firstName', 'lastName', 'birth_date', 'contactInformationId'],
        include: [
          {
            model: ContactInformation,
            attributes: ['id', 'phone_number',
              'country',
              'state',
              'address',
              'email'],
          },
        ],
      },
    );
    return teachers;
  } catch (error) {
    console.log(error);
    // throw new Error('Error al obtener los docentes');
    throw new Error('Error al obtener los docentes');
  }
};

const getTeachersById = async (id) => {
  try {
    const teacher = await Teacher.findByPk(id, {
      attributes: ['id', 'dni', 'firstName', 'lastName', 'birth_date', 'contactInformationId'],
      include: [
        {
          model: ContactInformation,
          attributes: ['id', 'phone_number',
            'country',
            'state',
            'address',
            'email'],
        },
      ],
    });
    return teacher;
  } catch (error) {
    throw new Error('Error al obtener el docente');
  }
};

const createTeacher = async (teacher) => {
  try {
    const createdTeacher = await Teacher.create(teacher);
    return createdTeacher;
  } catch (error) {
    throw new Error('Error al crear profesor');
  }
};

const updateTeacher = async (id, teacher) => {
  try {
    const [updatedTeacherCount] = await Teacher.update(teacher, {
      where: {
        id,
      },
    });

    // Luego, si es necesario actualizamos la información de contacto
    if (teacher.ContactInformation) {
      await ContactInformation.update(teacher.ContactInformation, {
        where: {
          id: teacher.contactInformationId,
        },
      });
    }
    // Y el usuario
    if (teacher.User) {
      await User.update(teacher.User, {
        where: {
          id: teacher.userId,
        },
      });
    }
    if (teacher.Cohorts) {
      // Si deseamos modificar multiples cohorts, podemos hacerlo de esta manera:
      // Removemos la asociación de los cohorts existentes con el estudiante
      // Generamos una nueva
      const teacherInstance = await Teacher.findByPk(id);

      // Reemplazamos con los cohort nuevos
      await teacherInstance.setCohorts(teacher.Cohorts.map((cohort) => cohort.id));
    }

    return updatedTeacherCount;
  } catch (error) {
    console.log(error);
    throw new Error('Error al actualizar profesor');
  }
};

const deleteTeacher = async (id) => {
  try {
    const deletedTeacherCount = await Teacher.destroy({
      where: {
        id,
      },
    });
    return deletedTeacherCount;
  } catch (error) {
    throw new Error('Error al eliminar al docente');
  }
};

module.exports = {
  getAllTeachers,
  getTeachersById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
