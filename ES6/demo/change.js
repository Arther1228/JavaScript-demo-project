
/**
 * js中Map、Set、Object、Array、JSON之间的相互转换
 * https://blog.csdn.net/zxl1990_ok/article/details/109499822
 */

/**
 * Map转为Array
 */

 var map = new Map();
 map.set(1, '111').set(2, '222').set(3, '333');
  
 // map -> array
 // 使用Array.from
 var arr = Array.from(map); // [[1, "111"], [2, "222"], [3, "333"]]
  
 // 使用...rest运算符 
 var arr = [...map];  // [[1, "111"], [2, "222"], [3, "333"]]
 // 或者 [...map.entries()]
  
 // 使用for of循环 
 var arr = [];
 for (let [key, value] of map) {
     arr.push([key, value])
 }
 // 等同于上面 
 // for (let [key, value] of map.entries()) {
 //	    arr.push([key, value])
 // }
  
  
 // 使用forEach
 var arr = [];
 map.forEach(function(value, key, map) {
     arr.push([key, value])
 });