/**
 * IE8下提示'console'未定义错误
 * @type {Console}
 * https://blog.csdn.net/itmyhome1990/article/details/37909385
 */
window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
        = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();
