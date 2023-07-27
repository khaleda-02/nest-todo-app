import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { USER_REPOSITORY } from '../common/constants/index';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);
  constructor(
      @Inject(USER_REPOSITORY)
      private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto){
    const userExist = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });
    if (userExist) throw new BadRequestException('user alread exit');
    
    const {password , ...user} = await this.userRepository.save({
      ...createUserDto,
    });
    
   return user ;
  }

  async findOne(username: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'wrong username or password',
      });
    }
    return user;
  }

  // TODO
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
