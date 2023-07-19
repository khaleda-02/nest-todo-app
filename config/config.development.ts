import { Dialect } from 'sequelize/types';

export const config = ()=> ({
    database: {
        dialect: 'mysql' as Dialect,
        host: 'localhost',
        port: 3306,
        username: 'todos',
        password: 'Root#123'    ,
        database: 'todos',
    },
});

export default {
        dialect: 'mysql' as Dialect,
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Root#123'    ,
        database: 'todos',
}