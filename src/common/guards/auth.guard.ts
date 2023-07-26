import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../constants/index';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Role } from '../enums/roles.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard  implements CanActivate {
  private logger = new Logger(AuthGuard.name);
  constructor(
    private readonly reflector: Reflector , 
    private readonly jwtService : JwtService , 
    private readonly userService : UserService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    this.logger.log('canActive fun in auth.guard ');
    
    try{
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const token = this.extractToken(req);
    
    const payload  = this.jwtService.verify(token , {secret : 'secret'}); 

    const {password , ...user} = await this.userService.findOne(payload.username);

    if(!user){
     return false ;
    }

    req['user'] = {...user ,roles: [Role.USER]}; 
    return true ;
    
    }catch(err){ return false }
  } 

  private extractToken (req : Request) : string | undefined{
    const [type , token] = req.headers.authorization?.split(' ');
    return type == 'Bearer' ? token : undefined ;

  }
}


