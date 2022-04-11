console.info('utils module imported')   // 0

export default {
    host: 'localhost'
}

// 上面的 export default 写法相当于
//var obj = { host: 'localhost' }
//export { obj as default }

function foo() {
    console.info('function foo');
}

var schema = 'https';

export {
    schema,
    foo as fn1     // 使用别名 fn1
};

export let endPoint = '/apis'
export const PI = 3.14

export function fn2() {
    console.info('function fn2')
}

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return PI * Math.pow(this.radius, 2)
    }
}