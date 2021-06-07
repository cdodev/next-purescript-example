// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var toCharacterData = Unsafe_Coerce.unsafeCoerce;
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromCharacterData = Web_Internal_FFI.unsafeReadProtoTagged("Text");
module.exports = {
    fromCharacterData: fromCharacterData,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toCharacterData: toCharacterData,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toEventTarget: toEventTarget,
    splitText: $foreign.splitText,
    wholeText: $foreign.wholeText
};
