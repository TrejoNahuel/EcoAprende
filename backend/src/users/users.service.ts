import type { ModelCtor } from 'sequelize-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Level } from '../levels/models/level.model';
import { UserMission } from '../missions/models/user-mission.model';
import { Mission } from '../missions/models/mission.model';

export interface UserProfile {
  id: number;
  email: string;
  role: string;
  points: number;
  level: {
    id: number;
    name: string;
    minPoints: number;
  };
  nextLevel: { name: string; minPoints: number } | null;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelCtor<User>,
    @InjectModel(UserMission)
    private readonly userMissionModel: typeof UserMission,
    @InjectModel(Level) private readonly levelModel: ModelCtor<Level>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async create({ email, password, role }: CreateUserDto): Promise<User> {
    return this.userModel.create({
      email,
      password,
      role,
      points: 0,
    });
  }

  async getProfile(userId: number): Promise<UserProfile> {
    const user = await this.userModel.findByPk(userId, {
      include: Level,
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const currentMinPoints = user.level?.minPoints ?? 0;

    const nextLevel = await this.levelModel.findOne({
      where: { minPoints: { [Op.gt]: currentMinPoints } },
      order: [['minPoints', 'ASC']],
    });

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      points: user.points,
      level: {
        id: user.levelId,
        name: user.level.name,
        minPoints: user.level.minPoints,
      },
      nextLevel: nextLevel
        ? { name: nextLevel.name, minPoints: nextLevel.minPoints }
        : null,
    };
  }
  async getUserBadges(userId: number) {
    // Buscamos todas las misiones completadas e incluimos la Misión original
    const completedMissions = await this.userMissionModel.findAll({
      where: { userId },
      include: [Mission],
      order: [['completedAt', 'ASC']],
    });

    // Usamos un Map para filtrar las insignias duplicadas (y quedarnos con la fecha más antigua)
    const badgesMap = new Map<string, Date>();

    for (const um of completedMissions) {
      const badgeName = um.mission?.badge;
      // Si la misión otorgaba una insignia y no la teníamos registrada, la guardamos
      if (badgeName && badgeName.trim() !== '' && !badgesMap.has(badgeName)) {
        badgesMap.set(badgeName, um.completedAt);
      }
    }

    // Conviertes el Map en un arreglo simple
    return Array.from(badgesMap.entries()).map(([name, earnedAt]) => ({
      name,
      earnedAt,
    }));
  }
}
