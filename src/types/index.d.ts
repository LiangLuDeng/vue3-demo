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
    () : Promise
}

export interface OperationType {
    (item: DataType) : Promise;
}
