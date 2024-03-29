/****
 * 身份号码完整校验
 * 来源于网络：https://www.cnblogs.com/ifat3/p/8570062.html
 * @author 毛三十
 */

/**
 * 校验码校验
 */
var checkCode = function (val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var code = val.substring(17);
    if (p.test(val)) {
        var sum = 0;
        for (var i = 0; i < 17; i++) {
            sum += val[i] * factor[i];
        }
        if (parity[sum % 11] == code.toUpperCase()) {
            return true;
        }
    }
    return false;
}


/**
 * 出生日期校验
 * */
var checkDate = function (val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
        var year = val.substring(0, 4);
        var month = val.substring(4, 6);
        var date = val.substring(6, 8);
        var date2 = new Date(year + "-" + month + "-" + date);
        if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
            return true;
        }
    }
    return false;
}

/**
 * 省级地址码校验
 *  华北：北京11，天津12，河北13，山西14，内蒙古15
 东北： 辽宁21，吉林22，黑龙江23
 华东： 上海31，江苏32，浙江33，安徽34，福建35，江西36，山东37
 华中： 河南41，湖北42，湖南43
 华南： 广东44，广西45，海南46
 西南： 四川51，贵州52，云南53，西藏54，重庆50
 西北： 陕西61，甘肃62，青海63，宁夏64，新疆65
 特别：台湾71，香港81，澳门82
 */
var checkProv = function (val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门"
    };
    if (pattern.test(val)) {
        if (provs[val]) {
            return true;
        }
    }
    return false;
}

/****
 * 最终校验方法
 */
var checkID = function (val) {
    if (checkCode(val)) {
        var date = val.substring(6, 14);
        if (checkDate(date)) {
            if (checkProv(val.substring(0, 2))) {
                return true;
            }
        }
    }
    return false;
}



/**test */

var idNo = "340222"

if (!checkID(idNo)) {
    console.log('身份证号码格式不正确!');
}