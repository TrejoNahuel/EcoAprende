import { Module } from '@nestjs/common';
import { Mission } from '../missions/models/mission.model';
import { UserMission } from '../missions/models/user-mission.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model';
import { Level } from '../levels/models/level.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User, UserMission, Mission])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
