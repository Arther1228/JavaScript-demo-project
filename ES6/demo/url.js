
var parseQueryString = function (url) {
   var reg = /([^\?\=\&]+)\=([^\?\=\&]*)/g;
   var obj = {};
   while (reg.exec (url)) {
       obj[RegExp.$1] = RegExp.$2;
   }
   return obj;
}
var url = "http://wiatcmdax.cn/index.php?key0=0&key1=1&key2=2";
var obj = parseQueryString (url);
console.warn (obj);

