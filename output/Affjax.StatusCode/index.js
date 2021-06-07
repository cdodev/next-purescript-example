// Generated by purs version 0.14.2
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var StatusCode = function (x) {
    return x;
};
var showStatusCode = new Data_Show.Show(function (v) {
    return "(StatusCode " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var newtypeStatusCode = new Data_Newtype.Newtype(function () {
    return undefined;
});
var eqStatusCode = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordStatusCode = new Data_Ord.Ord(function () {
    return eqStatusCode;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
module.exports = {
    StatusCode: StatusCode,
    eqStatusCode: eqStatusCode,
    ordStatusCode: ordStatusCode,
    newtypeStatusCode: newtypeStatusCode,
    showStatusCode: showStatusCode
};
