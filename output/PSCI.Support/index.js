// Generated by purs version 0.14.2
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Effect = require("../Effect/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Eval = function ($$eval) {
    this["eval"] = $$eval;
};
var evalShow = function (dictShow) {
    return new Eval(Effect_Console.logShow(dictShow));
};
var evalEffectUnit = new Eval(Control_Category.identity(Control_Category.categoryFn));
var $$eval = function (dict) {
    return dict["eval"];
};
var evalEffect = function (dictEval) {
    return new Eval(function (x) {
        return Control_Bind.bind(Effect.bindEffect)(x)($$eval(dictEval));
    });
};
module.exports = {
    "eval": $$eval,
    Eval: Eval,
    evalEffectUnit: evalEffectUnit,
    evalEffect: evalEffect,
    evalShow: evalShow
};
