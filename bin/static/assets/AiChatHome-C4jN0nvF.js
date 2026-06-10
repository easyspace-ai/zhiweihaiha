import { j as s, c as qt } from "./three-BECTMk9d.js";
import { a as f } from "./monaco-BSfMmt4N.js";
import { G as Ft, H as U, I as Ye, N as Ut, J as Ot, K as Wt, w as oe, O as Ze, Q as et, R as zt, U as Bt, V as Ht, W as ye, x as tt, C as Kt, X as be, Y as Gt, Z as Vt, s as Jt, _ as rt, $ as Qt, a0 as Xt, a1 as Yt, M as Zt, o as er, T as tr, E as rr, a2 as sr, L as st, a3 as $e, a4 as Me, S as Ae, r as nr, a5 as ar, a6 as or, u as lr, p as ir, a7 as dr, a8 as Le, a9 as cr, aa as ur, ab as fr, ac as mr, P as xr } from "./main-B7mEfS4e.js";
import "./charts-Cx7lSOSv.js";
const hr = { ShieldCheck: s.jsx(Ye, { size: 12 }), Search: s.jsx(Wt, { size: 12 }), Database: s.jsx(Ot, { size: 12 }), Newspaper: s.jsx(Ut, { size: 12 }) };
function br({ skillGroups: e, activeGroupId: t, onActiveGroupChange: r, intelligenceSkills: n, onSkillClick: a, disabled: o = false }) {
  const l = f.useMemo(() => e.find((p) => p.id === t) ?? e[0] ?? null, [e, t]), u = f.useMemo(() => Ft(n, l), [n, l]);
  if (e.length === 0 && u.length === 0) return null;
  const h = e.length > 1;
  return s.jsxs("div", { className: "flex flex-col gap-2", children: [h && s.jsx("div", { className: "flex flex-wrap items-center gap-1 border-b border-slate-200/80 pb-1.5 dark:border-slate-700", role: "tablist", "aria-label": "\u6280\u80FD\u5206\u7EC4", children: e.map((p) => s.jsx("button", { type: "button", role: "tab", "aria-selected": t === p.id, onClick: () => r(p.id), className: U("shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors", t === p.id ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"), children: p.name }, p.id)) }), s.jsx("div", { className: "flex flex-wrap gap-1.5", role: "tabpanel", "aria-label": (l == null ? void 0 : l.name) ?? "\u6280\u80FD", children: u.length === 0 ? s.jsx("span", { className: "text-[11px] text-slate-400 dark:text-slate-500", children: "\u6682\u65E0\u53EF\u7528\u6280\u80FD" }) : u.map((p) => s.jsxs("button", { type: "button", onClick: () => a(p), disabled: o, className: U("flex shrink-0 items-center gap-1 rounded-xl border px-2.5 py-1 text-[11px] font-medium transition-all", o ? "cursor-not-allowed border-slate-100 text-slate-300 opacity-40 dark:border-slate-800" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"), children: [s.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: hr[p.icon || ""] || s.jsx(Ye, { size: 12 }) }), p.name] }, p.id)) })] });
}
function nt(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Ze.baseUrl}${t}`;
}
function at(e) {
  if (!e) return "";
  const t = e.split("#")[0], r = t.match(/\/artifacts\/([^/?]+)\/preview/);
  return (r == null ? void 0 : r[1]) ? decodeURIComponent(r[1]) : (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t), t);
}
function pr(e) {
  if (!e) return "";
  const t = nt(`/artifacts/${encodeURIComponent(e)}/download`), r = oe();
  if (!r) return t;
  const n = t.includes("?") ? "&" : "?";
  return `${t}${n}token=${encodeURIComponent(r)}`;
}
function ot(e) {
  if (!e) return "";
  if (e.startsWith("http") || e.startsWith("/")) return e;
  const t = nt(`/artifacts/${encodeURIComponent(e)}/preview`), r = oe();
  if (!r) return t;
  const n = t.includes("?") ? "&" : "?";
  return `${t}${n}token=${encodeURIComponent(r)}`;
}
const se = /你是(一个)?专业|请根据以下|基于以下用户|对指定主题进行|调研分析师|事实核查员/i, ve = "\u8C03\u7814\u62A5\u544A", gr = /* @__PURE__ */ new Set(["\u8C03\u7814\u62A5\u544A", "\u62A5\u544A", "\u672A\u547D\u540D\u62A5\u544A", "\u7814\u7A76\u62A5\u544A", "\u4E8B\u5B9E\u6838\u67E5\u62A5\u544A", "\u65B0\u62A5\u544A", "\u7EE7\u7EED\u7814\u7A76\u7ED3\u679C"]);
function ae(e) {
  var _a;
  return ((_a = e.split(/\r?\n/)[0]) == null ? void 0 : _a.trim()) || e.trim();
}
function Q(e, t) {
  const r = e.trim();
  if (!r) return "";
  const n = [...r];
  return n.length <= t ? r : `${n.slice(0, t - 1).join("")}\u2026`;
}
function je(e) {
  var _a, _b;
  const t = [/(?:topic|主题|调研主题|核查对象)[：:\s]+(.+?)(?:\s{2,}|$)/i, /针对[「『"'](.+?)[」』"']/, /关于[「『"'](.+?)[」』"']/, /主题[：:]\s*(.+)/];
  for (const r of t) {
    const a = (_b = (_a = e.match(r)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim();
    if (a) return a;
  }
  return null;
}
function lt(e) {
  return e.replace(/_(?:edit_)?\d{10,}\.(?:html|md)$/i, "").replace(/\.(?:html|md)$/i, "").trim();
}
function it(e) {
  return e.replace(/\s*\((?:MD|HTML)\)\s*$/i, "").trim();
}
function re(e) {
  const t = it(e.trim());
  return !!(!t || gr.has(t) || /^研究报告\s*\((?:MD|HTML)\)$/i.test(t) || se.test(ae(t)));
}
function kr(e) {
  var _a, _b;
  return ((_b = (_a = e.match(/^#\s+(.+)$/m)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim()) ?? "";
}
function wr(e, t) {
  var _a, _b;
  if ((_a = e.markdown) == null ? void 0 : _a.trim()) return e.markdown;
  if (!(t == null ? void 0 : t.length)) return;
  const r = e.timestamp ?? 0;
  let n, a = Number.POSITIVE_INFINITY;
  for (const o of t) {
    if (o.kind !== "markdown" || !((_b = o.markdown) == null ? void 0 : _b.trim())) continue;
    const l = Math.abs((o.timestamp ?? 0) - r);
    l < a && (a = l, n = o);
  }
  if (n && a <= 15e3) return n.markdown;
}
function yr(e, t) {
  var _a;
  const r = it(e.trim());
  if (!r) return "";
  if (r.includes("--")) {
    const o = (_a = r.split("--").pop()) == null ? void 0 : _a.trim();
    if (o && !re(o)) return Q(o, t);
  }
  const n = je(r);
  if (n && !re(n)) return Q(n, t);
  const a = lt(ae(r)).replace(/_/g, " ");
  if (a && !re(a) && !/^\d+$/.test(a)) return Q(a, t);
  if (!re(r)) {
    const o = ae(r);
    if (o && !se.test(o)) return Q(o, t);
  }
  return "";
}
function vr(e, t, r = 48) {
  const n = wr(e, t);
  if (n) {
    const a = kr(n);
    if (a && !re(a)) return Q(a, r);
  }
  return yr(e.title, r);
}
function jr(e, t = 28) {
  let r = e.trim();
  if (!r) return "\u62A5\u544A";
  r = lt(r), r = ae(r);
  const n = je(e) || je(r);
  if (n) r = n;
  else if (se.test(r)) {
    const o = e.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).find((l) => !se.test(l) && l.length >= 4);
    if (o) r = ae(o);
    else {
      const l = r.replace(/^你是一个[^。．]+[。．]\s*/u, "").replace(/^请根据[^。．]+[。．]\s*/u, "").trim();
      r = l && !se.test(l) ? l : ve;
    }
  }
  return r = r.replace(/^执行[：:]\s*/, "").replace(/^@w6\s*/i, "").trim(), Q(r, t) || "\u62A5\u544A";
}
function ne(e, t, r) {
  const n = e.kind === "markdown" ? "MD" : "HTML", a = vr(e, r, 52);
  return a ? `[${n}] ${ve}--${a}` : `[${n}] ${ve}`;
}
const Pe = /* @__PURE__ */ new Map();
function Nr(e) {
  var _a, _b;
  const [t, r] = f.useState(""), [n, a] = f.useState(false), [o, l] = f.useState(null), u = e == null ? void 0 : e.kind, h = ((_a = e == null ? void 0 : e.resourceId) == null ? void 0 : _a.trim()) || "", p = ((_b = e == null ? void 0 : e.markdown) == null ? void 0 : _b.trim()) || "", c = (e == null ? void 0 : e.url) || "";
  return f.useEffect(() => {
    if (u !== "markdown") {
      r(""), l(null), a(false);
      return;
    }
    if (p) {
      r(p), l(null), a(false);
      return;
    }
    if (!h) {
      r(""), l("\u6682\u65E0 Markdown \u5185\u5BB9"), a(false);
      return;
    }
    const k = Pe.get(h);
    if (k !== void 0) {
      r(k), l(null), a(false);
      return;
    }
    let j = false;
    const x = new AbortController();
    a(true), l(null);
    const m = oe(), i = { Accept: "text/markdown,text/plain,*/*" };
    m && (i.Authorization = `Bearer ${m}`);
    const g = c || ot(h), v = m ? `${g}${g.includes("?") ? "&" : "?"}token=${encodeURIComponent(m)}` : g;
    return fetch(v, { headers: i, signal: x.signal }).then(async (y) => {
      if (!y.ok) throw new Error(`HTTP ${y.status}`);
      return y.text();
    }).then((y) => {
      j || (Pe.set(h, y), r(y));
    }).catch((y) => {
      j || y instanceof DOMException && y.name === "AbortError" || l(y instanceof Error ? y.message : "\u52A0\u8F7D\u5931\u8D25");
    }).finally(() => {
      j || a(false);
    }), () => {
      j = true, x.abort();
    };
  }, [u, h, p, c]), { content: t, loading: n, error: o };
}
function Sr({ reports: e, activeReportId: t, onActiveChange: r, onReportClose: n }) {
  const { addToast: a } = et(), [o, l] = f.useState(0), [u, h] = f.useState(null), p = f.useRef(e.length);
  f.useEffect(() => {
    if (e.length === 0 || t && e.some((E) => E.id === t)) return;
    const b = e.filter((E) => E.kind === "html"), T = b.length > 0 ? b[b.length - 1] : e[e.length - 1];
    r(T.id);
  }, [e, t, r]), f.useEffect(() => {
    if (t && e.length > p.current) {
      const b = e[e.length - 1];
      b.kind === "html" && r(b.id);
    }
    p.current = e.length;
  }, [t, e, r]);
  const c = e.find((b) => b.id === t), { content: k, loading: j, error: x } = Nr(c), m = (c == null ? void 0 : c.kind) === "markdown" && !j && !x && !!k.trim(), i = f.useCallback(() => {
    var _a;
    const b = (_a = c == null ? void 0 : c.resourceId) == null ? void 0 : _a.trim();
    if (!b) {
      a("error", "\u65E0\u6CD5\u4E0B\u8F7D\u8BE5\u62A5\u544A");
      return;
    }
    window.open(pr(b), "_blank"), a("success", "\u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [c == null ? void 0 : c.resourceId, a]), g = f.useCallback(() => {
    const b = k.trim();
    if (!b) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u4E0B\u8F7D");
      return;
    }
    zt(b, (c == null ? void 0 : c.title) || "\u62A5\u544A"), a("success", "Markdown \u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [k, c == null ? void 0 : c.title, a]), v = f.useCallback(async () => {
    const b = k.trim();
    if (!b) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    h("word");
    try {
      await Bt(b, (c == null ? void 0 : c.title) || "\u62A5\u544A"), a("success", "Word \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (T) {
      a("error", T instanceof Error ? T.message : "Word \u5BFC\u51FA\u5931\u8D25");
    } finally {
      h(null);
    }
  }, [k, c == null ? void 0 : c.title, a]), y = f.useCallback(async () => {
    const b = k.trim();
    if (!b) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    h("pdf");
    try {
      await Ht(b, (c == null ? void 0 : c.title) || "\u62A5\u544A"), a("success", "PDF \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (T) {
      a("error", T instanceof Error ? T.message : "PDF \u5BFC\u51FA\u5931\u8D25");
    } finally {
      h(null);
    }
  }, [k, c == null ? void 0 : c.title, a]), L = (b) => {
    const T = e.findIndex((I) => I.id === b), E = e.filter((I) => I.id !== b);
    if (t === b && E.length > 0) {
      const I = Math.min(T, E.length - 1);
      r(E[I].id);
    }
    n(b);
  };
  if (e.length === 0) return s.jsxs("div", { className: "flex h-full flex-col items-center justify-center bg-[#f7f8fa] text-slate-500 dark:bg-slate-950", children: [s.jsx(ye, { size: 40, className: "mb-3 opacity-30" }), s.jsx("div", { className: "text-sm font-medium text-slate-600 dark:text-slate-400", children: "\u62A5\u544A\u9884\u89C8" }), s.jsx("div", { className: "mt-1 max-w-xs text-center text-xs text-slate-400", children: "\u5B8C\u6210 W6 \u7814\u7A76\u4EFB\u52A1\u540E\uFF0CHTML \u4E0E Markdown \u62A5\u544A\u5C06\u5728\u6B64\u5B9E\u65F6\u9884\u89C8" })] });
  const M = (c == null ? void 0 : c.kind) === "markdown", w = (c == null ? void 0 : c.kind) === "html" || !(c == null ? void 0 : c.kind);
  return s.jsxs("div", { className: "flex h-full min-h-0 flex-col bg-white dark:bg-slate-900", children: [s.jsxs("div", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200/90 bg-slate-50/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/80", children: [s.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [c ? M ? s.jsx(tt, { size: 14, className: "shrink-0 text-emerald-600 dark:text-emerald-400" }) : s.jsx(ye, { size: 14, className: "shrink-0 text-slate-500 dark:text-slate-400" }) : null, s.jsxs("div", { className: "relative min-w-0 flex-1", children: [s.jsx("select", { value: t ?? "", onChange: (b) => r(b.target.value), "aria-label": "\u9009\u62E9\u62A5\u544A", title: c ? ne(c, e.findIndex((b) => b.id === c.id), e) : void 0, className: U("h-8 w-full min-w-0 appearance-none truncate rounded-lg border border-slate-200 bg-white py-0 pl-2.5 pr-8 text-xs font-medium text-slate-800 outline-none transition-colors", "hover:border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-300/50", "dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:focus:border-blue-500"), children: e.map((b, T) => s.jsx("option", { value: b.id, title: ne(b, T, e), children: ne(b, T, e) }, b.id)) }), s.jsx(Kt, { size: 14, className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500", "aria-hidden": true })] }), e.length > 1 ? s.jsxs("span", { className: "shrink-0 text-[10px] tabular-nums text-slate-400 dark:text-slate-500", children: [e.findIndex((b) => b.id === t) + 1, "/", e.length] }) : null, c ? s.jsx("button", { type: "button", onClick: () => L(c.id), className: "shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400", title: "\u5173\u95ED\u5F53\u524D\u62A5\u544A", "aria-label": "\u5173\u95ED\u5F53\u524D\u62A5\u544A", children: s.jsx(be, { size: 13 }) }) : null] }), c ? s.jsxs("div", { className: "flex shrink-0 items-center gap-1 border-l border-slate-200/90 pl-2 dark:border-slate-800", children: [M && m ? s.jsxs(s.Fragment, { children: [s.jsx("button", { type: "button", onClick: g, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u4E0B\u8F7D Markdown", children: "\u4E0B\u8F7D MD" }), s.jsx("button", { type: "button", onClick: v, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA Word", children: u === "word" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA Word" }), s.jsx("button", { type: "button", onClick: y, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA PDF", children: u === "pdf" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA PDF" })] }) : null, w ? s.jsxs(s.Fragment, { children: [s.jsx("button", { type: "button", onClick: () => l((b) => b + 1), className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u5237\u65B0", children: s.jsx(Gt, { size: 13 }) }), s.jsx("a", { href: c.url, target: "_blank", rel: "noopener noreferrer", className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u65B0\u7A97\u53E3\u6253\u5F00", children: s.jsx(Vt, { size: 13 }) }), s.jsx("button", { type: "button", onClick: i, className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u4E0B\u8F7D HTML", children: s.jsx(Jt, { size: 13 }) })] }) : null] }) : null] }), s.jsx("div", { className: "relative flex min-h-0 flex-1 flex-col overflow-hidden bg-white dark:bg-slate-900", children: c ? M ? s.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: j ? s.jsxs("div", { className: "flex h-full items-center justify-center text-sm text-slate-500", children: [s.jsx("span", { className: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" }), "\u6B63\u5728\u52A0\u8F7D Markdown\u2026"] }) : x ? s.jsx("div", { className: "flex h-full flex-col items-center justify-center gap-2 text-sm text-slate-500", children: s.jsxs("p", { children: ["\u52A0\u8F7D\u5931\u8D25: ", x] }) }) : s.jsx(rt, { content: k.trim() || "\u65E0\u5185\u5BB9" }) }) : s.jsx("iframe", { src: c.url, className: "min-h-0 w-full flex-1 border-0", title: c.title, sandbox: "allow-scripts allow-same-origin" }, `${c.id}-${o}`) : s.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-400", children: s.jsx("div", { className: "text-center text-sm", children: "\u8BF7\u4ECE\u4E0B\u62C9\u83DC\u5355\u9009\u62E9\u62A5\u544A" }) }) })] });
}
const Tr = "aichat-report-style:";
function De(e) {
  if (!e) return "auto";
  try {
    const t = localStorage.getItem(`${Tr}${e}`);
    if (t === "magazine" || t === "swiss" || t === "auto") return t;
  } catch {
  }
  return "auto";
}
const dt = [{ id: "w6", tag: "@w6", title: "\u6DF1\u5EA6\u8C03\u7814", description: "\u542F\u52A8 W6 \u5B50 Agent\uFF0C\u751F\u6210\u65B0\u7684\u8C03\u7814\u62A5\u544A" }, { id: "edit-html", tag: "@edit-html", title: "\u6539\u7248\u5F0F", description: "\u6309\u6307\u4EE4\u66F4\u65B0\u53F3\u4FA7 HTML \u9884\u89C8\uFF08\u4E0D\u6539 Markdown \u8BA8\u8BBA\uFF09" }], _r = [{ id: "w6", re: /^@w6\b/i }, { id: "edit-html", re: /^@edit-html\b/i }];
function Ne(e) {
  const t = e.trim();
  if (!t) return { mention: null, body: "", raw: t };
  for (const { id: r, re: n } of _r) if (n.test(t)) {
    const a = t.replace(n, "").trim();
    return { mention: r, body: a, raw: t };
  }
  return { mention: null, body: t, raw: t };
}
function Rr(e, t) {
  const r = e.trim().toLowerCase().replace(/^@/, "");
  return dt.filter((n) => n.id === "edit-html" && (t == null ? void 0 : t.editHtmlAvailable) === false ? false : r ? `${n.tag} ${n.id} ${n.title}`.toLowerCase().includes(r) : true);
}
function qe(e) {
  const t = dt.find((r) => r.id === e);
  return t ? `${t.tag} ` : "";
}
function Cr(e, t, r) {
  var _a, _b;
  const n = Ne(e), a = n.body || n.raw;
  if (n.mention === "w6") return a ? { kind: "w6_manual", message: n.raw } : { error: "\u8BF7\u5728 @w6 \u540E\u8F93\u5165\u8C03\u7814\u4E3B\u9898\u6216\u95EE\u9898" };
  if (n.mention === "edit-html") {
    if (!a) return { error: "\u8BF7\u5728 @edit-html \u540E\u8BF4\u660E\u8981\u5982\u4F55\u6539\u7248\u5F0F" };
    const l = (_a = r == null ? void 0 : r.htmlResourceId) == null ? void 0 : _a.trim();
    return l ? { kind: "edit_html", message: a, target_resource_id: l } : { error: "\u8BF7\u5148\u9009\u62E9\u4E00\u4EFD HTML \u62A5\u544A\u9884\u89C8\uFF0C\u518D\u4F7F\u7528 @edit-html" };
  }
  if (!t) return { kind: "deepseek", message: n.body };
  const o = (_b = r == null ? void 0 : r.mdResourceId) == null ? void 0 : _b.trim();
  return o ? { kind: "discuss", message: n.body, target_resource_id: o } : { kind: "discuss", message: n.body };
}
const ct = "aichat:report-context-dismiss";
function Se() {
  try {
    const e = sessionStorage.getItem(ct);
    if (!e) return {};
    const t = JSON.parse(e);
    return !t || typeof t != "object" ? {} : t;
  } catch {
    return {};
  }
}
function ut(e) {
  try {
    sessionStorage.setItem(ct, JSON.stringify(e));
  } catch {
  }
}
function Er(e) {
  var _a;
  return e && ((_a = Se()[e]) == null ? void 0 : _a.trim()) || null;
}
function Ir(e, t) {
  const r = Se();
  r[e] = t, ut(r);
}
function Fe(e) {
  const t = Se();
  delete t[e], ut(t);
}
function Ue(e, t, r) {
  return !e || !t ? false : r !== t;
}
function $r({ title: e, previewKind: t, enabled: r, disabled: n, onDismiss: a, onEnable: o }) {
  const l = t === "markdown" ? "Markdown" : "HTML \u9884\u89C8", u = t === "markdown" ? ye : Xt;
  return r ? s.jsxs("div", { className: U("flex items-start gap-2 rounded-lg border border-sky-200/80 bg-sky-50/60 px-3 py-2", "dark:border-sky-500/25 dark:bg-sky-950/30"), children: [s.jsx(u, { size: 14, className: "mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" }), s.jsxs("div", { className: "min-w-0 flex-1", children: [s.jsx("p", { className: "text-xs font-medium text-sky-900 dark:text-sky-100", children: "\u57FA\u4E8E\u5F53\u524D\u9884\u89C8\u8FFD\u95EE" }), s.jsxs("p", { className: "truncate text-xs text-sky-800/80 dark:text-sky-200/80", children: [e, s.jsxs("span", { className: "text-sky-600/70 dark:text-sky-400/70", children: [" \xB7 ", l] })] })] }), s.jsx("button", { type: "button", disabled: n, onClick: a, "aria-label": "\u5173\u95ED\u62A5\u544A\u4E0A\u4E0B\u6587", className: U("shrink-0 rounded p-1 text-sky-700/70 hover:bg-sky-100/80 hover:text-sky-900", "disabled:opacity-40 dark:text-sky-300/70 dark:hover:bg-sky-900/50 dark:hover:text-sky-100"), children: s.jsx(be, { size: 14 }) })] }) : s.jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900/50", children: [s.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF0C\u4E0D\u9644\u5E26\u62A5\u544A\u4E0A\u4E0B\u6587" }), s.jsxs("button", { type: "button", disabled: n, onClick: o, className: U("inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 font-medium text-slate-700", "hover:bg-white disabled:opacity-40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"), children: [s.jsx(Qt, { size: 12 }), "\u7ED1\u5B9A\u300C", e, "\u300D"] })] });
}
const Mr = /* @__PURE__ */ new Set(["", "\u65B0\u4F1A\u8BDD", "\u65B0\u7814\u7A76", "\u65B0\u5BF9\u8BDD", "\u8C03\u7814\u4E3B\u9898"]);
function X(e) {
  return Mr.has((e ?? "").trim());
}
function ft(e, t = 30) {
  const r = e.trim();
  if (!r) return "";
  const n = [...r];
  return n.length <= t ? r : `${n.slice(0, t - 1).join("")}\u2026`;
}
const Ar = ["\u4E3B\u9898:", "\u4E3B\u9898\uFF1A", "topic:", "topic\uFF1A", "\u8C03\u7814\u4E3B\u9898:", "\u8C03\u7814\u4E3B\u9898\uFF1A"];
function Lr(e) {
  for (const t of e.split(/\r?\n/)) {
    const r = t.trim();
    for (const n of Ar) if (r.startsWith(n)) {
      const a = r.slice(n.length).trim();
      if (a) return ft(a);
    }
  }
  return "";
}
function Pr(e) {
  var _a, _b;
  const t = (_a = e.sessionTitle) == null ? void 0 : _a.trim();
  if (t && !X(t)) return t;
  for (let r = e.rounds.length - 1; r >= 0; r--) {
    const n = e.rounds[r];
    if (n.anchorKind === "form" && n.anchorText) {
      const o = Lr(n.anchorText);
      if (o) return o;
    }
    const a = (_b = n.topic) == null ? void 0 : _b.trim();
    if (a && !X(a)) return ft(a);
  }
  return t || "\u65B0\u4F1A\u8BDD";
}
const Dr = "/aichat";
function ee(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Dr}${t}`;
}
function mt(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Ze.baseUrl}${t}`;
}
async function Y(e, t) {
  const r = oe(), n = { "Content-Type": "application/json", ...t == null ? void 0 : t.headers };
  r && (n.Authorization = `Bearer ${r}`);
  const a = await fetch(mt(e), { ...t, headers: n });
  if (a.status === 401) throw Yt(401), new Error("Unauthorized");
  if (!a.ok) {
    const o = await a.json().catch(() => ({}));
    throw new Error(o.detail || a.statusText);
  }
  return a.json();
}
function Oe(e, t = {}) {
  const r = new URLSearchParams(), n = t.sinceSeq ?? 0;
  n > 0 ? r.set("sinceSeq", String(n)) : (r.set("limit_rounds", String(t.limitRounds ?? 10)), t.beforeSeq && t.beforeSeq > 0 && r.set("before_seq", String(t.beforeSeq)));
  const a = r.toString() ? `?${r.toString()}` : "";
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/timeline${a}`);
}
function qr(e, t) {
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts`, { method: "POST", body: JSON.stringify(t) });
}
function Fr(e, t) {
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts/${encodeURIComponent(t)}/cancel`, { method: "POST", body: "{}" });
}
function te(e, t, r) {
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/rounds`, { method: "POST", body: JSON.stringify(t), signal: r });
}
function We(e, t) {
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/rounds/${encodeURIComponent(t)}/stop`, { method: "POST", body: "{}" });
}
function Ur(e, t) {
  const r = new URLSearchParams({ fromSeq: String(t) }), n = oe();
  return n && r.set("token", n), `${mt(`/aichat/sessions/${encodeURIComponent(e)}/stream`)}?${r.toString()}`;
}
function Or(e) {
  return Y(`/aichat/sessions/${encodeURIComponent(e)}/reports`);
}
function xt(e) {
  return ot(e);
}
const ze = 1e3, Wr = 3e4;
function zr(e, t, r, n) {
  let a = false, o = null, l = null, u = ze;
  const h = () => {
    l !== null && (clearTimeout(l), l = null);
  }, p = () => {
    if (a) return;
    h(), o == null ? void 0 : o.close(), o = null;
    const c = Ur(e, t()), k = new EventSource(c);
    o = k, k.addEventListener("event_appended", (j) => {
      if (!(a || o !== k)) try {
        const x = JSON.parse(j.data);
        u = ze, r(x);
      } catch {
      }
    }), k.onerror = () => {
      if (a || o !== k) return;
      k.close(), o = null;
      const j = u;
      u = Math.min(u * 2, Wr), l = setTimeout(() => {
        l = null, p();
      }, j);
    };
  };
  return p(), () => {
    a = true, h(), o == null ? void 0 : o.close(), o = null;
  };
}
function he(e) {
  var _a, _b, _c;
  const t = (_a = e.draft_id) == null ? void 0 : _a.trim();
  return t || ((_c = (_b = e.payload) == null ? void 0 : _b.draft_id) == null ? void 0 : _c.trim()) || "";
}
function Be(e) {
  const t = e.payload ?? {};
  return { draft_id: he(e) || t.draft_id, skill_id: t.skill_id, skill_key: t.skill_key, skill_name: t.skill_name || e.topic || e.body, form_schema: t.form_schema, round_id: t.round_id || e.round_id };
}
const Br = 4, Hr = 200;
function Kr(e) {
  const t = e.trim();
  return !(!t || t.length > Hr || /你是一个.{0,24}(助手|专家|模型|AI|智能体)/.test(t));
}
function Gr(e, t) {
  const r = (t == null ? void 0 : t.trim()) || "\u672C\u6B21\u7814\u7A76\u4E3B\u9898";
  return e === "info_research" ? [`\u9488\u5BF9\u300C${r}\u300D\u8FD8\u6709\u54EA\u4E9B\u4FE1\u606F\u7F3A\u53E3\u9700\u8981\u8865\u5145\u8C03\u7814\uFF1F`, "\u8BF7\u68B3\u7406\u62A5\u544A\u4E2D\u7684\u5173\u952E\u5B9E\u4F53\u53CA\u5176\u5173\u8054\u5173\u7CFB", "\u5BF9\u6BD4\u4E0D\u540C\u4FE1\u6E90\u5BF9\u8BE5\u4E3B\u9898\u7684\u8BF4\u6CD5\u5DEE\u5F02", "\u8BF7\u7ED9\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u540E\u7EED\u5F00\u6E90\u8C03\u67E5\u65B9\u5411"] : e === "data_collection" ? [`\u300C${r}\u300D\u76F8\u5173\u516C\u5F00\u6570\u636E\u8FD8\u6709\u54EA\u4E9B\u672A\u6536\u5F55\uFF1F`, "\u8BF7\u9A8C\u8BC1\u62A5\u544A\u4E2D\u5173\u952E\u6570\u636E\u7684\u539F\u59CB\u51FA\u5904", "\u54EA\u4E9B\u6307\u6807\u503C\u5F97\u5EFA\u7ACB\u6301\u7EED\u76D1\u6D4B\uFF1F", "\u8BF7\u5217\u51FA\u53EF\u590D\u7528\u7684\u6570\u636E\u91C7\u96C6\u6E20\u9053\u4E0E\u65B9\u6CD5"] : [`\u62A5\u544A\u4E2D\u5BF9\u300C${r}\u300D\u7684\u6838\u5FC3\u7ED3\u8BBA\u662F\u4EC0\u4E48\uFF1F`, "\u6709\u54EA\u4E9B\u5173\u952E\u8BC1\u636E\u4ECD\u9700\u8981\u8FDB\u4E00\u6B65\u6838\u5B9E\uFF1F", "\u5982\u679C\u8BE5\u4E3B\u5F20\u5728\u793E\u4EA4\u5A92\u4F53\u4F20\u64AD\uFF0C\u5E94\u5982\u4F55\u8F9F\u8C23\u6216\u6807\u6CE8\uFF1F", "\u8BF7\u5217\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u4E0B\u4E00\u6B65\u8C03\u67E5\u5EFA\u8BAE\u3002"];
}
function Vr(e) {
  const t = e.limit ?? Br, r = /* @__PURE__ */ new Set(), n = [], a = (o) => {
    const l = o.trim();
    !l || !Kr(l) || r.has(l) || n.length >= t || (r.add(l), n.push({ text: l, mode: "w6" }));
  };
  for (const o of e.followUpQuestions) a(o);
  for (const o of e.w6FollowUps ?? []) a(o);
  if (n.length < t) {
    for (const o of Gr(e.skillKey, e.reportTitle)) if (a(o), n.length >= t) break;
  }
  return n;
}
function Jr(e) {
  return Vr({ followUpQuestions: e.questions, skillKey: e.skillKey ?? null, reportTitle: e.reportTitle }).map((r) => r.text);
}
function He(e, t, r, n) {
  for (let a = e.length - 1; a >= 0; a--) e[a].roundId === t && e[a].kind === r && e.splice(a, 1);
  e.push({ ...n, roundId: t, kind: r });
}
function Ke() {
  return { status: "running", logs: [], progress: 0, lastLine: "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026" };
}
function B(e, t) {
  let r = e.get(t);
  return r || (r = { id: t, kind: "w6_manual", topic: "", anchorText: "", anchorKind: "user", sealed: false }, e.set(t, r)), r;
}
function xe(e, t = null, r = 1) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const n = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [];
  let u = "";
  const h = [], p = (x) => {
    const m = a.get(x);
    if (!m) return;
    const i = l.findIndex((g) => g.entryKind === "round" && g.round.id === x);
    i >= 0 ? l[i] = { entryKind: "round", round: m } : l.push({ entryKind: "round", round: m });
  }, c = (x) => {
    if (x.status !== "pending") return;
    const m = l.findIndex((i) => i.entryKind === "form_draft" && i.draft.id === x.id);
    m >= 0 ? l[m] = { entryKind: "form_draft", draft: x } : l.push({ entryKind: "form_draft", draft: x });
  }, k = (x) => {
    const m = l.findIndex((i) => i.entryKind === "form_draft" && i.draft.id === x);
    m >= 0 && l.splice(m, 1);
  };
  for (const x of e ?? []) {
    const m = (_a = x.round_id) == null ? void 0 : _a.trim();
    switch (x.type) {
      case "form_presented": {
        const i = Be(x), g = he(x);
        if (!g) break;
        const v = { id: g, skillId: ((_b = i.skill_id) == null ? void 0 : _b.trim()) || "", skillKey: ((_c = i.skill_key) == null ? void 0 : _c.trim()) || "", skillName: ((_d = i.skill_name) == null ? void 0 : _d.trim()) || "\u6280\u80FD\u4EFB\u52A1", formSchema: i.form_schema || "", status: "pending" };
        o.set(g, v), c(v);
        break;
      }
      case "form_cancelled": {
        const i = he(x);
        if (!i) break;
        const g = o.get(i);
        g && (g.status = "cancelled", k(i));
        break;
      }
      case "form_draft_submitted": {
        const i = he(x);
        if (!i) break;
        const g = o.get(i);
        g && (g.status = "submitted", g.submittedRoundId = m || Be(x).round_id, k(i));
        break;
      }
      case "session_title":
        ((_e = x.title) == null ? void 0 : _e.trim()) && (u = x.title.trim());
        break;
      case "round_started": {
        if (!m) break;
        const i = B(a, m);
        n.includes(m) || n.push(m), i.kind = x.kind || i.kind, i.topic = ((_f = x.topic) == null ? void 0 : _f.trim()) || ((_g = x.body) == null ? void 0 : _g.trim()) || i.topic, i.anchorText = ((_h = x.body) == null ? void 0 : _h.trim()) || i.anchorText, i.anchorKind = i.kind === "w6_form" ? "form" : i.kind === "discuss" ? "discuss" : "user", i.sealed = false, p(m);
        break;
      }
      case "form_submitted": {
        if (!m) break;
        const i = B(a, m);
        n.includes(m) || n.push(m), i.anchorText = ((_i = x.body) == null ? void 0 : _i.trim()) || i.anchorText, i.anchorKind = "form";
        break;
      }
      case "w6_status": {
        if (!m) break;
        const i = B(a, m);
        i.w6 || (i.w6 = Ke()), i.w6.status = x.status || i.w6.status;
        break;
      }
      case "w6_log": {
        if (!m) break;
        const i = B(a, m);
        i.w6 || (i.w6 = Ke());
        const g = ((_j = x.body) == null ? void 0 : _j.trim()) || "";
        g && (i.w6.logs.push({ logType: x.log_type || "log", body: g, progress: x.progress }), i.w6.lastLine = g.slice(0, 120)), x.progress != null && (i.w6.progress = x.progress);
        break;
      }
      case "assistant_delta": {
        if (!m) break;
        const i = B(a, m);
        i.assistantText = (i.assistantText || "") + (x.delta || "");
        break;
      }
      case "report_ready": {
        if (!m) break;
        const i = B(a, m);
        i.reportHtmlId = x.html_id || i.reportHtmlId, i.reportTitle = x.title || i.reportTitle;
        const g = x.title || "\u62A5\u544A", v = (_k = x.html_id) == null ? void 0 : _k.trim(), y = (_l = x.md_id) == null ? void 0 : _l.trim();
        v && He(h, m, "html", { id: v, resourceId: v, title: g }), y && y !== v && He(h, m, "markdown", { id: y, resourceId: y, title: `${g} (MD)` });
        break;
      }
      case "follow_ups": {
        if (!m) break;
        const i = B(a, m);
        ((_m = x.questions) == null ? void 0 : _m.length) && (i.guidedTopics = Jr({ questions: x.questions, reportTitle: i.reportTitle }));
        break;
      }
      case "round_sealed": {
        if (!m) break;
        const i = B(a, m);
        i.sealed = true, i.w6 && i.w6.status === "running" && (i.w6.status = "done");
        break;
      }
    }
  }
  const j = n.map((x) => a.get(x)).filter(Boolean);
  return { entries: l, rounds: j, activeRoundId: t, sessionTitle: u, reports: h, nextSeq: r };
}
function Qr(e) {
  return e.rounds.filter((t) => {
    var _a;
    return ((_a = t.w6) == null ? void 0 : _a.status) === "running" && !t.sealed;
  }).length;
}
const Ge = () => ({ entries: [], rounds: [], activeRoundId: null, sessionTitle: "", reports: [], nextSeq: 1 });
function Ve(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const n of e) r.set(n.seq, n);
  for (const n of t) r.set(n.seq, n);
  return [...r.values()].sort((n, a) => n.seq - a.seq);
}
const $ = qt((e, t) => ({ sessionId: null, events: [], projected: Ge(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null, setSessionId: (r) => e({ sessionId: r }), reset: () => e({ sessionId: null, events: [], projected: Ge(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null }), setEvents: (r, n = null, a = 1) => {
  e({ events: r, projected: xe(r, n, a) });
}, applyEvent: (r) => {
  const { events: n, projected: a, sessionId: o } = t();
  if (n.some((p) => p.seq === r.seq)) return;
  const l = a.nextSeq;
  if (l > 1 && r.seq > l) {
    o && t().loadTimeline(o, { silent: true });
    return;
  }
  const u = [...n, r].sort((p, c) => p.seq - c.seq), h = r.type === "round_started" ? r.round_id ?? a.activeRoundId : r.type === "round_sealed" && r.round_id === a.activeRoundId ? null : a.activeRoundId;
  e({ events: u, projected: xe(u, h, Math.max(a.nextSeq, r.seq + 1)) });
}, loadTimeline: async (r, n) => {
  const a = (n == null ? void 0 : n.silent) === true;
  e((o) => ({ loading: a ? o.loading : true, error: null, sessionId: r }));
  try {
    const o = await Oe(r), l = Array.isArray(o.events) ? o.events : [];
    e((u) => ({ events: l, projected: xe(l, o.active_round_id, o.next_seq), hasMore: o.has_more === true, oldestSeq: o.oldest_seq ?? 0, loading: a ? u.loading : false }));
  } catch (o) {
    e((l) => ({ loading: a ? l.loading : false, error: o instanceof Error ? o.message : "\u52A0\u8F7D\u5931\u8D25" }));
  }
}, loadEarlierTimeline: async (r) => {
  const { oldestSeq: n, loadingEarlier: a, hasMore: o } = t();
  if (!(!o || a || n <= 0)) {
    e({ loadingEarlier: true, error: null });
    try {
      const l = await Oe(r, { beforeSeq: n }), u = Array.isArray(l.events) ? l.events : [];
      e((h) => ({ events: Ve(h.events, u), projected: xe(Ve(h.events, u), l.active_round_id, l.next_seq), hasMore: l.has_more === true, oldestSeq: l.oldest_seq ?? h.oldestSeq, loadingEarlier: false }));
    } catch (l) {
      e({ loadingEarlier: false, error: l instanceof Error ? l.message : "\u52A0\u8F7D\u5931\u8D25" });
    }
  }
} })), Xr = 300;
function Yr(e) {
  const t = $((c) => c.loadTimeline), r = $((c) => c.applyEvent), n = $((c) => c.reset), a = $((c) => c.projected), o = $((c) => c.sessionId), l = $((c) => c.loading), u = $((c) => c.error), h = f.useRef(null), p = f.useCallback(() => {
    const { projected: c } = $.getState();
    return c.nextSeq > 1 ? c.nextSeq - 1 : 0;
  }, []);
  return f.useLayoutEffect(() => {
    if (!e) {
      n();
      return;
    }
    n();
  }, [e, n]), f.useEffect(() => {
    if (e) return t(e), () => {
      var _a;
      (_a = h.current) == null ? void 0 : _a.call(h), h.current = null;
    };
  }, [e, t]), f.useEffect(() => {
    var _a;
    if (!(!e || l || o !== e)) return (_a = h.current) == null ? void 0 : _a.call(h), h.current = zr(e, p, r), () => {
      var _a2;
      (_a2 = h.current) == null ? void 0 : _a2.call(h), h.current = null;
    };
  }, [e, l, o, r, p]), f.useEffect(() => {
    if (!e) return;
    let c = null;
    const k = () => {
      document.visibilityState === "visible" && $.getState().sessionId === e && t(e, { silent: true });
    }, j = () => {
      c !== null && clearTimeout(c), c = setTimeout(k, Xr);
    };
    return document.addEventListener("visibilitychange", j), window.addEventListener("focus", j), () => {
      c !== null && clearTimeout(c), document.removeEventListener("visibilitychange", j), window.removeEventListener("focus", j);
    };
  }, [e, t]), { projected: a, loading: l, error: u, loadedSessionId: o };
}
function Zr({ sessions: e, activeId: t, onSelect: r, onRename: n, onDelete: a }) {
  const o = [...e].sort((l, u) => new Date(u.created_at).getTime() - new Date(l.created_at).getTime());
  return s.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: o.length === 0 ? s.jsx("div", { className: "px-3 py-6 text-center text-xs text-slate-500", children: "\u6682\u65E0\u4F1A\u8BDD" }) : o.map((l) => s.jsx(es, { session: l, isActive: t === l.id, onClick: () => r(l.id), onRename: () => n(l.id), onDelete: () => a(l.id) }, l.id)) });
}
function es({ session: e, isActive: t, onClick: r, onRename: n, onDelete: a }) {
  return s.jsxs("div", { onClick: r, className: U("group flex cursor-pointer items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-2", t ? "border-blue-600 bg-blue-50/90 dark:border-blue-500 dark:bg-blue-950/35" : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-slate-800/60"), children: [s.jsx(Zt, { size: 13, className: "shrink-0" }), s.jsx("span", { className: "flex-1 truncate text-[13px]", children: e.title }), s.jsxs("div", { className: "relative opacity-0 group-hover:opacity-100", children: [s.jsx("button", { type: "button", className: "p-1", onClick: (o) => {
    o.stopPropagation(), n();
  }, children: s.jsx(er, { size: 12 }) }), s.jsx("button", { type: "button", className: "p-1", onClick: (o) => {
    o.stopPropagation(), a();
  }, children: s.jsx(tr, { size: 12 }) }), s.jsx(rr, { size: 12, className: "hidden" })] })] });
}
const ts = { pending: "\u53C2\u6570\u914D\u7F6E \xB7 \u5F85\u586B\u5199", submitted: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u63D0\u4EA4", cancelled: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u53D6\u6D88" };
function ht({ title: e, status: t, submittedSummary: r, children: n }) {
  const a = t === "pending" ? "border-amber-300/70 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/25" : t === "submitted" ? "border-emerald-300/60 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "pending" ? "bg-amber-500" : t === "submitted" ? "bg-emerald-500" : "bg-slate-400";
  return s.jsx("div", { className: `max-w-[92%] rounded-lg border ${a}`, children: s.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [s.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [s.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), s.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: ts[t] }), s.jsx("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: e })] }), t === "submitted" && r ? s.jsx("pre", { className: "whitespace-pre-wrap rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 font-sans text-[11px] leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400", children: r }) : null, t === "pending" && n ? s.jsx("div", { children: n }) : null] }) });
}
function rs({ content: e }) {
  return s.jsx("pre", { className: "whitespace-pre-wrap font-sans text-inherit", children: e });
}
function ss({ topic: e, onSelect: t, disabled: r }) {
  return s.jsx("button", { type: "button", disabled: r, onClick: () => t(e), title: e.text, className: "inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/40 dark:hover:text-blue-300", children: s.jsx("span", { className: "truncate", children: e.text }) });
}
function ns({ topics: e, onSelect: t, disabled: r }) {
  return e.length ? s.jsx("div", { className: "flex flex-wrap gap-1.5", children: e.map((n) => s.jsx(ss, { topic: n, onSelect: t, disabled: r }, n.text)) }) : null;
}
const as = { active: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u63A8\u8350\u8FFD\u95EE", used: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u5DF2\u9009\u7528" };
function os({ topics: e, status: t, onSelect: r, disabled: n = false }) {
  const a = t === "active" ? "border-violet-300/70 bg-violet-50/80 dark:border-violet-800 dark:bg-violet-950/25" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "active" ? "bg-violet-500" : "bg-slate-400";
  return s.jsx("div", { className: `max-w-[92%] rounded-lg border ${a}`, children: s.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), s.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: as[t] })] }), s.jsx(ns, { topics: e, onSelect: r, disabled: n || t === "used" })] }) });
}
const ls = { idle: "\u5F85\u547D", running: "\u8FD0\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", error: "\u51FA\u9519" }, is = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D\u2026", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" }, ds = { log: "\u65E5\u5FD7", tool: "\u5DE5\u5177", token: "\u8F93\u51FA", status: "\u72B6\u6001", done: "\u5B8C\u6210", error: "\u9519\u8BEF" };
function cs(e) {
  return e.message ? e.message : e.token ? e.token : e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "";
}
function us({ open: e, onClose: t, events: r, status: n, connection: a }) {
  const o = f.useRef(null);
  return f.useEffect(() => {
    var _a;
    e && ((_a = o.current) == null ? void 0 : _a.scrollTo({ top: o.current.scrollHeight, behavior: "smooth" }));
  }, [r, e]), e ? s.jsx("div", { className: "fixed inset-0 z-50 flex justify-end bg-black/40", onClick: t, role: "presentation", children: s.jsxs("div", { className: "flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900", onClick: (l) => l.stopPropagation(), role: "dialog", "aria-labelledby": "subagent-title", children: [s.jsxs("header", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800", children: [s.jsx("h2", { id: "subagent-title", className: "flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100", children: "\u5B50 Agent \xB7 W6" }), s.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${n === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" : n === "error" ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300" : n === "done" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`, children: ls[n] ?? n }), s.jsx("span", { className: "text-[10px] text-slate-500", children: is[a] }), s.jsx("button", { type: "button", onClick: t, className: "rounded p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200", "aria-label": "\u5173\u95ED", children: s.jsx(be, { size: 18 }) })] }), s.jsx("div", { ref: o, className: "flex-1 overflow-y-auto px-4 py-3 font-mono text-xs", children: r.length === 0 ? s.jsx("p", { className: "italic text-slate-500", children: "\u7B49\u5F85 W6 \u8F93\u51FA\u2026" }) : r.map((l, u) => s.jsxs("div", { className: "flex gap-2 border-b border-slate-100 py-2 last:border-0 dark:border-slate-800", children: [s.jsx("span", { className: "w-10 shrink-0 text-[10px] font-bold uppercase text-blue-600/90 dark:text-blue-400/90", children: ds[l.type] ?? l.type }), s.jsx("span", { className: "flex-1 break-words text-slate-700 dark:text-slate-300", children: cs(l) }), l.progress != null && l.progress > 0 ? s.jsxs("span", { className: "shrink-0 text-slate-500", children: [l.progress, "%"] }) : null] }, `${l.timestamp ?? u}-${u}`)) })] }) }) : null;
}
function fs({ content: e }) {
  return e ? s.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600", children: s.jsx(rt, { content: e }) }) : null;
}
function ms({ label: e }) {
  return s.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600 dark:bg-slate-900", role: "status", "aria-live": "polite", children: s.jsx("span", { className: "italic text-slate-500 dark:text-slate-400", children: e }) });
}
const xs = { tool: "\u5DE5\u5177", status: "\u72B6\u6001", phase: "\u9636\u6BB5", log: "\u65E5\u5FD7", token: "\u8F93\u51FA" };
function bt(e) {
  var _a, _b;
  const t = ((_a = e.message) == null ? void 0 : _a.trim()) || ((_b = e.token) == null ? void 0 : _b.trim()) || (e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "stopped" ? "\u5DF2\u624B\u52A8\u505C\u6B62 W6 \u8C03\u7814" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "");
  if (!t) return "";
  const r = xs[e.type];
  return r ? `[${r}] ${t}` : t;
}
function hs(e, t = 8) {
  const r = [];
  for (const n of e) {
    const a = bt(n);
    a && r.push(a);
  }
  return r.length <= t ? r : r.slice(-t);
}
function bs(e, t = 8) {
  var _a;
  const r = [];
  let n = "";
  const a = () => {
    if (!n) return;
    const o = n.length > 160 ? `\u2026${n.slice(-160)}` : n;
    r.push(`[\u8F93\u51FA] ${o}`), n = "";
  };
  for (const o of e) {
    if (o.type === "token" && ((_a = o.token) == null ? void 0 : _a.trim())) {
      n += o.token;
      continue;
    }
    a();
    const l = bt(o);
    l && r.push(l);
  }
  return a(), r.length <= t ? r : r.slice(-t);
}
const ps = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" };
function Je({ active: e, tone: t = "emerald" }) {
  const [r, n] = f.useState(1);
  if (f.useEffect(() => {
    if (!e) return;
    const o = setInterval(() => {
      n((l) => l % 3 + 1);
    }, 420);
    return () => clearInterval(o);
  }, [e]), !e) return null;
  const a = t === "amber" ? "text-amber-600 dark:text-amber-400" : t === "blue" ? "text-blue-600 dark:text-blue-400" : "text-emerald-600 dark:text-emerald-400";
  return s.jsx("span", { className: `inline-block min-w-[1.25rem] text-left text-[11px] font-bold leading-none tracking-widest ${a}`, "aria-hidden": true, children: ".".repeat(r) });
}
function gs({ connection: e }) {
  const t = ps[e] ?? e, r = e === "error" ? "border-red-200/80 bg-red-50/90 text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400" : e === "connecting" ? "border-amber-200/80 bg-amber-50/90 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400" : "border-emerald-200/80 bg-emerald-50/90 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400", n = e === "error" ? "bg-red-500" : e === "connecting" ? "bg-amber-500" : "bg-emerald-500";
  return s.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${r}`, title: t, children: [e === "connecting" ? s.jsx(st, { size: 10, className: "animate-spin", "aria-hidden": true }) : s.jsx("span", { className: `h-1.5 w-1.5 shrink-0 rounded-full ${n}`, "aria-hidden": true }), s.jsx("span", { children: t })] });
}
function ks(e, t) {
  return (t == null ? void 0 : t.trim()) ? t.trim() : e === "connecting" ? "\u6B63\u5728\u8FDE\u63A5 W6 \u8F93\u51FA\u6D41\u2026" : e === "open" ? "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85 W6 \u8F93\u51FA\u2026" : e === "error" ? "\u8FDE\u63A5\u5F02\u5E38\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026" : "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026";
}
function ws({ status: e, progress: t, lastLine: r, finalizing: n = false, connection: a, events: o = [], onClick: l, onStop: u, stopping: h = false, htmlReportId: p, htmlReportTitle: c, onOpenHtmlReport: k }) {
  const j = n ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u6536\u5C3E\u4E2D\u2026" : e === "running" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u8FD0\u884C\u4E2D" : e === "error" ? "W6 \u5B50 Agent \xB7 \u51FA\u9519" : e === "stopped" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u5DF2\u624B\u52A8\u505C\u6B62" : e === "done" ? "W6 \u5B50 Agent \xB7 \u5DF2\u5B8C\u6210" : "W6 \u5B50 Agent \xB7 \u5F85\u547D", x = n ? "border-amber-300/60 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/30" : e === "running" ? "border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30" : e === "error" ? "border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30" : e === "stopped" ? "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30" : e === "done" ? "border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30", m = e === "running" && !!u, i = e === "running" || n, g = i ? bs(o, 8) : hs(o, 4), v = f.useRef(null), y = n && !r.trim() ? "\u62A5\u544A\u8349\u7A3F\u5C31\u7EEA\uFF0C\u7B49\u5F85\u6536\u5C3E\u2026" : r, L = g.length > 0 ? g : i ? [ks(n ? "closed" : a, y)] : [];
  f.useEffect(() => {
    !i || !v.current || (v.current.scrollTop = v.current.scrollHeight);
  }, [L, i]);
  const M = (e === "running" || n) && t > 0, w = !!a && a !== "idle" && a !== "closed" && (e === "running" || n), b = p == null ? void 0 : p.trim(), T = jr(c || "\u8C03\u7814\u62A5\u544A", 28), E = n || a === "connecting" ? "amber" : "emerald";
  return s.jsxs("div", { className: `relative max-w-[85%] rounded-lg border ${x}`, children: [m ? s.jsx("button", { type: "button", onClick: (I) => {
    I.stopPropagation(), u == null ? void 0 : u();
  }, disabled: h, title: "\u505C\u6B62 W6 \u8C03\u7814", "aria-label": "\u505C\u6B62 W6 \u8C03\u7814", className: "absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400", children: s.jsx(sr, { size: 14 }) }) : null, s.jsxs("button", { type: "button", onClick: l, className: `flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${m ? "pr-9" : ""}`, children: [s.jsxs("div", { className: "flex w-full flex-wrap items-center gap-x-2 gap-y-1", children: [s.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${n ? "animate-pulse bg-amber-500" : e === "running" ? "animate-pulse bg-blue-500" : e === "error" ? "bg-red-500" : e === "stopped" ? "bg-slate-400" : e === "done" ? "bg-emerald-500" : "bg-slate-400"}` }), s.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: j }), M ? s.jsxs("span", { className: `text-[10px] ${n ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"}`, children: [t, "%"] }) : null, w && a ? s.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [s.jsx(gs, { connection: a }), s.jsx(Je, { active: true, tone: E })] }) : n ? s.jsx(Je, { active: true, tone: "amber" }) : null, s.jsx("span", { className: "ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80", children: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u8F93\u51FA" })] }), L.length > 0 ? s.jsx("div", { ref: v, className: `w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${i ? "min-h-[4.5rem] max-h-32 overflow-y-auto" : ""}`, children: L.map((I, O) => {
    const P = i && O === L.length - 1, W = i && g.length === 0;
    return s.jsxs("p", { className: `text-[11px] leading-relaxed ${P ? "text-slate-700 dark:text-slate-200" : "truncate text-slate-500 dark:text-slate-500"} ${W && P ? "animate-pulse" : ""}`, title: I, children: [I, P && i && g.length > 0 ? s.jsx("span", { className: `ml-0.5 inline-block h-3 w-0.5 animate-pulse align-middle ${n ? "bg-amber-500" : "bg-blue-500"}` }) : null] }, `${O}-${I.slice(0, 24)}`);
  }) }) : y ? s.jsx("p", { className: "w-full truncate text-[11px] text-slate-500", children: y }) : null] }), b && k && e !== "stopped" && e !== "error" ? s.jsxs("button", { type: "button", onClick: () => k(b), className: "flex w-full items-center gap-2 border-t border-slate-200/80 px-3 py-2 text-left text-[11px] text-blue-700 transition-colors hover:bg-blue-50/80 dark:border-slate-700 dark:text-blue-400 dark:hover:bg-blue-950/30", children: [s.jsx(tt, { size: 13, className: "shrink-0", "aria-hidden": true }), s.jsxs("span", { className: "truncate", children: ["\u5728\u9884\u89C8\u533A\u6253\u5F00 HTML \u62A5\u544A", s.jsxs("span", { className: "text-slate-500 dark:text-slate-400", children: [" \xB7 ", T] })] })] }) : null] });
}
function ys(e) {
  return Ne(e).mention === "edit-html";
}
function vs(e) {
  var _a;
  return e.sealed || e.w6 || e.kind !== "deepseek" && e.kind !== "discuss" ? false : !((_a = e.assistantText) == null ? void 0 : _a.trim());
}
function js(e) {
  return vs(e) ? e.kind === "deepseek" ? "\u601D\u8003\u4E2D\u2026" : e.kind === "discuss" ? ys(e.anchorText) ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u5206\u6790\u62A5\u544A\u4E2D\u2026" : null : null;
}
function Ns(e) {
  return e.map((t, r) => ({ type: t.logType === "token" ? "token" : "log", message: t.body, token: t.logType === "token" ? t.body : void 0, progress: t.progress, timestamp: r }));
}
function Ss(e, t) {
  return e === "error" ? "error" : e === "stopped" ? "stopped" : t ? "done" : e === "running" ? "running" : e === "idle" ? "idle" : e === "done" ? "done" : "idle";
}
function Ts({ round: e, isActive: t, onStop: r, onSelectTopic: n, onOpenHtmlReport: a, chipsDisabled: o = false }) {
  var _a;
  const [l, u] = f.useState(false), h = e.w6, p = Ss(h == null ? void 0 : h.status, e.sealed), c = p === "idle" && !e.sealed && !!h, k = h ? Ns(h.logs) : [], j = c ? "running" : p === "idle" ? "idle" : p, x = t && (p === "running" || c) ? "open" : "closed", m = js(e);
  return s.jsxs("div", { className: "space-y-3", children: [e.anchorKind === "form" ? s.jsx(ht, { title: e.topic || "\u6280\u80FD\u4EFB\u52A1", status: "submitted", submittedSummary: e.anchorText }) : e.anchorText ? s.jsx("div", { className: "flex justify-end", children: s.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-3 py-2 text-xs text-white dark:bg-slate-100 dark:text-slate-900", children: s.jsx(rs, { content: e.anchorText }) }) }) : null, h ? s.jsxs(s.Fragment, { children: [s.jsx(ws, { status: p, finalizing: c, connection: t && (p === "running" || c) ? "open" : p === "running" ? "connecting" : "closed", progress: h.progress, lastLine: h.lastLine, events: k, onClick: () => u(true), onStop: p === "running" ? r : void 0, htmlReportId: p === "stopped" ? void 0 : e.reportHtmlId, htmlReportTitle: e.reportTitle, onOpenHtmlReport: a }), s.jsx(us, { open: l, onClose: () => u(false), events: k, status: j, connection: x })] }) : null, e.assistantText ? s.jsx(fs, { content: e.assistantText }) : m ? s.jsx(ms, { label: m }) : null, e.sealed && ((_a = e.guidedTopics) == null ? void 0 : _a.length) ? s.jsx(os, { topics: e.guidedTopics.map((i) => ({ text: i, mode: "w6" })), status: "active", onSelect: (i) => n == null ? void 0 : n(i.text), disabled: o }) : null] });
}
function Te(e, t) {
  return t == null || t === "" ? false : Array.isArray(t) ? t.length > 0 : true;
}
function _s(e, t) {
  const r = { ...t };
  for (const n of e) !Te(n, r[n.name]) && n.default !== void 0 && (r[n.name] = n.default);
  return r;
}
function Rs(e, t) {
  for (const r of e) if (r.required && !Te(r, t[r.name] ?? r.default)) return false;
  return true;
}
function Cs({ fields: e, onSubmit: t, disabled: r = false, stepMode: n = true }) {
  const [a, o] = f.useState(() => $e(e)), [l, u] = f.useState(0), h = e.map((g) => g.name).join("\0");
  if (f.useEffect(() => {
    o($e(e)), u(0);
  }, [h]), e.length === 0) return s.jsx("p", { className: "text-xs text-slate-500", children: "form_schema \u65E0\u6709\u6548 fields" });
  const p = () => {
    t(_s(e, a));
  };
  if (!n) return s.jsxs("div", { className: "space-y-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900", children: [s.jsx(Me, { fields: e, formData: a, onChange: (g, v) => o((y) => ({ ...y, [g]: v })), compact: true }), s.jsxs("button", { type: "button", onClick: p, disabled: r || !Rs(e, a), className: "flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", children: [s.jsx(Ae, { size: 14 }), "\u63D0\u4EA4"] })] });
  const c = e[l], k = l >= e.length - 1, j = a[c.name], x = !c.required || Te(c, j ?? c.default), m = () => {
    k ? p() : u((g) => g + 1);
  }, i = () => {
    k ? p() : u((g) => g + 1);
  };
  return s.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900", children: [s.jsxs("div", { className: "mb-4 flex items-center gap-1.5", children: [e.map((g, v) => s.jsx("div", { className: `h-1 flex-1 rounded-full transition-colors ${v < l ? "bg-blue-600 dark:bg-blue-500" : v === l ? "bg-blue-400 dark:bg-blue-400/70" : "bg-slate-200 dark:bg-slate-700"}` }, v)), s.jsxs("span", { className: "ml-1 text-xs text-slate-500 dark:text-slate-400", children: [l + 1, "/", e.length] })] }), s.jsx(Me, { fields: [c], formData: a, onChange: (g, v) => o((y) => ({ ...y, [g]: v })), compact: true }), s.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [s.jsxs("button", { type: "button", onClick: () => u((g) => Math.max(0, g - 1)), disabled: r || l === 0, className: "flex items-center gap-1 px-3 py-2 text-xs text-slate-500 transition-colors hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-400 dark:hover:text-slate-200", children: [s.jsx(nr, { size: 14 }), "\u4E0A\u4E00\u6B65"] }), s.jsx("div", { className: "flex-1" }), c.required ? null : s.jsxs("button", { type: "button", onClick: i, disabled: r, className: "flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-300", children: [s.jsx(ar, { size: 14 }), "\u8DF3\u8FC7"] }), s.jsx("button", { type: "button", onClick: m, disabled: r || !x, className: "flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-blue-600 dark:hover:bg-blue-500", children: k ? s.jsxs(s.Fragment, { children: [s.jsx(Ae, { size: 14 }), "\u5F00\u59CB\u6267\u884C"] }) : s.jsxs(s.Fragment, { children: ["\u4E0B\u4E00\u6B65", s.jsx(or, { size: 14 })] }) })] })] });
}
function Es(e) {
  try {
    return JSON.parse(e).fields || [];
  } catch {
    return [];
  }
}
function Is({ draft: e, disabled: t, onSubmit: r, onCancel: n }) {
  const a = Es(e.formSchema);
  return a.length === 0 ? s.jsx("p", { className: "text-xs text-slate-500", children: "\u6280\u80FD\u8868\u5355\u914D\u7F6E\u65E0\u6548\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002" }) : s.jsxs("div", { className: "relative", children: [s.jsx("button", { type: "button", disabled: t, onClick: n, "aria-label": "\u53D6\u6D88\u6280\u80FD\u8868\u5355", className: "absolute right-2 top-2 z-10 rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-200", children: s.jsx(be, { size: 14 }) }), s.jsx(ht, { title: e.skillName || "\u6280\u80FD\u4EFB\u52A1", status: "pending", children: s.jsx(Cs, { fields: a, onSubmit: r, disabled: t }) })] });
}
function $s() {
  return s.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-white/75 backdrop-blur-[2px] dark:bg-[#212121]/80", role: "status", "aria-live": "polite", "aria-busy": "true", "aria-label": "\u6B63\u5728\u52A0\u8F7D\u4F1A\u8BDD", children: s.jsx("div", { className: "flex flex-col items-center gap-3", children: s.jsx(st, { size: 32, strokeWidth: 2, className: "animate-spin text-slate-500 dark:text-slate-400" }) }) });
}
function Ms({ items: e, activeIndex: t, onPick: r }) {
  return e.length === 0 ? null : s.jsx("div", { role: "listbox", className: "absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900", children: e.map((n, a) => s.jsxs("button", { type: "button", role: "option", "aria-selected": a === t, onMouseDown: (o) => {
    o.preventDefault(), r(n.id);
  }, className: U("flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left transition-colors", a === t ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800/60"), children: [s.jsxs("span", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: [s.jsx("span", { className: "font-mono text-sky-700 dark:text-sky-400", children: n.tag }), s.jsx("span", { className: "ml-2 text-slate-600 dark:text-slate-300", children: n.title })] }), s.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: n.description })] }, n.id)) });
}
function As(e, t) {
  const n = e.slice(0, t).match(/@([a-z0-9-]*)$/i);
  return n ? n[1] ?? "" : null;
}
function Ls({ disabled: e, busy: t = false, isStreaming: r = false, editHtmlAvailable: n = true, onSend: a, onStop: o, placeholder: l = "\u8F93\u5165\u6D88\u606F\uFF1B\u8F93\u5165 @ \u9009\u62E9\u6DF1\u5EA6\u8C03\u7814\u6216\u6539\u7248\u5F0F" }) {
  const [u, h] = f.useState(""), [p, c] = f.useState(false), [k, j] = f.useState(""), [x, m] = f.useState(0), i = f.useRef(null), g = Rr(k, { editHtmlAvailable: n }), v = f.useCallback((w, b) => {
    const T = As(w, b);
    if (T === null) {
      c(false), j(""), m(0);
      return;
    }
    c(true), j(T), m(0);
  }, []), y = f.useCallback((w) => {
    const b = i.current;
    if (!b) return;
    const T = b.selectionStart ?? u.length, E = u.slice(0, T), I = u.slice(T), O = E.match(/@([a-z0-9-]*)$/i), P = O ? E.slice(0, E.length - O[0].length) : E, W = `${P}${qe(w)}${I}`;
    h(W), c(false), j("");
    const H = P.length + qe(w).length;
    requestAnimationFrame(() => {
      b.focus(), b.setSelectionRange(H, H);
    });
  }, [u]), L = () => {
    const w = u.trim();
    !w || e || t || r || (a(w), h(""), c(false));
  }, M = Ne(u).mention;
  return s.jsxs("div", { className: "relative", children: [M ? s.jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400", children: [s.jsxs("span", { className: "rounded-md bg-sky-50 px-2 py-0.5 font-mono text-sky-700 dark:bg-sky-950/40 dark:text-sky-300", children: ["@", M === "edit-html" ? "edit-html" : "w6"] }), s.jsx("span", { children: M === "w6" ? "\u5C06\u542F\u52A8\u6DF1\u5EA6\u8C03\u7814" : "\u5C06\u66F4\u65B0\u53F3\u4FA7 HTML \u9884\u89C8" })] }) : null, p && g.length > 0 ? s.jsx(Ms, { items: g, activeIndex: x, onPick: y }) : null, s.jsxs("div", { className: "flex gap-2", children: [s.jsx("textarea", { ref: i, value: u, onChange: (w) => {
    h(w.target.value), v(w.target.value, w.target.selectionStart ?? w.target.value.length);
  }, onClick: (w) => v(w.currentTarget.value, w.currentTarget.selectionStart ?? 0), onKeyDown: (w) => {
    if (p && g.length > 0) {
      if (w.key === "ArrowDown") {
        w.preventDefault(), m((b) => (b + 1) % g.length);
        return;
      }
      if (w.key === "ArrowUp") {
        w.preventDefault(), m((b) => (b - 1 + g.length) % g.length);
        return;
      }
      if (w.key === "Tab" || w.key === "Enter") {
        w.preventDefault();
        const b = g[x] ?? g[0];
        b && y(b.id);
        return;
      }
      if (w.key === "Escape") {
        w.preventDefault(), c(false);
        return;
      }
    }
    if (w.key === "Enter" && !w.shiftKey) {
      if (w.preventDefault(), r) {
        o == null ? void 0 : o();
        return;
      }
      L();
    }
  }, rows: 2, disabled: e && !r, placeholder: l, className: U("min-h-[44px] flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm", "dark:border-slate-700 dark:bg-slate-900") }), r ? s.jsx("button", { type: "button", onClick: o, className: "rounded-lg border border-red-200 bg-red-50 px-4 text-sm text-red-600 hover:bg-red-100 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-400", children: "\u505C\u6B62" }) : s.jsx("button", { type: "button", disabled: e || t || !u.trim(), onClick: L, className: "rounded-lg bg-slate-900 px-4 text-sm text-white disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900", children: "\u53D1\u9001" })] })] });
}
function Ps(e) {
  if (!e) return [];
  try {
    return JSON.parse(e.form_schema).fields || [];
  } catch {
    return [];
  }
}
const Ds = 15e3;
function qs(e) {
  const t = (e || "").toLowerCase();
  return t === "document" || t.includes("markdown") || t === "md" ? "markdown" : "html";
}
function Fs(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const a = at(n.url || n.id);
    !a || r.has(a) || (r.add(a), t.push({ id: a, url: n.url || xt(a), resourceId: a, title: n.name || n.title || "\u62A5\u544A", timestamp: Date.now(), kind: qs(n.type) }));
  }
  return t;
}
function Us(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const [n, a] of e.entries()) {
    const o = at(a.resourceId);
    !o || r.has(o) || (r.add(o), t.push({ id: o, url: xt(o), resourceId: o, title: a.title || "\u62A5\u544A", timestamp: n * 1e3, kind: a.kind, roundId: a.roundId }));
  }
  return t;
}
function Qe(e, t, r) {
  if (e.roundId) {
    const u = t.find((h) => h.roundId === e.roundId && h.kind === r);
    if (u) return u;
  }
  const n = e.timestamp ?? 0;
  let a, o = Number.POSITIVE_INFINITY;
  for (const u of t) {
    if (u.kind !== r) continue;
    const h = Math.abs((u.timestamp ?? 0) - n);
    h < o && (o = h, a = u);
  }
  if (a && o <= Ds) return a;
  const l = t.findIndex((u) => u.id === e.id);
  if (l >= 0) for (let u = 1; u <= 2; u++) {
    const h = t[l - u], p = t[l + u];
    if ((h == null ? void 0 : h.kind) === r) return h;
    if ((p == null ? void 0 : p.kind) === r) return p;
  }
}
function Xe(e, t) {
  var _a, _b, _c, _d;
  if (!e) return {};
  const r = ((_a = e.resourceId) == null ? void 0 : _a.trim()) || ((_b = e.id) == null ? void 0 : _b.trim());
  if (!r) return {};
  const n = t.find((o) => o.id === e.id) ?? { ...e };
  if (n.kind === "markdown") {
    const o = Qe(n, t, "html");
    return { mdResourceId: r, htmlResourceId: (_c = o == null ? void 0 : o.resourceId) == null ? void 0 : _c.trim() };
  }
  const a = Qe(n, t, "markdown");
  return { htmlResourceId: r, mdResourceId: (_d = a == null ? void 0 : a.resourceId) == null ? void 0 : _d.trim() };
}
function Os(e) {
  var _a, _b;
  const t = e.activeRoundId;
  if (!t) return { kind: null, roundId: null };
  const r = e.rounds.find((n) => n.id === t);
  return !r || r.sealed ? { kind: null, roundId: null } : ((_a = r.w6) == null ? void 0 : _a.status) === "running" || Qr(e) > 0 ? { kind: "w6", roundId: ((_b = e.rounds.find((a) => {
    var _a2;
    return ((_a2 = a.w6) == null ? void 0 : _a2.status) === "running" && !a.sealed;
  })) == null ? void 0 : _b.id) ?? t } : r.kind === "discuss" ? { kind: "discuss", roundId: t } : r.kind === "deepseek" ? { kind: "deepseek", roundId: t } : { kind: null, roundId: null };
}
function Ks() {
  const e = lr(), { sessionId: t } = ir(), { user: r } = dr(), n = r == null ? void 0 : r.id, { sessions: a, fetchSessions: o, createSession: l, updateSession: u, deleteSession: h, fetchIntelligenceSkills: p, intelligenceSkills: c, executeIntelligenceSkill: k } = Le(), { prompt: j, confirm: x } = cr(), { addToast: m } = et(), i = ur(), g = (i == null ? void 0 : i.leftCollapsed) ?? false, v = i == null ? void 0 : i.setRightCollapsed, [y, L] = f.useState(false), [M, w] = f.useState(() => De(n)), [b, T] = f.useState([]), [E, I] = f.useState(null), [O, P] = f.useState([]), [W, H] = f.useState(null), [pe, le] = f.useState(null), [K, z] = f.useState(false), D = f.useRef(null), _e = f.useRef(null), { projected: R, loading: Re, error: Ce, loadedSessionId: pt } = Yr(t), gt = $((d) => d.hasMore), Ee = $((d) => d.loadingEarlier), kt = $((d) => d.loadEarlierTimeline), ie = $((d) => d.loadTimeline), J = !!(t && pt === t && !Re), de = f.useMemo(() => Os(R), [R]), q = de.kind != null, ge = !J || K || q, ce = !!(t && Re), _ = f.useMemo(() => {
    const d = Us(R.reports);
    return d.length > 0 ? d : O.map((N, S) => ({ ...N, timestamp: S * 1e3 }));
  }, [O, R.reports]);
  f.useEffect(() => {
    p(), fr.listGroups().then(T).catch(() => {
    }), o().finally(() => L(true));
  }, [p, o]), f.useEffect(() => {
    w(De(n));
  }, [n]), f.useEffect(() => {
    if (!t) {
      P([]);
      return;
    }
    Or(t).then((d) => {
      P(Fs(d));
    });
  }, [t]), f.useEffect(() => {
    var _a;
    (_a = D.current) == null ? void 0 : _a.abort(), D.current = null, z(false), le(Er(t));
  }, [t]), f.useEffect(() => () => {
    var _a;
    (_a = D.current) == null ? void 0 : _a.abort(), D.current = null;
  }, []);
  const F = f.useMemo(() => Pr({ sessionTitle: R.sessionTitle, rounds: R.rounds }), [R.sessionTitle, R.rounds]);
  f.useEffect(() => {
    if (!J || !t) return;
    const d = a.find((N) => N.id === t);
    d && X(d.title) && F.trim() && !X(F) && F !== d.title && u(t, F.trim());
  }, [J, t, F, a, u]), f.useEffect(() => {
    _.length !== 0 && (H((d) => d && _.some((N) => N.id === d) ? d : _[_.length - 1].id), v == null ? void 0 : v(false));
  }, [_, v]);
  const ke = f.useMemo(() => t ? a.find((d) => d.id === t) : void 0, [a, t]), wt = f.useMemo(() => {
    var _a, _b;
    if (!J) return (ke == null ? void 0 : ke.title) || "\u65B0\u4F1A\u8BDD";
    if (!X(F)) return F;
    const d = R.rounds[R.rounds.length - 1], S = (_b = (_a = R.activeRoundId ? R.rounds.find((G) => G.id === R.activeRoundId) : d) == null ? void 0 : _a.topic) == null ? void 0 : _b.trim();
    return S && !X(S) ? S : (ke == null ? void 0 : ke.title) || F || "\u65B0\u4F1A\u8BDD";
  }, [J, F, R.rounds, R.activeRoundId, ke == null ? void 0 : ke.title]), yt = _.length > 0, we = f.useCallback(async () => {
    $.getState().reset();
    const d = await l("\u65B0\u4F1A\u8BDD");
    e(ee(`/sessions/${d.id}`));
  }, [l, e]), vt = f.useCallback(async (d) => {
    var _a, _b;
    const S = ((_b = (_a = a.find((V) => V.id === d)) == null ? void 0 : _a.title) == null ? void 0 : _b.trim()) || "\u672A\u547D\u540D\u4F1A\u8BDD";
    if (!await x({ title: "\u5220\u9664\u4F1A\u8BDD", message: `\u786E\u5B9A\u5220\u9664\u4F1A\u8BDD\u300C${S}\u300D\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002`, variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) || (await h(d), d !== t)) return;
    $.getState().reset();
    const C = Le.getState().sessions;
    if (C.length > 0) {
      e(ee(`/sessions/${C[0].id}`));
      return;
    }
    const Z = await l("\u65B0\u4F1A\u8BDD");
    e(ee(`/sessions/${Z.id}`), { replace: true });
  }, [a, x, h, t, e, l]);
  f.useEffect(() => {
    y && !t && a.length > 0 ? e(ee(`/sessions/${a[0].id}`), { replace: true }) : y && !t && a.length === 0 && we();
  }, [y, t, a, e, we]);
  const ue = f.useCallback(() => {
    var _a;
    (_a = D.current) == null ? void 0 : _a.abort();
    const d = new AbortController();
    return D.current = d, z(true), d;
  }, []), fe = f.useCallback(() => {
    D.current = null, z(false);
  }, []), jt = f.useCallback(() => {
    var _a;
    (_a = D.current) == null ? void 0 : _a.abort(), D.current = null, z(false), t && de.roundId && We(t, de.roundId);
  }, [de, t]), me = f.useCallback(async (d) => {
    if (!t) return;
    const N = ue();
    try {
      const S = d.replace(/^@w6\s*/i, "").trim();
      await te(t, { kind: "w6_manual", message: S || d }, N.signal);
    } catch (S) {
      if (S instanceof Error && S.name === "AbortError") return;
      throw S;
    } finally {
      fe();
    }
  }, [t, ue, fe]), Nt = f.useCallback((d) => {
    if (K || q) {
      m("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    me(d);
  }, [K, q, me, m]), St = f.useCallback(async (d) => {
    if (!t || q) return;
    const N = _.length > 0 ? _.find((V) => V.id === W) ?? _[_.length - 1] : void 0, S = Xe(N, _), G = Ue(t, N == null ? void 0 : N.id, pe), C = Cr(d, G, S);
    if ("error" in C) {
      m("error", C.error);
      return;
    }
    if (C.kind === "w6_manual") {
      await me(C.message);
      return;
    }
    const Z = ue();
    try {
      C.kind === "edit_html" ? await te(t, { kind: "discuss", message: C.message, mode: "edit_html", target_resource_id: C.target_resource_id }, Z.signal) : C.kind === "discuss" ? await te(t, { kind: "discuss", message: C.message, ...C.target_resource_id ? { target_resource_id: C.target_resource_id } : {} }, Z.signal) : await te(t, { kind: "deepseek", message: C.message }, Z.signal);
    } catch (V) {
      if (V instanceof Error && V.name === "AbortError") return;
      throw V;
    } finally {
      fe();
    }
  }, [t, q, me, _, W, pe, ue, fe, m]), Tt = f.useCallback(async (d) => {
    if (!t) return;
    if (K || q) {
      m("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    if (Ps(d).length === 0) {
      m("error", "\u8BE5\u6280\u80FD\u672A\u914D\u7F6E\u8868\u5355\u5B57\u6BB5");
      return;
    }
    z(true);
    try {
      await qr(t, { skill_id: d.id, skill_key: d.key, skill_name: d.name, form_schema: d.form_schema }), await ie(t, { silent: true }), requestAnimationFrame(() => {
        var _a;
        (_a = _e.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      });
    } catch (S) {
      m("error", S instanceof Error ? S.message : "\u65E0\u6CD5\u6253\u5F00\u6280\u80FD\u8868\u5355");
    } finally {
      z(false);
    }
  }, [t, K, q, m, ie]), _t = f.useCallback(async (d, N, S, G) => {
    if (t) {
      z(true);
      try {
        const C = await k(N, G);
        await te(t, { kind: "w6_form", skill_key: S, form_data: G, rendered_prompt: C, report_style: M, draft_id: d });
      } finally {
        z(false);
      }
    }
  }, [t, k, M]), Rt = f.useCallback(async (d) => {
    if (t) try {
      await Fr(t, d), await ie(t, { silent: true });
    } catch (N) {
      m("error", N instanceof Error ? N.message : "\u53D6\u6D88\u5931\u8D25");
    }
  }, [t, m, ie]), A = _.find((d) => d.id === W) ?? _[_.length - 1], Ie = Ue(t, A == null ? void 0 : A.id, pe), Ct = A ? ne(A, _.findIndex((d) => d.id === A.id), _) : "", Et = n ? `aichat-panels:${n}` : void 0, It = f.useCallback((d) => {
    const N = d.trim();
    N && (H(N), v == null ? void 0 : v(false), t && Fe(t), le(null));
  }, [v, t]), $t = f.useCallback(() => {
    !t || !(A == null ? void 0 : A.id) || (le(A.id), Ir(t, A.id));
  }, [t, A == null ? void 0 : A.id]), Mt = f.useCallback(() => {
    t && (le(null), Fe(t));
  }, [t]), At = s.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [s.jsx("div", { className: "border-b border-slate-200 p-3 dark:border-slate-800", children: s.jsxs("button", { type: "button", onClick: () => void we(), className: "flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900", children: [s.jsx(xr, { size: 16 }), " \u65B0\u4F1A\u8BDD"] }) }), s.jsx(Zr, { sessions: a, activeId: t, onSelect: (d) => e(ee(`/sessions/${d}`)), onRename: (d) => {
    const N = a.find((S) => S.id === d);
    j({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: (N == null ? void 0 : N.title) ?? "", placeholder: "\u4F1A\u8BDD\u540D\u79F0" }).then((S) => {
      (S == null ? void 0 : S.trim()) && u(d, S.trim());
    });
  }, onDelete: (d) => void vt(d) })] }), Lt = s.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [s.jsx("div", { className: "border-b border-slate-200 px-4 py-3 text-sm font-medium dark:border-slate-800", children: wt }), s.jsxs("div", { className: "relative flex min-h-0 flex-1 flex-col", children: [ce ? s.jsx($s, {}) : null, s.jsxs("div", { className: `min-h-0 flex-1 space-y-6 overflow-y-auto px-4 py-4 ${ce ? "pointer-events-none select-none" : ""}`, children: [Ce && !ce ? s.jsx("p", { className: "text-sm text-red-600", children: Ce }) : null, gt && t ? s.jsx("div", { className: "flex justify-center pb-2", children: s.jsx("button", { type: "button", disabled: Ee, onClick: () => void kt(t), className: "rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900", children: Ee ? "\u52A0\u8F7D\u4E2D\u2026" : "\u52A0\u8F7D\u66F4\u65E9\u7684\u5BF9\u8BDD" }) }) : null, R.entries.map((d) => d.entryKind === "form_draft" ? s.jsx(Is, { draft: d.draft, disabled: K || q, onSubmit: (N) => void _t(d.draft.id, d.draft.skillId, d.draft.skillKey, N), onCancel: () => void Rt(d.draft.id) }, d.draft.id) : s.jsx(Ts, { round: d.round, isActive: d.round.id === R.activeRoundId, onStop: t ? () => void We(t, d.round.id) : void 0, onSelectTopic: Nt, onOpenHtmlReport: It, chipsDisabled: ge }, d.round.id)), s.jsx("div", { ref: _e })] }), s.jsx("div", { className: `shrink-0 border-t border-zinc-200/70 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#212121] ${ce ? "pointer-events-none" : ""}`, children: s.jsxs("div", { className: "mx-auto max-w-3xl space-y-2", children: [s.jsx(br, { skillGroups: b, activeGroupId: E, onActiveGroupChange: I, intelligenceSkills: c, onSkillClick: Tt, disabled: ge }), _.length > 0 && A ? s.jsx($r, { title: Ct, previewKind: A.kind === "markdown" ? "markdown" : "html", enabled: Ie, disabled: ge, onDismiss: $t, onEnable: Mt }) : null, s.jsx(Ls, { disabled: !t || !J, busy: K, isStreaming: q, editHtmlAvailable: !!Xe(A, _).htmlResourceId, onStop: jt, onSend: (d) => void St(d), placeholder: _.length > 0 ? Ie ? "\u8F93\u5165 @ \u9009\u62E9\u6DF1\u5EA6\u8C03\u7814\u6216\u6539\u7248\u5F0F\uFF1B\u5426\u5219\u57FA\u4E8E\u4E0A\u65B9\u9884\u89C8\u8BA8\u8BBA" : "\u8F93\u5165 @ \u9009\u62E9\u80FD\u529B\uFF1B\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\u4E0D\u9644\u5E26\u62A5\u544A" : "\u8F93\u5165 @w6 \u5F00\u59CB\u6DF1\u5EA6\u8C03\u7814\uFF0C\u6216\u76F4\u63A5\u63D0\u95EE" })] }) })] })] }), Pt = _.map((d, N) => ({ ...d, title: ne(d, N, _) })), Dt = s.jsx(Sr, { reports: Pt, activeReportId: (A == null ? void 0 : A.id) ?? null, onActiveChange: H, onReportClose: (d) => {
    P((N) => N.filter((S) => S.id !== d)), W === d && H(null);
  } });
  return s.jsx(mr, { className: "h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", innerClassName: "h-full min-h-0 border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", leftPanelId: "aichat-left", mainPanelId: "aichat-main", rightPanelId: "aichat-right", left: At, main: Lt, right: Dt, leftMinPx: 200, leftMaxPx: 400, leftDefaultPx: 240, rightMinPx: 320, rightMaxPx: 1200, rightDefaultPct: 50, leftSidebarVisible: !g, rightSidebarVisible: yt, storageKey: Et, resizeHandleWithGrip: true });
}
export {
  Ks as default
};
