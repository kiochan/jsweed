//@title: 将字符串转译成正则可以用的格式
//@tag: string, regexp
const str = "@#$%^&*()/";

const _str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

console.log(_str); // "@#\\$%\\^&\\*\\(\\)\\/"
