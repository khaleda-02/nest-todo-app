import * as dotenv from 'dotenv' ; 
import { Todo } from '../src/todos/todo.model';
import { User } from '../src/user/user.model';
dotenv.config()

export const config = ()=> ({
    database: {
        // type: process.env.DB_TYPE ,
        // host: process.env.DB_HOST ,
        // port: parseInt(process.env.DB_PORT),
        // username: process.env.DB_USERNAME ,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_NAME ,
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'todo',
        useNewUrlParser: true,
        debug: true,
        logging: true,
        entities: ['dist/**/*.model.js'],
        migrations:['/db/migrations/*.js']
       },
});
