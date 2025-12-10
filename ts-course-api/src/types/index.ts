// 用户类型
export interface IUser {
  id: number;
  username: string;
  nickname: string;
  avatar: string;
  company: string;
}

// 分类类型
export interface ICategory {
  id: number;
  name: string;
}

// 课程类型
export interface ICourse {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  recommended: boolean;
  introductory: boolean;
  likesCount: number;
  chaptersCount: number;
  categoryId: number;
  userId: number;
  category: ICategory;
  user: IUser;
}

// 分页类型
export interface IPagination {
  page: number;
  limit: number;
  total: number;
}

// 接口返回响应类型
export interface ISearchResponse {
  status: boolean;
  message: string;
  data: {
    courses: ICourse[];
    pagination: IPagination;
  };
}

