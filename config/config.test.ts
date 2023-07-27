
import * as dotenv from 'dotenv' ; 
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
        migrations:['dist/db/migrations/*.js']
    },
});

//? this functions will return an obj , contain the db config 
