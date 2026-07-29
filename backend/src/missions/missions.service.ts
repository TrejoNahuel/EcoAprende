import type { ModelCtor } from 'sequelize-typescript';
import type { FindUserMissionsResponse } from './types/find-user-missions-response.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserMission } from './models/user-mission.model';
import { Mission } from './models/mission.model';

@Injectable()
export class MissionsService {
  constructor(
    @InjectModel(Mission) private readonly missionModel: ModelCtor<Mission>,
  ) {}

  async findUserMissions(userId: number): Promise<FindUserMissionsResponse> {
    const completedMissions = await this.missionModel.findAll({
      include: [{
        model: UserMission,
        attributes: [],
        where: { userId },
        required: true,
      }],
    });

    const availableMissions = await this.missionModel.findAll({
      include: [{
          model: UserMission,
          attributes: [],
          where: { userId },
          required: false,
      }],
      where: {
        '$userMissions.id$': null,
      },
    });

    return {
      availableMissions,
      completedMissions,
    };
  }
}
