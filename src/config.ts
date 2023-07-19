// import * as dotenv from 'dotenv';
// dotenv.config();

// export const databaseConfig = {
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };
import { SequelizeOptions } from 'sequelize-typescript';
import { User } from './user/user.model';
import { Todo } from './todos/todo.model';

const sequelizeConfig: SequelizeOptions = {
  dialect: 'postgres', // Replace with your database dialect
  host: 'localhost',   // Replace with your database host
  port: 5432,          // Replace with your database port
  username: 'db_user', // Replace with your database username
  password: 'db_pass', // Replace with your database password
  database: 'db_name', // Replace with your database name
  models: [User, Todo], // Add your Sequelize models here
};

export default sequelizeConfig;