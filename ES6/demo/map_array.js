
var importMapData = [
    { name: '长丰县', xqzs: 12, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '肥东县', xqzs: 16, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '巢湖市', xqzs: 12, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '瑶海区', xqzs: 16, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '庐阳区', xqzs: 12, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '蜀山区', xqzs: 16, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '包河区', xqzs: 12, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '肥西县', xqzs: 16, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 22 },
    { name: '庐江县', xqzs: 12, sbzs: 1212, zxl: 96.5, gjs: 22, gds: 202 }
];

for (const item of importMapData) {
    let map = new ObjToMap(item);
    console.log(map);
}

/**
 * 对象转数组
 * @param {} obj 
 * @returns 
 */
function ObjToMap(obj) {
    var map = new Map();
    for (let key in obj) {
        map.set(key, obj[key]);
    }
    return map;
}
