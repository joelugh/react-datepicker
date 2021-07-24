!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addYears"),
        require("date-fns/subMinutes"),
        require("date-fns/subHours"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarWeeks"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addYears",
          "date-fns/subMinutes",
          "date-fns/subHours",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarWeeks",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addYears,
        null,
        null,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        null,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        null,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper
      );
})(
  this,
  function (
    e,
    t,
    r,
    a,
    n,
    o,
    s,
    i,
    p,
    l,
    d,
    c,
    u,
    f,
    h,
    m,
    y,
    v,
    D,
    w,
    k,
    g,
    b,
    C,
    S,
    _,
    M,
    P,
    E,
    N,
    O,
    Y,
    x,
    T,
    I,
    L,
    F,
    R,
    q,
    A,
    W,
    B,
    K,
    j,
    H,
    Q,
    V,
    U,
    $,
    z,
    G,
    J,
    X,
    Z,
    ee,
    te,
    re,
    ae,
    ne,
    oe,
    se,
    ie,
    pe
  ) {
    "use strict";
    function le(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var de = le(t),
      ce = le(a),
      ue = le(n),
      fe = le(o),
      he = le(s),
      me = le(i),
      ye = le(p),
      ve = le(l),
      De = le(d),
      we = le(c),
      ke = le(u),
      ge = le(m),
      be = le(y),
      Ce = le(v),
      Se = le(D),
      _e = le(w),
      Me = le(k),
      Pe = le(g),
      Ee = le(b),
      Ne = le(C),
      Oe = le(S),
      Ye = le(_),
      xe = le(M),
      Te = le(P),
      Ie = le(E),
      Le = le(N),
      Fe = le(O),
      Re = le(Y),
      qe = le(x),
      Ae = le(T),
      We = le(I),
      Be = le(L),
      Ke = le(F),
      je = le(R),
      He = le(q),
      Qe = le(W),
      Ve = le(B),
      Ue = le(K),
      $e = le(j),
      ze = le(H),
      Ge = le(Q),
      Je = le(V),
      Xe = le(z),
      Ze = le(G),
      et = le(J),
      tt = le(X),
      rt = le(Z),
      at = le(ee),
      nt = le(te),
      ot = le(re),
      st = le(ae),
      it = le(ne),
      pt = le(oe),
      lt = le(se),
      dt = le(ie);
    function ct(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function ut(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ct(Object(r), !0).forEach(function (t) {
              vt(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ct(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function ft(e) {
      return (ft =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ht(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function mt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function yt(e, t, r) {
      return t && mt(e.prototype, t), r && mt(e, r), e;
    }
    function vt(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function Dt() {
      return (Dt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    function wt(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && gt(e, t);
    }
    function kt(e) {
      return (kt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function gt(e, t) {
      return (gt =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function bt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Ct(e, t) {
      return !t || ("object" != typeof t && "function" != typeof t) ? bt(e) : t;
    }
    function St(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          a = kt(e);
        if (t) {
          var n = kt(this).constructor;
          r = Reflect.construct(a, arguments, n);
        } else r = a.apply(this, arguments);
        return Ct(this, r);
      };
    }
    function _t(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Mt(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Mt(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return Mt(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Mt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function Pt(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        case "PPPP":
        default:
          return t.date({ width: "full" });
      }
    }
    function Et(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        case "pppp":
        default:
          return t.time({ width: "full" });
      }
    }
    var Nt = {
        p: Et,
        P: function (e, t) {
          var r,
            a = e.match(/(P+)(p+)?/),
            n = a[1],
            o = a[2];
          if (!o) return Pt(e, t);
          switch (n) {
            case "P":
              r = t.dateTime({ width: "short" });
              break;
            case "PP":
              r = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              r = t.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              r = t.dateTime({ width: "full" });
          }
          return r.replace("{{date}}", Pt(n, t)).replace("{{time}}", Et(o, t));
        },
      },
      Ot = 12,
      Yt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function xt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? pt.default(e)
          : st.default(e)
        : new Date();
      return It(t) ? t : null;
    }
    function Tt(e, t, r, a, n) {
      var o = null,
        s = Xt(r) || Xt(Jt()),
        i = !0;
      return Array.isArray(t)
        ? (t.forEach(function (t) {
            var r = it.default(e, t, new Date(), { locale: s });
            a &&
              (i =
                It(r, n) &&
                e === he.default(r, t, { awareOfUnicodeTokens: !0 })),
              It(r, n) && i && (o = r);
          }),
          o)
        : ((o = it.default(e, t, new Date(), { locale: s })),
          a
            ? (i =
                It(o) && e === he.default(o, t, { awareOfUnicodeTokens: !0 }))
            : It(o) ||
              ((t = t
                .match(Yt)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? s
                      ? (0, Nt[t])(e, s.formatLong)
                      : t
                    : e;
                })
                .join("")),
              e.length > 0 &&
                (o = it.default(e, t.slice(0, e.length), new Date())),
              It(o) || (o = new Date(e))),
          It(o) && i ? o : null);
    }
    function It(e, t) {
      return (t = t || new Date("1/1/1000")), fe.default(e) && at.default(e, t);
    }
    function Lt(e, t, r) {
      if ("en" === r) return he.default(e, t, { awareOfUnicodeTokens: !0 });
      var a = Xt(r);
      return (
        r &&
          !a &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              r,
              '"].'
            )
          ),
        !a && Jt() && Xt(Jt()) && (a = Xt(Jt())),
        he.default(e, t, { locale: a || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Ft(e, t) {
      var r = t.dateFormat,
        a = t.locale;
      return (e && Lt(e, Array.isArray(r) ? r[0] : r, a)) || "";
    }
    function Rt(e, t) {
      var r = t.hour,
        a = void 0 === r ? 0 : r,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        i = void 0 === s ? 0 : s;
      return Re.default(Fe.default(Le.default(e, i), o), a);
    }
    function qt(e, t) {
      var r = (t && Xt(t)) || (Jt() && Xt(Jt()));
      return Oe.default(e, r ? { locale: r } : null);
    }
    function At(e, t) {
      return Lt(e, "ddd", t);
    }
    function Wt(e) {
      return Ve.default(e);
    }
    function Bt(e, t, r) {
      var a = Xt(t || Jt());
      return Ue.default(e, { locale: a, weekStartsOn: r });
    }
    function Kt(e) {
      return $e.default(e);
    }
    function jt(e) {
      return Ge.default(e);
    }
    function Ht(e) {
      return ze.default(e);
    }
    function Qt(e, t) {
      return e && t ? tt.default(e, t) : !e && !t;
    }
    function Vt(e, t) {
      return e && t ? et.default(e, t) : !e && !t;
    }
    function Ut(e, t) {
      return e && t ? rt.default(e, t) : !e && !t;
    }
    function $t(e, t) {
      return e && t ? Ze.default(e, t) : !e && !t;
    }
    function zt(e, t) {
      return e && t ? Xe.default(e, t) : !e && !t;
    }
    function Gt(e, t, r) {
      var a,
        n = Ve.default(t),
        o = Je.default(r);
      try {
        a = ot.default(e, { start: n, end: o });
      } catch (e) {
        a = !1;
      }
      return a;
    }
    function Jt() {
      return ("undefined" != typeof window ? window : global).__localeId__;
    }
    function Xt(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : global;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function Zt(e, t) {
      return Lt(qe.default(xt(), e), "LLLL", t);
    }
    function er(e, t) {
      return Lt(qe.default(xt(), e), "LLL", t);
    }
    function tr(e, t) {
      return Lt(Ae.default(xt(), e), "QQQ", t);
    }
    function rr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        lr(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return $t(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return $t(e, t);
          })) ||
        (s && !s(xt(e))) ||
        !1
      );
    }
    function ar(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeDates;
      return (
        (r &&
          r.some(function (t) {
            return $t(e, t);
          })) ||
        !1
      );
    }
    function nr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ((r || a) && lr(e, { minDate: r, maxDate: a })) ||
        (n &&
          n.some(function (t) {
            return Vt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Vt(e, t);
          })) ||
        (s && !s(xt(e))) ||
        !1
      );
    }
    function or(e, t, r, a) {
      var n = Te.default(e),
        o = Ye.default(e),
        s = Te.default(t),
        i = Ye.default(t),
        p = Te.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function sr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ((r || a) && lr(e, { minDate: r, maxDate: a })) ||
        (n &&
          n.some(function (t) {
            return Ut(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Ut(e, t);
          })) ||
        (s && !s(xt(e))) ||
        !1
      );
    }
    function ir(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = new Date(e, 0, 1);
      return lr(n, { minDate: r, maxDate: a }) || !1;
    }
    function pr(e, t, r, a) {
      var n = Te.default(e),
        o = xe.default(e),
        s = Te.default(t),
        i = xe.default(t),
        p = Te.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function lr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate;
      return (r && je.default(e, r) < 0) || (a && je.default(e, a) > 0);
    }
    function dr(e, t) {
      return t.some(function (t) {
        return (
          Pe.default(t) === Pe.default(e) && Me.default(t) === Me.default(e)
        );
      });
    }
    function cr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeTimes,
        a = t.includeTimes,
        n = t.filterTime;
      return (r && dr(e, r)) || (a && !dr(e, a)) || (n && !n(e)) || !1;
    }
    function ur(e, t) {
      var r = t.minTime,
        a = t.maxTime;
      if (!r || !a) throw new Error("Both minTime and maxTime props required");
      var n,
        o = xt(),
        s = Re.default(Fe.default(o, Me.default(e)), Pe.default(e)),
        i = Re.default(Fe.default(o, Me.default(r)), Pe.default(r)),
        p = Re.default(Fe.default(o, Me.default(a)), Pe.default(a));
      try {
        n = !ot.default(s, { start: i, end: p });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function fr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = Ce.default(e, 1);
      return (
        (r && He.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return He.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function hr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = we.default(e, 1);
      return (
        (r && He.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return He.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function mr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = Se.default(e, 1);
      return (
        (r && Qe.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Qe.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function yr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = ke.default(e, 1);
      return (
        (r && Qe.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Qe.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function vr(e) {
      var t = e.minDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return je.default(e, t) >= 0;
        });
        return Be.default(a);
      }
      return r ? Be.default(r) : t;
    }
    function Dr(e) {
      var t = e.maxDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return je.default(e, t) <= 0;
        });
        return Ke.default(a);
      }
      return r ? Ke.default(r) : t;
    }
    function wr() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          r = new Map(),
          a = 0,
          n = e.length;
        a < n;
        a++
      ) {
        var o = e[a];
        if (ue.default(o)) {
          var s = Lt(o, "MM.dd.yyyy"),
            i = r.get(s) || [];
          i.includes(t) || (i.push(t), r.set(s, i));
        } else if ("object" === ft(o)) {
          var p = Object.keys(o),
            l = p[0],
            d = o[p[0]];
          if ("string" == typeof l && d.constructor === Array)
            for (var c = 0, u = d.length; c < u; c++) {
              var f = Lt(d[c], "MM.dd.yyyy"),
                h = r.get(f) || [];
              h.includes(l) || (h.push(l), r.set(f, h));
            }
        }
      }
      return r;
    }
    function kr(e, t, r, a, n) {
      for (var o = n.length, s = [], i = 0; i < o; i++) {
        var p = me.default(ye.default(e, Pe.default(n[i])), Me.default(n[i])),
          l = me.default(e, (r + 1) * a);
        at.default(p, t) && nt.default(p, l) && s.push(n[i]);
      }
      return s;
    }
    function gr(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function br(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot,
        r = Math.ceil(Te.default(e) / t) * t,
        a = r - (t - 1);
      return { startPeriod: a, endPeriod: r };
    }
    function Cr(e, t, r, a) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          i = !0;
        r && (i = Te.default(r) <= s),
          a && i && (i = Te.default(a) >= s),
          i && n.push(s);
      }
      return n;
    }
    var Sr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          ht(this, r),
            vt(bt((a = t.call(this, e))), "renderOptions", function () {
              var e = a.props.year,
                t = a.state.yearsList.map(function (t) {
                  return de.default.createElement(
                    "div",
                    {
                      className:
                        e === t
                          ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                          : "react-datepicker__year-option",
                      key: t,
                      onClick: a.onChange.bind(bt(a), t),
                    },
                    e === t
                      ? de.default.createElement(
                          "span",
                          {
                            className:
                              "react-datepicker__year-option--selected",
                          },
                          "✓"
                        )
                      : "",
                    t
                  );
                }),
                r = a.props.minDate ? Te.default(a.props.minDate) : null,
                n = a.props.maxDate ? Te.default(a.props.maxDate) : null;
              return (
                (n &&
                  a.state.yearsList.find(function (e) {
                    return e === n;
                  })) ||
                  t.unshift(
                    de.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "upcoming",
                        onClick: a.incrementYears,
                      },
                      de.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                      })
                    )
                  ),
                (r &&
                  a.state.yearsList.find(function (e) {
                    return e === r;
                  })) ||
                  t.push(
                    de.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "previous",
                        onClick: a.decrementYears,
                      },
                      de.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                      })
                    )
                  ),
                t
              );
            }),
            vt(bt(a), "onChange", function (e) {
              a.props.onChange(e);
            }),
            vt(bt(a), "handleClickOutside", function () {
              a.props.onCancel();
            }),
            vt(bt(a), "shiftYears", function (e) {
              var t = a.state.yearsList.map(function (t) {
                return t + e;
              });
              a.setState({ yearsList: t });
            }),
            vt(bt(a), "incrementYears", function () {
              return a.shiftYears(1);
            }),
            vt(bt(a), "decrementYears", function () {
              return a.shiftYears(-1);
            });
          var n = e.yearDropdownItemNumber,
            o = e.scrollableYearDropdown,
            s = n || (o ? 10 : 5);
          return (
            (a.state = {
              yearsList: Cr(a.props.year, s, a.props.minDate, a.props.maxDate),
            }),
            a
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e = ce.default({
                  "react-datepicker__year-dropdown": !0,
                  "react-datepicker__year-dropdown--scrollable":
                    this.props.scrollableYearDropdown,
                });
                return de.default.createElement(
                  "div",
                  { className: e },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      _r = lt.default(Sr),
      Mr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(bt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            vt(bt(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Te.default(e.props.minDate) : 1900,
                  r = e.props.maxDate ? Te.default(e.props.maxDate) : 2100,
                  a = [],
                  n = t;
                n <= r;
                n++
              )
                a.push(
                  de.default.createElement("option", { key: n, value: n }, n)
                );
              return a;
            }),
            vt(bt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            vt(bt(e), "renderSelectMode", function () {
              return de.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            vt(bt(e), "renderReadView", function (t) {
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                de.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year
                )
              );
            }),
            vt(bt(e), "renderDropdown", function () {
              return de.default.createElement(_r, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            vt(bt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            vt(bt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            vt(bt(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                }
              );
            }),
            vt(bt(e), "handleYearChange", function (t, r) {
              e.onSelect(t, r), e.setOpen();
            }),
            vt(bt(e), "onSelect", function (t, r) {
              e.props.onSelect && e.props.onSelect(t, r);
            }),
            vt(bt(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Pr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(
              bt((e = t.call.apply(t, [this].concat(n)))),
              "renderOptions",
              function () {
                return e.props.monthNames.map(function (t, r) {
                  return de.default.createElement(
                    "div",
                    {
                      className:
                        e.props.month === r
                          ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                          : "react-datepicker__month-option",
                      key: t,
                      onClick: e.onChange.bind(bt(e), r),
                    },
                    e.props.month === r
                      ? de.default.createElement(
                          "span",
                          {
                            className:
                              "react-datepicker__month-option--selected",
                          },
                          "✓"
                        )
                      : "",
                    t
                  );
                });
              }
            ),
            vt(bt(e), "onChange", function (t) {
              return e.props.onChange(t);
            }),
            vt(bt(e), "handleClickOutside", function () {
              return e.props.onCancel();
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__month-dropdown" },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Er = lt.default(Pr),
      Nr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(bt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            vt(bt(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return de.default.createElement(
                  "option",
                  { key: t, value: t },
                  e
                );
              });
            }),
            vt(bt(e), "renderSelectMode", function (t) {
              return de.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t)
              );
            }),
            vt(bt(e), "renderReadView", function (t, r) {
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                de.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  r[e.props.month]
                )
              );
            }),
            vt(bt(e), "renderDropdown", function (t) {
              return de.default.createElement(Er, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            vt(bt(e), "renderScrollMode", function (t) {
              var r = e.state.dropdownVisible,
                a = [e.renderReadView(!r, t)];
              return r && a.unshift(e.renderDropdown(t)), a;
            }),
            vt(bt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            vt(bt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return er(e, t.props.locale);
                        }
                      : function (e) {
                          return Zt(e, t.props.locale);
                        }
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(r);
                    break;
                  case "select":
                    e = this.renderSelectMode(r);
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component);
    function Or(e, t) {
      for (var r = [], a = Kt(e), n = Kt(t); !at.default(a, n); )
        r.push(xt(a)), (a = we.default(a, 1));
      return r;
    }
    var Yr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "renderOptions", function () {
              return a.state.monthYearsList.map(function (e) {
                var t = Ie.default(e),
                  r = Qt(a.props.date, e) && Vt(a.props.date, e);
                return de.default.createElement(
                  "div",
                  {
                    className: r
                      ? "react-datepicker__month-year-option --selected_month-year"
                      : "react-datepicker__month-year-option",
                    key: t,
                    onClick: a.onChange.bind(bt(a), t),
                  },
                  r
                    ? de.default.createElement(
                        "span",
                        {
                          className:
                            "react-datepicker__month-year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  Lt(e, a.props.dateFormat, a.props.locale)
                );
              });
            }),
            vt(bt(a), "onChange", function (e) {
              return a.props.onChange(e);
            }),
            vt(bt(a), "handleClickOutside", function () {
              a.props.onCancel();
            }),
            (a.state = {
              monthYearsList: Or(a.props.minDate, a.props.maxDate),
            }),
            a
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e = ce.default({
                  "react-datepicker__month-year-dropdown": !0,
                  "react-datepicker__month-year-dropdown--scrollable":
                    this.props.scrollableMonthYearDropdown,
                });
                return de.default.createElement(
                  "div",
                  { className: e },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      xr = lt.default(Yr),
      Tr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(bt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            vt(bt(e), "renderSelectOptions", function () {
              for (
                var t = Kt(e.props.minDate), r = Kt(e.props.maxDate), a = [];
                !at.default(t, r);

              ) {
                var n = Ie.default(t);
                a.push(
                  de.default.createElement(
                    "option",
                    { key: n, value: n },
                    Lt(t, e.props.dateFormat, e.props.locale)
                  )
                ),
                  (t = we.default(t, 1));
              }
              return a;
            }),
            vt(bt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            vt(bt(e), "renderSelectMode", function () {
              return de.default.createElement(
                "select",
                {
                  value: Ie.default(Kt(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            vt(bt(e), "renderReadView", function (t) {
              var r = Lt(e.props.date, e.props.dateFormat, e.props.locale);
              return de.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                de.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                de.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  r
                )
              );
            }),
            vt(bt(e), "renderDropdown", function () {
              return de.default.createElement(xr, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            vt(bt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            vt(bt(e), "onChange", function (t) {
              e.toggleDropdown();
              var r = xt(parseInt(t));
              (Qt(e.props.date, r) && Vt(e.props.date, r)) ||
                e.props.onChange(r);
            }),
            vt(bt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Ir = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(
              bt((e = t.call.apply(t, [this].concat(n)))),
              "dayEl",
              de.default.createRef()
            ),
            vt(bt(e), "handleClick", function (t) {
              !e.isDisabled() && e.props.onClick && e.props.onClick(t);
            }),
            vt(bt(e), "handleMouseEnter", function (t) {
              !e.isDisabled() &&
                e.props.onMouseEnter &&
                e.props.onMouseEnter(t);
            }),
            vt(bt(e), "handleOnKeyDown", function (t) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                e.props.handleOnKeyDown(t);
            }),
            vt(bt(e), "isSameDay", function (t) {
              return $t(e.props.day, t);
            }),
            vt(bt(e), "isKeyboardSelected", function () {
              return (
                !e.props.disabledKeyboardNavigation &&
                !e.isSameDay(e.props.selected) &&
                e.isSameDay(e.props.preSelection)
              );
            }),
            vt(bt(e), "isDisabled", function () {
              return rr(e.props.day, e.props);
            }),
            vt(bt(e), "isExcluded", function () {
              return ar(e.props.day, e.props);
            }),
            vt(bt(e), "getHighLightedClass", function (t) {
              var r = e.props,
                a = r.day,
                n = r.highlightDates;
              if (!n) return !1;
              var o = Lt(a, "MM.dd.yyyy");
              return n.get(o);
            }),
            vt(bt(e), "isInRange", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Gt(r, a, n);
            }),
            vt(bt(e), "isInSelectingRange", function () {
              var t,
                r = e.props,
                a = r.day,
                n = r.selectsStart,
                o = r.selectsEnd,
                s = r.selectsRange,
                i = r.startDate,
                p = r.endDate,
                l =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return (
                !(!(n || o || s) || !l || e.isDisabled()) &&
                (n && p && (nt.default(l, p) || zt(l, p))
                  ? Gt(a, l, p)
                  : ((o && i && (at.default(l, i) || zt(l, i))) ||
                      !(!s || !i || p || (!at.default(l, i) && !zt(l, i)))) &&
                    Gt(a, i, l))
              );
            }),
            vt(bt(e), "isSelectingRangeStart", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.selectsStart,
                s =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return $t(a, o ? s : n);
            }),
            vt(bt(e), "isSelectingRangeEnd", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.endDate,
                o = r.selectsEnd,
                s =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return $t(a, o ? s : n);
            }),
            vt(bt(e), "isRangeStart", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && $t(a, r);
            }),
            vt(bt(e), "isRangeEnd", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && $t(n, r);
            }),
            vt(bt(e), "isWeekend", function () {
              var t = Ee.default(e.props.day);
              return 0 === t || 6 === t;
            }),
            vt(bt(e), "isOutsideMonth", function () {
              return (
                void 0 !== e.props.month &&
                e.props.month !== Ye.default(e.props.day)
              );
            }),
            vt(bt(e), "getClassNames", function (t) {
              var r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
              return ce.default(
                "react-datepicker__day",
                r,
                "react-datepicker__day--" + At(e.props.day),
                {
                  "react-datepicker__day--disabled": e.isDisabled(),
                  "react-datepicker__day--excluded": e.isExcluded(),
                  "react-datepicker__day--selected": e.isSameDay(
                    e.props.selected
                  ),
                  "react-datepicker__day--keyboard-selected":
                    e.isKeyboardSelected(),
                  "react-datepicker__day--range-start": e.isRangeStart(),
                  "react-datepicker__day--range-end": e.isRangeEnd(),
                  "react-datepicker__day--in-range": e.isInRange(),
                  "react-datepicker__day--in-selecting-range":
                    e.isInSelectingRange(),
                  "react-datepicker__day--selecting-range-start":
                    e.isSelectingRangeStart(),
                  "react-datepicker__day--selecting-range-end":
                    e.isSelectingRangeEnd(),
                  "react-datepicker__day--today": e.isSameDay(xt()),
                  "react-datepicker__day--weekend": e.isWeekend(),
                  "react-datepicker__day--outside-month": e.isOutsideMonth(),
                },
                e.getHighLightedClass("react-datepicker__day--highlighted")
              );
            }),
            vt(bt(e), "getAriaLabel", function () {
              var t = e.props,
                r = t.day,
                a = t.ariaLabelPrefixWhenEnabled,
                n = void 0 === a ? "Choose" : a,
                o = t.ariaLabelPrefixWhenDisabled,
                s = void 0 === o ? "Not available" : o,
                i = e.isDisabled() || e.isExcluded() ? s : n;
              return "".concat(i, " ").concat(Lt(r, "PPPP", e.props.locale));
            }),
            vt(bt(e), "getTabIndex", function (t, r) {
              var a = t || e.props.selected,
                n = r || e.props.preSelection;
              return e.isKeyboardSelected() || (e.isSameDay(a) && $t(n, a))
                ? 0
                : -1;
            }),
            vt(bt(e), "handleFocusDay", function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = !1;
              0 === e.getTabIndex() &&
                !t.isInputFocused &&
                e.isSameDay(e.props.preSelection) &&
                ((document.activeElement &&
                  document.activeElement !== document.body) ||
                  (r = !0),
                e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
                e.props.containerRef &&
                  e.props.containerRef.current &&
                  e.props.containerRef.current.contains(
                    document.activeElement
                  ) &&
                  document.activeElement.classList.contains(
                    "react-datepicker__day"
                  ) &&
                  (r = !0)),
                r && e.dayEl.current.focus({ preventScroll: !0 });
            }),
            vt(bt(e), "renderDayContents", function () {
              if (e.isOutsideMonth()) {
                if (
                  e.props.monthShowsDuplicateDaysEnd &&
                  Ne.default(e.props.day) < 10
                )
                  return null;
                if (
                  e.props.monthShowsDuplicateDaysStart &&
                  Ne.default(e.props.day) > 20
                )
                  return null;
              }
              return e.props.renderDayContents
                ? e.props.renderDayContents(
                    Ne.default(e.props.day),
                    e.props.day
                  )
                : Ne.default(e.props.day);
            }),
            vt(bt(e), "render", function () {
              return de.default.createElement(
                "div",
                {
                  ref: e.dayEl,
                  className: e.getClassNames(e.props.day),
                  onKeyDown: e.handleOnKeyDown,
                  onClick: e.handleClick,
                  onMouseEnter: e.handleMouseEnter,
                  tabIndex: e.getTabIndex(),
                  "aria-label": e.getAriaLabel(),
                  role: "button",
                  "aria-disabled": e.isDisabled(),
                },
                e.renderDayContents()
              );
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.handleFocusDay();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.handleFocusDay(e);
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Lr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(
              bt((e = t.call.apply(t, [this].concat(n)))),
              "handleClick",
              function (t) {
                e.props.onClick && e.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.weekNumber,
                  r = e.ariaLabelPrefix,
                  a = void 0 === r ? "week " : r,
                  n = {
                    "react-datepicker__week-number": !0,
                    "react-datepicker__week-number--clickable": !!e.onClick,
                  };
                return de.default.createElement(
                  "div",
                  {
                    className: ce.default(n),
                    "aria-label": ""
                      .concat(a, " ")
                      .concat(this.props.weekNumber),
                    onClick: this.handleClick,
                  },
                  t
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Fr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(
              bt((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, r) {
                e.props.onDayClick && e.props.onDayClick(t, r);
              }
            ),
            vt(bt(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            vt(bt(e), "handleWeekClick", function (t, r, a) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, r, a),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            vt(bt(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : qt(t);
            }),
            vt(bt(e), "renderDays", function () {
              var t = Bt(e.props.day, e.props.locale, e.props.calendarStartDay),
                r = [],
                a = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(bt(e), t, a)
                  : void 0;
                r.push(
                  de.default.createElement(Lr, {
                    key: "W",
                    weekNumber: a,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  })
                );
              }
              return r.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                  var a = ve.default(t, r);
                  return de.default.createElement(Ir, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a.valueOf(),
                    day: a,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(bt(e), a),
                    onMouseEnter: e.handleDayMouseEnter.bind(bt(e), a),
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    includeDates: e.props.includeDates,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    renderDayContents: e.props.renderDayContents,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                    locale: e.props.locale,
                  });
                })
              );
            }),
            e
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return de.default.createElement(
                    "div",
                    { className: "react-datepicker__week" },
                    this.renderDays()
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { shouldCloseOnSelect: !0 };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component),
      Rr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(
              bt((e = t.call.apply(t, [this].concat(n)))),
              "MONTH_REFS",
              _t(Array(12)).map(function () {
                return de.default.createRef();
              })
            ),
            vt(bt(e), "isDisabled", function (t) {
              return rr(t, e.props);
            }),
            vt(bt(e), "isExcluded", function (t) {
              return ar(t, e.props);
            }),
            vt(bt(e), "handleDayClick", function (t, r) {
              e.props.onDayClick &&
                e.props.onDayClick(t, r, e.props.orderInDisplay);
            }),
            vt(bt(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            vt(bt(e), "handleMouseLeave", function () {
              e.props.onMouseLeave && e.props.onMouseLeave();
            }),
            vt(bt(e), "isRangeStartMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Vt(qe.default(a, t), n);
            }),
            vt(bt(e), "isRangeStartQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Ut(Ae.default(a, t), n);
            }),
            vt(bt(e), "isRangeEndMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Vt(qe.default(a, t), o);
            }),
            vt(bt(e), "isRangeEndQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Ut(Ae.default(a, t), o);
            }),
            vt(bt(e), "isWeekInMonth", function (t) {
              var r = e.props.day,
                a = ve.default(t, 6);
              return Vt(t, r) || Vt(a, r);
            }),
            vt(bt(e), "renderWeeks", function () {
              for (
                var t = [],
                  r = e.props.fixedHeight,
                  a = 0,
                  n = !1,
                  o = Bt(
                    Kt(e.props.day),
                    e.props.locale,
                    e.props.calendarStartDay
                  );
                t.push(
                  de.default.createElement(Fr, {
                    ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                    chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a,
                    day: o,
                    month: Ye.default(e.props.day),
                    onDayClick: e.handleDayClick,
                    onDayMouseEnter: e.handleDayMouseEnter,
                    onWeekSelect: e.props.onWeekSelect,
                    formatWeekNumber: e.props.formatWeekNumber,
                    locale: e.props.locale,
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    includeDates: e.props.includeDates,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    showWeekNumber: e.props.showWeekNumbers,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    setOpen: e.props.setOpen,
                    shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    renderDayContents: e.props.renderDayContents,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    calendarStartDay: e.props.calendarStartDay,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                  })
                ),
                  !n;

              ) {
                a++, (o = De.default(o, 1));
                var s = r && a >= 6,
                  i = !r && !e.isWeekInMonth(o);
                if (s || i) {
                  if (!e.props.peekNextMonth) break;
                  n = !0;
                }
              }
              return t;
            }),
            vt(bt(e), "onMonthClick", function (t, r) {
              e.handleDayClick(Kt(qe.default(e.props.day, r)), t);
            }),
            vt(bt(e), "handleMonthNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
            }),
            vt(bt(e), "onMonthKeyDown", function (t, r) {
              var a = t.key;
              if (!e.props.disabledKeyboardNavigation)
                switch (a) {
                  case "Enter":
                    e.onMonthClick(t, r),
                      e.props.setPreSelection(e.props.selected);
                    break;
                  case "ArrowRight":
                    e.handleMonthNavigation(
                      11 === r ? 0 : r + 1,
                      we.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    e.handleMonthNavigation(
                      0 === r ? 11 : r - 1,
                      Ce.default(e.props.preSelection, 1)
                    );
                }
            }),
            vt(bt(e), "onQuarterClick", function (t, r) {
              e.handleDayClick(Ht(Ae.default(e.props.day, r)), t);
            }),
            vt(bt(e), "getMonthClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.preSelection,
                p = r.monthClassName,
                l = p ? p(a) : void 0;
              return ce.default(
                "react-datepicker__month-text",
                "react-datepicker__month-".concat(t),
                l,
                {
                  "react-datepicker__month--disabled": nr(
                    qe.default(a, t),
                    e.props
                  ),
                  "react-datepicker__month--selected":
                    Ye.default(a) === t && Te.default(a) === Te.default(s),
                  "react-datepicker__month-text--keyboard-selected":
                    Ye.default(i) === t,
                  "react-datepicker__month--in-range": or(n, o, t, a),
                  "react-datepicker__month--range-start":
                    e.isRangeStartMonth(t),
                  "react-datepicker__month--range-end": e.isRangeEndMonth(t),
                }
              );
            }),
            vt(bt(e), "getTabIndex", function (t) {
              var r = Ye.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            vt(bt(e), "getAriaLabel", function (t) {
              var r = e.props,
                a = r.ariaLabelPrefix,
                n = void 0 === a ? "Choose" : a,
                o = r.disabledDayAriaLabelPrefix,
                s = void 0 === o ? "Not available" : o,
                i = r.day,
                p = qe.default(i, t),
                l = e.isDisabled(p) || e.isExcluded(p) ? s : n;
              return "".concat(l, " ").concat(Lt(p, "MMMM yyyy"));
            }),
            vt(bt(e), "getQuarterClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected;
              return ce.default(
                "react-datepicker__quarter-text",
                "react-datepicker__quarter-".concat(t),
                {
                  "react-datepicker__quarter--disabled": sr(
                    Ae.default(a, t),
                    e.props
                  ),
                  "react-datepicker__quarter--selected":
                    xe.default(a) === t && Te.default(a) === Te.default(s),
                  "react-datepicker__quarter--in-range": pr(n, o, t, a),
                  "react-datepicker__quarter--range-start":
                    e.isRangeStartQuarter(t),
                  "react-datepicker__quarter--range-end":
                    e.isRangeEndQuarter(t),
                }
              );
            }),
            vt(bt(e), "renderMonths", function () {
              var t = e.props,
                r = t.showFullMonthYearPicker,
                a = t.showTwoColumnMonthYearPicker,
                n = t.showFourColumnMonthYearPicker,
                o = t.locale;
              return (
                n
                  ? [
                      [0, 1, 2, 3],
                      [4, 5, 6, 7],
                      [8, 9, 10, 11],
                    ]
                  : a
                  ? [
                      [0, 1],
                      [2, 3],
                      [4, 5],
                      [6, 7],
                      [8, 9],
                      [10, 11],
                    ]
                  : [
                      [0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [9, 10, 11],
                    ]
              ).map(function (t, a) {
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: a },
                  t.map(function (t, a) {
                    return de.default.createElement(
                      "div",
                      {
                        ref: e.MONTH_REFS[t],
                        key: a,
                        onClick: function (r) {
                          e.onMonthClick(r, t);
                        },
                        onKeyDown: function (r) {
                          e.onMonthKeyDown(r, t);
                        },
                        tabIndex: e.getTabIndex(t),
                        className: e.getMonthClassNames(t),
                        role: "button",
                        "aria-label": e.getAriaLabel(t),
                      },
                      r ? Zt(t, o) : er(t, o)
                    );
                  })
                );
              });
            }),
            vt(bt(e), "renderQuarters", function () {
              return de.default.createElement(
                "div",
                { className: "react-datepicker__quarter-wrapper" },
                [1, 2, 3, 4].map(function (t, r) {
                  return de.default.createElement(
                    "div",
                    {
                      key: r,
                      onClick: function (r) {
                        e.onQuarterClick(r, t);
                      },
                      className: e.getQuarterClassNames(t),
                    },
                    tr(t, e.props.locale)
                  );
                })
              );
            }),
            vt(bt(e), "getClassNames", function () {
              var t = e.props;
              t.day;
              var r = t.selectingDate,
                a = t.selectsStart,
                n = t.selectsEnd,
                o = t.showMonthYearPicker,
                s = t.showQuarterYearPicker;
              return ce.default(
                "react-datepicker__month",
                { "react-datepicker__month--selecting-range": r && (a || n) },
                { "react-datepicker__monthPicker": o },
                { "react-datepicker__quarterPicker": s }
              );
            }),
            e
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.showMonthYearPicker,
                  r = e.showQuarterYearPicker,
                  a = e.day,
                  n = e.ariaLabelPrefix,
                  o = void 0 === n ? "month " : n;
                return de.default.createElement(
                  "div",
                  {
                    className: this.getClassNames(),
                    onMouseLeave: this.handleMouseLeave,
                    "aria-label": "".concat(o, " ").concat(Lt(a, "yyyy-MM")),
                  },
                  t
                    ? this.renderMonths()
                    : r
                    ? this.renderQuarters()
                    : this.renderWeeks()
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      qr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          var e;
          ht(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            vt(bt((e = t.call.apply(t, [this].concat(n)))), "state", {
              height: null,
            }),
            vt(bt(e), "handleClick", function (t) {
              ((e.props.minTime || e.props.maxTime) && ur(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  cr(t, e.props)) ||
                e.props.onChange(t);
            }),
            vt(bt(e), "liClasses", function (t, r, a) {
              var n = [
                "react-datepicker__time-list-item",
                e.props.timeClassName ? e.props.timeClassName(t, r, a) : void 0,
              ];
              return (
                e.props.selected &&
                  r === Pe.default(t) &&
                  a === Me.default(t) &&
                  n.push("react-datepicker__time-list-item--selected"),
                (((e.props.minTime || e.props.maxTime) && ur(t, e.props)) ||
                  ((e.props.excludeTimes ||
                    e.props.includeTimes ||
                    e.props.filterTime) &&
                    cr(t, e.props))) &&
                  n.push("react-datepicker__time-list-item--disabled"),
                e.props.injectTimes &&
                  (60 * Pe.default(t) + Me.default(t)) % e.props.intervals !=
                    0 &&
                  n.push("react-datepicker__time-list-item--injected"),
                n.join(" ")
              );
            }),
            vt(bt(e), "handleOnKeyDown", function (t, r) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                "Enter" === t.key && e.handleClick(r),
                e.props.handleOnKeyDown(t);
            }),
            vt(bt(e), "renderTimes", function () {
              for (
                var t = [],
                  r = e.props.format ? e.props.format : "p",
                  a = e.props.intervals,
                  n = Wt(xt(e.props.selected)),
                  o = 1440 / a,
                  s =
                    e.props.injectTimes &&
                    e.props.injectTimes.sort(function (e, t) {
                      return e - t;
                    }),
                  i = e.props.selected || e.props.openToDate || xt(),
                  p = Pe.default(i),
                  l = Me.default(i),
                  d = Re.default(Fe.default(n, l), p),
                  c = 0;
                c < o;
                c++
              ) {
                var u = me.default(n, c * a);
                if ((t.push(u), s)) {
                  var f = kr(n, u, c, a, s);
                  t = t.concat(f);
                }
              }
              return t.map(function (t, a) {
                return de.default.createElement(
                  "li",
                  {
                    key: a,
                    onClick: e.handleClick.bind(bt(e), t),
                    className: e.liClasses(t, p, l),
                    ref: function (r) {
                      (nt.default(t, d) || zt(t, d)) && (e.centerLi = r);
                    },
                    onKeyDown: function (r) {
                      e.handleOnKeyDown(r, t);
                    },
                    tabIndex: "0",
                  },
                  Lt(t, r, e.props.locale)
                );
              });
            }),
            e
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  (this.list.scrollTop = r.calcCenterPosition(
                    this.props.monthRef
                      ? this.props.monthRef.clientHeight -
                          this.header.clientHeight
                      : this.list.clientHeight,
                    this.centerLi
                  )),
                    this.props.monthRef &&
                      this.header &&
                      this.setState({
                        height:
                          this.props.monthRef.clientHeight -
                          this.header.clientHeight,
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.height;
                  return de.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__time-container ".concat(
                        this.props.todayButton
                          ? "react-datepicker__time-container--with-today-button"
                          : ""
                      ),
                    },
                    de.default.createElement(
                      "div",
                      {
                        className:
                          "react-datepicker__header react-datepicker__header--time ".concat(
                            this.props.showTimeSelectOnly
                              ? "react-datepicker__header--time--only"
                              : ""
                          ),
                        ref: function (t) {
                          e.header = t;
                        },
                      },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker-time__header" },
                        this.props.timeCaption
                      )
                    ),
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker__time" },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker__time-box" },
                        de.default.createElement(
                          "ul",
                          {
                            className: "react-datepicker__time-list",
                            ref: function (t) {
                              e.list = t;
                            },
                            style: t ? { height: t } : {},
                            tabIndex: "0",
                          },
                          this.renderTimes()
                        )
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    intervals: 30,
                    onTimeChange: function () {},
                    todayButton: null,
                    timeCaption: "Time",
                  };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component);
    vt(qr, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    });
    var Ar = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "handleYearClick", function (e, t) {
              a.props.onDayClick && a.props.onDayClick(e, t);
            }),
            vt(bt(a), "isSameDay", function (e, t) {
              return $t(e, t);
            }),
            vt(bt(a), "isKeyboardSelected", function (e) {
              var t = jt(We.default(a.props.date, e));
              return (
                !a.props.disabledKeyboardNavigation &&
                !a.props.inline &&
                !$t(t, jt(a.props.selected)) &&
                $t(t, jt(a.props.preSelection))
              );
            }),
            vt(bt(a), "onYearClick", function (e, t) {
              var r = a.props.date;
              a.handleYearClick(jt(We.default(r, t)), e);
            }),
            vt(bt(a), "getYearClassNames", function (e) {
              var t = a.props,
                r = t.minDate,
                n = t.maxDate,
                o = t.selected;
              return ce.default("react-datepicker__year-text", {
                "react-datepicker__year-text--selected": e === Te.default(o),
                "react-datepicker__year-text--disabled":
                  (r || n) && ir(e, a.props),
                "react-datepicker__year-text--keyboard-selected":
                  a.isKeyboardSelected(e),
                "react-datepicker__year-text--today": e === Te.default(xt()),
              });
            }),
            a
          );
        }
        return (
          yt(r, [
            {
              key: "render",
              value: function () {
                for (
                  var e = this,
                    t = [],
                    r = this.props,
                    a = br(r.date, r.yearItemNumber),
                    n = a.startPeriod,
                    o = a.endPeriod,
                    s = function (r) {
                      t.push(
                        de.default.createElement(
                          "div",
                          {
                            onClick: function (t) {
                              e.onYearClick(t, r);
                            },
                            className: e.getYearClassNames(r),
                            key: r,
                          },
                          r
                        )
                      );
                    },
                    i = n;
                  i <= o;
                  i++
                )
                  s(i);
                return de.default.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  de.default.createElement(
                    "div",
                    { className: "react-datepicker__year-wrapper" },
                    t
                  )
                );
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Wr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "onTimeChange", function (e) {
              a.setState({ time: e });
              var t = new Date();
              t.setHours(e.split(":")[0]),
                t.setMinutes(e.split(":")[1]),
                a.props.onChange(t);
            }),
            vt(bt(a), "renderTimeInput", function () {
              var e = a.state.time,
                t = a.props,
                r = t.date,
                n = t.timeString,
                o = t.customTimeInput;
              return o
                ? de.default.cloneElement(o, {
                    date: r,
                    value: e,
                    onChange: a.onTimeChange,
                  })
                : de.default.createElement("input", {
                    type: "time",
                    className: "react-datepicker-time__input",
                    placeholder: "Time",
                    name: "time-input",
                    required: !0,
                    value: e,
                    onChange: function (e) {
                      a.onTimeChange(e.target.value || n);
                    },
                  });
            }),
            (a.state = { time: a.props.timeString }),
            a
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return de.default.createElement(
                    "div",
                    { className: "react-datepicker__input-time-container" },
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker-time__caption" },
                      this.props.timeInputLabel
                    ),
                    de.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input-container" },
                      de.default.createElement(
                        "div",
                        { className: "react-datepicker-time__input" },
                        this.renderTimeInput()
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return e.timeString !== t.time
                    ? { time: e.timeString }
                    : null;
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component);
    function Br(e) {
      var t = e.className,
        r = e.children,
        a = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return de.default.createElement(
        "div",
        { className: t },
        a &&
          de.default.createElement(
            "div",
            Dt({ className: "react-datepicker__triangle" }, o)
          ),
        r
      );
    }
    var Kr = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      jr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "handleClickOutside", function (e) {
              a.props.onClickOutside(e);
            }),
            vt(bt(a), "setClickOutsideRef", function () {
              return a.containerRef.current;
            }),
            vt(bt(a), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return Kr.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && a.props.onDropdownFocus();
            }),
            vt(bt(a), "getDateInView", function () {
              var e = a.props,
                t = e.preSelection,
                r = e.selected,
                n = e.openToDate,
                o = vr(a.props),
                s = Dr(a.props),
                i = xt(),
                p = n || r || t;
              return (
                p || (o && nt.default(i, o) ? o : s && at.default(i, s) ? s : i)
              );
            }),
            vt(bt(a), "increaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: we.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "decreaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: Ce.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "handleDayClick", function (e, t, r) {
              a.props.onSelect(e, t, r),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            vt(bt(a), "handleDayMouseEnter", function (e) {
              a.setState({ selectingDate: e }),
                a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
            }),
            vt(bt(a), "handleMonthMouseLeave", function () {
              a.setState({ selectingDate: null }),
                a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
            }),
            vt(bt(a), "handleYearChange", function (e) {
              a.props.onYearChange && a.props.onYearChange(e),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            vt(bt(a), "handleMonthChange", function (e) {
              a.props.onMonthChange && a.props.onMonthChange(e),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            vt(bt(a), "handleMonthYearChange", function (e) {
              a.handleYearChange(e), a.handleMonthChange(e);
            }),
            vt(bt(a), "changeYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: We.default(r, e) };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "changeMonth", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: qe.default(r, e) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "changeMonthYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return {
                    date: We.default(
                      qe.default(r, Ye.default(e)),
                      Te.default(e)
                    ),
                  };
                },
                function () {
                  return a.handleMonthYearChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "header", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = Bt(e, a.props.locale, a.props.calendarStartDay),
                r = [];
              return (
                a.props.showWeekNumbers &&
                  r.push(
                    de.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      a.props.weekLabel || "#"
                    )
                  ),
                r.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                    var r = ve.default(t, e),
                      n = a.formatWeekday(r, a.props.locale),
                      o = a.props.weekDayClassName
                        ? a.props.weekDayClassName(r)
                        : void 0;
                    return de.default.createElement(
                      "div",
                      {
                        key: e,
                        className: ce.default("react-datepicker__day-name", o),
                      },
                      n
                    );
                  })
                )
              );
            }),
            vt(bt(a), "formatWeekday", function (e, t) {
              return a.props.formatWeekDay
                ? (function (e, t, r) {
                    return t(Lt(e, "EEEE", r));
                  })(e, a.props.formatWeekDay, t)
                : a.props.useWeekdaysShort
                ? (function (e, t) {
                    return Lt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return Lt(e, "EEEEEE", t);
                  })(e, t);
            }),
            vt(bt(a), "decreaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Se.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "renderPreviousButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = mr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.minDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Ot : a,
                        o = br(jt(Se.default(e, n)), n).endPeriod,
                        s = r && Te.default(r);
                      return (s && s > o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = fr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    r = a.decreaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.decreaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled"
                      ),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.previousMonthAriaLabel,
                    i = void 0 === s ? "Previous Month" : s,
                    p = o.previousYearAriaLabel,
                    l = void 0 === p ? "Previous Year" : p;
                  return de.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      "aria-label": n ? l : i,
                    },
                    de.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? a.props.previousYearButtonLabel
                        : a.props.previousMonthButtonLabel
                    )
                  );
                }
              }
            }),
            vt(bt(a), "increaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: ke.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            vt(bt(a), "renderNextButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = yr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.maxDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Ot : a,
                        o = br(ke.default(e, n), n).startPeriod,
                        s = r && Te.default(r);
                      return (s && s < o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = hr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  a.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    a.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button"
                      );
                  var r = a.increaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.increaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.nextMonthAriaLabel,
                    i = void 0 === s ? "Next Month" : s,
                    p = o.nextYearAriaLabel,
                    l = void 0 === p ? "Next Year" : p;
                  return de.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      "aria-label": n ? l : i,
                    },
                    de.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? a.props.nextYearButtonLabel
                        : a.props.nextMonthButtonLabel
                    )
                  );
                }
              }
            }),
            vt(bt(a), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = ["react-datepicker__current-month"];
              return (
                a.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                a.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                a.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown"
                  ),
                de.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  Lt(e, a.props.dateFormat, a.props.locale)
                )
              );
            }),
            vt(bt(a), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showYearDropdown && !e)
                return de.default.createElement(Mr, {
                  adjustDateOnChange: a.props.adjustDateOnChange,
                  date: a.state.date,
                  onSelect: a.props.onSelect,
                  setOpen: a.props.setOpen,
                  dropdownMode: a.props.dropdownMode,
                  onChange: a.changeYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  year: Te.default(a.state.date),
                  scrollableYearDropdown: a.props.scrollableYearDropdown,
                  yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                });
            }),
            vt(bt(a), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthDropdown && !e)
                return de.default.createElement(Nr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  onChange: a.changeMonth,
                  month: Ye.default(a.state.date),
                  useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                });
            }),
            vt(bt(a), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthYearDropdown && !e)
                return de.default.createElement(Tr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  dateFormat: a.props.dateFormat,
                  onChange: a.changeMonthYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  date: a.state.date,
                  scrollableMonthYearDropdown:
                    a.props.scrollableMonthYearDropdown,
                });
            }),
            vt(bt(a), "renderTodayButton", function () {
              if (a.props.todayButton && !a.props.showTimeSelectOnly)
                return de.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return a.props.onSelect(Ve.default(xt()), e);
                    },
                  },
                  a.props.todayButton
                );
            }),
            vt(bt(a), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                r = e.i;
              return de.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    a.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : ""
                  ),
                },
                a.renderCurrentMonth(t),
                de.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        a.props.dropdownMode
                      ),
                    onFocus: a.handleDropdownFocus,
                  },
                  a.renderMonthDropdown(0 !== r),
                  a.renderMonthYearDropdown(0 !== r),
                  a.renderYearDropdown(0 !== r)
                ),
                de.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  a.header(t)
                )
              );
            }),
            vt(bt(a), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                r = e.i;
              if (
                (a.props.showTimeSelect && !a.state.monthContainer) ||
                a.props.showTimeSelectOnly
              )
                return null;
              var n = fr(a.state.date, a.props),
                o = hr(a.state.date, a.props),
                s = mr(a.state.date, a.props),
                i = yr(a.state.date, a.props),
                p =
                  !a.props.showMonthYearPicker &&
                  !a.props.showQuarterYearPicker &&
                  !a.props.showYearPicker;
              return de.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: a.props.onDropdownFocus,
                },
                a.props.renderCustomHeader(
                  ut(
                    ut({}, a.state),
                    {},
                    {
                      customHeaderCount: r,
                      monthDate: t,
                      changeMonth: a.changeMonth,
                      changeYear: a.changeYear,
                      decreaseMonth: a.decreaseMonth,
                      increaseMonth: a.increaseMonth,
                      decreaseYear: a.decreaseYear,
                      increaseYear: a.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: i,
                    }
                  )
                ),
                p &&
                  de.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    a.header(t)
                  )
              );
            }),
            vt(bt(a), "renderYearHeader", function () {
              var e = a.state.date,
                t = a.props,
                r = t.showYearPicker,
                n = br(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return de.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                r ? "".concat(o, " - ").concat(s) : Te.default(e)
              );
            }),
            vt(bt(a), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== a.props.renderCustomHeader:
                  return a.renderCustomHeader(e);
                case a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker:
                  return a.renderYearHeader(e);
                default:
                  return a.renderDefaultHeader(e);
              }
            }),
            vt(bt(a), "renderMonths", function () {
              if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
                for (
                  var e = [],
                    t = a.props.showPreviousMonths
                      ? a.props.monthsShown - 1
                      : 0,
                    r = Ce.default(a.state.date, t),
                    n = 0;
                  n < a.props.monthsShown;
                  ++n
                ) {
                  var o = n - a.props.monthSelectedIn,
                    s = we.default(r, o),
                    i = "month-".concat(n),
                    p = n < a.props.monthsShown - 1,
                    l = n > 0;
                  e.push(
                    de.default.createElement(
                      "div",
                      {
                        key: i,
                        ref: function (e) {
                          a.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      a.renderHeader({ monthDate: s, i: n }),
                      de.default.createElement(Rr, {
                        chooseDayAriaLabelPrefix:
                          a.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          a.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                        onChange: a.changeMonthYear,
                        day: s,
                        dayClassName: a.props.dayClassName,
                        calendarStartDay: a.props.calendarStartDay,
                        monthClassName: a.props.monthClassName,
                        onDayClick: a.handleDayClick,
                        handleOnKeyDown: a.props.handleOnKeyDown,
                        onDayMouseEnter: a.handleDayMouseEnter,
                        onMouseLeave: a.handleMonthMouseLeave,
                        onWeekSelect: a.props.onWeekSelect,
                        orderInDisplay: n,
                        formatWeekNumber: a.props.formatWeekNumber,
                        locale: a.props.locale,
                        minDate: a.props.minDate,
                        maxDate: a.props.maxDate,
                        excludeDates: a.props.excludeDates,
                        highlightDates: a.props.highlightDates,
                        selectingDate: a.state.selectingDate,
                        includeDates: a.props.includeDates,
                        inline: a.props.inline,
                        shouldFocusDayInline: a.props.shouldFocusDayInline,
                        fixedHeight: a.props.fixedHeight,
                        filterDate: a.props.filterDate,
                        preSelection: a.props.preSelection,
                        setPreSelection: a.props.setPreSelection,
                        selected: a.props.selected,
                        selectsStart: a.props.selectsStart,
                        selectsEnd: a.props.selectsEnd,
                        selectsRange: a.props.selectsRange,
                        showWeekNumbers: a.props.showWeekNumbers,
                        startDate: a.props.startDate,
                        endDate: a.props.endDate,
                        peekNextMonth: a.props.peekNextMonth,
                        setOpen: a.props.setOpen,
                        shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                        renderDayContents: a.props.renderDayContents,
                        disabledKeyboardNavigation:
                          a.props.disabledKeyboardNavigation,
                        showMonthYearPicker: a.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          a.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          a.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          a.props.showFourColumnMonthYearPicker,
                        showYearPicker: a.props.showYearPicker,
                        showQuarterYearPicker: a.props.showQuarterYearPicker,
                        isInputFocused: a.props.isInputFocused,
                        containerRef: a.containerRef,
                        monthShowsDuplicateDaysEnd: p,
                        monthShowsDuplicateDaysStart: l,
                      })
                    )
                  );
                }
                return e;
              }
            }),
            vt(bt(a), "renderYears", function () {
              if (!a.props.showTimeSelectOnly)
                return a.props.showYearPicker
                  ? de.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      a.renderHeader(),
                      de.default.createElement(
                        Ar,
                        Dt(
                          { onDayClick: a.handleDayClick, date: a.state.date },
                          a.props
                        )
                      )
                    )
                  : void 0;
            }),
            vt(bt(a), "renderTimeSection", function () {
              if (
                a.props.showTimeSelect &&
                (a.state.monthContainer || a.props.showTimeSelectOnly)
              )
                return de.default.createElement(qr, {
                  selected: a.props.selected,
                  openToDate: a.props.openToDate,
                  onChange: a.props.onTimeChange,
                  timeClassName: a.props.timeClassName,
                  format: a.props.timeFormat,
                  includeTimes: a.props.includeTimes,
                  intervals: a.props.timeIntervals,
                  minTime: a.props.minTime,
                  maxTime: a.props.maxTime,
                  excludeTimes: a.props.excludeTimes,
                  filterTime: a.props.filterTime,
                  timeCaption: a.props.timeCaption,
                  todayButton: a.props.todayButton,
                  showMonthDropdown: a.props.showMonthDropdown,
                  showMonthYearDropdown: a.props.showMonthYearDropdown,
                  showYearDropdown: a.props.showYearDropdown,
                  withPortal: a.props.withPortal,
                  monthRef: a.state.monthContainer,
                  injectTimes: a.props.injectTimes,
                  locale: a.props.locale,
                  handleOnKeyDown: a.props.handleTimeKeyDown,
                  showTimeSelectOnly: a.props.showTimeSelectOnly,
                });
            }),
            vt(bt(a), "renderInputTimeSection", function () {
              var e = new Date(a.props.selected),
                t =
                  It(e) && Boolean(a.props.selected)
                    ? ""
                        .concat(gr(e.getHours()), ":")
                        .concat(gr(e.getMinutes()))
                    : "";
              if (a.props.showTimeInput)
                return de.default.createElement(Wr, {
                  date: e,
                  timeString: t,
                  timeInputLabel: a.props.timeInputLabel,
                  onChange: a.props.onTimeChange,
                  customTimeInput: a.props.customTimeInput,
                });
            }),
            (a.containerRef = de.default.createRef()),
            (a.state = {
              date: a.getDateInView(),
              selectingDate: null,
              monthContainer: null,
            }),
            a
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.preSelection &&
                  !$t(this.props.preSelection, e.preSelection)
                    ? this.setState({ date: this.props.preSelection })
                    : this.props.openToDate &&
                      !$t(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || Br;
                  return de.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    de.default.createElement(
                      e,
                      {
                        className: ce.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          }
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.props.children
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    monthSelectedIn: 0,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: Ot,
                  };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component),
      Hr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            ((a = t.call(this, e)).el = document.createElement("div")),
            a
          );
        }
        return (
          yt(r, [
            {
              key: "componentDidMount",
              value: function () {
                (this.portalRoot = document.getElementById(
                  this.props.portalId
                )),
                  this.portalRoot ||
                    ((this.portalRoot = document.createElement("div")),
                    this.portalRoot.setAttribute("id", this.props.portalId),
                    document.body.appendChild(this.portalRoot)),
                  this.portalRoot.appendChild(this.el);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.portalRoot.removeChild(this.el);
              },
            },
            {
              key: "render",
              value: function () {
                return dt.default.createPortal(this.props.children, this.el);
              },
            },
          ]),
          r
        );
      })(de.default.Component),
      Qr = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      Vr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  a.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea"
                  ),
                  1,
                  -1
                )
                .filter(Qr);
            }),
            vt(bt(a), "handleFocusStart", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[t.length - 1].focus();
            }),
            vt(bt(a), "handleFocusEnd", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[0].focus();
            }),
            (a.tabLoopRef = de.default.createRef()),
            a
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? de.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        de.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        de.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        })
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component),
      Ur = (function (e) {
        wt(r, e);
        var t = St(r);
        function r() {
          return ht(this, r), t.apply(this, arguments);
        }
        return (
          yt(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    r = t.className,
                    a = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    i = t.popperPlacement,
                    p = t.popperProps,
                    l = t.targetComponent,
                    d = t.enableTabLoop,
                    c = t.popperOnKeyDown,
                    u = t.portalId;
                  if (!n) {
                    var f = ce.default("react-datepicker-popper", r);
                    e = de.default.createElement(
                      pe.Popper,
                      Dt({ modifiers: s, placement: i }, p),
                      function (e) {
                        var t = e.ref,
                          r = e.style,
                          a = e.placement,
                          n = e.arrowProps;
                        return de.default.createElement(
                          Vr,
                          { enableTabLoop: d },
                          de.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: r,
                              className: f,
                              "data-placement": a,
                              onKeyDown: c,
                            },
                            de.default.cloneElement(o, { arrowProps: n })
                          )
                        );
                      }
                    );
                  }
                  this.props.popperContainer &&
                    (e = de.default.createElement(
                      this.props.popperContainer,
                      {},
                      e
                    )),
                    u &&
                      !n &&
                      (e = de.default.createElement(Hr, { portalId: u }, e));
                  var h = ce.default("react-datepicker-wrapper", a);
                  return de.default.createElement(
                    pe.Manager,
                    { className: "react-datepicker-manager" },
                    de.default.createElement(pe.Reference, null, function (e) {
                      var t = e.ref;
                      return de.default.createElement(
                        "div",
                        { ref: t, className: h },
                        l
                      );
                    }),
                    e
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component),
      $r = "react-datepicker-ignore-onclickoutside",
      zr = lt.default(jr);
    var Gr = "Date input not valid.",
      Jr = (function (e) {
        wt(r, e);
        var t = St(r);
        function r(e) {
          var a;
          return (
            ht(this, r),
            vt(bt((a = t.call(this, e))), "getPreSelection", function () {
              return a.props.openToDate
                ? a.props.openToDate
                : a.props.selectsEnd && a.props.startDate
                ? a.props.startDate
                : a.props.selectsStart && a.props.endDate
                ? a.props.endDate
                : xt();
            }),
            vt(bt(a), "calcInitialState", function () {
              var e,
                t = a.getPreSelection(),
                r = vr(a.props),
                n = Dr(a.props),
                o =
                  r && nt.default(t, Ve.default(r))
                    ? r
                    : n && at.default(t, Je.default(n))
                    ? n
                    : t;
              return {
                open: a.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (e = a.props.selectsRange
                      ? a.props.startDate
                      : a.props.selected) && void 0 !== e
                    ? e
                    : o,
                highlightDates: wr(a.props.highlightDates),
                focused: !1,
                shouldFocusDayInline: !1,
              };
            }),
            vt(bt(a), "clearPreventFocusTimeout", function () {
              a.preventFocusTimeout && clearTimeout(a.preventFocusTimeout);
            }),
            vt(bt(a), "setFocus", function () {
              a.input && a.input.focus && a.input.focus({ preventScroll: !0 });
            }),
            vt(bt(a), "setBlur", function () {
              a.input && a.input.blur && a.input.blur(), a.cancelFocusInput();
            }),
            vt(bt(a), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              a.setState(
                {
                  open: e,
                  preSelection:
                    e && a.state.open
                      ? a.state.preSelection
                      : a.calcInitialState().preSelection,
                  lastPreSelectChange: Zr,
                },
                function () {
                  e ||
                    a.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && a.setBlur(), a.setState({ inputValue: null });
                      }
                    );
                }
              );
            }),
            vt(bt(a), "inputOk", function () {
              return ue.default(a.state.preSelection);
            }),
            vt(bt(a), "isCalendarOpen", function () {
              return void 0 === a.props.open
                ? a.state.open && !a.props.disabled && !a.props.readOnly
                : a.props.open;
            }),
            vt(bt(a), "handleFocus", function (e) {
              a.state.preventFocus ||
                (a.props.onFocus(e),
                a.props.preventOpenOnFocus ||
                  a.props.readOnly ||
                  a.setOpen(!0)),
                a.setState({ focused: !0 });
            }),
            vt(bt(a), "cancelFocusInput", function () {
              clearTimeout(a.inputFocusTimeout), (a.inputFocusTimeout = null);
            }),
            vt(bt(a), "deferFocusInput", function () {
              a.cancelFocusInput(),
                (a.inputFocusTimeout = setTimeout(function () {
                  return a.setFocus();
                }, 1));
            }),
            vt(bt(a), "handleDropdownFocus", function () {
              a.cancelFocusInput();
            }),
            vt(bt(a), "handleBlur", function (e) {
              (!a.state.open || a.props.withPortal || a.props.showTimeInput) &&
                a.props.onBlur(e),
                a.setState({ focused: !1 });
            }),
            vt(bt(a), "handleCalendarClickOutside", function (e) {
              a.props.inline || a.setOpen(!1),
                a.props.onClickOutside(e),
                a.props.withPortal && e.preventDefault();
            }),
            vt(bt(a), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var n = t[0];
              if (
                !a.props.onChangeRaw ||
                (a.props.onChangeRaw.apply(bt(a), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                a.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: Xr,
                });
                var o = Tt(
                  n.target.value,
                  a.props.dateFormat,
                  a.props.locale,
                  a.props.strictParsing,
                  a.props.minDate
                );
                (!o && n.target.value) || a.setSelected(o, n, !0);
              }
            }),
            vt(bt(a), "handleSelect", function (e, t, r) {
              if (
                (a.setState({ preventFocus: !0 }, function () {
                  return (
                    (a.preventFocusTimeout = setTimeout(function () {
                      return a.setState({ preventFocus: !1 });
                    }, 50)),
                    a.preventFocusTimeout
                  );
                }),
                a.props.onChangeRaw && a.props.onChangeRaw(t),
                a.setSelected(e, t, !1, r),
                !a.props.shouldCloseOnSelect || a.props.showTimeSelect)
              )
                a.setPreSelection(e);
              else if (!a.props.inline) {
                a.props.selectsRange || a.setOpen(!1);
                var n = a.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || nt.default(e, o) || a.setOpen(!1);
              }
            }),
            vt(bt(a), "setSelected", function (e, t, r, n) {
              var o = e;
              if (null === o || !rr(o, a.props)) {
                var s = a.props,
                  i = s.onChange,
                  p = s.selectsRange,
                  l = s.startDate,
                  d = s.endDate;
                if (!zt(a.props.selected, o) || a.props.allowSameDay || p)
                  if (
                    (null !== o &&
                      (!a.props.selected ||
                        (r &&
                          (a.props.showTimeSelect ||
                            a.props.showTimeSelectOnly ||
                            a.props.showTimeInput)) ||
                        (o = Rt(o, {
                          hour: Pe.default(a.props.selected),
                          minute: Me.default(a.props.selected),
                          second: _e.default(a.props.selected),
                        })),
                      a.props.inline || a.setState({ preSelection: o }),
                      a.props.focusSelectedMonth ||
                        a.setState({ monthSelectedIn: n })),
                    p)
                  ) {
                    var c = l && !d,
                      u = l && d;
                    !l && !d
                      ? i([o, null], t)
                      : c &&
                        (nt.default(o, l) ? i([o, null], t) : i([l, o], t)),
                      u && i([o, null], t);
                  } else i(o, t);
                r || (a.props.onSelect(o, t), a.setState({ inputValue: null }));
              }
            }),
            vt(bt(a), "setPreSelection", function (e) {
              var t = void 0 !== a.props.minDate,
                r = void 0 !== a.props.maxDate,
                n = !0;
              if (e) {
                var o = Ve.default(e);
                if (t && r) n = Gt(e, a.props.minDate, a.props.maxDate);
                else if (t) {
                  var s = Ve.default(a.props.minDate);
                  n = at.default(e, s) || zt(o, s);
                } else if (r) {
                  var i = Je.default(a.props.maxDate);
                  n = nt.default(e, i) || zt(o, i);
                }
              }
              n && a.setState({ preSelection: e });
            }),
            vt(bt(a), "handleTimeChange", function (e) {
              var t = Rt(
                a.props.selected ? a.props.selected : a.getPreSelection(),
                { hour: Pe.default(e), minute: Me.default(e) }
              );
              a.setState({ preSelection: t }),
                a.props.onChange(t),
                a.props.shouldCloseOnSelect && a.setOpen(!1),
                a.props.showTimeInput && a.setOpen(!0),
                a.setState({ inputValue: null });
            }),
            vt(bt(a), "onInputClick", function () {
              a.props.disabled || a.props.readOnly || a.setOpen(!0),
                a.props.onInputClick();
            }),
            vt(bt(a), "onInputKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key;
              if (
                a.state.open ||
                a.props.inline ||
                a.props.preventOpenOnFocus
              ) {
                if (a.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var r =
                      a.calendar.componentNode &&
                      a.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]'
                      );
                    return void (r && r.focus({ preventScroll: !0 }));
                  }
                  var n = xt(a.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      a.inputOk() && a.state.lastPreSelectChange === Zr
                        ? (a.handleSelect(n, e),
                          !a.props.shouldCloseOnSelect && a.setPreSelection(n))
                        : a.setOpen(!1))
                    : "Escape" === t && (e.preventDefault(), a.setOpen(!1)),
                    a.inputOk() || a.props.onInputError({ code: 1, msg: Gr });
                }
              } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || a.onInputClick();
            }),
            vt(bt(a), "onDayKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key,
                r = xt(a.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  a.handleSelect(r, e),
                  !a.props.shouldCloseOnSelect && a.setPreSelection(r);
              else if ("Escape" === t)
                e.preventDefault(),
                  a.setOpen(!1),
                  a.inputOk() || a.props.onInputError({ code: 1, msg: Gr });
              else if (!a.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = ge.default(r, 1);
                    break;
                  case "ArrowRight":
                    n = ve.default(r, 1);
                    break;
                  case "ArrowUp":
                    n = be.default(r, 1);
                    break;
                  case "ArrowDown":
                    n = De.default(r, 1);
                    break;
                  case "PageUp":
                    n = Ce.default(r, 1);
                    break;
                  case "PageDown":
                    n = we.default(r, 1);
                    break;
                  case "Home":
                    n = Se.default(r, 1);
                    break;
                  case "End":
                    n = ke.default(r, 1);
                }
                if (!n)
                  return void (
                    a.props.onInputError &&
                    a.props.onInputError({ code: 1, msg: Gr })
                  );
                if (
                  (e.preventDefault(),
                  a.setState({ lastPreSelectChange: Zr }),
                  a.props.adjustDateOnChange && a.setSelected(n),
                  a.setPreSelection(n),
                  a.props.inline)
                ) {
                  var o = Ye.default(r),
                    s = Ye.default(n),
                    i = Te.default(r),
                    p = Te.default(n);
                  o !== s || i !== p
                    ? a.setState({ shouldFocusDayInline: !0 })
                    : a.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            vt(bt(a), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            vt(bt(a), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                a.props.selectsRange
                  ? a.props.onChange([null, null], e)
                  : a.props.onChange(null, e),
                a.setState({ inputValue: null });
            }),
            vt(bt(a), "clear", function () {
              a.onClearClick();
            }),
            vt(bt(a), "onScroll", function (e) {
              "boolean" == typeof a.props.closeOnScroll && a.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  a.setOpen(!1)
                : "function" == typeof a.props.closeOnScroll &&
                  a.props.closeOnScroll(e) &&
                  a.setOpen(!1);
            }),
            vt(bt(a), "renderCalendar", function () {
              return a.props.inline || a.isCalendarOpen()
                ? de.default.createElement(
                    zr,
                    {
                      ref: function (e) {
                        a.calendar = e;
                      },
                      locale: a.props.locale,
                      calendarStartDay: a.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        a.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        a.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                      adjustDateOnChange: a.props.adjustDateOnChange,
                      setOpen: a.setOpen,
                      shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                      dateFormat: a.props.dateFormatCalendar,
                      useWeekdaysShort: a.props.useWeekdaysShort,
                      formatWeekDay: a.props.formatWeekDay,
                      dropdownMode: a.props.dropdownMode,
                      selected: a.props.selected,
                      preSelection: a.state.preSelection,
                      onSelect: a.handleSelect,
                      onWeekSelect: a.props.onWeekSelect,
                      openToDate: a.props.openToDate,
                      minDate: a.props.minDate,
                      maxDate: a.props.maxDate,
                      selectsStart: a.props.selectsStart,
                      selectsEnd: a.props.selectsEnd,
                      selectsRange: a.props.selectsRange,
                      startDate: a.props.startDate,
                      endDate: a.props.endDate,
                      excludeDates: a.props.excludeDates,
                      filterDate: a.props.filterDate,
                      onClickOutside: a.handleCalendarClickOutside,
                      formatWeekNumber: a.props.formatWeekNumber,
                      highlightDates: a.state.highlightDates,
                      includeDates: a.props.includeDates,
                      includeTimes: a.props.includeTimes,
                      injectTimes: a.props.injectTimes,
                      inline: a.props.inline,
                      shouldFocusDayInline: a.state.shouldFocusDayInline,
                      peekNextMonth: a.props.peekNextMonth,
                      showMonthDropdown: a.props.showMonthDropdown,
                      showPreviousMonths: a.props.showPreviousMonths,
                      useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                      showMonthYearDropdown: a.props.showMonthYearDropdown,
                      showWeekNumbers: a.props.showWeekNumbers,
                      showYearDropdown: a.props.showYearDropdown,
                      withPortal: a.props.withPortal,
                      forceShowMonthNavigation:
                        a.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        a.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: a.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        a.props.scrollableMonthYearDropdown,
                      todayButton: a.props.todayButton,
                      weekLabel: a.props.weekLabel,
                      outsideClickIgnoreClass: $r,
                      fixedHeight: a.props.fixedHeight,
                      monthsShown: a.props.monthsShown,
                      monthSelectedIn: a.state.monthSelectedIn,
                      onDropdownFocus: a.handleDropdownFocus,
                      onMonthChange: a.props.onMonthChange,
                      onYearChange: a.props.onYearChange,
                      dayClassName: a.props.dayClassName,
                      weekDayClassName: a.props.weekDayClassName,
                      monthClassName: a.props.monthClassName,
                      timeClassName: a.props.timeClassName,
                      showTimeSelect: a.props.showTimeSelect,
                      showTimeSelectOnly: a.props.showTimeSelectOnly,
                      onTimeChange: a.handleTimeChange,
                      timeFormat: a.props.timeFormat,
                      timeIntervals: a.props.timeIntervals,
                      minTime: a.props.minTime,
                      maxTime: a.props.maxTime,
                      excludeTimes: a.props.excludeTimes,
                      filterTime: a.props.filterTime,
                      timeCaption: a.props.timeCaption,
                      className: a.props.calendarClassName,
                      container: a.props.calendarContainer,
                      yearItemNumber: a.props.yearItemNumber,
                      yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                      previousMonthButtonLabel:
                        a.props.previousMonthButtonLabel,
                      nextMonthButtonLabel: a.props.nextMonthButtonLabel,
                      previousYearButtonLabel: a.props.previousYearButtonLabel,
                      nextYearButtonLabel: a.props.nextYearButtonLabel,
                      timeInputLabel: a.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        a.props.disabledKeyboardNavigation,
                      renderCustomHeader: a.props.renderCustomHeader,
                      popperProps: a.props.popperProps,
                      renderDayContents: a.props.renderDayContents,
                      onDayMouseEnter: a.props.onDayMouseEnter,
                      onMonthMouseLeave: a.props.onMonthMouseLeave,
                      showTimeInput: a.props.showTimeInput,
                      showMonthYearPicker: a.props.showMonthYearPicker,
                      showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        a.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        a.props.showFourColumnMonthYearPicker,
                      showYearPicker: a.props.showYearPicker,
                      showQuarterYearPicker: a.props.showQuarterYearPicker,
                      showPopperArrow: a.props.showPopperArrow,
                      excludeScrollbar: a.props.excludeScrollbar,
                      handleOnKeyDown: a.onDayKeyDown,
                      handleTimeKeyDown: a.props.onKeyDown,
                      isInputFocused: a.state.focused,
                      customTimeInput: a.props.customTimeInput,
                      setPreSelection: a.setPreSelection,
                    },
                    a.props.children
                  )
                : null;
            }),
            vt(bt(a), "renderDateInput", function () {
              var e,
                t = ce.default(a.props.className, vt({}, $r, a.state.open)),
                r =
                  a.props.customInput ||
                  de.default.createElement("input", { type: "text" }),
                n = a.props.customInputRef || "ref",
                o =
                  "string" == typeof a.props.value
                    ? a.props.value
                    : "string" == typeof a.state.inputValue
                    ? a.state.inputValue
                    : a.props.selectsRange
                    ? (function (e, t, r) {
                        if (!e) return "";
                        var a = Ft(e, r),
                          n = t ? Ft(t, r) : "";
                        return "".concat(a, " - ").concat(n);
                      })(a.props.startDate, a.props.endDate, a.props)
                    : Ft(a.props.selected, a.props);
              return de.default.cloneElement(
                r,
                (vt((e = {}), n, function (e) {
                  a.input = e;
                }),
                vt(e, "value", o),
                vt(e, "onBlur", a.handleBlur),
                vt(e, "onChange", a.handleChange),
                vt(e, "onClick", a.onInputClick),
                vt(e, "onFocus", a.handleFocus),
                vt(e, "onKeyDown", a.onInputKeyDown),
                vt(e, "id", a.props.id),
                vt(e, "name", a.props.name),
                vt(e, "autoFocus", a.props.autoFocus),
                vt(e, "placeholder", a.props.placeholderText),
                vt(e, "disabled", a.props.disabled),
                vt(e, "autoComplete", a.props.autoComplete),
                vt(e, "className", ce.default(r.props.className, t)),
                vt(e, "title", a.props.title),
                vt(e, "readOnly", a.props.readOnly),
                vt(e, "required", a.props.required),
                vt(e, "tabIndex", a.props.tabIndex),
                vt(e, "aria-describedby", a.props.ariaDescribedBy),
                vt(e, "aria-invalid", a.props.ariaInvalid),
                vt(e, "aria-labelledby", a.props.ariaLabelledBy),
                vt(e, "aria-required", a.props.ariaRequired),
                e)
              );
            }),
            vt(bt(a), "renderClearButton", function () {
              var e = a.props,
                t = e.isClearable,
                r = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                i = e.clearButtonClassName,
                p = void 0 === i ? "" : i,
                l = e.ariaLabelClose,
                d = void 0 === l ? "Close" : l;
              return !t || (null == r && null == n && null == o)
                ? null
                : de.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(p).trim(),
                    "aria-label": d,
                    onClick: a.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (a.state = a.calcInitialState()),
            a
          );
        }
        return (
          yt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var r, a;
                  e.inline &&
                    ((r = e.selected),
                    (a = this.props.selected),
                    r && a
                      ? Ye.default(r) !== Ye.default(a) ||
                        Te.default(r) !== Te.default(a)
                      : r !== a) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: wr(this.props.highlightDates),
                      }),
                    t.focused ||
                      zt(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  return de.default.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? de.default.createElement(
                          "div",
                          { className: "react-datepicker__portal" },
                          e
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = de.default.createElement(
                          Hr,
                          { portalId: this.props.portalId },
                          t
                        )),
                      de.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t
                      )
                    );
                  }
                  return de.default.createElement(Ur, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Ot,
                    renderDayContents: function (e) {
                      return e;
                    },
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ]
          ),
          r
        );
      })(de.default.Component),
      Xr = "input",
      Zr = "navigate";
    (e.CalendarContainer = Br),
      (e.default = Jr),
      (e.getDefaultLocale = Jt),
      (e.registerLocale = function (e, t) {
        var r = "undefined" != typeof window ? window : global;
        r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : global).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
);
