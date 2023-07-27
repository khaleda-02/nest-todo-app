import { BadRequestException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login({username , password} : LoginDto) {
    const user = await this.userService.findOne(username);

    if (user && user.password == password) {
      const { id , username } = user;
      const accessToken = this.jwtService.sign({id , username });
      return {
        accessToken
      };
    }
    throw new UnauthorizedException();
  }

  async register(user: CreateUserDto) {
    const newUser   =
      await this.userService.create(user);      

    const accessToken = this.jwtService.sign({username : newUser.username });
    return {
      data : newUser ,
      accessToken 
    };
  }
}
