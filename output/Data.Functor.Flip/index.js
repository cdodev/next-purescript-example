// Generated by purs version 0.14.2
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Show = require("../Data.Show/index.js");
var Flip = function (x) {
    return x;
};
var showFlip = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Flip " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupoidFlip = function (dictSemigroupoid) {
    return new Control_Semigroupoid.Semigroupoid(function (v) {
        return function (v1) {
            return Flip(Control_Semigroupoid.compose(dictSemigroupoid)(v1)(v));
        };
    });
};
var ordFlip = function (dictOrd) {
    return dictOrd;
};
var newtypeFlip = new Data_Newtype.Newtype(function () {
    return undefined;
});
var functorFlip = function (dictBifunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Bifunctor.lmap(dictBifunctor)(f)(v);
        };
    });
};
var eqFlip = function (dictEq) {
    return dictEq;
};
var contravariantFlip = function (dictProfunctor) {
    return new Data_Functor_Contravariant.Contravariant(function (f) {
        return function (v) {
            return Data_Profunctor.lcmap(dictProfunctor)(f)(v);
        };
    });
};
var categoryFlip = function (dictCategory) {
    return new Control_Category.Category(function () {
        return semigroupoidFlip(dictCategory.Semigroupoid0());
    }, Control_Category.identity(dictCategory));
};
var bifunctorFlip = function (dictBifunctor) {
    return new Data_Bifunctor.Bifunctor(function (f) {
        return function (g) {
            return function (v) {
                return Data_Bifunctor.bimap(dictBifunctor)(g)(f)(v);
            };
        };
    });
};
var biapplyFlip = function (dictBiapply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorFlip(dictBiapply.Bifunctor0());
    }, function (v) {
        return function (v1) {
            return Control_Biapply.biapply(dictBiapply)(v)(v1);
        };
    });
};
var biapplicativeFlip = function (dictBiapplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyFlip(dictBiapplicative.Biapply0());
    }, function (a) {
        return function (b) {
            return Control_Biapplicative.bipure(dictBiapplicative)(b)(a);
        };
    });
};
module.exports = {
    Flip: Flip,
    newtypeFlip: newtypeFlip,
    eqFlip: eqFlip,
    ordFlip: ordFlip,
    showFlip: showFlip,
    functorFlip: functorFlip,
    bifunctorFlip: bifunctorFlip,
    biapplyFlip: biapplyFlip,
    biapplicativeFlip: biapplicativeFlip,
    contravariantFlip: contravariantFlip,
    semigroupoidFlip: semigroupoidFlip,
    categoryFlip: categoryFlip
};
