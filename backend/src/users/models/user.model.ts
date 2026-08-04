import type { CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserRole } from '../types/user-rol.types';
import { Level } from 'src/levels/models/level.model';

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

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  declare points: number;

  @ForeignKey(() => Level)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
    field: 'level_id',
  })
  declare levelId: CreationOptional<number>;

  @BelongsTo(() => Level)
  declare level: NonAttribute<Level>;
}