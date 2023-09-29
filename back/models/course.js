const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.courseDetail,
        { foreignKey: 'courseId' },
        {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          hooks: true,
        });

      models.courseDetail.belongsTo(Course, {
        foreignKey: 'courseId',
        target_key: 'id',
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    due: DataTypes.INTEGER,
    has_surcharge: DataTypes.BOOLEAN,
    surcharge_percentage: DataTypes.INTEGER,
    modality: DataTypes.STRING,
    schedules: DataTypes.STRING,
    banner: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course',
    paranoid: true,
  });
  return Course;
};
