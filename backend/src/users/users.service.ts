import type { ModelCtor } from 'sequelize-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Level } from '../levels/models/level.model';

export interface UserProfile {
  id: number;
  email: string;
  role: string;
  points: number;
  level: number;
  levelName: string | undefined;
  minPoints: number | undefined;
  nextLevel: { name: string; minPoints: number } | null;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelCtor<User>,
    @InjectModel(Level) private readonly levelModel: ModelCtor<Level>,
  ) {}

  findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  create({ email, password, role }: CreateUserDto): Promise<User> {
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
      level: user.levelId,
      levelName: user.level?.name,
      minPoints: user.level?.minPoints,
      nextLevel: nextLevel
        ? { name: nextLevel.name, minPoints: nextLevel.minPoints }
        : null,
    };
  }
}
