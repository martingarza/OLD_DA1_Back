import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CinemasModule } from './cinemas/cinemas.module';
import { MoviesModule } from './movies/movies.module';
import { CheckoutsModule } from './checkouts/checkouts.module';
import { JwtHelperModule } from './common/jwt/jwt.helper.module';
import { MailModule } from './common/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.development.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://app_distrib:Admin.Root.6699@cluster0.advskhj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    JwtHelperModule,
    MailModule,
    AuthModule,
    UsersModule,
    CinemasModule,
    MoviesModule,
    CheckoutsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
