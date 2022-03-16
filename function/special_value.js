/***
 * 判断undefined
 *
 * 注意
 alert(null == undefined); //output “true”
 alert(null === undefined); //output “false”
 */


/**
 * 利用typeof函数
 */
function fun1() {
    var exp = undefined;
    if (typeof (exp) == "undefined") {
        console.log("undefined");
    }
}

/**
 * 利用===
 */
function fun2() {
    var exp = undefined;
    if (exp === undefined) {
        console.log("undefined");
    }
}


/**
 *判断null
 **/

function fun3() {
    var exp = null;
    if (exp === null) {
        console.log("exp is null");
    }
}


/**
 * 判断NaN
 */

function fun4() {
    var parm = 0 / 0;
    if (isNaN(parm)) {
        console.log("i am NaN");
    }
}
