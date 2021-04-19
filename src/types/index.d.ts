/*
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 11:28:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\types\index.d.ts
 */
/**
 * 统一数据接口定义
 * 对象
 */
export interface DataType {
  id?: number | string;
  users: string;
  date?: string;
  sex?: string;
  birth?: string;
  address?: string;
}

// 统一请求接口定义
export interface listType {
  (): Promise
}

export interface OperationType {
  (item: DataType): Promise;
}
