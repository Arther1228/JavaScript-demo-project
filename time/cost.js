var start = new Date().getTime();//起始时间

var end = new Date().getTime();//接受时间
var time_cost = (end - start) / 1000 + "s";

console.log("cost_time: " + time_cost)


console.time('Array initialize');

var array = new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
    array[i] = new Object();
}
;

console.timeEnd('Array initialize');