
import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config()

//todo spcefiy the database for each NODE_ENV in .env and here .  

export const databaseConfig : IDatabaseConfig = {
  development: {
    dialect: process.env.DB_DIALECT ,
    host: process.env.DB_HOST ,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ,
  },
  test: {
    dialect: process.env.DB_DIALECT ,
    host: process.env.DB_HOST ,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ,
  },
  production:{
    dialect: process.env.DB_DIALECT ,
    host: process.env.DB_HOST ,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ,
  }
}
