import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
//! two cases : 
//? one => no data in req body , so it's retunr unauthorized 
//? two => there's data in req body , so it goes to local strategy validate fun 