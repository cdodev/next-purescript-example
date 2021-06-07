// Generated by purs version 0.14.2
"use strict";
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Second = function (x) {
    return x;
};
var Minute = function (x) {
    return x;
};
var Millisecond = function (x) {
    return x;
};
var Hour = function (x) {
    return x;
};
var showSecond = new Data_Show.Show(function (v) {
    return "(Second " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var showMinute = new Data_Show.Show(function (v) {
    return "(Minute " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var showMillisecond = new Data_Show.Show(function (v) {
    return "(Millisecond " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var showHour = new Data_Show.Show(function (v) {
    return "(Hour " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var ordSecond = Data_Ord.ordInt;
var ordMinute = Data_Ord.ordInt;
var ordMillisecond = Data_Ord.ordInt;
var ordHour = Data_Ord.ordInt;
var eqSecond = Data_Eq.eqInt;
var eqMinute = Data_Eq.eqInt;
var eqMillisecond = Data_Eq.eqInt;
var eqHour = Data_Eq.eqInt;
var boundedSecond = new Data_Bounded.Bounded(function () {
    return ordSecond;
}, 0, 59);
var boundedMinute = new Data_Bounded.Bounded(function () {
    return ordMinute;
}, 0, 59);
var boundedMillisecond = new Data_Bounded.Bounded(function () {
    return ordMillisecond;
}, 0, 999);
var boundedHour = new Data_Bounded.Bounded(function () {
    return ordHour;
}, 0, 23);
var boundedEnumSecond = new Data_Enum.BoundedEnum(function () {
    return boundedSecond;
}, function () {
    return enumSecond;
}, 60, function (v) {
    return v;
}, function (n) {
    if (n >= 0 && n <= 59) {
        return new Data_Maybe.Just(n);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [ n.constructor.name ]);
});
var enumSecond = new Data_Enum.Enum(function () {
    return ordSecond;
}, (function () {
    var $28 = Data_Enum.toEnum(boundedEnumSecond);
    var $29 = Data_Enum.fromEnum(boundedEnumSecond);
    return function ($30) {
        return $28((function (v) {
            return v - 1 | 0;
        })($29($30)));
    };
})(), (function () {
    var $31 = Data_Enum.toEnum(boundedEnumSecond);
    var $32 = Data_Enum.fromEnum(boundedEnumSecond);
    return function ($33) {
        return $31((function (v) {
            return v + 1 | 0;
        })($32($33)));
    };
})());
var boundedEnumMinute = new Data_Enum.BoundedEnum(function () {
    return boundedMinute;
}, function () {
    return enumMinute;
}, 60, function (v) {
    return v;
}, function (n) {
    if (n >= 0 && n <= 59) {
        return new Data_Maybe.Just(n);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [ n.constructor.name ]);
});
var enumMinute = new Data_Enum.Enum(function () {
    return ordMinute;
}, (function () {
    var $34 = Data_Enum.toEnum(boundedEnumMinute);
    var $35 = Data_Enum.fromEnum(boundedEnumMinute);
    return function ($36) {
        return $34((function (v) {
            return v - 1 | 0;
        })($35($36)));
    };
})(), (function () {
    var $37 = Data_Enum.toEnum(boundedEnumMinute);
    var $38 = Data_Enum.fromEnum(boundedEnumMinute);
    return function ($39) {
        return $37((function (v) {
            return v + 1 | 0;
        })($38($39)));
    };
})());
var boundedEnumMillisecond = new Data_Enum.BoundedEnum(function () {
    return boundedMillisecond;
}, function () {
    return enumMillisecond;
}, 1000, function (v) {
    return v;
}, function (n) {
    if (n >= 0 && n <= 999) {
        return new Data_Maybe.Just(n);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [ n.constructor.name ]);
});
var enumMillisecond = new Data_Enum.Enum(function () {
    return ordMillisecond;
}, (function () {
    var $40 = Data_Enum.toEnum(boundedEnumMillisecond);
    var $41 = Data_Enum.fromEnum(boundedEnumMillisecond);
    return function ($42) {
        return $40((function (v) {
            return v - 1 | 0;
        })($41($42)));
    };
})(), (function () {
    var $43 = Data_Enum.toEnum(boundedEnumMillisecond);
    var $44 = Data_Enum.fromEnum(boundedEnumMillisecond);
    return function ($45) {
        return $43((function (v) {
            return v + 1 | 0;
        })($44($45)));
    };
})());
var boundedEnumHour = new Data_Enum.BoundedEnum(function () {
    return boundedHour;
}, function () {
    return enumHour;
}, 24, function (v) {
    return v;
}, function (n) {
    if (n >= 0 && n <= 23) {
        return new Data_Maybe.Just(n);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [ n.constructor.name ]);
});
var enumHour = new Data_Enum.Enum(function () {
    return ordHour;
}, (function () {
    var $46 = Data_Enum.toEnum(boundedEnumHour);
    var $47 = Data_Enum.fromEnum(boundedEnumHour);
    return function ($48) {
        return $46((function (v) {
            return v - 1 | 0;
        })($47($48)));
    };
})(), (function () {
    var $49 = Data_Enum.toEnum(boundedEnumHour);
    var $50 = Data_Enum.fromEnum(boundedEnumHour);
    return function ($51) {
        return $49((function (v) {
            return v + 1 | 0;
        })($50($51)));
    };
})());
module.exports = {
    eqHour: eqHour,
    ordHour: ordHour,
    boundedHour: boundedHour,
    enumHour: enumHour,
    boundedEnumHour: boundedEnumHour,
    showHour: showHour,
    eqMinute: eqMinute,
    ordMinute: ordMinute,
    boundedMinute: boundedMinute,
    enumMinute: enumMinute,
    boundedEnumMinute: boundedEnumMinute,
    showMinute: showMinute,
    eqSecond: eqSecond,
    ordSecond: ordSecond,
    boundedSecond: boundedSecond,
    enumSecond: enumSecond,
    boundedEnumSecond: boundedEnumSecond,
    showSecond: showSecond,
    eqMillisecond: eqMillisecond,
    ordMillisecond: ordMillisecond,
    boundedMillisecond: boundedMillisecond,
    enumMillisecond: enumMillisecond,
    boundedEnumMillisecond: boundedEnumMillisecond,
    showMillisecond: showMillisecond
};
