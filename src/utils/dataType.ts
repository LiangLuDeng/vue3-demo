/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
 * @Author: your name
 * @Date: 2021-04-23 11:32:44
 * @LastEditTime: 2021-04-23 11:35:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\utils\dataType.ts
 */
/***********
 * 数据类型
 * @type {obj}
 */
export const getType = (obj:unknown) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
export const isNumber = (obj: unknown) => getType(obj) === "number";
export const isString = (obj: unknown) => getType(obj) === "string";
export const isArray = (obj: unknown) => getType(obj) === "array";
export const isObject = (obj: unknown) => getType(obj) === "object";
export const isBoolean = (obj: unknown) => getType(obj) === "boolean";
export const isFunction = (obj: unknown) => getType(obj) === "function";
export const isNull = (obj: unknown) => getType(obj) === "null";
export const isUndefined = (obj: unknown) => getType(obj) === "undefined";
export const isPromise = (obj: unknown) => getType(obj) === "promise";
export const isNode = (node:any) => !isNull(node) && !isUndefined(node) && Boolean(node.nodeName) && Boolean(node.nodeType);
export const isElement = (element:any) => isNode(element) && element.nodeType === 1;
