import type { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { HasMany } from 'sequelize-typescript';
import { UserMission } from '../../missions/models/user-mission.model';
import { UserRole } from '../types/user-rol.types';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: CreationOptional<number>;

  @Column({
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
  })
  declare role: UserRole;

  @HasMany(() => UserMission)
  declare userMissions: UserMission[];
}
