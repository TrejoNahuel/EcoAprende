import type { ModelCtor } from 'sequelize-typescript';
import type { AddPointsResponse } from './types/add-points-response.type';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from '../users/models/user.model';
import { Level } from '../levels/models/level.model';

@Injectable()
export class PointsService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelCtor<User>,
    @InjectModel(Level) private readonly levelModel: ModelCtor<Level>,
  ) {}

  async addPoints(userId: number, points: number): Promise<AddPointsResponse> {
    const user = await this.userModel.findByPk(userId);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    user.points += points;

    const newLevel = await this.levelModel.findOne({
      where: {
        minPoints: {
          [Op.lte]: user.points,
        },
      },
      order: [['minPoints', 'DESC']],
    });

    if (!newLevel) {
      throw new Error('Nivel no encontrado para los puntos del usuario');
    }

    const leveledUp = user.levelId !== newLevel.id;

    user.levelId = newLevel.id;

    await user.save();

    return {
      totalPoints: user.points,
      level: {
        id: newLevel.id,
        name: newLevel.name,
      },
      leveledUp,
    };
  }
}