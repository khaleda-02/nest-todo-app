import {DataSourceOptions, DataSource} from 'typeorm'

const options = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'todo',
  useNewUrlParser: true,
  logging: true,
  entities: ['./**/*.model.js'],
  migrations:['./db/migrations/*.js']
}

const dataSource = new DataSource(options);

export default dataSource; 