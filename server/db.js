import Sequelize from 'sequelize'
import 'dotenv/config'
console.log(process.env.DB_NAME)

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`);
export default sequelize