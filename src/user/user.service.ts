import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //todo -> encrypt password
    //! todo : the app crahing when duplicated usernames
    const { dataValues: user } = await this.userModel.create({
      ...createUserDto,
    });
    return user;
  }

  async findOne(username: string): Promise<User> {
    const { dataValues: user } = await this.userModel.findOne({
      where: { username },
    });
    return user;
  }

  // todo
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
