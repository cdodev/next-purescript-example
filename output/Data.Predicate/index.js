// Generated by purs version 0.14.2
"use strict";
var Data_BooleanAlgebra = require("../Data.BooleanAlgebra/index.js");
var Data_Functor_Contravariant = require("../Data.Functor.Contravariant/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Predicate = function (x) {
    return x;
};
var newtypePredicate = new Data_Newtype.Newtype(function () {
    return undefined;
});
var heytingAlgebraPredicate = Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean);
var contravariantPredicate = new Data_Functor_Contravariant.Contravariant(function (f) {
    return function (v) {
        return function ($3) {
            return v(f($3));
        };
    };
});
var booleanAlgebraPredicate = Data_BooleanAlgebra.booleanAlgebraFn(Data_BooleanAlgebra.booleanAlgebraBoolean);
module.exports = {
    Predicate: Predicate,
    newtypePredicate: newtypePredicate,
    heytingAlgebraPredicate: heytingAlgebraPredicate,
    booleanAlgebraPredicate: booleanAlgebraPredicate,
    contravariantPredicate: contravariantPredicate
};
