const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Student, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      this.hasOne(models.Teacher, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      this.hasOne(models.Admin, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
    }
  }
  User.init({
    userName: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
    },
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
  });
  return User;
};
