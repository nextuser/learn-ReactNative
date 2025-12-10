import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { IUser } from '../types';

@Table({ tableName: 'users', timestamps: false })
export default class User extends Model<IUser> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ allowNull: false })
  username!: string;

  @Column({ allowNull: false })
  nickname!: string;

  @Column({ allowNull: false })
  avatar!: string;

  @Column({ allowNull: false })
  company!: string;
}

