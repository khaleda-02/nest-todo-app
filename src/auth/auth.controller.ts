import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { JwtGuard } from './guards/jwt.guard';

//! local strategy for authntecate user and just return the user data
//! jwt   startegy just for verifing tokens (sign token after local startegy returns user is done by jwtModule in autModule .)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // at this point , the user is logged in (by guard) , so just create and return the token 
    return this.authService.login(req.user);
  }

  
}
