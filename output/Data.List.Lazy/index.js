// Generated by purs version 0.14.2
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_List_Internal = require("../Data.List.Internal/index.js");
var Data_List_Lazy_Types = require("../Data.List.Lazy.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Pattern = function (x) {
    return x;
};
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            var go = function (v) {
                return function (v1) {
                    if (v instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v instanceof Data_List_Lazy_Types.Cons && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(f(v.value0)(v1.value0), zipWith(f)(v.value1)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 705, column 3 - line 705, column 35): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Control_Apply.apply(Data_Lazy.applyLazy)(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs)))(Data_Newtype.unwrap()(ys));
        };
    };
};
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_List_Lazy_Types.traversableList)(dictApplicative)(zipWith(f)(xs)(ys));
            };
        };
    };
};
var zip = zipWith(Data_Tuple.Tuple.create);
var updateAt = function (n) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(x, v1.value1);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, updateAt(v - 1 | 0)(x)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 361, column 3 - line 361, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap()(xs));
        };
    };
};
var unzip = Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(function (v) {
    return function (v1) {
        return new Data_Tuple.Tuple(Data_List_Lazy_Types.cons(v.value0)(v1.value0), Data_List_Lazy_Types.cons(v.value1)(v1.value1));
    };
})(new Data_Tuple.Tuple(Data_List_Lazy_Types.nil, Data_List_Lazy_Types.nil));
var uncons = function (xs) {
    var v = Data_List_Lazy_Types.step(xs);
    if (v instanceof Data_List_Lazy_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Lazy_Types.Cons) {
        return new Data_Maybe.Just({
            head: v.value0,
            tail: v.value1
        });
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 288, column 13 - line 290, column 44): " + [ v.constructor.name ]);
};
var toUnfoldable = function (dictUnfoldable) {
    return Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(uncons(xs));
    });
};
var takeWhile = function (p) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
            return new Data_List_Lazy_Types.Cons(v.value0, takeWhile(p)(v.value1));
        };
        return Data_List_Lazy_Types.Nil.value;
    };
    var $251 = Data_Functor.map(Data_Lazy.functorLazy)(go);
    var $252 = Data_Newtype.unwrap();
    return function ($253) {
        return Data_List_Lazy_Types.List($251($252($253)));
    };
};
var take = function (n) {
    var go = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                return new Data_List_Lazy_Types.Cons(v1.value0, take(v - 1 | 0)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 505, column 3 - line 505, column 32): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var $122 = n <= 0;
    if ($122) {
        return Data_Function["const"](Data_List_Lazy_Types.nil);
    };
    var $254 = Data_Functor.map(Data_Lazy.functorLazy)(go(n));
    var $255 = Data_Newtype.unwrap();
    return function ($256) {
        return Data_List_Lazy_Types.List($254($255($256)));
    };
};
var tail = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.tail;
    })(uncons(xs));
};
var stripPrefix = function (dictEq) {
    return function (v) {
        return function (s) {
            var go = function (prefix) {
                return function (input) {
                    var v1 = Data_List_Lazy_Types.step(prefix);
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Done(input));
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = Data_List_Lazy_Types.step(input);
                        if (v2 instanceof Data_List_Lazy_Types.Cons && Data_Eq.eq(dictEq)(v1.value0)(v2.value0)) {
                            return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Loop({
                                a: v1.value1,
                                b: v2.value1
                            }));
                        };
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 487, column 21 - line 491, column 19): " + [ v1.constructor.name ]);
                };
            };
            return Control_Monad_Rec_Class.tailRecM2(Control_Monad_Rec_Class.monadRecMaybe)(go)(v)(s);
        };
    };
};
var span = function (p) {
    return function (xs) {
        var v = uncons(xs);
        if (v instanceof Data_Maybe.Just && p(v.value0.head)) {
            var v1 = span(p)(v.value0.tail);
            return {
                init: Data_List_Lazy_Types.cons(v.value0.head)(v1.init),
                rest: v1.rest
            };
        };
        return {
            init: Data_List_Lazy_Types.nil,
            rest: xs
        };
    };
};
var snoc = function (xs) {
    return function (x) {
        return Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.cons(x)(Data_List_Lazy_Types.nil))(xs);
    };
};
var singleton = function (a) {
    return Data_List_Lazy_Types.cons(a)(Data_List_Lazy_Types.nil);
};
var showPattern = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Pattern " + (Data_Show.show(Data_List_Lazy_Types.showList(dictShow))(v) + ")");
    });
};
var scanlLazy = function (f) {
    return function (acc) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var acc$prime = f(acc)(v.value0);
                    return Data_List_Lazy_Types.Cons.create(acc$prime)(scanlLazy(f)(acc$prime)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 776, column 5 - line 776, column 27): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    };
};
var reverse = function (xs) {
    return Control_Lazy.defer(Data_List_Lazy_Types.lazyList)(function (v) {
        return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(Data_List_Lazy_Types.cons))(Data_List_Lazy_Types.nil)(xs);
    });
};
var replicateM = function (dictMonad) {
    return function (n) {
        return function (m) {
            if (n < 1) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Control_Bind.bind(dictMonad.Bind1())(m)(function (a) {
                    return Control_Bind.bind(dictMonad.Bind1())(replicateM(dictMonad)(n - 1 | 0)(m))(function (as) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.cons(a)(as));
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 164, column 1 - line 164, column 62): " + [ n.constructor.name, m.constructor.name ]);
        };
    };
};
var repeat = function (x) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
        return Data_List_Lazy_Types.cons(x)(xs);
    });
};
var replicate = function (i) {
    return function (xs) {
        return take(i)(repeat(xs));
    };
};
var range = function (start) {
    return function (end) {
        if (start > end) {
            var g = function (x) {
                if (x >= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x - 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 151, column 13 - line 152, column 38): " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(g)(start);
        };
        if (Data_Boolean.otherwise) {
            var f = function (x) {
                if (x <= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x + 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 156, column 5 - line 157, column 30): " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(f)(start);
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 148, column 1 - line 148, column 32): " + [ start.constructor.name, end.constructor.name ]);
    };
};
var partition = function (f) {
    var go = function (x) {
        return function (v) {
            var $150 = f(x);
            if ($150) {
                return {
                    yes: Data_List_Lazy_Types.cons(x)(v.yes),
                    no: v.no
                };
            };
            return {
                yes: v.yes,
                no: Data_List_Lazy_Types.cons(x)(v.no)
            };
        };
    };
    return Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(go)({
        yes: Data_List_Lazy_Types.nil,
        no: Data_List_Lazy_Types.nil
    });
};
var $$null = function ($257) {
    return Data_Maybe.isNothing(uncons($257));
};
var nubBy = function (p) {
    var goStep = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                var v2 = Data_List_Internal.insertAndLookupBy(p)(v1.value0)(v);
                if (v2.found) {
                    return Data_List_Lazy_Types.step(go(v2.result)(v1.value1));
                };
                return new Data_List_Lazy_Types.Cons(v1.value0, go(v2.result)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 613, column 5 - line 613, column 23): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var go = function (s) {
        return function (v) {
            return Data_Functor.map(Data_Lazy.functorLazy)(goStep(s))(v);
        };
    };
    return go(Data_List_Internal.emptySet);
};
var nub = function (dictOrd) {
    return nubBy(Data_Ord.compare(dictOrd));
};
var newtypePattern = new Data_Newtype.Newtype(function () {
    return undefined;
});
var mapMaybe = function (f) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                var v1 = f(v.value0);
                if (v1 instanceof Data_Maybe.Nothing) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v1.value0, mapMaybe(f)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 448, column 5 - line 450, column 39): " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 446, column 3 - line 446, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var $258 = Data_Functor.map(Data_Lazy.functorLazy)(go);
    var $259 = Data_Newtype.unwrap();
    return function ($260) {
        return Data_List_Lazy_Types.List($258($259($260)));
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Data_List_Lazy_Types.cons)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(some(dictAlternative)(dictLazy)(v))(Control_Applicative.pure(dictAlternative.Applicative0())(Data_List_Lazy_Types.nil));
        };
    };
};
var length = Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(function (l) {
    return function (v) {
        return l + 1 | 0;
    };
})(0);
var last = (function () {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if ($$null(v.value1)) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($261) {
        return go(Data_List_Lazy_Types.step($261));
    };
})();
var iterate = function (f) {
    return function (x) {
        return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
            return Data_List_Lazy_Types.cons(x)(Data_Functor.map(Data_List_Lazy_Types.functorList)(f)(xs));
        });
    };
};
var insertAt = function (v) {
    return function (x) {
        return function (xs) {
            if (v === 0) {
                return Data_List_Lazy_Types.cons(x)(xs);
            };
            var go = function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, insertAt(v - 1 | 0)(x)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 340, column 3 - line 340, column 22): " + [ v1.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    };
};
var init = (function () {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons) {
            if ($$null(v.value1)) {
                return new Data_Maybe.Just(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(Data_List_Lazy_Types.cons(v.value0))(go(Data_List_Lazy_Types.step(v.value1)));
            };
        };
        return Data_Maybe.Nothing.value;
    };
    return function ($262) {
        return go(Data_List_Lazy_Types.step($262));
    };
})();
var index = function (xs) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons && v1 === 0) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = Data_List_Lazy_Types.step(v.value1);
                    $copy_v1 = v1 - 1 | 0;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 302, column 3 - line 302, column 21): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Lazy_Types.step(xs));
};
var head = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.head;
    })(uncons(xs));
};
var transpose = function (xs) {
    var v = uncons(xs);
    if (v instanceof Data_Maybe.Nothing) {
        return xs;
    };
    if (v instanceof Data_Maybe.Just) {
        var v1 = uncons(v.value0.head);
        if (v1 instanceof Data_Maybe.Nothing) {
            return transpose(v.value0.tail);
        };
        if (v1 instanceof Data_Maybe.Just) {
            return Data_List_Lazy_Types.cons(Data_List_Lazy_Types.cons(v1.value0.head)(mapMaybe(head)(v.value0.tail)))(transpose(Data_List_Lazy_Types.cons(v1.value0.tail)(mapMaybe(tail)(v.value0.tail))));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 746, column 7 - line 750, column 72): " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 742, column 3 - line 750, column 72): " + [ v.constructor.name ]);
};
var groupBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            var v1 = span(eq(v.value0))(v.value1);
            return new Data_List_Lazy_Types.Cons(Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(v.value0, v1.init);
            }), groupBy(eq)(v1.rest));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 576, column 3 - line 576, column 15): " + [ v.constructor.name ]);
    };
    var $263 = Data_Functor.map(Data_Lazy.functorLazy)(go);
    var $264 = Data_Newtype.unwrap();
    return function ($265) {
        return Data_List_Lazy_Types.List($263($264($265)));
    };
};
var group = function (dictEq) {
    return groupBy(Data_Eq.eq(dictEq));
};
var fromStep = (function () {
    var $266 = Control_Applicative.pure(Data_Lazy.applicativeLazy);
    return function ($267) {
        return Data_List_Lazy_Types.List($266($267));
    };
})();
var insertBy = function (cmp) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var v1 = cmp(x)(v.value0);
                    if (v1 instanceof Data_Ordering.GT) {
                        return new Data_List_Lazy_Types.Cons(v.value0, insertBy(cmp)(x)(v.value1));
                    };
                    return new Data_List_Lazy_Types.Cons(x, fromStep(v));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 238, column 3 - line 238, column 22): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var fromFoldable = function (dictFoldable) {
    return Data_Foldable.foldr(dictFoldable)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.nil);
};
var foldrLazy = function (dictLazy) {
    return function (op) {
        return function (z) {
            var go = function (xs) {
                var v = Data_List_Lazy_Types.step(xs);
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    return Control_Lazy.defer(dictLazy)(function (v1) {
                        return op(v.value0)(go(v.value1));
                    });
                };
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return z;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 768, column 13 - line 770, column 15): " + [ v.constructor.name ]);
            };
            return go;
        };
    };
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (b) {
            return function (xs) {
                var v = uncons(xs);
                if (v instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(b);
                };
                if (v instanceof Data_Maybe.Just) {
                    return Control_Bind.bind(dictMonad.Bind1())(f(b)(v.value0.head))(function (b$prime) {
                        return foldM(dictMonad)(f)(b$prime)(v.value0.tail);
                    });
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 759, column 5 - line 762, column 54): " + [ v.constructor.name ]);
            };
        };
    };
};
var findIndex = function (fn) {
    var go = function (n) {
        return function (list) {
            return Control_Bind.bind(Data_Maybe.bindMaybe)(uncons(list))(function (o) {
                var $211 = fn(o.head);
                if ($211) {
                    return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(n);
                };
                return go(n + 1 | 0)(o.tail);
            });
        };
    };
    return go(0);
};
var findLastIndex = function (fn) {
    return function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
            return (length(xs) - 1 | 0) - v | 0;
        })(findIndex(fn)(reverse(xs)));
    };
};
var filterM = function (dictMonad) {
    return function (p) {
        return function (list) {
            var v = uncons(list);
            if (v instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (v instanceof Data_Maybe.Just) {
                return Control_Bind.bind(dictMonad.Bind1())(p(v.value0.head))(function (b) {
                    return Control_Bind.bind(dictMonad.Bind1())(filterM(dictMonad)(p)(v.value0.tail))(function (xs$prime) {
                        return Control_Applicative.pure(dictMonad.Applicative0())((function () {
                            if (b) {
                                return Data_List_Lazy_Types.cons(v.value0.head)(xs$prime);
                            };
                            return xs$prime;
                        })());
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 431, column 5 - line 436, column 48): " + [ v.constructor.name ]);
        };
    };
};
var filter = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if (p(v.value0)) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v.value0, filter(p)(v.value1));
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 416, column 3 - line 416, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var $268 = Data_Functor.map(Data_Lazy.functorLazy)(go);
    var $269 = Data_Newtype.unwrap();
    return function ($270) {
        return Data_List_Lazy_Types.List($268($269($270)));
    };
};
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return filter(function (x) {
                return Data_Foldable.any(Data_List_Lazy_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean)(eq(x))(ys);
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var nubByEq = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            return new Data_List_Lazy_Types.Cons(v.value0, nubByEq(eq)(filter(function (y) {
                return !eq(v.value0)(y);
            })(v.value1)));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 633, column 3 - line 633, column 15): " + [ v.constructor.name ]);
    };
    var $271 = Data_Functor.map(Data_Lazy.functorLazy)(go);
    var $272 = Data_Newtype.unwrap();
    return function ($273) {
        return Data_List_Lazy_Types.List($271($272($273)));
    };
};
var nubEq = function (dictEq) {
    return nubByEq(Data_Eq.eq(dictEq));
};
var eqPattern = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(Data_List_Lazy_Types.eqList(dictEq))(x)(y);
        };
    });
};
var ordPattern = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqPattern(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(Data_List_Lazy_Types.ordList(dictOrd))(x)(y);
        };
    });
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
                $copy_v = Data_List_Lazy_Types.step(v.value1);
                return;
            };
            $tco_done = true;
            return fromStep(v);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($274) {
        return go(Data_List_Lazy_Types.step($274));
    };
};
var drop = function (n) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v === 0) {
                    $tco_done = true;
                    return v1;
                };
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = v - 1 | 0;
                    $copy_v1 = Data_List_Lazy_Types.step(v1.value1);
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 524, column 3 - line 524, column 15): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    var $275 = Data_Functor.map(Data_Lazy.functorLazy)(go(n));
    var $276 = Data_Newtype.unwrap();
    return function ($277) {
        return Data_List_Lazy_Types.List($275($276($277)));
    };
};
var slice = function (start) {
    return function (end) {
        return function (xs) {
            return take(end - start | 0)(drop(start)(xs));
        };
    };
};
var deleteBy = function (eq) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    if (eq(x)(v.value0)) {
                        return Data_List_Lazy_Types.step(v.value1);
                    };
                    if (Data_Boolean.otherwise) {
                        return new Data_List_Lazy_Types.Cons(v.value0, deleteBy(eq)(x)(v.value1));
                    };
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 662, column 3 - line 662, column 15): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap()(xs));
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(deleteBy(eq)))(nubByEq(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var deleteAt = function (n) {
    return function (xs) {
        var go = function (v) {
            return function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                    return Data_List_Lazy_Types.step(v1.value1);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, deleteAt(v - 1 | 0)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 350, column 3 - line 350, column 17): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap()(xs));
    };
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip($$delete(dictEq)));
};
var cycle = function (xs) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (ys) {
        return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(ys);
    });
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Lazy_Types.bindList));
var concat = function (v) {
    return Control_Bind.bind(Data_List_Lazy_Types.bindList)(v)(Control_Category.identity(Control_Category.categoryFn));
};
var catMaybes = mapMaybe(Control_Category.identity(Control_Category.categoryFn));
var alterAt = function (n) {
    return function (f) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = f(v1.value0);
                        if (v2 instanceof Data_Maybe.Nothing) {
                            return Data_List_Lazy_Types.step(v1.value1);
                        };
                        if (v2 instanceof Data_Maybe.Just) {
                            return new Data_List_Lazy_Types.Cons(v2.value0, v1.value1);
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy (line 382, column 22 - line 384, column 26): " + [ v2.constructor.name ]);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, alterAt(v - 1 | 0)(f)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 381, column 3 - line 381, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap()(xs));
        };
    };
};
var modifyAt = function (n) {
    return function (f) {
        return alterAt(n)(function ($278) {
            return Data_Maybe.Just.create(f($278));
        });
    };
};
module.exports = {
    toUnfoldable: toUnfoldable,
    fromFoldable: fromFoldable,
    singleton: singleton,
    range: range,
    replicate: replicate,
    replicateM: replicateM,
    some: some,
    many: many,
    repeat: repeat,
    iterate: iterate,
    cycle: cycle,
    "null": $$null,
    length: length,
    snoc: snoc,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    index: index,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    modifyAt: modifyAt,
    alterAt: alterAt,
    reverse: reverse,
    concat: concat,
    concatMap: concatMap,
    filter: filter,
    filterM: filterM,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    Pattern: Pattern,
    stripPrefix: stripPrefix,
    slice: slice,
    take: take,
    takeWhile: takeWhile,
    drop: drop,
    dropWhile: dropWhile,
    span: span,
    group: group,
    groupBy: groupBy,
    partition: partition,
    nub: nub,
    nubBy: nubBy,
    nubEq: nubEq,
    nubByEq: nubByEq,
    union: union,
    unionBy: unionBy,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    intersect: intersect,
    intersectBy: intersectBy,
    zipWith: zipWith,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    transpose: transpose,
    foldM: foldM,
    foldrLazy: foldrLazy,
    scanlLazy: scanlLazy,
    eqPattern: eqPattern,
    ordPattern: ordPattern,
    newtypePattern: newtypePattern,
    showPattern: showPattern,
    all: Data_Foldable.all,
    any: Data_Foldable.any,
    elem: Data_Foldable.elem,
    find: Data_Foldable.find,
    findMap: Data_Foldable.findMap,
    fold: Data_Foldable.fold,
    foldMap: Data_Foldable.foldMap,
    foldl: Data_Foldable.foldl,
    foldr: Data_Foldable.foldr,
    intercalate: Data_Foldable.intercalate,
    notElem: Data_Foldable.notElem,
    List: Data_List_Lazy_Types.List,
    Cons: Data_List_Lazy_Types.Cons,
    Nil: Data_List_Lazy_Types.Nil,
    cons: Data_List_Lazy_Types.cons,
    nil: Data_List_Lazy_Types.nil,
    step: Data_List_Lazy_Types.step,
    scanl: Data_Traversable.scanl,
    scanr: Data_Traversable.scanr
};
