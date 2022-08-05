import Sequelize from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/test_task');
export default sequelize