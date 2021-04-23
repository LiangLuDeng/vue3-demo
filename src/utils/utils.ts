/*
 * @Author: your name
 * @Date: 2021-04-23 11:31:50
 * @LastEditTime: 2021-04-23 12:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\utils\utils.ts
 */
import { isObject, isArray, isString } from "./dataType";

export const setStorage = (key:string, val:any) => {
  window.localStorage.setItem(
    key,
    isObject(val) || isArray(val)
      ? `{"_OBJECT_ARRAY_": ${JSON.stringify(val)}}`
      : val
  );
};

export const getStorage = (key:string) => {
  const result:any = window.localStorage.getItem(key);
  return isString(result) && result.includes("_OBJECT_ARRAY_")
    ? JSON.parse(result)._OBJECT_ARRAY_
    : result;
};

export function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
