import {DataSourceOptions, DataSource} from 'typeorm'

const options : DataSourceOptions= {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'todo',
  useNewUrlParser: true,
  logging: true,
  entities: ['dist/**/*.model.js'],
  migrations:['dist/db/migrations/*.js']
}

const dataSource = new DataSource(options);
export default dataSource; 