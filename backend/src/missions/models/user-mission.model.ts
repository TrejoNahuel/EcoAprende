import type {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Index,
} from 'sequelize-typescript';

import { User } from '../../users/models/user.model';
import { Mission } from './mission.model';

@Table({
  tableName: 'user_missions',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['userId', 'missionId'],
    },
  ],
})
export class UserMission extends Model<
  InferAttributes<UserMission>,
  InferCreationAttributes<UserMission>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: CreationOptional<number>;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @ForeignKey(() => Mission)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare missionId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare completedAt: Date;

  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => Mission)
  declare mission: Mission;
}