import {
  Controller,
  Get,
  Body,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Public } from '../shared/decorators/access.decorator';

//! local strategy for authntecate user and just return the user data
//! jwt   startegy just for verifing tokens (sign token after local startegy returns user is done by jwtModule in autModule .)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // at this point , the user is logged in (by guard) , so just create and return the token
    return this.authService.login(req.user);
  }  
  
  @Public()
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto); 
  }
}
