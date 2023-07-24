import { Todo } from '../todos/todo.model';
import { User } from '../user/user.model';
import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import {DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST} from '../shared/constants'; 

export const dbProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config ; 
      switch(process.env.NODE_ENV){
        case DEVELOPMENT : 
          config=  databaseConfig.development ;
          break;
        case TEST : 
          config=  databaseConfig.test;
          break;
        case PRODUCTION : 
          config=  databaseConfig.production ;
          break;
        default : 
          config= databaseConfig.development
      }   
      const sequelize = new Sequelize(config);
      sequelize.addModels([User,Todo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];


