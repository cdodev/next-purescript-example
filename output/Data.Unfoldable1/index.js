// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Unfoldable1 = function (unfoldr1) {
    this.unfoldr1 = unfoldr1;
};
var unfoldr1 = function (dict) {
    return dict.unfoldr1;
};
var unfoldable1Maybe = new Unfoldable1(function (f) {
    return function (b) {
        return new Data_Maybe.Just(Data_Tuple.fst(f(b)));
    };
});
var unfoldable1Array = new Unfoldable1($foreign.unfoldr1ArrayImpl(Data_Maybe.isNothing)(Data_Maybe.fromJust())(Data_Tuple.fst)(Data_Tuple.snd));
var replicate1 = function (dictUnfoldable1) {
    return function (n) {
        return function (v) {
            var step = function (i) {
                if (i <= 0) {
                    return new Data_Tuple.Tuple(v, Data_Maybe.Nothing.value);
                };
                if (Data_Boolean.otherwise) {
                    return new Data_Tuple.Tuple(v, new Data_Maybe.Just(i - 1 | 0));
                };
                throw new Error("Failed pattern match at Data.Unfoldable1 (line 67, column 5 - line 67, column 39): " + [ i.constructor.name ]);
            };
            return unfoldr1(dictUnfoldable1)(step)(n - 1 | 0);
        };
    };
};
var replicate1A = function (dictApply) {
    return function (dictUnfoldable1) {
        return function (dictTraversable1) {
            return function (n) {
                return function (m) {
                    return Data_Semigroup_Traversable.sequence1(dictTraversable1)(dictApply)(replicate1(dictUnfoldable1)(n)(m));
                };
            };
        };
    };
};
var singleton = function (dictUnfoldable1) {
    return replicate1(dictUnfoldable1)(1);
};
var range = function (dictUnfoldable1) {
    return function (start) {
        return function (end) {
            var go = function (delta) {
                return function (i) {
                    var i$prime = i + delta | 0;
                    return new Data_Tuple.Tuple(i, (function () {
                        var $8 = i === end;
                        if ($8) {
                            return Data_Maybe.Nothing.value;
                        };
                        return new Data_Maybe.Just(i$prime);
                    })());
                };
            };
            var delta = (function () {
                var $9 = end >= start;
                if ($9) {
                    return 1;
                };
                return -1 | 0;
            })();
            return unfoldr1(dictUnfoldable1)(go(delta))(start);
        };
    };
};
module.exports = {
    Unfoldable1: Unfoldable1,
    unfoldr1: unfoldr1,
    replicate1: replicate1,
    replicate1A: replicate1A,
    singleton: singleton,
    range: range,
    unfoldable1Array: unfoldable1Array,
    unfoldable1Maybe: unfoldable1Maybe
};
