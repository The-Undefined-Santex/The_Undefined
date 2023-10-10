const CourseController = require('./course');
const userController = require('./user');
const courseDetailController = require('./courseDetail');
const teacherController = require('./teacher');
const studentController = require('./student');
const cohortController = require('./cohort');
const adminController = require('./admin');
const authController = require('./auth');

module.exports = {
  CourseController,
  teacherController,
  userController,
  courseDetailController,
  studentController,
  cohortController,
  adminController,
  authController,
};
