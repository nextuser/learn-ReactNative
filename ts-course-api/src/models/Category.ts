import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { ICategory } from '../types';

@Table({ tableName: 'categories', timestamps: false })
export default class Category extends Model<ICategory> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ allowNull: false })
  name!: string;
}

