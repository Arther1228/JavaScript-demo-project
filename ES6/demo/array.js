/**
 * 数组操作
 */

const lxData = {
    value: 1, name: '数据离线', label: {
        color: '#0059ff'
    }
};
const zdData = {
    value: 2, name: '数据中断', label: {
        color: '#1ac5ff'
    }
};
const ycData = {
    value: 3, name: '数据延迟', label: {
        color: '#0bc286'
    }
};
const txData = {
    value: 4, name: '图像质量', label: {
        color: '#ffcb33'
    }
};

let arr = Array.of(lxData, zdData, ycData, txData);
console.log(arr);



/**
 * JavaScript 的 4 种数组遍历方法： for VS forEach() VS for/in VS for/of
 * https://blog.fundebug.com/2019/03/11/4-ways-to-loop-array-inj-javascript/
 */


 for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

for (const v of arr) {
    console.log(v);
}


arr.forEach((v, i) => console.log(v));
