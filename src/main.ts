import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './common/guards/roles.guard';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { AuthGuard } from './common/guards/auth.guard';
import { loggerMiddleware } from './common/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const userService = app.get(UserService);
  const jwtService = app.get(JwtService);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(
    new AuthGuard(reflector, jwtService,  userService) ,
     new RolesGuard(reflector)
  )
  
  await app.listen(3000);
}
bootstrap();
