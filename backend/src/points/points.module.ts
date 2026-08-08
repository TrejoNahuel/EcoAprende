import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Level } from 'src/levels/models/level.model';
import { User } from 'src/users/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Level])],
  providers: [PointsService]
})
export class PointsModule {}
