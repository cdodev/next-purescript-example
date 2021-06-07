// Generated by purs version 0.14.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var RingRecord = function (SemiringRecord0, subRecord) {
    this.SemiringRecord0 = SemiringRecord0;
    this.subRecord = subRecord;
};
var Ring = function (Semiring0, sub) {
    this.Semiring0 = Semiring0;
    this.sub = sub;
};
var subRecord = function (dict) {
    return dict.subRecord;
};
var sub = function (dict) {
    return dict.sub;
};
var ringUnit = new Ring(function () {
    return Data_Semiring.semiringUnit;
}, function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
});
var ringRecordNil = new RingRecord(function () {
    return Data_Semiring.semiringRecordNil;
}, function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
});
var ringRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictRingRecord) {
            return function (dictRing) {
                return new RingRecord(function () {
                    return Data_Semiring.semiringRecordCons(dictIsSymbol)()(dictRingRecord.SemiringRecord0())(dictRing.Semiring0());
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = subRecord(dictRingRecord)(Type_Proxy["Proxy"].value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Type_Proxy["Proxy"].value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(sub(dictRing)(get(ra))(get(rb)))(tail);
                        };
                    };
                });
            };
        };
    };
};
var ringRecord = function (dictRowToList) {
    return function (dictRingRecord) {
        return new Ring(function () {
            return Data_Semiring.semiringRecord()(dictRingRecord.SemiringRecord0());
        }, subRecord(dictRingRecord)(Type_Proxy["Proxy"].value));
    };
};
var ringProxy3 = new Ring(function () {
    return Data_Semiring.semiringProxy3;
}, function (v) {
    return function (v1) {
        return Type_Proxy.Proxy3.value;
    };
});
var ringProxy2 = new Ring(function () {
    return Data_Semiring.semiringProxy2;
}, function (v) {
    return function (v1) {
        return Type_Proxy.Proxy2.value;
    };
});
var ringProxy = new Ring(function () {
    return Data_Semiring.semiringProxy;
}, function (v) {
    return function (v1) {
        return Type_Proxy["Proxy"].value;
    };
});
var ringNumber = new Ring(function () {
    return Data_Semiring.semiringNumber;
}, $foreign.numSub);
var ringInt = new Ring(function () {
    return Data_Semiring.semiringInt;
}, $foreign.intSub);
var ringFn = function (dictRing) {
    return new Ring(function () {
        return Data_Semiring.semiringFn(dictRing.Semiring0());
    }, function (f) {
        return function (g) {
            return function (x) {
                return sub(dictRing)(f(x))(g(x));
            };
        };
    });
};
var negate = function (dictRing) {
    return function (a) {
        return sub(dictRing)(Data_Semiring.zero(dictRing.Semiring0()))(a);
    };
};
module.exports = {
    Ring: Ring,
    sub: sub,
    negate: negate,
    RingRecord: RingRecord,
    subRecord: subRecord,
    ringInt: ringInt,
    ringNumber: ringNumber,
    ringUnit: ringUnit,
    ringFn: ringFn,
    ringProxy: ringProxy,
    ringProxy2: ringProxy2,
    ringProxy3: ringProxy3,
    ringRecord: ringRecord,
    ringRecordNil: ringRecordNil,
    ringRecordCons: ringRecordCons,
    Semiring: Data_Semiring.Semiring,
    SemiringRecord: Data_Semiring.SemiringRecord,
    add: Data_Semiring.add,
    mul: Data_Semiring.mul,
    one: Data_Semiring.one,
    zero: Data_Semiring.zero
};
