import 'reflect-metadata'; // 必需：加载装饰器元数据
import express, { Request, Response } from 'express';
import cors from 'cors';
import sequelize, { testDbConnection } from './config/database';
import User from './models/User';
import Category from './models/Category';
import Course from './models/Course';
import { ISearchResponse } from './types/index';
import { Op } from 'sequelize';

// 初始化 Express
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// 中间件
app.use(cors()); // 解决跨域（React Native 访问必备）
app.use(express.json());




// 核心接口：/search?q=${key}
app.get('/search', async (req: Request, res: Response<ISearchResponse>) => {
  try {
    const { q } = req.query;
    const queryKey = q ? String(q) : '';

    // 构建模糊查询条件
    const whereCondition = queryKey
      ? { name: { [Op.like]: `%${queryKey}%` } }
      : {};

    // 查询课程（关联分类和用户）
    const courses = await Course.findAll({
      where: whereCondition,
      include: [
        { model: Category, as: 'category' },
        { model: User, as: 'user' },
      ],
      order: [['id', 'DESC']], // 按 ID 降序（匹配你提供的列表顺序）
    });

    // 构造响应（严格匹配指定 JSON 结构）
    const response: ISearchResponse = {
      status: true,
      message: '查询课程列表成功。',
      data: {
        courses: courses.map(course => course.toJSON()),
        pagination: {
          page: 1,
          limit: 10,
          total: courses.length,
        },
      },
    };

    res.json(response);
  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({
      status: false,
      message: '查询课程列表失败。',
      data: {
        courses: [],
        pagination: { page: 1, limit: 10, total: 0 },
      },
    });
  }
});

// 启动服务
const startServer = async () => {
  await testDbConnection(); // 测试数据库连接
  app.listen(PORT, HOST, () => {
    console.log(`🚀 服务器运行在: http://${HOST}:${PORT}`);
    console.log(`🔍 测试接口: http://${HOST}:${PORT}/search?q=Node.js`);
  });
};

// 启动
startServer().catch(err => console.error('服务启动失败:', err));

