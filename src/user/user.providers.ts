import { DATA_SOURCE, USER_REPOSITORY } from "../common/constants";
import { User } from "./user.model";
import { DataSource } from 'typeorm';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(User);
    },
    inject: [DATA_SOURCE],
  },
]