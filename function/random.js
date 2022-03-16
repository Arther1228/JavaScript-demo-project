/**
 * m个元素的数组，随机选择n个不重复元素（js实现）
 * https://blog.csdn.net/xi_2130/article/details/50489618
 *  */

/**
 *  source共10个元素
 *  选择4个数据存储在target
 *
 */
(function () {
    var source = [
        "c", "c++", "php", "html", "css", "javascript", "java", "jsp", "asp", "node"
    ];
    var sL = source.length;

    var target = [];     //存储下标

    //随机4个数组下标
    for (var i = 0; i < 4; i++) {
        var rand = Math.floor(Math.random() * sL);
        if (target.length > 0) {
            detection(target, rand);
        } else {
            target.push(rand);
        }
    }

    //检测num是否存在于arr，存在重新添加，不存在直接添加
    function detection(arr, num) {
        var repeatFlag = false;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == num) {
                repeatFlag = true;
            }
        }
        if (repeatFlag) {
            //递归
            arguments.callee(arr, Math.floor(Math.random() * sL));
        } else {
            arr.push(num);
        }
    }

    //测试,输出target
    //for(var i=0; i<target.length; i++){
    //  console.log(source[target[i]]);
    //}
})();
