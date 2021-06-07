// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var React_Basic = require("../React.Basic/index.js");
var mkErrorBoundary = function (name) {
    var mapProps = function (render) {
        return {
            render: function (v) {
                return render({
                    error: Data_Nullable.toMaybe(v.error),
                    dismissError: v.dismissError
                });
            }
        };
    };
    return function __do() {
        var c = $foreign.errorBoundary_(name)();
        var $4 = React_Basic.element(c);
        return function ($5) {
            return $4(mapProps($5));
        };
    };
};
module.exports = {
    mkErrorBoundary: mkErrorBoundary
};
