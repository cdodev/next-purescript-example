// Generated by purs version 0.14.2
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Closed = function (Profunctor0, closed) {
    this.Profunctor0 = Profunctor0;
    this.closed = closed;
};
var closedFunction = new Closed(function () {
    return Data_Profunctor.profunctorFn;
}, Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
var closed = function (dict) {
    return dict.closed;
};
module.exports = {
    closed: closed,
    Closed: Closed,
    closedFunction: closedFunction
};
