//建立Cookie
//name : Key
//value:保存值
//days:預設為天數，如有需求請自行修改
function CreateCookie(name, value, days) {
    //需要呼叫編碼，為解決中文問題
    value = encodeURI(value);
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

//讀取Cookie
//name : Key
function ReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return decodeURI(c.substring(nameEQ.length, c.length));
        //decodeURI是重點，為了完美解決中文問題
    }
    return null;
}

//刪除cookie
//name: Key
function DeleteCookie(name) {
    CreateCookie(name, "", -1);
}


//將整數每隔三位數加上逗號
function FormatNumber(str, glue) {
    // 如果傳入必需為數字型參數，不然就噴 isNaN 回去
    if (isNaN(str)) {
        return NaN;
    }
    // 決定三個位數的分隔符號
    var glue = (typeof glue == 'string') ? glue : ',';
    var digits = str.toString().split('.'); // 先分左邊跟小數點
    var integerDigits = digits[0].split(""); // 獎整數的部分切割成陣列
    var threeDigits = []; // 用來存放3個位數的陣列
    // 當數字足夠，從後面取出三個位數，轉成字串塞回 threeDigits
    while (integerDigits.length > 3) {
        threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
    }

    threeDigits.unshift(integerDigits.join(""));
    digits[0] = threeDigits.join(glue);
    return digits.join(".");
}

//陣列加上indexOf()搜尋方法
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}

//判斷字串是否為NULL或空字串
function IsNullOrEmpty(str) {
    if (str == null || str == "") {
        return true;
    }
    return false;
}