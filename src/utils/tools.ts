/*
 * @Author: your name
 * @Date: 2021-04-23 15:15:39
 * @LastEditTime: 2021-04-23 18:59:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\utils\tools.ts
 */

type operateI = string | number;
export type operator = {
  text: string,
  value: operateI
}
export const operateBtn: operator[] = [
  {
    text: '1',
    value: 1,
  },
  {
    text: '4',
    value: 4,
  },
  {
    text: '7',
    value: 7,
  },
  {
    text: '0',
    value: 0,
  },

  {
    text: '2',
    value: 2,
  },
  {
    text: '5',
    value: 5,
  },
  {
    text: '8',
    value: 8,
  },
  {
    text: '.',
    value: 'dot',
  },

  {
    text: '3',
    value: 3,
  },
  {
    text: '6',
    value: 6,
  },
  {
    text: '9',
    value: 9,
  },
  {
    text: '%',
    value: 'per',
  },
  {
    text: '＋',
    value: 'plus',
  },
  {
    text: '－',
    value: 'minus',
  },
  {
    text: '×',
    value: 'multi',
  },
  {
    text: '÷',
    value: 'division',
  },
  {
    text: '删除',
    value: 'delete',
  },
  {
    text: '清空',
    value: 'clear',
  },
  {
    text: 'OK',
    value: 'enter',
  },
];

// export const caculateBtn = [...new Array(10).keys()].map(it => ({
//   text: `${it}`,
//   value: it,
// })).concat(operateBtn);
