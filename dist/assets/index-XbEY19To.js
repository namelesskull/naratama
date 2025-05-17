function Mh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const s in r)
        if (s !== 'default' && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ku = { exports: {} },
  Js = {},
  Ju = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ar = Symbol.for('react.element'),
  Fh = Symbol.for('react.portal'),
  Bh = Symbol.for('react.fragment'),
  Vh = Symbol.for('react.strict_mode'),
  Wh = Symbol.for('react.profiler'),
  Hh = Symbol.for('react.provider'),
  qh = Symbol.for('react.context'),
  Kh = Symbol.for('react.forward_ref'),
  Jh = Symbol.for('react.suspense'),
  Gh = Symbol.for('react.memo'),
  Zh = Symbol.for('react.lazy'),
  ca = Symbol.iterator;
function Qh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ca && e[ca]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  Qu = {};
function An(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qu),
    (this.updater = n || Gu);
}
An.prototype.isReactComponent = {};
An.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
An.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Yu() {}
Yu.prototype = An.prototype;
function rl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qu),
    (this.updater = n || Gu);
}
var sl = (rl.prototype = new Yu());
sl.constructor = rl;
Zu(sl, An.prototype);
sl.isPureReactComponent = !0;
var da = Array.isArray,
  Xu = Object.prototype.hasOwnProperty,
  il = { current: null },
  ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function tc(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Xu.call(t, r) && !ec.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    s.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: Ar,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: il.current,
  };
}
function Yh(e, t) {
  return {
    $$typeof: Ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ol(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ar;
}
function Xh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ha = /\/+/g;
function wi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Xh('' + e.key)
    : t.toString(36);
}
function cs(e, t, n, r, s) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ar:
          case Fh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === '' ? '.' + wi(o, 0) : r),
      da(s)
        ? ((n = ''),
          e != null && (n = e.replace(ha, '$&/') + '/'),
          cs(s, t, n, '', function (u) {
            return u;
          }))
        : s != null &&
          (ol(s) &&
            (s = Yh(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ''
                  : ('' + s.key).replace(ha, '$&/') + '/') +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), da(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + wi(i, l);
      o += cs(i, t, n, a, s);
    }
  else if (((a = Qh(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + wi(i, l++)), (o += cs(i, t, n, a, s));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    cs(e, r, '', '', function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function ef(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  ds = { transition: null },
  tf = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: ds,
    ReactCurrentOwner: il,
  };
I.Children = {
  map: Wr,
  forEach: function (e, t, n) {
    Wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ol(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
I.Component = An;
I.Fragment = Bh;
I.Profiler = Wh;
I.PureComponent = rl;
I.StrictMode = Vh;
I.Suspense = Jh;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tf;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Zu({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = il.current)),
      t.key !== void 0 && (s = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Xu.call(t, a) &&
        !ec.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ar, type: e.type, key: s, ref: i, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: qh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hh, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = tc;
I.createFactory = function (e) {
  var t = tc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Kh, render: e };
};
I.isValidElement = ol;
I.lazy = function (e) {
  return { $$typeof: Zh, _payload: { _status: -1, _result: e }, _init: ef };
};
I.memo = function (e, t) {
  return { $$typeof: Gh, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = ds.transition;
  ds.transition = {};
  try {
    e();
  } finally {
    ds.transition = t;
  }
};
I.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
I.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return fe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
I.useId = function () {
  return fe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return fe.current.useRef(e);
};
I.useState = function (e) {
  return fe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return fe.current.useTransition();
};
I.version = '18.2.0';
Ju.exports = I;
var S = Ju.exports;
const ll = nl(S),
  nf = Mh({ __proto__: null, default: ll }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rf = S,
  sf = Symbol.for('react.element'),
  of = Symbol.for('react.fragment'),
  lf = Object.prototype.hasOwnProperty,
  af = rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) lf.call(t, r) && !uf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: sf,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: af.current,
  };
}
Js.Fragment = of;
Js.jsx = nc;
Js.jsxs = nc;
Ku.exports = Js;
var c = Ku.exports,
  Xi = {},
  rc = { exports: {} },
  Ee = {},
  sc = { exports: {} },
  ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, b) {
    var O = C.length;
    C.push(b);
    e: for (; 0 < O; ) {
      var J = (O - 1) >>> 1,
        ee = C[J];
      if (0 < s(ee, b)) (C[J] = b), (C[O] = ee), (O = J);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var b = C[0],
      O = C.pop();
    if (O !== b) {
      C[0] = O;
      e: for (var J = 0, ee = C.length, Br = ee >>> 1; J < Br; ) {
        var It = 2 * (J + 1) - 1,
          yi = C[It],
          Lt = It + 1,
          Vr = C[Lt];
        if (0 > s(yi, O))
          Lt < ee && 0 > s(Vr, yi)
            ? ((C[J] = Vr), (C[Lt] = O), (J = Lt))
            : ((C[J] = yi), (C[It] = O), (J = It));
        else if (Lt < ee && 0 > s(Vr, O)) (C[J] = Vr), (C[Lt] = O), (J = Lt);
        else break e;
      }
    }
    return b;
  }
  function s(C, b) {
    var O = C.sortIndex - b.sortIndex;
    return O !== 0 ? O : C.id - b.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    h = null,
    f = 3,
    v = !1,
    y = !1,
    w = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(C) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= C)
        r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function x(C) {
    if (((w = !1), g(C), !y))
      if (n(a) !== null) (y = !0), gi(j);
      else {
        var b = n(u);
        b !== null && vi(x, b.startTime - C);
      }
  }
  function j(C, b) {
    (y = !1), w && ((w = !1), m(T), (T = -1)), (v = !0);
    var O = f;
    try {
      for (
        g(b), h = n(a);
        h !== null && (!(h.expirationTime > b) || (C && !Le()));

      ) {
        var J = h.callback;
        if (typeof J == 'function') {
          (h.callback = null), (f = h.priorityLevel);
          var ee = J(h.expirationTime <= b);
          (b = e.unstable_now()),
            typeof ee == 'function' ? (h.callback = ee) : h === n(a) && r(a),
            g(b);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Br = !0;
      else {
        var It = n(u);
        It !== null && vi(x, It.startTime - b), (Br = !1);
      }
      return Br;
    } finally {
      (h = null), (f = O), (v = !1);
    }
  }
  var N = !1,
    P = null,
    T = -1,
    K = 5,
    L = -1;
  function Le() {
    return !(e.unstable_now() - L < K);
  }
  function Fn() {
    if (P !== null) {
      var C = e.unstable_now();
      L = C;
      var b = !0;
      try {
        b = P(!0, C);
      } finally {
        b ? Bn() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var Bn;
  if (typeof p == 'function')
    Bn = function () {
      p(Fn);
    };
  else if (typeof MessageChannel < 'u') {
    var ua = new MessageChannel(),
      zh = ua.port2;
    (ua.port1.onmessage = Fn),
      (Bn = function () {
        zh.postMessage(null);
      });
  } else
    Bn = function () {
      _(Fn, 0);
    };
  function gi(C) {
    (P = C), N || ((N = !0), Bn());
  }
  function vi(C, b) {
    T = _(function () {
      C(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), gi(j));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (K = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = f;
      }
      var O = f;
      f = b;
      try {
        return C();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, b) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var O = f;
      f = C;
      try {
        return b();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (C, b, O) {
      var J = e.unstable_now();
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? J + O : J))
          : (O = J),
        C)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = O + ee),
        (C = {
          id: d++,
          callback: b,
          priorityLevel: C,
          startTime: O,
          expirationTime: ee,
          sortIndex: -1,
        }),
        O > J
          ? ((C.sortIndex = O),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (w ? (m(T), (T = -1)) : (w = !0), vi(x, O - J)))
          : ((C.sortIndex = ee), t(a, C), y || v || ((y = !0), gi(j))),
        C
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (C) {
      var b = f;
      return function () {
        var O = f;
        f = b;
        try {
          return C.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(ic);
sc.exports = ic;
var cf = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc = S,
  je = cf;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var lc = new Set(),
  mr = {};
function Zt(e, t) {
  En(e, t), En(e + 'Capture', t);
}
function En(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++) lc.add(t[e]);
}
var nt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  eo = Object.prototype.hasOwnProperty,
  df =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fa = {},
  pa = {};
function hf(e) {
  return eo.call(pa, e)
    ? !0
    : eo.call(fa, e)
    ? !1
    : df.test(e)
    ? (pa[e] = !0)
    : ((fa[e] = !0), !1);
}
function ff(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function pf(e, t, n, r) {
  if (t === null || typeof t > 'u' || ff(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var al = /[\-:]([a-z])/g;
function ul(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(al, ul);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(al, ul);
    ie[t] = new pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(al, ul);
  ie[t] = new pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cl(e, t, n, r) {
  var s = ie.hasOwnProperty(t) ? ie[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pf(t, n, s, r) && (n = null),
    r || s === null
      ? hf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for('react.element'),
  on = Symbol.for('react.portal'),
  ln = Symbol.for('react.fragment'),
  dl = Symbol.for('react.strict_mode'),
  to = Symbol.for('react.profiler'),
  ac = Symbol.for('react.provider'),
  uc = Symbol.for('react.context'),
  hl = Symbol.for('react.forward_ref'),
  no = Symbol.for('react.suspense'),
  ro = Symbol.for('react.suspense_list'),
  fl = Symbol.for('react.memo'),
  ut = Symbol.for('react.lazy'),
  cc = Symbol.for('react.offscreen'),
  ma = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ma && e[ma]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var H = Object.assign,
  xi;
function Yn(e) {
  if (xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xi = (t && t[1]) || '';
    }
  return (
    `
` +
    xi +
    e
  );
}
var _i = !1;
function ki(e, t) {
  if (!e || _i) return '';
  _i = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && s[o] !== i[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (s[o] !== i[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || s[o] !== i[l])) {
                var a =
                  `
` + s[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (_i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Yn(e) : '';
}
function mf(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn('Lazy');
    case 13:
      return Yn('Suspense');
    case 19:
      return Yn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ki(e.type, !1)), e;
    case 11:
      return (e = ki(e.type.render, !1)), e;
    case 1:
      return (e = ki(e.type, !0)), e;
    default:
      return '';
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ln:
      return 'Fragment';
    case on:
      return 'Portal';
    case to:
      return 'Profiler';
    case dl:
      return 'StrictMode';
    case no:
      return 'Suspense';
    case ro:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case uc:
        return (e.displayName || 'Context') + '.Consumer';
      case ac:
        return (e._context.displayName || 'Context') + '.Provider';
      case hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case fl:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || 'Memo'
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function gf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return so(t);
    case 8:
      return t === dl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function dc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function vf(e) {
  var t = dc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function qr(e) {
  e._valueTracker || (e._valueTracker = vf(e));
}
function hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = dc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ks(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function io(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ga(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function fc(e, t) {
  (t = t.checked), t != null && cl(e, 'checked', t, !1);
}
function oo(e, t) {
  fc(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? lo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && lo(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function va(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function lo(e, t, n) {
  (t !== 'number' || ks(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Xn = Array.isArray;
function yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Nt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ao(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ya(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function pc(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function wa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function mc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function uo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? mc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Kr,
  gc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Kr = Kr || document.createElement('div'),
          Kr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(sr).forEach(function (e) {
  yf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
  });
});
function vc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (sr.hasOwnProperty(e) && sr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function yc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        s = vc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var wf = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function co(e, t) {
  if (t) {
    if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function ho(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var fo = null;
function pl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var po = null,
  wn = null,
  xn = null;
function xa(e) {
  if ((e = Dr(e))) {
    if (typeof po != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Xs(t)), po(e.stateNode, e.type, t));
  }
}
function wc(e) {
  wn ? (xn ? xn.push(e) : (xn = [e])) : (wn = e);
}
function xc() {
  if (wn) {
    var e = wn,
      t = xn;
    if (((xn = wn = null), xa(e), t)) for (e = 0; e < t.length; e++) xa(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function kc() {}
var Si = !1;
function Sc(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return _c(e, t, n);
  } finally {
    (Si = !1), (wn !== null || xn !== null) && (kc(), xc());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var mo = !1;
if (nt)
  try {
    var Wn = {};
    Object.defineProperty(Wn, 'passive', {
      get: function () {
        mo = !0;
      },
    }),
      window.addEventListener('test', Wn, Wn),
      window.removeEventListener('test', Wn, Wn);
  } catch {
    mo = !1;
  }
function xf(e, t, n, r, s, i, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ir = !1,
  Ss = null,
  js = !1,
  go = null,
  _f = {
    onError: function (e) {
      (ir = !0), (Ss = e);
    },
  };
function kf(e, t, n, r, s, i, o, l, a) {
  (ir = !1), (Ss = null), xf.apply(_f, arguments);
}
function Sf(e, t, n, r, s, i, o, l, a) {
  if ((kf.apply(this, arguments), ir)) {
    if (ir) {
      var u = Ss;
      (ir = !1), (Ss = null);
    } else throw Error(k(198));
    js || ((js = !0), (go = u));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _a(e) {
  if (Qt(e) !== e) throw Error(k(188));
}
function jf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return _a(s), e;
        if (i === r) return _a(s), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, l = s.child; l; ) {
        if (l === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (l === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = i.child; l; ) {
          if (l === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (l === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ec(e) {
  return (e = jf(e)), e !== null ? Cc(e) : null;
}
function Cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nc = je.unstable_scheduleCallback,
  ka = je.unstable_cancelCallback,
  Ef = je.unstable_shouldYield,
  Cf = je.unstable_requestPaint,
  G = je.unstable_now,
  Nf = je.unstable_getCurrentPriorityLevel,
  ml = je.unstable_ImmediatePriority,
  Pc = je.unstable_UserBlockingPriority,
  Es = je.unstable_NormalPriority,
  Pf = je.unstable_LowPriority,
  Tc = je.unstable_IdlePriority,
  Gs = null,
  Je = null;
function Tf(e) {
  if (Je && typeof Je.onCommitFiberRoot == 'function')
    try {
      Je.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Rf,
  bf = Math.log,
  Of = Math.LN2;
function Rf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bf(e) / Of) | 0)) | 0;
}
var Jr = 64,
  Gr = 4194304;
function er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Cs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~s;
    l !== 0 ? (r = er(l)) : ((i &= o), i !== 0 && (r = er(i)));
  } else (o = n & ~s), o !== 0 ? (r = er(o)) : i !== 0 && (r = er(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function If(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      l = 1 << o,
      a = s[o];
    a === -1
      ? (!(l & n) || l & r) && (s[o] = If(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function vo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bc() {
  var e = Jr;
  return (Jr <<= 1), !(Jr & 4194240) && (Jr = 64), e;
}
function ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Fe(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var U = 0;
function Oc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rc,
  vl,
  Ic,
  Lc,
  Ac,
  yo = !1,
  Zr = [],
  yt = null,
  wt = null,
  xt = null,
  yr = new Map(),
  wr = new Map(),
  ht = [],
  $f =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Sa(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      yt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      wt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      xt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      yr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      wr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = Dr(t)), t !== null && vl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Uf(e, t, n, r, s) {
  switch (t) {
    case 'focusin':
      return (yt = Hn(yt, e, t, n, r, s)), !0;
    case 'dragenter':
      return (wt = Hn(wt, e, t, n, r, s)), !0;
    case 'mouseover':
      return (xt = Hn(xt, e, t, n, r, s)), !0;
    case 'pointerover':
      var i = s.pointerId;
      return yr.set(i, Hn(yr.get(i) || null, e, t, n, r, s)), !0;
    case 'gotpointercapture':
      return (
        (i = s.pointerId), wr.set(i, Hn(wr.get(i) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function $c(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jc(n)), t !== null)) {
          (e.blockedOn = t),
            Ac(e.priority, function () {
              Ic(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fo = r), n.target.dispatchEvent(r), (fo = null);
    } else return (t = Dr(n)), t !== null && vl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ja(e, t, n) {
  hs(e) && n.delete(t);
}
function Df() {
  (yo = !1),
    yt !== null && hs(yt) && (yt = null),
    wt !== null && hs(wt) && (wt = null),
    xt !== null && hs(xt) && (xt = null),
    yr.forEach(ja),
    wr.forEach(ja);
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yo ||
      ((yo = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, Df)));
}
function xr(e) {
  function t(s) {
    return qn(s, e);
  }
  if (0 < Zr.length) {
    qn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yt !== null && qn(yt, e),
      wt !== null && qn(wt, e),
      xt !== null && qn(xt, e),
      yr.forEach(t),
      wr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    $c(n), n.blockedOn === null && ht.shift();
}
var _n = ot.ReactCurrentBatchConfig,
  Ns = !0;
function zf(e, t, n, r) {
  var s = U,
    i = _n.transition;
  _n.transition = null;
  try {
    (U = 1), yl(e, t, n, r);
  } finally {
    (U = s), (_n.transition = i);
  }
}
function Mf(e, t, n, r) {
  var s = U,
    i = _n.transition;
  _n.transition = null;
  try {
    (U = 4), yl(e, t, n, r);
  } finally {
    (U = s), (_n.transition = i);
  }
}
function yl(e, t, n, r) {
  if (Ns) {
    var s = wo(e, t, n, r);
    if (s === null) Li(e, t, r, Ps, n), Sa(e, r);
    else if (Uf(s, e, t, n, r)) r.stopPropagation();
    else if ((Sa(e, r), t & 4 && -1 < $f.indexOf(e))) {
      for (; s !== null; ) {
        var i = Dr(s);
        if (
          (i !== null && Rc(i),
          (i = wo(e, t, n, r)),
          i === null && Li(e, t, r, Ps, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Li(e, t, r, null, n);
  }
}
var Ps = null;
function wo(e, t, n, r) {
  if (((Ps = null), (e = pl(r)), (e = Mt(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ps = e), null;
}
function Uc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Nf()) {
        case ml:
          return 1;
        case Pc:
          return 4;
        case Es:
        case Pf:
          return 16;
        case Tc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null,
  wl = null,
  fs = null;
function Dc() {
  if (fs) return fs;
  var e,
    t = wl,
    n = t.length,
    r,
    s = 'value' in mt ? mt.value : mt.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (fs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ps(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qr() {
  return !0;
}
function Ea() {
  return !1;
}
function Ce(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Qr
        : Ea),
      (this.isPropagationStopped = Ea),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Qr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qr));
      },
      persist: function () {},
      isPersistent: Qr,
    }),
    t
  );
}
var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xl = Ce($n),
  Ur = H({}, $n, { view: 0, detail: 0 }),
  Ff = Ce(Ur),
  Ei,
  Ci,
  Kn,
  Zs = H({}, Ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _l,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Kn &&
            (Kn && e.type === 'mousemove'
              ? ((Ei = e.screenX - Kn.screenX), (Ci = e.screenY - Kn.screenY))
              : (Ci = Ei = 0),
            (Kn = e)),
          Ei);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ci;
    },
  }),
  Ca = Ce(Zs),
  Bf = H({}, Zs, { dataTransfer: 0 }),
  Vf = Ce(Bf),
  Wf = H({}, Ur, { relatedTarget: 0 }),
  Ni = Ce(Wf),
  Hf = H({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = Ce(Hf),
  Kf = H({}, $n, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jf = Ce(Kf),
  Gf = H({}, $n, { data: 0 }),
  Na = Ce(Gf),
  Zf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Qf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Yf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yf[e]) ? !!t[e] : !1;
}
function _l() {
  return Xf;
}
var e0 = H({}, Ur, {
    key: function (e) {
      if (e.key) {
        var t = Zf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ps(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Qf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _l,
    charCode: function (e) {
      return e.type === 'keypress' ? ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ps(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  t0 = Ce(e0),
  n0 = H({}, Zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pa = Ce(n0),
  r0 = H({}, Ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _l,
  }),
  s0 = Ce(r0),
  i0 = H({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o0 = Ce(i0),
  l0 = H({}, Zs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  a0 = Ce(l0),
  u0 = [9, 13, 27, 32],
  kl = nt && 'CompositionEvent' in window,
  or = null;
nt && 'documentMode' in document && (or = document.documentMode);
var c0 = nt && 'TextEvent' in window && !or,
  zc = nt && (!kl || (or && 8 < or && 11 >= or)),
  Ta = ' ',
  ba = !1;
function Mc(e, t) {
  switch (e) {
    case 'keyup':
      return u0.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Fc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var an = !1;
function d0(e, t) {
  switch (e) {
    case 'compositionend':
      return Fc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ba = !0), Ta);
    case 'textInput':
      return (e = t.data), e === Ta && ba ? null : e;
    default:
      return null;
  }
}
function h0(e, t) {
  if (an)
    return e === 'compositionend' || (!kl && Mc(e, t))
      ? ((e = Dc()), (fs = wl = mt = null), (an = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return zc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var f0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!f0[e.type] : t === 'textarea';
}
function Bc(e, t, n, r) {
  wc(r),
    (t = Ts(t, 'onChange')),
    0 < t.length &&
      ((n = new xl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  _r = null;
function p0(e) {
  Xc(e, 0);
}
function Qs(e) {
  var t = dn(e);
  if (hc(t)) return e;
}
function m0(e, t) {
  if (e === 'change') return t;
}
var Vc = !1;
if (nt) {
  var Pi;
  if (nt) {
    var Ti = 'oninput' in document;
    if (!Ti) {
      var Ra = document.createElement('div');
      Ra.setAttribute('oninput', 'return;'),
        (Ti = typeof Ra.oninput == 'function');
    }
    Pi = Ti;
  } else Pi = !1;
  Vc = Pi && (!document.documentMode || 9 < document.documentMode);
}
function Ia() {
  lr && (lr.detachEvent('onpropertychange', Wc), (_r = lr = null));
}
function Wc(e) {
  if (e.propertyName === 'value' && Qs(_r)) {
    var t = [];
    Bc(t, _r, e, pl(e)), Sc(p0, t);
  }
}
function g0(e, t, n) {
  e === 'focusin'
    ? (Ia(), (lr = t), (_r = n), lr.attachEvent('onpropertychange', Wc))
    : e === 'focusout' && Ia();
}
function v0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Qs(_r);
}
function y0(e, t) {
  if (e === 'click') return Qs(t);
}
function w0(e, t) {
  if (e === 'input' || e === 'change') return Qs(t);
}
function x0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == 'function' ? Object.is : x0;
function kr(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!eo.call(t, s) || !Ve(e[s], t[s])) return !1;
  }
  return !0;
}
function La(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Aa(e, t) {
  var n = La(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = La(n);
  }
}
function Hc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qc() {
  for (var e = window, t = ks(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ks(e.document);
  }
  return t;
}
function Sl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function _0(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Aa(n, i));
        var o = Aa(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var k0 = nt && 'documentMode' in document && 11 >= document.documentMode,
  un = null,
  xo = null,
  ar = null,
  _o = !1;
function $a(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    un == null ||
    un !== ks(r) ||
    ((r = un),
    'selectionStart' in r && Sl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ar && kr(ar, r)) ||
      ((ar = r),
      (r = Ts(xo, 'onSelect')),
      0 < r.length &&
        ((t = new xl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
function Yr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var cn = {
    animationend: Yr('Animation', 'AnimationEnd'),
    animationiteration: Yr('Animation', 'AnimationIteration'),
    animationstart: Yr('Animation', 'AnimationStart'),
    transitionend: Yr('Transition', 'TransitionEnd'),
  },
  bi = {},
  Kc = {};
nt &&
  ((Kc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  'TransitionEvent' in window || delete cn.transitionend.transition);
function Ys(e) {
  if (bi[e]) return bi[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kc) return (bi[e] = t[n]);
  return e;
}
var Jc = Ys('animationend'),
  Gc = Ys('animationiteration'),
  Zc = Ys('animationstart'),
  Qc = Ys('transitionend'),
  Yc = new Map(),
  Ua =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Tt(e, t) {
  Yc.set(e, t), Zt(t, [e]);
}
for (var Oi = 0; Oi < Ua.length; Oi++) {
  var Ri = Ua[Oi],
    S0 = Ri.toLowerCase(),
    j0 = Ri[0].toUpperCase() + Ri.slice(1);
  Tt(S0, 'on' + j0);
}
Tt(Jc, 'onAnimationEnd');
Tt(Gc, 'onAnimationIteration');
Tt(Zc, 'onAnimationStart');
Tt('dblclick', 'onDoubleClick');
Tt('focusin', 'onFocus');
Tt('focusout', 'onBlur');
Tt(Qc, 'onTransitionEnd');
En('onMouseEnter', ['mouseout', 'mouseover']);
En('onMouseLeave', ['mouseout', 'mouseover']);
En('onPointerEnter', ['pointerout', 'pointerover']);
En('onPointerLeave', ['pointerout', 'pointerover']);
Zt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Zt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Zt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Zt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Zt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var tr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  E0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(tr));
function Da(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Sf(r, t, void 0, e), (e.currentTarget = null);
}
function Xc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && s.isPropagationStopped())) break e;
          Da(s, l, u), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && s.isPropagationStopped())
          )
            break e;
          Da(s, l, u), (i = a);
        }
    }
  }
  if (js) throw ((e = go), (js = !1), (go = null), e);
}
function M(e, t) {
  var n = t[Co];
  n === void 0 && (n = t[Co] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ed(t, e, 2, !1), n.add(r));
}
function Ii(e, t, n) {
  var r = 0;
  t && (r |= 4), ed(n, e, r, t);
}
var Xr = '_reactListening' + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[Xr]) {
    (e[Xr] = !0),
      lc.forEach(function (n) {
        n !== 'selectionchange' && (E0.has(n) || Ii(n, !1, e), Ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xr] || ((t[Xr] = !0), Ii('selectionchange', !1, t));
  }
}
function ed(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var s = zf;
      break;
    case 4:
      s = Mf;
      break;
    default:
      s = yl;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !mo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function Li(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === s || (a.nodeType === 8 && a.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Mt(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Sc(function () {
    var u = i,
      d = pl(n),
      h = [];
    e: {
      var f = Yc.get(e);
      if (f !== void 0) {
        var v = xl,
          y = e;
        switch (e) {
          case 'keypress':
            if (ps(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = t0;
            break;
          case 'focusin':
            (y = 'focus'), (v = Ni);
            break;
          case 'focusout':
            (y = 'blur'), (v = Ni);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Ni;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Ca;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Vf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = s0;
            break;
          case Jc:
          case Gc:
          case Zc:
            v = qf;
            break;
          case Qc:
            v = o0;
            break;
          case 'scroll':
            v = Ff;
            break;
          case 'wheel':
            v = a0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = Jf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Pa;
        }
        var w = (t & 4) !== 0,
          _ = !w && e === 'scroll',
          m = w ? (f !== null ? f + 'Capture' : null) : f;
        w = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = vr(p, m)), x != null && w.push(jr(p, x, g)))),
            _)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((f = new v(f, y, null, n, d)), h.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== fo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Mt(y) || y[rt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? Mt(y) : null),
              y !== null &&
                ((_ = Qt(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((w = Ca),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Pa),
              (x = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (_ = v == null ? f : dn(v)),
            (g = y == null ? f : dn(y)),
            (f = new w(x, p + 'leave', v, n, d)),
            (f.target = _),
            (f.relatedTarget = g),
            (x = null),
            Mt(d) === u &&
              ((w = new w(m, p + 'enter', y, n, d)),
              (w.target = g),
              (w.relatedTarget = _),
              (x = w)),
            (_ = x),
            v && y)
          )
            t: {
              for (w = v, m = y, p = 0, g = w; g; g = Xt(g)) p++;
              for (g = 0, x = m; x; x = Xt(x)) g++;
              for (; 0 < p - g; ) (w = Xt(w)), p--;
              for (; 0 < g - p; ) (m = Xt(m)), g--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Xt(w)), (m = Xt(m));
              }
              w = null;
            }
          else w = null;
          v !== null && za(h, f, v, w, !1),
            y !== null && _ !== null && za(h, _, y, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? dn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && f.type === 'file'))
        )
          var j = m0;
        else if (Oa(f))
          if (Vc) j = w0;
          else {
            j = v0;
            var N = g0;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (j = y0);
        if (j && (j = j(e, u))) {
          Bc(h, j, n, d);
          break e;
        }
        N && N(e, f, u),
          e === 'focusout' &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === 'number' &&
            lo(f, 'number', f.value);
      }
      switch (((N = u ? dn(u) : window), e)) {
        case 'focusin':
          (Oa(N) || N.contentEditable === 'true') &&
            ((un = N), (xo = u), (ar = null));
          break;
        case 'focusout':
          ar = xo = un = null;
          break;
        case 'mousedown':
          _o = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (_o = !1), $a(h, n, d);
          break;
        case 'selectionchange':
          if (k0) break;
        case 'keydown':
        case 'keyup':
          $a(h, n, d);
      }
      var P;
      if (kl)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        an
          ? Mc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (zc &&
          n.locale !== 'ko' &&
          (an || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && an && (P = Dc())
            : ((mt = d),
              (wl = 'value' in mt ? mt.value : mt.textContent),
              (an = !0))),
        (N = Ts(u, T)),
        0 < N.length &&
          ((T = new Na(T, e, null, n, d)),
          h.push({ event: T, listeners: N }),
          P ? (T.data = P) : ((P = Fc(n)), P !== null && (T.data = P)))),
        (P = c0 ? d0(e, n) : h0(e, n)) &&
          ((u = Ts(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new Na('onBeforeInput', 'beforeinput', null, n, d)),
            h.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    Xc(h, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ts(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = vr(e, n)),
      i != null && r.unshift(jr(e, i, s)),
      (i = vr(e, t)),
      i != null && r.push(jr(e, i, s))),
      (e = e.return);
  }
  return r;
}
function Xt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function za(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((a = vr(n, i)), a != null && o.unshift(jr(n, a, l)))
        : s || ((a = vr(n, i)), a != null && o.push(jr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var C0 = /\r\n?/g,
  N0 = /\u0000|\uFFFD/g;
function Ma(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      C0,
      `
`
    )
    .replace(N0, '');
}
function es(e, t, n) {
  if (((t = Ma(t)), Ma(e) !== t && n)) throw Error(k(425));
}
function bs() {}
var ko = null,
  So = null;
function jo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Eo = typeof setTimeout == 'function' ? setTimeout : void 0,
  P0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fa = typeof Promise == 'function' ? Promise : void 0,
  T0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fa < 'u'
      ? function (e) {
          return Fa.resolve(null).then(e).catch(b0);
        }
      : Eo;
function b0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ai(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(s), xr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = s;
  } while (n);
  xr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ba(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Un = Math.random().toString(36).slice(2),
  Ke = '__reactFiber$' + Un,
  Er = '__reactProps$' + Un,
  rt = '__reactContainer$' + Un,
  Co = '__reactEvents$' + Un,
  O0 = '__reactListeners$' + Un,
  R0 = '__reactHandles$' + Un;
function Mt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ba(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Ba(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Dr(e) {
  return (
    (e = e[Ke] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Xs(e) {
  return e[Er] || null;
}
var No = [],
  hn = -1;
function bt(e) {
  return { current: e };
}
function F(e) {
  0 > hn || ((e.current = No[hn]), (No[hn] = null), hn--);
}
function z(e, t) {
  hn++, (No[hn] = e.current), (e.current = t);
}
var Pt = {},
  ce = bt(Pt),
  ve = bt(!1),
  Ht = Pt;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Os() {
  F(ve), F(ce);
}
function Va(e, t, n) {
  if (ce.current !== Pt) throw Error(k(168));
  z(ce, t), z(ve, n);
}
function td(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(k(108, gf(e) || 'Unknown', s));
  return H({}, n, r);
}
function Rs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Ht = ce.current),
    z(ce, e),
    z(ve, ve.current),
    !0
  );
}
function Wa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = td(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(ce),
      z(ce, e))
    : F(ve),
    z(ve, n);
}
var Ye = null,
  ei = !1,
  $i = !1;
function nd(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function I0(e) {
  (ei = !0), nd(e);
}
function Ot() {
  if (!$i && Ye !== null) {
    $i = !0;
    var e = 0,
      t = U;
    try {
      var n = Ye;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (ei = !1);
    } catch (s) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Nc(ml, Ot), s);
    } finally {
      (U = t), ($i = !1);
    }
  }
  return null;
}
var fn = [],
  pn = 0,
  Is = null,
  Ls = 0,
  Pe = [],
  Te = 0,
  qt = null,
  Xe = 1,
  et = '';
function $t(e, t) {
  (fn[pn++] = Ls), (fn[pn++] = Is), (Is = e), (Ls = t);
}
function rd(e, t, n) {
  (Pe[Te++] = Xe), (Pe[Te++] = et), (Pe[Te++] = qt), (qt = e);
  var r = Xe;
  e = et;
  var s = 32 - Fe(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - Fe(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Xe = (1 << (32 - Fe(t) + s)) | (n << s) | r),
      (et = i + e);
  } else (Xe = (1 << i) | (n << s) | r), (et = e);
}
function jl(e) {
  e.return !== null && ($t(e, 1), rd(e, 1, 0));
}
function El(e) {
  for (; e === Is; )
    (Is = fn[--pn]), (fn[pn] = null), (Ls = fn[--pn]), (fn[pn] = null);
  for (; e === qt; )
    (qt = Pe[--Te]),
      (Pe[Te] = null),
      (et = Pe[--Te]),
      (Pe[Te] = null),
      (Xe = Pe[--Te]),
      (Pe[Te] = null);
}
var Se = null,
  ke = null,
  B = !1,
  Me = null;
function sd(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (ke = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: Xe, overflow: et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function To(e) {
  if (B) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Ha(e, t)) {
        if (Po(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Se;
        t && Ha(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e));
      }
    } else {
      if (Po(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e);
    }
  }
}
function qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function ts(e) {
  if (e !== Se) return !1;
  if (!B) return qa(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !jo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Po(e)) throw (id(), Error(k(418)));
    for (; t; ) sd(e, t), (t = _t(t.nextSibling));
  }
  if ((qa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ke = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Se ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function id() {
  for (var e = ke; e; ) e = _t(e.nextSibling);
}
function Nn() {
  (ke = Se = null), (B = !1);
}
function Cl(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var L0 = ot.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var As = bt(null),
  $s = null,
  mn = null,
  Nl = null;
function Pl() {
  Nl = mn = $s = null;
}
function Tl(e) {
  var t = As.current;
  F(As), (e._currentValue = t);
}
function bo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function kn(e, t) {
  ($s = e),
    (Nl = mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (Nl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
      if ($s === null) throw Error(k(308));
      (mn = e), ($s.dependencies = { lanes: 0, firstContext: e });
    } else mn = mn.next = e;
  return t;
}
var Ft = null;
function bl(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function od(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), bl(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    st(e, r)
  );
}
function st(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Ol(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ld(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      st(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), bl(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    st(e, n)
  );
}
function ms(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gl(e, n);
  }
}
function Ka(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Us(e, t, n, r) {
  var s = e.updateQueue;
  ct = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (i = u) : (o.next = u), (o = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = s.baseState;
    (o = 0), (d = u = a = null), (l = i);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((f = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                h = y.call(v, h, f);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == 'function' ? y.call(v, h, f) : y),
                f == null)
              )
                break e;
              h = H({}, h, f);
              break e;
            case 2:
              ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (a = h)) : (d = d.next = v),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = h),
      (s.baseState = a),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (Jt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Ja(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != 'function'))
          throw Error(k(191, s));
        s.call(r);
      }
    }
}
var ad = new oc.Component().refs;
function Oo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ti = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      s = jt(e),
      i = tt(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, s)),
      t !== null && (Be(t, e, s, r), ms(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      s = jt(e),
      i = tt(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, s)),
      t !== null && (Be(t, e, s, r), ms(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = he(),
      r = jt(e),
      s = tt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = kt(e, s, r)),
      t !== null && (Be(t, e, r, n), ms(t, e, r));
  },
};
function Ga(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !kr(n, r) || !kr(s, i)
      : !0
  );
}
function ud(e, t, n) {
  var r = !1,
    s = Pt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Re(i))
      : ((s = ye(t) ? Ht : ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Cn(e, s) : Pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Za(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function Ro(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = ad), Ol(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (s.context = Re(i))
    : ((i = ye(t) ? Ht : ce.current), (s.context = Cn(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Oo(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function' ||
      (typeof s.UNSAFE_componentWillMount != 'function' &&
        typeof s.componentWillMount != 'function') ||
      ((t = s.state),
      typeof s.componentWillMount == 'function' && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == 'function' &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ti.enqueueReplaceState(s, s.state, null),
      Us(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var s = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var l = s.refs;
            l === ad && (l = s.refs = {}),
              o === null ? delete l[i] : (l[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function ns(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Qa(e) {
  var t = e._init;
  return t(e._payload);
}
function cd(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function s(m, p) {
    return (m = Et(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = Vi(g, m.mode, x)), (p.return = m), p)
      : ((p = s(p, g)), (p.return = m), p);
  }
  function a(m, p, g, x) {
    var j = g.type;
    return j === ln
      ? d(m, p, g.props.children, x, g.key)
      : p !== null &&
        (p.elementType === j ||
          (typeof j == 'object' &&
            j !== null &&
            j.$$typeof === ut &&
            Qa(j) === p.type))
      ? ((x = s(p, g.props)), (x.ref = Jn(m, p, g)), (x.return = m), x)
      : ((x = _s(g.type, g.key, g.props, null, m.mode, x)),
        (x.ref = Jn(m, p, g)),
        (x.return = m),
        x);
  }
  function u(m, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Wi(g, m.mode, x)), (p.return = m), p)
      : ((p = s(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, x, j) {
    return p === null || p.tag !== 7
      ? ((p = Wt(g, m.mode, x, j)), (p.return = m), p)
      : ((p = s(p, g)), (p.return = m), p);
  }
  function h(m, p, g) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Vi('' + p, m.mode, g)), (p.return = m), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Hr:
          return (
            (g = _s(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Jn(m, null, p)),
            (g.return = m),
            g
          );
        case on:
          return (p = Wi(p, m.mode, g)), (p.return = m), p;
        case ut:
          var x = p._init;
          return h(m, x(p._payload), g);
      }
      if (Xn(p) || Vn(p))
        return (p = Wt(p, m.mode, g, null)), (p.return = m), p;
      ns(m, p);
    }
    return null;
  }
  function f(m, p, g, x) {
    var j = p !== null ? p.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return j !== null ? null : l(m, p, '' + g, x);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Hr:
          return g.key === j ? a(m, p, g, x) : null;
        case on:
          return g.key === j ? u(m, p, g, x) : null;
        case ut:
          return (j = g._init), f(m, p, j(g._payload), x);
      }
      if (Xn(g) || Vn(g)) return j !== null ? null : d(m, p, g, x, null);
      ns(m, g);
    }
    return null;
  }
  function v(m, p, g, x, j) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(g) || null), l(p, m, '' + x, j);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Hr:
          return (m = m.get(x.key === null ? g : x.key) || null), a(p, m, x, j);
        case on:
          return (m = m.get(x.key === null ? g : x.key) || null), u(p, m, x, j);
        case ut:
          var N = x._init;
          return v(m, p, g, N(x._payload), j);
      }
      if (Xn(x) || Vn(x)) return (m = m.get(g) || null), d(p, m, x, j, null);
      ns(p, x);
    }
    return null;
  }
  function y(m, p, g, x) {
    for (
      var j = null, N = null, P = p, T = (p = 0), K = null;
      P !== null && T < g.length;
      T++
    ) {
      P.index > T ? ((K = P), (P = null)) : (K = P.sibling);
      var L = f(m, P, g[T], x);
      if (L === null) {
        P === null && (P = K);
        break;
      }
      e && P && L.alternate === null && t(m, P),
        (p = i(L, p, T)),
        N === null ? (j = L) : (N.sibling = L),
        (N = L),
        (P = K);
    }
    if (T === g.length) return n(m, P), B && $t(m, T), j;
    if (P === null) {
      for (; T < g.length; T++)
        (P = h(m, g[T], x)),
          P !== null &&
            ((p = i(P, p, T)), N === null ? (j = P) : (N.sibling = P), (N = P));
      return B && $t(m, T), j;
    }
    for (P = r(m, P); T < g.length; T++)
      (K = v(P, m, T, g[T], x)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? T : K.key),
          (p = i(K, p, T)),
          N === null ? (j = K) : (N.sibling = K),
          (N = K));
    return (
      e &&
        P.forEach(function (Le) {
          return t(m, Le);
        }),
      B && $t(m, T),
      j
    );
  }
  function w(m, p, g, x) {
    var j = Vn(g);
    if (typeof j != 'function') throw Error(k(150));
    if (((g = j.call(g)), g == null)) throw Error(k(151));
    for (
      var N = (j = null), P = p, T = (p = 0), K = null, L = g.next();
      P !== null && !L.done;
      T++, L = g.next()
    ) {
      P.index > T ? ((K = P), (P = null)) : (K = P.sibling);
      var Le = f(m, P, L.value, x);
      if (Le === null) {
        P === null && (P = K);
        break;
      }
      e && P && Le.alternate === null && t(m, P),
        (p = i(Le, p, T)),
        N === null ? (j = Le) : (N.sibling = Le),
        (N = Le),
        (P = K);
    }
    if (L.done) return n(m, P), B && $t(m, T), j;
    if (P === null) {
      for (; !L.done; T++, L = g.next())
        (L = h(m, L.value, x)),
          L !== null &&
            ((p = i(L, p, T)), N === null ? (j = L) : (N.sibling = L), (N = L));
      return B && $t(m, T), j;
    }
    for (P = r(m, P); !L.done; T++, L = g.next())
      (L = v(P, m, T, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
          (p = i(L, p, T)),
          N === null ? (j = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        P.forEach(function (Fn) {
          return t(m, Fn);
        }),
      B && $t(m, T),
      j
    );
  }
  function _(m, p, g, x) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === ln &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Hr:
          e: {
            for (var j = g.key, N = p; N !== null; ) {
              if (N.key === j) {
                if (((j = g.type), j === ln)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (p = s(N, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == 'object' &&
                    j !== null &&
                    j.$$typeof === ut &&
                    Qa(j) === N.type)
                ) {
                  n(m, N.sibling),
                    (p = s(N, g.props)),
                    (p.ref = Jn(m, N, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            g.type === ln
              ? ((p = Wt(g.props.children, m.mode, x, g.key)),
                (p.return = m),
                (m = p))
              : ((x = _s(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = Jn(m, p, g)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case on:
          e: {
            for (N = g.key; p !== null; ) {
              if (p.key === N)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = s(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Wi(g, m.mode, x)), (p.return = m), (m = p);
          }
          return o(m);
        case ut:
          return (N = g._init), _(m, p, N(g._payload), x);
      }
      if (Xn(g)) return y(m, p, g, x);
      if (Vn(g)) return w(m, p, g, x);
      ns(m, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = s(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Vi(g, m.mode, x)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return _;
}
var Pn = cd(!0),
  dd = cd(!1),
  zr = {},
  Ge = bt(zr),
  Cr = bt(zr),
  Nr = bt(zr);
function Bt(e) {
  if (e === zr) throw Error(k(174));
  return e;
}
function Rl(e, t) {
  switch ((z(Nr, t), z(Cr, e), z(Ge, zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uo(t, e));
  }
  F(Ge), z(Ge, t);
}
function Tn() {
  F(Ge), F(Cr), F(Nr);
}
function hd(e) {
  Bt(Nr.current);
  var t = Bt(Ge.current),
    n = uo(t, e.type);
  t !== n && (z(Cr, e), z(Ge, n));
}
function Il(e) {
  Cr.current === e && (F(Ge), F(Cr));
}
var V = bt(0);
function Ds(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ui = [];
function Ll() {
  for (var e = 0; e < Ui.length; e++)
    Ui[e]._workInProgressVersionPrimary = null;
  Ui.length = 0;
}
var gs = ot.ReactCurrentDispatcher,
  Di = ot.ReactCurrentBatchConfig,
  Kt = 0,
  W = null,
  Y = null,
  te = null,
  zs = !1,
  ur = !1,
  Pr = 0,
  A0 = 0;
function oe() {
  throw Error(k(321));
}
function Al(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function $l(e, t, n, r, s, i) {
  if (
    ((Kt = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gs.current = e === null || e.memoizedState === null ? z0 : M0),
    (e = n(r, s)),
    ur)
  ) {
    i = 0;
    do {
      if (((ur = !1), (Pr = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (te = Y = null),
        (t.updateQueue = null),
        (gs.current = F0),
        (e = n(r, s));
    } while (ur);
  }
  if (
    ((gs.current = Ms),
    (t = Y !== null && Y.next !== null),
    (Kt = 0),
    (te = Y = W = null),
    (zs = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ul() {
  var e = Pr !== 0;
  return (Pr = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (W.memoizedState = te = e) : (te = te.next = e), te;
}
function Ie() {
  if (Y === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = te === null ? W.memoizedState : te.next;
  if (t !== null) (te = t), (Y = e);
  else {
    if (e === null) throw Error(k(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      te === null ? (W.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function Tr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function zi(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = Y,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((Kt & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h),
          (W.lanes |= d),
          (Jt |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (o = r) : (a.next = l),
      Ve(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (W.lanes |= i), (Jt |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mi(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    Ve(i, t.memoizedState) || (ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fd() {}
function pd(e, t) {
  var n = W,
    r = Ie(),
    s = t(),
    i = !Ve(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (ge = !0)),
    (r = r.queue),
    Dl(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      br(9, gd.bind(null, n, r, s, t), void 0, null),
      ne === null)
    )
      throw Error(k(349));
    Kt & 30 || md(n, t, s);
  }
  return s;
}
function md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yd(t) && wd(e);
}
function vd(e, t, n) {
  return n(function () {
    yd(t) && wd(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function wd(e) {
  var t = st(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Ya(e) {
  var t = qe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = D0.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xd() {
  return Ie().memoizedState;
}
function vs(e, t, n, r) {
  var s = qe();
  (W.flags |= e),
    (s.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function ni(e, t, n, r) {
  var s = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && Al(r, o.deps))) {
      s.memoizedState = br(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (s.memoizedState = br(1 | t, n, i, r));
}
function Xa(e, t) {
  return vs(8390656, 8, e, t);
}
function Dl(e, t) {
  return ni(2048, 8, e, t);
}
function _d(e, t) {
  return ni(4, 2, e, t);
}
function kd(e, t) {
  return ni(4, 4, e, t);
}
function Sd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ni(4, 4, Sd.bind(null, t, e), n)
  );
}
function zl() {}
function Ed(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cd(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nd(e, t, n) {
  return Kt & 21
    ? (Ve(n, t) || ((n = bc()), (W.lanes |= n), (Jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function $0(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Di.transition;
  Di.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Di.transition = r);
  }
}
function Pd() {
  return Ie().memoizedState;
}
function U0(e, t, n) {
  var r = jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Td(e))
  )
    bd(t, n);
  else if (((n = od(e, t, n, r)), n !== null)) {
    var s = he();
    Be(n, e, r, s), Od(n, t, r);
  }
}
function D0(e, t, n) {
  var r = jt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Td(e)) bd(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), Ve(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((s.next = s), bl(t))
            : ((s.next = a.next), (a.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = od(e, t, s, r)),
      n !== null && ((s = he()), Be(n, e, r, s), Od(n, t, r));
  }
}
function Td(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function bd(e, t) {
  ur = zs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gl(e, n);
  }
}
var Ms = {
    readContext: Re,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  z0 = {
    readContext: Re,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: Xa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vs(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = U0.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ya,
    useDebugValue: zl,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ya(!1),
        t = e[0];
      return (e = $0.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        s = qe();
      if (B) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(k(349));
        Kt & 30 || md(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Xa(vd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        br(9, gd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ne.identifierPrefix;
      if (B) {
        var n = et,
          r = Xe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Pr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = A0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  M0 = {
    readContext: Re,
    useCallback: Ed,
    useContext: Re,
    useEffect: Dl,
    useImperativeHandle: jd,
    useInsertionEffect: _d,
    useLayoutEffect: kd,
    useMemo: Cd,
    useReducer: zi,
    useRef: xd,
    useState: function () {
      return zi(Tr);
    },
    useDebugValue: zl,
    useDeferredValue: function (e) {
      var t = Ie();
      return Nd(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = zi(Tr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Pd,
    unstable_isNewReconciler: !1,
  },
  F0 = {
    readContext: Re,
    useCallback: Ed,
    useContext: Re,
    useEffect: Dl,
    useImperativeHandle: jd,
    useInsertionEffect: _d,
    useLayoutEffect: kd,
    useMemo: Cd,
    useReducer: Mi,
    useRef: xd,
    useState: function () {
      return Mi(Tr);
    },
    useDebugValue: zl,
    useDeferredValue: function (e) {
      var t = Ie();
      return Y === null ? (t.memoizedState = e) : Nd(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Mi(Tr)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Pd,
    unstable_isNewReconciler: !1,
  };
function bn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += mf(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Io(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var B0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Rd(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bs || ((Bs = !0), (Vo = r)), Io(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Io(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Io(e, t),
          typeof r != 'function' &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new B0();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = n1.bind(null, e, t, n)), t.then(e, e));
}
function tu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function nu(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var V0 = ot.ReactCurrentOwner,
  ge = !1;
function de(e, t, n, r) {
  t.child = e === null ? dd(t, null, n, r) : Pn(t, e.child, n, r);
}
function ru(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    kn(t, s),
    (r = $l(e, t, n, r, i, s)),
    (n = Ul()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        it(e, t, s))
      : (B && n && jl(t), (t.flags |= 1), de(e, t, r, s), t.child)
  );
}
function su(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Kl(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ld(e, t, i, r, s))
      : ((e = _s(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : kr), n(o, r) && e.ref === t.ref)
    )
      return it(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Et(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ld(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (kr(i, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), it(e, t, s);
  }
  return Lo(e, t, n, r, s);
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(vn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(vn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        z(vn, _e),
        (_e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(vn, _e),
      (_e |= r);
  return de(e, t, s, n), t.child;
}
function $d(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Lo(e, t, n, r, s) {
  var i = ye(n) ? Ht : ce.current;
  return (
    (i = Cn(t, i)),
    kn(t, s),
    (n = $l(e, t, n, r, i, s)),
    (r = Ul()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        it(e, t, s))
      : (B && r && jl(t), (t.flags |= 1), de(e, t, n, s), t.child)
  );
}
function iu(e, t, n, r, s) {
  if (ye(n)) {
    var i = !0;
    Rs(t);
  } else i = !1;
  if ((kn(t, s), t.stateNode === null))
    ys(e, t), ud(t, n, r), Ro(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Re(u))
      : ((u = ye(n) ? Ht : ce.current), (u = Cn(t, u)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Za(t, o, r, u)),
      (ct = !1);
    var f = t.memoizedState;
    (o.state = f),
      Us(t, r, o, s),
      (a = t.memoizedState),
      l !== r || f !== a || ve.current || ct
        ? (typeof d == 'function' && (Oo(t, n, d, r), (a = t.memoizedState)),
          (l = ct || Ga(t, n, l, r, f, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ld(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ue(t.type, l)),
      (o.props = u),
      (h = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Re(a))
        : ((a = ye(n) ? Ht : ce.current), (a = Cn(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== h || f !== a) && Za(t, o, r, a)),
      (ct = !1),
      (f = t.memoizedState),
      (o.state = f),
      Us(t, r, o, s);
    var y = t.memoizedState;
    l !== h || f !== y || ve.current || ct
      ? (typeof v == 'function' && (Oo(t, n, v, r), (y = t.memoizedState)),
        (u = ct || Ga(t, n, u, r, f, y, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ao(e, t, n, r, i, s);
}
function Ao(e, t, n, r, s, i) {
  $d(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Wa(t, n, !1), it(e, t, i);
  (r = t.stateNode), (V0.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Pn(t, e.child, null, i)), (t.child = Pn(t, null, l, i)))
      : de(e, t, l, i),
    (t.memoizedState = r.state),
    s && Wa(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Va(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Va(e, t.context, !1),
    Rl(e, t.containerInfo);
}
function ou(e, t, n, r, s) {
  return Nn(), Cl(s), (t.flags |= 256), de(e, t, n, r), t.child;
}
var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    s = V.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    z(V, s & 1),
    e === null)
  )
    return (
      To(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ii(o, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Uo(n)),
              (t.memoizedState = $o),
              e)
            : Ml(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return W0(e, t, o, r, l, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (l = s.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Et(s, a)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (i = Et(l, i)) : ((i = Wt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Uo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $o),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Et(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ml(e, t) {
  return (
    (t = ii({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function rs(e, t, n, r) {
  return (
    r !== null && Cl(r),
    Pn(t, e.child, null, n),
    (e = Ml(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function W0(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fi(Error(k(422)))), rs(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (s = t.mode),
        (r = ii({ mode: 'visible', children: r.children }, s, 0, null)),
        (i = Wt(i, s, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Pn(t, e.child, null, o),
        (t.child.memoizedState = Uo(o)),
        (t.memoizedState = $o),
        i);
  if (!(t.mode & 1)) return rs(e, t, o, null);
  if (s.data === '$!') {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(k(419))), (r = Fi(i, r, void 0)), rs(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ge || l)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), st(e, s), Be(r, e, s, -1));
    }
    return ql(), (r = Fi(Error(k(421)))), rs(e, t, o, r);
  }
  return s.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = r1.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = _t(s.nextSibling)),
      (Se = t),
      (B = !0),
      (Me = null),
      e !== null &&
        ((Pe[Te++] = Xe),
        (Pe[Te++] = et),
        (Pe[Te++] = qt),
        (Xe = e.id),
        (et = e.overflow),
        (qt = t)),
      (t = Ml(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bo(e.return, t, n);
}
function Bi(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function zd(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((de(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lu(e, n, t);
        else if (e.tag === 19) lu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case 'forwards':
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Bi(t, !1, s, n, i);
        break;
      case 'backwards':
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Ds(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Bi(t, !0, n, null, i);
        break;
      case 'together':
        Bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Et(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function H0(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Nn();
      break;
    case 5:
      hd(t);
      break;
    case 1:
      ye(t.type) && Rs(t);
      break;
    case 4:
      Rl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      z(As, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dd(e, t, n)
          : (z(V, V.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      z(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        z(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ad(e, t, n);
  }
  return it(e, t, n);
}
var Md, Do, Fd, Bd;
Md = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Do = function () {};
Fd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Bt(Ge.current);
    var i = null;
    switch (n) {
      case 'input':
        (s = io(e, s)), (r = io(e, r)), (i = []);
        break;
      case 'select':
        (s = H({}, s, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (s = ao(e, s)), (r = ao(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = bs);
    }
    co(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === 'style') {
          var l = s[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (mr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (i = i || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (mr.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && M('scroll', e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function q0(e, t, n) {
  var r = t.pendingProps;
  switch ((El(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return ye(t.type) && Os(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        F(ve),
        F(ce),
        Ll(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (qo(Me), (Me = null)))),
        Do(e, t),
        le(t),
        null
      );
    case 5:
      Il(t);
      var s = Bt(Nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = Bt(Ge.current)), ts(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ke] = t), (r[Er] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              M('cancel', r), M('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              M('load', r);
              break;
            case 'video':
            case 'audio':
              for (s = 0; s < tr.length; s++) M(tr[s], r);
              break;
            case 'source':
              M('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              M('error', r), M('load', r);
              break;
            case 'details':
              M('toggle', r);
              break;
            case 'input':
              ga(r, i), M('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M('invalid', r);
              break;
            case 'textarea':
              ya(r, i), M('invalid', r);
          }
          co(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var l = i[o];
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      es(r.textContent, l, e),
                    (s = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      es(r.textContent, l, e),
                    (s = ['children', '' + l]))
                : mr.hasOwnProperty(o) &&
                  l != null &&
                  o === 'onScroll' &&
                  M('scroll', r);
            }
          switch (n) {
            case 'input':
              qr(r), va(r, i, !0);
              break;
            case 'textarea':
              qr(r), wa(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = bs);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = mc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ke] = t),
            (e[Er] = r),
            Md(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ho(n, r)), n)) {
              case 'dialog':
                M('cancel', e), M('close', e), (s = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                M('load', e), (s = r);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < tr.length; s++) M(tr[s], e);
                s = r;
                break;
              case 'source':
                M('error', e), (s = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                M('error', e), M('load', e), (s = r);
                break;
              case 'details':
                M('toggle', e), (s = r);
                break;
              case 'input':
                ga(e, r), (s = io(e, r)), M('invalid', e);
                break;
              case 'option':
                s = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = H({}, r, { value: void 0 })),
                  M('invalid', e);
                break;
              case 'textarea':
                ya(e, r), (s = ao(e, r)), M('invalid', e);
                break;
              default:
                s = r;
            }
            co(n, s), (l = s);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === 'style'
                  ? yc(e, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && gc(e, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && gr(e, a)
                    : typeof a == 'number' && gr(e, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (mr.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && M('scroll', e)
                      : a != null && cl(e, i, a, o));
              }
            switch (n) {
              case 'input':
                qr(e), va(e, r, !1);
                break;
              case 'textarea':
                qr(e), wa(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Nt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == 'function' && (e.onclick = bs);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Bd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Bt(Nr.current)), Bt(Ge.current), ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                es(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  es(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ke !== null && t.mode & 1 && !(t.flags & 128))
          id(), Nn(), (t.flags |= 98560), (i = !1);
        else if (((i = ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ke] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Me !== null && (qo(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? X === 0 && (X = 3) : ql())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        Tn(), Do(e, t), e === null && Sr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Tl(t.type._context), le(t), null;
    case 17:
      return ye(t.type) && Os(), le(t), null;
    case 19:
      if ((F(V), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Gn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ds(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Gn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > On &&
            ((t.flags |= 128), (r = !0), Gn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Gn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !B)
            )
              return le(t), null;
          } else
            2 * G() - i.renderingStartTime > On &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Gn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          z(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Hl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function K0(e, t) {
  switch ((El(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && Os(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        F(ve),
        F(ce),
        Ll(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Il(t), null;
    case 13:
      if ((F(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(V), null;
    case 4:
      return Tn(), null;
    case 10:
      return Tl(t.type._context), null;
    case 22:
    case 23:
      return Hl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ss = !1,
  ue = !1,
  J0 = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function zo(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var au = !1;
function G0(e, t) {
  if (((ko = Ns), (e = qc()), Sl(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (s !== 0 && h.nodeType !== 3) || (l = o + s),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (f = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++u === s && (l = o),
                f === i && ++d === r && (a = o),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (So = { focusedElem: e, selectionRange: n }, Ns = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    _ = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ue(t.type, w),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (y = au), (au = !1), y;
}
function cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && zo(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function ri(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Vd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[Er], delete t[Co], delete t[O0], delete t[R0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), (e = e.sibling);
}
var re = null,
  De = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) Hd(e, t, n), (n = n.sibling);
}
function Hd(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == 'function')
    try {
      Je.onCommitFiberUnmount(Gs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || gn(n, t);
    case 6:
      var r = re,
        s = De;
      (re = null),
        lt(e, t, n),
        (re = r),
        (De = s),
        re !== null &&
          (De
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (De
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ai(e.parentNode, n)
              : e.nodeType === 1 && Ai(e, n),
            xr(e))
          : Ai(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (s = De),
        (re = n.stateNode.containerInfo),
        (De = !0),
        lt(e, t, n),
        (re = r),
        (De = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && zo(n, t, o),
            (s = s.next);
        } while (s !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          q(n, t, l);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), lt(e, t, n), (ue = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new J0()),
      t.forEach(function (r) {
        var s = s1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (re = l.stateNode), (De = !1);
              break e;
            case 3:
              (re = l.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (re = l.stateNode.containerInfo), (De = !0);
              break e;
          }
          l = l.return;
        }
        if (re === null) throw Error(k(160));
        Hd(i, o, s), (re = null), (De = !1);
        var a = s.alternate;
        a !== null && (a.return = null), (s.return = null);
      } catch (u) {
        q(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qd(t, e), (t = t.sibling);
}
function qd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), We(e), r & 4)) {
        try {
          cr(3, e, e.return), ri(3, e);
        } catch (w) {
          q(e, e.return, w);
        }
        try {
          cr(5, e, e.return);
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 1:
      Ae(t, e), We(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (Ae(t, e),
        We(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          gr(s, '');
        } catch (w) {
          q(e, e.return, w);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && fc(s, i),
              ho(l, o);
            var u = ho(l, i);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                h = a[o + 1];
              d === 'style'
                ? yc(s, h)
                : d === 'dangerouslySetInnerHTML'
                ? gc(s, h)
                : d === 'children'
                ? gr(s, h)
                : cl(s, d, h, u);
            }
            switch (l) {
              case 'input':
                oo(s, i);
                break;
              case 'textarea':
                pc(s, i);
                break;
              case 'select':
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? yn(s, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? yn(s, !!i.multiple, i.defaultValue, !0)
                      : yn(s, !!i.multiple, i.multiple ? [] : '', !1));
            }
            s[Er] = i;
          } catch (w) {
            q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          xr(t.containerInfo);
        } catch (w) {
          q(e, e.return, w);
        }
      break;
    case 4:
      Ae(t, e), We(e);
      break;
    case 13:
      Ae(t, e),
        We(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Vl = G())),
        r & 4 && cu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (u = ue) || d), Ae(t, e), (ue = u)) : Ae(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (E = e, d = e.child; d !== null; ) {
            for (h = E = d; E !== null; ) {
              switch (((f = E), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cr(4, f, f.return);
                  break;
                case 1:
                  gn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  gn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    hu(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (E = v)) : hu(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (s = h.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = vc('display', o)));
              } catch (w) {
                q(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (w) {
                q(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ae(t, e), We(e), r & 4 && cu(e);
      break;
    case 21:
      break;
    default:
      Ae(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (gr(s, ''), (r.flags &= -33));
          var i = uu(e);
          Bo(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = uu(e);
          Fo(e, l, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Z0(e, t, n) {
  (E = e), Kd(e);
}
function Kd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var s = E,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || ss;
      if (!o) {
        var l = s.alternate,
          a = (l !== null && l.memoizedState !== null) || ue;
        l = ss;
        var u = ue;
        if (((ss = o), (ue = a) && !u))
          for (E = s; E !== null; )
            (o = E),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? fu(s)
                : a !== null
                ? ((a.return = o), (E = a))
                : fu(s);
        for (; i !== null; ) (E = i), Kd(i), (i = i.sibling);
        (E = s), (ss = l), (ue = u);
      }
      du(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (E = i)) : du(e);
  }
}
function du(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || ri(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ue(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ja(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ja(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && xr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ue || (t.flags & 512 && Mo(t));
      } catch (f) {
        q(t, t.return, f);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function hu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function fu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ri(4, t);
          } catch (a) {
            q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              q(t, s, a);
            }
          }
          var i = t.return;
          try {
            Mo(t);
          } catch (a) {
            q(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Mo(t);
          } catch (a) {
            q(t, o, a);
          }
      }
    } catch (a) {
      q(t, t.return, a);
    }
    if (t === e) {
      E = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (E = l);
      break;
    }
    E = t.return;
  }
}
var Q0 = Math.ceil,
  Fs = ot.ReactCurrentDispatcher,
  Fl = ot.ReactCurrentOwner,
  Oe = ot.ReactCurrentBatchConfig,
  $ = 0,
  ne = null,
  Q = null,
  se = 0,
  _e = 0,
  vn = bt(0),
  X = 0,
  Or = null,
  Jt = 0,
  si = 0,
  Bl = 0,
  dr = null,
  me = null,
  Vl = 0,
  On = 1 / 0,
  Qe = null,
  Bs = !1,
  Vo = null,
  St = null,
  is = !1,
  gt = null,
  Vs = 0,
  hr = 0,
  Wo = null,
  ws = -1,
  xs = 0;
function he() {
  return $ & 6 ? G() : ws !== -1 ? ws : (ws = G());
}
function jt(e) {
  return e.mode & 1
    ? $ & 2 && se !== 0
      ? se & -se
      : L0.transition !== null
      ? (xs === 0 && (xs = bc()), xs)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uc(e.type))),
        e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < hr) throw ((hr = 0), (Wo = null), Error(k(185)));
  $r(e, n, r),
    (!($ & 2) || e !== ne) &&
      (e === ne && (!($ & 2) && (si |= n), X === 4 && ft(e, se)),
      we(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((On = G() + 500), ei && Ot()));
}
function we(e, t) {
  var n = e.callbackNode;
  Lf(e, t);
  var r = Cs(e, e === ne ? se : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? I0(pu.bind(null, e)) : nd(pu.bind(null, e)),
        T0(function () {
          !($ & 6) && Ot();
        }),
        (n = null);
    else {
      switch (Oc(r)) {
        case 1:
          n = ml;
          break;
        case 4:
          n = Pc;
          break;
        case 16:
          n = Es;
          break;
        case 536870912:
          n = Tc;
          break;
        default:
          n = Es;
      }
      n = th(n, Jd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jd(e, t) {
  if (((ws = -1), (xs = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n) return null;
  var r = Cs(e, e === ne ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ws(e, r);
  else {
    t = r;
    var s = $;
    $ |= 2;
    var i = Zd();
    (ne !== e || se !== t) && ((Qe = null), (On = G() + 500), Vt(e, t));
    do
      try {
        e1();
        break;
      } catch (l) {
        Gd(e, l);
      }
    while (!0);
    Pl(),
      (Fs.current = i),
      ($ = s),
      Q !== null ? (t = 0) : ((ne = null), (se = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = vo(e)), s !== 0 && ((r = s), (t = Ho(e, s)))), t === 1)
    )
      throw ((n = Or), Vt(e, 0), ft(e, r), we(e, G()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Y0(s) &&
          ((t = Ws(e, r)),
          t === 2 && ((i = vo(e)), i !== 0 && ((r = i), (t = Ho(e, i)))),
          t === 1))
      )
        throw ((n = Or), Vt(e, 0), ft(e, r), we(e, G()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ut(e, me, Qe);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = Vl + 500 - G()), 10 < t))
          ) {
            if (Cs(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              he(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Eo(Ut.bind(null, e, me, Qe), t);
            break;
          }
          Ut(e, me, Qe);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Q0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Eo(Ut.bind(null, e, me, Qe), r);
            break;
          }
          Ut(e, me, Qe);
          break;
        case 5:
          Ut(e, me, Qe);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? Jd.bind(null, e) : null;
}
function Ho(e, t) {
  var n = dr;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Ws(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && qo(t)),
    e
  );
}
function qo(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Y0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Ve(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~Bl,
      t &= ~si,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pu(e) {
  if ($ & 6) throw Error(k(327));
  Sn();
  var t = Cs(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = Ws(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vo(e);
    r !== 0 && ((t = r), (n = Ho(e, r)));
  }
  if (n === 1) throw ((n = Or), Vt(e, 0), ft(e, t), we(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, me, Qe),
    we(e, G()),
    null
  );
}
function Wl(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((On = G() + 500), ei && Ot());
  }
}
function Gt(e) {
  gt !== null && gt.tag === 0 && !($ & 6) && Sn();
  var t = $;
  $ |= 1;
  var n = Oe.transition,
    r = U;
  try {
    if (((Oe.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Oe.transition = n), ($ = t), !($ & 6) && Ot();
  }
}
function Hl() {
  (_e = vn.current), F(vn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), P0(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((El(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Os();
          break;
        case 3:
          Tn(), F(ve), F(ce), Ll();
          break;
        case 5:
          Il(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          F(V);
          break;
        case 19:
          F(V);
          break;
        case 10:
          Tl(r.type._context);
          break;
        case 22:
        case 23:
          Hl();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Q = e = Et(e.current, null)),
    (se = _e = t),
    (X = 0),
    (Or = null),
    (Bl = si = Jt = 0),
    (me = dr = null),
    Ft !== null)
  ) {
    for (t = 0; t < Ft.length; t++)
      if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    Ft = null;
  }
  return e;
}
function Gd(e, t) {
  do {
    var n = Q;
    try {
      if ((Pl(), (gs.current = Ms), zs)) {
        for (var r = W.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        zs = !1;
      }
      if (
        ((Kt = 0),
        (te = Y = W = null),
        (ur = !1),
        (Pr = 0),
        (Fl.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Or = t), (Q = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = se),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            d = l,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = tu(o);
          if (v !== null) {
            (v.flags &= -257),
              nu(v, o, l, i, t),
              v.mode & 1 && eu(i, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              eu(i, u, t), ql();
              break e;
            }
            a = Error(k(426));
          }
        } else if (B && l.mode & 1) {
          var _ = tu(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              nu(_, o, l, i, t),
              Cl(bn(a, l));
            break e;
          }
        }
        (i = a = bn(a, l)),
          X !== 4 && (X = 2),
          dr === null ? (dr = [i]) : dr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Rd(i, a, t);
              Ka(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (St === null || !St.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = Id(i, l, t);
                Ka(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yd(n);
    } catch (j) {
      (t = j), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zd() {
  var e = Fs.current;
  return (Fs.current = Ms), e === null ? Ms : e;
}
function ql() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    ne === null || (!(Jt & 268435455) && !(si & 268435455)) || ft(ne, se);
}
function Ws(e, t) {
  var n = $;
  $ |= 2;
  var r = Zd();
  (ne !== e || se !== t) && ((Qe = null), Vt(e, t));
  do
    try {
      X0();
      break;
    } catch (s) {
      Gd(e, s);
    }
  while (!0);
  if ((Pl(), ($ = n), (Fs.current = r), Q !== null)) throw Error(k(261));
  return (ne = null), (se = 0), X;
}
function X0() {
  for (; Q !== null; ) Qd(Q);
}
function e1() {
  for (; Q !== null && !Ef(); ) Qd(Q);
}
function Qd(e) {
  var t = eh(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yd(e) : (Q = t),
    (Fl.current = null);
}
function Yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = K0(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Q = null);
        return;
      }
    } else if (((n = q0(n, t, _e)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Ut(e, t, n) {
  var r = U,
    s = Oe.transition;
  try {
    (Oe.transition = null), (U = 1), t1(e, t, n, r);
  } finally {
    (Oe.transition = s), (U = r);
  }
  return null;
}
function t1(e, t, n, r) {
  do Sn();
  while (gt !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Af(e, i),
    e === ne && ((Q = ne = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      is ||
      ((is = !0),
      th(Es, function () {
        return Sn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Oe.transition), (Oe.transition = null);
    var o = U;
    U = 1;
    var l = $;
    ($ |= 4),
      (Fl.current = null),
      G0(e, n),
      qd(n, e),
      _0(So),
      (Ns = !!ko),
      (So = ko = null),
      (e.current = n),
      Z0(n),
      Cf(),
      ($ = l),
      (U = o),
      (Oe.transition = i);
  } else e.current = n;
  if (
    (is && ((is = !1), (gt = e), (Vs = s)),
    (i = e.pendingLanes),
    i === 0 && (St = null),
    Tf(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Bs) throw ((Bs = !1), (e = Vo), (Vo = null), e);
  return (
    Vs & 1 && e.tag !== 0 && Sn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Wo ? hr++ : ((hr = 0), (Wo = e))) : (hr = 0),
    Ot(),
    null
  );
}
function Sn() {
  if (gt !== null) {
    var e = Oc(Vs),
      t = Oe.transition,
      n = U;
    try {
      if (((Oe.transition = null), (U = 16 > e ? 16 : e), gt === null))
        var r = !1;
      else {
        if (((e = gt), (gt = null), (Vs = 0), $ & 6)) throw Error(k(331));
        var s = $;
        for ($ |= 4, E = e.current; E !== null; ) {
          var i = E,
            o = i.child;
          if (E.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (E = u; E !== null; ) {
                  var d = E;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (E = h);
                  else
                    for (; E !== null; ) {
                      d = E;
                      var f = d.sibling,
                        v = d.return;
                      if ((Vd(d), d === u)) {
                        E = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (E = f);
                        break;
                      }
                      E = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var _ = w.sibling;
                    (w.sibling = null), (w = _);
                  } while (w !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (E = o);
          else
            e: for (; E !== null; ) {
              if (((i = E), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (E = m);
                break e;
              }
              E = i.return;
            }
        }
        var p = e.current;
        for (E = p; E !== null; ) {
          o = E;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (E = g);
          else
            e: for (o = p; E !== null; ) {
              if (((l = E), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ri(9, l);
                  }
                } catch (j) {
                  q(l, l.return, j);
                }
              if (l === o) {
                E = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (E = x);
                break e;
              }
              E = l.return;
            }
        }
        if (
          (($ = s), Ot(), Je && typeof Je.onPostCommitFiberRoot == 'function')
        )
          try {
            Je.onPostCommitFiberRoot(Gs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Oe.transition = t);
    }
  }
  return !1;
}
function mu(e, t, n) {
  (t = bn(n, t)),
    (t = Rd(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = he()),
    e !== null && ($r(e, 1, t), we(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) mu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (St === null || !St.has(r)))
        ) {
          (e = bn(n, e)),
            (e = Id(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = he()),
            t !== null && ($r(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function n1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (se & n) === n &&
      (X === 4 || (X === 3 && (se & 130023424) === se && 500 > G() - Vl)
        ? Vt(e, 0)
        : (Bl |= n)),
    we(e, t);
}
function Xd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gr), (Gr <<= 1), !(Gr & 130023424) && (Gr = 4194304))
      : (t = 1));
  var n = he();
  (e = st(e, t)), e !== null && ($r(e, t, n), we(e, n));
}
function r1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xd(e, n);
}
function s1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Xd(e, n);
}
var eh;
eh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), H0(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), B && t.flags & 1048576 && rd(t, Ls, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ys(e, t), (e = t.pendingProps);
      var s = Cn(t, ce.current);
      kn(t, n), (s = $l(null, t, r, e, s, n));
      var i = Ul();
      return (
        (t.flags |= 1),
        typeof s == 'object' &&
        s !== null &&
        typeof s.render == 'function' &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), Rs(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ol(t),
            (s.updater = ti),
            (t.stateNode = s),
            (s._reactInternals = t),
            Ro(t, r, e, n),
            (t = Ao(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && jl(t), de(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ys(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = o1(r)),
          (e = Ue(r, e)),
          s)
        ) {
          case 0:
            t = Lo(null, t, r, e, n);
            break e;
          case 1:
            t = iu(null, t, r, e, n);
            break e;
          case 11:
            t = ru(null, t, r, e, n);
            break e;
          case 14:
            t = su(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ue(r, s)),
        Lo(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ue(r, s)),
        iu(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          ld(e, t),
          Us(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = bn(Error(k(423)), t)), (t = ou(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = bn(Error(k(424)), t)), (t = ou(e, t, r, n, s));
            break e;
          } else
            for (
              ke = _t(t.stateNode.containerInfo.firstChild),
                Se = t,
                B = !0,
                Me = null,
                n = dd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === s)) {
            t = it(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        hd(t),
        e === null && To(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        jo(r, s) ? (o = null) : i !== null && jo(r, i) && (t.flags |= 32),
        $d(e, t),
        de(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && To(t), null;
    case 13:
      return Dd(e, t, n);
    case 4:
      return (
        Rl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ue(r, s)),
        ru(e, t, r, s, n)
      );
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          z(As, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ve(i.value, o)) {
            if (i.children === s.children && !ve.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                o = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = tt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      bo(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  bo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        de(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (s = Re(s)),
        (r = r(s)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Ue(r, t.pendingProps)),
        (s = Ue(r.type, s)),
        su(e, t, r, s, n)
      );
    case 15:
      return Ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ue(r, s)),
        ys(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Rs(t)) : (e = !1),
        kn(t, n),
        ud(t, r, s),
        Ro(t, r, s, n),
        Ao(null, t, r, !0, e, n)
      );
    case 19:
      return zd(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function th(e, t) {
  return Nc(e, t);
}
function i1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new i1(e, t, n, r);
}
function Kl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function o1(e) {
  if (typeof e == 'function') return Kl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hl)) return 11;
    if (e === fl) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _s(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Kl(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case ln:
        return Wt(n.children, s, i, t);
      case dl:
        (o = 8), (s |= 8);
        break;
      case to:
        return (
          (e = be(12, n, t, s | 2)), (e.elementType = to), (e.lanes = i), e
        );
      case no:
        return (e = be(13, n, t, s)), (e.elementType = no), (e.lanes = i), e;
      case ro:
        return (e = be(19, n, t, s)), (e.elementType = ro), (e.lanes = i), e;
      case cc:
        return ii(n, s, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ac:
              o = 10;
              break e;
            case uc:
              o = 9;
              break e;
            case hl:
              o = 11;
              break e;
            case fl:
              o = 14;
              break e;
            case ut:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = be(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Wt(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function ii(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = cc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vi(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Wi(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function l1(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ji(0)),
    (this.expirationTimes = ji(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ji(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Jl(e, t, n, r, s, i, o, l, a) {
  return (
    (e = new l1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = be(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ol(i),
    e
  );
}
function a1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nh(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return td(e, n, t);
  }
  return t;
}
function rh(e, t, n, r, s, i, o, l, a) {
  return (
    (e = Jl(n, r, !0, e, s, i, o, l, a)),
    (e.context = nh(null)),
    (n = e.current),
    (r = he()),
    (s = jt(n)),
    (i = tt(r, s)),
    (i.callback = t ?? null),
    kt(n, i, s),
    (e.current.lanes = s),
    $r(e, s, r),
    we(e, r),
    e
  );
}
function oi(e, t, n, r) {
  var s = t.current,
    i = he(),
    o = jt(s);
  return (
    (n = nh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(s, t, o)),
    e !== null && (Be(e, s, o, i), ms(e, s, o)),
    o
  );
}
function Hs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gl(e, t) {
  gu(e, t), (e = e.alternate) && gu(e, t);
}
function u1() {
  return null;
}
var sh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zl(e) {
  this._internalRoot = e;
}
li.prototype.render = Zl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  oi(e, t, null, null);
};
li.prototype.unmount = Zl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      oi(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function li(e) {
  this._internalRoot = e;
}
li.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && $c(e);
  }
};
function Ql(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function vu() {}
function c1(e, t, n, r, s) {
  if (s) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Hs(o);
        i.call(u);
      };
    }
    var o = rh(t, r, e, 0, null, !1, !1, '', vu);
    return (
      (e._reactRootContainer = o),
      (e[rt] = o.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = Hs(a);
      l.call(u);
    };
  }
  var a = Jl(e, 0, !1, null, null, !1, !1, '', vu);
  return (
    (e._reactRootContainer = a),
    (e[rt] = a.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      oi(t, a, n, r);
    }),
    a
  );
}
function ui(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == 'function') {
      var l = s;
      s = function () {
        var a = Hs(o);
        l.call(a);
      };
    }
    oi(t, o, e, s);
  } else o = c1(n, t, e, s, r);
  return Hs(o);
}
Rc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 &&
          (gl(t, n | 1), we(t, G()), !($ & 6) && ((On = G() + 500), Ot()));
      }
      break;
    case 13:
      Gt(function () {
        var r = st(e, 1);
        if (r !== null) {
          var s = he();
          Be(r, e, 1, s);
        }
      }),
        Gl(e, 1);
  }
};
vl = function (e) {
  if (e.tag === 13) {
    var t = st(e, 134217728);
    if (t !== null) {
      var n = he();
      Be(t, e, 134217728, n);
    }
    Gl(e, 134217728);
  }
};
Ic = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = st(e, t);
    if (n !== null) {
      var r = he();
      Be(n, e, t, r);
    }
    Gl(e, t);
  }
};
Lc = function () {
  return U;
};
Ac = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
po = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((oo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Xs(r);
            if (!s) throw Error(k(90));
            hc(r), oo(r, s);
          }
        }
      }
      break;
    case 'textarea':
      pc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
  }
};
_c = Wl;
kc = Gt;
var d1 = { usingClientEntryPoint: !1, Events: [Dr, dn, Xs, wc, xc, Wl] },
  Zn = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  h1 = {
    bundleType: Zn.bundleType,
    version: Zn.version,
    rendererPackageName: Zn.rendererPackageName,
    rendererConfig: Zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ec(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zn.findFiberByHostInstance || u1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!os.isDisabled && os.supportsFiber)
    try {
      (Gs = os.inject(h1)), (Je = os);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d1;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ql(t)) throw Error(k(200));
  return a1(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Ql(e)) throw Error(k(299));
  var n = !1,
    r = '',
    s = sh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Jl(e, 1, !1, null, null, n, !1, r, s)),
    (e[rt] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new Zl(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = Ec(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Gt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!ai(t)) throw Error(k(200));
  return ui(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Ql(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = '',
    o = sh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = rh(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[rt] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new li(t);
};
Ee.render = function (e, t, n) {
  if (!ai(t)) throw Error(k(200));
  return ui(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!ai(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Gt(function () {
        ui(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = Wl;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ai(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ui(e, t, n, !1, r);
};
Ee.version = '18.2.0-next-9e3b772b8-20220608';
function ih() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ih);
    } catch (e) {
      console.error(e);
    }
}
ih(), (rc.exports = Ee);
var f1 = rc.exports,
  yu = f1;
(Xi.createRoot = yu.createRoot), (Xi.hydrateRoot = yu.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rr() {
  return (
    (Rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rr.apply(this, arguments)
  );
}
var vt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(vt || (vt = {}));
const wu = 'popstate';
function p1(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: l } = r.location;
    return Ko(
      '',
      { pathname: i, search: o, hash: l },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    );
  }
  function n(r, s) {
    return typeof s == 'string' ? s : qs(s);
  }
  return g1(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function oh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function m1() {
  return Math.random().toString(36).substr(2, 8);
}
function xu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ko(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Rr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Dn(t) : t,
      { state: n, key: (t && t.key) || r || m1() }
    )
  );
}
function qs(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Dn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function g1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    l = vt.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Rr({}, o.state, { idx: u }), ''));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    l = vt.Pop;
    let _ = d(),
      m = _ == null ? null : _ - u;
    (u = _), a && a({ action: l, location: w.location, delta: m });
  }
  function f(_, m) {
    l = vt.Push;
    let p = Ko(w.location, _, m);
    n && n(p, _), (u = d() + 1);
    let g = xu(p, u),
      x = w.createHref(p);
    try {
      o.pushState(g, '', x);
    } catch (j) {
      if (j instanceof DOMException && j.name === 'DataCloneError') throw j;
      s.location.assign(x);
    }
    i && a && a({ action: l, location: w.location, delta: 1 });
  }
  function v(_, m) {
    l = vt.Replace;
    let p = Ko(w.location, _, m);
    n && n(p, _), (u = d());
    let g = xu(p, u),
      x = w.createHref(p);
    o.replaceState(g, '', x),
      i && a && a({ action: l, location: w.location, delta: 0 });
  }
  function y(_) {
    let m = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      p = typeof _ == 'string' ? _ : qs(_);
    return (
      (p = p.replace(/ $/, '%20')),
      Z(
        m,
        'No window.location.(origin|href) available to create URL for href: ' +
          p
      ),
      new URL(p, m)
    );
  }
  let w = {
    get action() {
      return l;
    },
    get location() {
      return e(s, o);
    },
    listen(_) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener(wu, h),
        (a = _),
        () => {
          s.removeEventListener(wu, h), (a = null);
        }
      );
    },
    createHref(_) {
      return t(s, _);
    },
    createURL: y,
    encodeLocation(_) {
      let m = y(_);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: v,
    go(_) {
      return o.go(_);
    },
  };
  return w;
}
var _u;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(_u || (_u = {}));
function v1(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Dn(t) : t,
    s = Yl(r.pathname || '/', n);
  if (s == null) return null;
  let i = lh(e);
  y1(i);
  let o = null;
  for (let l = 0; o == null && l < i.length; ++l) {
    let a = b1(s);
    o = N1(i[l], a);
  }
  return o;
}
function lh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let s = (i, o, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || '' : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      (Z(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ct([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Z(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      lh(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: E1(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) s(i, o);
      else for (let a of ah(i.path)) s(i, o, a);
    }),
    t
  );
}
function ah(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return s ? [i, ''] : [i];
  let o = ah(r.join('/')),
    l = [];
  return (
    l.push(...o.map((a) => (a === '' ? i : [i, a].join('/')))),
    s && l.push(...o),
    l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function y1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : C1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const w1 = /^:[\w-]+$/,
  x1 = 3,
  _1 = 2,
  k1 = 1,
  S1 = 10,
  j1 = -2,
  ku = (e) => e === '*';
function E1(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ku) && (r += j1),
    t && (r += _1),
    n
      .filter((s) => !ku(s))
      .reduce((s, i) => s + (w1.test(i) ? x1 : i === '' ? k1 : S1), r)
  );
}
function C1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function N1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    s = '/',
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      a = o === n.length - 1,
      u = s === '/' ? t : t.slice(s.length) || '/',
      d = P1(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let h = l.route;
    i.push({
      params: r,
      pathname: Ct([s, d.pathname]),
      pathnameBase: L1(Ct([s, d.pathnameBase])),
      route: h,
    }),
      d.pathnameBase !== '/' && (s = Ct([s, d.pathnameBase]));
  }
  return i;
}
function P1(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = T1(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, '$1'),
    l = s.slice(1);
  return {
    params: r.reduce((u, d, h) => {
      let { paramName: f, isOptional: v } = d;
      if (f === '*') {
        let w = l[h] || '';
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = l[h];
      return (
        v && !y ? (u[f] = void 0) : (u[f] = (y || '').replace(/%2F/g, '/')), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function T1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    oh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    s =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (s += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (s += '\\/*$')
      : e !== '' && e !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, t ? void 0 : 'i'), r]
  );
}
function b1(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      oh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Yl(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function O1(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: s = '',
  } = typeof e == 'string' ? Dn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : R1(n, t)) : t,
    search: A1(r),
    hash: $1(s),
  };
}
function R1(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((s) => {
      s === '..' ? n.length > 1 && n.pop() : s !== '.' && n.push(s);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Hi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function I1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xl(e, t) {
  let n = I1(e);
  return t
    ? n.map((r, s) => (s === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ea(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == 'string'
    ? (s = Dn(e))
    : ((s = Rr({}, e)),
      Z(
        !s.pathname || !s.pathname.includes('?'),
        Hi('?', 'pathname', 'search', s)
      ),
      Z(
        !s.pathname || !s.pathname.includes('#'),
        Hi('#', 'pathname', 'hash', s)
      ),
      Z(!s.search || !s.search.includes('#'), Hi('#', 'search', 'hash', s)));
  let i = e === '' || s.pathname === '',
    o = i ? '/' : s.pathname,
    l;
  if (o == null) l = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith('..')) {
      let f = o.split('/');
      for (; f[0] === '..'; ) f.shift(), (h -= 1);
      s.pathname = f.join('/');
    }
    l = h >= 0 ? t[h] : '/';
  }
  let a = O1(s, l),
    u = o && o !== '/' && o.endsWith('/'),
    d = (i || o === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (u || d) && (a.pathname += '/'), a;
}
const Ct = (e) => e.join('/').replace(/\/\/+/g, '/'),
  L1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  A1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  $1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function U1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const uh = ['post', 'put', 'patch', 'delete'];
new Set(uh);
const D1 = ['get', ...uh];
new Set(D1);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ir() {
  return (
    (Ir = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ir.apply(this, arguments)
  );
}
const ta = S.createContext(null),
  z1 = S.createContext(null),
  Rt = S.createContext(null),
  ci = S.createContext(null),
  Ze = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ch = S.createContext(null);
function M1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  zn() || Z(!1);
  let { basename: r, navigator: s } = S.useContext(Rt),
    { hash: i, pathname: o, search: l } = hh(e, { relative: n }),
    a = o;
  return (
    r !== '/' && (a = o === '/' ? r : Ct([r, o])),
    s.createHref({ pathname: a, search: l, hash: i })
  );
}
function zn() {
  return S.useContext(ci) != null;
}
function Mr() {
  return zn() || Z(!1), S.useContext(ci).location;
}
function dh(e) {
  S.useContext(Rt).static || S.useLayoutEffect(e);
}
function di() {
  let { isDataRoute: e } = S.useContext(Ze);
  return e ? np() : F1();
}
function F1() {
  zn() || Z(!1);
  let e = S.useContext(ta),
    { basename: t, future: n, navigator: r } = S.useContext(Rt),
    { matches: s } = S.useContext(Ze),
    { pathname: i } = Mr(),
    o = JSON.stringify(Xl(s, n.v7_relativeSplatPath)),
    l = S.useRef(!1);
  return (
    dh(() => {
      l.current = !0;
    }),
    S.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let h = ea(u, JSON.parse(o), i, d.relative === 'path');
        e == null &&
          t !== '/' &&
          (h.pathname = h.pathname === '/' ? t : Ct([t, h.pathname])),
          (d.replace ? r.replace : r.push)(h, d.state, d);
      },
      [t, r, o, i, e]
    )
  );
}
const B1 = S.createContext(null);
function V1(e) {
  let t = S.useContext(Ze).outlet;
  return t && S.createElement(B1.Provider, { value: e }, t);
}
function W1() {
  let { matches: e } = S.useContext(Ze),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function hh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(Rt),
    { matches: s } = S.useContext(Ze),
    { pathname: i } = Mr(),
    o = JSON.stringify(Xl(s, r.v7_relativeSplatPath));
  return S.useMemo(() => ea(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function H1(e, t) {
  return q1(e, t);
}
function q1(e, t, n, r) {
  zn() || Z(!1);
  let { navigator: s } = S.useContext(Rt),
    { matches: i } = S.useContext(Ze),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : '/';
  o && o.route;
  let u = Mr(),
    d;
  if (t) {
    var h;
    let _ = typeof t == 'string' ? Dn(t) : t;
    a === '/' || ((h = _.pathname) != null && h.startsWith(a)) || Z(!1),
      (d = _);
  } else d = u;
  let f = d.pathname || '/',
    v = f;
  if (a !== '/') {
    let _ = a.replace(/^\//, '').split('/');
    v = '/' + f.replace(/^\//, '').split('/').slice(_.length).join('/');
  }
  let y = v1(e, { pathname: v }),
    w = Q1(
      y &&
        y.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, l, _.params),
            pathname: Ct([
              a,
              s.encodeLocation
                ? s.encodeLocation(_.pathname).pathname
                : _.pathname,
            ]),
            pathnameBase:
              _.pathnameBase === '/'
                ? a
                : Ct([
                    a,
                    s.encodeLocation
                      ? s.encodeLocation(_.pathnameBase).pathname
                      : _.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? S.createElement(
        ci.Provider,
        {
          value: {
            location: Ir(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              d
            ),
            navigationType: vt.Pop,
          },
        },
        w
      )
    : w;
}
function K1() {
  let e = tp(),
    t = U1(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: s }, n) : null,
    null
  );
}
const J1 = S.createElement(K1, null);
class G1 extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Ze.Provider,
          { value: this.props.routeContext },
          S.createElement(ch.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Z1(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = S.useContext(ta);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Ze.Provider, { value: t }, r)
  );
}
function Q1(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (s = n) == null ? void 0 : s.errors;
  if (l != null) {
    let d = o.findIndex(
      (h) => h.route.id && (l == null ? void 0 : l[h.route.id])
    );
    d >= 0 || Z(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let h = o[d];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = d),
        h.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          y =
            h.route.loader &&
            f[h.route.id] === void 0 &&
            (!v || v[h.route.id] === void 0);
        if (h.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, h, f) => {
    let v,
      y = !1,
      w = null,
      _ = null;
    n &&
      ((v = l && h.route.id ? l[h.route.id] : void 0),
      (w = h.route.errorElement || J1),
      a &&
        (u < 0 && f === 0
          ? (rp('route-fallback', !1), (y = !0), (_ = null))
          : u === f &&
            ((y = !0), (_ = h.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, f + 1)),
      p = () => {
        let g;
        return (
          v
            ? (g = w)
            : y
            ? (g = _)
            : h.route.Component
            ? (g = S.createElement(h.route.Component, null))
            : h.route.element
            ? (g = h.route.element)
            : (g = d),
          S.createElement(Z1, {
            match: h,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
      ? S.createElement(G1, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var fh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(fh || {}),
  Ks = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ks || {});
function Y1(e) {
  let t = S.useContext(ta);
  return t || Z(!1), t;
}
function X1(e) {
  let t = S.useContext(z1);
  return t || Z(!1), t;
}
function ep(e) {
  let t = S.useContext(Ze);
  return t || Z(!1), t;
}
function ph(e) {
  let t = ep(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function tp() {
  var e;
  let t = S.useContext(ch),
    n = X1(Ks.UseRouteError),
    r = ph(Ks.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function np() {
  let { router: e } = Y1(fh.UseNavigateStable),
    t = ph(Ks.UseNavigateStable),
    n = S.useRef(!1);
  return (
    dh(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof s == 'number'
              ? e.navigate(s)
              : e.navigate(s, Ir({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Su = {};
function rp(e, t, n) {
  !t && !Su[e] && (Su[e] = !0);
}
function sp(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  zn() || Z(!1);
  let { future: i, static: o } = S.useContext(Rt),
    { matches: l } = S.useContext(Ze),
    { pathname: a } = Mr(),
    u = di(),
    d = ea(t, Xl(l, i.v7_relativeSplatPath), a, s === 'path'),
    h = JSON.stringify(d);
  return (
    S.useEffect(
      () => u(JSON.parse(h), { replace: n, state: r, relative: s }),
      [u, h, s, n, r]
    ),
    null
  );
}
function ip(e) {
  return V1(e.context);
}
function He(e) {
  Z(!1);
}
function op(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: s = vt.Pop,
    navigator: i,
    static: o = !1,
    future: l,
  } = e;
  zn() && Z(!1);
  let a = t.replace(/^\/*/, '/'),
    u = S.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: o,
        future: Ir({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, o]
    );
  typeof r == 'string' && (r = Dn(r));
  let {
      pathname: d = '/',
      search: h = '',
      hash: f = '',
      state: v = null,
      key: y = 'default',
    } = r,
    w = S.useMemo(() => {
      let _ = Yl(d, a);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: h, hash: f, state: v, key: y },
            navigationType: s,
          };
    }, [a, d, h, f, v, y, s]);
  return w == null
    ? null
    : S.createElement(
        Rt.Provider,
        { value: u },
        S.createElement(ci.Provider, { children: n, value: w })
      );
}
function lp(e) {
  let { children: t, location: n } = e;
  return H1(Jo(t), n);
}
new Promise(() => {});
function Jo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, s) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === S.Fragment) {
        n.push.apply(n, Jo(r.props.children, i));
        return;
      }
      r.type !== He && Z(!1), !r.props.index || !r.props.children || Z(!1);
      let o = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Jo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Go() {
  return (
    (Go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Go.apply(this, arguments)
  );
}
function ap(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function up(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function cp(e, t) {
  return e.button === 0 && (!t || t === '_self') && !up(e);
}
const dp = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  hp = '6';
try {
  window.__reactRouterVersion = hp;
} catch {}
const fp = 'startTransition',
  ju = nf[fp];
function pp(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = S.useRef();
  i.current == null && (i.current = p1({ window: s, v5Compat: !0 }));
  let o = i.current,
    [l, a] = S.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    d = S.useCallback(
      (h) => {
        u && ju ? ju(() => a(h)) : a(h);
      },
      [a, u]
    );
  return (
    S.useLayoutEffect(() => o.listen(d), [o, d]),
    S.createElement(op, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const mp =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  gp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mh = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: h,
      } = t,
      f = ap(t, dp),
      { basename: v } = S.useContext(Rt),
      y,
      w = !1;
    if (typeof u == 'string' && gp.test(u) && ((y = u), mp))
      try {
        let g = new URL(window.location.href),
          x = u.startsWith('//') ? new URL(g.protocol + u) : new URL(u),
          j = Yl(x.pathname, v);
        x.origin === g.origin && j != null
          ? (u = j + x.search + x.hash)
          : (w = !0);
      } catch {}
    let _ = M1(u, { relative: s }),
      m = vp(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: s,
        unstable_viewTransition: h,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return S.createElement(
      'a',
      Go({}, f, { href: y || _, onClick: w || i ? r : p, ref: n, target: a })
    );
  });
var Eu;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Eu || (Eu = {}));
var Cu;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Cu || (Cu = {}));
function vp(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = di(),
    u = Mr(),
    d = hh(e, { relative: o });
  return S.useCallback(
    (h) => {
      if (cp(h, n)) {
        h.preventDefault();
        let f = r !== void 0 ? r : qs(u) === qs(d);
        a(e, {
          replace: f,
          state: s,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, d, r, s, n, e, i, o, l]
  );
}
const yp = () => {
    const [e, t] = S.useState(!1),
      n = () => {
        t(!e);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs('div', {
          children: [
            c.jsx('header', {
              className: 'bg-white fixed top-0 left-0 right-0 z-20',
              children: c.jsx('div', {
                className: 'mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8',
                children: c.jsxs('div', {
                  className: 'flex h-16 items-center justify-end',
                  children: [
                    c.jsx('div', {
                      className: 'hidden md:block',
                      children: c.jsx('nav', {
                        'aria-label': 'Global',
                        children: c.jsx('ul', {
                          className: 'flex items-center gap-6 text-sm',
                          children: c.jsx('li', {
                            children: c.jsx(mh, {
                              className:
                                'text-gray-500 transition hover:text-naratama-300',
                              to: '/',
                              children: 'Home',
                            }),
                          }),
                        }),
                      }),
                    }),
                    c.jsx('div', {
                      className: 'flex items-center gap-4',
                      children: c.jsx('div', {
                        className: 'block md:hidden',
                        children: c.jsx('button', {
                          onClick: n,
                          'aria-label': 'button-bread',
                          className:
                            'rounded p-2 text-gray-600 transition hover:text-gray-600/75',
                          children: c.jsx('svg', {
                            xmlns: 'http://www.w3.org/2000/svg',
                            className: 'h-5 w-5',
                            fill: 'none',
                            viewBox: '0 0 24 24',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            children: c.jsx('path', {
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              d: 'M4 6h16M4 12h16M4 18h16',
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            c.jsx(ip, {}),
          ],
        }),
        e
          ? c.jsx('div', {
              className:
                'fixed top-12 shadow-md bg-white p-4 rounded-md right-4 z-20',
              children: c.jsxs('div', {
                className:
                  'flex flex-col items-center justify-center space-y-4',
                children: [
                  c.jsx('a', {
                    href: 'https://bit.ly/adm-naratama',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'text-black',
                    children: 'WhatsApp',
                  }),
                  c.jsx('a', {
                    href: 'https://www.instagram.com/naratama.graduation',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'text-black',
                    children: 'Instagram',
                  }),
                  c.jsx('a', {
                    href: 'https://www.tiktok.com/@naratama.graduation',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'text-black',
                    children: 'TikTok',
                  }),
                ],
              }),
            })
          : null,
      ],
    });
  },
  wp = () => {
    const e = [
      {
        title: 'Jakarta',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/monas.jpg',
      },
      {
        title: 'Jogja',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/jogja.jpg',
      },
      {
        title: 'Semarang',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/semarang.jpg',
      },
      {
        title: 'Solo',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/solo.jpg',
      },
      {
        title: 'Purwokerto',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/purwokerto.webp',
      },
    ];
    return c.jsx('section', {
      children: c.jsx('div', {
        className:
          'max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16',
        children: c.jsxs('div', {
          className:
            'grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16',
          children: [
            c.jsxs('div', {
              className:
                'mx-auto max-w-lg text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right',
              children: [
                c.jsx('h2', {
                  className: 'text-2xl font-semibold sm:text-4xl',
                  children: 'We are available in your city',
                }),
                c.jsx('p', {
                  className: 'mt-4 text-gray-600',
                  children:
                    'Our dedicated team covers universities across various cities in Indonesia, ensuring you receive prompt and efficient service. Here are our coverage areas.',
                }),
              ],
            }),
            c.jsx('div', {
              id: 'scrollContainer',
              className: 'flex navigation overflow-x-scroll',
              style: {
                '--scrollbar-width': '8px',
                '--scrollbar-height': '8px',
              },
              children: c.jsx('div', {
                className: 'flex w-fit-content',
                children: e.map((t, n) =>
                  c.jsxs(
                    'div',
                    {
                      className:
                        'w-36 h-36 m-4 bg-gray-300 rounded-lg flex-shrink-0',
                      children: [
                        c.jsx('img', {
                          src: t.imageUrl,
                          alt: t.title,
                          className: 'w-full h-3/4 rounded-t-lg',
                        }),
                        c.jsx('div', {
                          className: 'h-1/4 rounded-b-lg bg-naratama-100',
                          children: c.jsx('h1', {
                            className: 'text-center py-1 font-medium text-lg',
                            children: t.title,
                          }),
                        }),
                      ],
                    },
                    n
                  )
                ),
              }),
            }),
          ],
        }),
      }),
    });
  },
  xp = () =>
    c.jsx(c.Fragment, {
      children: c.jsx('div', {
        className: 'w-screen bg-black',
        children: c.jsxs('div', {
          className: 'py-12',
          children: [
            c.jsx('h1', {
              className:
                'text-white font-ubuntu font-medium text-sm text-center mb-1',
              children: 'INTERESTED TO BOOK?',
            }),
            c.jsx('div', {
              className: 'w-full flex justify-center',
              children: c.jsx('a', {
                href: 'https://bit.ly/adm-naratama',
                children: c.jsxs('div', {
                  className:
                    'flex border items-center border-white px-4 w-fit rounded-full',
                  children: [
                    c.jsx('h1', {
                      className:
                        'text-white text-center font-ubuntu font-medium text-sm',
                      children: 'CONTACT US',
                    }),
                    c.jsx('span', {
                      className: 'text-white pl-2',
                      children: c.jsx('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        strokeWidth: 1.5,
                        stroke: 'currentColor',
                        className: 'w-6 h-6',
                        children: c.jsx('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          d: 'M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  _p = () => {
    const e = () => {
        typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      t = new Date().getFullYear();
    return c.jsx('footer', {
      className: 'bg-white',
      children: c.jsxs('div', {
        className:
          'relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24',
        children: [
          c.jsx('div', {
            className:
              'absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8',
            children: c.jsxs('button', {
              onClick: e,
              className:
                'inline-block rounded-full bg-naratama-300 p-2 text-white shadow transition hover:bg-naratama-400 sm:p-3 lg:p-4',
              href: '#MainContent',
              children: [
                c.jsx('span', {
                  className: 'sr-only',
                  children: 'Back to top',
                }),
                c.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-5 w-5',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: c.jsx('path', {
                    fillRule: 'evenodd',
                    d: 'M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z',
                    clipRule: 'evenodd',
                  }),
                }),
              ],
            }),
          }),
          c.jsxs('div', {
            className: 'lg:flex lg:items-end lg:justify-between',
            children: [
              c.jsxs('div', {
                children: [
                  c.jsx('div', {
                    className: 'flex justify-center lg:justify-start',
                    children: c.jsx('div', {
                      children: c.jsx('img', {
                        className: 'h-10 w-auto',
                        src: 'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logoDark.png',
                        alt: '',
                      }),
                    }),
                  }),
                  c.jsx('p', {
                    className:
                      'mx-auto mt-6 text-sm max-w-md text-center leading-relaxed text-black lg:text-left',
                    children:
                      'Cause every special moments has a special story to tell. Let us help you to tell yours.',
                  }),
                ],
              }),
              c.jsxs('ul', {
                className:
                  'mt-12 flex font-medium text-sm flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12',
                children: [
                  c.jsx('li', {
                    children: c.jsx('a', {
                      className: 'text-black transition hover:underline',
                      href: '/',
                      children: 'Home',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx('a', {
                      className: 'text-black transition hover:underline',
                      href: 'https://bit.ly/adm-naratama',
                      children: 'Contact Us',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx('a', {
                      className: 'text-black transition hover:underline',
                      href: 'https://www.instagram.com/naratama.graduation',
                      children: 'Gallery',
                    }),
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('p', {
            className: 'mt-12 text-center text-sm text-black lg:text-right',
            children: [
              '© ',
              t,
              ' by Naratama Graduation | All Right Reserved.',
            ],
          }),
        ],
      }),
    });
  },
  kp = () =>
    c.jsx('section', {
      children: c.jsx('div', {
        className: 'max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8',
        children: c.jsxs('div', {
          className: 'grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch',
          children: [
            c.jsx('div', {
              className:
                'grid p-6 bg-naratama-100 rounded place-content-center sm:p-8',
              children: c.jsxs('div', {
                className: 'max-w-md mx-auto text-center lg:text-left',
                children: [
                  c.jsxs('header', {
                    children: [
                      c.jsx('h2', {
                        className:
                          'text-xl font-semibold text-gray-900 sm:text-3xl',
                        children: 'We have wonderful photography',
                      }),
                      c.jsx('p', {
                        className: 'mt-4 text-gray-700',
                        children:
                          'Feast your eyes on some stunning photos we captured for our beloved client!',
                      }),
                    ],
                  }),
                  c.jsx('a', {
                    href: 'https://www.instagram.com/naratama.graduation',
                    className:
                      'inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-naratama-300 border rounded hover:shadow-lg hover:bg-naratama-400 focus:outline-none focus:ring',
                    children: 'Open Gallery',
                  }),
                ],
              }),
            }),
            c.jsx('div', {
              className: 'lg:col-span-2 lg:py-8',
              children: c.jsxs('ul', {
                className: 'grid grid-cols-2 gap-4',
                children: [c.jsx('li', {}), c.jsx('li', {})],
              }),
            }),
          ],
        }),
      }),
    });
var gh = { exports: {} },
  Sp = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  jp = Sp,
  Ep = jp;
function vh() {}
function yh() {}
yh.resetWarningCache = vh;
var Cp = function () {
  function e(r, s, i, o, l, a) {
    if (a !== Ep) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: yh,
    resetWarningCache: vh,
  };
  return (n.PropTypes = n), n;
};
gh.exports = Cp();
var Np = gh.exports;
const hi = nl(Np),
  nr = ({ title: e }) =>
    c.jsxs('span', {
      className: 'relative flex justify-center',
      children: [
        c.jsx('div', {
          className:
            'absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75',
        }),
        c.jsx('span', {
          className: 'relative z-10 bg-white px-6',
          children: e,
        }),
      ],
    });
nr.propTypes = { title: hi.string };
const Pp = () =>
    c.jsx('section', {
      children: c.jsxs('div', {
        className:
          'mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8',
        children: [
          c.jsx('div', {
            className: 'max-w-3xl',
            children: c.jsx('h2', {
              className: 'text-2xl font-semibold sm:text-4xl',
              children: 'About us',
            }),
          }),
          c.jsxs('div', {
            className: 'mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16',
            children: [
              c.jsx('div', {
                className: 'relative h-64 overflow-hidden sm:h-80 lg:h-full',
                children: c.jsx('img', {
                  alt: 'Party',
                  src: 'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/banner.png',
                  className: 'absolute inset-0 h-full w-full object-cover',
                }),
              }),
              c.jsx('div', {
                className: 'lg:py-16',
                children: c.jsx('article', {
                  className: 'space-y-4 text-gray-600',
                  children: c.jsx('p', {
                    children:
                      'Naratama Graduation is a graduation documentation service established in 2023. The name Naratama comes from Sanskrit, means main human or VIP (Very Important Person). In line with its name, we are committed to creating elegant and classy documentation results. We believe that everyone deserves the best service and high-quality documentation.',
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Tp = () => {
    const e = [
      {
        name: 'Vita',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/vita_review.jpg',
        campuss: 'Universitas Islam Sultan Agung',
        description:
          'gemes banget liat hasilnya. mana ngga pasaran,ngga monoton kaya yang lain. masih bingung milih yang diedit mana,orinya aja udah bagus. fgnya baik banget,bisa mencairkan suasana yang badmood. jadi  pengen wisuda lagi.',
      },
      {
        name: 'Karina',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/karina_review.jpg',
        campuss: 'Universitas Gadjah Mada',
        description:
          'bjir bagus banget videonya. made my day banget kak! suka banget. semoga sukses terus ya kak!!!',
      },
      {
        name: 'Anggita',
        campuss: 'Universitas Negeri Yogyakarta',
        imageUrl:
          'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/anggit_review.jpg',
        description:
          'aaa cakep bangeeettt.makasiii. servicenya bagus banget pulaaa. Worth banget pokoknya. dah wajib jadi rekomendasi nih',
      },
    ];
    return c.jsx('section', {
      className: 'bg-white',
      children: c.jsxs('div', {
        className:
          'mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16',
        children: [
          c.jsx('h2', {
            className:
              'text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl',
            children: 'What they said',
          }),
          c.jsx('div', {
            className: 'mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8',
            children: e.map((t, n) =>
              c.jsxs(
                'blockquote',
                {
                  className: 'rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8',
                  children: [
                    c.jsxs('div', {
                      className: 'flex items-center gap-4',
                      children: [
                        c.jsx('img', {
                          alt: t.name,
                          src: t.imageUrl,
                          className: 'h-14 w-14 rounded-full object-cover',
                        }),
                        c.jsxs('div', {
                          children: [
                            c.jsx('p', {
                              className:
                                'mt-0.5 text-sm font-medium text-gray-900',
                              children: t.name,
                            }),
                            c.jsx('span', {
                              className:
                                'mt-0.5 text-xs font-medium text-gray-800',
                              children: t.campuss,
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx('p', {
                      className: 'mt-4 text-xs text-gray-700',
                      children: t.description,
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  bp = () =>
    c.jsx('section', {
      className: 'text-gray-800',
      children: c.jsxs('div', {
        className: 'container mx-auto flex flex-col p-6',
        children: [
          c.jsx('h2', {
            className: 'py-4 text-3xl font-bold text-center',
            children: 'Why Choose Us?',
          }),
          c.jsxs('div', {
            className: 'divide-y divide-gray-300',
            children: [
              c.jsxs('div', {
                className:
                  'grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0',
                children: [
                  c.jsx('div', {
                    className:
                      'flex items-center justify-center lg:col-span-1 col-span-full',
                    children: c.jsx('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      className: 'md:w-16 md:h-16 w-12 h-12 text-naratama-300',
                      children: c.jsx('path', {
                        fillRule: 'evenodd',
                        d: 'M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex flex-col justify-center max-w-3xl col-span-full lg:col-span-3 text-left',
                    children: [
                      c.jsx('span', {
                        className: 'text-xl text-center font-bold md:text-2xl',
                        children: 'Professional Team',
                      }),
                      c.jsx('span', {
                        className: 'mt-4 text-gray-700 text-justify',
                        children:
                          'Our team of professional and experienced photographers and videographers are experts in capturing graduation moments. We have experience documenting various graduation ceremonies at prestigious universities across Indonesia. We understand that graduation is a special and important moment for you, so we will work with full dedication to produce the best documentation.',
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                className:
                  'grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0',
                children: [
                  c.jsx('div', {
                    className:
                      'flex items-center justify-center lg:col-span-1 col-span-full',
                    children: c.jsx('svg', {
                      fill: 'currentColor',
                      viewBox: '0 0 56 56',
                      xmlns: 'http://www.w3.org/2000/svg',
                      className: 'md:w-16 md:h-16 w-12 h-12 text-naratama-300',
                      children: c.jsx('path', {
                        d: 'M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 17.6874 38.5703 C 15.1796 38.5703 13.9140 37.3281 13.9140 34.8906 L 13.9140 22.375 C 13.9140 19.9140 15.1796 18.6719 17.6874 18.6719 L 20.3827 18.6719 C 21.3202 18.6719 21.6014 18.4609 22.1405 17.8984 L 23.1014 16.8203 C 23.7109 16.1640 24.3202 15.8125 25.5390 15.8125 L 30.3202 15.8125 C 31.5390 15.8125 32.1483 16.1640 32.7343 16.8203 L 33.6952 17.8984 C 34.2343 18.5078 34.5155 18.6719 35.4530 18.6719 L 38.2655 18.6719 C 40.7265 18.6719 42.0155 19.9140 42.0155 22.375 L 42.0155 34.8906 C 42.0155 37.3281 40.7265 38.5703 38.2655 38.5703 Z M 27.8358 35.2422 C 31.7265 35.2422 34.8436 32.1953 34.8436 28.1875 C 34.8436 24.2969 31.7265 21.1797 27.8358 21.1797 C 23.9452 21.1797 20.7812 24.2969 20.7812 28.1875 C 20.7812 32.125 23.9452 35.2422 27.8358 35.2422 Z M 37.0468 25.0703 C 37.9140 25.0703 38.6405 24.3672 38.6171 23.4766 C 38.6171 22.5860 37.9140 21.8828 37.0468 21.8828 C 36.1796 21.8828 35.4530 22.5860 35.4530 23.4766 C 35.4530 24.3672 36.1796 25.0703 37.0468 25.0703 Z M 27.8358 33.2031 C 25.0702 33.2031 22.8202 30.9766 22.8202 28.1875 C 22.8202 25.4219 25.0702 23.1953 27.8358 23.1953 C 30.5780 23.1953 32.8280 25.4219 32.8280 28.1875 C 32.8280 30.9766 30.5780 33.2031 27.8358 33.2031 Z',
                      }),
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left',
                    children: [
                      c.jsx('span', {
                        className: 'text-xl font-bold md:text-2xl',
                        children: 'Advance Gear',
                      }),
                      c.jsx('span', {
                        className: 'mt-4 text-gray-700 text-justify',
                        children:
                          'We use modern and high-quality equipment to produce the best photos and videos. Our equipment includes DSLR and mirrorless cameras with high-quality lenses, as well as professional lighting and audio equipment. Using modern and high-quality equipment will produce sharp, clear, and memorable graduation documentation.',
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                className:
                  'grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0',
                children: [
                  c.jsx('div', {
                    className:
                      'flex items-center justify-center lg:col-span-1 col-span-full',
                    children: c.jsxs('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      fill: '#ffffff',
                      viewBox: '0 0 24 24',
                      className: 'md:w-16 md:h-16 w-12 h-12 text-naratama-300',
                      children: [
                        c.jsx('rect', {
                          x: '2',
                          y: '2',
                          width: '20',
                          height: '20',
                          rx: '2',
                          fill: 'currentColor',
                        }),
                        c.jsx('path', {
                          d: 'M18,17H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2ZM6.5,6.5A1.5,1.5,0,1,0,8,8,1.5,1.5,0,0,0,6.5,6.5Zm0,4A1.5,1.5,0,1,0,8,12,1.5,1.5,0,0,0,6.5,10.5Zm0,4A1.5,1.5,0,1,0,8,16,1.5,1.5,0,0,0,6.5,14.5Z',
                        }),
                      ],
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left',
                    children: [
                      c.jsx('span', {
                        className: 'text-xl font-bold md:text-2xl',
                        children: 'Multiple Packages',
                      }),
                      c.jsx('span', {
                        className: 'mt-4 text-gray-700 text-justify',
                        children:
                          'We offer various graduation documentation packages that can be customized to your needs and budget. We provide photo, video, and combination photo & video packages with various price options. You can choose the package that suits your needs and budget, ensuring you get the best graduation documentation without overspending.',
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                className:
                  'grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0',
                children: [
                  c.jsx('div', {
                    className:
                      'flex items-center justify-center lg:col-span-1 col-span-full',
                    children: c.jsx('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      className: 'md:w-16 md:h-16 w-12 h-12 text-naratama-300',
                      children: c.jsx('path', {
                        fillRule: 'evenodd',
                        d: 'M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z',
                        clipRule: 'evenodd',
                      }),
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left',
                    children: [
                      c.jsx('span', {
                        className: 'text-xl font-bold md:text-2xl',
                        children: 'Elegant and Classy',
                      }),
                      c.jsx('span', {
                        className: 'mt-4 text-gray-700 text-justify',
                        children:
                          'We are committed to producing elegant and classy graduation photos and videos, capturing your special moment perfectly. We have a distinctive photography and videography style that is elegant, classy, and timeless. Your graduation documentation will look professional and memorable, allowing you to proudly remember your graduation moment.',
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                className:
                  'grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0',
                children: [
                  c.jsx('div', {
                    className:
                      'flex items-center justify-center lg:col-span-1 col-span-full',
                    children: c.jsx('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      fill: 'currentColor',
                      viewBox: '0 0 453.165 453.165',
                      className: 'md:w-16 md:h-16 w-12 h-12 text-naratama-300',
                      children: c.jsxs('g', {
                        children: [
                          c.jsx('path', {
                            d: 'M435.783,139.576c-6.025,11.601-18.147,19.549-32.098,19.549h-11.372c8.509,20.83,13.213,43.603,13.213,67.457   c0,98.669-80.273,178.943-178.943,178.943S47.639,325.252,47.639,226.583S127.913,47.64,226.583,47.64   c31.485,0,61.62,8.175,88.192,23.29l0.055-0.055c7.035,3.992,13.809,8.471,20.275,13.411l-29.965,29.965   c-3.527,3.527-4.582,8.832-2.674,13.441c1.909,4.609,6.406,7.614,11.395,7.614h89.825c6.812,0,12.333-5.522,12.333-12.334V33.147   c0-4.989-3.005-9.486-7.613-11.395c-4.61-1.909-9.914-0.853-13.441,2.674L369.03,50.36c-41.272-33.428-91.761-50.36-142.447-50.36   C101.645,0.001,0,101.645,0,226.583s101.645,226.582,226.583,226.582S453.165,351.52,453.165,226.583   C453.165,195.77,446.973,166.38,435.783,139.576z',
                          }),
                          c.jsx('path', {
                            d: 'M84.229,226.583c0,78.62,63.734,142.354,142.354,142.354c78.62,0,142.355-63.734,142.355-142.354H226.583V84.228   C147.962,84.228,84.229,147.962,84.229,226.583z',
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left',
                    children: [
                      c.jsx('span', {
                        className: 'text-xl font-bold md:text-2xl',
                        children: 'Timeless Photos',
                      }),
                      c.jsx('span', {
                        className: 'mt-4 text-gray-700 text-justify',
                        children:
                          'We understand that graduation photos are memories that will be cherished forever. Therefore, we offer timeless photos that will never fade. Our timeless photos have beautiful composition, perfect lighting, and natural editing. With timeless photos, you can reminisce about your graduation moment with happiness and nostalgia whenever you see them.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Op = () =>
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(Pp, {}),
        c.jsx(nr, { title: 'Cities' }),
        c.jsx(wp, {}),
        c.jsx(nr, { title: 'our Gallery' }),
        c.jsx(kp, {}),
        c.jsx(nr, {}),
        c.jsx(bp, {}),
        c.jsx(nr, { title: 'Reviews' }),
        c.jsx(Tp, {}),
        c.jsx(xp, {}),
        c.jsx(_p, {}),
      ],
    }),
  Rp = () =>
    c.jsx(c.Fragment, {
      children: c.jsxs('div', {
        className: 'w-full mt-16 flex flex-col items-center justify-center',
        children: [
          c.jsxs('svg', {
            className: 'w-1/2 md:1/3 lg:w-1/4 text-blue-600',
            xmlns: 'http://www.w3.org/2000/svg',
            'data-name': 'Layer 1',
            viewBox: '0 0 860.13137 571.14799',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
            children: [
              c.jsx('path', {
                d: 'M605.66974,324.95306c-7.66934-12.68446-16.7572-26.22768-30.98954-30.36953-16.482-4.7965-33.4132,4.73193-47.77473,14.13453a1392.15692,1392.15692,0,0,0-123.89338,91.28311l.04331.49238q46.22556-3.1878,92.451-6.37554c22.26532-1.53546,45.29557-3.2827,64.97195-13.8156,7.46652-3.99683,14.74475-9.33579,23.20555-9.70782,10.51175-.46217,19.67733,6.87923,26.8802,14.54931,42.60731,45.371,54.937,114.75409,102.73817,154.61591A1516.99453,1516.99453,0,0,0,605.66974,324.95306Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M867.57068,709.78146c-4.71167-5.94958-6.6369-7.343-11.28457-13.34761q-56.7644-73.41638-106.70791-151.79237-33.92354-53.23-64.48275-108.50439-14.54864-26.2781-28.29961-52.96872-10.67044-20.6952-20.8646-41.63793c-1.94358-3.98782-3.8321-7.99393-5.71122-12.00922-4.42788-9.44232-8.77341-18.93047-13.43943-28.24449-5.31686-10.61572-11.789-21.74485-21.55259-28.877a29.40493,29.40493,0,0,0-15.31855-5.89458c-7.948-.51336-15.28184,2.76855-22.17568,6.35295-50.43859,26.301-97.65922,59.27589-140.3696,96.79771A730.77816,730.77816,0,0,0,303.32241,496.24719c-1.008,1.43927-3.39164.06417-2.37419-1.38422q6.00933-8.49818,12.25681-16.81288A734.817,734.817,0,0,1,500.80465,303.06436q18.24824-11.82581,37.18269-22.54245c6.36206-3.60275,12.75188-7.15967,19.25136-10.49653,6.37146-3.27274,13.13683-6.21547,20.41563-6.32547,24.7701-.385,37.59539,27.66695,46.40506,46.54248q4.15283,8.9106,8.40636,17.76626,16.0748,33.62106,33.38729,66.628,10.68453,20.379,21.83683,40.51955,34.7071,62.71816,73.77854,122.897c34.5059,53.1429,68.73651,100.08874,108.04585,149.78472C870.59617,709.21309,868.662,711.17491,867.57068,709.78146Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#e4e4e4',
              }),
              c.jsx('path', {
                d: 'M414.91613,355.804c-1.43911-1.60428-2.86927-3.20856-4.31777-4.81284-11.42244-12.63259-23.6788-25.11847-39.3644-32.36067a57.11025,57.11025,0,0,0-23.92679-5.54622c-8.56213.02753-16.93178,2.27348-24.84306,5.41792-3.74034,1.49427-7.39831,3.1902-11.00078,4.99614-4.11634,2.07182-8.15927,4.28118-12.1834,6.50883q-11.33112,6.27044-22.36816,13.09089-21.9606,13.57221-42.54566,29.21623-10.67111,8.11311-20.90174,16.75788-9.51557,8.03054-18.64618,16.492c-1.30169,1.20091-3.24527-.74255-1.94358-1.94347,1.60428-1.49428,3.22691-2.97938,4.84955-4.44613q6.87547-6.21546,13.9712-12.19257,12.93921-10.91827,26.54851-20.99312,21.16293-15.67614,43.78288-29.22541,11.30361-6.76545,22.91829-12.96259c2.33794-1.24675,4.70318-2.466,7.09572-3.6211a113.11578,113.11578,0,0,1,16.86777-6.86632,60.0063,60.0063,0,0,1,25.476-2.50265,66.32706,66.32706,0,0,1,23.50512,8.1314c15.40091,8.60812,27.34573,21.919,38.97,34.90915C418.03337,355.17141,416.09875,357.12405,414.91613,355.804Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#e4e4e4',
              }),
              c.jsx('path', {
                d: 'M730.47659,486.71092l36.90462-13.498,18.32327-6.70183c5.96758-2.18267,11.92082-4.66747,18.08988-6.23036a28.53871,28.53871,0,0,1,16.37356.20862,37.73753,37.73753,0,0,1,12.771,7.91666,103.63965,103.63965,0,0,1,10.47487,11.18643c3.98932,4.79426,7.91971,9.63877,11.86772,14.46706q24.44136,29.89094,48.56307,60.04134,24.12117,30.14991,47.91981,60.556,23.85681,30.48041,47.38548,61.21573,2.88229,3.76518,5.75966,7.53415c1.0598,1.38809,3.44949.01962,2.37472-1.38808Q983.582,650.9742,959.54931,620.184q-24.09177-30.86383-48.51647-61.46586-24.42421-30.60141-49.17853-60.93743-6.16706-7.55761-12.35445-15.09858c-3.47953-4.24073-6.91983-8.52718-10.73628-12.47427-7.00539-7.24516-15.75772-13.64794-26.23437-13.82166-6.15972-.10214-12.121,1.85248-17.844,3.92287-6.16968,2.232-12.32455,4.50571-18.48633,6.75941l-37.16269,13.59243-9.29067,3.3981c-1.64875.603-.93651,3.2619.73111,2.652Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#e4e4e4',
              }),
              c.jsx('path', {
                d: 'M366.37741,334.52609c-18.75411-9.63866-42.77137-7.75087-60.00508,4.29119a855.84708,855.84708,0,0,1,97.37056,22.72581C390.4603,353.75916,380.07013,341.5635,366.37741,334.52609Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M306.18775,338.7841l-3.61042,2.93462c1.22123-1.02713,2.4908-1.99013,3.795-2.90144C306.31073,338.80665,306.24935,338.79473,306.18775,338.7841Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M831.54929,486.84576c-3.6328-4.42207-7.56046-9.05222-12.99421-10.84836l-5.07308.20008A575.436,575.436,0,0,0,966.74929,651.418Q899.14929,569.13192,831.54929,486.84576Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M516.08388,450.36652A37.4811,37.4811,0,0,0,531.015,471.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M749.08388,653.36652A37.4811,37.4811,0,0,0,764.015,674.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('path', {
                d: 'M284.08388,639.36652A37.4811,37.4811,0,0,0,299.015,660.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f2f2f2',
              }),
              c.jsx('circle', {
                cx: '649.24878',
                cy: 51,
                r: 51,
                fill: 'currentColor',
              }),
              c.jsx('path', {
                d: 'M911.21851,176.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C957.07935,195.76,935.93537,179.63727,911.21851,176.29639Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f0f0f0',
              }),
              c.jsx('path', {
                d: 'M805.21851,244.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C851.07935,263.76,829.93537,247.63727,805.21851,244.29639Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#f0f0f0',
              }),
              c.jsx('path', {
                d: 'M1020.94552,257.15423a.98189.98189,0,0,1-.30176-.04688C756.237,173.48919,523.19942,184.42376,374.26388,208.32122c-20.26856,3.251-40.59131,7.00586-60.40381,11.16113-5.05811,1.05957-10.30567,2.19532-15.59668,3.37793-6.31885,1.40723-12.55371,2.85645-18.53223,4.30567q-3.873.917-7.59472,1.84863c-3.75831.92773-7.57178,1.89453-11.65967,2.957-4.56787,1.17774-9.209,2.41309-13.79737,3.67188a.44239.44239,0,0,1-.05127.01465l.00049.001c-5.18261,1.415-10.33789,2.8711-15.32324,4.3252-2.69824.77929-5.30371,1.54785-7.79932,2.30664-.2788.07715-.52587.15136-.77636.22754l-.53614.16308c-.31054.09473-.61718.1875-.92382.27539l-.01953.00586.00048.001-.81152.252c-.96777.293-1.91211.5791-2.84082.86426-24.54492,7.56641-38.03809,12.94922-38.17139,13.00195a1,1,0,1,1-.74414-1.85644c.13428-.05274,13.69336-5.46289,38.32764-13.05762.93213-.28613,1.87891-.57226,2.84961-.86621l.7539-.23438c.02588-.00976.05176-.01757.07813-.02539.30518-.08691.60986-.17968.91943-.27343l.53711-.16309c.26758-.08105.53125-.16113.80127-.23535,2.47852-.75391,5.09278-1.52441,7.79785-2.30664,4.98731-1.45508,10.14746-2.91113,15.334-4.32813.01611-.00586.03271-.00976.04883-.01464v-.001c4.60449-1.2627,9.26269-2.50293,13.84521-3.68457,4.09424-1.06348,7.915-2.03223,11.67969-2.96192q3.73755-.93017,7.60937-1.85253c5.98536-1.45118,12.23291-2.90235,18.563-4.3125,5.29932-1.1836,10.55567-2.32227,15.62207-3.38282,19.84326-4.16211,40.19776-7.92285,60.49707-11.17871C523.09591,182.415,756.46749,171.46282,1021.2463,255.2011a.99974.99974,0,0,1-.30078,1.95313Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#ccc',
              }),
              c.jsx('path', {
                d: 'M432.92309,584.266a6.72948,6.72948,0,0,0-1.7-2.67,6.42983,6.42983,0,0,0-.92-.71c-2.61-1.74-6.51-2.13-8.99,0a5.81012,5.81012,0,0,0-.69.71q-1.11,1.365-2.28,2.67c-1.28,1.46-2.59,2.87-3.96,4.24-.39.38-.78.77-1.18,1.15-.23.23-.46.45-.69.67-.88.84-1.78,1.65-2.69,2.45-.48.43-.96.85-1.45,1.26-.73.61-1.46,1.22-2.2,1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01,0-.02,0-.03.02a.17861.17861,0,0,0-.07.05c-.22.15-.37.25-.48.34.04-.01995.08-.05.12-.07-.18.14-.37.28-.55.42-1.75,1.29-3.54,2.53-5.37,3.69a99.21022,99.21022,0,0,1-14.22,7.55c-.33.13-.67.27-1.01.4a85.96993,85.96993,0,0,1-40.85,6.02q-2.13008-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.93186,97.93186,0,0,1-18.02-5.44,118.65185,118.65185,0,0,1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11,1.15-2.82,2.28-5.64,3.38-8.48.55-1.37,1.08-2.74,1.6-4.12,4.09-10.63,7.93-21.36,11.61-32.13q5.58-16.365,10.53-32.92.51-1.68.99-3.36,2.595-8.745,4.98-17.53c.15-.56994.31-1.12994.45-1.7q.68994-2.52,1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.63441,7.63441,0,0,0-9.22,5.24c-.43,1.62-.86,3.23-1.3,4.85q-3.165,11.74494-6.66,23.41-.51,1.68-1.02,3.36-7.71,25.41-16.93,50.31-1.11,3.015-2.25,6.01c-.37.98-.74,1.96-1.12,2.94-.73,1.93-1.48,3.86-2.23,5.79-.43006,1.13-.87006,2.26-1.31,3.38-.29.71-.57,1.42-.85,2.12a41.80941,41.80941,0,0,0-8.81-2.12l-.48-.06a27.397,27.397,0,0,0-7.01.06,23.91419,23.91419,0,0,0-17.24,10.66c-4.77,7.51-4.71,18.25,1.98,24.63,6.89,6.57,17.32,6.52,25.43,2.41a28.35124,28.35124,0,0,0,10.52-9.86,50.56939,50.56939,0,0,0,2.74-4.65c.21.14.42.28.63.43.8.56,1.6,1.13,2.39,1.69a111.73777,111.73777,0,0,0,14.51,8.91,108.35887,108.35887,0,0,0,34.62,10.47c.27.03.53.07.8.1,1.33.17,2.67.3,4.01.41a103.78229,103.78229,0,0,0,55.58-11.36q2.175-1.125,4.31-2.36,3.315-1.92,6.48-4.08c1.15-.78,2.27-1.57,3.38-2.4a101.04244,101.04244,0,0,0,13.51-11.95q2.35491-2.475,4.51-5.11005a8.0612,8.0612,0,0,0,2.2-5.3A7.5644,7.5644,0,0,0,432.92309,584.266Zm-165.59,23.82c.21-.15.42-.31.62-.47C267.89312,607.766,267.60308,607.936,267.33312,608.086Zm3.21-3.23c-.23.26-.44.52-.67.78a23.36609,23.36609,0,0,1-2.25,2.2c-.11.1-.23.2-.35.29a.00976.00976,0,0,0-.01.01,3.80417,3.80417,0,0,0-.42005.22q-.645.39-1.31994.72a17.00459,17.00459,0,0,1-2.71.75,16.79925,16.79925,0,0,1-2.13.02h-.02a14.82252,14.82252,0,0,1-1.45-.4c-.24-.12-.47-.25994-.7-.4-.09-.08-.17005-.16-.22-.21a2.44015,2.44015,0,0,1-.26995-.29.0098.0098,0,0,0-.01-.01c-.11005-.2-.23005-.4-.34-.6a.031.031,0,0,1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51066,12.51066,0,0,1,.01-1.37,13.4675,13.4675,0,0,1,.54-1.88,11.06776,11.06776,0,0,1,.69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.02212,18.02212,0,0,1,1.75-1.01,19.48061,19.48061,0,0,1,2.93-.79,24.98945,24.98945,0,0,1,4.41.04,30.30134,30.30134,0,0,1,4.1,1.01,36.94452,36.94452,0,0,1-2.77,4.54C270.6231,604.746,270.58312,604.806,270.54308,604.856Zm-11.12-3.29a2.18029,2.18029,0,0,1-.31.38995A1.40868,1.40868,0,0,1,259.42309,601.566Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M402.86309,482.136q-.13494,4.71-.27,9.42-.285,10.455-.59,20.92-.315,11.775-.66,23.54-.165,6.07507-.34,12.15-.465,16.365-.92,32.72c-.03,1.13-.07,2.25-.1,3.38q-.225,8.11506-.45,16.23-.255,8.805-.5,17.61-.18,6.59994-.37,13.21-1.34994,47.895-2.7,95.79a7.64844,7.64844,0,0,1-7.5,7.5,7.56114,7.56114,0,0,1-7.5-7.5q.75-26.94,1.52-53.88.675-24.36,1.37-48.72.225-8.025.45-16.06.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96q.66-23.475,1.32-46.96.27-9.24.52-18.49.3-10.545.6-21.08c.09-3.09.17005-6.17.26-9.26a7.64844,7.64844,0,0,1,7.5-7.5A7.56116,7.56116,0,0,1,402.86309,482.136Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M814.29118,484.2172a893.23753,893.23753,0,0,1-28.16112,87.94127c-3.007,7.94641-6.08319,15.877-9.3715,23.71185l.75606-1.7916a54.58274,54.58274,0,0,1-5.58953,10.61184q-.22935.32119-.46685.63642,1.16559-1.49043.4428-.589c-.25405.30065-.5049.60219-.7676.89546a23.66436,23.66436,0,0,1-2.2489,2.20318q-.30139.25767-.61188.5043l.93783-.729c-.10884.25668-.87275.59747-1.11067.74287a18.25362,18.25362,0,0,1-2.40479,1.21853l1.7916-.75606a19.0859,19.0859,0,0,1-4.23122,1.16069l1.9938-.26791a17.02055,17.02055,0,0,1-4.29785.046l1.99379.2679a14.0022,14.0022,0,0,1-3.40493-.917l1.79159.75606a12.01175,12.01175,0,0,1-1.67882-.89614c-.27135-.17688-1.10526-.80852-.01487.02461,1.13336.86595.14562.07434-.08763-.15584-.19427-.19171-.36962-.4-.55974-.595-.88208-.90454.99637,1.55662.39689.49858a18.18179,18.18179,0,0,1-.87827-1.63672l.75606,1.7916a11.92493,11.92493,0,0,1-.728-2.65143l.26791,1.9938a13.65147,13.65147,0,0,1-.00316-3.40491l-.2679,1.9938a15.96371,15.96371,0,0,1,.99486-3.68011l-.75606,1.7916a16.72914,16.72914,0,0,1,1.17794-2.29848,6.72934,6.72934,0,0,1,.72851-1.0714c.04915.01594-1.26865,1.51278-.56937.757.1829-.19767.354-.40592.539-.602.29617-.31382.61354-.60082.92561-.89791,1.04458-.99442-1.46188.966-.25652.17907a19.0489,19.0489,0,0,1,2.74925-1.49923l-1.79159.75606a20.31136,20.31136,0,0,1,4.99523-1.33984l-1.9938.2679a25.62828,25.62828,0,0,1,6.46062.07647l-1.9938-.2679a33.21056,33.21056,0,0,1,7.89178,2.2199l-1.7916-.75606c5.38965,2.31383,10.16308,5.74926,14.928,9.118a111.94962,111.94962,0,0,0,14.50615,8.9065,108.38849,108.38849,0,0,0,34.62226,10.47371,103.93268,103.93268,0,0,0,92.58557-36.75192,8.07773,8.07773,0,0,0,2.1967-5.3033,7.63232,7.63232,0,0,0-2.1967-5.3033c-2.75154-2.52586-7.94926-3.239-10.6066,0a95.63575,95.63575,0,0,1-8.10664,8.72692q-2.01736,1.914-4.14232,3.70983-1.21364,1.02588-2.46086,2.01121c-.3934.31081-1.61863,1.13807.26309-.19744-.43135.30614-.845.64036-1.27058.95478a99.26881,99.26881,0,0,1-20.33215,11.56478l1.79159-.75606a96.8364,96.8364,0,0,1-24.17119,6.62249l1.99379-.2679a97.64308,97.64308,0,0,1-25.75362-.03807l1.99379.2679a99.79982,99.79982,0,0,1-24.857-6.77027l1.7916.75607a116.02515,116.02515,0,0,1-21.7364-12.59112,86.87725,86.87725,0,0,0-11.113-6.99417,42.8238,42.8238,0,0,0-14.43784-4.38851c-9.43884-1.11076-19.0571,2.56562-24.24624,10.72035-4.77557,7.50482-4.71394,18.24362,1.97369,24.62519,6.8877,6.5725,17.31846,6.51693,25.43556,2.40567,7.81741-3.95946,12.51288-12.18539,15.815-19.94186,7.43109-17.45514,14.01023-35.31364,20.1399-53.263q9.09651-26.63712,16.49855-53.81332.91661-3.36581,1.80683-6.73869c1.001-3.78869-1.26094-8.32-5.23829-9.22589a7.63317,7.63317,0,0,0-9.22589,5.23829Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M889.12382,482.13557l-2.69954,95.79311-2.68548,95.29418-1.5185,53.88362a7.56465,7.56465,0,0,0,7.5,7.5,7.64923,7.64923,0,0,0,7.5-7.5l2.69955-95.79311,2.68548-95.29418,1.51849-53.88362a7.56465,7.56465,0,0,0-7.5-7.5,7.64923,7.64923,0,0,0-7.5,7.5Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M629.52566,700.36106h2.32885V594.31942h54.32863v-2.32291H631.85451V547.25214H673.8102q-.92256-1.17339-1.89893-2.31694H631.85451V515.38231c-.7703-.32846-1.54659-.64493-2.32885-.9435V544.9352h-45.652V507.07c-.78227.03583-1.55258.08959-2.3289.15527v37.71h-36.4201V516.68409c-.78227.34636-1.55258.71061-2.31694,1.0928V544.9352h-30.6158v2.31694h30.6158v44.74437h-30.6158v2.32291h30.6158V700.36106h2.31694V594.31942a36.41283,36.41283,0,0,1,36.4201,36.42007v69.62157h2.3289V594.31942h45.652Zm-84.401-108.36455V547.25214h36.4201v44.74437Zm38.749,0V547.25214h.91362a44.74135,44.74135,0,0,1,44.73842,44.74437Z',
                transform: 'translate(-169.93432 -164.42601)',
                opacity: '0.2',
              }),
              c.jsx('path', {
                d: 'M615.30309,668.566a63.05854,63.05854,0,0,1-20.05,33.7c-.74.64-1.48,1.26-2.25,1.87q-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623,37.623,0,0,1-3.3-32.44c2.64-7.12,7.42-13.41,12.12-19.65,6.49-8.62,12.8-17.14,13.03-27.65a60.54415,60.54415,0,0,1,7.9,13.33,16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32a63.99025,63.99025,0,0,1,2.45,12.18A61.18851,61.18851,0,0,1,615.30309,668.566Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M648.50311,642.356c-5.9,4.29-9.35,10.46-12.03,17.26a16.62776,16.62776,0,0,0-7.17,4.58c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39-2.68,8.04-5.14,16.36-9.88,23.15a36.98942,36.98942,0,0,1-12.03,10.91,38.49166,38.49166,0,0,1-4.02,1.99q-7.62.585-14.95,1.25-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825,0-1.65a63.30382,63.30382,0,0,1,15.25-39.86c.45-.52.91-1.03,1.38-1.54a61.7925,61.7925,0,0,1,16.81-12.7A62.65425,62.65425,0,0,1,648.50311,642.356Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: 'currentColor',
              }),
              c.jsx('path', {
                d: 'M589.16308,699.526l-1.15,3.4-.58,1.73c-1.53.14-3.04.29-4.54.43l-.27.03c-1.66.17-3.31.34-4.96.51-.43-.5-.86-1.01-1.28-1.53a62.03045,62.03045,0,0,1,8.07-87.11c-1.32,6.91.22,13.53,2.75,20.1-.27.11-.53.22-.78.34a16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32q.705.075,1.41.15c.07.15.13.29.2.44,2.85,6.18,5.92,12.39,7.65,18.83a43.66591,43.66591,0,0,1,1.02,4.91A37.604,37.604,0,0,1,589.16308,699.526Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: 'currentColor',
              }),
              c.jsx('path', {
                d: 'M689.82123,554.48655c-8.60876-16.79219-21.94605-30.92088-37.63219-41.30357a114.2374,114.2374,0,0,0-52.5626-18.37992q-3.69043-.33535-7.399-.39281c-2.92141-.04371-46.866,12.63176-61.58712,22.98214a114.29462,114.29462,0,0,0-35.333,39.527,102.49972,102.49972,0,0,0-12.12557,51.6334,113.56387,113.56387,0,0,0,14.70268,51.47577,110.47507,110.47507,0,0,0,36.44425,38.74592C549.66655,708.561,565.07375,734.51,583.1831,735.426c18.24576.923,39.05418-23.55495,55.6951-30.98707a104.42533,104.42533,0,0,0,41.72554-34.005,110.24964,110.24964,0,0,0,19.599-48.94777c2.57368-18.08313,1.37415-36.73271-4.80123-54.01627a111.85969,111.85969,0,0,0-5.58024-12.9833c-1.77961-3.50519-6.996-4.7959-10.26142-2.69063a7.67979,7.67979,0,0,0-2.69064,10.26142q1.56766,3.08773,2.91536,6.27758l-.75606-1.7916a101.15088,101.15088,0,0,1,6.87641,25.53816l-.26791-1.99379a109.2286,109.2286,0,0,1-.06613,28.68252l.26791-1.9938a109.73379,109.73379,0,0,1-7.55462,27.67419l.75606-1.79159a104.212,104.212,0,0,1-6.67151,13.09835q-1.92308,3.18563-4.08062,6.22159c-.63172.8881-1.28287,1.761-1.939,2.63114-.85625,1.13555,1.16691-1.48321.28228-.36941-.15068.18972-.30049.3801-.45182.5693q-.68121.85165-1.3818,1.68765a93.61337,93.61337,0,0,1-10.17647,10.38359q-1.36615,1.19232-2.77786,2.33115c-.46871.37832-.932.77269-1.42079,1.12472.01861-.0134,1.57956-1.19945.65556-.511-.2905.21644-.57851.43619-.86961.65184q-2.90994,2.1558-5.97433,4.092a103.48509,103.48509,0,0,1-14.75565,7.7131l1.7916-.75606a109.21493,109.21493,0,0,1-27.59663,7.55154l1.9938-.26791a108.15361,108.15361,0,0,1-28.58907.0506l1.99379.2679a99.835,99.835,0,0,1-25.09531-6.78448l1.79159.75607a93.64314,93.64314,0,0,1-13.41605-6.99094q-3.17437-2-6.18358-4.24743c-.2862-.21359-.56992-.43038-.855-.64549-.9155-.69088.65765.50965.67021.51787a19.16864,19.16864,0,0,1-1.535-1.22469q-1.45353-1.18358-2.86136-2.4218a101.98931,101.98931,0,0,1-10.49319-10.70945q-1.21308-1.43379-2.37407-2.91054c-.33524-.4263-.9465-1.29026.40424.5289-.17775-.23939-.36206-.47414-.54159-.71223q-.64657-.85751-1.27568-1.72793-2.203-3.048-4.18787-6.24586a109.29037,109.29037,0,0,1-7.8054-15.10831l.75606,1.7916a106.58753,106.58753,0,0,1-7.34039-26.837l.26791,1.9938a97.86589,97.86589,0,0,1-.04843-25.63587l-.2679,1.9938A94.673,94.673,0,0,1,505.27587,570.55l-.75606,1.7916a101.55725,101.55725,0,0,1,7.19519-13.85624q2.0655-3.32328,4.37767-6.4847.52528-.71832,1.06244-1.42786c.324-.4279,1.215-1.49333-.30537.38842.14906-.18449.29252-.37428.43942-.56041q1.26882-1.60756,2.59959-3.1649A107.40164,107.40164,0,0,1,530.772,536.21508q1.47408-1.29171,2.99464-2.52906.6909-.56218,1.39108-1.11284c.18664-.14673.37574-.29073.56152-.43858-1.99743,1.58953-.555.43261-.10157.09288q3.13393-2.34833,6.43534-4.46134a103.64393,103.64393,0,0,1,15.38655-8.10791l-1.7916.75606c7.76008-3.25839,42.14086-10.9492,48.394-10.10973l-1.99379-.26791A106.22471,106.22471,0,0,1,628.768,517.419l-1.7916-.75606a110.31334,110.31334,0,0,1,12.6002,6.32922q3.04344,1.78405,5.96742,3.76252,1.38351.93658,2.73809,1.915.677.48917,1.34626.98885c.24789.185.49386.37253.74135.558,1.03924.779-1.43148-1.1281-.34209-.26655a110.84261,110.84261,0,0,1,10.36783,9.2532q2.401,2.445,4.63686,5.04515,1.14659,1.33419,2.24643,2.70757c.36436.45495,1.60506,2.101.08448.08457.37165.49285.74744.98239,1.11436,1.47884a97.97718,97.97718,0,0,1,8.39161,13.53807c1.79317,3.49775,6.98675,4.80186,10.26142,2.69064A7.67666,7.67666,0,0,0,689.82123,554.48655Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M602.43116,676.88167a3.77983,3.77983,0,0,1-2.73939-6.55137c.09531-.37882.16368-.65085.259-1.02968q-.05115-.12366-.1029-.24717c-3.47987-8.29769-25.685,14.83336-26.645,22.63179a30.029,30.029,0,0,0,.52714,10.32752A120.39223,120.39223,0,0,1,562.77838,652.01a116.20247,116.20247,0,0,1,.72078-12.96332q.59712-5.293,1.65679-10.51055a121.78667,121.78667,0,0,1,24.1515-51.61646c6.87378.38364,12.898-.66348,13.47967-13.98532.10346-2.36972,1.86113-4.42156,2.24841-6.756-.65621.08607-1.32321.13985-1.97941.18285-.20444.0107-.41958.02149-.624.03228l-.07709.00346a3.745,3.745,0,0,1-3.07566-6.10115q.425-.52305.85054-1.04557c.43036-.53793.87143-1.06507,1.30171-1.60292a1.865,1.865,0,0,0,.13986-.16144c.49494-.61322.98971-1.21564,1.48465-1.82885a10.82911,10.82911,0,0,0-3.55014-3.43169c-4.95941-2.90463-11.80146-.89293-15.38389,3.59313-3.59313,4.486-4.27083,10.77947-3.023,16.3843a43.39764,43.39764,0,0,0,6.003,13.3828c-.269.34429-.54872.67779-.81765,1.02209a122.57366,122.57366,0,0,0-12.79359,20.2681c1.0163-7.93863-11.41159-36.60795-16.21776-42.68052-5.773-7.29409-17.61108-4.11077-18.62815,5.13562q-.01476.13428-.02884.26849,1.07082.60411,2.0964,1.28237a5.12707,5.12707,0,0,1-2.06713,9.33031l-.10452.01613c-9.55573,13.64367,21.07745,49.1547,28.74518,41.18139a125.11045,125.11045,0,0,0-6.73449,31.69282,118.66429,118.66429,0,0,0,.08607,19.15986l-.03231-.22593C558.90163,648.154,529.674,627.51374,521.139,629.233c-4.91675.99041-9.75952.76525-9.01293,5.72484q.01788.11874.03635.2375a34.4418,34.4418,0,0,1,3.862,1.86105q1.07082.60423,2.09639,1.28237a5.12712,5.12712,0,0,1-2.06712,9.33039l-.10464.01606c-.07528.01079-.13987.02157-.21507.03237-4.34967,14.96631,27.90735,39.12,47.5177,31.43461h.01081a125.07484,125.07484,0,0,0,8.402,24.52806H601.679c.10765-.3335.20443-.67779.3013-1.01129a34.102,34.102,0,0,1-8.30521-.49477c2.22693-2.73257,4.45377-5.48664,6.6807-8.21913a1.86122,1.86122,0,0,0,.13986-.16135c1.12956-1.39849,2.26992-2.78627,3.39948-4.18476l.00061-.00173a49.95232,49.95232,0,0,0-1.46367-12.72495Zm-34.37066-67.613.0158-.02133-.0158.04282Zm-6.64832,59.93237-.25822-.58084c.01079-.41957.01079-.83914,0-1.26942,0-.11845-.0215-.23672-.0215-.35508.09678.74228.18285,1.48464.29042,2.22692Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '95.24878',
                cy: 439,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '227.24878',
                cy: 559,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '728.24878',
                cy: 559,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '755.24878',
                cy: 419,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '723.24878',
                cy: 317,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M434.1831,583.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,434.1831,583.426Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '484.24878',
                cy: 349,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M545.1831,513.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,545.1831,513.426Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M403.1831,481.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,403.1831,481.426Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '599.24878',
                cy: 443,
                r: 11,
                fill: '#3f3d56',
              }),
              c.jsx('circle', {
                cx: '426.24878',
                cy: 338,
                r: 16,
                fill: '#3f3d56',
              }),
              c.jsx('path', {
                d: 'M1028.875,735.26666l-857.75.30733a1.19068,1.19068,0,1,1,0-2.38136l857.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z',
                transform: 'translate(-169.93432 -164.42601)',
                fill: '#cacaca',
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'flex flex-col items-center justify-center',
            children: [
              c.jsx('p', {
                className:
                  'text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12',
                children: 'Page Not Found',
              }),
              c.jsx('p', {
                className: 'md:text-lg lg:text-xl text-gray-600 mt-8',
                children:
                  'Sorry, the page you are looking for could not be found.',
              }),
              c.jsxs(mh, {
                to: '/',
                className:
                  'flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150',
                title: 'Return Home',
                children: [
                  c.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: 'h-5 w-5',
                    viewBox: '0 0 20 20',
                    fill: 'currentColor',
                    children: c.jsx('path', {
                      fillRule: 'evenodd',
                      d: 'M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z',
                      clipRule: 'evenodd',
                    }),
                  }),
                  c.jsx('span', { children: 'Return Home' }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Ip = () =>
    c.jsx('aside', {
      className: 'w-full p-6 sm:w-60 h-screen bg-naratama-200 text-gray-50',
      children: c.jsxs('nav', {
        className: 'space-y-8 text-sm mt-16',
        children: [
          c.jsxs('div', {
            className: 'space-y-2',
            children: [
              c.jsx('h2', {
                className:
                  'text-sm font-semibold tracking-widest uppercase text-gray-800',
                children: 'Landing Page',
              }),
              c.jsxs('div', {
                className: 'flex flex-col space-y-1',
                children: [
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Hero Section',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Gallery Highlight',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Reviews',
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'space-y-2',
            children: [
              c.jsx('h2', {
                className:
                  'text-sm font-semibold tracking-widest uppercase text-gray-800',
                children: 'Client Management',
              }),
              c.jsxs('div', {
                className: 'flex flex-col space-y-1',
                children: [
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Jakarta',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Semarang',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Yogyakarta',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Solo',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Purwokerto',
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'space-y-2',
            children: [
              c.jsx('h2', {
                className:
                  'text-sm font-semibold tracking-widest uppercase text-gray-800',
                children: 'Photographer',
              }),
              c.jsxs('div', {
                className: 'flex flex-col space-y-1',
                children: [
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Jakarta',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Semarang',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Yogyakarta',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Solo',
                  }),
                  c.jsx('a', {
                    rel: 'noopener noreferrer',
                    href: '#',
                    children: 'Purwokerto',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Lp = () => c.jsx(c.Fragment, { children: c.jsx(Ip, {}) });
var Ap = {
  VITE_SUPABASE_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvc3RpcndkY2h4aXNreGJlcndsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjA5NDYyNCwiZXhwIjoyMDI3NjcwNjI0fQ.bjz46vOLzMuxDDfb4LHIr6eS1JJBkqCaBZ9Tb7yItQ8',
  VITE_SUPABASE_URL: 'https://xostirwdchxiskxberwl.supabase.co',
  VITE_SPREADSHEET_KEY:
    'AKfycby8GAKGqQ1IIPZnDmcuWhVHs0wdHNnXTxIMn61fnAFTquJMGDZd0_DYJzK0iVE0XUo6',
  VITE_SPREADSHEET_URL:
    'https://script.google.com/macros/s/AKfycbwroI7Rwyv7sEcw6Z-XXHWl-GFIf6-BoxOpDV_h6G9dsZe1ar60ErH1qccHui0fT2Tb/exec',
  BASE_URL: '/',
  MODE: 'production',
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const Nu = (e) => {
    let t;
    const n = new Set(),
      r = (d, h) => {
        const f = typeof d == 'function' ? d(t) : d;
        if (!Object.is(f, t)) {
          const v = t;
          (t =
            h ?? (typeof f != 'object' || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((y) => y(t, v));
        }
      },
      s = () => t,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
        destroy: () => {
          (Ap ? 'production' : void 0) !== 'production' &&
            console.warn(
              '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
            ),
            n.clear();
        },
      },
      u = (t = e(r, s, a));
    return a;
  },
  $p = (e) => (e ? Nu(e) : Nu);
var wh = { exports: {} },
  xh = {},
  _h = { exports: {} },
  kh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rn = S;
function Up(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dp = typeof Object.is == 'function' ? Object.is : Up,
  zp = Rn.useState,
  Mp = Rn.useEffect,
  Fp = Rn.useLayoutEffect,
  Bp = Rn.useDebugValue;
function Vp(e, t) {
  var n = t(),
    r = zp({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    Fp(
      function () {
        (s.value = n), (s.getSnapshot = t), qi(s) && i({ inst: s });
      },
      [e, n, t]
    ),
    Mp(
      function () {
        return (
          qi(s) && i({ inst: s }),
          e(function () {
            qi(s) && i({ inst: s });
          })
        );
      },
      [e]
    ),
    Bp(n),
    n
  );
}
function qi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dp(e, n);
  } catch {
    return !0;
  }
}
function Wp(e, t) {
  return t();
}
var Hp =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Wp
    : Vp;
kh.useSyncExternalStore =
  Rn.useSyncExternalStore !== void 0 ? Rn.useSyncExternalStore : Hp;
_h.exports = kh;
var qp = _h.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = S,
  Kp = qp;
function Jp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gp = typeof Object.is == 'function' ? Object.is : Jp,
  Zp = Kp.useSyncExternalStore,
  Qp = fi.useRef,
  Yp = fi.useEffect,
  Xp = fi.useMemo,
  em = fi.useDebugValue;
xh.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var i = Qp(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Xp(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (d = v), (v = r(v)), s !== void 0 && o.hasValue)) {
            var y = o.value;
            if (s(y, v)) return (h = y);
          }
          return (h = v);
        }
        if (((y = h), Gp(d, v))) return y;
        var w = r(v);
        return s !== void 0 && s(y, w) ? y : ((d = v), (h = w));
      }
      var u = !1,
        d,
        h,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, s]
  );
  var l = Zp(e, i[0], i[1]);
  return (
    Yp(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    em(l),
    l
  );
};
wh.exports = xh;
var tm = wh.exports;
const nm = nl(tm);
var Sh = {
  VITE_SUPABASE_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvc3RpcndkY2h4aXNreGJlcndsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjA5NDYyNCwiZXhwIjoyMDI3NjcwNjI0fQ.bjz46vOLzMuxDDfb4LHIr6eS1JJBkqCaBZ9Tb7yItQ8',
  VITE_SUPABASE_URL: 'https://xostirwdchxiskxberwl.supabase.co',
  VITE_SPREADSHEET_KEY:
    'AKfycby8GAKGqQ1IIPZnDmcuWhVHs0wdHNnXTxIMn61fnAFTquJMGDZd0_DYJzK0iVE0XUo6',
  VITE_SPREADSHEET_URL:
    'https://script.google.com/macros/s/AKfycbwroI7Rwyv7sEcw6Z-XXHWl-GFIf6-BoxOpDV_h6G9dsZe1ar60ErH1qccHui0fT2Tb/exec',
  BASE_URL: '/',
  MODE: 'production',
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const { useDebugValue: rm } = ll,
  { useSyncExternalStoreWithSelector: sm } = nm;
let Pu = !1;
const im = (e) => e;
function om(e, t = im, n) {
  (Sh ? 'production' : void 0) !== 'production' &&
    n &&
    !Pu &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (Pu = !0));
  const r = sm(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return rm(r), r;
}
const Tu = (e) => {
    (Sh ? 'production' : void 0) !== 'production' &&
      typeof e != 'function' &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == 'function' ? $p(e) : e,
      n = (r, s) => om(t, r, s);
    return Object.assign(n, t), n;
  },
  lm = (e) => (e ? Tu(e) : Tu),
  jh = lm((e) => ({
    token: localStorage.getItem('token') || '',
    login: (t) => {
      localStorage.setItem('token', t), e({ token: t });
    },
    logout: () => {
      localStorage.removeItem('token'), e({ token: '' });
    },
  }));
function Eh({ children: e }) {
  let { token: t } = jh();
  return t ? e : c.jsx(sp, { to: '/login' });
}
Eh.propTypes = { children: hi.node.isRequired };
const am = 'modulepreload',
  um = function (e) {
    return '/' + e;
  },
  bu = {},
  In = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link'),
        o = document.querySelector('meta[property=csp-nonce]'),
        l =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute('nonce'));
      s = Promise.all(
        n.map((a) => {
          if (((a = um(a)), a in bu)) return;
          bu[a] = !0;
          const u = a.endsWith('.css'),
            d = u ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let v = i.length - 1; v >= 0; v--) {
              const y = i[v];
              if (y.href === a && (!u || y.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${a}"]${d}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : am),
            u || ((f.as = 'script'), (f.crossOrigin = '')),
            (f.href = a),
            l && f.setAttribute('nonce', l),
            document.head.appendChild(f),
            u)
          )
            return new Promise((v, y) => {
              f.addEventListener('load', v),
                f.addEventListener('error', () =>
                  y(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    return s
      .then(() => t())
      .catch((i) => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i;
      });
  },
  cm = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
        ? (t = (...n) =>
            In(() => Promise.resolve().then(() => Fr), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  };
class na extends Error {
  constructor(t, n = 'FunctionsError', r) {
    super(t), (this.name = n), (this.context = r);
  }
}
class dm extends na {
  constructor(t) {
    super(
      'Failed to send a request to the Edge Function',
      'FunctionsFetchError',
      t
    );
  }
}
class hm extends na {
  constructor(t) {
    super('Relay Error invoking the Edge Function', 'FunctionsRelayError', t);
  }
}
class fm extends na {
  constructor(t) {
    super(
      'Edge Function returned a non-2xx status code',
      'FunctionsHttpError',
      t
    );
  }
}
var Zo;
(function (e) {
  (e.Any = 'any'),
    (e.ApNortheast1 = 'ap-northeast-1'),
    (e.ApNortheast2 = 'ap-northeast-2'),
    (e.ApSouth1 = 'ap-south-1'),
    (e.ApSoutheast1 = 'ap-southeast-1'),
    (e.ApSoutheast2 = 'ap-southeast-2'),
    (e.CaCentral1 = 'ca-central-1'),
    (e.EuCentral1 = 'eu-central-1'),
    (e.EuWest1 = 'eu-west-1'),
    (e.EuWest2 = 'eu-west-2'),
    (e.EuWest3 = 'eu-west-3'),
    (e.SaEast1 = 'sa-east-1'),
    (e.UsEast1 = 'us-east-1'),
    (e.UsWest1 = 'us-west-1'),
    (e.UsWest2 = 'us-west-2');
})(Zo || (Zo = {}));
var pm = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class mm {
  constructor(t, { headers: n = {}, customFetch: r, region: s = Zo.Any } = {}) {
    (this.url = t), (this.headers = n), (this.region = s), (this.fetch = cm(r));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t, n = {}) {
    var r;
    return pm(this, void 0, void 0, function* () {
      try {
        const { headers: s, method: i, body: o } = n;
        let l = {},
          { region: a } = n;
        a || (a = this.region), a && a !== 'any' && (l['x-region'] = a);
        let u;
        o &&
          ((s && !Object.prototype.hasOwnProperty.call(s, 'Content-Type')) ||
            !s) &&
          ((typeof Blob < 'u' && o instanceof Blob) || o instanceof ArrayBuffer
            ? ((l['Content-Type'] = 'application/octet-stream'), (u = o))
            : typeof o == 'string'
            ? ((l['Content-Type'] = 'text/plain'), (u = o))
            : typeof FormData < 'u' && o instanceof FormData
            ? (u = o)
            : ((l['Content-Type'] = 'application/json'),
              (u = JSON.stringify(o))));
        const d = yield this.fetch(`${this.url}/${t}`, {
            method: i || 'POST',
            headers: Object.assign(
              Object.assign(Object.assign({}, l), this.headers),
              s
            ),
            body: u,
          }).catch((y) => {
            throw new dm(y);
          }),
          h = d.headers.get('x-relay-error');
        if (h && h === 'true') throw new hm(d);
        if (!d.ok) throw new fm(d);
        let f = (
            (r = d.headers.get('Content-Type')) !== null && r !== void 0
              ? r
              : 'text/plain'
          )
            .split(';')[0]
            .trim(),
          v;
        return (
          f === 'application/json'
            ? (v = yield d.json())
            : f === 'application/octet-stream'
            ? (v = yield d.blob())
            : f === 'multipart/form-data'
            ? (v = yield d.formData())
            : (v = yield d.text()),
          { data: v, error: null }
        );
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
}
var gm = function () {
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof global < 'u') return global;
    throw new Error('unable to locate global object');
  },
  Ln = gm();
const vm = Ln.fetch,
  ra = Ln.fetch.bind(Ln),
  Ch = Ln.Headers,
  ym = Ln.Request,
  wm = Ln.Response,
  Fr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: Ch,
        Request: ym,
        Response: wm,
        default: ra,
        fetch: vm,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
class xm extends Error {
  constructor(t) {
    super(t.message),
      (this.name = 'PostgrestError'),
      (this.details = t.details),
      (this.hint = t.hint),
      (this.code = t.code);
  }
}
class _m {
  constructor(t) {
    (this.shouldThrowOnError = !1),
      (this.method = t.method),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.schema = t.schema),
      (this.body = t.body),
      (this.shouldThrowOnError = t.shouldThrowOnError),
      (this.signal = t.signal),
      (this.isMaybeSingle = t.isMaybeSingle),
      t.fetch
        ? (this.fetch = t.fetch)
        : typeof fetch > 'u'
        ? (this.fetch = ra)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(t, n) {
    this.schema === void 0 ||
      (['GET', 'HEAD'].includes(this.method)
        ? (this.headers['Accept-Profile'] = this.schema)
        : (this.headers['Content-Profile'] = this.schema)),
      this.method !== 'GET' &&
        this.method !== 'HEAD' &&
        (this.headers['Content-Type'] = 'application/json');
    const r = this.fetch;
    let s = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (i) => {
      var o, l, a;
      let u = null,
        d = null,
        h = null,
        f = i.status,
        v = i.statusText;
      if (i.ok) {
        if (this.method !== 'HEAD') {
          const m = await i.text();
          m === '' ||
            (this.headers.Accept === 'text/csv' ||
            (this.headers.Accept &&
              this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
              ? (d = m)
              : (d = JSON.parse(m)));
        }
        const w =
            (o = this.headers.Prefer) === null || o === void 0
              ? void 0
              : o.match(/count=(exact|planned|estimated)/),
          _ =
            (l = i.headers.get('content-range')) === null || l === void 0
              ? void 0
              : l.split('/');
        w && _ && _.length > 1 && (h = parseInt(_[1])),
          this.isMaybeSingle &&
            this.method === 'GET' &&
            Array.isArray(d) &&
            (d.length > 1
              ? ((u = {
                  code: 'PGRST116',
                  details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    'JSON object requested, multiple (or no) rows returned',
                }),
                (d = null),
                (h = null),
                (f = 406),
                (v = 'Not Acceptable'))
              : d.length === 1
              ? (d = d[0])
              : (d = null));
      } else {
        const w = await i.text();
        try {
          (u = JSON.parse(w)),
            Array.isArray(u) &&
              i.status === 404 &&
              ((d = []), (u = null), (f = 200), (v = 'OK'));
        } catch {
          i.status === 404 && w === ''
            ? ((f = 204), (v = 'No Content'))
            : (u = { message: w });
        }
        if (
          (u &&
            this.isMaybeSingle &&
            !((a = u == null ? void 0 : u.details) === null || a === void 0) &&
            a.includes('0 rows') &&
            ((u = null), (f = 200), (v = 'OK')),
          u && this.shouldThrowOnError)
        )
          throw new xm(u);
      }
      return { error: u, data: d, count: h, status: f, statusText: v };
    });
    return (
      this.shouldThrowOnError ||
        (s = s.catch((i) => {
          var o, l, a;
          return {
            error: {
              message: `${
                (o = i == null ? void 0 : i.name) !== null && o !== void 0
                  ? o
                  : 'FetchError'
              }: ${i == null ? void 0 : i.message}`,
              details: `${
                (l = i == null ? void 0 : i.stack) !== null && l !== void 0
                  ? l
                  : ''
              }`,
              hint: '',
              code: `${
                (a = i == null ? void 0 : i.code) !== null && a !== void 0
                  ? a
                  : ''
              }`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: '',
          };
        })),
      s.then(t, n)
    );
  }
}
class km extends _m {
  select(t) {
    let n = !1;
    const r = (t ?? '*')
      .split('')
      .map((s) => (/\s/.test(s) && !n ? '' : (s === '"' && (n = !n), s)))
      .join('');
    return (
      this.url.searchParams.set('select', r),
      this.headers.Prefer && (this.headers.Prefer += ','),
      (this.headers.Prefer += 'return=representation'),
      this
    );
  }
  order(
    t,
    {
      ascending: n = !0,
      nullsFirst: r,
      foreignTable: s,
      referencedTable: i = s,
    } = {}
  ) {
    const o = i ? `${i}.order` : 'order',
      l = this.url.searchParams.get(o);
    return (
      this.url.searchParams.set(
        o,
        `${l ? `${l},` : ''}${t}.${n ? 'asc' : 'desc'}${
          r === void 0 ? '' : r ? '.nullsfirst' : '.nullslast'
        }`
      ),
      this
    );
  }
  limit(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const s = typeof r > 'u' ? 'limit' : `${r}.limit`;
    return this.url.searchParams.set(s, `${t}`), this;
  }
  range(t, n, { foreignTable: r, referencedTable: s = r } = {}) {
    const i = typeof s > 'u' ? 'offset' : `${s}.offset`,
      o = typeof s > 'u' ? 'limit' : `${s}.limit`;
    return (
      this.url.searchParams.set(i, `${t}`),
      this.url.searchParams.set(o, `${n - t + 1}`),
      this
    );
  }
  abortSignal(t) {
    return (this.signal = t), this;
  }
  single() {
    return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this;
  }
  maybeSingle() {
    return (
      this.method === 'GET'
        ? (this.headers.Accept = 'application/json')
        : (this.headers.Accept = 'application/vnd.pgrst.object+json'),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = 'text/csv'), this;
  }
  geojson() {
    return (this.headers.Accept = 'application/geo+json'), this;
  }
  explain({
    analyze: t = !1,
    verbose: n = !1,
    settings: r = !1,
    buffers: s = !1,
    wal: i = !1,
    format: o = 'text',
  } = {}) {
    var l;
    const a = [
        t ? 'analyze' : null,
        n ? 'verbose' : null,
        r ? 'settings' : null,
        s ? 'buffers' : null,
        i ? 'wal' : null,
      ]
        .filter(Boolean)
        .join('|'),
      u =
        (l = this.headers.Accept) !== null && l !== void 0
          ? l
          : 'application/json';
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${u}"; options=${a};`),
      o === 'json' ? this : this
    );
  }
  rollback() {
    var t;
    return (
      ((t = this.headers.Prefer) !== null && t !== void 0 ? t : '').trim()
        .length > 0
        ? (this.headers.Prefer += ',tx=rollback')
        : (this.headers.Prefer = 'tx=rollback'),
      this
    );
  }
  returns() {
    return this;
  }
}
class sn extends km {
  eq(t, n) {
    return this.url.searchParams.append(t, `eq.${n}`), this;
  }
  neq(t, n) {
    return this.url.searchParams.append(t, `neq.${n}`), this;
  }
  gt(t, n) {
    return this.url.searchParams.append(t, `gt.${n}`), this;
  }
  gte(t, n) {
    return this.url.searchParams.append(t, `gte.${n}`), this;
  }
  lt(t, n) {
    return this.url.searchParams.append(t, `lt.${n}`), this;
  }
  lte(t, n) {
    return this.url.searchParams.append(t, `lte.${n}`), this;
  }
  like(t, n) {
    return this.url.searchParams.append(t, `like.${n}`), this;
  }
  likeAllOf(t, n) {
    return this.url.searchParams.append(t, `like(all).{${n.join(',')}}`), this;
  }
  likeAnyOf(t, n) {
    return this.url.searchParams.append(t, `like(any).{${n.join(',')}}`), this;
  }
  ilike(t, n) {
    return this.url.searchParams.append(t, `ilike.${n}`), this;
  }
  ilikeAllOf(t, n) {
    return this.url.searchParams.append(t, `ilike(all).{${n.join(',')}}`), this;
  }
  ilikeAnyOf(t, n) {
    return this.url.searchParams.append(t, `ilike(any).{${n.join(',')}}`), this;
  }
  is(t, n) {
    return this.url.searchParams.append(t, `is.${n}`), this;
  }
  in(t, n) {
    const r = n
      .map((s) =>
        typeof s == 'string' && new RegExp('[,()]').test(s) ? `"${s}"` : `${s}`
      )
      .join(',');
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  contains(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `cs.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cs.{${n.join(',')}}`)
        : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
      this
    );
  }
  containedBy(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `cd.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cd.{${n.join(',')}}`)
        : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
      this
    );
  }
  rangeGt(t, n) {
    return this.url.searchParams.append(t, `sr.${n}`), this;
  }
  rangeGte(t, n) {
    return this.url.searchParams.append(t, `nxl.${n}`), this;
  }
  rangeLt(t, n) {
    return this.url.searchParams.append(t, `sl.${n}`), this;
  }
  rangeLte(t, n) {
    return this.url.searchParams.append(t, `nxr.${n}`), this;
  }
  rangeAdjacent(t, n) {
    return this.url.searchParams.append(t, `adj.${n}`), this;
  }
  overlaps(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `ov.${n}`)
        : this.url.searchParams.append(t, `ov.{${n.join(',')}}`),
      this
    );
  }
  textSearch(t, n, { config: r, type: s } = {}) {
    let i = '';
    s === 'plain'
      ? (i = 'pl')
      : s === 'phrase'
      ? (i = 'ph')
      : s === 'websearch' && (i = 'w');
    const o = r === void 0 ? '' : `(${r})`;
    return this.url.searchParams.append(t, `${i}fts${o}.${n}`), this;
  }
  match(t) {
    return (
      Object.entries(t).forEach(([n, r]) => {
        this.url.searchParams.append(n, `eq.${r}`);
      }),
      this
    );
  }
  not(t, n, r) {
    return this.url.searchParams.append(t, `not.${n}.${r}`), this;
  }
  or(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const s = r ? `${r}.or` : 'or';
    return this.url.searchParams.append(s, `(${t})`), this;
  }
  filter(t, n, r) {
    return this.url.searchParams.append(t, `${n}.${r}`), this;
  }
}
class Sm {
  constructor(t, { headers: n = {}, schema: r, fetch: s }) {
    (this.url = t), (this.headers = n), (this.schema = r), (this.fetch = s);
  }
  select(t, { head: n = !1, count: r } = {}) {
    const s = n ? 'HEAD' : 'GET';
    let i = !1;
    const o = (t ?? '*')
      .split('')
      .map((l) => (/\s/.test(l) && !i ? '' : (l === '"' && (i = !i), l)))
      .join('');
    return (
      this.url.searchParams.set('select', o),
      r && (this.headers.Prefer = `count=${r}`),
      new sn({
        method: s,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(t, { count: n, defaultToNull: r = !0 } = {}) {
    const s = 'POST',
      i = [];
    if (
      (this.headers.Prefer && i.push(this.headers.Prefer),
      n && i.push(`count=${n}`),
      r || i.push('missing=default'),
      (this.headers.Prefer = i.join(',')),
      Array.isArray(t))
    ) {
      const o = t.reduce((l, a) => l.concat(Object.keys(a)), []);
      if (o.length > 0) {
        const l = [...new Set(o)].map((a) => `"${a}"`);
        this.url.searchParams.set('columns', l.join(','));
      }
    }
    return new sn({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    t,
    {
      onConflict: n,
      ignoreDuplicates: r = !1,
      count: s,
      defaultToNull: i = !0,
    } = {}
  ) {
    const o = 'POST',
      l = [`resolution=${r ? 'ignore' : 'merge'}-duplicates`];
    if (
      (n !== void 0 && this.url.searchParams.set('on_conflict', n),
      this.headers.Prefer && l.push(this.headers.Prefer),
      s && l.push(`count=${s}`),
      i || l.push('missing=default'),
      (this.headers.Prefer = l.join(',')),
      Array.isArray(t))
    ) {
      const a = t.reduce((u, d) => u.concat(Object.keys(d)), []);
      if (a.length > 0) {
        const u = [...new Set(a)].map((d) => `"${d}"`);
        this.url.searchParams.set('columns', u.join(','));
      }
    }
    return new sn({
      method: o,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(t, { count: n } = {}) {
    const r = 'PATCH',
      s = [];
    return (
      this.headers.Prefer && s.push(this.headers.Prefer),
      n && s.push(`count=${n}`),
      (this.headers.Prefer = s.join(',')),
      new sn({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: t,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: t } = {}) {
    const n = 'DELETE',
      r = [];
    return (
      t && r.push(`count=${t}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(',')),
      new sn({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const jm = '1.9.2',
  Em = { 'X-Client-Info': `postgrest-js/${jm}` };
class sa {
  constructor(t, { headers: n = {}, schema: r, fetch: s } = {}) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, Em), n)),
      (this.schemaName = r),
      (this.fetch = s);
  }
  from(t) {
    const n = new URL(`${this.url}/${t}`);
    return new Sm(n, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
    });
  }
  schema(t) {
    return new sa(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
    });
  }
  rpc(t, n = {}, { head: r = !1, count: s } = {}) {
    let i;
    const o = new URL(`${this.url}/rpc/${t}`);
    let l;
    r
      ? ((i = 'HEAD'),
        Object.entries(n).forEach(([u, d]) => {
          o.searchParams.append(u, `${d}`);
        }))
      : ((i = 'POST'), (l = n));
    const a = Object.assign({}, this.headers);
    return (
      s && (a.Prefer = `count=${s}`),
      new sn({
        method: i,
        url: o,
        headers: a,
        schema: this.schemaName,
        body: l,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const Cm = '2.9.3',
  Nm = { 'X-Client-Info': `realtime-js/${Cm}` },
  Pm = '1.0.0',
  Nh = 1e4,
  Tm = 1e3;
var jn;
(function (e) {
  (e[(e.connecting = 0)] = 'connecting'),
    (e[(e.open = 1)] = 'open'),
    (e[(e.closing = 2)] = 'closing'),
    (e[(e.closed = 3)] = 'closed');
})(jn || (jn = {}));
var xe;
(function (e) {
  (e.closed = 'closed'),
    (e.errored = 'errored'),
    (e.joined = 'joined'),
    (e.joining = 'joining'),
    (e.leaving = 'leaving');
})(xe || (xe = {}));
var ze;
(function (e) {
  (e.close = 'phx_close'),
    (e.error = 'phx_error'),
    (e.join = 'phx_join'),
    (e.reply = 'phx_reply'),
    (e.leave = 'phx_leave'),
    (e.access_token = 'access_token');
})(ze || (ze = {}));
var Qo;
(function (e) {
  e.websocket = 'websocket';
})(Qo || (Qo = {}));
var zt;
(function (e) {
  (e.Connecting = 'connecting'),
    (e.Open = 'open'),
    (e.Closing = 'closing'),
    (e.Closed = 'closed');
})(zt || (zt = {}));
class Ph {
  constructor(t, n) {
    (this.callback = t),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = n);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class bm {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, n) {
    return t.constructor === ArrayBuffer
      ? n(this._binaryDecode(t))
      : n(typeof t == 'string' ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = new TextDecoder();
    return this._decodeBroadcast(t, n, r);
  }
  _decodeBroadcast(t, n, r) {
    const s = n.getUint8(1),
      i = n.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const l = r.decode(t.slice(o, o + s));
    o = o + s;
    const a = r.decode(t.slice(o, o + i));
    o = o + i;
    const u = JSON.parse(r.decode(t.slice(o, t.byteLength)));
    return { ref: null, topic: l, event: a, payload: u };
  }
}
class Ki {
  constructor(t, n, r = {}, s = Nh) {
    (this.channel = t),
      (this.event = n),
      (this.payload = r),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ''),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ''),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived('timeout') ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, n) {
    var r;
    return (
      this._hasReceived(t) &&
        n(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: t, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (n) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger('timeout', {});
      }, this.timeout));
  }
  trigger(t, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: n });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Ou;
(function (e) {
  (e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave');
})(Ou || (Ou = {}));
class fr {
  constructor(t, n) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (n == null ? void 0 : n.events) || {
      state: 'presence_state',
      diff: 'presence_diff',
    };
    this.channel._on(r.state, {}, (s) => {
      const { onJoin: i, onLeave: o, onSync: l } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = fr.syncState(this.state, s, i, o)),
        this.pendingDiffs.forEach((a) => {
          this.state = fr.syncDiff(this.state, a, i, o);
        }),
        (this.pendingDiffs = []),
        l();
    }),
      this.channel._on(r.diff, {}, (s) => {
        const { onJoin: i, onLeave: o, onSync: l } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = fr.syncDiff(this.state, s, i, o)), l());
      }),
      this.onJoin((s, i, o) => {
        this.channel._trigger('presence', {
          event: 'join',
          key: s,
          currentPresences: i,
          newPresences: o,
        });
      }),
      this.onLeave((s, i, o) => {
        this.channel._trigger('presence', {
          event: 'leave',
          key: s,
          currentPresences: i,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger('presence', { event: 'sync' });
      });
  }
  static syncState(t, n, r, s) {
    const i = this.cloneDeep(t),
      o = this.transformState(n),
      l = {},
      a = {};
    return (
      this.map(i, (u, d) => {
        o[u] || (a[u] = d);
      }),
      this.map(o, (u, d) => {
        const h = i[u];
        if (h) {
          const f = d.map((_) => _.presence_ref),
            v = h.map((_) => _.presence_ref),
            y = d.filter((_) => v.indexOf(_.presence_ref) < 0),
            w = h.filter((_) => f.indexOf(_.presence_ref) < 0);
          y.length > 0 && (l[u] = y), w.length > 0 && (a[u] = w);
        } else l[u] = d;
      }),
      this.syncDiff(i, { joins: l, leaves: a }, r, s)
    );
  }
  static syncDiff(t, n, r, s) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      s || (s = () => {}),
      this.map(i, (l, a) => {
        var u;
        const d = (u = t[l]) !== null && u !== void 0 ? u : [];
        if (((t[l] = this.cloneDeep(a)), d.length > 0)) {
          const h = t[l].map((v) => v.presence_ref),
            f = d.filter((v) => h.indexOf(v.presence_ref) < 0);
          t[l].unshift(...f);
        }
        r(l, d, a);
      }),
      this.map(o, (l, a) => {
        let u = t[l];
        if (!u) return;
        const d = a.map((h) => h.presence_ref);
        (u = u.filter((h) => d.indexOf(h.presence_ref) < 0)),
          (t[l] = u),
          s(l, u, a),
          u.length === 0 && delete t[l];
      }),
      t
    );
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const s = t[r];
        return (
          'metas' in s
            ? (n[r] = s.metas.map(
                (i) => (
                  (i.presence_ref = i.phx_ref),
                  delete i.phx_ref,
                  delete i.phx_ref_prev,
                  i
                )
              ))
            : (n[r] = s),
          n
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var D;
(function (e) {
  (e.abstime = 'abstime'),
    (e.bool = 'bool'),
    (e.date = 'date'),
    (e.daterange = 'daterange'),
    (e.float4 = 'float4'),
    (e.float8 = 'float8'),
    (e.int2 = 'int2'),
    (e.int4 = 'int4'),
    (e.int4range = 'int4range'),
    (e.int8 = 'int8'),
    (e.int8range = 'int8range'),
    (e.json = 'json'),
    (e.jsonb = 'jsonb'),
    (e.money = 'money'),
    (e.numeric = 'numeric'),
    (e.oid = 'oid'),
    (e.reltime = 'reltime'),
    (e.text = 'text'),
    (e.time = 'time'),
    (e.timestamp = 'timestamp'),
    (e.timestamptz = 'timestamptz'),
    (e.timetz = 'timetz'),
    (e.tsrange = 'tsrange'),
    (e.tstzrange = 'tstzrange');
})(D || (D = {}));
const Ru = (e, t, n = {}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce((i, o) => ((i[o] = Om(o, e, t, s)), i), {});
  },
  Om = (e, t, n, r) => {
    const s = t.find((l) => l.name === e),
      i = s == null ? void 0 : s.type,
      o = n[e];
    return i && !r.includes(i) ? Th(i, o) : Yo(o);
  },
  Th = (e, t) => {
    if (e.charAt(0) === '_') {
      const n = e.slice(1, e.length);
      return Am(t, n);
    }
    switch (e) {
      case D.bool:
        return Rm(t);
      case D.float4:
      case D.float8:
      case D.int2:
      case D.int4:
      case D.int8:
      case D.numeric:
      case D.oid:
        return Im(t);
      case D.json:
      case D.jsonb:
        return Lm(t);
      case D.timestamp:
        return $m(t);
      case D.abstime:
      case D.date:
      case D.daterange:
      case D.int4range:
      case D.int8range:
      case D.money:
      case D.reltime:
      case D.text:
      case D.time:
      case D.timestamptz:
      case D.timetz:
      case D.tsrange:
      case D.tstzrange:
        return Yo(t);
      default:
        return Yo(t);
    }
  },
  Yo = (e) => e,
  Rm = (e) => {
    switch (e) {
      case 't':
        return !0;
      case 'f':
        return !1;
      default:
        return e;
    }
  },
  Im = (e) => {
    if (typeof e == 'string') {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  Lm = (e) => {
    if (typeof e == 'string')
      try {
        return JSON.parse(e);
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e;
      }
    return e;
  },
  Am = (e, t) => {
    if (typeof e != 'string') return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === '{' && r === '}') {
      let i;
      const o = e.slice(1, n);
      try {
        i = JSON.parse('[' + o + ']');
      } catch {
        i = o ? o.split(',') : [];
      }
      return i.map((l) => Th(t, l));
    }
    return e;
  },
  $m = (e) => (typeof e == 'string' ? e.replace(' ', 'T') : e);
var Iu;
(function (e) {
  (e.ALL = '*'),
    (e.INSERT = 'INSERT'),
    (e.UPDATE = 'UPDATE'),
    (e.DELETE = 'DELETE');
})(Iu || (Iu = {}));
var Lu;
(function (e) {
  (e.BROADCAST = 'broadcast'),
    (e.PRESENCE = 'presence'),
    (e.POSTGRES_CHANGES = 'postgres_changes');
})(Lu || (Lu = {}));
var Au;
(function (e) {
  (e.SUBSCRIBED = 'SUBSCRIBED'),
    (e.TIMED_OUT = 'TIMED_OUT'),
    (e.CLOSED = 'CLOSED'),
    (e.CHANNEL_ERROR = 'CHANNEL_ERROR');
})(Au || (Au = {}));
class ia {
  constructor(t, n = { config: {} }, r) {
    (this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = xe.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, '')),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: '' } },
        n.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Ki(this, ze.join, this.params, this.timeout)),
      (this.rejoinTimer = new Ph(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive('ok', () => {
        (this.state = xe.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((s) => s.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
          (this.state = xe.closed),
          this.socket._remove(this);
      }),
      this._onError((s) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log('channel', `error ${this.topic}`, s),
          (this.state = xe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive('timeout', () => {
        this._isJoining() &&
          (this.socket.log(
            'channel',
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = xe.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(ze.reply, {}, (s, i) => {
        this._trigger(this._replyEventName(i), s);
      }),
      (this.presence = new fr(this)),
      (this.broadcastEndpointURL = this._broadcastEndpointURL());
  }
  subscribe(t, n = this.timeout) {
    var r, s;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: i, presence: o },
      } = this.params;
      this._onError((u) => t && t('CHANNEL_ERROR', u)),
        this._onClose(() => t && t('CLOSED'));
      const l = {},
        a = {
          broadcast: i,
          presence: o,
          postgres_changes:
            (s =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((u) => u.filter)) !== null && s !== void 0
              ? s
              : [],
        };
      this.socket.accessToken && (l.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: a }, l)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive('ok', ({ postgres_changes: u }) => {
            var d;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              u === void 0)
            ) {
              t && t('SUBSCRIBED');
              return;
            } else {
              const h = this.bindings.postgres_changes,
                f =
                  (d = h == null ? void 0 : h.length) !== null && d !== void 0
                    ? d
                    : 0,
                v = [];
              for (let y = 0; y < f; y++) {
                const w = h[y],
                  {
                    filter: { event: _, schema: m, table: p, filter: g },
                  } = w,
                  x = u && u[y];
                if (
                  x &&
                  x.event === _ &&
                  x.schema === m &&
                  x.table === p &&
                  x.filter === g
                )
                  v.push(Object.assign(Object.assign({}, w), { id: x.id }));
                else {
                  this.unsubscribe(),
                    t &&
                      t(
                        'CHANNEL_ERROR',
                        new Error(
                          'mismatch between server and client bindings for postgres changes'
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = v), t && t('SUBSCRIBED');
              return;
            }
          })
          .receive('error', (u) => {
            t &&
              t(
                'CHANNEL_ERROR',
                new Error(
                  JSON.stringify(Object.values(u).join(', ') || 'error')
                )
              );
          })
          .receive('timeout', () => {
            t && t('TIMED_OUT');
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: 'presence', event: 'track', payload: t },
      n.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: 'presence', event: 'untrack' }, t);
  }
  on(t, n, r) {
    return this._on(t, n, r);
  }
  async send(t, n = {}) {
    var r, s;
    if (!this._canPush() && t.type === 'broadcast') {
      const { event: i, payload: o } = t,
        l = {
          method: 'POST',
          headers: {
            apikey: (r = this.socket.apiKey) !== null && r !== void 0 ? r : '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ topic: this.subTopic, event: i, payload: o }],
          }),
        };
      try {
        return (
          await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            l,
            (s = n.timeout) !== null && s !== void 0 ? s : this.timeout
          )
        ).ok
          ? 'ok'
          : 'error';
      } catch (a) {
        return a.name === 'AbortError' ? 'timed out' : 'error';
      }
    } else
      return new Promise((i) => {
        var o, l, a;
        const u = this._push(t.type, t, n.timeout || this.timeout);
        t.type === 'broadcast' &&
          !(
            !(
              (a =
                (l =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || l === void 0
                  ? void 0
                  : l.broadcast) === null || a === void 0
            ) && a.ack
          ) &&
          i('ok'),
          u.receive('ok', () => i('ok')),
          u.receive('timeout', () => i('timed out'));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = xe.leaving;
    const n = () => {
      this.socket.log('channel', `leave ${this.topic}`),
        this._trigger(ze.close, 'leave', this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const s = new Ki(this, ze.leave, {}, t);
        s
          .receive('ok', () => {
            n(), r('ok');
          })
          .receive('timeout', () => {
            n(), r('timed out');
          })
          .receive('error', () => {
            r('error');
          }),
          s.send(),
          this._canPush() || s.trigger('ok', {});
      })
    );
  }
  _broadcastEndpointURL() {
    let t = this.socket.endPoint;
    return (
      (t = t.replace(/^ws/i, 'http')),
      (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '')),
      t.replace(/\/+$/, '') + '/api/broadcast'
    );
  }
  async _fetchWithTimeout(t, n, r) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), r),
      o = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: s.signal })
      );
    return clearTimeout(i), o;
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new Ki(this, t, n, r);
    return (
      this._canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)),
      s
    );
  }
  _onMessage(t, n, r) {
    return n;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, n, r) {
    var s, i;
    const o = t.toLocaleLowerCase(),
      { close: l, error: a, leave: u, join: d } = ze;
    if (r && [l, a, u, d].indexOf(o) >= 0 && r !== this._joinRef()) return;
    let f = this._onMessage(o, n, r);
    if (n && !f)
      throw 'channel onMessage callbacks must return the payload, modified or unmodified';
    ['insert', 'update', 'delete'].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((v) => {
            var y, w, _;
            return (
              ((y = v.filter) === null || y === void 0 ? void 0 : y.event) ===
                '*' ||
              ((_ =
                (w = v.filter) === null || w === void 0 ? void 0 : w.event) ===
                null || _ === void 0
                ? void 0
                : _.toLocaleLowerCase()) === o
            );
          })
          .map((v) => v.callback(f, r))
      : (i = this.bindings[o]) === null ||
        i === void 0 ||
        i
          .filter((v) => {
            var y, w, _, m, p, g;
            if (['broadcast', 'presence', 'postgres_changes'].includes(o))
              if ('id' in v) {
                const x = v.id,
                  j =
                    (y = v.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  x &&
                  ((w = n.ids) === null || w === void 0
                    ? void 0
                    : w.includes(x)) &&
                  (j === '*' ||
                    (j == null ? void 0 : j.toLocaleLowerCase()) ===
                      ((_ = n.data) === null || _ === void 0
                        ? void 0
                        : _.type.toLocaleLowerCase()))
                );
              } else {
                const x =
                  (p =
                    (m = v == null ? void 0 : v.filter) === null || m === void 0
                      ? void 0
                      : m.event) === null || p === void 0
                    ? void 0
                    : p.toLocaleLowerCase();
                return (
                  x === '*' ||
                  x ===
                    ((g = n == null ? void 0 : n.event) === null || g === void 0
                      ? void 0
                      : g.toLocaleLowerCase())
                );
              }
            else return v.type.toLocaleLowerCase() === o;
          })
          .map((v) => {
            if (typeof f == 'object' && 'ids' in f) {
              const y = f.data,
                {
                  schema: w,
                  table: _,
                  commit_timestamp: m,
                  type: p,
                  errors: g,
                } = y;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: w,
                    table: _,
                    commit_timestamp: m,
                    eventType: p,
                    new: {},
                    old: {},
                    errors: g,
                  }
                ),
                this._getPayloadRecords(y)
              );
            }
            v.callback(f, r);
          });
  }
  _isClosed() {
    return this.state === xe.closed;
  }
  _isJoined() {
    return this.state === xe.joined;
  }
  _isJoining() {
    return this.state === xe.joining;
  }
  _isLeaving() {
    return this.state === xe.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, n, r) {
    const s = t.toLocaleLowerCase(),
      i = { type: s, filter: n, callback: r };
    return (
      this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
      this
    );
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((s) => {
        var i;
        return !(
          ((i = s.type) === null || i === void 0
            ? void 0
            : i.toLocaleLowerCase()) === r && ia.isEqual(s.filter, n)
        );
      })),
      this
    );
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1;
    for (const r in t) if (t[r] !== n[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(ze.close, {}, t);
  }
  _onError(t) {
    this._on(ze.error, {}, (n) => t(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = xe.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === 'INSERT' || t.type === 'UPDATE') &&
        (n.new = Ru(t.columns, t.record)),
      (t.type === 'UPDATE' || t.type === 'DELETE') &&
        (n.old = Ru(t.columns, t.old_record)),
      n
    );
  }
}
const Um = () => {},
  Dm = typeof WebSocket < 'u';
class zm {
  constructor(t, n) {
    var r;
    (this.accessToken = null),
      (this.apiKey = null),
      (this.channels = []),
      (this.endPoint = ''),
      (this.headers = Nm),
      (this.params = {}),
      (this.timeout = Nh),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = Um),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new bm()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this._resolveFetch = (i) => {
        let o;
        return (
          i
            ? (o = i)
            : typeof fetch > 'u'
            ? (o = (...l) =>
                In(() => Promise.resolve().then(() => Fr), void 0).then(
                  ({ default: a }) => a(...l)
                ))
            : (o = fetch),
          (...l) => o(...l)
        );
      }),
      (this.endPoint = `${t}/${Qo.websocket}`),
      n != null && n.transport
        ? (this.transport = n.transport)
        : (this.transport = null),
      n != null && n.params && (this.params = n.params),
      n != null &&
        n.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          n.headers
        )),
      n != null && n.timeout && (this.timeout = n.timeout),
      n != null && n.logger && (this.logger = n.logger),
      n != null &&
        n.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
    const s =
      (r = n == null ? void 0 : n.params) === null || r === void 0
        ? void 0
        : r.apikey;
    s && ((this.accessToken = s), (this.apiKey = s)),
      (this.reconnectAfterMs =
        n != null && n.reconnectAfterMs
          ? n.reconnectAfterMs
          : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
      (this.encode =
        n != null && n.encode ? n.encode : (i, o) => o(JSON.stringify(i))),
      (this.decode =
        n != null && n.decode
          ? n.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new Ph(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
  }
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers,
        });
        return;
      }
      if (Dm) {
        (this.conn = new WebSocket(this._endPointURL())),
          this.setupConnection();
        return;
      }
      (this.conn = new Mm(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        },
      })),
        In(() => import('./browser-BTf23Mkn.js').then((t) => t.b), []).then(
          ({ default: t }) => {
            (this.conn = new t(this._endPointURL(), void 0, {
              headers: this.headers,
            })),
              this.setupConnection();
          }
        );
    }
  }
  disconnect(t, n) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      t ? this.conn.close(t, n ?? '') : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), n;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return this.disconnect(), t;
  }
  log(t, n, r) {
    this.logger(t, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case jn.connecting:
        return zt.Connecting;
      case jn.open:
        return zt.Open;
      case jn.closing:
        return zt.Closing;
      default:
        return zt.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === zt.Open;
  }
  channel(t, n = { config: {} }) {
    const r = new ia(`realtime:${t}`, n, this);
    return this.channels.push(r), r;
  }
  push(t) {
    const { topic: n, event: r, payload: s, ref: i } = t,
      o = () => {
        this.encode(t, (l) => {
          var a;
          (a = this.conn) === null || a === void 0 || a.send(l);
        });
      };
    this.log('push', `${n} ${r} (${i})`, s),
      this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  setAuth(t) {
    (this.accessToken = t),
      this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }),
          n.joinedOnce &&
            n._isJoined() &&
            n._push(ze.access_token, { access_token: t });
      });
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find(
      (r) => r.topic === t && (r._isJoined() || r._isJoining())
    );
    n &&
      (this.log('transport', `leaving duplicate topic "${t}"`),
      n.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef());
  }
  setupConnection() {
    this.conn &&
      ((this.conn.binaryType = 'arraybuffer'),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)));
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: Pm })
    );
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      let { topic: r, event: s, payload: i, ref: o } = n;
      ((o && o === this.pendingHeartbeatRef) ||
        s === (i == null ? void 0 : i.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          'receive',
          `${i.status || ''} ${r} ${s} ${(o && '(' + o + ')') || ''}`,
          i
        ),
        this.channels
          .filter((l) => l._isMember(r))
          .forEach((l) => l._trigger(s, i, o)),
        this.stateChangeCallbacks.message.forEach((l) => l(n));
    });
  }
  _onConnOpen() {
    this.log('transport', `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((t) => t());
  }
  _onConnClose(t) {
    this.log('transport', 'close', t),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((n) => n(t));
  }
  _onConnError(t) {
    this.log('transport', t.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((n) => n(t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(ze.error));
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t;
    const r = t.match(/\?/) ? '&' : '?',
      s = new URLSearchParams(n);
    return `${t}${r}${s}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var t;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            'transport',
            'heartbeat timeout. Attempting to re-establish connection'
          ),
          (t = this.conn) === null ||
            t === void 0 ||
            t.close(Tm, 'hearbeat timeout');
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: 'phoenix',
          event: 'heartbeat',
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class Mm {
  constructor(t, n, r) {
    (this.binaryType = 'arraybuffer'),
      (this.onclose = () => {}),
      (this.onerror = () => {}),
      (this.onmessage = () => {}),
      (this.onopen = () => {}),
      (this.readyState = jn.connecting),
      (this.send = () => {}),
      (this.url = null),
      (this.url = t),
      (this.close = r.close);
  }
}
class oa extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = 'StorageError');
  }
}
function ae(e) {
  return typeof e == 'object' && e !== null && '__isStorageError' in e;
}
class Fm extends oa {
  constructor(t, n) {
    super(t), (this.name = 'StorageApiError'), (this.status = n);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class $u extends oa {
  constructor(t, n) {
    super(t), (this.name = 'StorageUnknownError'), (this.originalError = n);
  }
}
var Bm = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const bh = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
        ? (t = (...n) =>
            In(() => Promise.resolve().then(() => Fr), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  Vm = () =>
    Bm(void 0, void 0, void 0, function* () {
      return typeof Response > 'u'
        ? (yield In(() => Promise.resolve().then(() => Fr), void 0)).Response
        : Response;
    });
var Mn = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Ji = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  Wm = (e, t) =>
    Mn(void 0, void 0, void 0, function* () {
      const n = yield Vm();
      e instanceof n
        ? e
            .json()
            .then((r) => {
              t(new Fm(Ji(r), e.status || 500));
            })
            .catch((r) => {
              t(new $u(Ji(r), r));
            })
        : t(new $u(Ji(e), e));
    }),
  Hm = (e, t, n, r) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === 'GET'
      ? s
      : ((s.headers = Object.assign(
          { 'Content-Type': 'application/json' },
          t == null ? void 0 : t.headers
        )),
        (s.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, s), n));
  };
function pi(e, t, n, r, s, i) {
  return Mn(this, void 0, void 0, function* () {
    return new Promise((o, l) => {
      e(n, Hm(t, r, s, i))
        .then((a) => {
          if (!a.ok) throw a;
          return r != null && r.noResolveJson ? a : a.json();
        })
        .then((a) => o(a))
        .catch((a) => Wm(a, l));
    });
  });
}
function Xo(e, t, n, r) {
  return Mn(this, void 0, void 0, function* () {
    return pi(e, 'GET', t, n, r);
  });
}
function dt(e, t, n, r, s) {
  return Mn(this, void 0, void 0, function* () {
    return pi(e, 'POST', t, r, s, n);
  });
}
function qm(e, t, n, r, s) {
  return Mn(this, void 0, void 0, function* () {
    return pi(e, 'PUT', t, r, s, n);
  });
}
function Oh(e, t, n, r, s) {
  return Mn(this, void 0, void 0, function* () {
    return pi(e, 'DELETE', t, r, s, n);
  });
}
var Ne = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Km = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
  Uu = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: !1,
  };
class Jm {
  constructor(t, n = {}, r, s) {
    (this.url = t),
      (this.headers = n),
      (this.bucketId = r),
      (this.fetch = bh(s));
  }
  uploadOrUpdate(t, n, r, s) {
    return Ne(this, void 0, void 0, function* () {
      try {
        let i;
        const o = Object.assign(Object.assign({}, Uu), s),
          l = Object.assign(
            Object.assign({}, this.headers),
            t === 'POST' && { 'x-upsert': String(o.upsert) }
          );
        typeof Blob < 'u' && r instanceof Blob
          ? ((i = new FormData()),
            i.append('cacheControl', o.cacheControl),
            i.append('', r))
          : typeof FormData < 'u' && r instanceof FormData
          ? ((i = r), i.append('cacheControl', o.cacheControl))
          : ((i = r),
            (l['cache-control'] = `max-age=${o.cacheControl}`),
            (l['content-type'] = o.contentType));
        const a = this._removeEmptyFolders(n),
          u = this._getFinalPath(a),
          d = yield this.fetch(
            `${this.url}/object/${u}`,
            Object.assign(
              { method: t, body: i, headers: l },
              o != null && o.duplex ? { duplex: o.duplex } : {}
            )
          ),
          h = yield d.json();
        return d.ok
          ? { data: { path: a, id: h.Id, fullPath: h.Key }, error: null }
          : { data: null, error: h };
      } catch (i) {
        if (ae(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  upload(t, n, r) {
    return Ne(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('POST', t, n, r);
    });
  }
  uploadToSignedUrl(t, n, r, s) {
    return Ne(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(t),
        o = this._getFinalPath(i),
        l = new URL(this.url + `/object/upload/sign/${o}`);
      l.searchParams.set('token', n);
      try {
        let a;
        const u = Object.assign({ upsert: Uu.upsert }, s),
          d = Object.assign(Object.assign({}, this.headers), {
            'x-upsert': String(u.upsert),
          });
        typeof Blob < 'u' && r instanceof Blob
          ? ((a = new FormData()),
            a.append('cacheControl', u.cacheControl),
            a.append('', r))
          : typeof FormData < 'u' && r instanceof FormData
          ? ((a = r), a.append('cacheControl', u.cacheControl))
          : ((a = r),
            (d['cache-control'] = `max-age=${u.cacheControl}`),
            (d['content-type'] = u.contentType));
        const h = yield this.fetch(l.toString(), {
            method: 'PUT',
            body: a,
            headers: d,
          }),
          f = yield h.json();
        return h.ok
          ? { data: { path: i, fullPath: f.Key }, error: null }
          : { data: null, error: f };
      } catch (a) {
        if (ae(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  createSignedUploadUrl(t) {
    return Ne(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(t);
        const r = yield dt(
            this.fetch,
            `${this.url}/object/upload/sign/${n}`,
            {},
            { headers: this.headers }
          ),
          s = new URL(this.url + r.url),
          i = s.searchParams.get('token');
        if (!i) throw new oa('No token returned by API');
        return {
          data: { signedUrl: s.toString(), path: t, token: i },
          error: null,
        };
      } catch (n) {
        if (ae(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  update(t, n, r) {
    return Ne(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('PUT', t, n, r);
    });
  }
  move(t, n) {
    return Ne(this, void 0, void 0, function* () {
      try {
        return {
          data: yield dt(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ae(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  copy(t, n) {
    return Ne(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield dt(
              this.fetch,
              `${this.url}/object/copy`,
              { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (r) {
        if (ae(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createSignedUrl(t, n, r) {
    return Ne(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(t),
          i = yield dt(
            this.fetch,
            `${this.url}/object/sign/${s}`,
            Object.assign(
              { expiresIn: n },
              r != null && r.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const o =
          r != null && r.download
            ? `&download=${r.download === !0 ? '' : r.download}`
            : '';
        return (
          (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }),
          { data: i, error: null }
        );
      } catch (s) {
        if (ae(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  createSignedUrls(t, n, r) {
    return Ne(this, void 0, void 0, function* () {
      try {
        const s = yield dt(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: n, paths: t },
            { headers: this.headers }
          ),
          i =
            r != null && r.download
              ? `&download=${r.download === !0 ? '' : r.download}`
              : '';
        return {
          data: s.map((o) =>
            Object.assign(Object.assign({}, o), {
              signedUrl: o.signedURL
                ? encodeURI(`${this.url}${o.signedURL}${i}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (s) {
        if (ae(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  download(t, n) {
    return Ne(this, void 0, void 0, function* () {
      const s =
          typeof (n == null ? void 0 : n.transform) < 'u'
            ? 'render/image/authenticated'
            : 'object',
        i = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {}
        ),
        o = i ? `?${i}` : '';
      try {
        const l = this._getFinalPath(t);
        return {
          data: yield (yield Xo(this.fetch, `${this.url}/${s}/${l}${o}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (l) {
        if (ae(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  getPublicUrl(t, n) {
    const r = this._getFinalPath(t),
      s = [],
      i =
        n != null && n.download
          ? `download=${n.download === !0 ? '' : n.download}`
          : '';
    i !== '' && s.push(i);
    const l =
        typeof (n == null ? void 0 : n.transform) < 'u'
          ? 'render/image'
          : 'object',
      a = this.transformOptsToQueryString(
        (n == null ? void 0 : n.transform) || {}
      );
    a !== '' && s.push(a);
    let u = s.join('&');
    return (
      u !== '' && (u = `?${u}`),
      { data: { publicUrl: encodeURI(`${this.url}/${l}/public/${r}${u}`) } }
    );
  }
  remove(t) {
    return Ne(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Oh(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ae(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  list(t, n, r) {
    return Ne(this, void 0, void 0, function* () {
      try {
        const s = Object.assign(Object.assign(Object.assign({}, Km), n), {
          prefix: t || '',
        });
        return {
          data: yield dt(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            s,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (s) {
        if (ae(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
  }
  transformOptsToQueryString(t) {
    const n = [];
    return (
      t.width && n.push(`width=${t.width}`),
      t.height && n.push(`height=${t.height}`),
      t.resize && n.push(`resize=${t.resize}`),
      t.format && n.push(`format=${t.format}`),
      t.quality && n.push(`quality=${t.quality}`),
      n.join('&')
    );
  }
}
const Gm = '2.5.5',
  Zm = { 'X-Client-Info': `storage-js/${Gm}` };
var en = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class Qm {
  constructor(t, n = {}, r) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, Zm), n)),
      (this.fetch = bh(r));
  }
  listBuckets() {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Xo(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (ae(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getBucket(t) {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Xo(this.fetch, `${this.url}/bucket/${t}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (n) {
        if (ae(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  createBucket(t, n = { public: !1 }) {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield dt(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ae(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(t, n) {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield qm(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (ae(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(t) {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield dt(
            this.fetch,
            `${this.url}/bucket/${t}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ae(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  deleteBucket(t) {
    return en(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Oh(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (ae(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
}
class Ym extends Qm {
  constructor(t, n = {}, r) {
    super(t, n, r);
  }
  from(t) {
    return new Jm(this.url, this.headers, t, this.fetch);
  }
}
const Xm = '2.41.1';
let rr = '';
typeof Deno < 'u'
  ? (rr = 'deno')
  : typeof document < 'u'
  ? (rr = 'web')
  : typeof navigator < 'u' && navigator.product === 'ReactNative'
  ? (rr = 'react-native')
  : (rr = 'node');
const e2 = { 'X-Client-Info': `supabase-js-${rr}/${Xm}` },
  t2 = { headers: e2 },
  n2 = { schema: 'public' },
  r2 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: 'implicit',
  },
  s2 = {};
var i2 = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const o2 = (e) => {
    let t;
    return (
      e ? (t = e) : typeof fetch > 'u' ? (t = ra) : (t = fetch),
      (...n) => t(...n)
    );
  },
  l2 = () => (typeof Headers > 'u' ? Ch : Headers),
  a2 = (e, t, n) => {
    const r = o2(n),
      s = l2();
    return (i, o) =>
      i2(void 0, void 0, void 0, function* () {
        var l;
        const a = (l = yield t()) !== null && l !== void 0 ? l : e;
        let u = new s(o == null ? void 0 : o.headers);
        return (
          u.has('apikey') || u.set('apikey', e),
          u.has('Authorization') || u.set('Authorization', `Bearer ${a}`),
          r(i, Object.assign(Object.assign({}, o), { headers: u }))
        );
      });
  };
function u2(e) {
  return e.replace(/\/$/, '');
}
function c2(e, t) {
  const { db: n, auth: r, realtime: s, global: i } = e,
    { db: o, auth: l, realtime: a, global: u } = t;
  return {
    db: Object.assign(Object.assign({}, o), n),
    auth: Object.assign(Object.assign({}, l), r),
    realtime: Object.assign(Object.assign({}, a), s),
    global: Object.assign(Object.assign({}, u), i),
  };
}
const Rh = '2.63.0',
  d2 = 'http://localhost:9999',
  h2 = 'supabase.auth.token',
  f2 = { 'X-Client-Info': `gotrue-js/${Rh}` },
  Du = 10,
  el = 'X-Supabase-Api-Version',
  Ih = {
    '2024-01-01': {
      timestamp: Date.parse('2024-01-01T00:00:00.0Z'),
      name: '2024-01-01',
    },
  };
function p2(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function m2() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0;
    return (e == 'x' ? t : (t & 3) | 8).toString(16);
  });
}
const $e = () => typeof document < 'u',
  At = { tested: !1, writable: !1 },
  pr = () => {
    if (!$e()) return !1;
    try {
      if (typeof globalThis.localStorage != 'object') return !1;
    } catch {
      return !1;
    }
    if (At.tested) return At.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (At.tested = !0),
        (At.writable = !0);
    } catch {
      (At.tested = !0), (At.writable = !1);
    }
    return At.writable;
  };
function Gi(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === '#')
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
        t[i] = s;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, s) => {
      t[s] = r;
    }),
    t
  );
}
const Lh = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
        ? (t = (...n) =>
            In(() => Promise.resolve().then(() => Fr), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  g2 = (e) =>
    typeof e == 'object' &&
    e !== null &&
    'status' in e &&
    'ok' in e &&
    'json' in e &&
    typeof e.json == 'function',
  Ah = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  ls = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  Zi = async (e, t) => {
    await e.removeItem(t);
  };
function v2(e) {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let n = '',
    r,
    s,
    i,
    o,
    l,
    a,
    u,
    d = 0;
  for (e = e.replace('-', '+').replace('_', '/'); d < e.length; )
    (o = t.indexOf(e.charAt(d++))),
      (l = t.indexOf(e.charAt(d++))),
      (a = t.indexOf(e.charAt(d++))),
      (u = t.indexOf(e.charAt(d++))),
      (r = (o << 2) | (l >> 4)),
      (s = ((l & 15) << 4) | (a >> 2)),
      (i = ((a & 3) << 6) | u),
      (n = n + String.fromCharCode(r)),
      a != 64 && s != 0 && (n = n + String.fromCharCode(s)),
      u != 64 && i != 0 && (n = n + String.fromCharCode(i));
  return n;
}
class mi {
  constructor() {
    this.promise = new mi.promiseConstructor((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
mi.promiseConstructor = Promise;
function zu(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    n = e.split('.');
  if (n.length !== 3) throw new Error('JWT is not valid: not a JWT structure');
  if (!t.test(n[1]))
    throw new Error('JWT is not valid: payload is not in base64url format');
  const r = n[1];
  return JSON.parse(v2(r));
}
async function y2(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function w2(e, t) {
  return new Promise((r, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await e(i);
          if (!t(i, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!t(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function x2(e) {
  return ('0' + e.toString(16)).substr(-2);
}
function _2() {
  const t = new Uint32Array(56);
  if (typeof crypto > 'u') {
    const n =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
      r = n.length;
    let s = '';
    for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return crypto.getRandomValues(t), Array.from(t, x2).join('');
}
async function k2(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest('SHA-256', n),
    s = new Uint8Array(r);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join('');
}
function S2(e) {
  return btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function j2(e) {
  if (
    !(
      typeof crypto < 'u' &&
      typeof crypto.subtle < 'u' &&
      typeof TextEncoder < 'u'
    )
  )
    return (
      console.warn(
        'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
      ),
      e
    );
  const n = await k2(e);
  return S2(n);
}
async function tn(e, t, n = !1) {
  const r = _2();
  let s = r;
  n && (s += '/PASSWORD_RECOVERY'), await Ah(e, `${t}-code-verifier`, s);
  const i = await j2(r);
  return [i, r === i ? 'plain' : 's256'];
}
const E2 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function C2(e) {
  const t = e.headers.get(el);
  if (!t || !t.match(E2)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class la extends Error {
  constructor(t, n, r) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = 'AuthError'),
      (this.status = n),
      (this.code = r);
  }
}
function R(e) {
  return typeof e == 'object' && e !== null && '__isAuthError' in e;
}
class N2 extends la {
  constructor(t, n, r) {
    super(t, n, r),
      (this.name = 'AuthApiError'),
      (this.status = n),
      (this.code = r);
  }
}
function P2(e) {
  return R(e) && e.name === 'AuthApiError';
}
class $h extends la {
  constructor(t, n) {
    super(t), (this.name = 'AuthUnknownError'), (this.originalError = n);
  }
}
class Yt extends la {
  constructor(t, n, r, s) {
    super(t, r, s), (this.name = n), (this.status = r);
  }
}
class nn extends Yt {
  constructor() {
    super('Auth session missing!', 'AuthSessionMissingError', 400, void 0);
  }
}
class Qi extends Yt {
  constructor() {
    super(
      'Auth session or user missing',
      'AuthInvalidTokenResponseError',
      500,
      void 0
    );
  }
}
class as extends Yt {
  constructor(t) {
    super(t, 'AuthInvalidCredentialsError', 400, void 0);
  }
}
class us extends Yt {
  constructor(t, n = null) {
    super(t, 'AuthImplicitGrantRedirectError', 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Mu extends Yt {
  constructor(t, n = null) {
    super(t, 'AuthPKCEGrantCodeExchangeError', 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class tl extends Yt {
  constructor(t, n) {
    super(t, 'AuthRetryableFetchError', n, void 0);
  }
}
function Yi(e) {
  return R(e) && e.name === 'AuthRetryableFetchError';
}
class Fu extends Yt {
  constructor(t, n, r) {
    super(t, 'AuthWeakPasswordError', n, 'weak_password'), (this.reasons = r);
  }
}
var T2 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
};
const Dt = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  b2 = [502, 503, 504];
async function Bu(e) {
  var t;
  if (!g2(e)) throw new tl(Dt(e), 0);
  if (b2.includes(e.status)) throw new tl(Dt(e), e.status);
  let n;
  try {
    n = await e.json();
  } catch (i) {
    throw new $h(Dt(i), i);
  }
  let r;
  const s = C2(e);
  if (
    (s &&
    s.getTime() >= Ih['2024-01-01'].timestamp &&
    typeof n == 'object' &&
    n &&
    typeof n.code == 'string'
      ? (r = n.code)
      : typeof n == 'object' &&
        n &&
        typeof n.error_code == 'string' &&
        (r = n.error_code),
    r)
  ) {
    if (r === 'weak_password')
      throw new Fu(
        Dt(n),
        e.status,
        ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          []
      );
  } else if (
    typeof n == 'object' &&
    n &&
    typeof n.weak_password == 'object' &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((i, o) => i && typeof o == 'string', !0)
  )
    throw new Fu(Dt(n), e.status, n.weak_password.reasons);
  throw new N2(Dt(n), e.status || 500, r);
}
const O2 = (e, t, n, r) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === 'GET'
    ? s
    : ((s.headers = Object.assign(
        { 'Content-Type': 'application/json;charset=UTF-8' },
        t == null ? void 0 : t.headers
      )),
      (s.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, s), n));
};
async function A(e, t, n, r) {
  var s;
  const i = Object.assign({}, r == null ? void 0 : r.headers);
  i[el] || (i[el] = Ih['2024-01-01'].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const o =
    (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const l = Object.keys(o).length
      ? '?' + new URLSearchParams(o).toString()
      : '',
    a = await R2(
      e,
      t,
      n + l,
      { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(a)
    : { data: Object.assign({}, a), error: null };
}
async function R2(e, t, n, r, s, i) {
  const o = O2(t, r, s, i);
  let l;
  try {
    l = await e(n, Object.assign(Object.assign({}, o), { cache: 'no-store' }));
  } catch (a) {
    throw (console.error(a), new tl(Dt(a), 0));
  }
  if ((l.ok || (await Bu(l)), r != null && r.noResolveJson)) return l;
  try {
    return await l.json();
  } catch (a) {
    await Bu(a);
  }
}
function at(e) {
  var t;
  let n = null;
  $2(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = p2(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function Vu(e) {
  const t = at(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == 'object' &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == 'string' &&
      e.weak_password.reasons.reduce((n, r) => n && typeof r == 'string', !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function pt(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function I2(e) {
  return { data: e, error: null };
}
function L2(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    } = e,
    o = T2(e, [
      'action_link',
      'email_otp',
      'hashed_token',
      'redirect_to',
      'verification_type',
    ]),
    l = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: s,
      verification_type: i,
    },
    a = Object.assign({}, o);
  return { data: { properties: l, user: a }, error: null };
}
function A2(e) {
  return e;
}
function $2(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
var U2 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
};
class D2 {
  constructor({ url: t = '', headers: n = {}, fetch: r }) {
    (this.url = t),
      (this.headers = n),
      (this.fetch = Lh(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(t, n = 'global') {
    try {
      return (
        await A(this.fetch, 'POST', `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (R(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await A(this.fetch, 'POST', `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: pt,
      });
    } catch (r) {
      if (R(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = U2(t, ['options']),
        s = Object.assign(Object.assign({}, r), n);
      return (
        'newEmail' in r &&
          ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
        await A(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: L2,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (R(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await A(this.fetch, 'POST', `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: pt,
      });
    } catch (n) {
      if (R(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, s, i, o, l, a;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        d = await A(this.fetch, 'GET', `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : '',
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : '',
          },
          xform: A2,
        });
      if (d.error) throw d.error;
      const h = await d.json(),
        f =
          (o = d.headers.get('x-total-count')) !== null && o !== void 0 ? o : 0,
        v =
          (a =
            (l = d.headers.get('link')) === null || l === void 0
              ? void 0
              : l.split(',')) !== null && a !== void 0
            ? a
            : [];
      return (
        v.length > 0 &&
          (v.forEach((y) => {
            const w = parseInt(y.split(';')[0].split('=')[1].substring(0, 1)),
              _ = JSON.parse(y.split(';')[1].split('=')[1]);
            u[`${_}Page`] = w;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, h), u), error: null }
      );
    } catch (u) {
      if (R(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    try {
      return await A(this.fetch, 'GET', `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: pt,
      });
    } catch (n) {
      if (R(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    try {
      return await A(this.fetch, 'PUT', `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: pt,
      });
    } catch (r) {
      if (R(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    try {
      return await A(this.fetch, 'DELETE', `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: pt,
      });
    } catch (r) {
      if (R(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    try {
      const { data: n, error: r } = await A(
        this.fetch,
        'GET',
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        }
      );
      return { data: n, error: r };
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    try {
      return {
        data: await A(
          this.fetch,
          'DELETE',
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
}
const z2 = {
  getItem: (e) => (pr() ? globalThis.localStorage.getItem(e) : null),
  setItem: (e, t) => {
    pr() && globalThis.localStorage.setItem(e, t);
  },
  removeItem: (e) => {
    pr() && globalThis.localStorage.removeItem(e);
  },
};
function Wu(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
function M2() {
  if (typeof globalThis != 'object')
    try {
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < 'u' && (self.globalThis = self);
    }
}
const rn = {
  debug: !!(
    globalThis &&
    pr() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem('supabase.gotrue-js.locks.debug') === 'true'
  ),
};
class Uh extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
class F2 extends Uh {}
async function B2(e, t, n) {
  rn.debug &&
    console.log('@supabase/gotrue-js: navigatorLock: acquire lock', e, t);
  const r = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        r.abort(),
          rn.debug &&
            console.log(
              '@supabase/gotrue-js: navigatorLock acquire timed out',
              e
            );
      }, t),
    await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: 'exclusive', ifAvailable: !0 }
        : { mode: 'exclusive', signal: r.signal },
      async (s) => {
        if (s) {
          rn.debug &&
            console.log(
              '@supabase/gotrue-js: navigatorLock: acquired',
              e,
              s.name
            );
          try {
            return await n();
          } finally {
            rn.debug &&
              console.log(
                '@supabase/gotrue-js: navigatorLock: released',
                e,
                s.name
              );
          }
        } else {
          if (t === 0)
            throw (
              (rn.debug &&
                console.log(
                  '@supabase/gotrue-js: navigatorLock: not immediately available',
                  e
                ),
              new F2(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
              ))
            );
          if (rn.debug)
            try {
              const i = await globalThis.navigator.locks.query();
              console.log(
                '@supabase/gotrue-js: Navigator LockManager state',
                JSON.stringify(i, null, '  ')
              );
            } catch (i) {
              console.warn(
                '@supabase/gotrue-js: Error when querying Navigator LockManager state',
                i
              );
            }
          return (
            console.warn(
              '@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
            ),
            await n()
          );
        }
      }
    )
  );
}
M2();
const V2 = {
    url: d2,
    storageKey: h2,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: f2,
    flowType: 'implicit',
    debug: !1,
  },
  Qn = 30 * 1e3,
  Hu = 3;
async function qu(e, t, n) {
  return await n();
}
class Lr {
  constructor(t) {
    var n, r;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.insecureGetSessionWarningShown = !1),
      (this.instanceID = Lr.nextInstanceID),
      (Lr.nextInstanceID += 1),
      this.instanceID > 0 &&
        $e() &&
        console.warn(
          'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
        );
    const s = Object.assign(Object.assign({}, V2), t);
    if (
      ((this.logDebugMessages = !!s.debug),
      typeof s.debug == 'function' && (this.logger = s.debug),
      (this.persistSession = s.persistSession),
      (this.storageKey = s.storageKey),
      (this.autoRefreshToken = s.autoRefreshToken),
      (this.admin = new D2({ url: s.url, headers: s.headers, fetch: s.fetch })),
      (this.url = s.url),
      (this.headers = s.headers),
      (this.fetch = Lh(s.fetch)),
      (this.lock = s.lock || qu),
      (this.detectSessionInUrl = s.detectSessionInUrl),
      (this.flowType = s.flowType),
      s.lock
        ? (this.lock = s.lock)
        : $e() &&
          !(
            (n = globalThis == null ? void 0 : globalThis.navigator) === null ||
            n === void 0
          ) &&
          n.locks
        ? (this.lock = B2)
        : (this.lock = qu),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? s.storage
          ? (this.storage = s.storage)
          : pr()
          ? (this.storage = z2)
          : ((this.memoryStorage = {}), (this.storage = Wu(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = Wu(this.memoryStorage))),
      $e() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (i) {
        console.error(
          'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
          i
        );
      }
      (r = this.broadcastChannel) === null ||
        r === void 0 ||
        r.addEventListener('message', async (i) => {
          this._debug(
            'received broadcast notification from other tab or client',
            i
          ),
            await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...t) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${Rh}) ${new Date().toISOString()}`,
          ...t
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    try {
      const t = $e() ? await this._isPKCEFlow() : !1;
      if (
        (this._debug('#_initialize()', 'begin', 'is PKCE flow', t),
        t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
      ) {
        const { data: n, error: r } = await this._getSessionFromURL(t);
        if (r)
          return (
            this._debug(
              '#_initialize()',
              'error detecting session from URL',
              r
            ),
            (r == null ? void 0 : r.message) === 'Identity is already linked' ||
            (r == null ? void 0 : r.message) ===
              'Identity is already linked to another user'
              ? { error: r }
              : (await this._removeSession(), { error: r })
          );
        const { session: s, redirectType: i } = n;
        return (
          this._debug(
            '#_initialize()',
            'detected session in URL',
            s,
            'redirect type',
            i
          ),
          await this._saveSession(s),
          setTimeout(async () => {
            i === 'recovery'
              ? await this._notifyAllSubscribers('PASSWORD_RECOVERY', s)
              : await this._notifyAllSubscribers('SIGNED_IN', s);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return R(t)
        ? { error: t }
        : { error: new $h('Unexpected error during initialization', t) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug('#_initialize()', 'end');
    }
  }
  async signInAnonymously(t) {
    var n, r, s;
    try {
      await this._removeSession();
      const i = await A(this.fetch, 'POST', `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = t == null ? void 0 : t.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: at,
        }),
        { data: o, error: l } = i;
      if (l || !o) return { data: { user: null, session: null }, error: l };
      const a = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers('SIGNED_IN', a)),
        { data: { user: u, session: a }, error: null }
      );
    } catch (i) {
      if (R(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signUp(t) {
    var n, r, s;
    try {
      await this._removeSession();
      let i;
      if ('email' in t) {
        const { email: d, password: h, options: f } = t;
        let v = null,
          y = null;
        this.flowType === 'pkce' &&
          ([v, y] = await tn(this.storage, this.storageKey)),
          (i = await A(this.fetch, 'POST', `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: d,
              password: h,
              data:
                (n = f == null ? void 0 : f.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: v,
              code_challenge_method: y,
            },
            xform: at,
          }));
      } else if ('phone' in t) {
        const { phone: d, password: h, options: f } = t;
        i = await A(this.fetch, 'POST', `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: d,
            password: h,
            data:
              (r = f == null ? void 0 : f.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : 'sms',
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: at,
        });
      } else
        throw new as(
          'You must provide either an email or phone number and a password'
        );
      const { data: o, error: l } = i;
      if (l || !o) return { data: { user: null, session: null }, error: l };
      const a = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers('SIGNED_IN', a)),
        { data: { user: u, session: a }, error: null }
      );
    } catch (i) {
      if (R(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signInWithPassword(t) {
    try {
      await this._removeSession();
      let n;
      if ('email' in t) {
        const { email: i, password: o, options: l } = t;
        n = await A(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: Vu,
          }
        );
      } else if ('phone' in t) {
        const { phone: i, password: o, options: l } = t;
        n = await A(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: Vu,
          }
        );
      } else
        throw new as(
          'You must provide either an email or phone number and a password'
        );
      const { data: r, error: s } = n;
      return s
        ? { data: { user: null, session: null }, error: s }
        : !r || !r.session || !r.user
        ? { data: { user: null, session: null }, error: new Qi() }
        : (r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers('SIGNED_IN', r.session)),
          {
            data: Object.assign(
              { user: r.user, session: r.session },
              r.weak_password ? { weakPassword: r.weak_password } : null
            ),
            error: s,
          });
    } catch (n) {
      if (R(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, s, i;
    return (
      await this._removeSession(),
      await this._handleProviderSignIn(t.provider, {
        redirectTo:
          (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
        skipBrowserRedirect:
          (i = t.options) === null || i === void 0
            ? void 0
            : i.skipBrowserRedirect,
      })
    );
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    );
  }
  async _exchangeCodeForSession(t) {
    const n = await ls(this.storage, `${this.storageKey}-code-verifier`),
      [r, s] = (n ?? '').split('/'),
      { data: i, error: o } = await A(
        this.fetch,
        'POST',
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: r },
          xform: at,
        }
      );
    return (
      await Zi(this.storage, `${this.storageKey}-code-verifier`),
      o
        ? { data: { user: null, session: null, redirectType: null }, error: o }
        : !i || !i.session || !i.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new Qi(),
          }
        : (i.session &&
            (await this._saveSession(i.session),
            await this._notifyAllSubscribers('SIGNED_IN', i.session)),
          {
            data: Object.assign(Object.assign({}, i), {
              redirectType: s ?? null,
            }),
            error: o,
          })
    );
  }
  async signInWithIdToken(t) {
    await this._removeSession();
    try {
      const {
          options: n,
          provider: r,
          token: s,
          access_token: i,
          nonce: o,
        } = t,
        l = await A(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: s,
              access_token: i,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: at,
          }
        ),
        { data: a, error: u } = l;
      return u
        ? { data: { user: null, session: null }, error: u }
        : !a || !a.session || !a.user
        ? { data: { user: null, session: null }, error: new Qi() }
        : (a.session &&
            (await this._saveSession(a.session),
            await this._notifyAllSubscribers('SIGNED_IN', a.session)),
          { data: a, error: u });
    } catch (n) {
      if (R(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, s, i, o;
    try {
      if ((await this._removeSession(), 'email' in t)) {
        const { email: l, options: a } = t;
        let u = null,
          d = null;
        this.flowType === 'pkce' &&
          ([u, d] = await tn(this.storage, this.storageKey));
        const { error: h } = await A(this.fetch, 'POST', `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: l,
            data:
              (n = a == null ? void 0 : a.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = a == null ? void 0 : a.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: a == null ? void 0 : a.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: d,
          },
          redirectTo: a == null ? void 0 : a.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: h };
      }
      if ('phone' in t) {
        const { phone: l, options: a } = t,
          { data: u, error: d } = await A(
            this.fetch,
            'POST',
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: l,
                data:
                  (s = a == null ? void 0 : a.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = a == null ? void 0 : a.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
                channel:
                  (o = a == null ? void 0 : a.channel) !== null && o !== void 0
                    ? o
                    : 'sms',
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: d,
        };
      }
      throw new as('You must provide either an email or phone number.');
    } catch (l) {
      if (R(l)) return { data: { user: null, session: null }, error: l };
      throw l;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      t.type !== 'email_change' &&
        t.type !== 'phone_change' &&
        (await this._removeSession());
      let s, i;
      'options' in t &&
        ((s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (i =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: o, error: l } = await A(
        this.fetch,
        'POST',
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: at,
        }
      );
      if (l) throw l;
      if (!o) throw new Error('An error occurred on token verification.');
      const a = o.session,
        u = o.user;
      return (
        a != null &&
          a.access_token &&
          (await this._saveSession(a),
          await this._notifyAllSubscribers(
            t.type == 'recovery' ? 'PASSWORD_RECOVERY' : 'SIGNED_IN',
            a
          )),
        { data: { user: u, session: a }, error: null }
      );
    } catch (s) {
      if (R(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signInWithSSO(t) {
    var n, r, s;
    try {
      await this._removeSession();
      let i = null,
        o = null;
      return (
        this.flowType === 'pkce' &&
          ([i, o] = await tn(this.storage, this.storageKey)),
        await A(this.fetch, 'POST', `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    'providerId' in t ? { provider_id: t.providerId } : null
                  ),
                  'domain' in t ? { domain: t.domain } : null
                ),
                {
                  redirect_to:
                    (r =
                      (n = t.options) === null || n === void 0
                        ? void 0
                        : n.redirectTo) !== null && r !== void 0
                      ? r
                      : void 0,
                }
              ),
              !(
                (s = t == null ? void 0 : t.options) === null || s === void 0
              ) && s.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: t.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: i,
              code_challenge_method: o,
            }
          ),
          headers: this.headers,
          xform: I2,
        })
      );
    } catch (i) {
      if (R(i)) return { data: null, error: i };
      throw i;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new nn();
        const { error: s } = await A(
          this.fetch,
          'GET',
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token }
        );
        return { data: { user: null, session: null }, error: s };
      });
    } catch (t) {
      if (R(t)) return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  async resend(t) {
    try {
      t.type != 'email_change' &&
        t.type != 'phone_change' &&
        (await this._removeSession());
      const n = `${this.url}/resend`;
      if ('email' in t) {
        const { email: r, type: s, options: i } = t,
          { error: o } = await A(this.fetch, 'POST', n, {
            headers: this.headers,
            body: {
              email: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: o };
      } else if ('phone' in t) {
        const { phone: r, type: s, options: i } = t,
          { data: o, error: l } = await A(this.fetch, 'POST', n, {
            headers: this.headers,
            body: {
              phone: r,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: l,
        };
      }
      throw new as(
        'You must provide either an email or phone number and a type'
      );
    } catch (n) {
      if (R(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async getSession() {
    await this.initializePromise;
    const t = await this._acquireLock(-1, async () =>
      this._useSession(async (n) => n)
    );
    return (
      t.data &&
        this.storage.isServer &&
        (this.insecureGetSessionWarningShown ||
          (console.warn(
            'Using supabase.auth.getSession() is potentially insecure as it loads data directly from the storage medium (typically cookies) which may not be authentic. Prefer using supabase.auth.getUser() instead. To suppress this warning call supabase.auth.getUser() before you call supabase.auth.getSession().'
          ),
          (this.insecureGetSessionWarningShown = !0))),
      t
    );
  }
  async _acquireLock(t, n) {
    this._debug('#_acquireLock', 'begin', t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })()
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          '#_acquireLock',
          'lock acquired for storage key',
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const s = [...this.pendingInLock];
            await Promise.all(s), this.pendingInLock.splice(0, s.length);
          }
          return await r;
        } finally {
          this._debug(
            '#_acquireLock',
            'lock released for storage key',
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug('#_acquireLock', 'end');
    }
  }
  async _useSession(t) {
    this._debug('#_useSession', 'begin');
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug('#_useSession', 'end');
    }
  }
  async __loadSession() {
    this._debug('#__loadSession()', 'begin'),
      this.lockAcquired ||
        this._debug(
          '#__loadSession()',
          'used outside of an acquired lock!',
          new Error().stack
        );
    try {
      let t = null;
      const n = await ls(this.storage, this.storageKey);
      if (
        (this._debug('#getSession()', 'session from storage', n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                '#getSession()',
                'session from storage is not valid'
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
      if (
        (this._debug(
          '#__loadSession()',
          `session has${r ? '' : ' not'} expired`,
          'expires_at',
          t.expires_at
        ),
        !r)
      ) {
        if (this.storage.isServer) {
          let o = t.user;
          delete t.user,
            Object.defineProperty(t, 'user', {
              enumerable: !0,
              get: () => (
                t.__suppressUserWarning ||
                  console.warn(
                    'Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.'
                  ),
                o
              ),
              set: (l) => {
                o = l;
              },
            });
        }
        return { data: { session: t }, error: null };
      }
      const { session: s, error: i } = await this._callRefreshToken(
        t.refresh_token
      );
      return i
        ? { data: { session: null }, error: i }
        : { data: { session: s }, error: null };
    } finally {
      this._debug('#__loadSession()', 'end');
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const n = await this._acquireLock(-1, async () => await this._getUser());
    return (
      n.data &&
        this.storage.isServer &&
        (this.insecureGetSessionWarningShown = !0),
      n
    );
  }
  async _getUser(t) {
    try {
      return t
        ? await A(this.fetch, 'GET', `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: pt,
          })
        : await this._useSession(async (n) => {
            var r, s;
            const { data: i, error: o } = n;
            if (o) throw o;
            return await A(this.fetch, 'GET', `${this.url}/user`, {
              headers: this.headers,
              jwt:
                (s =
                  (r = i.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && s !== void 0
                  ? s
                  : void 0,
              xform: pt,
            });
          });
    } catch (n) {
      if (R(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(t, n))
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: s, error: i } = r;
        if (i) throw i;
        if (!s.session) throw new nn();
        const o = s.session;
        let l = null,
          a = null;
        this.flowType === 'pkce' &&
          t.email != null &&
          ([l, a] = await tn(this.storage, this.storageKey));
        const { data: u, error: d } = await A(
          this.fetch,
          'PUT',
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: l,
              code_challenge_method: a,
            }),
            jwt: o.access_token,
            xform: pt,
          }
        );
        if (d) throw d;
        return (
          (o.user = u.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers('USER_UPDATED', o),
          { data: { user: o.user }, error: null }
        );
      });
    } catch (r) {
      if (R(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  _decodeJWT(t) {
    return zu(t);
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(t))
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new nn();
      const n = Date.now() / 1e3;
      let r = n,
        s = !0,
        i = null;
      const o = zu(t.access_token);
      if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
        const { session: l, error: a } = await this._callRefreshToken(
          t.refresh_token
        );
        if (a) return { data: { user: null, session: null }, error: a };
        if (!l) return { data: { user: null, session: null }, error: null };
        i = l;
      } else {
        const { data: l, error: a } = await this._getUser(t.access_token);
        if (a) throw a;
        (i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: l.user,
          token_type: 'bearer',
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers('SIGNED_IN', i);
      }
      return { data: { user: i.user, session: i }, error: null };
    } catch (n) {
      if (R(n)) return { data: { session: null, user: null }, error: n };
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(t))
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: o, error: l } = n;
          if (l) throw l;
          t = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new nn();
        const { session: s, error: i } = await this._callRefreshToken(
          t.refresh_token
        );
        return i
          ? { data: { user: null, session: null }, error: i }
          : s
          ? { data: { user: s.user, session: s }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (n) {
      if (R(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async _getSessionFromURL(t) {
    try {
      if (!$e()) throw new us('No browser detected.');
      if (this.flowType === 'implicit' && !this._isImplicitGrantFlow())
        throw new us('Not a valid implicit grant flow url.');
      if (this.flowType == 'pkce' && !t)
        throw new Mu('Not a valid PKCE flow url.');
      const n = Gi(window.location.href);
      if (t) {
        if (!n.code) throw new Mu('No code detected.');
        const { data: p, error: g } = await this._exchangeCodeForSession(
          n.code
        );
        if (g) throw g;
        const x = new URL(window.location.href);
        return (
          x.searchParams.delete('code'),
          window.history.replaceState(window.history.state, '', x.toString()),
          { data: { session: p.session, redirectType: null }, error: null }
        );
      }
      if (n.error || n.error_description || n.error_code)
        throw new us(
          n.error_description ||
            'Error in URL with unspecified error_description',
          {
            error: n.error || 'unspecified_error',
            code: n.error_code || 'unspecified_code',
          }
        );
      const {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        refresh_token: o,
        expires_in: l,
        expires_at: a,
        token_type: u,
      } = n;
      if (!i || !l || !o || !u) throw new us('No session defined in URL');
      const d = Math.round(Date.now() / 1e3),
        h = parseInt(l);
      let f = d + h;
      a && (f = parseInt(a));
      const v = f - d;
      v * 1e3 <= Qn &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${h}s`
        );
      const y = f - h;
      d - y >= 120
        ? console.warn(
            '@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
            y,
            f,
            d
          )
        : d - y < 0 &&
          console.warn(
            '@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew',
            y,
            f,
            d
          );
      const { data: w, error: _ } = await this._getUser(i);
      if (_) throw _;
      const m = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: i,
        expires_in: h,
        expires_at: f,
        refresh_token: o,
        token_type: u,
        user: w.user,
      };
      return (
        (window.location.hash = ''),
        this._debug('#_getSessionFromURL()', 'clearing window.location.hash'),
        { data: { session: m, redirectType: n.type }, error: null }
      );
    } catch (n) {
      if (R(n))
        return { data: { session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  _isImplicitGrantFlow() {
    const t = Gi(window.location.href);
    return !!($e() && (t.access_token || t.error_description));
  }
  async _isPKCEFlow() {
    const t = Gi(window.location.href),
      n = await ls(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: 'global' }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(t))
    );
  }
  async _signOut({ scope: t } = { scope: 'global' }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: s, error: i } = n;
      if (i) return { error: i };
      const o =
        (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: l } = await this.admin.signOut(o, t);
        if (l && !(P2(l) && (l.status === 404 || l.status === 401)))
          return { error: l };
      }
      return (
        t !== 'others' &&
          (await this._removeSession(),
          await Zi(this.storage, `${this.storageKey}-code-verifier`),
          await this._notifyAllSubscribers('SIGNED_OUT', null)),
        { error: null }
      );
    });
  }
  onAuthStateChange(t) {
    const n = m2(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          this._debug(
            '#unsubscribe()',
            'state change callback with id removed',
            n
          ),
            this.stateChangeEmitters.delete(n);
        },
      };
    return (
      this._debug('#onAuthStateChange()', 'registered callback with id', n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, s;
      try {
        const {
          data: { session: i },
          error: o,
        } = n;
        if (o) throw o;
        await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback('INITIAL_SESSION', i)),
          this._debug('INITIAL_SESSION', 'callback id', t, 'session', i);
      } catch (i) {
        await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback('INITIAL_SESSION', null)),
          this._debug('INITIAL_SESSION', 'callback id', t, 'error', i),
          console.error(i);
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      s = null;
    this.flowType === 'pkce' &&
      ([r, s] = await tn(this.storage, this.storageKey, !0));
    try {
      return await A(this.fetch, 'POST', `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (i) {
      if (R(i)) return { data: null, error: i };
      throw i;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return {
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      };
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
  async linkIdentity(t) {
    var n;
    try {
      const { data: r, error: s } = await this._useSession(async (i) => {
        var o, l, a, u, d;
        const { data: h, error: f } = i;
        if (f) throw f;
        const v = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (l = t.options) === null || l === void 0 ? void 0 : l.scopes,
            queryParams:
              (a = t.options) === null || a === void 0 ? void 0 : a.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await A(this.fetch, 'GET', v, {
          headers: this.headers,
          jwt:
            (d =
              (u = h.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && d !== void 0
              ? d
              : void 0,
        });
      });
      if (s) throw s;
      return (
        $e() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        {
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        }
      );
    } catch (r) {
      if (R(r)) return { data: { provider: t.provider, url: null }, error: r };
      throw r;
    }
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: o } = n;
        if (o) throw o;
        return await A(
          this.fetch,
          'DELETE',
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (r = i.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && s !== void 0
                ? s
                : void 0,
          }
        );
      });
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, 'begin');
    try {
      const r = Date.now();
      return await w2(
        async (s) => (
          await y2(s * 200),
          this._debug(n, 'refreshing attempt', s),
          await A(
            this.fetch,
            'POST',
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: at }
          )
        ),
        (s, i, o) =>
          o && o.error && Yi(o.error) && Date.now() + (s + 1) * 200 - r < Qn
      );
    } catch (r) {
      if ((this._debug(n, 'error', r), R(r)))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(n, 'end');
    }
  }
  _isValidSession(t) {
    return (
      typeof t == 'object' &&
      t !== null &&
      'access_token' in t &&
      'refresh_token' in t &&
      'expires_at' in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        '#_handleProviderSignIn()',
        'provider',
        t,
        'options',
        n,
        'url',
        r
      ),
      $e() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t;
    const n = '#_recoverAndRefresh()';
    this._debug(n, 'begin');
    try {
      const r = await ls(this.storage, this.storageKey);
      if (
        (this._debug(n, 'session from storage', r), !this._isValidSession(r))
      ) {
        this._debug(n, 'session is not valid'),
          r !== null && (await this._removeSession());
        return;
      }
      const s = Math.round(Date.now() / 1e3),
        i = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < s + Du;
      if (
        (this._debug(
          n,
          `session has${i ? '' : ' not'} expired with margin of ${Du}s`
        ),
        i)
      ) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: o } = await this._callRefreshToken(r.refresh_token);
          o &&
            (console.error(o),
            Yi(o) ||
              (this._debug(
                n,
                'refresh failed with a non-retryable error, removing the session',
                o
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers('SIGNED_IN', r);
    } catch (r) {
      this._debug(n, 'error', r), console.error(r);
      return;
    } finally {
      this._debug(n, 'end');
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new nn();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, 'begin');
    try {
      this.refreshingDeferred = new mi();
      const { data: i, error: o } = await this._refreshAccessToken(t);
      if (o) throw o;
      if (!i.session) throw new nn();
      await this._saveSession(i.session),
        await this._notifyAllSubscribers('TOKEN_REFRESHED', i.session);
      const l = { session: i.session, error: null };
      return this.refreshingDeferred.resolve(l), l;
    } catch (i) {
      if ((this._debug(s, 'error', i), R(i))) {
        const o = { session: null, error: i };
        return (
          Yi(i) ||
            (await this._removeSession(),
            await this._notifyAllSubscribers('SIGNED_OUT', null)),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(o),
          o
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
        i)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(s, 'end');
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, 'begin', n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const i = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (l) => {
          try {
            await l.callback(t, n);
          } catch (a) {
            i.push(a);
          }
        });
      if ((await Promise.all(o), i.length > 0)) {
        for (let l = 0; l < i.length; l += 1) console.error(i[l]);
        throw i[0];
      }
    } finally {
      this._debug(s, 'end');
    }
  }
  async _saveSession(t) {
    this._debug('#_saveSession()', t),
      await Ah(this.storage, this.storageKey, t);
  }
  async _removeSession() {
    this._debug('#_removeSession()'), await Zi(this.storage, this.storageKey);
  }
  _removeVisibilityChangedCallback() {
    this._debug('#_removeVisibilityChangedCallback()');
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        $e() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener('visibilitychange', t);
    } catch (n) {
      console.error('removing visibilitychange callback failed', n);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug('#_startAutoRefresh()');
    const t = setInterval(() => this._autoRefreshTokenTick(), Qn);
    (this.autoRefreshTicker = t),
      t && typeof t == 'object' && typeof t.unref == 'function'
        ? t.unref()
        : typeof Deno < 'u' &&
          typeof Deno.unrefTimer == 'function' &&
          Deno.unrefTimer(t),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug('#_stopAutoRefresh()');
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug('#_autoRefreshTokenTick()', 'begin');
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug('#_autoRefreshTokenTick()', 'no session');
                return;
              }
              const s = Math.floor((r.expires_at * 1e3 - t) / Qn);
              this._debug(
                '#_autoRefreshTokenTick()',
                `access token expires in ${s} ticks, a tick lasts ${Qn}ms, refresh threshold is ${Hu} ticks`
              ),
                s <= Hu && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (n) {
            console.error(
              'Auto refresh tick failed with error. This is likely a transient error.',
              n
            );
          }
        } finally {
          this._debug('#_autoRefreshTokenTick()', 'end');
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Uh)
        this._debug('auto refresh token tick lock not available');
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug('#_handleVisibilityChange()'),
      !$e() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            'visibilitychange',
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error('_handleVisibilityChange', t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    this._debug(n, 'visibilityState', document.visibilityState),
      document.visibilityState === 'visible'
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== 'visible') {
                this._debug(
                  n,
                  'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === 'hidden' &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, n, r) {
    const s = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === 'pkce')
    ) {
      const [i, o] = await tn(this.storage, this.storageKey),
        l = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(l.toString());
    }
    if (r != null && r.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      s.push(i.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${s.join('&')}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        return i
          ? { data: null, error: i }
          : await A(this.fetch, 'DELETE', `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, s;
        const { data: i, error: o } = n;
        if (o) return { data: null, error: o };
        const { data: l, error: a } = await A(
          this.fetch,
          'POST',
          `${this.url}/factors`,
          {
            body: {
              friendly_name: t.friendlyName,
              factor_type: t.factorType,
              issuer: t.issuer,
            },
            headers: this.headers,
            jwt:
              (r = i == null ? void 0 : i.session) === null || r === void 0
                ? void 0
                : r.access_token,
          }
        );
        return a
          ? { data: null, error: a }
          : (!((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            { data: l, error: null });
      });
    } catch (n) {
      if (R(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          if (i) return { data: null, error: i };
          const { data: o, error: l } = await A(
            this.fetch,
            'POST',
            `${this.url}/factors/${t.factorId}/verify`,
            {
              body: { code: t.code, challenge_id: t.challengeId },
              headers: this.headers,
              jwt:
                (r = s == null ? void 0 : s.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          return l
            ? { data: null, error: l }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                  o
                )
              ),
              await this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', o),
              { data: o, error: l });
        });
      } catch (n) {
        if (R(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          return i
            ? { data: null, error: i }
            : await A(
                this.fetch,
                'POST',
                `${this.url}/factors/${t.factorId}/challenge`,
                {
                  headers: this.headers,
                  jwt:
                    (r = s == null ? void 0 : s.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (n) {
        if (R(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? { data: null, error: r }
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: t },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const r = (t == null ? void 0 : t.factors) || [],
      s = r.filter((i) => i.factor_type === 'totp' && i.status === 'verified');
    return { data: { all: r, totp: s }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (t) => {
          var n, r;
          const {
            data: { session: s },
            error: i,
          } = t;
          if (i) return { data: null, error: i };
          if (!s)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const o = this._decodeJWT(s.access_token);
          let l = null;
          o.aal && (l = o.aal);
          let a = l;
          ((r =
            (n = s.user.factors) === null || n === void 0
              ? void 0
              : n.filter((h) => h.status === 'verified')) !== null &&
          r !== void 0
            ? r
            : []
          ).length > 0 && (a = 'aal2');
          const d = o.amr || [];
          return {
            data: {
              currentLevel: l,
              nextLevel: a,
              currentAuthenticationMethods: d,
            },
            error: null,
          };
        })
    );
  }
}
Lr.nextInstanceID = 0;
const W2 = Lr;
class H2 extends W2 {
  constructor(t) {
    super(t);
  }
}
var q2 = function (e, t, n, r) {
  function s(i) {
    return i instanceof n
      ? i
      : new n(function (o) {
          o(i);
        });
  }
  return new (n || (n = Promise))(function (i, o) {
    function l(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class K2 {
  constructor(t, n, r) {
    var s, i, o, l, a, u, d, h;
    if (((this.supabaseUrl = t), (this.supabaseKey = n), !t))
      throw new Error('supabaseUrl is required.');
    if (!n) throw new Error('supabaseKey is required.');
    const f = u2(t);
    (this.realtimeUrl = `${f}/realtime/v1`.replace(/^http/i, 'ws')),
      (this.authUrl = `${f}/auth/v1`),
      (this.storageUrl = `${f}/storage/v1`),
      (this.functionsUrl = `${f}/functions/v1`);
    const v = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
      y = {
        db: n2,
        realtime: s2,
        auth: Object.assign(Object.assign({}, r2), { storageKey: v }),
        global: t2,
      },
      w = c2(r ?? {}, y);
    (this.storageKey =
      (i = (s = w.auth) === null || s === void 0 ? void 0 : s.storageKey) !==
        null && i !== void 0
        ? i
        : ''),
      (this.headers =
        (l = (o = w.global) === null || o === void 0 ? void 0 : o.headers) !==
          null && l !== void 0
          ? l
          : {}),
      (this.auth = this._initSupabaseAuthClient(
        (a = w.auth) !== null && a !== void 0 ? a : {},
        this.headers,
        (u = w.global) === null || u === void 0 ? void 0 : u.fetch
      )),
      (this.fetch = a2(
        n,
        this._getAccessToken.bind(this),
        (d = w.global) === null || d === void 0 ? void 0 : d.fetch
      )),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, w.realtime)
      )),
      (this.rest = new sa(`${f}/rest/v1`, {
        headers: this.headers,
        schema: (h = w.db) === null || h === void 0 ? void 0 : h.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new mm(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new Ym(this.storageUrl, this.headers, this.fetch);
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, n = {}, r = {}) {
    return this.rest.rpc(t, n, r);
  }
  channel(t, n = { config: {} }) {
    return this.realtime.channel(t, n);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var t, n;
    return q2(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (n =
        (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && n !== void 0
        ? n
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: s,
      storageKey: i,
      flowType: o,
      debug: l,
    },
    a,
    u
  ) {
    const d = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new H2({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, d), a),
      storageKey: i,
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: s,
      flowType: o,
      debug: l,
      fetch: u,
    });
  }
  _initRealtimeClient(t) {
    return new zm(
      this.realtimeUrl,
      Object.assign(Object.assign({}, t), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          t == null ? void 0 : t.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(
        n,
        'CLIENT',
        r == null ? void 0 : r.access_token
      );
    });
  }
  _handleTokenChanged(t, n, r) {
    (t === 'TOKEN_REFRESHED' || t === 'SIGNED_IN') &&
    this.changedAccessToken !== r
      ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
      : t === 'SIGNED_OUT' &&
        (this.realtime.setAuth(this.supabaseKey),
        n == 'STORAGE' && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const J2 = (e, t, n) => new K2(e, t, n),
  G2 = 'https://xostirwdchxiskxberwl.supabase.co',
  Z2 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvc3RpcndkY2h4aXNreGJlcndsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjA5NDYyNCwiZXhwIjoyMDI3NjcwNjI0fQ.bjz46vOLzMuxDDfb4LHIr6eS1JJBkqCaBZ9Tb7yItQ8',
  Q2 = J2(G2, Z2),
  Dh = ({ message: e }) =>
    c.jsx(c.Fragment, {
      children: c.jsxs('div', {
        id: 'toast-success',
        className:
          'flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800',
        role: 'alert',
        children: [
          c.jsxs('div', {
            className:
              'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200',
            children: [
              c.jsx('svg', {
                className: 'w-5 h-5',
                'aria-hidden': 'true',
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                viewBox: '0 0 20 20',
                children: c.jsx('path', {
                  d: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z',
                }),
              }),
              c.jsx('span', { className: 'sr-only', children: 'Check icon' }),
            ],
          }),
          c.jsx('div', { className: 'ms-3 text-sm font-normal', children: e }),
          c.jsxs('button', {
            type: 'button',
            className:
              'ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
            'data-dismiss-target': '#toast-success',
            'aria-label': 'Close',
            children: [
              c.jsx('span', { className: 'sr-only', children: 'Close' }),
              c.jsx('svg', {
                className: 'w-3 h-3',
                'aria-hidden': 'true',
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 14 14',
                children: c.jsx('path', {
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  d: 'm1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6',
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  aa = ({ message: e }) =>
    c.jsxs('div', {
      id: 'toast-danger',
      className:
        'flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800',
      role: 'alert',
      children: [
        c.jsxs('div', {
          className:
            'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
          children: [
            c.jsx('svg', {
              className: 'w-5 h-5',
              'aria-hidden': 'true',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'currentColor',
              viewBox: '0 0 20 20',
              children: c.jsx('path', {
                d: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z',
              }),
            }),
            c.jsx('span', { className: 'sr-only', children: 'Error icon' }),
          ],
        }),
        c.jsx('div', { className: 'ms-3 text-sm font-normal', children: e }),
        c.jsxs('button', {
          type: 'button',
          className:
            'ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
          'data-dismiss-target': '#toast-danger',
          'aria-label': 'Close',
          children: [
            c.jsx('span', { className: 'sr-only', children: 'Close' }),
            c.jsx('svg', {
              className: 'w-3 h-3',
              'aria-hidden': 'true',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 14 14',
              children: c.jsx('path', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'm1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6',
              }),
            }),
          ],
        }),
      ],
    });
Dh.propTypes = { message: hi.string };
aa.propTypes = { message: hi.string };
const Y2 = () => {
    const { login: e } = jh(),
      [t, n] = S.useState(!1),
      [r, s] = S.useState(!1),
      [i, o] = S.useState(''),
      [l, a] = S.useState({ email: '', password: '' });
    di();
    const u = (f) => {
        const { name: v, value: y } = f.target;
        a((w) => ({ ...w, [v]: y }));
      },
      d = (f) => {
        f.preventDefault(), h();
      };
    async function h() {
      const { data: f, error: v } = await Q2.auth.signInWithPassword({
        email: l.email,
        password: l.password,
      });
      v && (n(!0), o(v.message)),
        e(f.session.access_token),
        s(!0),
        console.log(f);
    }
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx('div', {
          className: 'fixed bottom-0 right-4',
          children: r
            ? c.jsx(Dh, { message: 'Login Sukses' })
            : t
            ? c.jsx(aa, { message: i })
            : null,
        }),
        c.jsx('section', {
          children: c.jsxs('div', {
            className:
              'flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-16',
            children: [
              c.jsx('h1', {
                href: '#',
                className:
                  'flex items-center mb-6 text-2xl font-semibold text-gray-900 to:text-white',
                children: 'Naratama Admin',
              }),
              c.jsx('div', {
                className:
                  'w-full bg-white rounded-lg shadow to:border md:mt-0 sm:max-w-md xl:p-0 to:bg-gray-800 to:border-gray-700',
                children: c.jsxs('div', {
                  className: 'p-6 space-y-4 md:space-y-6 sm:p-8',
                  children: [
                    c.jsx('h1', {
                      className:
                        'text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl to:text-white',
                      children: 'Sign in to your account',
                    }),
                    c.jsxs('form', {
                      className: 'space-y-4 md:space-y-6',
                      onSubmit: d,
                      children: [
                        c.jsxs('div', {
                          children: [
                            c.jsx('label', {
                              htmlFor: 'email',
                              className:
                                'block mb-2 text-sm font-medium text-gray-900 to:text-white',
                              children: 'Your email',
                            }),
                            c.jsx('input', {
                              onChange: u,
                              type: 'email',
                              name: 'email',
                              id: 'email',
                              className:
                                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 to:bg-gray-700 to:border-gray-600 to:placeholder-gray-400 to:text-white to:focus:ring-blue-500 to:focus:border-blue-500',
                              placeholder: 'name@company.com',
                              required: '',
                            }),
                          ],
                        }),
                        c.jsxs('div', {
                          children: [
                            c.jsx('label', {
                              htmlFor: 'password',
                              className:
                                'block mb-2 text-sm font-medium text-gray-900 to:text-white',
                              children: 'Password',
                            }),
                            c.jsx('input', {
                              onChange: u,
                              type: 'password',
                              name: 'password',
                              id: 'password',
                              placeholder: '••••••••',
                              className:
                                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 to:bg-gray-700 to:border-gray-600 to:placeholder-gray-400 to:text-white to:focus:ring-blue-500 to:focus:border-blue-500',
                              required: '',
                            }),
                          ],
                        }),
                        c.jsx('button', {
                          type: 'submit',
                          className:
                            'w-full text-white bg-naratama-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center to:bg-primary-600 to:hover:bg-primary-700 to:focus:ring-primary-800',
                          children: 'Sign in',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  X2 = () => {
    window.fbq('track', 'linkView');
  };
function eg() {
  const e = [
      { title: 'Whatsapp', url: 'https://bit.ly/adm-naratama' },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/naratama.graduation',
      },
      { title: 'Tiktok', url: 'https://www.tiktok.com/@naratama.graduation' },
      { title: 'Website', url: '/' },
    ],
    t = new Date().getFullYear();
  return (
    S.useEffect(() => {
      X2();
    }, []),
    c.jsx(c.Fragment, {
      children: c.jsxs('div', {
        className:
          'h-screen flex flex-col items-center justify-center bg-blend-overlay',
        style: {
          backgroundImage:
            "url('https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/backgroundLink.jpg?t=2024-04-08T15%3A31%3A08.576Z')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        children: [
          c.jsx('div', {
            className: 'flex items-center my-6',
            children: c.jsx('div', {
              className:
                'flex flex-col font-normal text-3xl items-start text-white',
              children: c.jsx('h1', { children: 'Lets get in touch!' }),
            }),
          }),
          c.jsx('div', {
            className: 'max-w-xl w-full',
            children: c.jsx('div', {
              className: 'px-6 py-6',
              children: e.map((n, r) =>
                c.jsx(
                  'a',
                  {
                    href: n.url,
                    className: 'block mb-4 px-3 py-1 border rounded-full',
                    children: c.jsx('div', {
                      className:
                        'text-base font-ubuntu text-white text-center font-medium',
                      children: n.title,
                    }),
                  },
                  r
                )
              ),
            }),
          }),
          c.jsxs('div', {
            className: 'mt-20',
            children: [
              c.jsx('div', {
                className: 'w-28 mx-auto mb-2',
                children: c.jsx('img', {
                  src: 'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logo.png',
                  alt: 'naratama',
                }),
              }),
              c.jsxs('h1', {
                className: 'text-white text-xs',
                children: [
                  '© ',
                  t,
                  ' by Naratama Graduation | All right reserved',
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const tg = () => {
    const {
      noHp: e,
      name: t,
      kampus: n,
      sesi: r,
      lokasiFoto: s,
      paket: i,
      fotografer: o,
      link: l,
    } = W1();
    function a(u) {
      const d = u.replace(/\D/g, '');
      return d.startsWith('0')
        ? '62' + d.substr(1)
        : d.startsWith('+62')
        ? '62' + d.substr(3)
        : null;
    }
    return (
      S.useEffect(() => {
        const d = `https://wa.me/${a(
          e
        )}?text=GRADUATION%20PHOTO%20BRIEF%0A%0ACLIENT%20INFO%0A%20%20%20%E2%80%A2%20%20Nama%20%20%20%3A%20${t}%0A%20%20%20%E2%80%A2%20%20Kampus%20%3A%20${n}%0A%20%20%20%E2%80%A2%20%20Paket%20%20%3A%20${i}%0A%20%20%20%E2%80%A2%20%20Sesi%20%20%20%3A%20${r}%0A%20%20%20%E2%80%A2%20%20Lokasi%20%3A%20${s}%0A%0AG-DRIVE%20LINK%0A${decodeURIComponent(
          l
        )}%0A%0ACHAT%20TEMPLATE%0A%0AHalo%2C%20Kak.%20Perkenalkan%20aku%20${o}%2C%20fotografer%20Naratama%20Graduation%20untuk%20sesi%20photo%20kakak%20besok%20jam%20${r}%20di%20${s}.%0A%0AJika%20ada%20referensi%2C%20moodboard%20atau%20request%20tertentu%20bisa%20di%20sampaikan%20ke%20aku%20ya%2C%20Kak.%20Thank%20you!`;
        window.location.replace(d);
      }, [t, n, r, s, e, i, o, l]),
      null
    );
  },
  ng = () => {
    const e = di(),
      [t, n] = S.useState({
        nama: '',
        kampus: '',
        paket: '',
        lokasi: '',
        noWa: '',
        instagram: '',
        tanggal: '',
        jam: '',
      }),
      [r, s] = S.useState(!1),
      [i, o] = S.useState(null),
      [l, a] = S.useState(!1);
    S.useEffect(() => {
      r && e('/success');
    }, [r, e]);
    const u = async (h) => {
        a(!0), h.preventDefault();
        try {
          await fetch(
            'https://script.google.com/macros/s/AKfycbwroI7Rwyv7sEcw6Z-XXHWl-GFIf6-BoxOpDV_h6G9dsZe1ar60ErH1qccHui0fT2Tb/exec',
            { method: 'POST', body: JSON.stringify(t) }
          ),
            n(null),
            s(!0),
            a(!1);
        } catch (f) {
          o(f), a(!1);
        }
      },
      d = (h) => {
        const { name: f, value: v } = h.target;
        n({ ...t, [f]: v });
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx('div', {
          className: 'fixed bottom-0 right-4',
          children: i ? c.jsx(aa, { message: i }) : null,
        }),
        c.jsx('div', {
          className: 'h-screen p-6',
          children: c.jsxs('form', {
            className: 'max-w-md mx-auto font-gilroy-regular',
            onSubmit: u,
            children: [
              c.jsx('div', {
                className: 'mb-6 mt-32 w-full',
                children: c.jsx('h1', {
                  className: 'text-xl font-gilroy-bold',
                  children: 'Form Booking',
                }),
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'text',
                    name: 'nama',
                    id: 'nama',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.nama,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'nama',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Nama',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'text',
                    name: 'kampus',
                    id: 'kampus',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.kampus,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'kampus',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Kampus',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsxs('select', {
                    name: 'paket',
                    id: 'paket',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    required: !0,
                    value: t == null ? void 0 : t.paket,
                    onChange: d,
                    children: [
                      c.jsx('option', {
                        value: '',
                        disabled: !0,
                        selected: !0,
                        children: 'Select Paket',
                      }),
                      [
                        'Personal-Lite',
                        'Personal-Regular',
                        'Personal-Premium',
                        'Couple-Regular',
                        'Couple-Premium',
                        'Group',
                        'Video 1',
                        'Video 2',
                        'Combo 1',
                        'Combo 2',
                      ].map((h, f) =>
                        c.jsx('option', { value: h, children: h }, f)
                      ),
                    ],
                  }),
                  c.jsx('label', {
                    htmlFor: 'paket',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Paket',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'text',
                    name: 'lokasi',
                    id: 'lokasi',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.lokasi,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'nama',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Lokasi',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'phone',
                    name: 'noWa',
                    id: 'noWa',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.noWa,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'noWa',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Nomor WA',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'text',
                    name: 'instagram',
                    id: 'instagram',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.instagram,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'instagram',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Instagram',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'date',
                    name: 'tanggal',
                    id: 'date',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: 'mm/dd/yyyy',
                    required: !0,
                    value: t == null ? void 0 : t.tanggal,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'date',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Tanggal',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'relative z-0 w-full mb-5 group',
                children: [
                  c.jsx('input', {
                    type: 'text',
                    name: 'jam',
                    id: 'jam',
                    className:
                      'block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer',
                    placeholder: '',
                    required: !0,
                    value: t == null ? void 0 : t.jam,
                    onChange: d,
                  }),
                  c.jsx('label', {
                    htmlFor: 'jam',
                    className:
                      'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
                    children: 'Jam',
                  }),
                ],
              }),
              c.jsx('button', {
                disabled: !!l,
                type: 'submit',
                className: `${
                  l ? 'bg-gray-600' : 'bg-black'
                } text-white hover:bg-black-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-3 mt-8 text-center`,
                children: l ? 'Loading...' : 'Submit',
              }),
              c.jsx('h1', {
                className: 'font-gilroy-regular text-center text-xs mt-4 pb-4',
                children: 'Naratama Graduation',
              }),
            ],
          }),
        }),
      ],
    });
  },
  rg = () =>
    c.jsx('div', {
      className: 'bg-white h-screen justify-center items-center flex',
      children: c.jsxs('div', {
        className: 'bg-white p-6  md:mx-auto',
        children: [
          c.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            className: 'text-black w-16 h-16 mx-auto my-6',
            children: c.jsx('path', {
              fillRule: 'evenodd',
              d: 'M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
              clipRule: 'evenodd',
            }),
          }),
          c.jsxs('div', {
            className: 'text-center font-gilroy-regular',
            children: [
              c.jsx('h3', {
                className:
                  'md:text-2xl text-base text-gray-900 font-semibold text-center',
                children: 'Success!',
              }),
              c.jsx('p', {
                className: 'text-gray-600 mt-2',
                children: 'Thank you for trusting on us.',
              }),
              c.jsxs('div', {
                className: 'w-full fixed bottom-6 left-0 right-0',
                children: [
                  c.jsx('p', {
                    className: 'text-gray-600 text-xs',
                    children: 'Segera lakukan pembayaran DP dalam 24 jam',
                  }),
                  c.jsx('p', {
                    className: 'text-gray-600 text-xs',
                    children: 'dan konfirmasi kepada admin.',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
function sg() {
  return c.jsx(c.Fragment, {
    children: c.jsxs(lp, {
      children: [
        c.jsxs(He, {
          path: '/',
          element: c.jsx(yp, {}),
          children: [
            c.jsx(He, { index: !0, element: c.jsx(Op, {}) }),
            c.jsx(He, { path: '*', element: c.jsx(Rp, {}) }),
            c.jsx(He, { path: '/login', element: c.jsx(Y2, {}) }),
          ],
        }),
        c.jsx(He, { path: '/link', element: c.jsx(eg, {}) }),
        c.jsx(He, {
          path: '/admin',
          element: c.jsx(Eh, { children: c.jsx(Lp, {}) }),
        }),
        c.jsx(He, {
          path: '/whatsapp/:noHp/:name/:kampus/:paket/:sesi/:lokasiFoto/:fotografer/:link',
          element: c.jsx(tg, {}),
        }),
        c.jsx(He, { path: '/form', element: c.jsx(ng, {}) }),
        c.jsx(He, { path: '/success', element: c.jsx(rg, {}) }),
      ],
    }),
  });
}
Xi.createRoot(document.getElementById('root')).render(
  c.jsx(ll.StrictMode, { children: c.jsx(pp, { children: c.jsx(sg, {}) }) })
);
export { nl as g };
