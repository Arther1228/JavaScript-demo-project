//https://blog.csdn.net/qq_43509600/article/details/115100675

const stamp1 = new Date(new Date().toLocaleDateString()); //获取当天零点的时间
const stamp2 = new Date(+new Date(new Date().toLocaleDateString()) + 24 * 60 * 60 * 1000 - 1); //获取当天23:59:59的时间，+new Date(time)，表示获取时间戳

console.log(stamp1);
console.log(stamp2);