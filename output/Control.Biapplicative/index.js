// Generated by purs version 0.14.2
"use strict";
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Biapplicative = function (Biapply0, bipure) {
    this.Biapply0 = Biapply0;
    this.bipure = bipure;
};
var bipure = function (dict) {
    return dict.bipure;
};
var biapplicativeTuple = new Biapplicative(function () {
    return Control_Biapply.biapplyTuple;
}, Data_Tuple.Tuple.create);
module.exports = {
    bipure: bipure,
    Biapplicative: Biapplicative,
    biapplicativeTuple: biapplicativeTuple
};
