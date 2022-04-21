
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(materials=> materials));

console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
