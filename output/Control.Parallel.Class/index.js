// Generated by purs version 0.14.2
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Cont_Trans = require("../Control.Monad.Cont.Trans/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Control_Monad_Maybe_Trans = require("../Control.Monad.Maybe.Trans/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_Writer_Trans = require("../Control.Monad.Writer.Trans/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Compose = require("../Data.Functor.Compose/index.js");
var Data_Functor_Costar = require("../Data.Functor.Costar/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor_Star = require("../Data.Profunctor.Star/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var Parallel = function (Applicative1, Monad0, parallel, sequential) {
    this.Applicative1 = Applicative1;
    this.Monad0 = Monad0;
    this.parallel = parallel;
    this.sequential = sequential;
};
var ParCont = function (x) {
    return x;
};
var sequential = function (dict) {
    return dict.sequential;
};
var parallel = function (dict) {
    return dict.parallel;
};
var newtypeParCont = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monadParWriterT = function (dictMonoid) {
    return function (dictParallel) {
        return new Parallel(function () {
            return Control_Monad_Writer_Trans.applicativeWriterT(dictMonoid)(dictParallel.Applicative1());
        }, function () {
            return Control_Monad_Writer_Trans.monadWriterT(dictMonoid)(dictParallel.Monad0());
        }, Control_Monad_Writer_Trans.mapWriterT(parallel(dictParallel)), Control_Monad_Writer_Trans.mapWriterT(sequential(dictParallel)));
    };
};
var monadParStar = function (dictParallel) {
    return new Parallel(function () {
        return Data_Profunctor_Star.applicativeStar(dictParallel.Applicative1());
    }, function () {
        return Data_Profunctor_Star.monadStar(dictParallel.Monad0());
    }, function (v) {
        return Data_Profunctor_Star.Star((function () {
            var $47 = parallel(dictParallel);
            return function ($48) {
                return $47(v($48));
            };
        })());
    }, function (v) {
        return Data_Profunctor_Star.Star((function () {
            var $49 = sequential(dictParallel);
            return function ($50) {
                return $49(v($50));
            };
        })());
    });
};
var monadParReaderT = function (dictParallel) {
    return new Parallel(function () {
        return Control_Monad_Reader_Trans.applicativeReaderT(dictParallel.Applicative1());
    }, function () {
        return Control_Monad_Reader_Trans.monadReaderT(dictParallel.Monad0());
    }, Control_Monad_Reader_Trans.mapReaderT(parallel(dictParallel)), Control_Monad_Reader_Trans.mapReaderT(sequential(dictParallel)));
};
var monadParMaybeT = function (dictParallel) {
    return new Parallel(function () {
        return Data_Functor_Compose.applicativeCompose(dictParallel.Applicative1())(Data_Maybe.applicativeMaybe);
    }, function () {
        return Control_Monad_Maybe_Trans.monadMaybeT(dictParallel.Monad0());
    }, function (v) {
        return parallel(dictParallel)(v);
    }, function (v) {
        return sequential(dictParallel)(v);
    });
};
var monadParExceptT = function (dictParallel) {
    return new Parallel(function () {
        return Data_Functor_Compose.applicativeCompose(dictParallel.Applicative1())(Data_Either.applicativeEither);
    }, function () {
        return Control_Monad_Except_Trans.monadExceptT(dictParallel.Monad0());
    }, function (v) {
        return parallel(dictParallel)(v);
    }, function (v) {
        return sequential(dictParallel)(v);
    });
};
var monadParCostar = function (dictParallel) {
    return new Parallel(function () {
        return Data_Functor_Costar.applicativeCostar;
    }, function () {
        return Data_Functor_Costar.monadCostar;
    }, function (v) {
        return Data_Functor_Costar.Costar((function () {
            var $51 = sequential(dictParallel);
            return function ($52) {
                return v($51($52));
            };
        })());
    }, function (v) {
        return Data_Functor_Costar.Costar((function () {
            var $53 = parallel(dictParallel);
            return function ($54) {
                return v($53($54));
            };
        })());
    });
};
var monadParParCont = function (dictMonadEffect) {
    return new Parallel(function () {
        return applicativeParCont(dictMonadEffect);
    }, function () {
        return Control_Monad_Cont_Trans.monadContT(dictMonadEffect.Monad0());
    }, ParCont, function (v) {
        return v;
    });
};
var functorParCont = function (dictMonadEffect) {
    return new Data_Functor.Functor(function (f) {
        var $55 = parallel(monadParParCont(dictMonadEffect));
        var $56 = Data_Functor.map(Control_Monad_Cont_Trans.functorContT((((dictMonadEffect.Monad0()).Bind1()).Apply0()).Functor0()))(f);
        var $57 = sequential(monadParParCont(dictMonadEffect));
        return function ($58) {
            return $55($56($57($58)));
        };
    });
};
var applyParCont = function (dictMonadEffect) {
    return new Control_Apply.Apply(function () {
        return functorParCont(dictMonadEffect);
    }, function (v) {
        return function (v1) {
            return ParCont(function (k) {
                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (ra) {
                    return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (rb) {
                        return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                            return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(rb)))(function (mb) {
                                if (mb instanceof Data_Maybe.Nothing) {
                                    return Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(new Data_Maybe.Just(a))(ra));
                                };
                                if (mb instanceof Data_Maybe.Just) {
                                    return k(a(mb.value0));
                                };
                                throw new Error("Failed pattern match at Control.Parallel.Class (line 82, column 7 - line 84, column 26): " + [ mb.constructor.name ]);
                            });
                        }))(function () {
                            return Control_Monad_Cont_Trans.runContT(v1)(function (b) {
                                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(ra)))(function (ma) {
                                    if (ma instanceof Data_Maybe.Nothing) {
                                        return Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(new Data_Maybe.Just(b))(rb));
                                    };
                                    if (ma instanceof Data_Maybe.Just) {
                                        return k(ma.value0(b));
                                    };
                                    throw new Error("Failed pattern match at Control.Parallel.Class (line 88, column 7 - line 90, column 26): " + [ ma.constructor.name ]);
                                });
                            });
                        });
                    });
                });
            });
        };
    });
};
var applicativeParCont = function (dictMonadEffect) {
    return new Control_Applicative.Applicative(function () {
        return applyParCont(dictMonadEffect);
    }, (function () {
        var $59 = parallel(monadParParCont(dictMonadEffect));
        var $60 = Control_Applicative.pure(Control_Monad_Cont_Trans.applicativeContT((dictMonadEffect.Monad0()).Applicative0()));
        return function ($61) {
            return $59($60($61));
        };
    })());
};
var altParCont = function (dictMonadEffect) {
    return new Control_Alt.Alt(function () {
        return functorParCont(dictMonadEffect);
    }, function (v) {
        return function (v1) {
            return ParCont(function (k) {
                return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref["new"](false)))(function (done) {
                    return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                        return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(done)))(function (b) {
                            if (b) {
                                return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
                            };
                            return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(true)(done)))(function () {
                                return k(a);
                            });
                        });
                    }))(function () {
                        return Control_Monad_Cont_Trans.runContT(v1)(function (a) {
                            return Control_Bind.bind((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.read(done)))(function (b) {
                                if (b) {
                                    return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
                                };
                                return Control_Bind.discard(Control_Bind.discardUnit)((dictMonadEffect.Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadEffect)(Effect_Ref.write(true)(done)))(function () {
                                    return k(a);
                                });
                            });
                        });
                    });
                });
            });
        };
    });
};
var plusParCont = function (dictMonadEffect) {
    return new Control_Plus.Plus(function () {
        return altParCont(dictMonadEffect);
    }, ParCont(function (v) {
        return Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0())(Data_Unit.unit);
    }));
};
var alternativeParCont = function (dictMonadEffect) {
    return new Control_Alternative.Alternative(function () {
        return applicativeParCont(dictMonadEffect);
    }, function () {
        return plusParCont(dictMonadEffect);
    });
};
module.exports = {
    parallel: parallel,
    sequential: sequential,
    Parallel: Parallel,
    ParCont: ParCont,
    monadParExceptT: monadParExceptT,
    monadParReaderT: monadParReaderT,
    monadParWriterT: monadParWriterT,
    monadParMaybeT: monadParMaybeT,
    monadParStar: monadParStar,
    monadParCostar: monadParCostar,
    newtypeParCont: newtypeParCont,
    functorParCont: functorParCont,
    applyParCont: applyParCont,
    applicativeParCont: applicativeParCont,
    altParCont: altParCont,
    plusParCont: plusParCont,
    alternativeParCont: alternativeParCont,
    monadParParCont: monadParParCont
};
