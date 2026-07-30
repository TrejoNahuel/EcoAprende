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
} from 'sequelize-typescript';
import { MissionFrequency } from '../types/mission-frequency.type';

@Table({
  tableName: 'missions',
  timestamps: false,
})
export class Mission extends Model<
  InferAttributes<Mission>,
  InferCreationAttributes<Mission>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: CreationOptional<number>;

  @Column({
    allowNull: false,
  })
  declare title: string;

  @Column({
    allowNull: true,
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  declare points: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare badge: CreationOptional<string | null>;

  @Column({
    type: DataType.ENUM(...Object.values(MissionFrequency)),
    allowNull: false,
  })
  declare frequency: MissionFrequency;
}