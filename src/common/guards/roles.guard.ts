import { CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from "../constants";
import { Role } from '../enums/roles.enum';

export class RolesGuard implements CanActivate{
  private logger = new Logger(RolesGuard.name);
  constructor(private reflector : Reflector){}
  
  canActivate( context: ExecutionContext) : Promise<boolean> | boolean {
    this.logger.log('canActive fun in roles.guard ');
    
   const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);

  if(!requiredRoles || requiredRoles.length == 0 ) return true ;

  const { roles } = context.switchToHttp().getRequest().user ;
  return requiredRoles.some(role=>roles.includes(role));

  }
}