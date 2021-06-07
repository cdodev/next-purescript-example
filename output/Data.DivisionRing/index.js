// Generated by purs version 0.14.2
"use strict";
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var DivisionRing = function (Ring0, recip) {
    this.Ring0 = Ring0;
    this.recip = recip;
};
var recip = function (dict) {
    return dict.recip;
};
var rightDiv = function (dictDivisionRing) {
    return function (a) {
        return function (b) {
            return Data_Semiring.mul((dictDivisionRing.Ring0()).Semiring0())(a)(recip(dictDivisionRing)(b));
        };
    };
};
var leftDiv = function (dictDivisionRing) {
    return function (a) {
        return function (b) {
            return Data_Semiring.mul((dictDivisionRing.Ring0()).Semiring0())(recip(dictDivisionRing)(b))(a);
        };
    };
};
var divisionringNumber = new DivisionRing(function () {
    return Data_Ring.ringNumber;
}, function (x) {
    return 1.0 / x;
});
module.exports = {
    DivisionRing: DivisionRing,
    recip: recip,
    leftDiv: leftDiv,
    rightDiv: rightDiv,
    divisionringNumber: divisionringNumber,
    Ring: Data_Ring.Ring,
    negate: Data_Ring.negate,
    sub: Data_Ring.sub,
    Semiring: Data_Semiring.Semiring,
    add: Data_Semiring.add,
    mul: Data_Semiring.mul,
    one: Data_Semiring.one,
    zero: Data_Semiring.zero
};
