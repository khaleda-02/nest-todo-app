import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { USER_REPOSITORY } from '../common/constants/index';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    const userExist = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });

    if (userExist) throw new BadRequestException('user alread exit');

    const user = await this.userRepository.create({
      ...createUserDto,
    });
    return user ? user.get({ plain: true }) : null;
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
    return user.dataValues;
  }

  // TODO
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
