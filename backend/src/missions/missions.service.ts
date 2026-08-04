import type { ModelCtor } from 'sequelize-typescript';
import type { FindUserMissionsResponse } from './types/find-user-missions-response.type';
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// 1. Importamos AMBOS modelos correctamente
import { UserMission } from './models/user-mission.model';
import { Mission } from './models/mission.model';

@Injectable()
export class MissionsService {
  constructor(
    // 2. Inyectamos los DOS modelos por separado y con sus nombres correctos
    @InjectModel(Mission) private readonly missionModel: ModelCtor<Mission>,
    @InjectModel(UserMission)
    private readonly userMissionModel: typeof UserMission,
  ) {}

  async findUserMissions(userId: number): Promise<FindUserMissionsResponse> {
    const completedMissions = await this.missionModel.findAll({
      include: [
        {
          model: UserMission,
          attributes: [],
          where: { userId },
          required: true,
        },
      ],
    });

    const availableMissions = await this.missionModel.findAll({
      include: [
        {
          model: UserMission,
          attributes: [],
          where: { userId },
          required: false,
        },
      ],
      where: {
        '$userMissions.id$': null,
      },
    });

    return {
      availableMissions,
      completedMissions,
    };
  }

  async completeMission(missionId: number, userId: number) {
    // 1. Verificar que la misión realmente exista
    const mission = await this.missionModel.findByPk(missionId);
    if (!mission) {
      throw new NotFoundException('La misión solicitada no existe');
    }

    // 2. Verificar que el usuario no la haya completado antes
    const existingCompletion = await this.userMissionModel.findOne({
      where: { userId, missionId },
    });

    if (existingCompletion) {
      throw new ConflictException(
        'Ya has completado esta misión anteriormente',
      );
    }

    // 3. Crear el registro de misión completada en la tabla intermedia
    const completedAt = new Date();
    await this.userMissionModel.create({
      userId,
      missionId,
      completedAt,
    });

    // 4. Retornar los datos de éxito
    return {
      missionId,
      points: mission.points,
      badge: mission.badge,
      completedAt,
    };
  }
}
