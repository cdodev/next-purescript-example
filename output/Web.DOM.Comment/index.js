// Generated by purs version 0.14.2
"use strict";
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var toCharacterData = Unsafe_Coerce.unsafeCoerce;
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Comment");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("Comment");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Comment");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Comment");
var fromCharacterData = Web_Internal_FFI.unsafeReadProtoTagged("Comment");
module.exports = {
    fromCharacterData: fromCharacterData,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromEventTarget: fromEventTarget,
    toCharacterData: toCharacterData,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toEventTarget: toEventTarget
};
