import { Todo } from '../todos/todo.model';
import { User } from '../user/user.model';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE} from '../common/constants'; 
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


export const dbProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (configService: ConfigService) => {
      const config = configService.get('database');
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Todo]);
      await sequelize.sync();
      return sequelize;
    },
    
    inject: [ConfigService],
  },
];
