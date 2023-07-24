import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtGuard } from './auth/guards/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtGuard(reflector) )
  // app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}));
  await app.listen(3000);
}
bootstrap();
