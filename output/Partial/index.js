// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var crashWith = function (dictPartial) {
    return $foreign["_crashWith"];
};
var crash = function (dictPartial) {
    return crashWith()("Partial.crash: partial function");
};
module.exports = {
    crash: crash,
    crashWith: crashWith
};
