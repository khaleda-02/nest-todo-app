import {
  Controller,
  Body,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Public } from '../common/decorators/access.decorator';
import { User } from '../common/decorators/user.decorator';

//! local strategy for authntecate user and just return the user data
//! jwt   startegy just for verifing tokens (sign token after local startegy returns user is done by jwtModule in autModule .)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user) {
    return this.authService.login(user);
  }  
  
  @Public()
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto); 
  }
}
