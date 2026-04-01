import { jsx as M } from "react/jsx-runtime";
import { useState as g, useRef as b, useEffect as h, useCallback as R } from "react";
const T = "....fgh......_____----hr--~`;'--~/--- ---asd----10?`, ", I = "..-_-10?`,abcdefghijklmnopqrstuvwxyz123456789080-~`;' ", O = "......................................................", P = {
  display: "inline"
};
function D({ text: e = "", speed: d = 5, trigger: c = "hover", style: q, className: k }) {
  const [v, m] = g(e), [U, y] = g(!1), u = b(null), o = b(!1);
  h(() => {
    o.current || m(e);
  }, [e]), h(() => () => {
    u.current && clearTimeout(u.current);
  }, []);
  const i = R(() => {
    if (o.current) return;
    o.current = !0, y(!0);
    const p = e.length;
    let t = e.length;
    const Q = T.length;
    let n = 0, C = d, a = e;
    for (; a.length < t; ) a += " ";
    function S() {
      let l = a.substring(0, n);
      for (let r = n; r < t; r++) {
        const s = Math.floor(Math.random() * Q);
        r < t && r > t - 3 ? l += O.substring(s, s + 1) : r > n + 7 && r < n + 14 ? l += T.substring(s, s + 1) : l += I.substring(s, s + 1);
      }
      return n += 1, n === p + 2 && (o.current = !1, y(!1)), l;
    }
    function _() {
      m(S()), o.current && (u.current = setTimeout(_, C), C += 0.75), t < p && (t += 3);
    }
    _();
  }, [e, d]);
  h(() => {
    c === "auto" && i();
  }, []);
  const f = {};
  c === "hover" ? f.onMouseEnter = i : c === "click" && (f.onClick = i);
  const E = {
    ...P,
    cursor: c === "click" ? "pointer" : "default",
    ...q
  };
  return /* @__PURE__ */ M(
    "span",
    {
      className: k,
      style: E,
      ...f,
      children: v
    }
  );
}
export {
  D as CharCycle
};
