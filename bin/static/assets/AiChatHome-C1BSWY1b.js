import { j as n, c as It } from "./three-BECTMk9d.js";
import { a as f } from "./monaco-BSfMmt4N.js";
import { G as $t, H as F, I as Ve, N as Mt, J as At, K as Lt, w as se, O as Je, Q as Qe, R as Pt, U as Dt, V as qt, W as ke, x as Ft, C as Ut, X as me, Y as Ot, Z as Wt, s as zt, _ as Xe, $ as Bt, a0 as Kt, a1 as Ht, M as Gt, o as Vt, T as Jt, E as Qt, a2 as Xt, a3 as Re, a4 as Ee, S as Ie, r as Yt, a5 as Zt, a6 as er, L as tr, u as rr, p as nr, a7 as sr, a8 as $e, a9 as ar, aa as or, ab as lr, ac as ir, P as dr } from "./main-C7L66gUR.js";
import "./charts-Cx7lSOSv.js";
const cr = { ShieldCheck: n.jsx(Ve, { size: 12 }), Search: n.jsx(Lt, { size: 12 }), Database: n.jsx(At, { size: 12 }), Newspaper: n.jsx(Mt, { size: 12 }) };
function ur({ skillGroups: e, activeGroupId: t, onActiveGroupChange: r, intelligenceSkills: s, onSkillClick: a, disabled: o = false }) {
  const l = f.useMemo(() => e.find((g) => g.id === t) ?? e[0] ?? null, [e, t]), d = f.useMemo(() => $t(s, l), [s, l]);
  if (e.length === 0 && d.length === 0) return null;
  const h = e.length > 1;
  return n.jsxs("div", { className: "flex flex-col gap-2", children: [h && n.jsx("div", { className: "flex flex-wrap items-center gap-1 border-b border-slate-200/80 pb-1.5 dark:border-slate-700", role: "tablist", "aria-label": "\u6280\u80FD\u5206\u7EC4", children: e.map((g) => n.jsx("button", { type: "button", role: "tab", "aria-selected": t === g.id, onClick: () => r(g.id), className: F("shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors", t === g.id ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"), children: g.name }, g.id)) }), n.jsx("div", { className: "flex flex-wrap gap-1.5", role: "tabpanel", "aria-label": (l == null ? void 0 : l.name) ?? "\u6280\u80FD", children: d.length === 0 ? n.jsx("span", { className: "text-[11px] text-slate-400 dark:text-slate-500", children: "\u6682\u65E0\u53EF\u7528\u6280\u80FD" }) : d.map((g) => n.jsxs("button", { type: "button", onClick: () => a(g), disabled: o, className: F("flex shrink-0 items-center gap-1 rounded-xl border px-2.5 py-1 text-[11px] font-medium transition-all", o ? "cursor-not-allowed border-slate-100 text-slate-300 opacity-40 dark:border-slate-800" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"), children: [n.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: cr[g.icon || ""] || n.jsx(Ve, { size: 12 }) }), g.name] }, g.id)) })] });
}
function Ye(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Je.baseUrl}${t}`;
}
function Ze(e) {
  if (!e) return "";
  const t = e.split("#")[0], r = t.match(/\/artifacts\/([^/?]+)\/preview/);
  return (r == null ? void 0 : r[1]) ? decodeURIComponent(r[1]) : (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t), t);
}
function fr(e) {
  if (!e) return "";
  const t = Ye(`/artifacts/${encodeURIComponent(e)}/download`), r = se();
  if (!r) return t;
  const s = t.includes("?") ? "&" : "?";
  return `${t}${s}token=${encodeURIComponent(r)}`;
}
function et(e) {
  if (!e) return "";
  if (e.startsWith("http") || e.startsWith("/")) return e;
  const t = Ye(`/artifacts/${encodeURIComponent(e)}/preview`), r = se();
  if (!r) return t;
  const s = t.includes("?") ? "&" : "?";
  return `${t}${s}token=${encodeURIComponent(r)}`;
}
const tt = /你是(一个)?专业|请根据以下|基于以下用户|对指定主题进行|调研分析师|事实核查员/i, Me = "\u8C03\u7814\u62A5\u544A", mr = /* @__PURE__ */ new Set(["\u8C03\u7814\u62A5\u544A", "\u62A5\u544A", "\u672A\u547D\u540D\u62A5\u544A", "\u7814\u7A76\u62A5\u544A", "\u4E8B\u5B9E\u6838\u67E5\u62A5\u544A", "\u65B0\u62A5\u544A", "\u7EE7\u7EED\u7814\u7A76\u7ED3\u679C"]);
function we(e) {
  var _a;
  return ((_a = e.split(/\r?\n/)[0]) == null ? void 0 : _a.trim()) || e.trim();
}
function te(e, t) {
  const r = e.trim();
  if (!r) return "";
  const s = [...r];
  return s.length <= t ? r : `${s.slice(0, t - 1).join("")}\u2026`;
}
function xr(e) {
  var _a, _b;
  const t = [/(?:topic|主题|调研主题|核查对象)[：:\s]+(.+?)(?:\s{2,}|$)/i, /针对[「『"'](.+?)[」』"']/, /关于[「『"'](.+?)[」』"']/, /主题[：:]\s*(.+)/];
  for (const r of t) {
    const a = (_b = (_a = e.match(r)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim();
    if (a) return a;
  }
  return null;
}
function hr(e) {
  return e.replace(/_(?:edit_)?\d{10,}\.(?:html|md)$/i, "").replace(/\.(?:html|md)$/i, "").trim();
}
function rt(e) {
  return e.replace(/\s*\((?:MD|HTML)\)\s*$/i, "").trim();
}
function re(e) {
  const t = rt(e.trim());
  return !!(!t || mr.has(t) || /^研究报告\s*\((?:MD|HTML)\)$/i.test(t) || tt.test(we(t)));
}
function br(e) {
  var _a, _b;
  return ((_b = (_a = e.match(/^#\s+(.+)$/m)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim()) ?? "";
}
function pr(e, t) {
  var _a, _b;
  if ((_a = e.markdown) == null ? void 0 : _a.trim()) return e.markdown;
  if (!(t == null ? void 0 : t.length)) return;
  const r = e.timestamp ?? 0;
  let s, a = Number.POSITIVE_INFINITY;
  for (const o of t) {
    if (o.kind !== "markdown" || !((_b = o.markdown) == null ? void 0 : _b.trim())) continue;
    const l = Math.abs((o.timestamp ?? 0) - r);
    l < a && (a = l, s = o);
  }
  if (s && a <= 15e3) return s.markdown;
}
function gr(e, t) {
  var _a;
  const r = rt(e.trim());
  if (!r) return "";
  if (r.includes("--")) {
    const o = (_a = r.split("--").pop()) == null ? void 0 : _a.trim();
    if (o && !re(o)) return te(o, t);
  }
  const s = xr(r);
  if (s && !re(s)) return te(s, t);
  const a = hr(we(r)).replace(/_/g, " ");
  if (a && !re(a) && !/^\d+$/.test(a)) return te(a, t);
  if (!re(r)) {
    const o = we(r);
    if (o && !tt.test(o)) return te(o, t);
  }
  return "";
}
function kr(e, t, r = 48) {
  const s = pr(e, t);
  if (s) {
    const a = br(s);
    if (a && !re(a)) return te(a, r);
  }
  return gr(e.title, r);
}
function ne(e, t, r) {
  const s = e.kind === "markdown" ? "MD" : "HTML", a = kr(e, r, 52);
  return a ? `[${s}] ${Me}--${a}` : `[${s}] ${Me}`;
}
const Ae = /* @__PURE__ */ new Map();
function wr(e) {
  var _a, _b;
  const [t, r] = f.useState(""), [s, a] = f.useState(false), [o, l] = f.useState(null), d = e == null ? void 0 : e.kind, h = ((_a = e == null ? void 0 : e.resourceId) == null ? void 0 : _a.trim()) || "", g = ((_b = e == null ? void 0 : e.markdown) == null ? void 0 : _b.trim()) || "", u = (e == null ? void 0 : e.url) || "";
  return f.useEffect(() => {
    if (d !== "markdown") {
      r(""), l(null), a(false);
      return;
    }
    if (g) {
      r(g), l(null), a(false);
      return;
    }
    if (!h) {
      r(""), l("\u6682\u65E0 Markdown \u5185\u5BB9"), a(false);
      return;
    }
    const k = Ae.get(h);
    if (k !== void 0) {
      r(k), l(null), a(false);
      return;
    }
    let w = false;
    const x = new AbortController();
    a(true), l(null);
    const m = se(), c = { Accept: "text/markdown,text/plain,*/*" };
    m && (c.Authorization = `Bearer ${m}`);
    const b = u || et(h), j = m ? `${b}${b.includes("?") ? "&" : "?"}token=${encodeURIComponent(m)}` : b;
    return fetch(j, { headers: c, signal: x.signal }).then(async (y) => {
      if (!y.ok) throw new Error(`HTTP ${y.status}`);
      return y.text();
    }).then((y) => {
      w || (Ae.set(h, y), r(y));
    }).catch((y) => {
      w || y instanceof DOMException && y.name === "AbortError" || l(y instanceof Error ? y.message : "\u52A0\u8F7D\u5931\u8D25");
    }).finally(() => {
      w || a(false);
    }), () => {
      w = true, x.abort();
    };
  }, [d, h, g, u]), { content: t, loading: s, error: o };
}
function yr({ reports: e, activeReportId: t, onActiveChange: r, onReportClose: s }) {
  const { addToast: a } = Qe(), [o, l] = f.useState(0), [d, h] = f.useState(null), g = f.useRef(e.length);
  f.useEffect(() => {
    if (e.length === 0 || t && e.some(($) => $.id === t)) return;
    const p = e.filter(($) => $.kind === "html"), _ = p.length > 0 ? p[p.length - 1] : e[e.length - 1];
    r(_.id);
  }, [e, t, r]), f.useEffect(() => {
    if (t && e.length > g.current) {
      const p = e[e.length - 1];
      p.kind === "html" && r(p.id);
    }
    g.current = e.length;
  }, [t, e, r]);
  const u = e.find((p) => p.id === t), { content: k, loading: w, error: x } = wr(u), m = (u == null ? void 0 : u.kind) === "markdown" && !w && !x && !!k.trim(), c = f.useCallback(() => {
    var _a;
    const p = (_a = u == null ? void 0 : u.resourceId) == null ? void 0 : _a.trim();
    if (!p) {
      a("error", "\u65E0\u6CD5\u4E0B\u8F7D\u8BE5\u62A5\u544A");
      return;
    }
    window.open(fr(p), "_blank"), a("success", "\u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [u == null ? void 0 : u.resourceId, a]), b = f.useCallback(() => {
    const p = k.trim();
    if (!p) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u4E0B\u8F7D");
      return;
    }
    Pt(p, (u == null ? void 0 : u.title) || "\u62A5\u544A"), a("success", "Markdown \u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [k, u == null ? void 0 : u.title, a]), j = f.useCallback(async () => {
    const p = k.trim();
    if (!p) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    h("word");
    try {
      await Dt(p, (u == null ? void 0 : u.title) || "\u62A5\u544A"), a("success", "Word \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (_) {
      a("error", _ instanceof Error ? _.message : "Word \u5BFC\u51FA\u5931\u8D25");
    } finally {
      h(null);
    }
  }, [k, u == null ? void 0 : u.title, a]), y = f.useCallback(async () => {
    const p = k.trim();
    if (!p) {
      a("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    h("pdf");
    try {
      await qt(p, (u == null ? void 0 : u.title) || "\u62A5\u544A"), a("success", "PDF \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (_) {
      a("error", _ instanceof Error ? _.message : "PDF \u5BFC\u51FA\u5931\u8D25");
    } finally {
      h(null);
    }
  }, [k, u == null ? void 0 : u.title, a]), A = (p) => {
    const _ = e.findIndex((L) => L.id === p), $ = e.filter((L) => L.id !== p);
    if (t === p && $.length > 0) {
      const L = Math.min(_, $.length - 1);
      r($[L].id);
    }
    s(p);
  };
  if (e.length === 0) return n.jsxs("div", { className: "flex h-full flex-col items-center justify-center bg-[#f7f8fa] text-slate-500 dark:bg-slate-950", children: [n.jsx(ke, { size: 40, className: "mb-3 opacity-30" }), n.jsx("div", { className: "text-sm font-medium text-slate-600 dark:text-slate-400", children: "\u62A5\u544A\u9884\u89C8" }), n.jsx("div", { className: "mt-1 max-w-xs text-center text-xs text-slate-400", children: "\u5B8C\u6210 W6 \u7814\u7A76\u4EFB\u52A1\u540E\uFF0CHTML \u4E0E Markdown \u62A5\u544A\u5C06\u5728\u6B64\u5B9E\u65F6\u9884\u89C8" })] });
  const I = (u == null ? void 0 : u.kind) === "markdown", v = (u == null ? void 0 : u.kind) === "html" || !(u == null ? void 0 : u.kind);
  return n.jsxs("div", { className: "flex h-full min-h-0 flex-col bg-white dark:bg-slate-900", children: [n.jsxs("div", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200/90 bg-slate-50/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/80", children: [n.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [u ? I ? n.jsx(Ft, { size: 14, className: "shrink-0 text-emerald-600 dark:text-emerald-400" }) : n.jsx(ke, { size: 14, className: "shrink-0 text-slate-500 dark:text-slate-400" }) : null, n.jsxs("div", { className: "relative min-w-0 flex-1", children: [n.jsx("select", { value: t ?? "", onChange: (p) => r(p.target.value), "aria-label": "\u9009\u62E9\u62A5\u544A", title: u ? ne(u, e.findIndex((p) => p.id === u.id), e) : void 0, className: F("h-8 w-full min-w-0 appearance-none truncate rounded-lg border border-slate-200 bg-white py-0 pl-2.5 pr-8 text-xs font-medium text-slate-800 outline-none transition-colors", "hover:border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-300/50", "dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:focus:border-blue-500"), children: e.map((p, _) => n.jsx("option", { value: p.id, title: ne(p, _, e), children: ne(p, _, e) }, p.id)) }), n.jsx(Ut, { size: 14, className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500", "aria-hidden": true })] }), e.length > 1 ? n.jsxs("span", { className: "shrink-0 text-[10px] tabular-nums text-slate-400 dark:text-slate-500", children: [e.findIndex((p) => p.id === t) + 1, "/", e.length] }) : null, u ? n.jsx("button", { type: "button", onClick: () => A(u.id), className: "shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400", title: "\u5173\u95ED\u5F53\u524D\u62A5\u544A", "aria-label": "\u5173\u95ED\u5F53\u524D\u62A5\u544A", children: n.jsx(me, { size: 13 }) }) : null] }), u ? n.jsxs("div", { className: "flex shrink-0 items-center gap-1 border-l border-slate-200/90 pl-2 dark:border-slate-800", children: [I && m ? n.jsxs(n.Fragment, { children: [n.jsx("button", { type: "button", onClick: b, disabled: d !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u4E0B\u8F7D Markdown", children: "\u4E0B\u8F7D MD" }), n.jsx("button", { type: "button", onClick: j, disabled: d !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA Word", children: d === "word" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA Word" }), n.jsx("button", { type: "button", onClick: y, disabled: d !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA PDF", children: d === "pdf" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA PDF" })] }) : null, v ? n.jsxs(n.Fragment, { children: [n.jsx("button", { type: "button", onClick: () => l((p) => p + 1), className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u5237\u65B0", children: n.jsx(Ot, { size: 13 }) }), n.jsx("a", { href: u.url, target: "_blank", rel: "noopener noreferrer", className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u65B0\u7A97\u53E3\u6253\u5F00", children: n.jsx(Wt, { size: 13 }) }), n.jsx("button", { type: "button", onClick: c, className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u4E0B\u8F7D HTML", children: n.jsx(zt, { size: 13 }) })] }) : null] }) : null] }), n.jsx("div", { className: "relative flex min-h-0 flex-1 flex-col overflow-hidden bg-white dark:bg-slate-900", children: u ? I ? n.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: w ? n.jsxs("div", { className: "flex h-full items-center justify-center text-sm text-slate-500", children: [n.jsx("span", { className: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" }), "\u6B63\u5728\u52A0\u8F7D Markdown\u2026"] }) : x ? n.jsx("div", { className: "flex h-full flex-col items-center justify-center gap-2 text-sm text-slate-500", children: n.jsxs("p", { children: ["\u52A0\u8F7D\u5931\u8D25: ", x] }) }) : n.jsx(Xe, { content: k.trim() || "\u65E0\u5185\u5BB9" }) }) : n.jsx("iframe", { src: u.url, className: "min-h-0 w-full flex-1 border-0", title: u.title, sandbox: "allow-scripts allow-same-origin" }, `${u.id}-${o}`) : n.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-400", children: n.jsx("div", { className: "text-center text-sm", children: "\u8BF7\u4ECE\u4E0B\u62C9\u83DC\u5355\u9009\u62E9\u62A5\u544A" }) }) })] });
}
const vr = "aichat-report-style:";
function Le(e) {
  if (!e) return "auto";
  try {
    const t = localStorage.getItem(`${vr}${e}`);
    if (t === "magazine" || t === "swiss" || t === "auto") return t;
  } catch {
  }
  return "auto";
}
const nt = [{ id: "w6", tag: "@w6", title: "\u6DF1\u5EA6\u8C03\u7814", description: "\u542F\u52A8 W6 \u5B50 Agent\uFF0C\u751F\u6210\u65B0\u7684\u8C03\u7814\u62A5\u544A" }, { id: "edit-html", tag: "@edit-html", title: "\u6539\u7248\u5F0F", description: "\u6309\u6307\u4EE4\u66F4\u65B0\u53F3\u4FA7 HTML \u9884\u89C8\uFF08\u4E0D\u6539 Markdown \u8BA8\u8BBA\uFF09" }], jr = [{ id: "w6", re: /^@w6\b/i }, { id: "edit-html", re: /^@edit-html\b/i }];
function ye(e) {
  const t = e.trim();
  if (!t) return { mention: null, body: "", raw: t };
  for (const { id: r, re: s } of jr) if (s.test(t)) {
    const a = t.replace(s, "").trim();
    return { mention: r, body: a, raw: t };
  }
  return { mention: null, body: t, raw: t };
}
function Sr(e, t) {
  const r = e.trim().toLowerCase().replace(/^@/, "");
  return nt.filter((s) => s.id === "edit-html" && (t == null ? void 0 : t.editHtmlAvailable) === false ? false : r ? `${s.tag} ${s.id} ${s.title}`.toLowerCase().includes(r) : true);
}
function Pe(e) {
  const t = nt.find((r) => r.id === e);
  return t ? `${t.tag} ` : "";
}
function Nr(e, t, r) {
  var _a, _b;
  const s = ye(e), a = s.body || s.raw;
  if (s.mention === "w6") return a ? { kind: "w6_manual", message: s.raw } : { error: "\u8BF7\u5728 @w6 \u540E\u8F93\u5165\u8C03\u7814\u4E3B\u9898\u6216\u95EE\u9898" };
  if (s.mention === "edit-html") {
    if (!a) return { error: "\u8BF7\u5728 @edit-html \u540E\u8BF4\u660E\u8981\u5982\u4F55\u6539\u7248\u5F0F" };
    const l = (_a = r == null ? void 0 : r.htmlResourceId) == null ? void 0 : _a.trim();
    return l ? { kind: "edit_html", message: a, target_resource_id: l } : { error: "\u8BF7\u5148\u9009\u62E9\u4E00\u4EFD HTML \u62A5\u544A\u9884\u89C8\uFF0C\u518D\u4F7F\u7528 @edit-html" };
  }
  if (!t) return { kind: "deepseek", message: s.body };
  const o = (_b = r == null ? void 0 : r.mdResourceId) == null ? void 0 : _b.trim();
  return o ? { kind: "discuss", message: s.body, target_resource_id: o } : { kind: "discuss", message: s.body };
}
const st = "aichat:report-context-dismiss";
function ve() {
  try {
    const e = sessionStorage.getItem(st);
    if (!e) return {};
    const t = JSON.parse(e);
    return !t || typeof t != "object" ? {} : t;
  } catch {
    return {};
  }
}
function at(e) {
  try {
    sessionStorage.setItem(st, JSON.stringify(e));
  } catch {
  }
}
function Tr(e) {
  var _a;
  return e && ((_a = ve()[e]) == null ? void 0 : _a.trim()) || null;
}
function _r(e, t) {
  const r = ve();
  r[e] = t, at(r);
}
function Cr(e) {
  const t = ve();
  delete t[e], at(t);
}
function De(e, t, r) {
  return !e || !t ? false : r !== t;
}
function Rr({ title: e, previewKind: t, enabled: r, disabled: s, onDismiss: a, onEnable: o }) {
  const l = t === "markdown" ? "Markdown" : "HTML \u9884\u89C8", d = t === "markdown" ? ke : Kt;
  return r ? n.jsxs("div", { className: F("flex items-start gap-2 rounded-lg border border-sky-200/80 bg-sky-50/60 px-3 py-2", "dark:border-sky-500/25 dark:bg-sky-950/30"), children: [n.jsx(d, { size: 14, className: "mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" }), n.jsxs("div", { className: "min-w-0 flex-1", children: [n.jsx("p", { className: "text-xs font-medium text-sky-900 dark:text-sky-100", children: "\u57FA\u4E8E\u5F53\u524D\u9884\u89C8\u8FFD\u95EE" }), n.jsxs("p", { className: "truncate text-xs text-sky-800/80 dark:text-sky-200/80", children: [e, n.jsxs("span", { className: "text-sky-600/70 dark:text-sky-400/70", children: [" \xB7 ", l] })] })] }), n.jsx("button", { type: "button", disabled: s, onClick: a, "aria-label": "\u5173\u95ED\u62A5\u544A\u4E0A\u4E0B\u6587", className: F("shrink-0 rounded p-1 text-sky-700/70 hover:bg-sky-100/80 hover:text-sky-900", "disabled:opacity-40 dark:text-sky-300/70 dark:hover:bg-sky-900/50 dark:hover:text-sky-100"), children: n.jsx(me, { size: 14 }) })] }) : n.jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900/50", children: [n.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF0C\u4E0D\u9644\u5E26\u62A5\u544A\u4E0A\u4E0B\u6587" }), n.jsxs("button", { type: "button", disabled: s, onClick: o, className: F("inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 font-medium text-slate-700", "hover:bg-white disabled:opacity-40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"), children: [n.jsx(Bt, { size: 12 }), "\u7ED1\u5B9A\u300C", e, "\u300D"] })] });
}
const Er = /* @__PURE__ */ new Set(["", "\u65B0\u4F1A\u8BDD", "\u65B0\u7814\u7A76", "\u65B0\u5BF9\u8BDD", "\u8C03\u7814\u4E3B\u9898"]);
function J(e) {
  return Er.has((e ?? "").trim());
}
function ot(e, t = 30) {
  const r = e.trim();
  if (!r) return "";
  const s = [...r];
  return s.length <= t ? r : `${s.slice(0, t - 1).join("")}\u2026`;
}
const Ir = ["\u4E3B\u9898:", "\u4E3B\u9898\uFF1A", "topic:", "topic\uFF1A", "\u8C03\u7814\u4E3B\u9898:", "\u8C03\u7814\u4E3B\u9898\uFF1A"];
function $r(e) {
  for (const t of e.split(/\r?\n/)) {
    const r = t.trim();
    for (const s of Ir) if (r.startsWith(s)) {
      const a = r.slice(s.length).trim();
      if (a) return ot(a);
    }
  }
  return "";
}
function Mr(e) {
  var _a, _b;
  const t = (_a = e.sessionTitle) == null ? void 0 : _a.trim();
  if (t && !J(t)) return t;
  for (let r = e.rounds.length - 1; r >= 0; r--) {
    const s = e.rounds[r];
    if (s.anchorKind === "form" && s.anchorText) {
      const o = $r(s.anchorText);
      if (o) return o;
    }
    const a = (_b = s.topic) == null ? void 0 : _b.trim();
    if (a && !J(a)) return ot(a);
  }
  return t || "\u65B0\u4F1A\u8BDD";
}
const Ar = "/aichat";
function Z(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Ar}${t}`;
}
function lt(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Je.baseUrl}${t}`;
}
async function Q(e, t) {
  const r = se(), s = { "Content-Type": "application/json", ...t == null ? void 0 : t.headers };
  r && (s.Authorization = `Bearer ${r}`);
  const a = await fetch(lt(e), { ...t, headers: s });
  if (a.status === 401) throw Ht(401), new Error("Unauthorized");
  if (!a.ok) {
    const o = await a.json().catch(() => ({}));
    throw new Error(o.detail || a.statusText);
  }
  return a.json();
}
function qe(e, t = {}) {
  const r = new URLSearchParams(), s = t.sinceSeq ?? 0;
  s > 0 ? r.set("sinceSeq", String(s)) : (r.set("limit_rounds", String(t.limitRounds ?? 10)), t.beforeSeq && t.beforeSeq > 0 && r.set("before_seq", String(t.beforeSeq)));
  const a = r.toString() ? `?${r.toString()}` : "";
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/timeline${a}`);
}
function Lr(e, t) {
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts`, { method: "POST", body: JSON.stringify(t) });
}
function Pr(e, t) {
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts/${encodeURIComponent(t)}/cancel`, { method: "POST", body: "{}" });
}
function ee(e, t, r) {
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/rounds`, { method: "POST", body: JSON.stringify(t), signal: r });
}
function Fe(e, t) {
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/rounds/${encodeURIComponent(t)}/stop`, { method: "POST", body: "{}" });
}
function Dr(e, t) {
  const r = new URLSearchParams({ fromSeq: String(t) }), s = se();
  return s && r.set("token", s), `${lt(`/aichat/sessions/${encodeURIComponent(e)}/stream`)}?${r.toString()}`;
}
function qr(e) {
  return Q(`/aichat/sessions/${encodeURIComponent(e)}/reports`);
}
function it(e) {
  return et(e);
}
const Ue = 1e3, Fr = 3e4;
function Ur(e, t, r, s) {
  let a = false, o = null, l = null, d = Ue;
  const h = () => {
    l !== null && (clearTimeout(l), l = null);
  }, g = () => {
    if (a) return;
    h(), o == null ? void 0 : o.close(), o = null;
    const u = Dr(e, t()), k = new EventSource(u);
    o = k, k.addEventListener("event_appended", (w) => {
      if (!(a || o !== k)) try {
        const x = JSON.parse(w.data);
        d = Ue, r(x);
      } catch {
      }
    }), k.onerror = () => {
      if (a || o !== k) return;
      k.close(), o = null;
      const w = d;
      d = Math.min(d * 2, Fr), l = setTimeout(() => {
        l = null, g();
      }, w);
    };
  };
  return g(), () => {
    a = true, h(), o == null ? void 0 : o.close(), o = null;
  };
}
function fe(e) {
  var _a, _b, _c;
  const t = (_a = e.draft_id) == null ? void 0 : _a.trim();
  return t || ((_c = (_b = e.payload) == null ? void 0 : _b.draft_id) == null ? void 0 : _c.trim()) || "";
}
function Oe(e) {
  const t = e.payload ?? {};
  return { draft_id: fe(e) || t.draft_id, skill_id: t.skill_id, skill_key: t.skill_key, skill_name: t.skill_name || e.topic || e.body, form_schema: t.form_schema, round_id: t.round_id || e.round_id };
}
const Or = 4, Wr = 200;
function zr(e) {
  const t = e.trim();
  return !(!t || t.length > Wr || /你是一个.{0,24}(助手|专家|模型|AI|智能体)/.test(t));
}
function Br(e, t) {
  const r = (t == null ? void 0 : t.trim()) || "\u672C\u6B21\u7814\u7A76\u4E3B\u9898";
  return e === "info_research" ? [`\u9488\u5BF9\u300C${r}\u300D\u8FD8\u6709\u54EA\u4E9B\u4FE1\u606F\u7F3A\u53E3\u9700\u8981\u8865\u5145\u8C03\u7814\uFF1F`, "\u8BF7\u68B3\u7406\u62A5\u544A\u4E2D\u7684\u5173\u952E\u5B9E\u4F53\u53CA\u5176\u5173\u8054\u5173\u7CFB", "\u5BF9\u6BD4\u4E0D\u540C\u4FE1\u6E90\u5BF9\u8BE5\u4E3B\u9898\u7684\u8BF4\u6CD5\u5DEE\u5F02", "\u8BF7\u7ED9\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u540E\u7EED\u5F00\u6E90\u8C03\u67E5\u65B9\u5411"] : e === "data_collection" ? [`\u300C${r}\u300D\u76F8\u5173\u516C\u5F00\u6570\u636E\u8FD8\u6709\u54EA\u4E9B\u672A\u6536\u5F55\uFF1F`, "\u8BF7\u9A8C\u8BC1\u62A5\u544A\u4E2D\u5173\u952E\u6570\u636E\u7684\u539F\u59CB\u51FA\u5904", "\u54EA\u4E9B\u6307\u6807\u503C\u5F97\u5EFA\u7ACB\u6301\u7EED\u76D1\u6D4B\uFF1F", "\u8BF7\u5217\u51FA\u53EF\u590D\u7528\u7684\u6570\u636E\u91C7\u96C6\u6E20\u9053\u4E0E\u65B9\u6CD5"] : [`\u62A5\u544A\u4E2D\u5BF9\u300C${r}\u300D\u7684\u6838\u5FC3\u7ED3\u8BBA\u662F\u4EC0\u4E48\uFF1F`, "\u6709\u54EA\u4E9B\u5173\u952E\u8BC1\u636E\u4ECD\u9700\u8981\u8FDB\u4E00\u6B65\u6838\u5B9E\uFF1F", "\u5982\u679C\u8BE5\u4E3B\u5F20\u5728\u793E\u4EA4\u5A92\u4F53\u4F20\u64AD\uFF0C\u5E94\u5982\u4F55\u8F9F\u8C23\u6216\u6807\u6CE8\uFF1F", "\u8BF7\u5217\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u4E0B\u4E00\u6B65\u8C03\u67E5\u5EFA\u8BAE\u3002"];
}
function Kr(e) {
  const t = e.limit ?? Or, r = /* @__PURE__ */ new Set(), s = [], a = (o) => {
    const l = o.trim();
    !l || !zr(l) || r.has(l) || s.length >= t || (r.add(l), s.push({ text: l, mode: "w6" }));
  };
  for (const o of e.followUpQuestions) a(o);
  for (const o of e.w6FollowUps ?? []) a(o);
  if (s.length < t) {
    for (const o of Br(e.skillKey, e.reportTitle)) if (a(o), s.length >= t) break;
  }
  return s;
}
function Hr(e) {
  return Kr({ followUpQuestions: e.questions, skillKey: e.skillKey ?? null, reportTitle: e.reportTitle }).map((r) => r.text);
}
function We(e, t, r, s) {
  for (let a = e.length - 1; a >= 0; a--) e[a].roundId === t && e[a].kind === r && e.splice(a, 1);
  e.push({ ...s, roundId: t, kind: r });
}
function ze() {
  return { status: "running", logs: [], progress: 0, lastLine: "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026" };
}
function O(e, t) {
  let r = e.get(t);
  return r || (r = { id: t, kind: "w6_manual", topic: "", anchorText: "", anchorKind: "user", sealed: false }, e.set(t, r)), r;
}
function ue(e, t = null, r = 1) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const s = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [];
  let d = "";
  const h = [], g = (x) => {
    const m = a.get(x);
    if (!m) return;
    const c = l.findIndex((b) => b.entryKind === "round" && b.round.id === x);
    c >= 0 ? l[c] = { entryKind: "round", round: m } : l.push({ entryKind: "round", round: m });
  }, u = (x) => {
    if (x.status !== "pending") return;
    const m = l.findIndex((c) => c.entryKind === "form_draft" && c.draft.id === x.id);
    m >= 0 ? l[m] = { entryKind: "form_draft", draft: x } : l.push({ entryKind: "form_draft", draft: x });
  }, k = (x) => {
    const m = l.findIndex((c) => c.entryKind === "form_draft" && c.draft.id === x);
    m >= 0 && l.splice(m, 1);
  };
  for (const x of e ?? []) {
    const m = (_a = x.round_id) == null ? void 0 : _a.trim();
    switch (x.type) {
      case "form_presented": {
        const c = Oe(x), b = fe(x);
        if (!b) break;
        const j = { id: b, skillId: ((_b = c.skill_id) == null ? void 0 : _b.trim()) || "", skillKey: ((_c = c.skill_key) == null ? void 0 : _c.trim()) || "", skillName: ((_d = c.skill_name) == null ? void 0 : _d.trim()) || "\u6280\u80FD\u4EFB\u52A1", formSchema: c.form_schema || "", status: "pending" };
        o.set(b, j), u(j);
        break;
      }
      case "form_cancelled": {
        const c = fe(x);
        if (!c) break;
        const b = o.get(c);
        b && (b.status = "cancelled", k(c));
        break;
      }
      case "form_draft_submitted": {
        const c = fe(x);
        if (!c) break;
        const b = o.get(c);
        b && (b.status = "submitted", b.submittedRoundId = m || Oe(x).round_id, k(c));
        break;
      }
      case "session_title":
        ((_e = x.title) == null ? void 0 : _e.trim()) && (d = x.title.trim());
        break;
      case "round_started": {
        if (!m) break;
        const c = O(a, m);
        s.includes(m) || s.push(m), c.kind = x.kind || c.kind, c.topic = ((_f = x.topic) == null ? void 0 : _f.trim()) || ((_g = x.body) == null ? void 0 : _g.trim()) || c.topic, c.anchorText = ((_h = x.body) == null ? void 0 : _h.trim()) || c.anchorText, c.anchorKind = c.kind === "w6_form" ? "form" : c.kind === "discuss" ? "discuss" : "user", c.sealed = false, g(m);
        break;
      }
      case "form_submitted": {
        if (!m) break;
        const c = O(a, m);
        s.includes(m) || s.push(m), c.anchorText = ((_i = x.body) == null ? void 0 : _i.trim()) || c.anchorText, c.anchorKind = "form";
        break;
      }
      case "w6_status": {
        if (!m) break;
        const c = O(a, m);
        c.w6 || (c.w6 = ze()), c.w6.status = x.status || c.w6.status;
        break;
      }
      case "w6_log": {
        if (!m) break;
        const c = O(a, m);
        c.w6 || (c.w6 = ze());
        const b = ((_j = x.body) == null ? void 0 : _j.trim()) || "";
        b && (c.w6.logs.push({ logType: x.log_type || "log", body: b, progress: x.progress }), c.w6.lastLine = b.slice(0, 120)), x.progress != null && (c.w6.progress = x.progress);
        break;
      }
      case "assistant_delta": {
        if (!m) break;
        const c = O(a, m);
        c.assistantText = (c.assistantText || "") + (x.delta || "");
        break;
      }
      case "report_ready": {
        if (!m) break;
        const c = O(a, m);
        c.reportHtmlId = x.html_id || c.reportHtmlId, c.reportTitle = x.title || c.reportTitle;
        const b = x.title || "\u62A5\u544A", j = (_k = x.html_id) == null ? void 0 : _k.trim(), y = (_l = x.md_id) == null ? void 0 : _l.trim();
        j && We(h, m, "html", { id: j, resourceId: j, title: b }), y && y !== j && We(h, m, "markdown", { id: y, resourceId: y, title: `${b} (MD)` });
        break;
      }
      case "follow_ups": {
        if (!m) break;
        const c = O(a, m);
        ((_m = x.questions) == null ? void 0 : _m.length) && (c.guidedTopics = Hr({ questions: x.questions, reportTitle: c.reportTitle }));
        break;
      }
      case "round_sealed": {
        if (!m) break;
        const c = O(a, m);
        c.sealed = true, c.w6 && c.w6.status === "running" && (c.w6.status = "done");
        break;
      }
    }
  }
  const w = s.map((x) => a.get(x)).filter(Boolean);
  return { entries: l, rounds: w, activeRoundId: t, sessionTitle: d, reports: h, nextSeq: r };
}
function Gr(e) {
  return e.rounds.filter((t) => {
    var _a;
    return ((_a = t.w6) == null ? void 0 : _a.status) === "running" && !t.sealed;
  }).length;
}
const Be = () => ({ entries: [], rounds: [], activeRoundId: null, sessionTitle: "", reports: [], nextSeq: 1 });
function Ke(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const s of e) r.set(s.seq, s);
  for (const s of t) r.set(s.seq, s);
  return [...r.values()].sort((s, a) => s.seq - a.seq);
}
const E = It((e, t) => ({ sessionId: null, events: [], projected: Be(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null, setSessionId: (r) => e({ sessionId: r }), reset: () => e({ sessionId: null, events: [], projected: Be(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null }), setEvents: (r, s = null, a = 1) => {
  e({ events: r, projected: ue(r, s, a) });
}, applyEvent: (r) => {
  const { events: s, projected: a, sessionId: o } = t();
  if (s.some((g) => g.seq === r.seq)) return;
  const l = a.nextSeq;
  if (l > 1 && r.seq > l) {
    o && t().loadTimeline(o, { silent: true });
    return;
  }
  const d = [...s, r].sort((g, u) => g.seq - u.seq), h = r.type === "round_started" ? r.round_id ?? a.activeRoundId : r.type === "round_sealed" && r.round_id === a.activeRoundId ? null : a.activeRoundId;
  e({ events: d, projected: ue(d, h, Math.max(a.nextSeq, r.seq + 1)) });
}, loadTimeline: async (r, s) => {
  const a = (s == null ? void 0 : s.silent) === true;
  e((o) => ({ loading: a ? o.loading : true, error: null, sessionId: r }));
  try {
    const o = await qe(r), l = Array.isArray(o.events) ? o.events : [];
    e((d) => ({ events: l, projected: ue(l, o.active_round_id, o.next_seq), hasMore: o.has_more === true, oldestSeq: o.oldest_seq ?? 0, loading: a ? d.loading : false }));
  } catch (o) {
    e((l) => ({ loading: a ? l.loading : false, error: o instanceof Error ? o.message : "\u52A0\u8F7D\u5931\u8D25" }));
  }
}, loadEarlierTimeline: async (r) => {
  const { oldestSeq: s, loadingEarlier: a, hasMore: o } = t();
  if (!(!o || a || s <= 0)) {
    e({ loadingEarlier: true, error: null });
    try {
      const l = await qe(r, { beforeSeq: s }), d = Array.isArray(l.events) ? l.events : [];
      e((h) => ({ events: Ke(h.events, d), projected: ue(Ke(h.events, d), l.active_round_id, l.next_seq), hasMore: l.has_more === true, oldestSeq: l.oldest_seq ?? h.oldestSeq, loadingEarlier: false }));
    } catch (l) {
      e({ loadingEarlier: false, error: l instanceof Error ? l.message : "\u52A0\u8F7D\u5931\u8D25" });
    }
  }
} })), Vr = 300;
function Jr(e) {
  const t = E((u) => u.loadTimeline), r = E((u) => u.applyEvent), s = E((u) => u.reset), a = E((u) => u.projected), o = E((u) => u.sessionId), l = E((u) => u.loading), d = E((u) => u.error), h = f.useRef(null), g = f.useCallback(() => {
    const { projected: u } = E.getState();
    return u.nextSeq > 1 ? u.nextSeq - 1 : 0;
  }, []);
  return f.useLayoutEffect(() => {
    if (!e) {
      s();
      return;
    }
    s();
  }, [e, s]), f.useEffect(() => {
    if (e) return t(e), () => {
      var _a;
      (_a = h.current) == null ? void 0 : _a.call(h), h.current = null;
    };
  }, [e, t]), f.useEffect(() => {
    var _a;
    if (!(!e || l || o !== e)) return (_a = h.current) == null ? void 0 : _a.call(h), h.current = Ur(e, g, r), () => {
      var _a2;
      (_a2 = h.current) == null ? void 0 : _a2.call(h), h.current = null;
    };
  }, [e, l, o, r, g]), f.useEffect(() => {
    if (!e) return;
    let u = null;
    const k = () => {
      document.visibilityState === "visible" && E.getState().sessionId === e && t(e, { silent: true });
    }, w = () => {
      u !== null && clearTimeout(u), u = setTimeout(k, Vr);
    };
    return document.addEventListener("visibilitychange", w), window.addEventListener("focus", w), () => {
      u !== null && clearTimeout(u), document.removeEventListener("visibilitychange", w), window.removeEventListener("focus", w);
    };
  }, [e, t]), { projected: a, loading: l, error: d, loadedSessionId: o };
}
function Qr({ sessions: e, activeId: t, onSelect: r, onRename: s, onDelete: a }) {
  const o = [...e].sort((l, d) => new Date(d.created_at).getTime() - new Date(l.created_at).getTime());
  return n.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: o.length === 0 ? n.jsx("div", { className: "px-3 py-6 text-center text-xs text-slate-500", children: "\u6682\u65E0\u4F1A\u8BDD" }) : o.map((l) => n.jsx(Xr, { session: l, isActive: t === l.id, onClick: () => r(l.id), onRename: () => s(l.id), onDelete: () => a(l.id) }, l.id)) });
}
function Xr({ session: e, isActive: t, onClick: r, onRename: s, onDelete: a }) {
  return n.jsxs("div", { onClick: r, className: F("group flex cursor-pointer items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-2", t ? "border-blue-600 bg-blue-50/90 dark:border-blue-500 dark:bg-blue-950/35" : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-slate-800/60"), children: [n.jsx(Gt, { size: 13, className: "shrink-0" }), n.jsx("span", { className: "flex-1 truncate text-[13px]", children: e.title }), n.jsxs("div", { className: "relative opacity-0 group-hover:opacity-100", children: [n.jsx("button", { type: "button", className: "p-1", onClick: (o) => {
    o.stopPropagation(), s();
  }, children: n.jsx(Vt, { size: 12 }) }), n.jsx("button", { type: "button", className: "p-1", onClick: (o) => {
    o.stopPropagation(), a();
  }, children: n.jsx(Jt, { size: 12 }) }), n.jsx(Qt, { size: 12, className: "hidden" })] })] });
}
const Yr = { pending: "\u53C2\u6570\u914D\u7F6E \xB7 \u5F85\u586B\u5199", submitted: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u63D0\u4EA4", cancelled: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u53D6\u6D88" };
function dt({ title: e, status: t, submittedSummary: r, children: s }) {
  const a = t === "pending" ? "border-amber-300/70 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/25" : t === "submitted" ? "border-emerald-300/60 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "pending" ? "bg-amber-500" : t === "submitted" ? "bg-emerald-500" : "bg-slate-400";
  return n.jsx("div", { className: `max-w-[92%] rounded-lg border ${a}`, children: n.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [n.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [n.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), n.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: Yr[t] }), n.jsx("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: e })] }), t === "submitted" && r ? n.jsx("pre", { className: "whitespace-pre-wrap rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 font-sans text-[11px] leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400", children: r }) : null, t === "pending" && s ? n.jsx("div", { children: s }) : null] }) });
}
function Zr({ content: e }) {
  return n.jsx("pre", { className: "whitespace-pre-wrap font-sans text-inherit", children: e });
}
function en({ topic: e, onSelect: t, disabled: r }) {
  return n.jsx("button", { type: "button", disabled: r, onClick: () => t(e), title: e.text, className: "inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/40 dark:hover:text-blue-300", children: n.jsx("span", { className: "truncate", children: e.text }) });
}
function tn({ topics: e, onSelect: t, disabled: r }) {
  return e.length ? n.jsx("div", { className: "flex flex-wrap gap-1.5", children: e.map((s) => n.jsx(en, { topic: s, onSelect: t, disabled: r }, s.text)) }) : null;
}
const rn = { active: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u63A8\u8350\u8FFD\u95EE", used: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u5DF2\u9009\u7528" };
function nn({ topics: e, status: t, onSelect: r, disabled: s = false }) {
  const a = t === "active" ? "border-violet-300/70 bg-violet-50/80 dark:border-violet-800 dark:bg-violet-950/25" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "active" ? "bg-violet-500" : "bg-slate-400";
  return n.jsx("div", { className: `max-w-[92%] rounded-lg border ${a}`, children: n.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), n.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: rn[t] })] }), n.jsx(tn, { topics: e, onSelect: r, disabled: s || t === "used" })] }) });
}
const sn = { idle: "\u5F85\u547D", running: "\u8FD0\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", error: "\u51FA\u9519" }, an = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D\u2026", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" }, on = { log: "\u65E5\u5FD7", tool: "\u5DE5\u5177", token: "\u8F93\u51FA", status: "\u72B6\u6001", done: "\u5B8C\u6210", error: "\u9519\u8BEF" };
function ln(e) {
  return e.message ? e.message : e.token ? e.token : e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "";
}
function dn({ open: e, onClose: t, events: r, status: s, connection: a }) {
  const o = f.useRef(null);
  return f.useEffect(() => {
    var _a;
    e && ((_a = o.current) == null ? void 0 : _a.scrollTo({ top: o.current.scrollHeight, behavior: "smooth" }));
  }, [r, e]), e ? n.jsx("div", { className: "fixed inset-0 z-50 flex justify-end bg-black/40", onClick: t, role: "presentation", children: n.jsxs("div", { className: "flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900", onClick: (l) => l.stopPropagation(), role: "dialog", "aria-labelledby": "subagent-title", children: [n.jsxs("header", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800", children: [n.jsx("h2", { id: "subagent-title", className: "flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100", children: "\u5B50 Agent \xB7 W6" }), n.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${s === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" : s === "error" ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300" : s === "done" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`, children: sn[s] ?? s }), n.jsx("span", { className: "text-[10px] text-slate-500", children: an[a] }), n.jsx("button", { type: "button", onClick: t, className: "rounded p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200", "aria-label": "\u5173\u95ED", children: n.jsx(me, { size: 18 }) })] }), n.jsx("div", { ref: o, className: "flex-1 overflow-y-auto px-4 py-3 font-mono text-xs", children: r.length === 0 ? n.jsx("p", { className: "italic text-slate-500", children: "\u7B49\u5F85 W6 \u8F93\u51FA\u2026" }) : r.map((l, d) => n.jsxs("div", { className: "flex gap-2 border-b border-slate-100 py-2 last:border-0 dark:border-slate-800", children: [n.jsx("span", { className: "w-10 shrink-0 text-[10px] font-bold uppercase text-blue-600/90 dark:text-blue-400/90", children: on[l.type] ?? l.type }), n.jsx("span", { className: "flex-1 break-words text-slate-700 dark:text-slate-300", children: ln(l) }), l.progress != null && l.progress > 0 ? n.jsxs("span", { className: "shrink-0 text-slate-500", children: [l.progress, "%"] }) : null] }, `${l.timestamp ?? d}-${d}`)) })] }) }) : null;
}
function cn({ content: e }) {
  return e ? n.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600", children: n.jsx(Xe, { content: e }) }) : null;
}
function un({ label: e }) {
  return n.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600 dark:bg-slate-900", role: "status", "aria-live": "polite", children: n.jsx("span", { className: "italic text-slate-500 dark:text-slate-400", children: e }) });
}
const fn = { tool: "\u5DE5\u5177", status: "\u72B6\u6001", phase: "\u9636\u6BB5", log: "\u65E5\u5FD7", token: "\u8F93\u51FA" };
function ct(e) {
  var _a, _b;
  const t = ((_a = e.message) == null ? void 0 : _a.trim()) || ((_b = e.token) == null ? void 0 : _b.trim()) || (e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "stopped" ? "\u5DF2\u624B\u52A8\u505C\u6B62 W6 \u8C03\u7814" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "");
  if (!t) return "";
  const r = fn[e.type];
  return r ? `[${r}] ${t}` : t;
}
function mn(e, t = 8) {
  const r = [];
  for (const s of e) {
    const a = ct(s);
    a && r.push(a);
  }
  return r.length <= t ? r : r.slice(-t);
}
function xn(e, t = 8) {
  var _a;
  const r = [];
  let s = "";
  const a = () => {
    if (!s) return;
    const o = s.length > 160 ? `\u2026${s.slice(-160)}` : s;
    r.push(`[\u8F93\u51FA] ${o}`), s = "";
  };
  for (const o of e) {
    if (o.type === "token" && ((_a = o.token) == null ? void 0 : _a.trim())) {
      s += o.token;
      continue;
    }
    a();
    const l = ct(o);
    l && r.push(l);
  }
  return a(), r.length <= t ? r : r.slice(-t);
}
const hn = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" };
function bn(e, t) {
  return (t == null ? void 0 : t.trim()) ? t.trim() : e === "connecting" ? "\u6B63\u5728\u8FDE\u63A5 W6 \u8F93\u51FA\u6D41\u2026" : e === "open" ? "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85 W6 \u8F93\u51FA\u2026" : e === "error" ? "\u8FDE\u63A5\u5F02\u5E38\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026" : "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026";
}
function pn({ status: e, progress: t, lastLine: r, finalizing: s = false, connection: a, events: o = [], onClick: l, onStop: d, stopping: h = false }) {
  const g = s ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u6536\u5C3E\u4E2D\u2026" : e === "running" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u8FD0\u884C\u4E2D" : e === "error" ? "W6 \u5B50 Agent \xB7 \u51FA\u9519" : e === "done" ? "W6 \u5B50 Agent \xB7 \u5DF2\u5B8C\u6210" : "W6 \u5B50 Agent \xB7 \u5F85\u547D", u = s ? "border-amber-300/60 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/30" : e === "running" ? "border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30" : e === "error" ? "border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30" : e === "done" ? "border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30", k = e === "running" && !!d, w = e === "running" || s, x = w ? xn(o, 8) : mn(o, 4), m = f.useRef(null), c = s && !r.trim() ? "\u62A5\u544A\u8349\u7A3F\u5C31\u7EEA\uFF0C\u7B49\u5F85\u6536\u5C3E\u2026" : r, b = x.length > 0 ? x : w ? [bn(s ? "closed" : a, c)] : [];
  f.useEffect(() => {
    !w || !m.current || (m.current.scrollTop = m.current.scrollHeight);
  }, [b, w]);
  const j = (e === "running" || s) && t > 0;
  return n.jsxs("div", { className: `relative max-w-[85%] rounded-lg border ${u}`, children: [k ? n.jsx("button", { type: "button", onClick: (y) => {
    y.stopPropagation(), d == null ? void 0 : d();
  }, disabled: h, title: "\u505C\u6B62 W6 \u8C03\u7814", "aria-label": "\u505C\u6B62 W6 \u8C03\u7814", className: "absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400", children: n.jsx(Xt, { size: 14 }) }) : null, n.jsxs("button", { type: "button", onClick: l, className: `flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${k ? "pr-9" : ""}`, children: [n.jsxs("div", { className: "flex w-full flex-wrap items-center gap-x-2 gap-y-1", children: [n.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${s ? "animate-pulse bg-amber-500" : e === "running" ? "animate-pulse bg-blue-500" : e === "error" ? "bg-red-500" : e === "done" ? "bg-emerald-500" : "bg-slate-400"}` }), n.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: g }), j ? n.jsxs("span", { className: `text-[10px] ${s ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"}`, children: [t, "%"] }) : null, a && e === "running" ? n.jsx("span", { className: "text-[10px] text-slate-500", children: hn[a] ?? a }) : null, n.jsx("span", { className: "ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80", children: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u8F93\u51FA" })] }), b.length > 0 ? n.jsx("div", { ref: m, className: `w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${w ? "min-h-[4.5rem] max-h-32 overflow-y-auto" : ""}`, children: b.map((y, A) => {
    const I = w && A === b.length - 1, v = w && x.length === 0;
    return n.jsxs("p", { className: `text-[11px] leading-relaxed ${I ? "text-slate-700 dark:text-slate-200" : "truncate text-slate-500 dark:text-slate-500"} ${v && I ? "animate-pulse" : ""}`, title: y, children: [y, I && w && x.length > 0 ? n.jsx("span", { className: `ml-0.5 inline-block h-3 w-0.5 animate-pulse align-middle ${s ? "bg-amber-500" : "bg-blue-500"}` }) : null] }, `${A}-${y.slice(0, 24)}`);
  }) }) : c ? n.jsx("p", { className: "w-full truncate text-[11px] text-slate-500", children: c }) : null] })] });
}
function gn(e) {
  return ye(e).mention === "edit-html";
}
function kn(e) {
  var _a;
  return e.sealed || e.w6 || e.kind !== "deepseek" && e.kind !== "discuss" ? false : !((_a = e.assistantText) == null ? void 0 : _a.trim());
}
function wn(e) {
  return kn(e) ? e.kind === "deepseek" ? "\u601D\u8003\u4E2D\u2026" : e.kind === "discuss" ? gn(e.anchorText) ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u5206\u6790\u62A5\u544A\u4E2D\u2026" : null : null;
}
function yn(e) {
  return e.map((t, r) => ({ type: t.logType === "token" ? "token" : "log", message: t.body, token: t.logType === "token" ? t.body : void 0, progress: t.progress, timestamp: r }));
}
function vn(e, t) {
  return e === "error" ? "error" : e === "stopped" || t ? "done" : e === "running" ? "running" : e === "idle" ? "idle" : e === "done" ? "done" : "idle";
}
function jn({ round: e, isActive: t, onStop: r, onSelectTopic: s, chipsDisabled: a = false }) {
  var _a;
  const [o, l] = f.useState(false), d = e.w6, h = vn(d == null ? void 0 : d.status, e.sealed), g = h === "idle" && !e.sealed && !!d, u = d ? yn(d.logs) : [], k = g ? "running" : h === "idle" ? "idle" : h, w = t && (h === "running" || g) ? "open" : "closed", x = wn(e);
  return n.jsxs("div", { className: "space-y-3", children: [e.anchorKind === "form" ? n.jsx(dt, { title: e.topic || "\u6280\u80FD\u4EFB\u52A1", status: "submitted", submittedSummary: e.anchorText }) : e.anchorText ? n.jsx("div", { className: "flex justify-end", children: n.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-3 py-2 text-xs text-white dark:bg-slate-100 dark:text-slate-900", children: n.jsx(Zr, { content: e.anchorText }) }) }) : null, d ? n.jsxs(n.Fragment, { children: [n.jsx(pn, { status: h, finalizing: g, connection: t && h === "running" ? "open" : "closed", progress: d.progress, lastLine: d.lastLine, events: u, onClick: () => l(true), onStop: h === "running" ? r : void 0 }), n.jsx(dn, { open: o, onClose: () => l(false), events: u, status: k, connection: w })] }) : null, e.assistantText ? n.jsx(cn, { content: e.assistantText }) : x ? n.jsx(un, { label: x }) : null, e.sealed && ((_a = e.guidedTopics) == null ? void 0 : _a.length) ? n.jsx(nn, { topics: e.guidedTopics.map((m) => ({ text: m, mode: "w6" })), status: "active", onSelect: (m) => s == null ? void 0 : s(m.text), disabled: a }) : null] });
}
function je(e, t) {
  return t == null || t === "" ? false : Array.isArray(t) ? t.length > 0 : true;
}
function Sn(e, t) {
  const r = { ...t };
  for (const s of e) !je(s, r[s.name]) && s.default !== void 0 && (r[s.name] = s.default);
  return r;
}
function Nn(e, t) {
  for (const r of e) if (r.required && !je(r, t[r.name] ?? r.default)) return false;
  return true;
}
function Tn({ fields: e, onSubmit: t, disabled: r = false, stepMode: s = true }) {
  const [a, o] = f.useState(() => Re(e)), [l, d] = f.useState(0), h = e.map((b) => b.name).join("\0");
  if (f.useEffect(() => {
    o(Re(e)), d(0);
  }, [h]), e.length === 0) return n.jsx("p", { className: "text-xs text-slate-500", children: "form_schema \u65E0\u6709\u6548 fields" });
  const g = () => {
    t(Sn(e, a));
  };
  if (!s) return n.jsxs("div", { className: "space-y-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900", children: [n.jsx(Ee, { fields: e, formData: a, onChange: (b, j) => o((y) => ({ ...y, [b]: j })), compact: true }), n.jsxs("button", { type: "button", onClick: g, disabled: r || !Nn(e, a), className: "flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", children: [n.jsx(Ie, { size: 14 }), "\u63D0\u4EA4"] })] });
  const u = e[l], k = l >= e.length - 1, w = a[u.name], x = !u.required || je(u, w ?? u.default), m = () => {
    k ? g() : d((b) => b + 1);
  }, c = () => {
    k ? g() : d((b) => b + 1);
  };
  return n.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900", children: [n.jsxs("div", { className: "mb-4 flex items-center gap-1.5", children: [e.map((b, j) => n.jsx("div", { className: `h-1 flex-1 rounded-full transition-colors ${j < l ? "bg-blue-600 dark:bg-blue-500" : j === l ? "bg-blue-400 dark:bg-blue-400/70" : "bg-slate-200 dark:bg-slate-700"}` }, j)), n.jsxs("span", { className: "ml-1 text-xs text-slate-500 dark:text-slate-400", children: [l + 1, "/", e.length] })] }), n.jsx(Ee, { fields: [u], formData: a, onChange: (b, j) => o((y) => ({ ...y, [b]: j })), compact: true }), n.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [n.jsxs("button", { type: "button", onClick: () => d((b) => Math.max(0, b - 1)), disabled: r || l === 0, className: "flex items-center gap-1 px-3 py-2 text-xs text-slate-500 transition-colors hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-400 dark:hover:text-slate-200", children: [n.jsx(Yt, { size: 14 }), "\u4E0A\u4E00\u6B65"] }), n.jsx("div", { className: "flex-1" }), u.required ? null : n.jsxs("button", { type: "button", onClick: c, disabled: r, className: "flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-300", children: [n.jsx(Zt, { size: 14 }), "\u8DF3\u8FC7"] }), n.jsx("button", { type: "button", onClick: m, disabled: r || !x, className: "flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-blue-600 dark:hover:bg-blue-500", children: k ? n.jsxs(n.Fragment, { children: [n.jsx(Ie, { size: 14 }), "\u5F00\u59CB\u6267\u884C"] }) : n.jsxs(n.Fragment, { children: ["\u4E0B\u4E00\u6B65", n.jsx(er, { size: 14 })] }) })] })] });
}
function _n(e) {
  try {
    return JSON.parse(e).fields || [];
  } catch {
    return [];
  }
}
function Cn({ draft: e, disabled: t, onSubmit: r, onCancel: s }) {
  const a = _n(e.formSchema);
  return a.length === 0 ? n.jsx("p", { className: "text-xs text-slate-500", children: "\u6280\u80FD\u8868\u5355\u914D\u7F6E\u65E0\u6548\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002" }) : n.jsxs("div", { className: "relative", children: [n.jsx("button", { type: "button", disabled: t, onClick: s, "aria-label": "\u53D6\u6D88\u6280\u80FD\u8868\u5355", className: "absolute right-2 top-2 z-10 rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-200", children: n.jsx(me, { size: 14 }) }), n.jsx(dt, { title: e.skillName || "\u6280\u80FD\u4EFB\u52A1", status: "pending", children: n.jsx(Tn, { fields: a, onSubmit: r, disabled: t }) })] });
}
function Rn() {
  return n.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-white/75 backdrop-blur-[2px] dark:bg-[#212121]/80", role: "status", "aria-live": "polite", "aria-busy": "true", "aria-label": "\u6B63\u5728\u52A0\u8F7D\u4F1A\u8BDD", children: n.jsx("div", { className: "flex flex-col items-center gap-3", children: n.jsx(tr, { size: 32, strokeWidth: 2, className: "animate-spin text-slate-500 dark:text-slate-400" }) }) });
}
function En({ items: e, activeIndex: t, onPick: r }) {
  return e.length === 0 ? null : n.jsx("div", { role: "listbox", className: "absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900", children: e.map((s, a) => n.jsxs("button", { type: "button", role: "option", "aria-selected": a === t, onMouseDown: (o) => {
    o.preventDefault(), r(s.id);
  }, className: F("flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left transition-colors", a === t ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800/60"), children: [n.jsxs("span", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: [n.jsx("span", { className: "font-mono text-sky-700 dark:text-sky-400", children: s.tag }), n.jsx("span", { className: "ml-2 text-slate-600 dark:text-slate-300", children: s.title })] }), n.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: s.description })] }, s.id)) });
}
function In(e, t) {
  const s = e.slice(0, t).match(/@([a-z0-9-]*)$/i);
  return s ? s[1] ?? "" : null;
}
function $n({ disabled: e, busy: t = false, isStreaming: r = false, editHtmlAvailable: s = true, onSend: a, onStop: o, placeholder: l = "\u8F93\u5165\u6D88\u606F\uFF1B\u8F93\u5165 @ \u9009\u62E9\u6DF1\u5EA6\u8C03\u7814\u6216\u6539\u7248\u5F0F" }) {
  const [d, h] = f.useState(""), [g, u] = f.useState(false), [k, w] = f.useState(""), [x, m] = f.useState(0), c = f.useRef(null), b = Sr(k, { editHtmlAvailable: s }), j = f.useCallback((v, p) => {
    const _ = In(v, p);
    if (_ === null) {
      u(false), w(""), m(0);
      return;
    }
    u(true), w(_), m(0);
  }, []), y = f.useCallback((v) => {
    const p = c.current;
    if (!p) return;
    const _ = p.selectionStart ?? d.length, $ = d.slice(0, _), L = d.slice(_), X = $.match(/@([a-z0-9-]*)$/i), K = X ? $.slice(0, $.length - X[0].length) : $, H = `${K}${Pe(v)}${L}`;
    h(H), u(false), w("");
    const G = K.length + Pe(v).length;
    requestAnimationFrame(() => {
      p.focus(), p.setSelectionRange(G, G);
    });
  }, [d]), A = () => {
    const v = d.trim();
    !v || e || t || r || (a(v), h(""), u(false));
  }, I = ye(d).mention;
  return n.jsxs("div", { className: "relative", children: [I ? n.jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400", children: [n.jsxs("span", { className: "rounded-md bg-sky-50 px-2 py-0.5 font-mono text-sky-700 dark:bg-sky-950/40 dark:text-sky-300", children: ["@", I === "edit-html" ? "edit-html" : "w6"] }), n.jsx("span", { children: I === "w6" ? "\u5C06\u542F\u52A8\u6DF1\u5EA6\u8C03\u7814" : "\u5C06\u66F4\u65B0\u53F3\u4FA7 HTML \u9884\u89C8" })] }) : null, g && b.length > 0 ? n.jsx(En, { items: b, activeIndex: x, onPick: y }) : null, n.jsxs("div", { className: "flex gap-2", children: [n.jsx("textarea", { ref: c, value: d, onChange: (v) => {
    h(v.target.value), j(v.target.value, v.target.selectionStart ?? v.target.value.length);
  }, onClick: (v) => j(v.currentTarget.value, v.currentTarget.selectionStart ?? 0), onKeyDown: (v) => {
    if (g && b.length > 0) {
      if (v.key === "ArrowDown") {
        v.preventDefault(), m((p) => (p + 1) % b.length);
        return;
      }
      if (v.key === "ArrowUp") {
        v.preventDefault(), m((p) => (p - 1 + b.length) % b.length);
        return;
      }
      if (v.key === "Tab" || v.key === "Enter") {
        v.preventDefault();
        const p = b[x] ?? b[0];
        p && y(p.id);
        return;
      }
      if (v.key === "Escape") {
        v.preventDefault(), u(false);
        return;
      }
    }
    if (v.key === "Enter" && !v.shiftKey) {
      if (v.preventDefault(), r) {
        o == null ? void 0 : o();
        return;
      }
      A();
    }
  }, rows: 2, disabled: e && !r, placeholder: l, className: F("min-h-[44px] flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm", "dark:border-slate-700 dark:bg-slate-900") }), r ? n.jsx("button", { type: "button", onClick: o, className: "rounded-lg border border-red-200 bg-red-50 px-4 text-sm text-red-600 hover:bg-red-100 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-400", children: "\u505C\u6B62" }) : n.jsx("button", { type: "button", disabled: e || t || !d.trim(), onClick: A, className: "rounded-lg bg-slate-900 px-4 text-sm text-white disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900", children: "\u53D1\u9001" })] })] });
}
function Mn(e) {
  if (!e) return [];
  try {
    return JSON.parse(e.form_schema).fields || [];
  } catch {
    return [];
  }
}
const An = 15e3;
function Ln(e) {
  const t = (e || "").toLowerCase();
  return t === "document" || t.includes("markdown") || t === "md" ? "markdown" : "html";
}
function Pn(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const s of e) {
    const a = Ze(s.url || s.id);
    !a || r.has(a) || (r.add(a), t.push({ id: a, url: s.url || it(a), resourceId: a, title: s.name || s.title || "\u62A5\u544A", timestamp: Date.now(), kind: Ln(s.type) }));
  }
  return t;
}
function Dn(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const [s, a] of e.entries()) {
    const o = Ze(a.resourceId);
    !o || r.has(o) || (r.add(o), t.push({ id: o, url: it(o), resourceId: o, title: a.title || "\u62A5\u544A", timestamp: s * 1e3, kind: a.kind, roundId: a.roundId }));
  }
  return t;
}
function He(e, t, r) {
  if (e.roundId) {
    const d = t.find((h) => h.roundId === e.roundId && h.kind === r);
    if (d) return d;
  }
  const s = e.timestamp ?? 0;
  let a, o = Number.POSITIVE_INFINITY;
  for (const d of t) {
    if (d.kind !== r) continue;
    const h = Math.abs((d.timestamp ?? 0) - s);
    h < o && (o = h, a = d);
  }
  if (a && o <= An) return a;
  const l = t.findIndex((d) => d.id === e.id);
  if (l >= 0) for (let d = 1; d <= 2; d++) {
    const h = t[l - d], g = t[l + d];
    if ((h == null ? void 0 : h.kind) === r) return h;
    if ((g == null ? void 0 : g.kind) === r) return g;
  }
}
function Ge(e, t) {
  var _a, _b, _c, _d;
  if (!e) return {};
  const r = ((_a = e.resourceId) == null ? void 0 : _a.trim()) || ((_b = e.id) == null ? void 0 : _b.trim());
  if (!r) return {};
  const s = t.find((o) => o.id === e.id) ?? { ...e };
  if (s.kind === "markdown") {
    const o = He(s, t, "html");
    return { mdResourceId: r, htmlResourceId: (_c = o == null ? void 0 : o.resourceId) == null ? void 0 : _c.trim() };
  }
  const a = He(s, t, "markdown");
  return { htmlResourceId: r, mdResourceId: (_d = a == null ? void 0 : a.resourceId) == null ? void 0 : _d.trim() };
}
function qn(e) {
  var _a, _b;
  const t = e.activeRoundId;
  if (!t) return { kind: null, roundId: null };
  const r = e.rounds.find((s) => s.id === t);
  return !r || r.sealed ? { kind: null, roundId: null } : ((_a = r.w6) == null ? void 0 : _a.status) === "running" || Gr(e) > 0 ? { kind: "w6", roundId: ((_b = e.rounds.find((a) => {
    var _a2;
    return ((_a2 = a.w6) == null ? void 0 : _a2.status) === "running" && !a.sealed;
  })) == null ? void 0 : _b.id) ?? t } : r.kind === "discuss" ? { kind: "discuss", roundId: t } : r.kind === "deepseek" ? { kind: "deepseek", roundId: t } : { kind: null, roundId: null };
}
function zn() {
  const e = rr(), { sessionId: t } = nr(), { user: r } = sr(), s = r == null ? void 0 : r.id, { sessions: a, fetchSessions: o, createSession: l, updateSession: d, deleteSession: h, fetchIntelligenceSkills: g, intelligenceSkills: u, executeIntelligenceSkill: k } = $e(), { prompt: w, confirm: x } = ar(), { addToast: m } = Qe(), c = or(), b = (c == null ? void 0 : c.leftCollapsed) ?? false, j = c == null ? void 0 : c.setRightCollapsed, [y, A] = f.useState(false), [I, v] = f.useState(() => Le(s)), [p, _] = f.useState([]), [$, L] = f.useState(null), [X, K] = f.useState([]), [H, G] = f.useState(null), [xe, he] = f.useState(null), [W, U] = f.useState(false), P = f.useRef(null), Se = f.useRef(null), { projected: C, loading: Ne, error: Te, loadedSessionId: ut } = Jr(t), ft = E((i) => i.hasMore), _e = E((i) => i.loadingEarlier), mt = E((i) => i.loadEarlierTimeline), ae = E((i) => i.loadTimeline), V = !!(t && ut === t && !Ne), oe = f.useMemo(() => qn(C), [C]), D = oe.kind != null, be = !V || W || D, le = !!(t && Ne), T = f.useMemo(() => {
    const i = Dn(C.reports);
    return i.length > 0 ? i : X.map((N, S) => ({ ...N, timestamp: S * 1e3 }));
  }, [X, C.reports]);
  f.useEffect(() => {
    g(), lr.listGroups().then(_).catch(() => {
    }), o().finally(() => A(true));
  }, [g, o]), f.useEffect(() => {
    v(Le(s));
  }, [s]), f.useEffect(() => {
    if (!t) {
      K([]);
      return;
    }
    qr(t).then((i) => {
      K(Pn(i));
    });
  }, [t]), f.useEffect(() => {
    var _a;
    (_a = P.current) == null ? void 0 : _a.abort(), P.current = null, U(false), he(Tr(t));
  }, [t]), f.useEffect(() => () => {
    var _a;
    (_a = P.current) == null ? void 0 : _a.abort(), P.current = null;
  }, []);
  const q = f.useMemo(() => Mr({ sessionTitle: C.sessionTitle, rounds: C.rounds }), [C.sessionTitle, C.rounds]);
  f.useEffect(() => {
    if (!V || !t) return;
    const i = a.find((N) => N.id === t);
    i && J(i.title) && q.trim() && !J(q) && q !== i.title && d(t, q.trim());
  }, [V, t, q, a, d]), f.useEffect(() => {
    T.length !== 0 && (G((i) => i && T.some((N) => N.id === i) ? i : T[T.length - 1].id), j == null ? void 0 : j(false));
  }, [T, j]);
  const pe = f.useMemo(() => t ? a.find((i) => i.id === t) : void 0, [a, t]), xt = f.useMemo(() => {
    var _a, _b;
    if (!V) return (pe == null ? void 0 : pe.title) || "\u65B0\u4F1A\u8BDD";
    if (!J(q)) return q;
    const i = C.rounds[C.rounds.length - 1], S = (_b = (_a = C.activeRoundId ? C.rounds.find((z) => z.id === C.activeRoundId) : i) == null ? void 0 : _a.topic) == null ? void 0 : _b.trim();
    return S && !J(S) ? S : (pe == null ? void 0 : pe.title) || q || "\u65B0\u4F1A\u8BDD";
  }, [V, q, C.rounds, C.activeRoundId, pe == null ? void 0 : pe.title]), ht = T.length > 0, ge = f.useCallback(async () => {
    E.getState().reset();
    const i = await l("\u65B0\u4F1A\u8BDD");
    e(Z(`/sessions/${i.id}`));
  }, [l, e]), bt = f.useCallback(async (i) => {
    var _a, _b;
    const S = ((_b = (_a = a.find((B) => B.id === i)) == null ? void 0 : _a.title) == null ? void 0 : _b.trim()) || "\u672A\u547D\u540D\u4F1A\u8BDD";
    if (!await x({ title: "\u5220\u9664\u4F1A\u8BDD", message: `\u786E\u5B9A\u5220\u9664\u4F1A\u8BDD\u300C${S}\u300D\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002`, variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) || (await h(i), i !== t)) return;
    E.getState().reset();
    const R = $e.getState().sessions;
    if (R.length > 0) {
      e(Z(`/sessions/${R[0].id}`));
      return;
    }
    const Y = await l("\u65B0\u4F1A\u8BDD");
    e(Z(`/sessions/${Y.id}`), { replace: true });
  }, [a, x, h, t, e, l]);
  f.useEffect(() => {
    y && !t && a.length > 0 ? e(Z(`/sessions/${a[0].id}`), { replace: true }) : y && !t && a.length === 0 && ge();
  }, [y, t, a, e, ge]);
  const ie = f.useCallback(() => {
    var _a;
    (_a = P.current) == null ? void 0 : _a.abort();
    const i = new AbortController();
    return P.current = i, U(true), i;
  }, []), de = f.useCallback(() => {
    P.current = null, U(false);
  }, []), pt = f.useCallback(() => {
    var _a;
    (_a = P.current) == null ? void 0 : _a.abort(), P.current = null, U(false), t && oe.roundId && Fe(t, oe.roundId);
  }, [oe, t]), ce = f.useCallback(async (i) => {
    if (!t) return;
    const N = ie();
    try {
      const S = i.replace(/^@w6\s*/i, "").trim();
      await ee(t, { kind: "w6_manual", message: S || i }, N.signal);
    } catch (S) {
      if (S instanceof Error && S.name === "AbortError") return;
      throw S;
    } finally {
      de();
    }
  }, [t, ie, de]), gt = f.useCallback((i) => {
    if (W || D) {
      m("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    ce(i);
  }, [W, D, ce, m]), kt = f.useCallback(async (i) => {
    if (!t || D) return;
    const N = T.length > 0 ? T.find((B) => B.id === H) ?? T[T.length - 1] : void 0, S = Ge(N, T), z = De(t, N == null ? void 0 : N.id, xe), R = Nr(i, z, S);
    if ("error" in R) {
      m("error", R.error);
      return;
    }
    if (R.kind === "w6_manual") {
      await ce(R.message);
      return;
    }
    const Y = ie();
    try {
      R.kind === "edit_html" ? await ee(t, { kind: "discuss", message: R.message, mode: "edit_html", target_resource_id: R.target_resource_id }, Y.signal) : R.kind === "discuss" ? await ee(t, { kind: "discuss", message: R.message, ...R.target_resource_id ? { target_resource_id: R.target_resource_id } : {} }, Y.signal) : await ee(t, { kind: "deepseek", message: R.message }, Y.signal);
    } catch (B) {
      if (B instanceof Error && B.name === "AbortError") return;
      throw B;
    } finally {
      de();
    }
  }, [t, D, ce, T, H, xe, ie, de, m]), wt = f.useCallback(async (i) => {
    if (!t) return;
    if (W || D) {
      m("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    if (Mn(i).length === 0) {
      m("error", "\u8BE5\u6280\u80FD\u672A\u914D\u7F6E\u8868\u5355\u5B57\u6BB5");
      return;
    }
    U(true);
    try {
      await Lr(t, { skill_id: i.id, skill_key: i.key, skill_name: i.name, form_schema: i.form_schema }), await ae(t, { silent: true }), requestAnimationFrame(() => {
        var _a;
        (_a = Se.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      });
    } catch (S) {
      m("error", S instanceof Error ? S.message : "\u65E0\u6CD5\u6253\u5F00\u6280\u80FD\u8868\u5355");
    } finally {
      U(false);
    }
  }, [t, W, D, m, ae]), yt = f.useCallback(async (i, N, S, z) => {
    if (t) {
      U(true);
      try {
        const R = await k(N, z);
        await ee(t, { kind: "w6_form", skill_key: S, form_data: z, rendered_prompt: R, report_style: I, draft_id: i });
      } finally {
        U(false);
      }
    }
  }, [t, k, I]), vt = f.useCallback(async (i) => {
    if (t) try {
      await Pr(t, i), await ae(t, { silent: true });
    } catch (N) {
      m("error", N instanceof Error ? N.message : "\u53D6\u6D88\u5931\u8D25");
    }
  }, [t, m, ae]), M = T.find((i) => i.id === H) ?? T[T.length - 1], Ce = De(t, M == null ? void 0 : M.id, xe), jt = M ? ne(M, T.findIndex((i) => i.id === M.id), T) : "", St = s ? `aichat-panels:${s}` : void 0, Nt = f.useCallback(() => {
    !t || !(M == null ? void 0 : M.id) || (he(M.id), _r(t, M.id));
  }, [t, M == null ? void 0 : M.id]), Tt = f.useCallback(() => {
    t && (he(null), Cr(t));
  }, [t]), _t = n.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [n.jsx("div", { className: "border-b border-slate-200 p-3 dark:border-slate-800", children: n.jsxs("button", { type: "button", onClick: () => void ge(), className: "flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900", children: [n.jsx(dr, { size: 16 }), " \u65B0\u4F1A\u8BDD"] }) }), n.jsx(Qr, { sessions: a, activeId: t, onSelect: (i) => e(Z(`/sessions/${i}`)), onRename: (i) => {
    const N = a.find((S) => S.id === i);
    w({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: (N == null ? void 0 : N.title) ?? "", placeholder: "\u4F1A\u8BDD\u540D\u79F0" }).then((S) => {
      (S == null ? void 0 : S.trim()) && d(i, S.trim());
    });
  }, onDelete: (i) => void bt(i) })] }), Ct = n.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [n.jsx("div", { className: "border-b border-slate-200 px-4 py-3 text-sm font-medium dark:border-slate-800", children: xt }), n.jsxs("div", { className: "relative flex min-h-0 flex-1 flex-col", children: [le ? n.jsx(Rn, {}) : null, n.jsxs("div", { className: `min-h-0 flex-1 space-y-6 overflow-y-auto px-4 py-4 ${le ? "pointer-events-none select-none" : ""}`, children: [Te && !le ? n.jsx("p", { className: "text-sm text-red-600", children: Te }) : null, ft && t ? n.jsx("div", { className: "flex justify-center pb-2", children: n.jsx("button", { type: "button", disabled: _e, onClick: () => void mt(t), className: "rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900", children: _e ? "\u52A0\u8F7D\u4E2D\u2026" : "\u52A0\u8F7D\u66F4\u65E9\u7684\u5BF9\u8BDD" }) }) : null, C.entries.map((i) => i.entryKind === "form_draft" ? n.jsx(Cn, { draft: i.draft, disabled: W || D, onSubmit: (N) => void yt(i.draft.id, i.draft.skillId, i.draft.skillKey, N), onCancel: () => void vt(i.draft.id) }, i.draft.id) : n.jsx(jn, { round: i.round, isActive: i.round.id === C.activeRoundId, onStop: t ? () => void Fe(t, i.round.id) : void 0, onSelectTopic: gt, chipsDisabled: be }, i.round.id)), n.jsx("div", { ref: Se })] }), n.jsx("div", { className: `shrink-0 border-t border-zinc-200/70 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#212121] ${le ? "pointer-events-none" : ""}`, children: n.jsxs("div", { className: "mx-auto max-w-3xl space-y-2", children: [n.jsx(ur, { skillGroups: p, activeGroupId: $, onActiveGroupChange: L, intelligenceSkills: u, onSkillClick: wt, disabled: be }), T.length > 0 && M ? n.jsx(Rr, { title: jt, previewKind: M.kind === "markdown" ? "markdown" : "html", enabled: Ce, disabled: be, onDismiss: Nt, onEnable: Tt }) : null, n.jsx($n, { disabled: !t || !V, busy: W, isStreaming: D, editHtmlAvailable: !!Ge(M, T).htmlResourceId, onStop: pt, onSend: (i) => void kt(i), placeholder: T.length > 0 ? Ce ? "\u8F93\u5165 @ \u9009\u62E9\u6DF1\u5EA6\u8C03\u7814\u6216\u6539\u7248\u5F0F\uFF1B\u5426\u5219\u57FA\u4E8E\u4E0A\u65B9\u9884\u89C8\u8BA8\u8BBA" : "\u8F93\u5165 @ \u9009\u62E9\u80FD\u529B\uFF1B\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\u4E0D\u9644\u5E26\u62A5\u544A" : "\u8F93\u5165 @w6 \u5F00\u59CB\u6DF1\u5EA6\u8C03\u7814\uFF0C\u6216\u76F4\u63A5\u63D0\u95EE" })] }) })] })] }), Rt = T.map((i, N) => ({ ...i, title: ne(i, N, T) })), Et = n.jsx(yr, { reports: Rt, activeReportId: (M == null ? void 0 : M.id) ?? null, onActiveChange: G, onReportClose: (i) => {
    K((N) => N.filter((S) => S.id !== i)), H === i && G(null);
  } });
  return n.jsx(ir, { className: "h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", innerClassName: "h-full min-h-0 border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", leftPanelId: "aichat-left", mainPanelId: "aichat-main", rightPanelId: "aichat-right", left: _t, main: Ct, right: Et, leftMinPx: 200, leftMaxPx: 400, leftDefaultPx: 240, rightMinPx: 320, rightMaxPx: 1200, rightDefaultPct: 50, leftSidebarVisible: !b, rightSidebarVisible: ht, storageKey: St, resizeHandleWithGrip: true });
}
export {
  zn as default
};
