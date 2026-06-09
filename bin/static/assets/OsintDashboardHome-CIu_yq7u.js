import { j as p } from "./three-BECTMk9d.js";
import { a as c } from "./monaco-BSfMmt4N.js";
import { G as jt, H as qt, I as Nt, J as Jt, K as Tt, S as Yt, N as Xt, O as Re, C as Zt, u as es, p as ts, Q as ss, R as he, U as ns, V as rs, W as os, X as is, P as as, M as Lt, Y as ls, Z as cs, _ as us, $ as ds, E as fs, o as ps, T as ms } from "./main-BCk3siLD.js";
import { i as Ae, a as Ze, b as hs, t as gs, c as Mt, f as Ne, e as we, r as ue, d as At, g as dt, h as ws, j as $t, k as St, l as bs, m as Dt, n as xs, E as ks, o as Ss, p as vs, q as wt, s as ys, u as Pt, v as Rs, w as Cs, W as ft, x as _s, y as Is, R as pt, z as vt, A as Ws, B as yt, S as Es, D as js, G as Ns, I as Ts, C as Ls, F as Ms, H as Rt } from "./reportStyle-DinFtS7l.js";
import "./charts-Cx7lSOSv.js";
function As({ value: e, onChange: s, onSend: i, placeholder: d, disabled: m = false, isStreaming: g = false, onStop: h }) {
  const { addToast: S } = jt(), [x, M] = c.useState([]), I = m, P = c.useCallback(() => {
    if (I || g) return;
    const y = document.createElement("input");
    y.type = "file", y.multiple = true, y.onchange = (_) => {
      const T = _.target, L = Array.from(T.files || []);
      if (L.length === 0) return;
      const N = [];
      for (const R of L) {
        const H = qt(R);
        if (H) {
          S("error", `${R.name}: ${H}`);
          continue;
        }
        N.push({ id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`, name: R.name, type: "local", file: R, size: R.size, mimeType: R.type });
      }
      N.length !== 0 && (M((R) => [...R, ...N]), Nt("attachment_state", "dashboard local files queued", { added: N.map((R) => R.name) }));
    }, y.click();
  }, [I, g, S]), E = () => {
    I || !e.trim() && x.length === 0 || (i(x), M([]));
  };
  return p.jsxs("div", { className: "space-y-2", children: [x.length > 0 ? p.jsx(Jt, { attachments: x, onRemove: (y) => M((_) => _.filter((T) => T.id !== y)) }) : null, p.jsxs("div", { className: "relative overflow-visible rounded border border-zinc-200 bg-white shadow-sm transition-all duration-200 focus-within:border-zinc-300 dark:border-none dark:bg-white/5", children: [p.jsxs("div", { className: "flex items-end gap-2 overflow-hidden rounded-3xl px-2 py-2", children: [p.jsx("textarea", { value: e, onChange: (y) => s(y.target.value), onKeyDown: (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), E());
  }, placeholder: d, rows: 2, disabled: I, className: "min-h-[44px] flex-1 resize-none border-0 bg-transparent px-1 py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500" }), g ? p.jsx("button", { type: "button", onClick: h, className: "mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-200 text-red-600 transition-colors hover:bg-red-50 dark:border-red-400/30 dark:hover:bg-red-900/30", title: "\u505C\u6B62", children: p.jsx(Tt, { size: 16 }) }) : p.jsx("button", { type: "button", onClick: E, disabled: I || !e.trim() && x.length === 0, className: "mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition-colors hover:bg-slate-800 disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", title: "\u53D1\u9001", children: p.jsx(Yt, { size: 16 }) })] }), p.jsx("div", { className: "flex items-center gap-1 border-t border-zinc-200/70 bg-zinc-50/70 px-3 py-2 dark:border-white/10 dark:bg-white/5", children: p.jsxs("button", { type: "button", onClick: P, disabled: g || I, className: Re("flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors", g || I ? "cursor-not-allowed text-zinc-300 dark:text-white/30" : "text-zinc-500 hover:bg-zinc-200/50 hover:text-zinc-700 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"), children: [p.jsx(Xt, { size: 12 }), p.jsx("span", { className: "hidden sm:inline", children: "\u672C\u5730\u6587\u4EF6" })] }) })] })] });
}
const $s = /* @__PURE__ */ new Set(["fact_check", "info_research", "data_collection"]);
function Ve(e, s) {
  if (!e) return false;
  const i = s == null ? void 0 : s.find((d) => d.key === e);
  return (i == null ? void 0 : i.uses_w6) != null ? i.uses_w6 : $s.has(e);
}
const Ds = "active-v1", Ps = "session-";
function Ft(e) {
  return `osint-dashboard:${e}:`;
}
function Ut(e, s) {
  return `${Ft(e)}${Ps}${s}`;
}
function Fs(e) {
  return `${Ft(e)}${Ds}`;
}
function zt(e, s) {
  try {
    const i = localStorage.getItem(Ut(e, s));
    if (!i) return null;
    const d = JSON.parse(i);
    return !d || !Array.isArray(d.messages) ? null : d;
  } catch {
    return null;
  }
}
function Us(e, s, i) {
  try {
    const d = { messages: i.messages || [], reports: i.reports || [], activeReportId: i.activeReportId ?? null, followUpQuestions: i.followUpQuestions || [], skillKey: i.skillKey ?? null, sessionId: s, savedAt: Date.now() };
    localStorage.setItem(Ut(e, s), JSON.stringify(d)), localStorage.setItem(Fs(e), s);
  } catch {
  }
}
function zs(e) {
  return e.role === "user" && /执行：/.test(e.content);
}
function Ot(e) {
  return e.filter((s) => zs(s) ? !e.some((d) => d.id !== s.id && d.role === "form" && d.formStatus === "submitted" && d.skillName && s.content.includes(`\u6267\u884C\uFF1A${d.skillName}`) && (!d.formData || Ze(s.content, hs(d.skillName, d.formData)))) : true);
}
function Gt(e) {
  return e.filter((s) => s.role !== "user" || Ae(s.content) ? true : !e.some((d) => d.id !== s.id && d.role === "user" && Ae(d.content) && Ze(d.content, s.content)));
}
function Os(e) {
  return Gt(Ot(e));
}
function Gs(e) {
  return e ? e.role === "user" ? true : e.role === "form" && e.formStatus === "submitted" : false;
}
function qe(e) {
  const s = Os([...e]);
  let i = 0;
  for (; i < s.length; ) {
    if (s[i].role !== "w6") {
      i++;
      continue;
    }
    const d = i;
    if (s[d].w6Status === "running") {
      let h = -1;
      for (let S = d + 1; S < s.length; S++) {
        if (s[S].role === "user") {
          h = S;
          break;
        }
        if (s[S].role === "w6") break;
      }
      if (h >= 0) {
        const [S] = s.splice(d, 1);
        s.splice(h, 0, S), i = h + 1;
        continue;
      }
    }
    if (Gs(s[d - 1])) {
      i++;
      continue;
    }
    let m = -1;
    for (let h = d - 1; h >= 0; h--) {
      if (s[h].role === "user") {
        m = h;
        break;
      }
      if (s[h].role === "form" && s[h].formStatus === "submitted") {
        m = h;
        break;
      }
      if (s[h].role === "w6") break;
    }
    if (m < 0) {
      i++;
      continue;
    }
    if (m === d - 1) {
      i++;
      continue;
    }
    const [g] = s.splice(d, 1);
    s.splice(m + 1, 0, g), i = m + 2;
  }
  return s;
}
const Xe = 15e3;
function He() {
  return { lastRunningAt: null, lastSubAgentStatus: void 0 };
}
function Ct(e, s, i = Date.now()) {
  const d = (s == null ? void 0 : s.trim()) ?? "", m = { ...e, lastSubAgentStatus: d };
  return d === "running" && (m.lastRunningAt = i), m;
}
function Ks(e, s = Date.now()) {
  return { ...e, lastRunningAt: s };
}
function bt(e) {
  return e.some((s) => s.type !== "done" && s.type !== "stopped" && s.type !== "error");
}
function Bs(e) {
  if (e.role !== "w6" || e.w6Status !== "running") return false;
  const s = e.w6Events ?? [];
  return !q(s) && !bt(s);
}
function Je(e, s, i = [], d = Date.now(), m) {
  return q(m ?? []) ? true : s != null && d - s < Xe ? (e === "running" || !q(i), false) : q(i) ? true : e === "running" || s == null ? false : d - s >= Xe;
}
function Hs(e) {
  return e.some((s) => s.role === "w6" && s.w6Status === "running");
}
const Qs = /* @__PURE__ */ new Set(["log", "tool", "token", "status", "phase", "done", "error", "stopped"]);
function q(e) {
  return e.some((s) => s.type === "done" || s.type === "stopped" || s.type === "error");
}
function Kt(e) {
  return e.some((s) => s.type === "error") ? "error" : e.some((s) => s.type === "stopped") ? "stopped" : "done";
}
function $e(e, s = null) {
  return e.map((i) => {
    if (i.role !== "w6" || i.w6Status !== "running" || s && i.id === s) return i;
    const d = i.w6Events ?? [], m = q(d) ? Kt(d) : "running";
    return { ...i, w6Status: m, w6LastLine: i.w6LastLine || "\u672C\u8F6E\u8C03\u7814\u5DF2\u7ED3\u675F" };
  });
}
function Bt(e, s = null) {
  return e.map((i) => {
    if (i.role !== "w6" || i.w6Status !== "running" || s && i.id === s) return i;
    const d = i.w6Events ?? [], m = q(d) ? Kt(d) : "done";
    return { ...i, w6Status: m, w6LastLine: i.w6LastLine || "\u672C\u8F6E\u8C03\u7814\u5DF2\u7ED3\u675F" };
  });
}
function Te(e, s = null) {
  const i = e.filter((m) => m.role === "w6" && m.w6Status === "running");
  if (i.length <= 1) return e;
  const d = s && i.some((m) => m.id === s) ? s : i[i.length - 1].id;
  return Bt(e, d);
}
function mt(e) {
  var _a;
  return ((_a = [...e].reverse().find((i) => i.role === "w6" && i.w6Status === "running")) == null ? void 0 : _a.id) ?? null;
}
function xt(e) {
  for (let s = e.length - 1; s >= 0; s--) if (e[s].role === "w6") return s;
  return -1;
}
function Me(e) {
  return (e == null ? void 0 : e.length) ? e.map((s) => ({ type: s.type, message: s.message, token: s.token, progress: s.progress, timestamp: s.timestamp })).filter((s) => Qs.has(s.type)) : [];
}
function Vs(e) {
  for (let s = e.length - 1; s >= 0; s--) if (e[s].progress != null) return e[s].progress;
  return e.some((s) => s.type === "done") ? 100 : 0;
}
function qs(e) {
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s].message || e[s].token;
    if (i == null ? void 0 : i.trim()) return i.trim().slice(0, 120);
  }
  return e.some((s) => s.type === "done") ? "\u8C03\u7814\u5B8C\u6210" : e.some((s) => s.type === "stopped") ? "\u5DF2\u624B\u52A8\u505C\u6B62 W6 \u8C03\u7814" : e.some((s) => s.type === "error") ? "W6 \u6267\u884C\u51FA\u9519" : "";
}
function ht(e, s = []) {
  var _a, _b;
  if (!e) return q(s);
  if (e.sub_agent_status === "running" || e.w6_stream_active) return false;
  if (q(s)) return true;
  if (!((_a = e.last_html_resource_id) == null ? void 0 : _a.trim())) return false;
  const i = ((_b = e.sub_agent_status) == null ? void 0 : _b.trim()) ?? "";
  return i === "" || i === "idle" || i === "done";
}
function Js(e, s = [], i, d = null, m = Date.now()) {
  return s.some((g) => g.type === "error") ? "error" : s.some((g) => g.type === "stopped") ? "stopped" : s.some((g) => g.type === "done") || (i == null ? void 0 : i.trim()) ? "done" : e === "running" ? "running" : e === "error" ? "error" : Je(e, d, s, m) ? "done" : "running";
}
function Ys(e, s) {
  return s.length >= ((e == null ? void 0 : e.length) ?? 0) ? s : (e == null ? void 0 : e.length) ? e : s;
}
function _t(e, s, i = null, d = Date.now()) {
  if (!s) return e;
  const m = Me(s.stream_events), g = (i == null ? void 0 : i.lastRunningAt) ?? null, h = gt(s, g, d), S = h ? mt(e) : null;
  let x = $e(e, S);
  const M = xt(x);
  if (M < 0) return x;
  const I = x[M], P = g != null && d - g < Xe, E = Bs(I), y = q(m) && !bt(m), _ = E && P && y ? I.w6Events ?? [] : Ys(I.w6Events, m), T = ht(s, _);
  let L = Js(s.sub_agent_status, _, s.last_html_resource_id, g, d);
  E && P && L === "done" && !q(I.w6Events ?? []) && (L = "running");
  const N = (h || !T) && L === "done" && !T && h ? "running" : L, R = (N === "done" ? qs(_) : "") || I.w6LastLine || (N === "done" ? "\u8C03\u7814\u5B8C\u6210" : "W6 \u8C03\u7814\u8FDB\u884C\u4E2D\u2026");
  return x = x.map((H, J) => J === M ? { ...H, w6Status: N, w6Events: _, w6Progress: Vs(_), w6LastLine: R, previewResourceId: T && s.last_html_resource_id && N === "done" ? s.last_html_resource_id : H.previewResourceId } : H), T && (x = $e(x, null)), x;
}
function gt(e, s = null, i = Date.now()) {
  if (!e) return false;
  if (e.sub_agent_status === "running" || e.w6_stream_active || s != null && i - s < Xe) return true;
  const d = Me(e.stream_events);
  return q(d), false;
}
function Xs(e) {
  if (Hs(e)) return false;
  const s = xt(e);
  if (s < 0) return false;
  const i = e[s].w6Status;
  return i === "done" || i === "stopped" || i === "error";
}
const It = /* @__PURE__ */ new Set(["form", "guided_topics", "w6"]);
function Zs(e, s) {
  return It.has(e.role) || It.has(s.role) ? e.id === s.id : e.role !== s.role ? false : e.role === "user" && Ze(e.content, s.content) ? true : e.content.trim() !== s.content.trim() ? false : Math.abs((e.timestamp || 0) - (s.timestamp || 0)) < 1e4;
}
function en(e) {
  return Gt(Ot(e));
}
function Ht(e, s) {
  if (s.length === 0) return e;
  if (e.length === 0) return s;
  const m = [...s.some((h) => h.role === "w6" && h.w6Status === "running") ? e.filter((h) => h.role !== "w6") : e], g = new Set(m.map((h) => h.id));
  for (const h of s) {
    if (g.has(h.id)) continue;
    const S = m.findIndex((x) => Zs(x, h));
    if (S >= 0) {
      const x = m[S];
      h.role === "user" && Ae(h.content) && !Ae(x.content) && (m[S] = { ...h, timestamp: x.timestamp || h.timestamp }, g.add(h.id));
      continue;
    }
    m.push(h), g.add(h.id);
  }
  return m.sort((h, S) => (h.timestamp || 0) - (S.timestamp || 0));
}
function tn(e, s) {
  return Ye(Ht(e, s));
}
function sn(e) {
  let s = -1;
  for (let i = e.length - 1; i >= 0; i--) if (e[i].role === "guided_topics" && e[i].guidedTopicsStatus !== "used") {
    s = i;
    break;
  }
  return s < 0 ? e : e.filter((i, d) => i.role !== "guided_topics" || i.guidedTopicsStatus === "used" || d === s);
}
function Ye(e, s = null) {
  const i = en(e), d = Te(i, s), m = $e(d, s), g = sn(m);
  return qe(g);
}
function nn(e) {
  const s = e.trim();
  return s ? /(改版式|改成|改为|调整.{0,12}(排版|布局|样式|风格|配色|颜色|字体|章节)|优化.{0,12}(排版|布局|样式|风格|配色|章节)|修改.{0,12}(排版|布局|样式|风格|配色|章节)|换成|背景色?|配色|字体|排版|布局|间距|样式|风格|字号|边距|对齐|居中|加粗|缩小|放大|报告排版|视觉风格|章节结构)/.test(s) : false;
}
let rn = 0;
function ge() {
  return `msg-${++rn}-${Date.now()}`;
}
function Wt(e) {
  return e.map((s) => s.text).join("\0");
}
function Et(e) {
  const s = e.messages ?? [];
  return s.length === 0 ? [] : s.filter((i) => {
    var _a;
    return i.role === "w6" || ((_a = i.content) == null ? void 0 : _a.trim());
  }).map((i, d) => {
    const m = i.role === "user" || i.role === "assistant" || i.role === "system" || i.role === "w6" ? i.role : "assistant", g = Date.now() - s.length * 1e3;
    return { id: `srv-${d}-${i.timestamp ?? g + d}`, role: m, content: i.content, timestamp: i.timestamp && i.timestamp > 0 ? i.timestamp : g + d, followUpQuestions: i.follow_up_questions ?? null, ...m === "w6" ? { w6Status: "done", w6LastLine: i.content || "W6 \u8C03\u7814\u5DF2\u5B8C\u6210", w6Events: [] } : {} };
  });
}
function Qt(e) {
  return e === "document";
}
function ye(e, s, i, d) {
  const m = wt(e);
  return { id: `${m}#${i}`, url: m, resourceId: e, title: s, timestamp: Date.now(), kind: "html", markdown: d };
}
function Le(e, s, i, d) {
  const m = e ? wt(e) : "";
  return { id: d ? `md-inline#${i}` : `${m || e}#md-${i}`, url: m, resourceId: e, title: s, timestamp: Date.now(), kind: "markdown", markdown: d };
}
async function Qe(e) {
  const s = await Pt(e);
  if (s.length === 0) return { reports: [], activeReportId: null };
  const i = s.map((g, h) => {
    const S = we(g.url || g.id), x = ue(void 0, g.title || "\u62A5\u544A");
    return Qt(g.type) ? Le(S, x, `r${h}`) : ye(S || g.url || g.id, x, `r${h}`);
  }), d = i.filter((g) => g.kind === "html"), m = d.length > 0 ? d[d.length - 1].id : i[i.length - 1].id;
  return { reports: i, activeReportId: m };
}
function on(e, s = [], i) {
  const [d, m] = c.useState([]), [g, h] = c.useState([]), [S, x] = c.useState(null), [M, I] = c.useState(false), [P, E] = c.useState(""), [y, _] = c.useState([]), [T, L] = c.useState(null), [N, R] = c.useState(false), [H, J] = c.useState(0), [Q, de] = c.useState(null), A = c.useRef(null), G = c.useRef(""), Y = c.useRef(""), D = c.useRef(""), l = c.useRef(null), W = c.useRef(null), X = c.useRef(null), be = c.useRef(null), De = c.useRef(0), V = c.useRef(null), $ = c.useRef(He()), K = c.useRef(null), Pe = c.useRef([]), [xe, B] = c.useState(null), Ce = c.useRef(i);
  Ce.current = i;
  const Z = c.useCallback((r) => {
    r && ($.current = Ct($.current, r.sub_agent_status));
  }, []), se = c.useCallback((r, f) => {
    if (!f || !r) {
      K.current = null, R(false);
      return;
    }
    R(true), K.current !== r && (K.current = r, J((a) => a + 1));
  }, []), fe = c.useCallback((r = []) => {
    const f = D.current;
    return f ? (m((a) => {
      const t = a.map((n) => n.id === f && n.role === "w6" && n.w6Status === "running" ? { ...n, w6Status: "done", w6Events: r.length > 0 ? r : n.w6Events, w6LastLine: n.w6LastLine || "\u8C03\u7814\u5B8C\u6210" } : n);
      return $e(t, null);
    }), D.current = "", B(null), K.current = null, R(false), true) : false;
  }, []), ee = c.useCallback((r, f) => {
    var _a, _b;
    const a = gs(f);
    if (!a) return;
    const t = Ce.current, n = (_a = t == null ? void 0 : t.getSessionTitle) == null ? void 0 : _a.call(t, r);
    n != null && !Mt(n) || ((_b = t == null ? void 0 : t.syncSessionTitle) == null ? void 0 : _b.call(t, r, a));
  }, []), U = c.useCallback(() => {
    be.current && (clearInterval(be.current), be.current = null);
  }, []), ke = c.useCallback((r, f) => {
    U(), be.current = setInterval(() => {
      (async () => {
        try {
          if (l.current !== r) {
            U();
            return;
          }
          const a = await Ne(r);
          if (l.current !== r) return;
          if (!(a == null ? void 0 : a.discuss_active)) {
            U();
            const t = Et(a ?? { messages: [] }), n = tn(t, (f == null ? void 0 : f.messages) ?? []);
            m(Ye(n)), _((a == null ? void 0 : a.follow_ups) ?? []), I(false), E("");
            try {
              const { reports: o, activeReportId: u } = await Qe(r);
              o.length > 0 && (h(o), x(u));
            } catch {
            }
          }
        } catch {
        }
      })();
    }, 2500);
  }, [U]), pe = c.useCallback(() => {
    const r = e, f = l.current;
    !r || !f || V.current || d.length === 0 && g.length === 0 || Us(r, f, { messages: d, reports: g, activeReportId: S, followUpQuestions: y, skillKey: W.current });
  }, [e, d, g, S, y]);
  c.useEffect(() => {
    pe();
  }, [pe]), c.useEffect(() => {
    Pe.current = d;
  }, [d]);
  const z = c.useCallback((r) => {
    const f = { ...r, id: ge(), timestamp: Date.now() };
    return m((a) => qe([...a, f])), f.id;
  }, []), ne = c.useCallback((r) => {
    const f = Date.now(), a = (r == null ? void 0 : r.trim()) ?? "", t = a ? { id: ge(), role: "user", content: a, timestamp: f } : null, n = { id: ge(), role: "w6", content: "", timestamp: t ? f + 1 : f, w6Status: "running", w6Progress: 0, w6LastLine: "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026", w6Events: [] };
    let o = n.id;
    return m((u) => {
      for (let C = u.length - 1; C >= 0; C--) {
        const v = u[C];
        if (v.role !== "w6" || v.w6Status !== "running") continue;
        if (!a) break;
        const ve = u[C - 1];
        if ((ve == null ? void 0 : ve.role) === "user" && Ze(ve.content, a)) return o = v.id, u;
        break;
      }
      const b = u.filter((C) => !(C.role === "guided_topics" && C.guidedTopicsStatus !== "used")), w = Bt(b, null);
      let k = f;
      for (const C of w) C.timestamp >= k && (k = C.timestamp + 1);
      if (t) t.timestamp = k, n.timestamp = k + 1;
      else {
        for (let C = w.length - 1; C >= 0; C--) {
          const v = w[C];
          if (v.role === "form" && v.formStatus === "submitted") {
            n.timestamp = Math.max(k, v.timestamp + 1);
            break;
          }
        }
        n.timestamp <= k && (n.timestamp = k);
      }
      o = n.id;
      const j = t ? [...w, t, n] : [...w, n];
      return qe(j);
    }), D.current = o, B(o), o === n.id ? ($.current = Ct(He(), "running"), K.current = o, R(true), J((u) => u + 1)) : R(true), o;
  }, []), Se = c.useCallback((r) => ne(r), [ne]), Fe = c.useCallback((r) => {
    const f = D.current;
    if (!f) return;
    const a = r.events.some((n) => n.type !== "done" && n.type !== "stopped" && n.type !== "error");
    r.status === "running" && a && ($.current = Ks($.current));
    let t = "running";
    if (r.status === "error" ? t = "error" : r.events.some((n) => n.type === "stopped") ? t = "stopped" : (r.events.some((n) => n.type === "done") && bt(r.events) || Je($.current.lastSubAgentStatus, $.current.lastRunningAt, r.events, Date.now(), r.events)) && (t = "done"), m((n) => {
      const o = n.map((u) => u.id === f ? { ...u, w6Status: t, w6Progress: r.progress, w6LastLine: r.lastLine, w6Events: r.events } : u);
      return t === "done" || t === "error" || t === "stopped" ? $e(o, null) : o;
    }), (t === "done" || t === "error" || t === "stopped") && (D.current = "", B(null), K.current = null, t === "done")) {
      const n = l.current;
      n && Qe(n).then(({ reports: o, activeReportId: u }) => {
        o.length > 0 && (h(o), x(u));
      });
    }
  }, []), O = c.useCallback((r) => {
    G.current += r;
    const f = Y.current;
    m((a) => {
      const t = a.findIndex((o) => o.id === f);
      if (t === -1) return a;
      const n = [...a];
      return n[t] = { ...n[t], content: G.current }, n;
    });
  }, []), Ue = c.useCallback(() => (r) => {
    var _a, _b, _c, _d;
    const f = !!D.current;
    switch (r.type) {
      case "text_delta":
        f || O(r.delta || "");
        break;
      case "phase":
        f || E(r.message || r.phase || "");
        break;
      case "form_request":
        if (r.schema) {
          const a = r.message || "\u8BF7\u8865\u5145\u4FE1\u606F";
          m((t) => {
            if (t.some((u) => u.role === "form" && u.formStatus === "pending" && !u.skillKey)) return t;
            const o = { id: ge(), role: "form", content: a, timestamp: Date.now(), formPrompt: a, formSchema: r.schema, formStatus: "pending", stepMode: false };
            return [...t, o];
          });
        }
        break;
      case "report_md":
        ((_a = r.markdown) == null ? void 0 : _a.trim()) && (X.current = { markdown: r.markdown, title: r.title }, h((a) => a.some((t) => t.kind === "markdown" && t.markdown === r.markdown) ? a : [...a, Le("", ue(r.markdown, r.title || r.roundTitle), `sse-${Date.now()}`, r.markdown)]));
        break;
      case "report_html":
        if (r.url || r.id) {
          const a = r.url || r.id || "", t = we(a), n = X.current, o = ye(t || a, ue(n == null ? void 0 : n.markdown, r.title || r.roundTitle || "\u672A\u547D\u540D\u62A5\u544A"), String(Date.now()), n == null ? void 0 : n.markdown);
          if (h((u) => [...u, o]), x(o.id), t) {
            const u = D.current;
            m((b) => {
              let w = u ? b.findIndex((j) => j.id === u) : -1;
              if (w < 0 && (w = b.reduce((j, C, v) => C.role === "w6" ? v : j, -1)), w < 0) return b;
              const k = [...b];
              return k[w] = { ...k[w], previewResourceId: t }, k;
            });
          }
          if ((_b = n == null ? void 0 : n.markdown) == null ? void 0 : _b.trim()) {
            const u = Le("", ue(n.markdown, r.title || r.roundTitle), `paired-${Date.now()}`, n.markdown);
            h((b) => b.some((k) => k.kind === "markdown" && (k.markdown === n.markdown || k.title === u.title)) ? b : [...b, u]), X.current = null;
          }
        }
        break;
      case "follow_up":
        ((_c = r.questions) == null ? void 0 : _c.length) && f && _(r.questions);
        break;
      case "session":
        if (r.sessionId) {
          const a = String(r.sessionId);
          l.current = a, L(a), Ve(W.current, s) && R(true);
        }
        break;
      case "session_title":
        if ((_d = r.title) == null ? void 0 : _d.trim()) {
          const a = String(r.sessionId || l.current || "").trim();
          a && ee(a, r.title);
        }
        break;
      case "error":
        if (f) {
          const a = D.current;
          m((t) => t.map((n) => n.id === a ? { ...n, w6Status: "error", w6LastLine: r.message || "W6 \u6267\u884C\u51FA\u9519" } : n)), D.current = "", B(null);
        } else O(`

\u26A0\uFE0F ${r.message}`);
        break;
    }
  }, [O, ee, s]), re = c.useCallback(async (r) => {
    const f = Ue(), a = new TextDecoder();
    let t = "";
    for (; ; ) {
      const { done: n, value: o } = await r.read();
      if (n) break;
      t += a.decode(o, { stream: true });
      const u = t.split(`
`);
      t = u.pop() || "";
      for (const b of u) {
        if (!b.startsWith("data: ")) continue;
        const w = b.slice(6).trim();
        if (w) try {
          f(JSON.parse(w));
        } catch {
        }
      }
    }
  }, [Ue]), ze = c.useCallback(async (r, f, a, t, n, o) => {
    const u = t.trim();
    if (!u) throw new Error("session_id required before starting W6 chat");
    if (!r.trim()) throw new Error("skill_key required before starting W6 chat");
    h([]), x(null), _([]), G.current = "", W.current = r, de(r), l.current = u, L(u), ee(u, At(a, f) || f), Ve(r, s) || R(false), I(true), ne(), Y.current = "";
    const b = new AbortController();
    A.current = b;
    try {
      const w = await dt("/osint-dashboard/chat/start", ws({ sessionId: u, skillKey: r, formData: a, renderedPrompt: n, reportStyle: o }), b.signal);
      await re(w);
    } catch (w) {
      if (w.name === "AbortError") return;
      O(`

\u274C \u9519\u8BEF: ${w.message}`);
    } finally {
      I(false), E(""), A.current = null;
    }
  }, [O, ne, ee, re]), _e = c.useCallback((r, f) => {
    m((a) => a.map((t) => t.id === r && t.role === "form" ? { ...t, formStatus: "submitted", formData: f } : t));
  }, []), et = c.useCallback((r) => {
    m((f) => f.map((a) => a.id === r && a.role === "form" && a.formStatus === "pending" ? { ...a, formStatus: "cancelled" } : a));
  }, []), Oe = c.useCallback(() => {
    m((r) => r.map((f) => f.role === "form" && f.formStatus === "pending" ? { ...f, formStatus: "cancelled" } : f));
  }, []), Ge = c.useCallback((r, f) => (Oe(), z({ role: "form", content: `${r.name} \u2014 \u8BF7\u586B\u5199\u53C2\u6570`, skillKey: r.key, skillName: r.name, skillId: r.id, formSchema: { fields: f }, formStatus: "pending", stepMode: true })), [z, Oe]), Ie = c.useCallback(async (r, f, a) => {
    a && _e(a, r), I(true);
    const t = $t(r);
    Se(St(`\u8865\u5145\u4FE1\u606F${t ? `
${t}` : ""}`)), Y.current = "";
    const n = new AbortController();
    A.current = n;
    try {
      const o = l.current;
      if (!o) throw new Error("session_id required");
      const u = await dt("/osint-dashboard/chat/respond", bs({ sessionId: o, formData: r, renderedPrompt: f }), n.signal);
      await re(u);
    } catch (o) {
      if (o.name === "AbortError") return;
      O(`

\u274C ${o.message}`);
    } finally {
      I(false), E(""), A.current = null;
    }
  }, [O, Se, _e, re]), oe = c.useCallback(async (r, f) => {
    const a = l.current;
    if (!a) {
      z({ role: "system", content: "\u26A0\uFE0F \u8BF7\u5148\u5B8C\u6210\u4E00\u4E2A\u7814\u7A76\u4EFB\u52A1\uFF0C\u518D\u5F00\u59CB\u8FFD\u95EE" });
      return;
    }
    I(true), Se(r), ee(a, Dt(f)), Y.current = "", G.current = "";
    const t = new AbortController();
    A.current = t;
    try {
      const n = await dt("/osint-dashboard/chat/message", xs({ sessionId: a, message: f }), t.signal);
      await re(n);
    } catch (n) {
      if (n.name === "AbortError") return;
      O(`

\u274C ${n.message}`);
    } finally {
      I(false), E(""), A.current = null;
    }
  }, [z, O, Se, ee, re]), We = c.useCallback(async (r, f) => {
    const a = l.current;
    if (!a) {
      z({ role: "system", content: "\u26A0\uFE0F \u8BF7\u5148\u5B8C\u6210\u4E00\u4E2A\u7814\u7A76\u4EFB\u52A1\uFF0C\u518D\u5F00\u59CB\u8FFD\u95EE" });
      return;
    }
    const t = !!(f == null ? void 0 : f.trim());
    I(true), E(t ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u6B63\u5728\u5206\u6790\u62A5\u544A\u2026"), z({ role: "user", content: r });
    const n = z({ role: "assistant", content: "" });
    Y.current = n, G.current = "";
    const o = new AbortController();
    A.current = o;
    let u;
    t && (u = setTimeout(() => o.abort(), ks));
    try {
      const b = await Ss("/osint-dashboard/chat/discuss", vs({ sessionId: a, message: r, targetResourceId: t ? f : void 0 }), o.signal), w = (b.reply ?? "").trim() || "\uFF08\u65E0\u56DE\u590D\uFF09";
      if (G.current = w, m((k) => {
        const j = k.findIndex((v) => v.id === n);
        if (j === -1) return k;
        const C = [...k];
        return C[j] = { ...C[j], content: w, previewResourceId: b.edited && b.html_resource_id ? b.html_resource_id : void 0 }, C;
      }), b.edited && b.html_resource_id) {
        const k = wt(b.html_resource_id), j = S;
        h((C) => C.map((v) => j && v.id !== j || !j && C.length > 0 && v.id !== C[C.length - 1].id ? v : { ...v, url: `${k}${k.includes("?") ? "&" : "?"}t=${Date.now()}`, resourceId: b.html_resource_id, timestamp: Date.now() }));
      }
    } catch (b) {
      if (b.name === "AbortError") {
        t && O(`

\u274C \u62A5\u544A\u6539\u7248\u5F0F\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u5C1D\u8BD5\u66F4\u7B80\u77ED\u7684\u4FEE\u6539\u6307\u4EE4\u3002`);
        return;
      }
      O(`

\u274C ${b.message}`);
    } finally {
      u !== void 0 && clearTimeout(u), I(false), E(""), A.current = null;
    }
  }, [z, O, S]), Ee = c.useCallback(async (r) => {
    if (!r.trim() || M) return;
    const f = St(r.trim());
    await oe(f, r.trim());
  }, [M, oe]), tt = c.useCallback(async (r) => {
    var _a;
    if (!r.trim() || M) return;
    const f = r.trim();
    if (Ae(f)) {
      await oe(f, ys(f));
      return;
    }
    const a = S ? g.find((o) => o.id === S) : g[g.length - 1], t = ((_a = a == null ? void 0 : a.resourceId) == null ? void 0 : _a.trim()) || we((a == null ? void 0 : a.url) || ""), n = t && nn(f) ? t : void 0;
    await We(f, n);
  }, [M, oe, We, S, g]), st = c.useCallback(async (r) => {
    var _a, _b, _c, _d, _e2, _f, _g;
    const f = ++De.current;
    V.current = r, (_a = A.current) == null ? void 0 : _a.abort(), U(), I(false), E(""), G.current = "", Y.current = "", D.current = "", B(null), $.current = He(), K.current = null, R(false), J(0), m([]), h([]), x(null), _([]), l.current = r, L(r);
    const a = () => De.current === f && V.current === r, t = e ? zt(e, r) : null;
    let n = null;
    try {
      n = await Ne(r);
    } catch {
    }
    if (!a()) return;
    const o = n ? Et(n) : [], u = !!((_b = t == null ? void 0 : t.messages) == null ? void 0 : _b.length);
    u && o.length;
    const b = ((_c = n == null ? void 0 : n.skill_key) == null ? void 0 : _c.trim()) || ((_d = t == null ? void 0 : t.skillKey) == null ? void 0 : _d.trim()) || null;
    W.current = b, de(b), Z(n);
    const w = $.current.lastRunningAt, k = gt(n, w), j = Me(n == null ? void 0 : n.stream_events), C = ht(n, j);
    let v = [];
    if (u && t) v = o.length > 0 ? Ht(o, t.messages) : t.messages, h((t.reports ?? []).map((F) => ({ ...F, resourceId: F.resourceId || we(F.url), kind: F.kind || "html" }))), x(t.activeReportId), _(((_e2 = n == null ? void 0 : n.follow_ups) == null ? void 0 : _e2.length) ? n.follow_ups : t.followUpQuestions ?? []);
    else if (o.length > 0) v = o, _((n == null ? void 0 : n.follow_ups) ?? []);
    else {
      const F = k || !C ? "\u5DF2\u91CD\u8FDE\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF0CW6 \u5B50 Agent \u72B6\u6001\u89C1\u4E0B\u65B9\u8FDB\u5EA6\u6761\u3002" : "\u5DF2\u52A0\u8F7D\u4F1A\u8BDD\u3002\u53EF\u7EE7\u7EED\u8FFD\u95EE\u6216\u9009\u62E9\u6280\u80FD\u5F00\u59CB\u65B0\u4EFB\u52A1\u3002";
      v = [{ id: ge(), role: "system", content: F, timestamp: Date.now() }], _((n == null ? void 0 : n.follow_ups) ?? []);
    }
    const ve = _t(v, n, $.current), kt = Te(ve);
    let te = mt(kt);
    const Vt = Te(kt, te);
    let ie = Ye(Vt, te);
    if (!a()) return;
    if (k && !te) {
      const F = xt(ie), Ke = F >= 0 ? ie[F] : null;
      if ((Ke == null ? void 0 : Ke.w6Status) === "running") {
        const ae = Ke.id;
        ie = ie.map((le, Be) => {
          var _a2;
          return Be === F ? { ...le, w6Status: "running", w6Events: j.length >= (((_a2 = le.w6Events) == null ? void 0 : _a2.length) ?? 0) ? j : le.w6Events ?? j, w6LastLine: le.w6LastLine || "W6 \u5B50 Agent \u8FD0\u884C\u4E2D\u2026" } : le;
        }), te = ae;
      } else {
        let ae = Date.now();
        for (const Be of ie) Be.timestamp >= ae && (ae = Be.timestamp + 1);
        const le = ge();
        ie = qe([...ie, { id: le, role: "w6", content: "", timestamp: ae, w6Status: "running", w6Progress: 0, w6LastLine: "W6 \u5B50 Agent \u8FD0\u884C\u4E2D\u2026", w6Events: j }]), te = le;
      }
    }
    if (!a() || (m(ie), D.current = te ?? "", B(te), Ve(b, s) ? se(te, !!te && (k || !C)) : se(null, false), !a())) return;
    if (n == null ? void 0 : n.discuss_active) {
      const F = n.discuss_mode === "edit_html" ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u5206\u6790\u62A5\u544A\u4E2D\u2026";
      E(F), I(true), ke(r, t);
    }
    if (!u || (((_f = t == null ? void 0 : t.reports) == null ? void 0 : _f.length) ?? 0) === 0 || C) try {
      const { reports: F, activeReportId: Ke } = await Qe(r);
      if (!a()) return;
      if (F.length > 0) h(F), x(Ke);
      else if ((_g = n == null ? void 0 : n.last_html_resource_id) == null ? void 0 : _g.trim()) {
        const ae = ye(n.last_html_resource_id.trim(), "\u62A5\u544A", `restore-${Date.now()}`);
        h([ae]), x(ae.id);
      }
    } catch {
    }
    a() && (V.current = null);
  }, [e, ke, U, s, Z, se]), nt = c.useCallback(async () => {
    var _a, _b;
    const r = l.current;
    if (!r || V.current) return;
    let f = null;
    try {
      f = await Ne(r);
    } catch {
      return;
    }
    if (!f || l.current !== r || V.current) return;
    Z(f);
    const a = Me(f.stream_events), t = ht(f, a), n = gt(f, $.current.lastRunningAt);
    let o = null;
    if (m((b) => {
      var _a2;
      const w = _t(b, f, $.current), k = Te(w, D.current || null);
      o = mt(k);
      let j = Te(k, o);
      const C = o ? ((_a2 = j.find((v) => v.id === o)) == null ? void 0 : _a2.w6Events) ?? [] : [];
      return o && Je(f.sub_agent_status, $.current.lastRunningAt, a, Date.now(), C) && (j = j.map((v) => {
        var _a3;
        return v.id === o && v.role === "w6" && v.w6Status === "running" ? { ...v, w6Status: "done", w6Events: a.length >= (((_a3 = v.w6Events) == null ? void 0 : _a3.length) ?? 0) ? a : v.w6Events ?? a, w6LastLine: v.w6LastLine || "\u8C03\u7814\u5B8C\u6210" } : v;
      }), o = null), Ye(j, o);
    }), !(l.current !== r || (D.current = o ?? "", B(o), ((_a = f.follow_ups) == null ? void 0 : _a.length) && _(f.follow_ups), se(o, !!o && (n || !t)), !t || l.current !== r))) try {
      const { reports: b, activeReportId: w } = await Qe(r);
      if (l.current !== r) return;
      if (b.length > 0) h(b), x(w);
      else if ((_b = f.last_html_resource_id) == null ? void 0 : _b.trim()) {
        const k = ye(f.last_html_resource_id.trim(), "\u62A5\u544A", `sync-${Date.now()}`);
        h([k]), x(k.id);
      }
    } catch {
    }
  }, [se, Z, fe]);
  c.useEffect(() => {
    if (!xe || V.current) return;
    const r = setInterval(() => {
      (async () => {
        var _a;
        const f = l.current;
        if (!(!f || V.current)) try {
          const a = await Ne(f);
          if (l.current !== f) return;
          Z(a);
          const t = Me(a == null ? void 0 : a.stream_events), n = D.current, o = n ? ((_a = Pe.current.find((u) => u.id === n)) == null ? void 0 : _a.w6Events) ?? [] : [];
          Je(a == null ? void 0 : a.sub_agent_status, $.current.lastRunningAt, t, Date.now(), o) && fe(t);
        } catch {
        }
      })();
    }, 5e3);
    return () => clearInterval(r);
  }, [xe, Z, fe]);
  const je = c.useCallback(() => {
    var _a;
    (_a = A.current) == null ? void 0 : _a.abort(), U(), m([]), h([]), x(null), _([]), E(""), G.current = "", Y.current = "", D.current = "", B(null), $.current = He(), K.current = null, l.current = null, W.current = null, de(null), L(null), R(false), J(0), I(false);
  }, [U]), rt = c.useCallback((r) => {
    l.current = r, L(r);
  }, []), ot = c.useCallback((r) => {
    h((f) => f.filter((a) => a.id !== r)), x((f) => f === r ? null : f);
  }, []), me = c.useCallback((r) => {
    const f = r.resourceId || we(r.url), a = { ...r, resourceId: f, kind: r.kind || "html" };
    h((t) => {
      var _a;
      return a.resourceId && t.some((n) => n.resourceId === a.resourceId && n.kind === a.kind) || a.kind === "markdown" && ((_a = a.markdown) == null ? void 0 : _a.trim()) && t.some((n) => n.kind === "markdown" && n.markdown === a.markdown) ? t : [...t, a];
    }), a.kind === "html" && x(a.id);
  }, []), it = c.useCallback(async (r) => {
    var _a, _b;
    ((_a = r.followUps) == null ? void 0 : _a.length) && _(r.followUps), ((_b = r.markdown) == null ? void 0 : _b.trim()) && me(Le("", ue(r.markdown, r.roundTitle), `w6-md-${Date.now()}`, r.markdown));
    const f = r.reportUrl || r.previewFile;
    if (f) {
      const t = we(f);
      me(ye(t, ue(r.markdown, r.roundTitle || "\u62A5\u544A"), `w6-${Date.now()}`, r.markdown)), t && m((n) => {
        const o = n.reduce((b, w, k) => w.role === "w6" ? k : b, -1);
        if (o < 0) return n;
        const u = [...n];
        return u[o] = { ...u[o], previewResourceId: t }, u;
      });
      return;
    }
    const a = l.current;
    if (a) try {
      const t = await Pt(a);
      if (t.length === 0) return;
      for (const n of t) {
        const o = we(n.url || n.id);
        Qt(n.type) ? me(Le(o, ue(void 0, n.title || "\u62A5\u544A"), `w6-fb-${n.id}`)) : me(ye(o, ue(void 0, n.title || "\u62A5\u544A"), `w6-fb-${n.id}`));
      }
    } catch {
    }
  }, [me]), at = c.useCallback(() => {
    var _a;
    (_a = A.current) == null ? void 0 : _a.abort(), U(), I(false), E("");
  }, [U]);
  c.useEffect(() => () => U(), [U]);
  const lt = c.useCallback((r, f) => {
    const a = (f == null ? void 0 : f.map((n) => n.name).filter(Boolean)) ?? [], t = a.length > 0 ? `${r.trim()}

\u{1F4CE} ${a.join("\u3001")}`.trim() : r.trim();
    z({ role: "user", content: t });
  }, [z]), ct = c.useCallback((r) => {
    if (r.length === 0) return;
    const f = Wt(r);
    m((a) => {
      if (a.findIndex((w) => w.role === "guided_topics" && Wt(w.guidedTopics ?? []) === f) >= 0) return a;
      let n = -1;
      for (let w = a.length - 1; w >= 0; w--) if (a[w].role === "guided_topics" && a[w].guidedTopicsStatus !== "used") {
        n = w;
        break;
      }
      if (n >= 0) return a.map((w, k) => k === n ? { ...w, guidedTopics: r, timestamp: Date.now() } : w);
      let o = a.length;
      for (let w = a.length - 1; w >= 0; w--) {
        const k = a[w];
        if (k.role === "w6" && (k.w6Status === "done" || k.w6Status === "stopped" || k.w6Status === "error")) {
          o = w + 1;
          break;
        }
      }
      const u = { id: ge(), role: "guided_topics", content: "\u6DF1\u5EA6\u8C03\u7814\u5EFA\u8BAE", timestamp: Date.now(), guidedTopics: r, guidedTopicsStatus: "active" }, b = [...a];
      return b.splice(o, 0, u), b;
    });
  }, []), ut = c.useCallback((r) => {
    m((f) => f.map((a) => a.id === r && a.role === "guided_topics" ? { ...a, guidedTopicsStatus: "used" } : a));
  }, []);
  return { messages: d, reports: g, activeReportId: S, isStreaming: M, currentPhase: P, followUpQuestions: y, sessionId: T, w6StreamEnabled: N, w6StreamRound: H, skillKey: Q, startChat: ze, respondToForm: Ie, addSkillFormMessage: Ge, markFormSubmitted: _e, cancelFormMessage: et, sendMessage: tt, sendW6Message: Ee, abort: at, resetForNewSkill: je, closeReport: ot, setActiveReportId: x, restoreSession: st, syncSessionFromServer: nt, bindSession: rt, addReportFromW6Done: it, skillKeyRef: W, activeW6MessageId: xe, syncActiveW6Message: Fe, appendUserMessage: lt, upsertGuidedTopicsMessage: ct, markGuidedTopicsUsed: ut };
}
function an(e, s) {
  return e ? e.type === s.type && e.message === s.message && e.token === s.token && e.progress === s.progress : false;
}
function ln(e, s, i, d, m, g, h) {
  s((x) => an(x[x.length - 1], e) ? x : [...x, e]), e.progress != null && i(e.progress);
  const S = e.message || e.token || "";
  S && d(S.slice(0, 120)), e.type === "done" && (m("idle"), g("closed"), h.close()), e.type === "stopped" && (m("idle"), g("closed"), h.close()), e.type === "error" && (m("error"), g("error"), h.close());
}
function cn(e, s, i = 0) {
  const [d, m] = c.useState([]), [g, h] = c.useState("idle"), [S, x] = c.useState("idle"), [M, I] = c.useState(0), [P, E] = c.useState(""), y = c.useRef(null), _ = c.useRef(false), T = c.useRef(null), L = c.useRef(false), N = c.useCallback(() => {
    T.current && (clearTimeout(T.current), T.current = null);
  }, []), R = c.useCallback(() => {
    var _a;
    if (!e || !s) return;
    N(), _.current = false, L.current = false, (_a = y.current) == null ? void 0 : _a.close(), m([]), h("running"), x("connecting"), I(0), E("");
    const Q = new EventSource(Rs(e));
    y.current = Q, Q.onopen = () => x("open"), Q.onmessage = (de) => {
      try {
        const A = JSON.parse(de.data);
        A.type === "done" || A.type === "stopped" || A.type === "error" ? _.current = true : L.current = true, ln(A, m, I, E, h, x, Q);
      } catch {
      }
    }, Q.onerror = () => {
      if (Q.close(), y.current = null, !_.current) {
        if (s && e) {
          x("connecting"), h("running"), T.current = setTimeout(() => {
            R();
          }, 1500);
          return;
        }
        x("error"), h("error");
      }
    };
  }, [e, s, N]);
  c.useLayoutEffect(() => {
    var _a;
    return s && e ? R() : (N(), _.current = true, (_a = y.current) == null ? void 0 : _a.close(), y.current = null, s || (m([]), h("idle"), x("idle"), I(0), E(""))), () => {
      var _a2;
      N(), _.current = true, (_a2 = y.current) == null ? void 0 : _a2.close(), y.current = null;
    };
  }, [e, s, i, R, N]);
  const H = c.useCallback(() => {
    var _a;
    N(), _.current = true, (_a = y.current) == null ? void 0 : _a.close(), y.current = null, m([]), h("idle"), x("idle"), I(0), E("");
  }, [N]), J = c.useCallback(async () => {
    var _a;
    if (e) {
      N(), _.current = true, (_a = y.current) == null ? void 0 : _a.close(), y.current = null, h("idle"), x("closed"), E("\u5DF2\u624B\u52A8\u505C\u6B62 W6 \u8C03\u7814");
      try {
        await Cs(e);
      } catch {
        h("error"), x("error"), E("\u505C\u6B62 W6 \u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      }
    }
  }, [e]);
  return { events: d, status: g, connection: S, progress: M, lastLine: P, reset: H, stop: J, reconnect: R };
}
function un({ content: e }) {
  if (!(e.startsWith(ft) || e.trimStart().toLowerCase().startsWith("@w6 "))) return p.jsx("pre", { className: "whitespace-pre-wrap font-sans", children: e });
  const i = e.startsWith(ft) ? e.slice(ft.length) : e.trimStart().slice(4);
  return p.jsxs("pre", { className: "whitespace-pre-wrap font-sans", children: [p.jsx("span", { className: "rounded bg-blue-500/25 px-1 font-semibold text-blue-200 dark:bg-blue-600/20 dark:text-blue-700", children: "@w6" }), p.jsx("span", { children: " " }), i] });
}
const dn = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" };
function fn(e, s) {
  return (s == null ? void 0 : s.trim()) ? s.trim() : e === "connecting" ? "\u6B63\u5728\u8FDE\u63A5 W6 \u8F93\u51FA\u6D41\u2026" : e === "open" ? "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85 W6 \u8F93\u51FA\u2026" : e === "error" ? "\u8FDE\u63A5\u5F02\u5E38\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026" : "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026";
}
function pn({ status: e, progress: s, lastLine: i, connection: d, events: m = [], onClick: g, onStop: h, stopping: S = false }) {
  const x = e === "running" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u8FD0\u884C\u4E2D" : e === "error" ? "W6 \u5B50 Agent \xB7 \u51FA\u9519" : e === "done" ? "W6 \u5B50 Agent \xB7 \u5DF2\u5B8C\u6210" : "W6 \u5B50 Agent \xB7 \u5F85\u547D", M = e === "running" ? "border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30" : e === "error" ? "border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30" : e === "done" ? "border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30", I = e === "running" && !!h, P = e === "running" ? _s(m, 8) : Is(m, 4), E = c.useRef(null), y = e === "running", _ = P.length > 0 ? P : y ? [fn(d, i)] : [];
  return c.useEffect(() => {
    !y || !E.current || (E.current.scrollTop = E.current.scrollHeight);
  }, [_, y]), p.jsxs("div", { className: `relative max-w-[85%] rounded-lg border ${M}`, children: [I ? p.jsx("button", { type: "button", onClick: (T) => {
    T.stopPropagation(), h == null ? void 0 : h();
  }, disabled: S, title: "\u505C\u6B62 W6 \u8C03\u7814", "aria-label": "\u505C\u6B62 W6 \u8C03\u7814", className: "absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400", children: p.jsx(Tt, { size: 14 }) }) : null, p.jsxs("button", { type: "button", onClick: g, className: `flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${I ? "pr-9" : ""}`, children: [p.jsxs("div", { className: "flex w-full flex-wrap items-center gap-x-2 gap-y-1", children: [p.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${e === "running" ? "animate-pulse bg-blue-500" : e === "error" ? "bg-red-500" : e === "done" ? "bg-emerald-500" : "bg-slate-400"}` }), p.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: x }), e === "running" && s > 0 ? p.jsxs("span", { className: "text-[10px] text-blue-600 dark:text-blue-400", children: [s, "%"] }) : null, d && e === "running" ? p.jsx("span", { className: "text-[10px] text-slate-500", children: dn[d] ?? d }) : null, p.jsx("span", { className: "ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80", children: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u8F93\u51FA" })] }), _.length > 0 ? p.jsx("div", { ref: E, className: `w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${y ? "min-h-[4.5rem] max-h-32 overflow-y-auto" : ""}`, children: _.map((T, L) => {
    const N = y && L === _.length - 1, R = y && P.length === 0;
    return p.jsxs("p", { className: `text-[11px] leading-relaxed ${N ? "text-slate-700 dark:text-slate-200" : "truncate text-slate-500 dark:text-slate-500"} ${R && N ? "animate-pulse" : ""}`, title: T, children: [T, N && y && P.length > 0 ? p.jsx("span", { className: "ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-blue-500 align-middle" }) : null] }, `${L}-${T.slice(0, 24)}`);
  }) }) : i ? p.jsx("p", { className: "w-full truncate text-[11px] text-slate-500", children: i }) : null] })] });
}
function mn({ value: e, onChange: s, disabled: i, className: d }) {
  const m = pt.find((g) => g.id === e) ?? pt[0];
  return p.jsxs("label", { className: Re("inline-flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400", i && "opacity-50", d), children: [p.jsx("span", { className: "shrink-0 font-medium", children: "\u62A5\u544A\u7248\u5F0F" }), p.jsxs("span", { className: "relative inline-flex", children: [p.jsx("select", { value: e, disabled: i, title: m.hint, "aria-label": "\u62A5\u544A\u7248\u5F0F", onChange: (g) => s(g.target.value), className: Re("h-7 min-w-[7.5rem] appearance-none rounded-lg border border-slate-200 bg-white py-0 pl-2 pr-6 text-[11px] font-medium text-slate-700 outline-none transition-colors", "hover:border-slate-300 focus:border-slate-400 focus:ring-1 focus:ring-slate-300/60", "disabled:cursor-not-allowed", "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:focus:border-slate-500"), children: pt.map((g) => p.jsx("option", { value: g.id, title: g.hint, children: g.label }, g.id)) }), p.jsx(Zt, { size: 12, className: "pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500", "aria-hidden": true })] })] });
}
const hn = "/osint-dashboard";
function ce(e) {
  const s = e.startsWith("/") ? e : `/${e}`;
  return `${hn}${s}`;
}
function gn({ session: e, isActive: s, onClick: i, onRename: d, onDelete: m }) {
  const [g, h] = c.useState(false);
  return p.jsxs("div", { onClick: i, className: Re("group flex cursor-pointer select-none items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-2 transition-all duration-150", s ? "border-blue-600 bg-blue-50/90 text-slate-900 dark:border-blue-500 dark:bg-blue-950/35 dark:text-slate-100" : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"), children: [p.jsx(Lt, { size: 13, className: Re("shrink-0", s ? "text-blue-600 dark:text-blue-400" : "text-slate-400") }), p.jsx("span", { className: "flex-1 truncate text-[13px] leading-tight", children: e.title }), p.jsxs("div", { className: "relative", children: [p.jsx("button", { type: "button", onClick: (S) => {
    S.stopPropagation(), h(!g);
  }, className: Re("rounded-md p-1 transition-opacity", s ? "text-gray-400 hover:bg-white" : "text-gray-300 hover:bg-white/60", g ? "opacity-100" : "opacity-0 group-hover:opacity-100"), children: p.jsx(fs, { size: 11 }) }), g ? p.jsxs(p.Fragment, { children: [p.jsx("div", { className: "fixed inset-0 z-10", onClick: () => h(false) }), p.jsxs("div", { className: "absolute right-0 top-full z-20 mt-1 min-w-[120px] rounded-xl border border-gray-100 bg-white py-1 shadow-xl", children: [p.jsxs("button", { type: "button", onClick: (S) => {
    S.stopPropagation(), d(), h(false);
  }, className: "flex w-full items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50", children: [p.jsx(ps, { size: 11 }), " \u91CD\u547D\u540D"] }), p.jsxs("button", { type: "button", onClick: (S) => {
    S.stopPropagation(), m(), h(false);
  }, className: "flex w-full items-center gap-2 px-3 py-2 text-xs text-danger-600 hover:bg-danger-50", children: [p.jsx(ms, { size: 11 }), " \u5220\u9664"] })] })] }) : null] })] });
}
function wn(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
}
function bn(e) {
  if (!e) return [];
  try {
    return JSON.parse(e.form_schema).fields || [];
  } catch {
    return [];
  }
}
function Cn() {
  const e = es(), { sessionId: s } = ts(), { user: i } = ss(), d = i == null ? void 0 : i.id, { sessions: m, intelligenceSkills: g, isStreaming: h, fetchSessions: S, createSession: x, updateSession: M, deleteSession: I, fetchIntelligenceSkills: P, executeIntelligenceSkill: E, sendMessageWS: y, connectWebSocket: _, disconnectWebSocket: T, fetchResources: L, uploadResource: N } = he(), { addToast: R } = jt(), { confirm: H, prompt: J } = ns(), Q = rs(), de = (Q == null ? void 0 : Q.leftCollapsed) ?? false, A = (Q == null ? void 0 : Q.rightCollapsed) ?? false, G = Q == null ? void 0 : Q.setRightCollapsed, Y = c.useCallback(async (t, n) => {
    const o = he.getState().sessions.find((b) => b.id === t);
    if (!o || !Mt(o.title)) return;
    const u = n.trim();
    !u || u === o.title || await M(t, u);
  }, [M]), D = c.useCallback((t) => {
    var _a;
    return (_a = he.getState().sessions.find((n) => n.id === t)) == null ? void 0 : _a.title;
  }, []), l = on(d, g, { getSessionTitle: D, syncSessionTitle: Y }), W = cn(l.sessionId, l.w6StreamEnabled && !!l.activeW6MessageId, l.w6StreamRound), [X, be] = c.useState([]), [De, V] = c.useState(null), [$, K] = c.useState(""), [Pe, xe] = c.useState(false), [B, Ce] = c.useState(null), [Z, se] = c.useState(false), [fe, ee] = c.useState(() => vt(d)), U = c.useRef(null), ke = c.useRef(0), pe = c.useRef(false), z = c.useRef(null), ne = c.useRef(s);
  c.useEffect(() => {
    ke.current = 0;
  }, [l.w6StreamRound]);
  const [Se, Fe] = c.useState(false);
  c.useEffect(() => {
    ne.current = s;
  }, [s]), c.useEffect(() => {
    ee(vt(d));
  }, [d]);
  const O = l.isStreaming || h;
  c.useEffect(() => {
    P(), os.listGroups().then(be).catch(() => {
    });
  }, [P]), c.useEffect(() => {
    pe.current = false, Fe(false);
  }, [d]), c.useEffect(() => {
    if (X.length === 0) {
      V(null);
      return;
    }
    V((t) => t && X.some((n) => n.id === t) ? t : X[0].id);
  }, [X]), c.useEffect(() => {
    if (!d || pe.current) return;
    let t = false;
    pe.current = true;
    const n = async () => {
      var _a, _b, _c, _d;
      try {
        if (await S(), t) return;
        const o = he.getState().sessions, u = ((_a = ne.current) == null ? void 0 : _a.trim()) || "";
        if (u && o.some((w) => w.id === u)) return;
        if (u && ((_b = await Ne(u).catch(() => null)) == null ? void 0 : _b.session_id)) {
          const j = ((_d = (_c = zt(d, u)) == null ? void 0 : _c.title) == null ? void 0 : _d.trim()) || "\u65B0\u7814\u7A76";
          he.setState((C) => C.sessions.some((v) => v.id === u) ? C : { sessions: [{ id: u, title: j, created_at: (/* @__PURE__ */ new Date()).toISOString() }, ...C.sessions] });
          return;
        }
        if (o.length > 0) {
          const w = o[0];
          (!u || u !== w.id) && e(ce(`/sessions/${w.id}`), { replace: true });
          return;
        }
        const b = await x("\u65B0\u7814\u7A76");
        if (t) return;
        e(ce(`/sessions/${b.id}`), { replace: true });
      } catch {
        pe.current = false;
      } finally {
        t || Fe(true);
      }
    };
    return z.current = n(), z.current, () => {
      t = true;
    };
  }, [d, s, S, x, e]), c.useEffect(() => {
    if (s) return l.restoreSession(s), _(s), L(s), () => {
      T(s);
    };
  }, [s, _, T, L]), c.useEffect(() => {
    if (!s) return;
    const t = () => {
      document.visibilityState === "visible" && l.syncSessionFromServer();
    };
    return document.addEventListener("visibilitychange", t), window.addEventListener("focus", t), () => {
      document.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t);
    };
  }, [s, l.syncSessionFromServer]), c.useEffect(() => {
    l.reports.length > 0 && (G == null ? void 0 : G(false));
  }, [s, l.reports.length, G]);
  const Ue = l.reports.length > 0 && !A, re = d ? `osint-dashboard-panels:${d}` : void 0;
  c.useEffect(() => {
    const t = W.events.filter((o) => o.type === "done").length;
    if (t <= ke.current) return;
    ke.current = t;
    const n = [...W.events].reverse().find((o) => o.type === "done");
    n && l.addReportFromW6Done(n);
  }, [W.events, l.addReportFromW6Done]);
  const ze = c.useMemo(() => l.reports.find((t) => t.id === l.activeReportId) ?? l.reports[l.reports.length - 1], [l.reports, l.activeReportId]), _e = c.useMemo(() => s ? m.find((t) => t.id === s) : void 0, [m, s]), et = (t) => {
    ee(t), Rt(d, t);
  }, Oe = c.useCallback((t) => {
    if (l.reports.length === 0) return;
    G == null ? void 0 : G(false);
    const n = l.reports.filter((w) => w.kind === "html" || !w.kind), o = t == null ? void 0 : t.trim(), b = (o ? n.find((w) => w.resourceId === o) ?? l.reports.find((w) => w.resourceId === o) : void 0) ?? n.find((w) => w.id === l.activeReportId) ?? n[n.length - 1] ?? l.reports[l.reports.length - 1];
    b && l.setActiveReportId(b.id);
  }, [l.reports, l.activeReportId, l.setActiveReportId, G]), Ge = c.useMemo(() => {
    var _a;
    if (l.activeW6MessageId) return [];
    for (let t = l.messages.length - 1; t >= 0; t--) {
      const n = l.messages[t];
      if (n.role !== "w6" || n.w6Status !== "done") continue;
      return ((_a = [...n.w6Events ?? []].reverse().find((u) => u.type === "done")) == null ? void 0 : _a.followUps) ?? [];
    }
    return [];
  }, [l.messages, l.activeW6MessageId]), Ie = c.useMemo(() => Ws({ followUpQuestions: l.followUpQuestions, messages: l.messages, w6FollowUps: Ge, skillKey: l.skillKey, reportTitle: ze == null ? void 0 : ze.title }), [l.followUpQuestions, l.messages, l.skillKey, Ge, ze == null ? void 0 : ze.title]), oe = l.messages.some((t) => t.role === "form" && t.formStatus === "pending"), We = c.useMemo(() => Xs(l.messages), [l.messages]);
  c.useEffect(() => {
    !We || l.activeW6MessageId || l.reports.length === 0 || l.isStreaming || oe || Ie.length !== 0 && l.upsertGuidedTopicsMessage(Ie);
  }, [We, l.activeW6MessageId, l.reports.length, l.isStreaming, l.upsertGuidedTopicsMessage, Ie, oe]);
  const Ee = c.useMemo(() => {
    if (!B) return null;
    const t = l.messages.find((u) => u.id === B);
    if (!t || t.role !== "w6") return null;
    const n = B === l.activeW6MessageId, o = n ? W.events : t.w6Events ?? [];
    return { events: o, status: yt(t.w6Status, W.status, n, o), connection: n ? W.connection : "closed" };
  }, [B, l.messages, l.activeW6MessageId, W.events, W.status, W.connection]);
  c.useEffect(() => {
    l.activeW6MessageId && l.syncActiveW6Message({ progress: W.progress, lastLine: W.lastLine, events: W.events, status: W.status });
  }, [l.activeW6MessageId, l.syncActiveW6Message, W.progress, W.lastLine, W.events, W.status]), c.useEffect(() => {
    var _a;
    (_a = U.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [l.messages, oe, l.currentPhase, l.activeW6MessageId, W.status, W.lastLine, W.events.length]);
  const tt = async () => {
    l.resetForNewSkill();
    const t = await x("\u65B0\u7814\u7A76");
    e(ce(`/sessions/${t.id}`));
  }, st = async (t) => {
    const n = m.find((u) => u.id === t);
    if (!n) return;
    const o = await J({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: n.title, placeholder: "\u4F1A\u8BDD\u540D\u79F0" });
    o && o !== n.title && await M(t, o);
  }, nt = async (t) => {
    if (await H({ title: "\u5220\u9664\u4F1A\u8BDD", message: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002", variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) && (await I(t), s === t)) {
      const o = he.getState().sessions;
      if (o.length > 0) e(ce(`/sessions/${o[0].id}`));
      else {
        const u = await x("\u65B0\u7814\u7A76");
        e(ce(`/sessions/${u.id}`), { replace: true });
      }
    }
  }, je = async (t) => {
    var _a;
    z.current && await z.current.catch(() => {
    });
    const n = (_a = ne.current) == null ? void 0 : _a.trim();
    if (n) return l.bindSession(n), n;
    const o = he.getState().sessions[0];
    if (o) return l.bindSession(o.id), _(o.id), e(ce(`/sessions/${o.id}`), { replace: true }), o.id;
    const u = (t == null ? void 0 : t.trim().slice(0, 30)) || "\u65B0\u7814\u7A76", b = await x(u);
    return l.bindSession(b.id), _(b.id), e(ce(`/sessions/${b.id}`), { replace: true }), b.id;
  }, rt = (t) => {
    if (O) {
      R("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    const n = bn(t);
    if (n.length === 0) {
      R("error", "\u8BE5\u6280\u80FD\u672A\u914D\u7F6E\u8868\u5355\u5B57\u6BB5");
      return;
    }
    l.addSkillFormMessage(t, n);
  }, ot = async (t, n) => {
    if (!(!t.skillKey || !t.skillName)) try {
      const o = g.find((w) => w.id === t.skillId || w.key === t.skillKey);
      if (!o) throw new Error("\u6280\u80FD\u4E0D\u5B58\u5728");
      l.markFormSubmitted(t.id, n);
      const u = await E(o.id, n), b = await je(At(n, o.name) || o.name);
      Rt(d, fe), await l.startChat(o.key, o.name, n, b, u, fe);
    } catch (o) {
      R("error", o instanceof Error ? o.message : "\u542F\u52A8\u7814\u7A76\u5931\u8D25");
    }
  }, me = async (t, n) => {
    try {
      const o = l.skillKeyRef.current, u = o ? g.find((w) => w.key === o) : void 0, b = u ? await E(u.id, n) : void 0;
      await l.respondToForm(n, b, t.id);
    } catch (o) {
      R("error", o instanceof Error ? o.message : "\u63D0\u4EA4\u8865\u5145\u4FE1\u606F\u5931\u8D25");
    }
  }, it = async (t, n) => {
    if (!(!t.skillId || !t.skillName)) try {
      const o = g.find((w) => w.id === t.skillId);
      if (!o) throw new Error("\u6280\u80FD\u4E0D\u5B58\u5728");
      l.markFormSubmitted(t.id, n);
      const u = await E(o.id, n), b = await je(o.name);
      y(b, u, []), R("success", `${o.name} \u5DF2\u63D0\u4EA4`);
    } catch (o) {
      R("error", o instanceof Error ? o.message : "\u63D0\u4EA4\u5931\u8D25");
    }
  }, at = (t, n) => {
    if (t.formStatus === "pending") {
      if (t.skillKey) {
        Ve(t.skillKey, g) ? ot(t, n) : it(t, n);
        return;
      }
      me(t, n);
    }
  }, lt = async (t = []) => {
    const n = $.trim();
    if (!n && t.length === 0 || l.isStreaming) return;
    const o = t.filter((u) => u.type === "local" && u.file);
    if (o.length > 0) try {
      const u = await je(Dt(n) || n || "\u9644\u4EF6\u6D88\u606F"), b = await cs(`upload ${o.length} local file(s)`, { sessionId: u, files: o.map((k) => k.name) }, async () => {
        const k = [];
        for (const j of o) {
          const C = j.file;
          Nt("upload_start", "dashboard uploading before send", { fileName: C.name, sessionId: u });
          const v = await N(u, C);
          await us(v.id, C, ds(v.id, v.url).filter((ve) => ve !== v.id)), k.push({ id: v.id, name: v.name || j.name, type: v.type || "file" });
        }
        return k;
      }), w = n || "\u8BF7\u5206\u6790\u9644\u4EF6\u5185\u5BB9";
      K(""), l.appendUserMessage(w, b), y(u, w, b), L(u);
      return;
    } catch (u) {
      R("error", u instanceof Error ? u.message : "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");
      return;
    }
    K(""), l.sendMessage(n);
  }, ct = async () => {
    if (!(Z || W.status !== "running")) {
      se(true);
      try {
        l.abort(), await W.stop(), R("info", "\u5DF2\u505C\u6B62 W6 \u8C03\u7814");
      } catch (t) {
        R("error", t instanceof Error ? t.message : "\u505C\u6B62 W6 \u5931\u8D25");
      } finally {
        se(false);
      }
    }
  }, ut = (t, n) => {
    l.isStreaming || (l.markGuidedTopicsUsed(t), K(""), l.sendW6Message(n.text));
  }, r = p.jsxs("div", { className: "flex h-full min-h-0 flex-col overflow-hidden bg-white dark:bg-slate-900", children: [p.jsxs("div", { className: "flex items-center gap-2 border-b border-slate-200/90 px-3 py-3 dark:border-slate-800", children: [p.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100", children: p.jsx(is, { size: 14, className: "text-white dark:text-slate-900" }) }), p.jsx("span", { className: "text-sm font-semibold text-slate-900 dark:text-slate-100", children: "\u60C5\u62A5\u7814\u7A76" })] }), p.jsx("div", { className: "px-3 pb-2 pt-2", children: p.jsxs("button", { type: "button", onClick: () => void tt(), className: "flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-900 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", children: [p.jsx(as, { size: 14 }), "\u65B0\u4F1A\u8BDD"] }) }), p.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: Se ? m.length === 0 ? p.jsxs("div", { className: "px-3 py-6 text-center", children: [p.jsx(Lt, { size: 20, className: "mx-auto mb-1.5 text-slate-300 dark:text-slate-600" }), p.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u4F1A\u8BDD" })] }) : m.map((t) => p.jsx(gn, { session: t, isActive: s === t.id, onClick: () => e(ce(`/sessions/${t.id}`)), onRename: () => void st(t.id), onDelete: () => void nt(t.id) }, t.id)) : p.jsx("div", { className: "px-3 py-6 text-center", children: p.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u52A0\u8F7D\u4F1A\u8BDD\u2026" }) }) })] }), f = p.jsxs("div", { className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-[#f7f8fa] dark:bg-slate-950", children: [p.jsxs("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/70 px-3 py-2 dark:border-slate-800", children: [p.jsx("span", { className: "min-w-0 truncate text-xs font-medium text-slate-600 dark:text-slate-400", children: (_e == null ? void 0 : _e.title) ?? "\u60C5\u62A5\u7814\u7A76" }), p.jsx(mn, { value: fe, onChange: et, disabled: l.isStreaming })] }), p.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto px-3 py-3", children: [l.messages.map((t) => {
    var _a, _b;
    if (t.role === "user") return p.jsx("div", { className: "mb-3 flex justify-end", children: p.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-3 py-2 text-xs text-white dark:bg-slate-100 dark:text-slate-900", children: p.jsx(un, { content: t.content }) }) }, t.id);
    if (t.role === "assistant") return t.content.trim() ? p.jsx("div", { className: "mb-3", children: p.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200", children: [p.jsx("div", { className: "prose-sm max-w-none", dangerouslySetInnerHTML: { __html: wn(t.content) } }), t.previewResourceId ? p.jsx("button", { type: "button", onClick: () => Oe(t.previewResourceId), className: "mt-2 text-xs text-blue-600 underline-offset-2 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300", children: "\u9884\u89C8" }) : null] }) }, t.id) : null;
    if (t.role === "form") {
      const n = t.formStatus ?? "pending", o = t.skillName || t.formPrompt || t.content, u = t.formData ? $t(t.formData) : void 0;
      return p.jsxs("div", { className: "mb-3", children: [p.jsx(Es, { title: o, status: n, submittedSummary: u, children: n === "pending" && ((_b = (_a = t.formSchema) == null ? void 0 : _a.fields) == null ? void 0 : _b.length) ? p.jsx(js, { fields: t.formSchema.fields, onSubmit: (b) => at(t, b), disabled: l.isStreaming, stepMode: t.stepMode !== false }) : null }), n === "pending" ? p.jsx("button", { type: "button", className: "mt-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300", onClick: () => l.cancelFormMessage(t.id), children: "\u53D6\u6D88" }) : null] }, t.id);
    }
    if (t.role === "guided_topics") {
      const n = t.guidedTopics ?? [];
      if (n.length === 0) return null;
      const o = t.guidedTopicsStatus ?? "active";
      return p.jsx("div", { className: "mb-3", children: p.jsx(Ns, { topics: n, status: o, onSelect: (u) => ut(t.id, u), disabled: l.isStreaming }) }, t.id);
    }
    if (t.role === "w6") {
      const n = t.id === l.activeW6MessageId, o = n ? W.events : t.w6Events ?? [], u = yt(t.w6Status, W.status, n, o);
      return p.jsx("div", { className: "mb-3", children: p.jsx(pn, { status: u, progress: n ? W.progress : t.w6Progress ?? 0, lastLine: n ? W.lastLine || t.w6LastLine || "" : t.w6LastLine ?? "", connection: n ? W.connection : void 0, events: o, onClick: () => {
        Ce(t.id), xe(true);
      }, onStop: n && u === "running" ? () => void ct() : void 0, stopping: Z }) }, t.id);
    }
    return t.role === "system" ? p.jsx("div", { className: "mb-2 text-center text-xs text-slate-500", children: t.content }, t.id) : null;
  }), l.currentPhase && !l.activeW6MessageId ? p.jsx("div", { className: "mb-2 text-xs italic text-slate-500", children: l.currentPhase }) : null, p.jsx("div", { ref: U })] }), p.jsx("div", { className: "shrink-0 border-t border-zinc-200/70 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#212121]", children: p.jsxs("div", { className: "mx-auto max-w-3xl space-y-2", children: [p.jsx(Ts, { skillGroups: X, activeGroupId: De, onActiveGroupChange: V, intelligenceSkills: g, onSkillClick: rt, disabled: O }), p.jsx(As, { value: $, onChange: K, onSend: (t) => void lt(t), placeholder: l.reports.length > 0 ? "\u9488\u5BF9\u5F53\u524D\u62A5\u544A\u6539\u7248\u5F0F\u6216\u8FFD\u95EE\u5185\u5BB9\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" : "\u8F93\u5165\u8FFD\u95EE\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814", disabled: l.isStreaming, isStreaming: l.isStreaming, onStop: () => l.abort() })] }) })] }), a = p.jsx(Ls, { reports: l.reports, activeReportId: l.activeReportId, onActiveChange: l.setActiveReportId, onReportClose: l.closeReport });
  return p.jsxs(p.Fragment, { children: [p.jsx(ls, { className: "h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", innerClassName: "h-full min-h-0 border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", leftPanelId: "osint-dashboard-left", mainPanelId: "osint-dashboard-main", rightPanelId: "osint-dashboard-right", left: r, main: f, right: a, leftMinPx: 200, leftMaxPx: 400, leftDefaultPx: 240, rightMinPx: 320, rightMaxPx: 1200, rightDefaultPct: 50, leftSidebarVisible: !de, rightSidebarVisible: Ue, storageKey: re, resizeHandleWithGrip: true }), p.jsx(Ms, { open: Pe, onClose: () => {
    xe(false), Ce(null);
  }, events: (Ee == null ? void 0 : Ee.events) ?? [], status: (Ee == null ? void 0 : Ee.status) ?? "idle", connection: (Ee == null ? void 0 : Ee.connection) ?? "idle" })] });
}
export {
  Cn as default
};
