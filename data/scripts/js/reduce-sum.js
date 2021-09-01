//@title: 利用 reduce 为数组求和
//@tag: reduce, sum, array
const sumReducer = (res, crt) => res + crt;

const array = [1, 2, 3, 4];

console.log(array.reduce(sumReducer)); // 10
