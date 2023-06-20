import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookiesController } from './controllers/cookies/cookies.controller';
import { CookieService } from './service/cookie/cookie.service';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [],
  controllers: [AppController, CookiesController],
  providers: [AppService, CookieService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(cookieParser()).forRoutes('*');
  }
}
