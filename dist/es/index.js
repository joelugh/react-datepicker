import e from "react";
import "prop-types";
import t from "classnames";
import r from "date-fns/isDate";
import n from "date-fns/isValid";
import o from "date-fns/format";
import a from "date-fns/addMinutes";
import s from "date-fns/addHours";
import p from "date-fns/addDays";
import i from "date-fns/addWeeks";
import c from "date-fns/addMonths";
import l from "date-fns/addYears";
import "date-fns/subMinutes";
import "date-fns/subHours";
import d from "date-fns/subDays";
import u from "date-fns/subWeeks";
import h from "date-fns/subMonths";
import m from "date-fns/subYears";
import f from "date-fns/getSeconds";
import y from "date-fns/getMinutes";
import v from "date-fns/getHours";
import D from "date-fns/getDay";
import w from "date-fns/getDate";
import k from "date-fns/getISOWeek";
import g from "date-fns/getMonth";
import b from "date-fns/getQuarter";
import C from "date-fns/getYear";
import _ from "date-fns/getTime";
import S from "date-fns/setSeconds";
import M from "date-fns/setMinutes";
import P from "date-fns/setHours";
import E from "date-fns/setMonth";
import N from "date-fns/setQuarter";
import O from "date-fns/setYear";
import x from "date-fns/min";
import T from "date-fns/max";
import Y from "date-fns/differenceInCalendarDays";
import I from "date-fns/differenceInCalendarMonths";
import "date-fns/differenceInCalendarWeeks";
import L from "date-fns/differenceInCalendarYears";
import F from "date-fns/startOfDay";
import R from "date-fns/startOfWeek";
import A from "date-fns/startOfMonth";
import W from "date-fns/startOfQuarter";
import B from "date-fns/startOfYear";
import K from "date-fns/endOfDay";
import "date-fns/endOfWeek";
import "date-fns/endOfMonth";
import j from "date-fns/isEqual";
import H from "date-fns/isSameDay";
import Q from "date-fns/isSameMonth";
import V from "date-fns/isSameYear";
import q from "date-fns/isSameQuarter";
import U from "date-fns/isAfter";
import $ from "date-fns/isBefore";
import z from "date-fns/isWithinInterval";
import G from "date-fns/toDate";
import J from "date-fns/parse";
import X from "date-fns/parseISO";
import Z from "react-onclickoutside";
import ee from "react-dom";
import { Popper as te, Manager as re, Reference as ne } from "react-popper";
function oe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? oe(Object(r), !0).forEach(function (t) {
          le(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : oe(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function se(e) {
  return (se =
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
function pe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ie(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function ce(e, t, r) {
  return t && ie(e.prototype, t), r && ie(e, r), e;
}
function le(e, t, r) {
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
function de() {
  return (de =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ue(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && me(e, t);
}
function he(e) {
  return (he = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function me(e, t) {
  return (me =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function fe(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ye(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t) ? fe(e) : t;
}
function ve(e) {
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
      n = he(e);
    if (t) {
      var o = he(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return ye(this, r);
  };
}
function De(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return we(e);
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
      if ("string" == typeof e) return we(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return we(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function we(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ke(e, t) {
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
function ge(e, t) {
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
var be = {
    p: ge,
    P: function (e, t) {
      var r,
        n = e.match(/(P+)(p+)?/),
        o = n[1],
        a = n[2];
      if (!a) return ke(e, t);
      switch (o) {
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
      return r.replace("{{date}}", ke(o, t)).replace("{{time}}", ge(a, t));
    },
  },
  Ce = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function _e(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? X(e)
      : G(e)
    : new Date();
  return Me(t) ? t : null;
}
function Se(e, t, r, n, a) {
  var s = null,
    p = qe(r) || qe(Ve()),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function (t) {
        var r = J(e, t, new Date(), { locale: p });
        n && (i = Me(r, a) && e === o(r, t, { awareOfUnicodeTokens: !0 })),
          Me(r, a) && i && (s = r);
      }),
      s)
    : ((s = J(e, t, new Date(), { locale: p })),
      n
        ? (i = Me(s) && e === o(s, t, { awareOfUnicodeTokens: !0 }))
        : Me(s) ||
          ((t = t
            .match(Ce)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? p
                  ? (0, be[t])(e, p.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (s = J(e, t.slice(0, e.length), new Date())),
          Me(s) || (s = new Date(e))),
      Me(s) && i ? s : null);
}
function Me(e, t) {
  return (t = t || new Date("1/1/1000")), n(e) && U(e, t);
}
function Pe(e, t, r) {
  if ("en" === r) return o(e, t, { awareOfUnicodeTokens: !0 });
  var n = qe(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n && Ve() && qe(Ve()) && (n = qe(Ve())),
    o(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function Ee(e, t) {
  var r = t.dateFormat,
    n = t.locale;
  return (e && Pe(e, Array.isArray(r) ? r[0] : r, n)) || "";
}
function Ne(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    o = t.minute,
    a = void 0 === o ? 0 : o,
    s = t.second;
  return P(M(S(e, void 0 === s ? 0 : s), a), n);
}
function Oe(e, t) {
  var r = (t && qe(t)) || (Ve() && qe(Ve()));
  return k(e, r ? { locale: r } : null);
}
function xe(e, t) {
  return Pe(e, "ddd", t);
}
function Te(e) {
  return F(e);
}
function Ye(e, t, r) {
  var n = qe(t || Ve());
  return R(e, { locale: n, weekStartsOn: r });
}
function Ie(e) {
  return A(e);
}
function Le(e) {
  return B(e);
}
function Fe(e) {
  return W(e);
}
function Re(e, t) {
  return e && t ? V(e, t) : !e && !t;
}
function Ae(e, t) {
  return e && t ? Q(e, t) : !e && !t;
}
function We(e, t) {
  return e && t ? q(e, t) : !e && !t;
}
function Be(e, t) {
  return e && t ? H(e, t) : !e && !t;
}
function Ke(e, t) {
  return e && t ? j(e, t) : !e && !t;
}
function je(e, t, r) {
  var n,
    o = F(t),
    a = K(r);
  try {
    n = z(e, { start: o, end: a });
  } catch (e) {
    n = !1;
  }
  return n;
}
function He(e, t) {
  var r = "undefined" != typeof window ? window : global;
  r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
}
function Qe(e) {
  ("undefined" != typeof window ? window : global).__localeId__ = e;
}
function Ve() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function qe(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Ue(e, t) {
  return Pe(E(_e(), e), "LLLL", t);
}
function $e(e, t) {
  return Pe(E(_e(), e), "LLL", t);
}
function ze(e, t) {
  return Pe(N(_e(), e), "QQQ", t);
}
function Ge(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    nt(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function (t) {
        return Be(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return Be(e, t);
      })) ||
    (s && !s(_e(e))) ||
    !1
  );
}
function Je(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates;
  return (
    (r &&
      r.some(function (t) {
        return Be(e, t);
      })) ||
    !1
  );
}
function Xe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ((r || n) && nt(e, { minDate: r, maxDate: n })) ||
    (o &&
      o.some(function (t) {
        return Ae(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return Ae(e, t);
      })) ||
    (s && !s(_e(e))) ||
    !1
  );
}
function Ze(e, t, r, n) {
  var o = C(e),
    a = g(e),
    s = C(t),
    p = g(t),
    i = C(n);
  return o === s && o === i
    ? a <= r && r <= p
    : o < s
    ? (i === o && a <= r) || (i === s && p >= r) || (i < s && i > o)
    : void 0;
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ((r || n) && nt(e, { minDate: r, maxDate: n })) ||
    (o &&
      o.some(function (t) {
        return We(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return We(e, t);
      })) ||
    (s && !s(_e(e))) ||
    !1
  );
}
function tt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = new Date(e, 0, 1);
  return nt(o, { minDate: r, maxDate: n }) || !1;
}
function rt(e, t, r, n) {
  var o = C(e),
    a = b(e),
    s = C(t),
    p = b(t),
    i = C(n);
  return o === s && o === i
    ? a <= r && r <= p
    : o < s
    ? (i === o && a <= r) || (i === s && p >= r) || (i < s && i > o)
    : void 0;
}
function nt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && Y(e, r) < 0) || (n && Y(e, n) > 0);
}
function ot(e, t) {
  return t.some(function (t) {
    return v(t) === v(e) && y(t) === y(e);
  });
}
function at(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeTimes,
    n = t.includeTimes,
    o = t.filterTime;
  return (r && ot(e, r)) || (n && !ot(e, n)) || (o && !o(e)) || !1;
}
function st(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var o,
    a = _e(),
    s = P(M(a, y(e)), v(e)),
    p = P(M(a, y(r)), v(r)),
    i = P(M(a, y(n)), v(n));
  try {
    o = !z(s, { start: p, end: i });
  } catch (e) {
    o = !1;
  }
  return o;
}
function pt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = h(e, 1);
  return (
    (r && I(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return I(e, o) > 0;
      })) ||
    !1
  );
}
function it(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = c(e, 1);
  return (
    (r && I(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return I(o, e) > 0;
      })) ||
    !1
  );
}
function ct(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = m(e, 1);
  return (
    (r && L(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return L(e, o) > 0;
      })) ||
    !1
  );
}
function lt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = l(e, 1);
  return (
    (r && L(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return L(o, e) > 0;
      })) ||
    !1
  );
}
function dt(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return Y(e, t) >= 0;
    });
    return x(n);
  }
  return r ? x(r) : t;
}
function ut(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return Y(e, t) <= 0;
    });
    return T(n);
  }
  return r ? T(r) : t;
}
function ht() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      n = new Map(),
      o = 0,
      a = e.length;
    o < a;
    o++
  ) {
    var s = e[o];
    if (r(s)) {
      var p = Pe(s, "MM.dd.yyyy"),
        i = n.get(p) || [];
      i.includes(t) || (i.push(t), n.set(p, i));
    } else if ("object" === se(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = Pe(d[u], "MM.dd.yyyy"),
            f = n.get(m) || [];
          f.includes(l) || (f.push(l), n.set(m, f));
        }
    }
  }
  return n;
}
function mt(e, t, r, n, o) {
  for (var p = o.length, i = [], c = 0; c < p; c++) {
    var l = a(s(e, v(o[c])), y(o[c])),
      d = a(e, (r + 1) * n);
    U(l, t) && $(l, d) && i.push(o[c]);
  }
  return i;
}
function ft(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function yt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    r = Math.ceil(C(e) / t) * t,
    n = r - (t - 1);
  return { startPeriod: n, endPeriod: r };
}
function vt(e, t, r, n) {
  for (var o = [], a = 0; a < 2 * t + 1; a++) {
    var s = e + t - a,
      p = !0;
    r && (p = C(r) <= s), n && p && (p = C(n) >= s), p && o.push(s);
  }
  return o;
}
var Dt = Z(
    (function (r) {
      ue(o, e.Component);
      var n = ve(o);
      function o(t) {
        var r;
        pe(this, o),
          le(fe((r = n.call(this, t))), "renderOptions", function () {
            var t = r.props.year,
              n = r.state.yearsList.map(function (n) {
                return e.createElement(
                  "div",
                  {
                    className:
                      t === n
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: n,
                    onClick: r.onChange.bind(fe(r), n),
                  },
                  t === n
                    ? e.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  n
                );
              }),
              o = r.props.minDate ? C(r.props.minDate) : null,
              a = r.props.maxDate ? C(r.props.maxDate) : null;
            return (
              (a &&
                r.state.yearsList.find(function (e) {
                  return e === a;
                })) ||
                n.unshift(
                  e.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: r.incrementYears,
                    },
                    e.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                    })
                  )
                ),
              (o &&
                r.state.yearsList.find(function (e) {
                  return e === o;
                })) ||
                n.push(
                  e.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: r.decrementYears,
                    },
                    e.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    })
                  )
                ),
              n
            );
          }),
          le(fe(r), "onChange", function (e) {
            r.props.onChange(e);
          }),
          le(fe(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          le(fe(r), "shiftYears", function (e) {
            var t = r.state.yearsList.map(function (t) {
              return t + e;
            });
            r.setState({ yearsList: t });
          }),
          le(fe(r), "incrementYears", function () {
            return r.shiftYears(1);
          }),
          le(fe(r), "decrementYears", function () {
            return r.shiftYears(-1);
          });
        var a = t.yearDropdownItemNumber,
          s = t.scrollableYearDropdown,
          p = a || (s ? 10 : 5);
        return (
          (r.state = {
            yearsList: vt(r.props.year, p, r.props.minDate, r.props.maxDate),
          }),
          r
        );
      }
      return (
        ce(o, [
          {
            key: "render",
            value: function () {
              var r = t({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return e.createElement(
                "div",
                { className: r },
                this.renderOptions()
              );
            },
          },
        ]),
        o
      );
    })()
  ),
  wt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n() {
      var t;
      pe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        le(fe((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        le(fe(t), "renderSelectOptions", function () {
          for (
            var r = t.props.minDate ? C(t.props.minDate) : 1900,
              n = t.props.maxDate ? C(t.props.maxDate) : 2100,
              o = [],
              a = r;
            a <= n;
            a++
          )
            o.push(e.createElement("option", { key: a, value: a }, a));
          return o;
        }),
        le(fe(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        le(fe(t), "renderSelectMode", function () {
          return e.createElement(
            "select",
            {
              value: t.props.year,
              className: "react-datepicker__year-select",
              onChange: t.onSelectChange,
            },
            t.renderSelectOptions()
          );
        }),
        le(fe(t), "renderReadView", function (r) {
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (e) {
                return t.toggleDropdown(e);
              },
            },
            e.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              t.props.year
            )
          );
        }),
        le(fe(t), "renderDropdown", function () {
          return e.createElement(Dt, {
            key: "dropdown",
            year: t.props.year,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
            minDate: t.props.minDate,
            maxDate: t.props.maxDate,
            scrollableYearDropdown: t.props.scrollableYearDropdown,
            yearDropdownItemNumber: t.props.yearDropdownItemNumber,
          });
        }),
        le(fe(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        le(fe(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
        }),
        le(fe(t), "toggleDropdown", function (e) {
          t.setState(
            { dropdownVisible: !t.state.dropdownVisible },
            function () {
              t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
            }
          );
        }),
        le(fe(t), "handleYearChange", function (e, r) {
          t.onSelect(e, r), t.setOpen();
        }),
        le(fe(t), "onSelect", function (e, r) {
          t.props.onSelect && t.props.onSelect(e, r);
        }),
        le(fe(t), "setOpen", function () {
          t.props.setOpen && t.props.setOpen(!0);
        }),
        t
      );
    }
    return (
      ce(n, [
        {
          key: "render",
          value: function () {
            var t;
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode();
                break;
              case "select":
                t = this.renderSelectMode();
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })(),
  kt = Z(
    (function (t) {
      ue(n, e.Component);
      var r = ve(n);
      function n() {
        var t;
        pe(this, n);
        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
          a[s] = arguments[s];
        return (
          le(
            fe((t = r.call.apply(r, [this].concat(a)))),
            "renderOptions",
            function () {
              return t.props.monthNames.map(function (r, n) {
                return e.createElement(
                  "div",
                  {
                    className:
                      t.props.month === n
                        ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                        : "react-datepicker__month-option",
                    key: r,
                    onClick: t.onChange.bind(fe(t), n),
                  },
                  t.props.month === n
                    ? e.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  r
                );
              });
            }
          ),
          le(fe(t), "onChange", function (e) {
            return t.props.onChange(e);
          }),
          le(fe(t), "handleClickOutside", function () {
            return t.props.onCancel();
          }),
          t
        );
      }
      return (
        ce(n, [
          {
            key: "render",
            value: function () {
              return e.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            },
          },
        ]),
        n
      );
    })()
  ),
  gt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n() {
      var t;
      pe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        le(fe((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        le(fe(t), "renderSelectOptions", function (t) {
          return t.map(function (t, r) {
            return e.createElement("option", { key: r, value: r }, t);
          });
        }),
        le(fe(t), "renderSelectMode", function (r) {
          return e.createElement(
            "select",
            {
              value: t.props.month,
              className: "react-datepicker__month-select",
              onChange: function (e) {
                return t.onChange(e.target.value);
              },
            },
            t.renderSelectOptions(r)
          );
        }),
        le(fe(t), "renderReadView", function (r, n) {
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: t.toggleDropdown,
            },
            e.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              n[t.props.month]
            )
          );
        }),
        le(fe(t), "renderDropdown", function (r) {
          return e.createElement(kt, {
            key: "dropdown",
            month: t.props.month,
            monthNames: r,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
          });
        }),
        le(fe(t), "renderScrollMode", function (e) {
          var r = t.state.dropdownVisible,
            n = [t.renderReadView(!r, e)];
          return r && n.unshift(t.renderDropdown(e)), n;
        }),
        le(fe(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
        }),
        le(fe(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      ce(n, [
        {
          key: "render",
          value: function () {
            var t,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return $e(e, r.props.locale);
                    }
                  : function (e) {
                      return Ue(e, r.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode(n);
                break;
              case "select":
                t = this.renderSelectMode(n);
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })();
function bt(e, t) {
  for (var r = [], n = Ie(e), o = Ie(t); !U(n, o); )
    r.push(_e(n)), (n = c(n, 1));
  return r;
}
var Ct = Z(
    (function (r) {
      ue(o, e.Component);
      var n = ve(o);
      function o(t) {
        var r;
        return (
          pe(this, o),
          le(fe((r = n.call(this, t))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (t) {
              var n = _(t),
                o = Re(r.props.date, t) && Ae(r.props.date, t);
              return e.createElement(
                "div",
                {
                  className: o
                    ? "react-datepicker__month-year-option --selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: n,
                  onClick: r.onChange.bind(fe(r), n),
                },
                o
                  ? e.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓"
                    )
                  : "",
                Pe(t, r.props.dateFormat, r.props.locale)
              );
            });
          }),
          le(fe(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          le(fe(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: bt(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        ce(o, [
          {
            key: "render",
            value: function () {
              var r = t({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return e.createElement(
                "div",
                { className: r },
                this.renderOptions()
              );
            },
          },
        ]),
        o
      );
    })()
  ),
  _t = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n() {
      var t;
      pe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        le(fe((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        le(fe(t), "renderSelectOptions", function () {
          for (
            var r = Ie(t.props.minDate), n = Ie(t.props.maxDate), o = [];
            !U(r, n);

          ) {
            var a = _(r);
            o.push(
              e.createElement(
                "option",
                { key: a, value: a },
                Pe(r, t.props.dateFormat, t.props.locale)
              )
            ),
              (r = c(r, 1));
          }
          return o;
        }),
        le(fe(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        le(fe(t), "renderSelectMode", function () {
          return e.createElement(
            "select",
            {
              value: _(Ie(t.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: t.onSelectChange,
            },
            t.renderSelectOptions()
          );
        }),
        le(fe(t), "renderReadView", function (r) {
          var n = Pe(t.props.date, t.props.dateFormat, t.props.locale);
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (e) {
                return t.toggleDropdown(e);
              },
            },
            e.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              n
            )
          );
        }),
        le(fe(t), "renderDropdown", function () {
          return e.createElement(Ct, {
            key: "dropdown",
            date: t.props.date,
            dateFormat: t.props.dateFormat,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
            minDate: t.props.minDate,
            maxDate: t.props.maxDate,
            scrollableMonthYearDropdown: t.props.scrollableMonthYearDropdown,
            locale: t.props.locale,
          });
        }),
        le(fe(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        le(fe(t), "onChange", function (e) {
          t.toggleDropdown();
          var r = _e(parseInt(e));
          (Re(t.props.date, r) && Ae(t.props.date, r)) || t.props.onChange(r);
        }),
        le(fe(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      ce(n, [
        {
          key: "render",
          value: function () {
            var t;
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode();
                break;
              case "select":
                t = this.renderSelectMode();
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })(),
  St = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o() {
      var r;
      pe(this, o);
      for (var a = arguments.length, s = new Array(a), p = 0; p < a; p++)
        s[p] = arguments[p];
      return (
        le(fe((r = n.call.apply(n, [this].concat(s)))), "dayEl", e.createRef()),
        le(fe(r), "handleClick", function (e) {
          !r.isDisabled() && r.props.onClick && r.props.onClick(e);
        }),
        le(fe(r), "handleMouseEnter", function (e) {
          !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(e);
        }),
        le(fe(r), "handleOnKeyDown", function (e) {
          " " === e.key && (e.preventDefault(), (e.key = "Enter")),
            r.props.handleOnKeyDown(e);
        }),
        le(fe(r), "isSameDay", function (e) {
          return Be(r.props.day, e);
        }),
        le(fe(r), "isKeyboardSelected", function () {
          return (
            !r.props.disabledKeyboardNavigation &&
            !r.isSameDay(r.props.selected) &&
            r.isSameDay(r.props.preSelection)
          );
        }),
        le(fe(r), "isDisabled", function () {
          return Ge(r.props.day, r.props);
        }),
        le(fe(r), "isExcluded", function () {
          return Je(r.props.day, r.props);
        }),
        le(fe(r), "getHighLightedClass", function (e) {
          var t = r.props,
            n = t.day,
            o = t.highlightDates;
          if (!o) return !1;
          var a = Pe(n, "MM.dd.yyyy");
          return o.get(a);
        }),
        le(fe(r), "isInRange", function () {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && je(t, n, o);
        }),
        le(fe(r), "isInSelectingRange", function () {
          var e,
            t = r.props,
            n = t.day,
            o = t.selectsStart,
            a = t.selectsEnd,
            s = t.selectsRange,
            p = t.startDate,
            i = t.endDate,
            c =
              null !== (e = r.props.selectingDate) && void 0 !== e
                ? e
                : r.props.preSelection;
          return (
            !(!(o || a || s) || !c || r.isDisabled()) &&
            (o && i && ($(c, i) || Ke(c, i))
              ? je(n, c, i)
              : ((a && p && (U(c, p) || Ke(c, p))) ||
                  !(!s || !p || i || (!U(c, p) && !Ke(c, p)))) &&
                je(n, p, c))
          );
        }),
        le(fe(r), "isSelectingRangeStart", function () {
          var e;
          if (!r.isInSelectingRange()) return !1;
          var t = r.props,
            n = t.day,
            o = t.startDate,
            a = t.selectsStart,
            s =
              null !== (e = r.props.selectingDate) && void 0 !== e
                ? e
                : r.props.preSelection;
          return Be(n, a ? s : o);
        }),
        le(fe(r), "isSelectingRangeEnd", function () {
          var e;
          if (!r.isInSelectingRange()) return !1;
          var t = r.props,
            n = t.day,
            o = t.endDate,
            a = t.selectsEnd,
            s =
              null !== (e = r.props.selectingDate) && void 0 !== e
                ? e
                : r.props.preSelection;
          return Be(n, a ? s : o);
        }),
        le(fe(r), "isRangeStart", function () {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && Be(n, t);
        }),
        le(fe(r), "isRangeEnd", function () {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && Be(o, t);
        }),
        le(fe(r), "isWeekend", function () {
          var e = D(r.props.day);
          return 0 === e || 6 === e;
        }),
        le(fe(r), "isOutsideMonth", function () {
          return void 0 !== r.props.month && r.props.month !== g(r.props.day);
        }),
        le(fe(r), "getClassNames", function (e) {
          var n = r.props.dayClassName ? r.props.dayClassName(e) : void 0;
          return t(
            "react-datepicker__day",
            n,
            "react-datepicker__day--" + xe(r.props.day),
            {
              "react-datepicker__day--disabled": r.isDisabled(),
              "react-datepicker__day--excluded": r.isExcluded(),
              "react-datepicker__day--selected": r.isSameDay(r.props.selected),
              "react-datepicker__day--keyboard-selected":
                r.isKeyboardSelected(),
              "react-datepicker__day--range-start": r.isRangeStart(),
              "react-datepicker__day--range-end": r.isRangeEnd(),
              "react-datepicker__day--in-range": r.isInRange(),
              "react-datepicker__day--in-selecting-range":
                r.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                r.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                r.isSelectingRangeEnd(),
              "react-datepicker__day--today": r.isSameDay(_e()),
              "react-datepicker__day--weekend": r.isWeekend(),
              "react-datepicker__day--outside-month": r.isOutsideMonth(),
            },
            r.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        le(fe(r), "getAriaLabel", function () {
          var e = r.props,
            t = e.day,
            n = e.ariaLabelPrefixWhenEnabled,
            o = void 0 === n ? "Choose" : n,
            a = e.ariaLabelPrefixWhenDisabled,
            s = void 0 === a ? "Not available" : a,
            p = r.isDisabled() || r.isExcluded() ? s : o;
          return "".concat(p, " ").concat(Pe(t, "PPPP", r.props.locale));
        }),
        le(fe(r), "getTabIndex", function (e, t) {
          var n = e || r.props.selected,
            o = t || r.props.preSelection;
          return r.isKeyboardSelected() || (r.isSameDay(n) && Be(o, n))
            ? 0
            : -1;
        }),
        le(fe(r), "handleFocusDay", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = !1;
          0 === r.getTabIndex() &&
            !e.isInputFocused &&
            r.isSameDay(r.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (t = !0),
            r.props.inline && !r.props.shouldFocusDayInline && (t = !1),
            r.props.containerRef &&
              r.props.containerRef.current &&
              r.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (t = !0)),
            t && r.dayEl.current.focus({ preventScroll: !0 });
        }),
        le(fe(r), "renderDayContents", function () {
          if (r.isOutsideMonth()) {
            if (r.props.monthShowsDuplicateDaysEnd && w(r.props.day) < 10)
              return null;
            if (r.props.monthShowsDuplicateDaysStart && w(r.props.day) > 20)
              return null;
          }
          return r.props.renderDayContents
            ? r.props.renderDayContents(w(r.props.day), r.props.day)
            : w(r.props.day);
        }),
        le(fe(r), "render", function () {
          return e.createElement(
            "div",
            {
              ref: r.dayEl,
              className: r.getClassNames(r.props.day),
              onKeyDown: r.handleOnKeyDown,
              onClick: r.handleClick,
              onMouseEnter: r.handleMouseEnter,
              tabIndex: r.getTabIndex(),
              "aria-label": r.getAriaLabel(),
              role: "button",
              "aria-disabled": r.isDisabled(),
            },
            r.renderDayContents()
          );
        }),
        r
      );
    }
    return (
      ce(o, [
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
      o
    );
  })(),
  Mt = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o() {
      var e;
      pe(this, o);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
        r[a] = arguments[a];
      return (
        le(
          fe((e = n.call.apply(n, [this].concat(r)))),
          "handleClick",
          function (t) {
            e.props.onClick && e.props.onClick(t);
          }
        ),
        e
      );
    }
    return (
      ce(o, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              n = r.weekNumber,
              o = r.ariaLabelPrefix,
              a = void 0 === o ? "week " : o,
              s = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!r.onClick,
              };
            return e.createElement(
              "div",
              {
                className: t(s),
                "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
                onClick: this.handleClick,
              },
              n
            );
          },
        },
      ]),
      o
    );
  })(),
  Pt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n() {
      var t;
      pe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        le(
          fe((t = r.call.apply(r, [this].concat(a)))),
          "handleDayClick",
          function (e, r) {
            t.props.onDayClick && t.props.onDayClick(e, r);
          }
        ),
        le(fe(t), "handleDayMouseEnter", function (e) {
          t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
        }),
        le(fe(t), "handleWeekClick", function (e, r, n) {
          "function" == typeof t.props.onWeekSelect &&
            t.props.onWeekSelect(e, r, n),
            t.props.shouldCloseOnSelect && t.props.setOpen(!1);
        }),
        le(fe(t), "formatWeekNumber", function (e) {
          return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Oe(e);
        }),
        le(fe(t), "renderDays", function () {
          var r = Ye(t.props.day, t.props.locale, t.props.calendarStartDay),
            n = [],
            o = t.formatWeekNumber(r);
          if (t.props.showWeekNumber) {
            var a = t.props.onWeekSelect
              ? t.handleWeekClick.bind(fe(t), r, o)
              : void 0;
            n.push(
              e.createElement(Mt, {
                key: "W",
                weekNumber: o,
                onClick: a,
                ariaLabelPrefix: t.props.ariaLabelPrefix,
              })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (n) {
              var o = p(r, n);
              return e.createElement(St, {
                ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix,
                key: o.valueOf(),
                day: o,
                month: t.props.month,
                onClick: t.handleDayClick.bind(fe(t), o),
                onMouseEnter: t.handleDayMouseEnter.bind(fe(t), o),
                minDate: t.props.minDate,
                maxDate: t.props.maxDate,
                excludeDates: t.props.excludeDates,
                includeDates: t.props.includeDates,
                highlightDates: t.props.highlightDates,
                selectingDate: t.props.selectingDate,
                filterDate: t.props.filterDate,
                preSelection: t.props.preSelection,
                selected: t.props.selected,
                selectsStart: t.props.selectsStart,
                selectsEnd: t.props.selectsEnd,
                selectsRange: t.props.selectsRange,
                startDate: t.props.startDate,
                endDate: t.props.endDate,
                dayClassName: t.props.dayClassName,
                renderDayContents: t.props.renderDayContents,
                disabledKeyboardNavigation: t.props.disabledKeyboardNavigation,
                handleOnKeyDown: t.props.handleOnKeyDown,
                isInputFocused: t.props.isInputFocused,
                containerRef: t.props.containerRef,
                inline: t.props.inline,
                shouldFocusDayInline: t.props.shouldFocusDayInline,
                monthShowsDuplicateDaysEnd: t.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  t.props.monthShowsDuplicateDaysStart,
                locale: t.props.locale,
              });
            })
          );
        }),
        t
      );
    }
    return (
      ce(
        n,
        [
          {
            key: "render",
            value: function () {
              return e.createElement(
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
      n
    );
  })(),
  Et = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o() {
      var r;
      pe(this, o);
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      return (
        le(
          fe((r = n.call.apply(n, [this].concat(s)))),
          "MONTH_REFS",
          De(Array(12)).map(function () {
            return e.createRef();
          })
        ),
        le(fe(r), "isDisabled", function (e) {
          return Ge(e, r.props);
        }),
        le(fe(r), "isExcluded", function (e) {
          return Je(e, r.props);
        }),
        le(fe(r), "handleDayClick", function (e, t) {
          r.props.onDayClick &&
            r.props.onDayClick(e, t, r.props.orderInDisplay);
        }),
        le(fe(r), "handleDayMouseEnter", function (e) {
          r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
        }),
        le(fe(r), "handleMouseLeave", function () {
          r.props.onMouseLeave && r.props.onMouseLeave();
        }),
        le(fe(r), "isRangeStartMonth", function (e) {
          var t = r.props,
            n = t.day,
            o = t.startDate,
            a = t.endDate;
          return !(!o || !a) && Ae(E(n, e), o);
        }),
        le(fe(r), "isRangeStartQuarter", function (e) {
          var t = r.props,
            n = t.day,
            o = t.startDate,
            a = t.endDate;
          return !(!o || !a) && We(N(n, e), o);
        }),
        le(fe(r), "isRangeEndMonth", function (e) {
          var t = r.props,
            n = t.day,
            o = t.startDate,
            a = t.endDate;
          return !(!o || !a) && Ae(E(n, e), a);
        }),
        le(fe(r), "isRangeEndQuarter", function (e) {
          var t = r.props,
            n = t.day,
            o = t.startDate,
            a = t.endDate;
          return !(!o || !a) && We(N(n, e), a);
        }),
        le(fe(r), "isWeekInMonth", function (e) {
          var t = r.props.day,
            n = p(e, 6);
          return Ae(e, t) || Ae(n, t);
        }),
        le(fe(r), "renderWeeks", function () {
          for (
            var t = [],
              n = r.props.fixedHeight,
              o = 0,
              a = !1,
              s = Ye(Ie(r.props.day), r.props.locale, r.props.calendarStartDay);
            t.push(
              e.createElement(Pt, {
                ariaLabelPrefix: r.props.weekAriaLabelPrefix,
                chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: r.props.disabledDayAriaLabelPrefix,
                key: o,
                day: s,
                month: g(r.props.day),
                onDayClick: r.handleDayClick,
                onDayMouseEnter: r.handleDayMouseEnter,
                onWeekSelect: r.props.onWeekSelect,
                formatWeekNumber: r.props.formatWeekNumber,
                locale: r.props.locale,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                excludeDates: r.props.excludeDates,
                includeDates: r.props.includeDates,
                inline: r.props.inline,
                shouldFocusDayInline: r.props.shouldFocusDayInline,
                highlightDates: r.props.highlightDates,
                selectingDate: r.props.selectingDate,
                filterDate: r.props.filterDate,
                preSelection: r.props.preSelection,
                selected: r.props.selected,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                selectsRange: r.props.selectsRange,
                showWeekNumber: r.props.showWeekNumbers,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                dayClassName: r.props.dayClassName,
                setOpen: r.props.setOpen,
                shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                renderDayContents: r.props.renderDayContents,
                handleOnKeyDown: r.props.handleOnKeyDown,
                isInputFocused: r.props.isInputFocused,
                containerRef: r.props.containerRef,
                calendarStartDay: r.props.calendarStartDay,
                monthShowsDuplicateDaysEnd: r.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  r.props.monthShowsDuplicateDaysStart,
              })
            ),
              !a;

          ) {
            o++, (s = i(s, 1));
            var p = n && o >= 6,
              c = !n && !r.isWeekInMonth(s);
            if (p || c) {
              if (!r.props.peekNextMonth) break;
              a = !0;
            }
          }
          return t;
        }),
        le(fe(r), "onMonthClick", function (e, t) {
          r.handleDayClick(Ie(E(r.props.day, t)), e);
        }),
        le(fe(r), "handleMonthNavigation", function (e, t) {
          r.isDisabled(t) ||
            r.isExcluded(t) ||
            (r.props.setPreSelection(t),
            r.MONTH_REFS[e].current && r.MONTH_REFS[e].current.focus());
        }),
        le(fe(r), "onMonthKeyDown", function (e, t) {
          var n = e.key;
          if (!r.props.disabledKeyboardNavigation)
            switch (n) {
              case "Enter":
                r.onMonthClick(e, t), r.props.setPreSelection(r.props.selected);
                break;
              case "ArrowRight":
                r.handleMonthNavigation(
                  11 === t ? 0 : t + 1,
                  c(r.props.preSelection, 1)
                );
                break;
              case "ArrowLeft":
                r.handleMonthNavigation(
                  0 === t ? 11 : t - 1,
                  h(r.props.preSelection, 1)
                );
            }
        }),
        le(fe(r), "onQuarterClick", function (e, t) {
          r.handleDayClick(Fe(N(r.props.day, t)), e);
        }),
        le(fe(r), "getMonthClassNames", function (e) {
          var n = r.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            p = n.selected,
            i = n.preSelection,
            c = n.monthClassName,
            l = c ? c(o) : void 0;
          return t(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(e),
            l,
            {
              "react-datepicker__month--disabled": Xe(E(o, e), r.props),
              "react-datepicker__month--selected": g(o) === e && C(o) === C(p),
              "react-datepicker__month-text--keyboard-selected": g(i) === e,
              "react-datepicker__month--in-range": Ze(a, s, e, o),
              "react-datepicker__month--range-start": r.isRangeStartMonth(e),
              "react-datepicker__month--range-end": r.isRangeEndMonth(e),
            }
          );
        }),
        le(fe(r), "getTabIndex", function (e) {
          var t = g(r.props.preSelection);
          return r.props.disabledKeyboardNavigation || e !== t ? "-1" : "0";
        }),
        le(fe(r), "getAriaLabel", function (e) {
          var t = r.props,
            n = t.ariaLabelPrefix,
            o = void 0 === n ? "Choose" : n,
            a = t.disabledDayAriaLabelPrefix,
            s = void 0 === a ? "Not available" : a,
            p = t.day,
            i = E(p, e),
            c = r.isDisabled(i) || r.isExcluded(i) ? s : o;
          return "".concat(c, " ").concat(Pe(i, "MMMM yyyy"));
        }),
        le(fe(r), "getQuarterClassNames", function (e) {
          var n = r.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            p = n.selected;
          return t(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(e),
            {
              "react-datepicker__quarter--disabled": et(N(o, e), r.props),
              "react-datepicker__quarter--selected":
                b(o) === e && C(o) === C(p),
              "react-datepicker__quarter--in-range": rt(a, s, e, o),
              "react-datepicker__quarter--range-start":
                r.isRangeStartQuarter(e),
              "react-datepicker__quarter--range-end": r.isRangeEndQuarter(e),
            }
          );
        }),
        le(fe(r), "renderMonths", function () {
          var t = r.props,
            n = t.showFullMonthYearPicker,
            o = t.showTwoColumnMonthYearPicker,
            a = t.showFourColumnMonthYearPicker,
            s = t.locale;
          return (
            a
              ? [
                  [0, 1, 2, 3],
                  [4, 5, 6, 7],
                  [8, 9, 10, 11],
                ]
              : o
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
          ).map(function (t, o) {
            return e.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: o },
              t.map(function (t, o) {
                return e.createElement(
                  "div",
                  {
                    ref: r.MONTH_REFS[t],
                    key: o,
                    onClick: function (e) {
                      r.onMonthClick(e, t);
                    },
                    onKeyDown: function (e) {
                      r.onMonthKeyDown(e, t);
                    },
                    tabIndex: r.getTabIndex(t),
                    className: r.getMonthClassNames(t),
                    role: "button",
                    "aria-label": r.getAriaLabel(t),
                  },
                  n ? Ue(t, s) : $e(t, s)
                );
              })
            );
          });
        }),
        le(fe(r), "renderQuarters", function () {
          return e.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function (t, n) {
              return e.createElement(
                "div",
                {
                  key: n,
                  onClick: function (e) {
                    r.onQuarterClick(e, t);
                  },
                  className: r.getQuarterClassNames(t),
                },
                ze(t, r.props.locale)
              );
            })
          );
        }),
        le(fe(r), "getClassNames", function () {
          var e = r.props;
          e.day;
          var n = e.selectingDate,
            o = e.selectsStart,
            a = e.selectsEnd,
            s = e.showMonthYearPicker,
            p = e.showQuarterYearPicker;
          return t(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": n && (o || a) },
            { "react-datepicker__monthPicker": s },
            { "react-datepicker__quarterPicker": p }
          );
        }),
        r
      );
    }
    return (
      ce(o, [
        {
          key: "render",
          value: function () {
            var t = this.props,
              r = t.showMonthYearPicker,
              n = t.showQuarterYearPicker,
              o = t.day,
              a = t.ariaLabelPrefix,
              s = void 0 === a ? "month " : a;
            return e.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                "aria-label": "".concat(s, " ").concat(Pe(o, "yyyy-MM")),
              },
              r
                ? this.renderMonths()
                : n
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          },
        },
      ]),
      o
    );
  })(),
  Nt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n() {
      var t;
      pe(this, n);
      for (var o = arguments.length, s = new Array(o), p = 0; p < o; p++)
        s[p] = arguments[p];
      return (
        le(fe((t = r.call.apply(r, [this].concat(s)))), "state", {
          height: null,
        }),
        le(fe(t), "handleClick", function (e) {
          ((t.props.minTime || t.props.maxTime) && st(e, t.props)) ||
            ((t.props.excludeTimes ||
              t.props.includeTimes ||
              t.props.filterTime) &&
              at(e, t.props)) ||
            t.props.onChange(e);
        }),
        le(fe(t), "liClasses", function (e, r, n) {
          var o = [
            "react-datepicker__time-list-item",
            t.props.timeClassName ? t.props.timeClassName(e, r, n) : void 0,
          ];
          return (
            t.props.selected &&
              r === v(e) &&
              n === y(e) &&
              o.push("react-datepicker__time-list-item--selected"),
            (((t.props.minTime || t.props.maxTime) && st(e, t.props)) ||
              ((t.props.excludeTimes ||
                t.props.includeTimes ||
                t.props.filterTime) &&
                at(e, t.props))) &&
              o.push("react-datepicker__time-list-item--disabled"),
            t.props.injectTimes &&
              (60 * v(e) + y(e)) % t.props.intervals != 0 &&
              o.push("react-datepicker__time-list-item--injected"),
            o.join(" ")
          );
        }),
        le(fe(t), "handleOnKeyDown", function (e, r) {
          " " === e.key && (e.preventDefault(), (e.key = "Enter")),
            "Enter" === e.key && t.handleClick(r),
            t.props.handleOnKeyDown(e);
        }),
        le(fe(t), "renderTimes", function () {
          for (
            var r = [],
              n = t.props.format ? t.props.format : "p",
              o = t.props.intervals,
              s = Te(_e(t.props.selected)),
              p = 1440 / o,
              i =
                t.props.injectTimes &&
                t.props.injectTimes.sort(function (e, t) {
                  return e - t;
                }),
              c = t.props.selected || t.props.openToDate || _e(),
              l = v(c),
              d = y(c),
              u = P(M(s, d), l),
              h = 0;
            h < p;
            h++
          ) {
            var m = a(s, h * o);
            if ((r.push(m), i)) {
              var f = mt(s, m, h, o, i);
              r = r.concat(f);
            }
          }
          return r.map(function (r, o) {
            return e.createElement(
              "li",
              {
                key: o,
                onClick: t.handleClick.bind(fe(t), r),
                className: t.liClasses(r, l, d),
                ref: function (e) {
                  ($(r, u) || Ke(r, u)) && (t.centerLi = e);
                },
                onKeyDown: function (e) {
                  t.handleOnKeyDown(e, r);
                },
                tabIndex: "0",
              },
              Pe(r, n, t.props.locale)
            );
          });
        }),
        t
      );
    }
    return (
      ce(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              (this.list.scrollTop = n.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
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
              var t = this,
                r = this.state.height;
              return e.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  ),
                },
                e.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time ".concat(
                        this.props.showTimeSelectOnly
                          ? "react-datepicker__header--time--only"
                          : ""
                      ),
                    ref: function (e) {
                      t.header = e;
                    },
                  },
                  e.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                e.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  e.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    e.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function (e) {
                          t.list = e;
                        },
                        style: r ? { height: r } : {},
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
      n
    );
  })();
le(Nt, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var Ot = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o(e) {
      var r;
      return (
        pe(this, o),
        le(fe((r = n.call(this, e))), "handleYearClick", function (e, t) {
          r.props.onDayClick && r.props.onDayClick(e, t);
        }),
        le(fe(r), "isSameDay", function (e, t) {
          return Be(e, t);
        }),
        le(fe(r), "isKeyboardSelected", function (e) {
          var t = Le(O(r.props.date, e));
          return (
            !r.props.disabledKeyboardNavigation &&
            !r.props.inline &&
            !Be(t, Le(r.props.selected)) &&
            Be(t, Le(r.props.preSelection))
          );
        }),
        le(fe(r), "onYearClick", function (e, t) {
          var n = r.props.date;
          r.handleYearClick(Le(O(n, t)), e);
        }),
        le(fe(r), "getYearClassNames", function (e) {
          var n = r.props,
            o = n.minDate,
            a = n.maxDate,
            s = n.selected;
          return t("react-datepicker__year-text", {
            "react-datepicker__year-text--selected": e === C(s),
            "react-datepicker__year-text--disabled": (o || a) && tt(e, r.props),
            "react-datepicker__year-text--keyboard-selected":
              r.isKeyboardSelected(e),
            "react-datepicker__year-text--today": e === C(_e()),
          });
        }),
        r
      );
    }
    return (
      ce(o, [
        {
          key: "render",
          value: function () {
            for (
              var t = this,
                r = [],
                n = this.props,
                o = yt(n.date, n.yearItemNumber),
                a = o.startPeriod,
                s = o.endPeriod,
                p = function (n) {
                  r.push(
                    e.createElement(
                      "div",
                      {
                        onClick: function (e) {
                          t.onYearClick(e, n);
                        },
                        className: t.getYearClassNames(n),
                        key: n,
                      },
                      n
                    )
                  );
                },
                i = a;
              i <= s;
              i++
            )
              p(i);
            return e.createElement(
              "div",
              { className: "react-datepicker__year" },
              e.createElement(
                "div",
                { className: "react-datepicker__year-wrapper" },
                r
              )
            );
          },
        },
      ]),
      o
    );
  })(),
  xt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n(t) {
      var o;
      return (
        pe(this, n),
        le(fe((o = r.call(this, t))), "onTimeChange", function (e) {
          o.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            o.props.onChange(t);
        }),
        le(fe(o), "renderTimeInput", function () {
          var t = o.state.time,
            r = o.props,
            n = r.date,
            a = r.timeString,
            s = r.customTimeInput;
          return s
            ? e.cloneElement(s, { date: n, value: t, onChange: o.onTimeChange })
            : e.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                required: !0,
                value: t,
                onChange: function (e) {
                  o.onTimeChange(e.target.value || a);
                },
              });
        }),
        (o.state = { time: o.props.timeString }),
        o
      );
    }
    return (
      ce(
        n,
        [
          {
            key: "render",
            value: function () {
              return e.createElement(
                "div",
                { className: "react-datepicker__input-time-container" },
                e.createElement(
                  "div",
                  { className: "react-datepicker-time__caption" },
                  this.props.timeInputLabel
                ),
                e.createElement(
                  "div",
                  { className: "react-datepicker-time__input-container" },
                  e.createElement(
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
              return e.timeString !== t.time ? { time: e.timeString } : null;
            },
          },
        ]
      ),
      n
    );
  })();
function Tt(t) {
  var r = t.className,
    n = t.children,
    o = t.showPopperArrow,
    a = t.arrowProps,
    s = void 0 === a ? {} : a;
  return e.createElement(
    "div",
    { className: r },
    o &&
      e.createElement(
        "div",
        de({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
var Yt = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  It = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o(r) {
      var a;
      return (
        pe(this, o),
        le(fe((a = n.call(this, r))), "handleClickOutside", function (e) {
          a.props.onClickOutside(e);
        }),
        le(fe(a), "setClickOutsideRef", function () {
          return a.containerRef.current;
        }),
        le(fe(a), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Yt.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && a.props.onDropdownFocus();
        }),
        le(fe(a), "getDateInView", function () {
          var e = a.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            o = dt(a.props),
            s = ut(a.props),
            p = _e(),
            i = n || r || t;
          return i || (o && $(p, o) ? o : s && U(p, s) ? s : p);
        }),
        le(fe(a), "increaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: c(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        le(fe(a), "decreaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: h(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        le(fe(a), "handleDayClick", function (e, t, r) {
          a.props.onSelect(e, t, r),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        le(fe(a), "handleDayMouseEnter", function (e) {
          a.setState({ selectingDate: e }),
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
        }),
        le(fe(a), "handleMonthMouseLeave", function () {
          a.setState({ selectingDate: null }),
            a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
        }),
        le(fe(a), "handleYearChange", function (e) {
          a.props.onYearChange && a.props.onYearChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        le(fe(a), "handleMonthChange", function (e) {
          a.props.onMonthChange && a.props.onMonthChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        le(fe(a), "handleMonthYearChange", function (e) {
          a.handleYearChange(e), a.handleMonthChange(e);
        }),
        le(fe(a), "changeYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: O(r, e) };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        le(fe(a), "changeMonth", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: E(r, e) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        le(fe(a), "changeMonthYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: O(E(r, g(e)), C(e)) };
            },
            function () {
              return a.handleMonthYearChange(a.state.date);
            }
          );
        }),
        le(fe(a), "header", function () {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            n = Ye(r, a.props.locale, a.props.calendarStartDay),
            o = [];
          return (
            a.props.showWeekNumbers &&
              o.push(
                e.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  a.props.weekLabel || "#"
                )
              ),
            o.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                var o = p(n, r),
                  s = a.formatWeekday(o, a.props.locale),
                  i = a.props.weekDayClassName
                    ? a.props.weekDayClassName(o)
                    : void 0;
                return e.createElement(
                  "div",
                  { key: r, className: t("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        le(fe(a), "formatWeekday", function (e, t) {
          return a.props.formatWeekDay
            ? (function (e, t, r) {
                return t(Pe(e, "EEEE", r));
              })(e, a.props.formatWeekDay, t)
            : a.props.useWeekdaysShort
            ? (function (e, t) {
                return Pe(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return Pe(e, "EEEEEE", t);
              })(e, t);
        }),
        le(fe(a), "decreaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: m(t, a.props.showYearPicker ? a.props.yearItemNumber : 1),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        le(fe(a), "renderPreviousButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = ct(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.minDate,
                    n = t.yearItemNumber,
                    o = void 0 === n ? 12 : n,
                    a = yt(Le(m(e, o)), o).endPeriod,
                    s = r && C(r);
                  return (s && s > a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = pt(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !t) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                n = a.decreaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.decreaseYear),
                t &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--previous--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                s = a.props,
                p = s.previousMonthAriaLabel,
                i = void 0 === p ? "Previous Month" : p,
                c = s.previousYearAriaLabel,
                l = void 0 === c ? "Previous Year" : c;
              return e.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": o ? l : i,
                },
                e.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--previous",
                    ].join(" "),
                  },
                  o
                    ? a.props.previousYearButtonLabel
                    : a.props.previousMonthButtonLabel
                )
              );
            }
          }
        }),
        le(fe(a), "increaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: l(t, a.props.showYearPicker ? a.props.yearItemNumber : 1),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        le(fe(a), "renderNextButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = lt(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.maxDate,
                    n = t.yearItemNumber,
                    o = void 0 === n ? 12 : n,
                    a = yt(l(e, o), o).startPeriod,
                    s = r && C(r);
                  return (s && s < a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = it(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !t) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next",
              ];
              a.props.showTimeSelect &&
                r.push("react-datepicker__navigation--next--with-time"),
                a.props.todayButton &&
                  r.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var n = a.increaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.increaseYear),
                t &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--next--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                s = a.props,
                p = s.nextMonthAriaLabel,
                i = void 0 === p ? "Next Month" : p,
                c = s.nextYearAriaLabel,
                d = void 0 === c ? "Next Year" : c;
              return e.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": o ? d : i,
                },
                e.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  o ? a.props.nextYearButtonLabel : a.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        le(fe(a), "renderCurrentMonth", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            r = ["react-datepicker__current-month"];
          return (
            a.props.showYearDropdown &&
              r.push("react-datepicker__current-month--hasYearDropdown"),
            a.props.showMonthDropdown &&
              r.push("react-datepicker__current-month--hasMonthDropdown"),
            a.props.showMonthYearDropdown &&
              r.push("react-datepicker__current-month--hasMonthYearDropdown"),
            e.createElement(
              "div",
              { className: r.join(" ") },
              Pe(t, a.props.dateFormat, a.props.locale)
            )
          );
        }),
        le(fe(a), "renderYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showYearDropdown && !t)
            return e.createElement(wt, {
              adjustDateOnChange: a.props.adjustDateOnChange,
              date: a.state.date,
              onSelect: a.props.onSelect,
              setOpen: a.props.setOpen,
              dropdownMode: a.props.dropdownMode,
              onChange: a.changeYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              year: C(a.state.date),
              scrollableYearDropdown: a.props.scrollableYearDropdown,
              yearDropdownItemNumber: a.props.yearDropdownItemNumber,
            });
        }),
        le(fe(a), "renderMonthDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthDropdown && !t)
            return e.createElement(gt, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              onChange: a.changeMonth,
              month: g(a.state.date),
              useShortMonthInDropdown: a.props.useShortMonthInDropdown,
            });
        }),
        le(fe(a), "renderMonthYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthYearDropdown && !t)
            return e.createElement(_t, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              dateFormat: a.props.dateFormat,
              onChange: a.changeMonthYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              date: a.state.date,
              scrollableMonthYearDropdown: a.props.scrollableMonthYearDropdown,
            });
        }),
        le(fe(a), "renderTodayButton", function () {
          if (a.props.todayButton && !a.props.showTimeSelectOnly)
            return e.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (e) {
                  return a.props.onSelect(F(_e()), e);
                },
              },
              a.props.todayButton
            );
        }),
        le(fe(a), "renderDefaultHeader", function (t) {
          var r = t.monthDate,
            n = t.i;
          return e.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                a.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            a.renderCurrentMonth(r),
            e.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    a.props.dropdownMode
                  ),
                onFocus: a.handleDropdownFocus,
              },
              a.renderMonthDropdown(0 !== n),
              a.renderMonthYearDropdown(0 !== n),
              a.renderYearDropdown(0 !== n)
            ),
            e.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              a.header(r)
            )
          );
        }),
        le(fe(a), "renderCustomHeader", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t.monthDate,
            n = t.i;
          if (
            (a.props.showTimeSelect && !a.state.monthContainer) ||
            a.props.showTimeSelectOnly
          )
            return null;
          var o = pt(a.state.date, a.props),
            s = it(a.state.date, a.props),
            p = ct(a.state.date, a.props),
            i = lt(a.state.date, a.props),
            c =
              !a.props.showMonthYearPicker &&
              !a.props.showQuarterYearPicker &&
              !a.props.showYearPicker;
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: a.props.onDropdownFocus,
            },
            a.props.renderCustomHeader(
              ae(
                ae({}, a.state),
                {},
                {
                  customHeaderCount: n,
                  monthDate: r,
                  changeMonth: a.changeMonth,
                  changeYear: a.changeYear,
                  decreaseMonth: a.decreaseMonth,
                  increaseMonth: a.increaseMonth,
                  decreaseYear: a.decreaseYear,
                  increaseYear: a.increaseYear,
                  prevMonthButtonDisabled: o,
                  nextMonthButtonDisabled: s,
                  prevYearButtonDisabled: p,
                  nextYearButtonDisabled: i,
                }
              )
            ),
            c &&
              e.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                a.header(r)
              )
          );
        }),
        le(fe(a), "renderYearHeader", function () {
          var t = a.state.date,
            r = a.props,
            n = r.showYearPicker,
            o = yt(t, r.yearItemNumber),
            s = o.startPeriod,
            p = o.endPeriod;
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            n ? "".concat(s, " - ").concat(p) : C(t)
          );
        }),
        le(fe(a), "renderHeader", function (e) {
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
        le(fe(a), "renderMonths", function () {
          if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
            for (
              var t = [],
                r = a.props.showPreviousMonths ? a.props.monthsShown - 1 : 0,
                n = h(a.state.date, r),
                o = 0;
              o < a.props.monthsShown;
              ++o
            ) {
              var s = o - a.props.monthSelectedIn,
                p = c(n, s),
                i = "month-".concat(o),
                l = o < a.props.monthsShown - 1,
                d = o > 0;
              t.push(
                e.createElement(
                  "div",
                  {
                    key: i,
                    ref: function (e) {
                      a.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  a.renderHeader({ monthDate: p, i: o }),
                  e.createElement(Et, {
                    chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      a.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                    onChange: a.changeMonthYear,
                    day: p,
                    dayClassName: a.props.dayClassName,
                    calendarStartDay: a.props.calendarStartDay,
                    monthClassName: a.props.monthClassName,
                    onDayClick: a.handleDayClick,
                    handleOnKeyDown: a.props.handleOnKeyDown,
                    onDayMouseEnter: a.handleDayMouseEnter,
                    onMouseLeave: a.handleMonthMouseLeave,
                    onWeekSelect: a.props.onWeekSelect,
                    orderInDisplay: o,
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
                    showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      a.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      a.props.showFourColumnMonthYearPicker,
                    showYearPicker: a.props.showYearPicker,
                    showQuarterYearPicker: a.props.showQuarterYearPicker,
                    isInputFocused: a.props.isInputFocused,
                    containerRef: a.containerRef,
                    monthShowsDuplicateDaysEnd: l,
                    monthShowsDuplicateDaysStart: d,
                  })
                )
              );
            }
            return t;
          }
        }),
        le(fe(a), "renderYears", function () {
          if (!a.props.showTimeSelectOnly)
            return a.props.showYearPicker
              ? e.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  a.renderHeader(),
                  e.createElement(
                    Ot,
                    de(
                      { onDayClick: a.handleDayClick, date: a.state.date },
                      a.props
                    )
                  )
                )
              : void 0;
        }),
        le(fe(a), "renderTimeSection", function () {
          if (
            a.props.showTimeSelect &&
            (a.state.monthContainer || a.props.showTimeSelectOnly)
          )
            return e.createElement(Nt, {
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
        le(fe(a), "renderInputTimeSection", function () {
          var t = new Date(a.props.selected),
            r =
              Me(t) && Boolean(a.props.selected)
                ? "".concat(ft(t.getHours()), ":").concat(ft(t.getMinutes()))
                : "";
          if (a.props.showTimeInput)
            return e.createElement(xt, {
              date: t,
              timeString: r,
              timeInputLabel: a.props.timeInputLabel,
              onChange: a.props.onTimeChange,
              customTimeInput: a.props.customTimeInput,
            });
        }),
        (a.containerRef = e.createRef()),
        (a.state = {
          date: a.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        a
      );
    }
    return (
      ce(
        o,
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
              !Be(this.props.preSelection, e.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !Be(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props.container || Tt;
              return e.createElement(
                "div",
                { ref: this.containerRef },
                e.createElement(
                  r,
                  {
                    className: t("react-datepicker", this.props.className, {
                      "react-datepicker--time-only":
                        this.props.showTimeSelectOnly,
                    }),
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
                yearItemNumber: 12,
              };
            },
          },
        ]
      ),
      o
    );
  })(),
  Lt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n(e) {
      var t;
      return (
        pe(this, n),
        ((t = r.call(this, e)).el = document.createElement("div")),
        t
      );
    }
    return (
      ce(n, [
        {
          key: "componentDidMount",
          value: function () {
            (this.portalRoot = document.getElementById(this.props.portalId)),
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
            return ee.createPortal(this.props.children, this.el);
          },
        },
      ]),
      n
    );
  })(),
  Ft = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Rt = (function (t) {
    ue(n, e.Component);
    var r = ve(n);
    function n(t) {
      var o;
      return (
        pe(this, n),
        le(fe((o = r.call(this, t))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              o.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Ft);
        }),
        le(fe(o), "handleFocusStart", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        le(fe(o), "handleFocusEnd", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (o.tabLoopRef = e.createRef()),
        o
      );
    }
    return (
      ce(
        n,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? e.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    e.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    e.createElement("div", {
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
      n
    );
  })(),
  At = (function (r) {
    ue(o, e.Component);
    var n = ve(o);
    function o() {
      return pe(this, o), n.apply(this, arguments);
    }
    return (
      ce(
        o,
        [
          {
            key: "render",
            value: function () {
              var r,
                n = this.props,
                o = n.className,
                a = n.wrapperClassName,
                s = n.hidePopper,
                p = n.popperComponent,
                i = n.popperModifiers,
                c = n.popperPlacement,
                l = n.popperProps,
                d = n.targetComponent,
                u = n.enableTabLoop,
                h = n.popperOnKeyDown,
                m = n.portalId;
              if (!s) {
                var f = t("react-datepicker-popper", o);
                r = e.createElement(
                  te,
                  de({ modifiers: i, placement: c }, l),
                  function (t) {
                    var r = t.ref,
                      n = t.style,
                      o = t.placement,
                      a = t.arrowProps;
                    return e.createElement(
                      Rt,
                      { enableTabLoop: u },
                      e.createElement(
                        "div",
                        {
                          ref: r,
                          style: n,
                          className: f,
                          "data-placement": o,
                          onKeyDown: h,
                        },
                        e.cloneElement(p, { arrowProps: a })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (r = e.createElement(this.props.popperContainer, {}, r)),
                m && !s && (r = e.createElement(Lt, { portalId: m }, r));
              var y = t("react-datepicker-wrapper", a);
              return e.createElement(
                re,
                { className: "react-datepicker-manager" },
                e.createElement(ne, null, function (t) {
                  var r = t.ref;
                  return e.createElement("div", { ref: r, className: y }, d);
                }),
                r
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
      o
    );
  })(),
  Wt = Z(It);
var Bt = (function (n) {
    ue(a, e.Component);
    var o = ve(a);
    function a(n) {
      var s;
      return (
        pe(this, a),
        le(fe((s = o.call(this, n))), "getPreSelection", function () {
          return s.props.openToDate
            ? s.props.openToDate
            : s.props.selectsEnd && s.props.startDate
            ? s.props.startDate
            : s.props.selectsStart && s.props.endDate
            ? s.props.endDate
            : _e();
        }),
        le(fe(s), "calcInitialState", function () {
          var e,
            t = s.getPreSelection(),
            r = dt(s.props),
            n = ut(s.props),
            o = r && $(t, F(r)) ? r : n && U(t, K(n)) ? n : t;
          return {
            open: s.props.startOpen || !1,
            preventFocus: !1,
            preSelection:
              null !==
                (e = s.props.selectsRange
                  ? s.props.startDate
                  : s.props.selected) && void 0 !== e
                ? e
                : o,
            highlightDates: ht(s.props.highlightDates),
            focused: !1,
            shouldFocusDayInline: !1,
          };
        }),
        le(fe(s), "clearPreventFocusTimeout", function () {
          s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
        }),
        le(fe(s), "setFocus", function () {
          s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
        }),
        le(fe(s), "setBlur", function () {
          s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
        }),
        le(fe(s), "setOpen", function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.setState(
            {
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection,
              lastPreSelectChange: jt,
            },
            function () {
              e ||
                s.setState(
                  function (e) {
                    return { focused: !!t && e.focused };
                  },
                  function () {
                    !t && s.setBlur(), s.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        le(fe(s), "inputOk", function () {
          return r(s.state.preSelection);
        }),
        le(fe(s), "isCalendarOpen", function () {
          return void 0 === s.props.open
            ? s.state.open && !s.props.disabled && !s.props.readOnly
            : s.props.open;
        }),
        le(fe(s), "handleFocus", function (e) {
          s.state.preventFocus ||
            (s.props.onFocus(e),
            s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
            s.setState({ focused: !0 });
        }),
        le(fe(s), "cancelFocusInput", function () {
          clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
        }),
        le(fe(s), "deferFocusInput", function () {
          s.cancelFocusInput(),
            (s.inputFocusTimeout = setTimeout(function () {
              return s.setFocus();
            }, 1));
        }),
        le(fe(s), "handleDropdownFocus", function () {
          s.cancelFocusInput();
        }),
        le(fe(s), "handleBlur", function (e) {
          (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
            s.props.onBlur(e),
            s.setState({ focused: !1 });
        }),
        le(fe(s), "handleCalendarClickOutside", function (e) {
          s.props.inline || s.setOpen(!1),
            s.props.onClickOutside(e),
            s.props.withPortal && e.preventDefault();
        }),
        le(fe(s), "handleChange", function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !s.props.onChangeRaw ||
            (s.props.onChangeRaw.apply(fe(s), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            s.setState({ inputValue: n.target.value, lastPreSelectChange: Kt });
            var o = Se(
              n.target.value,
              s.props.dateFormat,
              s.props.locale,
              s.props.strictParsing,
              s.props.minDate
            );
            (!o && n.target.value) || s.setSelected(o, n, !0);
          }
        }),
        le(fe(s), "handleSelect", function (e, t, r) {
          if (
            (s.setState({ preventFocus: !0 }, function () {
              return (
                (s.preventFocusTimeout = setTimeout(function () {
                  return s.setState({ preventFocus: !1 });
                }, 50)),
                s.preventFocusTimeout
              );
            }),
            s.props.onChangeRaw && s.props.onChangeRaw(t),
            s.setSelected(e, t, !1, r),
            !s.props.shouldCloseOnSelect || s.props.showTimeSelect)
          )
            s.setPreSelection(e);
          else if (!s.props.inline) {
            s.props.selectsRange || s.setOpen(!1);
            var n = s.props,
              o = n.startDate,
              a = n.endDate;
            !o || a || $(e, o) || s.setOpen(!1);
          }
        }),
        le(fe(s), "setSelected", function (e, t, r, n) {
          var o = e;
          if (null === o || !Ge(o, s.props)) {
            var a = s.props,
              p = a.onChange,
              i = a.selectsRange,
              c = a.startDate,
              l = a.endDate;
            if (!Ke(s.props.selected, o) || s.props.allowSameDay || i)
              if (
                (null !== o &&
                  (!s.props.selected ||
                    (r &&
                      (s.props.showTimeSelect ||
                        s.props.showTimeSelectOnly ||
                        s.props.showTimeInput)) ||
                    (o = Ne(o, {
                      hour: v(s.props.selected),
                      minute: y(s.props.selected),
                      second: f(s.props.selected),
                    })),
                  s.props.inline || s.setState({ preSelection: o }),
                  s.props.focusSelectedMonth ||
                    s.setState({ monthSelectedIn: n })),
                i)
              ) {
                var d = c && !l,
                  u = c && l;
                !c && !l
                  ? p([o, null], t)
                  : d && ($(o, c) ? p([o, null], t) : p([c, o], t)),
                  u && p([o, null], t);
              } else p(o, t);
            r || (s.props.onSelect(o, t), s.setState({ inputValue: null }));
          }
        }),
        le(fe(s), "setPreSelection", function (e) {
          var t = void 0 !== s.props.minDate,
            r = void 0 !== s.props.maxDate,
            n = !0;
          if (e) {
            var o = F(e);
            if (t && r) n = je(e, s.props.minDate, s.props.maxDate);
            else if (t) {
              var a = F(s.props.minDate);
              n = U(e, a) || Ke(o, a);
            } else if (r) {
              var p = K(s.props.maxDate);
              n = $(e, p) || Ke(o, p);
            }
          }
          n && s.setState({ preSelection: e });
        }),
        le(fe(s), "handleTimeChange", function (e) {
          var t = Ne(
            s.props.selected ? s.props.selected : s.getPreSelection(),
            { hour: v(e), minute: y(e) }
          );
          s.setState({ preSelection: t }),
            s.props.onChange(t),
            s.props.shouldCloseOnSelect && s.setOpen(!1),
            s.props.showTimeInput && s.setOpen(!0),
            s.setState({ inputValue: null });
        }),
        le(fe(s), "onInputClick", function () {
          s.props.disabled || s.props.readOnly || s.setOpen(!0),
            s.props.onInputClick();
        }),
        le(fe(s), "onInputKeyDown", function (e) {
          s.props.onKeyDown(e);
          var t = e.key;
          if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
            if (s.state.open) {
              if ("ArrowDown" === t || "ArrowUp" === t) {
                e.preventDefault();
                var r =
                  s.calendar.componentNode &&
                  s.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (r && r.focus({ preventScroll: !0 }));
              }
              var n = _e(s.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  s.inputOk() && s.state.lastPreSelectChange === jt
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
                s.inputOk() ||
                  s.props.onInputError({
                    code: 1,
                    msg: "Date input not valid.",
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
        }),
        le(fe(s), "onDayKeyDown", function (e) {
          s.props.onKeyDown(e);
          var t = e.key,
            r = _e(s.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              s.handleSelect(r, e),
              !s.props.shouldCloseOnSelect && s.setPreSelection(r);
          else if ("Escape" === t)
            e.preventDefault(),
              s.setOpen(!1),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!s.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = d(r, 1);
                break;
              case "ArrowRight":
                n = p(r, 1);
                break;
              case "ArrowUp":
                n = u(r, 1);
                break;
              case "ArrowDown":
                n = i(r, 1);
                break;
              case "PageUp":
                n = h(r, 1);
                break;
              case "PageDown":
                n = c(r, 1);
                break;
              case "Home":
                n = m(r, 1);
                break;
              case "End":
                n = l(r, 1);
            }
            if (!n)
              return void (
                s.props.onInputError &&
                s.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            if (
              (e.preventDefault(),
              s.setState({ lastPreSelectChange: jt }),
              s.props.adjustDateOnChange && s.setSelected(n),
              s.setPreSelection(n),
              s.props.inline)
            ) {
              var o = g(r),
                a = g(n),
                f = C(r),
                y = C(n);
              o !== a || f !== y
                ? s.setState({ shouldFocusDayInline: !0 })
                : s.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        le(fe(s), "onPopperKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function () {
              s.setOpen(!1),
                setTimeout(function () {
                  s.setFocus(), s.setState({ preventFocus: !1 });
                });
            }));
        }),
        le(fe(s), "onClearClick", function (e) {
          e && e.preventDefault && e.preventDefault(),
            s.props.selectsRange
              ? s.props.onChange([null, null], e)
              : s.props.onChange(null, e),
            s.setState({ inputValue: null });
        }),
        le(fe(s), "clear", function () {
          s.onClearClick();
        }),
        le(fe(s), "onScroll", function (e) {
          "boolean" == typeof s.props.closeOnScroll && s.props.closeOnScroll
            ? (e.target !== document &&
                e.target !== document.documentElement &&
                e.target !== document.body) ||
              s.setOpen(!1)
            : "function" == typeof s.props.closeOnScroll &&
              s.props.closeOnScroll(e) &&
              s.setOpen(!1);
        }),
        le(fe(s), "renderCalendar", function () {
          return s.props.inline || s.isCalendarOpen()
            ? e.createElement(
                Wt,
                {
                  ref: function (e) {
                    s.calendar = e;
                  },
                  locale: s.props.locale,
                  calendarStartDay: s.props.calendarStartDay,
                  chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    s.props.disabledDayAriaLabelPrefix,
                  weekAriaLabelPrefix: s.props.weekAriaLabelPrefix,
                  adjustDateOnChange: s.props.adjustDateOnChange,
                  setOpen: s.setOpen,
                  shouldCloseOnSelect: s.props.shouldCloseOnSelect,
                  dateFormat: s.props.dateFormatCalendar,
                  useWeekdaysShort: s.props.useWeekdaysShort,
                  formatWeekDay: s.props.formatWeekDay,
                  dropdownMode: s.props.dropdownMode,
                  selected: s.props.selected,
                  preSelection: s.state.preSelection,
                  onSelect: s.handleSelect,
                  onWeekSelect: s.props.onWeekSelect,
                  openToDate: s.props.openToDate,
                  minDate: s.props.minDate,
                  maxDate: s.props.maxDate,
                  selectsStart: s.props.selectsStart,
                  selectsEnd: s.props.selectsEnd,
                  selectsRange: s.props.selectsRange,
                  startDate: s.props.startDate,
                  endDate: s.props.endDate,
                  excludeDates: s.props.excludeDates,
                  filterDate: s.props.filterDate,
                  onClickOutside: s.handleCalendarClickOutside,
                  formatWeekNumber: s.props.formatWeekNumber,
                  highlightDates: s.state.highlightDates,
                  includeDates: s.props.includeDates,
                  includeTimes: s.props.includeTimes,
                  injectTimes: s.props.injectTimes,
                  inline: s.props.inline,
                  shouldFocusDayInline: s.state.shouldFocusDayInline,
                  peekNextMonth: s.props.peekNextMonth,
                  showMonthDropdown: s.props.showMonthDropdown,
                  showPreviousMonths: s.props.showPreviousMonths,
                  useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                  showMonthYearDropdown: s.props.showMonthYearDropdown,
                  showWeekNumbers: s.props.showWeekNumbers,
                  showYearDropdown: s.props.showYearDropdown,
                  withPortal: s.props.withPortal,
                  forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    s.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: s.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    s.props.scrollableMonthYearDropdown,
                  todayButton: s.props.todayButton,
                  weekLabel: s.props.weekLabel,
                  outsideClickIgnoreClass:
                    "react-datepicker-ignore-onclickoutside",
                  fixedHeight: s.props.fixedHeight,
                  monthsShown: s.props.monthsShown,
                  monthSelectedIn: s.state.monthSelectedIn,
                  onDropdownFocus: s.handleDropdownFocus,
                  onMonthChange: s.props.onMonthChange,
                  onYearChange: s.props.onYearChange,
                  dayClassName: s.props.dayClassName,
                  weekDayClassName: s.props.weekDayClassName,
                  monthClassName: s.props.monthClassName,
                  timeClassName: s.props.timeClassName,
                  showTimeSelect: s.props.showTimeSelect,
                  showTimeSelectOnly: s.props.showTimeSelectOnly,
                  onTimeChange: s.handleTimeChange,
                  timeFormat: s.props.timeFormat,
                  timeIntervals: s.props.timeIntervals,
                  minTime: s.props.minTime,
                  maxTime: s.props.maxTime,
                  excludeTimes: s.props.excludeTimes,
                  filterTime: s.props.filterTime,
                  timeCaption: s.props.timeCaption,
                  className: s.props.calendarClassName,
                  container: s.props.calendarContainer,
                  yearItemNumber: s.props.yearItemNumber,
                  yearDropdownItemNumber: s.props.yearDropdownItemNumber,
                  previousMonthButtonLabel: s.props.previousMonthButtonLabel,
                  nextMonthButtonLabel: s.props.nextMonthButtonLabel,
                  previousYearButtonLabel: s.props.previousYearButtonLabel,
                  nextYearButtonLabel: s.props.nextYearButtonLabel,
                  timeInputLabel: s.props.timeInputLabel,
                  disabledKeyboardNavigation:
                    s.props.disabledKeyboardNavigation,
                  renderCustomHeader: s.props.renderCustomHeader,
                  popperProps: s.props.popperProps,
                  renderDayContents: s.props.renderDayContents,
                  onDayMouseEnter: s.props.onDayMouseEnter,
                  onMonthMouseLeave: s.props.onMonthMouseLeave,
                  showTimeInput: s.props.showTimeInput,
                  showMonthYearPicker: s.props.showMonthYearPicker,
                  showFullMonthYearPicker: s.props.showFullMonthYearPicker,
                  showTwoColumnMonthYearPicker:
                    s.props.showTwoColumnMonthYearPicker,
                  showFourColumnMonthYearPicker:
                    s.props.showFourColumnMonthYearPicker,
                  showYearPicker: s.props.showYearPicker,
                  showQuarterYearPicker: s.props.showQuarterYearPicker,
                  showPopperArrow: s.props.showPopperArrow,
                  excludeScrollbar: s.props.excludeScrollbar,
                  handleOnKeyDown: s.onDayKeyDown,
                  handleTimeKeyDown: s.props.onKeyDown,
                  isInputFocused: s.state.focused,
                  customTimeInput: s.props.customTimeInput,
                  setPreSelection: s.setPreSelection,
                },
                s.props.children
              )
            : null;
        }),
        le(fe(s), "renderDateInput", function () {
          var r,
            n = t(
              s.props.className,
              le({}, "react-datepicker-ignore-onclickoutside", s.state.open)
            ),
            o =
              s.props.customInput || e.createElement("input", { type: "text" }),
            a = s.props.customInputRef || "ref",
            p =
              "string" == typeof s.props.value
                ? s.props.value
                : "string" == typeof s.state.inputValue
                ? s.state.inputValue
                : s.props.selectsRange
                ? (function (e, t, r) {
                    if (!e) return "";
                    var n = Ee(e, r),
                      o = t ? Ee(t, r) : "";
                    return "".concat(n, " - ").concat(o);
                  })(s.props.startDate, s.props.endDate, s.props)
                : Ee(s.props.selected, s.props);
          return e.cloneElement(
            o,
            (le((r = {}), a, function (e) {
              s.input = e;
            }),
            le(r, "value", p),
            le(r, "onBlur", s.handleBlur),
            le(r, "onChange", s.handleChange),
            le(r, "onClick", s.onInputClick),
            le(r, "onFocus", s.handleFocus),
            le(r, "onKeyDown", s.onInputKeyDown),
            le(r, "id", s.props.id),
            le(r, "name", s.props.name),
            le(r, "autoFocus", s.props.autoFocus),
            le(r, "placeholder", s.props.placeholderText),
            le(r, "disabled", s.props.disabled),
            le(r, "autoComplete", s.props.autoComplete),
            le(r, "className", t(o.props.className, n)),
            le(r, "title", s.props.title),
            le(r, "readOnly", s.props.readOnly),
            le(r, "required", s.props.required),
            le(r, "tabIndex", s.props.tabIndex),
            le(r, "aria-describedby", s.props.ariaDescribedBy),
            le(r, "aria-invalid", s.props.ariaInvalid),
            le(r, "aria-labelledby", s.props.ariaLabelledBy),
            le(r, "aria-required", s.props.ariaRequired),
            r)
          );
        }),
        le(fe(s), "renderClearButton", function () {
          var t = s.props,
            r = t.isClearable,
            n = t.selected,
            o = t.startDate,
            a = t.endDate,
            p = t.clearButtonTitle,
            i = t.clearButtonClassName,
            c = void 0 === i ? "" : i,
            l = t.ariaLabelClose,
            d = void 0 === l ? "Close" : l;
          return !r || (null == n && null == o && null == a)
            ? null
            : e.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon ".concat(c).trim(),
                "aria-label": d,
                onClick: s.onClearClick,
                title: p,
                tabIndex: -1,
              });
        }),
        (s.state = s.calcInitialState()),
        s
      );
    }
    return (
      ce(
        a,
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
              var r, n;
              e.inline &&
                ((r = e.selected),
                (n = this.props.selected),
                r && n ? g(r) !== g(n) || C(r) !== C(n) : r !== n) &&
                this.setPreSelection(this.props.selected),
                void 0 !== this.state.monthSelectedIn &&
                  e.monthsShown !== this.props.monthsShown &&
                  this.setState({ monthSelectedIn: 0 }),
                e.highlightDates !== this.props.highlightDates &&
                  this.setState({
                    highlightDates: ht(this.props.highlightDates),
                  }),
                t.focused ||
                  Ke(e.selected, this.props.selected) ||
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
              return e.createElement(
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
              var t = this.renderCalendar();
              if (this.props.inline) return t;
              if (this.props.withPortal) {
                var r = this.state.open
                  ? e.createElement(
                      "div",
                      { className: "react-datepicker__portal" },
                      t
                    )
                  : null;
                return (
                  this.state.open &&
                    this.props.portalId &&
                    (r = e.createElement(
                      Lt,
                      { portalId: this.props.portalId },
                      r
                    )),
                  e.createElement("div", null, this.renderInputContainer(), r)
                );
              }
              return e.createElement(At, {
                className: this.props.popperClassName,
                wrapperClassName: this.props.wrapperClassName,
                hidePopper: !this.isCalendarOpen(),
                portalId: this.props.portalId,
                popperModifiers: this.props.popperModifiers,
                targetComponent: this.renderInputContainer(),
                popperContainer: this.props.popperContainer,
                popperComponent: t,
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
                yearItemNumber: 12,
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
      a
    );
  })(),
  Kt = "input",
  jt = "navigate";
export default Bt;
export {
  Tt as CalendarContainer,
  Ve as getDefaultLocale,
  He as registerLocale,
  Qe as setDefaultLocale,
};
