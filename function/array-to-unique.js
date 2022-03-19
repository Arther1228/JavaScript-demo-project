/**
 * 1. JavaScript专题之数组去重：https://segmentfault.com/a/1190000009867515
 * 2.也谈JavaScript数组去重 https://www.toobug.net/article/array_unique_in_javascript.html
 * 3.JavaScript删除数组重复元素的5个高效算法：https://tingbuqing.com/javascript-delete-array.html
 *
 * https://github.com/mqyqingfeng/Blog/issues/27
 */


console.log("JavaScript查找重复数据 ")

var array = [1, 1, '1', '1'];

function arrayToUnique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0,
             arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0,
                 resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(arrayToUnique(array)); // [1, "1"]