import { Module } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { MissionsController } from './missions.controller';
import { Mission } from './models/mission.model';
import { UserMission } from './models/user-mission.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PointsModule } from '../points/points.module';

@Module({
  imports: [SequelizeModule.forFeature([Mission, UserMission]), PointsModule],
  controllers: [MissionsController],
  providers: [MissionsService],
})
export class MissionsModule {}
