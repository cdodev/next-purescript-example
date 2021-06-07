// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Show = require("../Data.Show/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_DOM_Internal_Types = require("../Web.DOM.Internal.Types/index.js");
var Web_DOM_ParentNode = require("../Web.DOM.ParentNode/index.js");
var Web_DOM_ShadowRoot = require("../Web.DOM.ShadowRoot/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var prefix = function ($0) {
    return Data_Nullable.toMaybe($foreign["_prefix"]($0));
};
var namespaceURI = function ($1) {
    return Data_Nullable.toMaybe($foreign["_namespaceURI"]($1));
};
var initToProps = function (init) {
    return {
        mode: Data_Show.show(Web_DOM_ShadowRoot.showShadowRootMode)(init.mode),
        delegatesFocus: init.delegatesFocus
    };
};
var getElementsByTagNameNS = function ($2) {
    return $foreign["_getElementsByTagNameNS"](Data_Nullable.toNullable($2));
};
var getAttribute = function (attr) {
    var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $4 = $foreign["_getAttribute"](attr);
    return function ($5) {
        return $3($4($5));
    };
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var closest = function (qs) {
    var $6 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $7 = $foreign["_closest"](qs);
    return function ($8) {
        return $6($7($8));
    };
};
var attachShadow = function ($9) {
    return $foreign["_attachShadow"](initToProps($9));
};
module.exports = {
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    namespaceURI: namespaceURI,
    prefix: prefix,
    getElementsByTagNameNS: getElementsByTagNameNS,
    getAttribute: getAttribute,
    closest: closest,
    attachShadow: attachShadow,
    localName: $foreign.localName,
    tagName: $foreign.tagName,
    id: $foreign.id,
    setId: $foreign.setId,
    className: $foreign.className,
    classList: $foreign.classList,
    setClassName: $foreign.setClassName,
    getElementsByTagName: $foreign.getElementsByTagName,
    getElementsByClassName: $foreign.getElementsByClassName,
    setAttribute: $foreign.setAttribute,
    hasAttribute: $foreign.hasAttribute,
    removeAttribute: $foreign.removeAttribute,
    matches: $foreign.matches,
    scrollTop: $foreign.scrollTop,
    setScrollTop: $foreign.setScrollTop,
    scrollLeft: $foreign.scrollLeft,
    setScrollLeft: $foreign.setScrollLeft,
    scrollWidth: $foreign.scrollWidth,
    scrollHeight: $foreign.scrollHeight,
    clientTop: $foreign.clientTop,
    clientLeft: $foreign.clientLeft,
    clientWidth: $foreign.clientWidth,
    clientHeight: $foreign.clientHeight
};
