﻿var AAP = AAP || {};
AAP.isNullOrEmptyString = function (a) {
    var b = null;
    return a === b || typeof a === "undefined" || !a.length;
}