import { Sequelize, DataTypes } from 'sequelize'
export const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/test_task');

export const Feedback = sequelize.define('feedback', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});


