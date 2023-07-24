import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable() // inject it into authModule .
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // in local startegy => by default the req.body -> {username :"", password:""}
    // and if need to changeit , in super({usernameField:'email}) as a config obj
    super();
  }

  //If user does not found
  // or password does not match you need just to return null. It means that throw a 403 error.
  async validate(username: string, password: string) {
    const user =await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException(); // that mean , the username founded , but wrong pass
    }
    return user; // by defaults , user will be in req obj  ==> req.user
  }
}
