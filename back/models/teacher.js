const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ContactInformation, {
        foreignKey: 'id_contact_information',
        targetKey: 'id',
      });
      this.belongsTo(models.User, {
        foreignKey: 'id_user',
        targetKey: 'id',
      });
      this.hasMany(models.Cohort, { foreignKey: 'teacherId' });
    }
  }
  Teacher.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    document_number: DataTypes.INTEGER,
    id_contact_information: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    specialty: DataTypes.STRING,
    birthDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};
