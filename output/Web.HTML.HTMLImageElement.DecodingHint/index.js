// Generated by purs version 0.14.2
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Sync = (function () {
    function Sync() {

    };
    Sync.value = new Sync();
    return Sync;
})();
var Async = (function () {
    function Async() {

    };
    Async.value = new Async();
    return Async;
})();
var Auto = (function () {
    function Auto() {

    };
    Auto.value = new Auto();
    return Auto;
})();
var showDecodingHint = new Data_Show.Show(function (v) {
    if (v instanceof Sync) {
        return "Sync";
    };
    if (v instanceof Async) {
        return "Async";
    };
    if (v instanceof Auto) {
        return "Auto";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 19, column 10 - line 22, column 19): " + [ v.constructor.name ]);
});
var print = function (v) {
    if (v instanceof Sync) {
        return "sync";
    };
    if (v instanceof Async) {
        return "async";
    };
    if (v instanceof Auto) {
        return "auto";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 33, column 9 - line 36, column 17): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "") {
        return new Data_Maybe.Just(Auto.value);
    };
    if (v === "sync") {
        return new Data_Maybe.Just(Sync.value);
    };
    if (v === "async") {
        return new Data_Maybe.Just(Async.value);
    };
    if (v === "auto") {
        return new Data_Maybe.Just(Auto.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqDecodingHint = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Sync && y instanceof Sync) {
            return true;
        };
        if (x instanceof Async && y instanceof Async) {
            return true;
        };
        if (x instanceof Auto && y instanceof Auto) {
            return true;
        };
        return false;
    };
});
var ordDecodingHint = new Data_Ord.Ord(function () {
    return eqDecodingHint;
}, function (x) {
    return function (y) {
        if (x instanceof Sync && y instanceof Sync) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Sync) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Sync) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Async && y instanceof Async) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Async) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Async) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Auto && y instanceof Auto) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 16, column 1 - line 16, column 52): " + [ x.constructor.name, y.constructor.name ]);
    };
});
module.exports = {
    Sync: Sync,
    Async: Async,
    Auto: Auto,
    parse: parse,
    print: print,
    eqDecodingHint: eqDecodingHint,
    ordDecodingHint: ordDecodingHint,
    showDecodingHint: showDecodingHint
};
