import type { ModelCtor } from 'sequelize-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Level } from '../levels/models/level.model';

export interface UserProfile {
  id: number;
  email: string;
  role: string;
  points: number;
  level: {
    id: number;
    name: string;
    minPoints: number;
  }
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelCtor<User>,
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

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      points: user.points,
      level: {
        id: user.levelId,
        name: user.level.name,
        minPoints: user.level.minPoints,
      }
    };
  }
}
