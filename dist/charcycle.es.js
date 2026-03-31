import { jsx as R } from "react/jsx-runtime";
import { useState as _, useRef as T, useEffect as h, useCallback as j } from "react";
const b = "....fgh......_____----hr--~`;'--~/--- ---asd----10?`, ", I = "..-_-10?`,abcdefghijklmnopqrstuvwxyz123456789080-~`;' ", O = "......................................................";
function U({ text: e = "", speed: m = 5, trigger: l = "hover", className: q }) {
  const [v, d] = _(e), [E, g] = _(!1), u = T(null), o = T(!1);
  h(() => {
    o.current || d(e);
  }, [e]), h(() => () => {
    u.current && clearTimeout(u.current);
  }, []);
  const i = j(() => {
    if (o.current) return;
    o.current = !0, g(!0);
    const y = e.length;
    let t = e.length;
    const k = b.length;
    let n = 0, p = m, a = e;
    for (; a.length < t; ) a += " ";
    function M() {
      let s = a.substring(0, n);
      for (let r = n; r < t; r++) {
        const c = Math.floor(Math.random() * k);
        r < t && r > t - 3 ? s += O.substring(c, c + 1) : r > n + 7 && r < n + 14 ? s += b.substring(c, c + 1) : s += I.substring(c, c + 1);
      }
      return n += 1, n === y + 2 && (o.current = !1, g(!1)), s;
    }
    function C() {
      const s = M();
      d(s), o.current && (u.current = setTimeout(C, p), p += 0.75), t < y && (t += 3);
    }
    C();
  }, [e, m]);
  h(() => {
    l === "auto" && i();
  }, []);
  const f = {};
  l === "hover" ? f.onMouseEnter = i : l === "click" && (f.onClick = i);
  const Q = ["charcycle", E ? "cycling" : "", q || ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ R("span", { className: Q, ...f, children: v });
}
export {
  U as CharCycle
};
