import { DATA_SOURCE, TODOS_REPOSITORY } from '../common/constants';
import { Todo } from './todo.model';
import { DataSource } from 'typeorm';

export const todosProviders = [
  {
    provide: TODOS_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Todo);
    },
    inject: [DATA_SOURCE],
  },
];
