/**
 * js 获取当前日期周一和周日
 * https://blog.csdn.net/bossxu_/article/details/80368584
 */

function getMondayAndSunday() {
    var now = new Date();
    var nowTime = now.getTime();
    var day = now.getDay() || 7  //为周日的时候 day 修改为7  否则当天周天会有问题
    var oneDayTime = 24 * 60 * 60 * 1000;
    var MondayTime = nowTime - (day - 1) * oneDayTime;//显示周一
    var SundayTime = nowTime + (7 - day) * oneDayTime;//显示周日
    console.log(new Date(MondayTime));
    console.log(new Date(SundayTime))
}


