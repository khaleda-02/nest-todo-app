import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
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
      const { password, id, createdAt, updatedAt, ...rest } = user;
      return rest;
    }
  }

  login(payload) {
    console.log(payload);

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(user: CreateUserDto) {
    const { id, password, createdAt, updatedAt, ...rest } =
      await this.userService.create(user);
    return {
      ...rest,
      accessToken: this.jwtService.sign(rest),
    };
  }
}
