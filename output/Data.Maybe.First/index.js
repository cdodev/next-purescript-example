// Generated by purs version 0.14.2
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var First = function (x) {
    return x;
};
var showFirst = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "First (" + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
    });
};
var semigroupFirst = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v instanceof Data_Maybe.Just) {
            return v;
        };
        return v1;
    };
});
var ordFirst = function (dictOrd) {
    return Data_Maybe.ordMaybe(dictOrd);
};
var ord1First = Data_Maybe.ord1Maybe;
var newtypeFirst = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monoidFirst = new Data_Monoid.Monoid(function () {
    return semigroupFirst;
}, Data_Maybe.Nothing.value);
var monadFirst = Data_Maybe.monadMaybe;
var invariantFirst = Data_Maybe.invariantMaybe;
var functorFirst = Data_Maybe.functorMaybe;
var extendFirst = Data_Maybe.extendMaybe;
var eqFirst = function (dictEq) {
    return Data_Maybe.eqMaybe(dictEq);
};
var eq1First = Data_Maybe.eq1Maybe;
var boundedFirst = function (dictBounded) {
    return Data_Maybe.boundedMaybe(dictBounded);
};
var bindFirst = Data_Maybe.bindMaybe;
var applyFirst = Data_Maybe.applyMaybe;
var applicativeFirst = Data_Maybe.applicativeMaybe;
var altFirst = new Control_Alt.Alt(function () {
    return functorFirst;
}, Data_Semigroup.append(semigroupFirst));
var plusFirst = new Control_Plus.Plus(function () {
    return altFirst;
}, Data_Monoid.mempty(monoidFirst));
var alternativeFirst = new Control_Alternative.Alternative(function () {
    return applicativeFirst;
}, function () {
    return plusFirst;
});
var monadZeroFirst = new Control_MonadZero.MonadZero(function () {
    return alternativeFirst;
}, function () {
    return monadFirst;
}, function () {
    return undefined;
});
module.exports = {
    First: First,
    newtypeFirst: newtypeFirst,
    eqFirst: eqFirst,
    eq1First: eq1First,
    ordFirst: ordFirst,
    ord1First: ord1First,
    boundedFirst: boundedFirst,
    functorFirst: functorFirst,
    invariantFirst: invariantFirst,
    applyFirst: applyFirst,
    applicativeFirst: applicativeFirst,
    bindFirst: bindFirst,
    monadFirst: monadFirst,
    extendFirst: extendFirst,
    showFirst: showFirst,
    semigroupFirst: semigroupFirst,
    monoidFirst: monoidFirst,
    altFirst: altFirst,
    plusFirst: plusFirst,
    alternativeFirst: alternativeFirst,
    monadZeroFirst: monadZeroFirst
};
