import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

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


