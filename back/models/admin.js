const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ContactInformation, {
        foreignKey: 'contactInformationId',
        target_key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        target_key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Admin.init({
    dni: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    contactInformationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Admin',
    paranoid: true,
  });
  return Admin;
};
