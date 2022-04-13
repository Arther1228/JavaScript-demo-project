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

let dataArray = Array.of(lxData, zdData, ycData, txData);
console.log(dataArray);