import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //! with passport , don't return any exception , it will handle it
  //? if validateUser don't return any thing it will return exception
  //? and if the user was vaild , it will handle it also , you just need to return the user if founded
  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    if (user && user.password == password) {
      const { id , username } = user;
      return { id , username };
    }
  }

  login(payload) {
    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken
    };
  }

  async register(user: CreateUserDto) {
    const { id, username  } =
      await this.userService.create(user);      

      const accessToken = this.jwtService.sign({id , username });
    return {
      id ,
       username ,
      accessToken 
    };
  }
}
