import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
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
    const { id, username  } =
      await this.userService.create(user);      
      console.log(id , username , 'in register fun ');

    const accessToken = this.jwtService.sign({id , username });
    return {
      id ,
      username ,
      accessToken 
    };
  }
}
