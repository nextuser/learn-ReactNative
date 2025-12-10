import { Sequelize } from 'sequelize-typescript';
import path from 'path';

// 初始化 SQLite 连接
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../db.sqlite'), // 数据库文件路径
  models: [path.join(__dirname, '../models/**/*.ts')], // 自动加载模型
  logging: false, // 关闭 SQL 日志
});

// 测试数据库连接
export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ 数据库连接成功');
    await sequelize.sync({ force: false }); // 同步模型（不覆盖数据）
    console.log('✅ 数据库表同步完成');
  } catch (error) {
    console.error('❌ 数据库连接失败:', error);
    process.exit(1);
  }
};

export default sequelize;

