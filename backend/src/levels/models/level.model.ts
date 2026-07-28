import type { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'level',
  timestamps: false,
})
export class Level extends Model<InferAttributes<Level>, InferCreationAttributes<Level>> {
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
  declare name: string;

  @Column({
    allowNull: false,
  })
  declare minPoints: number;
}