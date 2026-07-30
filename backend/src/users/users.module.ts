import { Module } from '@nestjs/common';
import { UserMission } from '../missions/models/user-mission.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User, UserMission])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
