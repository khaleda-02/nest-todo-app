/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService , private userService : UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false, // expired token rejected
    });
  }

  //! once we rejester the startegy in authModule , and guard routes .
  // the constructor will verify the token and return the decoded payload if it was valid .
  async validate(payload) {
    const {password , ...rest} = await this.userService.findOne(payload.username);
    return rest;
  }
}
