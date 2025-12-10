import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ICourse } from '../types';
import Category from './Category';
import User from './User';

@Table({ tableName: 'courses', timestamps: false })
export default class Course extends Model<ICourse> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ allowNull: false, defaultValue: '2026-01-01 08:00:00' })
  createdAt!: string;

  @Column({ allowNull: false, defaultValue: '2026-01-01 08:00:00' })
  updatedAt!: string;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false })
  image!: string;

  @Column({ allowNull: false, defaultValue: false })
  recommended!: boolean;

  @Column({ allowNull: false, defaultValue: true })
  introductory!: boolean;

  @Column({ allowNull: false, defaultValue: 0 })
  likesCount!: number;

  @Column({ allowNull: false, defaultValue: 0 })
  chaptersCount!: number;

  @ForeignKey(() => Category)
  @Column({ allowNull: false })
  categoryId!: number;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId!: number;

  // 关联分类
  @BelongsTo(() => Category, { as: 'category' })
  category!: Category;

  // 关联用户
  @BelongsTo(() => User, { as: 'user' })
  user!: User;
}

