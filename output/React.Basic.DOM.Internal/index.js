// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var React_Basic = require("../React.Basic/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var unsafeCreateDOMComponent = $foreign.unsafeCreateDOMComponent_(React_Basic.element);
var semigroupCSS = new Data_Semigroup.Semigroup(function (a) {
    return function (b) {
        return $foreign.mergeStyles([ b, a ]);
    };
});
var css = Unsafe_Coerce.unsafeCoerce;
var monoidCSS = new Data_Monoid.Monoid(function () {
    return semigroupCSS;
}, css({}));
module.exports = {
    css: css,
    unsafeCreateDOMComponent: unsafeCreateDOMComponent,
    semigroupCSS: semigroupCSS,
    monoidCSS: monoidCSS,
    mergeStyles: $foreign.mergeStyles,
    unsafeCreateDOMComponent_: $foreign.unsafeCreateDOMComponent_
};
