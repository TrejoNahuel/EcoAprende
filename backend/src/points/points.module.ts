import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Level } from 'src/levels/models/level.model';
import { User } from 'src/users/models/user.model';
import { PointsController } from './points.controller';

@Module({
  imports: [SequelizeModule.forFeature([User, Level])],
  providers: [PointsService],
  controllers: [PointsController]
})
export class PointsModule {}
