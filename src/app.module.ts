import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import {UserController} from "./user/user.controller";
import {UserService} from "./user/user.service";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {AppService} from "./app.service";
import {AppController} from "./app.controller";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'airbnb_db_user',
      password: 'airbnb_db_password',
      database: 'airbnb_db',
      entities: [User],
      synchronize: true
    }),
      AuthModule,
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
