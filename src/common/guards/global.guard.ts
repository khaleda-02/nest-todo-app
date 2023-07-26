import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY, ROLES_KEY } from '../constants/index';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from '../../user/user.service';
import { Role } from '../enums/roles.enum';

@Injectable()
export class GlobalGuard  implements CanActivate {
  constructor(
    private readonly reflector: Reflector , 
    private jwtService : JwtService ,
    private userService : UserService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    const token = this.extractToken(req);
    let payload ;
    try{
      payload  = this.jwtService.verify(token , {secret : 'secret'}); 
    }catch(err){ throw new UnauthorizedException();}
    
    // const {password , ...user} = await this.userService.findOne(payload.username);
        
    // if(!user){
    //   throw new UnauthorizedException();
    // }
    // req['user'] = user; 
    console.log(payload);
    
    req['user'] = payload; 

    const roles = [Role.USER]

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requiredRoles) return true ;
    return requiredRoles.some(role=>roles.includes(role));

  } 

  private extractToken (req : Request) : string | undefined{
    const [type , token] = req.headers.authorization?.split(' ');
    return type == 'Bearer' ? token : undefined ;

  }
}
