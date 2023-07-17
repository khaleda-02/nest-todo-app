import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //! with passport , don't return any exception , it will handle it
  //? if validateUser don't return any thing it will return exception
  //? and if the user was vaild , it will handle it also , you just need to return the user if founded
  validateUser(username: string, password: string) {
    console.log('in auth service');
    const user = this.userService.findOne(username);
    if (user && user.password == password) {
      const { password, ...rest } = user;
      return rest;
    }
  }

  login(payload) {
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
