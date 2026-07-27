import type { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'modules',
  timestamps: false,
})
export class Module extends Model<
  InferAttributes<Module>,
  InferCreationAttributes<Module>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: CreationOptional<number>;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  declare title: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
  })
  declare description: string;
}