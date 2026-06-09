import { j as s } from "./three-BECTMk9d.js";
import { a as f } from "./monaco-BSfMmt4N.js";
import { a7 as te, O as P, X as G, a8 as re, a9 as ne, aa as se, w as y, a4 as R, a5 as ae, G as oe, ab as ie, ac as le, ad as de, a1 as L, x as ce, C as ue, a3 as K, ae as fe, af as me, s as xe, a6 as he, ag as D, ah as W, S as U, r as be, ai as pe, aj as ge } from "./main-C-CoRse3.js";
const ke = { ShieldCheck: s.jsx(G, { size: 12 }), Search: s.jsx(se, { size: 12 }), Database: s.jsx(ne, { size: 12 }), Newspaper: s.jsx(re, { size: 12 }) };
function nt({ skillGroups: e, activeGroupId: t, onActiveGroupChange: r, intelligenceSkills: a, onSkillClick: n, disabled: o = false }) {
  const i = f.useMemo(() => e.find((c) => c.id === t) ?? e[0] ?? null, [e, t]), u = f.useMemo(() => te(a, i), [a, i]);
  if (e.length === 0 && u.length === 0) return null;
  const b = e.length > 1;
  return s.jsxs("div", { className: "flex flex-col gap-2", children: [b && s.jsx("div", { className: "flex flex-wrap items-center gap-1 border-b border-slate-200/80 pb-1.5 dark:border-slate-700", role: "tablist", "aria-label": "\u6280\u80FD\u5206\u7EC4", children: e.map((c) => s.jsx("button", { type: "button", role: "tab", "aria-selected": t === c.id, onClick: () => r(c.id), className: P("shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors", t === c.id ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"), children: c.name }, c.id)) }), s.jsx("div", { className: "flex flex-wrap gap-1.5", role: "tabpanel", "aria-label": (i == null ? void 0 : i.name) ?? "\u6280\u80FD", children: u.length === 0 ? s.jsx("span", { className: "text-[11px] text-slate-400 dark:text-slate-500", children: "\u6682\u65E0\u53EF\u7528\u6280\u80FD" }) : u.map((c) => s.jsxs("button", { type: "button", onClick: () => n(c), disabled: o, className: P("flex shrink-0 items-center gap-1 rounded-xl border px-2.5 py-1 text-[11px] font-medium transition-all", o ? "cursor-not-allowed border-slate-100 text-slate-300 opacity-40 dark:border-slate-800" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"), children: [s.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: ke[c.icon || ""] || s.jsx(G, { size: 12 }) }), c.name] }, c.id)) })] });
}
function N(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${ae.baseUrl}${t}`;
}
function st(e) {
  const t = new URLSearchParams({ session_id: e }), r = y();
  return r && t.set("token", r), `${N("/osint-dashboard/w6/stream")}?${t.toString()}`;
}
function at(e) {
  var _a, _b;
  const t = { session_id: e.sessionId, skill_key: e.skillKey, form_data: e.formData };
  return ((_a = e.renderedPrompt) == null ? void 0 : _a.trim()) && (t.rendered_prompt = e.renderedPrompt.trim()), ((_b = e.reportStyle) == null ? void 0 : _b.trim()) && (t.report_style = e.reportStyle.trim()), t;
}
function ot(e) {
  var _a;
  const t = { session_id: e.sessionId, form_data: e.formData };
  return ((_a = e.renderedPrompt) == null ? void 0 : _a.trim()) && (t.rendered_prompt = e.renderedPrompt.trim()), t;
}
function it(e) {
  return { session_id: e.sessionId, message: e.message };
}
function lt(e) {
  var _a;
  const t = { session_id: e.sessionId, message: e.message };
  return ((_a = e.targetResourceId) == null ? void 0 : _a.trim()) ? (t.target_resource_id = e.targetResourceId.trim(), t.mode = "edit_html") : e.mode && (t.mode = e.mode), t;
}
function dt(e) {
  if (!e) return "";
  const t = e.split("#")[0], r = t.match(/\/artifacts\/([^/?]+)\/preview/);
  return (r == null ? void 0 : r[1]) ? decodeURIComponent(r[1]) : (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t), t);
}
const ct = 36e4;
async function we(e, t, r) {
  const a = y(), n = await fetch(N(e), { method: "POST", headers: { "Content-Type": "application/json", ...a ? { Authorization: `Bearer ${a}` } : {} }, body: JSON.stringify(t), signal: r });
  if (!n.ok) {
    R(n.status);
    const o = await n.json().catch(() => ({ detail: `HTTP ${n.status}` }));
    throw new Error(o.detail || `HTTP ${n.status}`);
  }
  return n.json();
}
async function ut(e, t, r) {
  var _a;
  const a = y(), n = await fetch(N(e), { method: "POST", headers: { "Content-Type": "application/json", ...a ? { Authorization: `Bearer ${a}` } : {} }, body: JSON.stringify(t), signal: r });
  if (!n.ok) {
    R(n.status);
    const i = await n.json().catch(() => ({ detail: `HTTP ${n.status}` }));
    throw new Error(i.detail || `HTTP ${n.status}`);
  }
  const o = (_a = n.body) == null ? void 0 : _a.getReader();
  if (!o) throw new Error("No response body");
  return o;
}
async function ft(e) {
  await we("/osint-dashboard/w6/stop", { session_id: e });
}
async function mt(e) {
  const t = y(), r = await fetch(`${N(`/osint-dashboard/sessions/${encodeURIComponent(e)}/state`)}?t=${Date.now()}`, { headers: t ? { Authorization: `Bearer ${t}` } : {} });
  return r.ok ? await r.json() : (r.status === 404 || R(r.status), null);
}
async function xt(e) {
  const t = y(), r = await fetch(`${N(`/osint-dashboard/sessions/${encodeURIComponent(e)}/reports`)}?t=${Date.now()}`, { headers: t ? { Authorization: `Bearer ${t}` } : {} });
  if (!r.ok) return r.status === 404 ? [] : (R(r.status), []);
  const a = await r.json();
  return (Array.isArray(a) ? a : a.reports ?? []).map((o) => ({ id: o.id, url: o.url || o.id, title: o.title || o.name || "\u62A5\u544A", type: o.type }));
}
function je(e) {
  if (!e) return "";
  const t = N(`/artifacts/${encodeURIComponent(e)}/download`), r = y();
  if (!r) return t;
  const a = t.includes("?") ? "&" : "?";
  return `${t}${a}token=${encodeURIComponent(r)}`;
}
function ye(e) {
  if (!e) return "";
  if (e.startsWith("http") || e.startsWith("/")) return e;
  const t = N(`/artifacts/${encodeURIComponent(e)}/preview`), r = y();
  if (!r) return t;
  const a = t.includes("?") ? "&" : "?";
  return `${t}${a}token=${encodeURIComponent(r)}`;
}
const ve = "@w6 ";
function ht(e) {
  const t = e.trimStart();
  return t.startsWith("@w6 ") || t.toLowerCase().startsWith("@w6 ");
}
function X(e) {
  const t = e.trimStart();
  return t.toLowerCase().startsWith("@w6") ? t.slice(3).trimStart().trim() : e.trim();
}
function Ne(e) {
  const t = e.trimStart();
  return t.toLowerCase().startsWith("@w6") ? t : `${ve}${e}`;
}
function Se(e) {
  return Object.entries(e).filter(([, t]) => t != null && String(t).trim() !== "").map(([t, r]) => Array.isArray(r) ? `${t}: ${r.join(", ")}` : `${t}: ${String(r)}`).join(`
`);
}
function bt(e, t) {
  const r = Se(t);
  return Ne(`\u6267\u884C\uFF1A${e}${r ? `
${r}` : ""}`);
}
function z(e) {
  const t = X(e.trim()), r = t.split(`
`).map((o) => o.trim()).filter(Boolean);
  if (r.length <= 1) return t;
  const a = r[0], n = r.slice(1).sort();
  return [a, ...n].join(`
`);
}
function pt(e, t) {
  return z(e) === z(t);
}
const F = /你是(一个)?专业|请根据以下|基于以下用户|对指定主题进行|调研分析师|事实核查员/i, B = "\u8C03\u7814\u62A5\u544A", Te = /* @__PURE__ */ new Set(["\u8C03\u7814\u62A5\u544A", "\u62A5\u544A", "\u672A\u547D\u540D\u62A5\u544A", "\u7814\u7A76\u62A5\u544A", "\u4E8B\u5B9E\u6838\u67E5\u62A5\u544A", "\u65B0\u62A5\u544A", "\u7EE7\u7EED\u7814\u7A76\u7ED3\u679C"]);
function E(e) {
  var _a;
  return ((_a = e.split(/\r?\n/)[0]) == null ? void 0 : _a.trim()) || e.trim();
}
function C(e, t) {
  const r = e.trim();
  if (!r) return "";
  const a = [...r];
  return a.length <= t ? r : `${a.slice(0, t - 1).join("")}\u2026`;
}
function $e(e) {
  var _a, _b;
  const t = [/(?:topic|主题|调研主题|核查对象)[：:\s]+(.+?)(?:\s{2,}|$)/i, /针对[「『"'](.+?)[」』"']/, /关于[「『"'](.+?)[」』"']/, /主题[：:]\s*(.+)/];
  for (const r of t) {
    const n = (_b = (_a = e.match(r)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim();
    if (n) return n;
  }
  return null;
}
function _e(e) {
  return e.replace(/_(?:edit_)?\d{10,}\.(?:html|md)$/i, "").replace(/\.(?:html|md)$/i, "").trim();
}
function Y(e) {
  return e.replace(/\s*\((?:MD|HTML)\)\s*$/i, "").trim();
}
function T(e) {
  const t = Y(e.trim());
  return !!(!t || Te.has(t) || /^研究报告\s*\((?:MD|HTML)\)$/i.test(t) || F.test(E(t)));
}
function V(e) {
  var _a, _b;
  return ((_b = (_a = e.match(/^#\s+(.+)$/m)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim()) ?? "";
}
function Ce(e, t) {
  var _a, _b;
  if ((_a = e.markdown) == null ? void 0 : _a.trim()) return e.markdown;
  if (!(t == null ? void 0 : t.length)) return;
  const r = e.timestamp ?? 0;
  let a, n = Number.POSITIVE_INFINITY;
  for (const o of t) {
    if (o.kind !== "markdown" || !((_b = o.markdown) == null ? void 0 : _b.trim())) continue;
    const i = Math.abs((o.timestamp ?? 0) - r);
    i < n && (n = i, a = o);
  }
  if (a && n <= 15e3) return a.markdown;
}
function J(e, t) {
  var _a;
  const r = Y(e.trim());
  if (!r) return "";
  if (r.includes("--")) {
    const o = (_a = r.split("--").pop()) == null ? void 0 : _a.trim();
    if (o && !T(o)) return C(o, t);
  }
  const a = $e(r);
  if (a && !T(a)) return C(a, t);
  const n = _e(E(r)).replace(/_/g, " ");
  if (n && !T(n) && !/^\d+$/.test(n)) return C(n, t);
  if (!T(r)) {
    const o = E(r);
    if (o && !F.test(o)) return C(o, t);
  }
  return "";
}
function Ee(e, t, r = 48) {
  const a = Ce(e, t);
  if (a) {
    const n = V(a);
    if (n && !T(n)) return C(n, r);
  }
  return J(e.title, r);
}
function M(e, t, r) {
  const a = e.kind === "markdown" ? "MD" : "HTML", n = Ee(e, r, 52);
  return n ? `[${a}] ${B}--${n}` : `[${a}] ${B}`;
}
function gt(e, t) {
  const r = (e == null ? void 0 : e.trim()) ? V(e) : "";
  if (r && !T(r)) return r;
  const a = t == null ? void 0 : t.trim();
  if (a) {
    const n = J(a, 80);
    if (n) return n;
    if (!F.test(E(a))) return E(a);
  }
  return a || "\u62A5\u544A";
}
const Re = /* @__PURE__ */ new Set(["", "\u65B0\u4F1A\u8BDD", "\u65B0\u7814\u7A76", "\u65B0\u5BF9\u8BDD", "\u8C03\u7814\u4E3B\u9898"]);
function H(e) {
  return Re.has((e ?? "").trim());
}
function $(e, t = 30) {
  const r = e.trim();
  if (!r) return "";
  const a = [...r];
  return a.length <= t ? r : `${a.slice(0, t - 1).join("")}\u2026`;
}
function kt(e) {
  var _a;
  const t = X(e.trim()), r = ((_a = t.replace(/^执行[：:]\s*/u, "").replace(/^补充信息\s*/u, "").split(/\r?\n/)[0]) == null ? void 0 : _a.trim()) || t;
  return $(r);
}
const Ae = ["topic", "target", "subject", "query", "title", "claim", "\u4E3B\u9898", "\u8C03\u7814\u4E3B\u9898", "\u5173\u6CE8\u9886\u57DF", "\u6838\u67E5\u5BF9\u8C61", "\u7814\u7A76\u4E3B\u9898", "domain", "focus", "field", "theme"], Me = /* @__PURE__ */ new Set(["report_style", "skill_key", "skill_id", "draft_id"]);
function wt(e, t) {
  for (const r of Ae) {
    const a = e[r];
    if (a == null) continue;
    const n = String(a).trim();
    if (n && n !== "undefined") return $(n);
  }
  for (const [r, a] of Object.entries(e).sort(([n], [o]) => n.localeCompare(o))) {
    if (Me.has(r) || a == null) continue;
    const n = String(a).trim();
    if (n.length >= 2 && n !== "undefined") return $(n);
  }
  return t ? $(t) : "";
}
const Pe = ["\u4E3B\u9898:", "\u4E3B\u9898\uFF1A", "topic:", "topic\uFF1A", "\u8C03\u7814\u4E3B\u9898:", "\u8C03\u7814\u4E3B\u9898\uFF1A"];
function Fe(e) {
  for (const t of e.split(/\r?\n/)) {
    const r = t.trim();
    for (const a of Pe) if (r.startsWith(a)) {
      const n = r.slice(a.length).trim();
      if (n) return $(n);
    }
  }
  return "";
}
function jt(e) {
  var _a, _b;
  const t = (_a = e.sessionTitle) == null ? void 0 : _a.trim();
  if (t && !H(t)) return t;
  for (let r = e.rounds.length - 1; r >= 0; r--) {
    const a = e.rounds[r];
    if (a.anchorKind === "form" && a.anchorText) {
      const o = Fe(a.anchorText);
      if (o) return o;
    }
    const n = (_b = a.topic) == null ? void 0 : _b.trim();
    if (n && !H(n)) return $(n);
  }
  return t || "\u65B0\u4F1A\u8BDD";
}
const O = /* @__PURE__ */ new Map();
function Ie(e) {
  var _a, _b;
  const [t, r] = f.useState(""), [a, n] = f.useState(false), [o, i] = f.useState(null), u = e == null ? void 0 : e.kind, b = ((_a = e == null ? void 0 : e.resourceId) == null ? void 0 : _a.trim()) || "", c = ((_b = e == null ? void 0 : e.markdown) == null ? void 0 : _b.trim()) || "", d = (e == null ? void 0 : e.url) || "";
  return f.useEffect(() => {
    if (u !== "markdown") {
      r(""), i(null), n(false);
      return;
    }
    if (c) {
      r(c), i(null), n(false);
      return;
    }
    if (!b) {
      r(""), i("\u6682\u65E0 Markdown \u5185\u5BB9"), n(false);
      return;
    }
    const h = O.get(b);
    if (h !== void 0) {
      r(h), i(null), n(false);
      return;
    }
    let k = false;
    const w = new AbortController();
    n(true), i(null);
    const j = y(), S = { Accept: "text/markdown,text/plain,*/*" };
    j && (S.Authorization = `Bearer ${j}`);
    const m = d || ye(b), g = j ? `${m}${m.includes("?") ? "&" : "?"}token=${encodeURIComponent(j)}` : m;
    return fetch(g, { headers: S, signal: w.signal }).then(async (x) => {
      if (!x.ok) throw new Error(`HTTP ${x.status}`);
      return x.text();
    }).then((x) => {
      k || (O.set(b, x), r(x));
    }).catch((x) => {
      k || x instanceof DOMException && x.name === "AbortError" || i(x instanceof Error ? x.message : "\u52A0\u8F7D\u5931\u8D25");
    }).finally(() => {
      k || n(false);
    }), () => {
      k = true, w.abort();
    };
  }, [u, b, c, d]), { content: t, loading: a, error: o };
}
function yt({ reports: e, activeReportId: t, onActiveChange: r, onReportClose: a }) {
  const { addToast: n } = oe(), [o, i] = f.useState(0), [u, b] = f.useState(null), c = f.useRef(e.length);
  f.useEffect(() => {
    if (e.length === 0 || t && e.some((v) => v.id === t)) return;
    const l = e.filter((v) => v.kind === "html"), p = l.length > 0 ? l[l.length - 1] : e[e.length - 1];
    r(p.id);
  }, [e, t, r]), f.useEffect(() => {
    if (t && e.length > c.current) {
      const l = e[e.length - 1];
      l.kind === "html" && r(l.id);
    }
    c.current = e.length;
  }, [t, e, r]);
  const d = e.find((l) => l.id === t), { content: h, loading: k, error: w } = Ie(d), j = (d == null ? void 0 : d.kind) === "markdown" && !k && !w && !!h.trim(), S = f.useCallback(() => {
    var _a;
    const l = (_a = d == null ? void 0 : d.resourceId) == null ? void 0 : _a.trim();
    if (!l) {
      n("error", "\u65E0\u6CD5\u4E0B\u8F7D\u8BE5\u62A5\u544A");
      return;
    }
    window.open(je(l), "_blank"), n("success", "\u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [d == null ? void 0 : d.resourceId, n]), m = f.useCallback(() => {
    const l = h.trim();
    if (!l) {
      n("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u4E0B\u8F7D");
      return;
    }
    ie(l, (d == null ? void 0 : d.title) || "\u62A5\u544A"), n("success", "Markdown \u4E0B\u8F7D\u5DF2\u5F00\u59CB");
  }, [h, d == null ? void 0 : d.title, n]), g = f.useCallback(async () => {
    const l = h.trim();
    if (!l) {
      n("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    b("word");
    try {
      await le(l, (d == null ? void 0 : d.title) || "\u62A5\u544A"), n("success", "Word \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (p) {
      n("error", p instanceof Error ? p.message : "Word \u5BFC\u51FA\u5931\u8D25");
    } finally {
      b(null);
    }
  }, [h, d == null ? void 0 : d.title, n]), x = f.useCallback(async () => {
    const l = h.trim();
    if (!l) {
      n("error", "\u6682\u65E0\u5185\u5BB9\u53EF\u5BFC\u51FA");
      return;
    }
    b("pdf");
    try {
      await de(l, (d == null ? void 0 : d.title) || "\u62A5\u544A"), n("success", "PDF \u5BFC\u51FA\u5DF2\u5F00\u59CB");
    } catch (p) {
      n("error", p instanceof Error ? p.message : "PDF \u5BFC\u51FA\u5931\u8D25");
    } finally {
      b(null);
    }
  }, [h, d == null ? void 0 : d.title, n]), q = (l) => {
    const p = e.findIndex((_) => _.id === l), v = e.filter((_) => _.id !== l);
    if (t === l && v.length > 0) {
      const _ = Math.min(p, v.length - 1);
      r(v[_].id);
    }
    a(l);
  };
  if (e.length === 0) return s.jsxs("div", { className: "flex h-full flex-col items-center justify-center bg-[#f7f8fa] text-slate-500 dark:bg-slate-950", children: [s.jsx(L, { size: 40, className: "mb-3 opacity-30" }), s.jsx("div", { className: "text-sm font-medium text-slate-600 dark:text-slate-400", children: "\u62A5\u544A\u9884\u89C8" }), s.jsx("div", { className: "mt-1 max-w-xs text-center text-xs text-slate-400", children: "\u5B8C\u6210 W6 \u7814\u7A76\u4EFB\u52A1\u540E\uFF0CHTML \u4E0E Markdown \u62A5\u544A\u5C06\u5728\u6B64\u5B9E\u65F6\u9884\u89C8" })] });
  const A = (d == null ? void 0 : d.kind) === "markdown", ee = (d == null ? void 0 : d.kind) === "html" || !(d == null ? void 0 : d.kind);
  return s.jsxs("div", { className: "flex h-full min-h-0 flex-col bg-white dark:bg-slate-900", children: [s.jsxs("div", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200/90 bg-slate-50/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/80", children: [s.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [d ? A ? s.jsx(ce, { size: 14, className: "shrink-0 text-emerald-600 dark:text-emerald-400" }) : s.jsx(L, { size: 14, className: "shrink-0 text-slate-500 dark:text-slate-400" }) : null, s.jsxs("div", { className: "relative min-w-0 flex-1", children: [s.jsx("select", { value: t ?? "", onChange: (l) => r(l.target.value), "aria-label": "\u9009\u62E9\u62A5\u544A", title: d ? M(d, e.findIndex((l) => l.id === d.id), e) : void 0, className: P("h-8 w-full min-w-0 appearance-none truncate rounded-lg border border-slate-200 bg-white py-0 pl-2.5 pr-8 text-xs font-medium text-slate-800 outline-none transition-colors", "hover:border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-300/50", "dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-slate-600 dark:focus:border-blue-500"), children: e.map((l, p) => s.jsx("option", { value: l.id, title: M(l, p, e), children: M(l, p, e) }, l.id)) }), s.jsx(ue, { size: 14, className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500", "aria-hidden": true })] }), e.length > 1 ? s.jsxs("span", { className: "shrink-0 text-[10px] tabular-nums text-slate-400 dark:text-slate-500", children: [e.findIndex((l) => l.id === t) + 1, "/", e.length] }) : null, d ? s.jsx("button", { type: "button", onClick: () => q(d.id), className: "shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400", title: "\u5173\u95ED\u5F53\u524D\u62A5\u544A", "aria-label": "\u5173\u95ED\u5F53\u524D\u62A5\u544A", children: s.jsx(K, { size: 13 }) }) : null] }), d ? s.jsxs("div", { className: "flex shrink-0 items-center gap-1 border-l border-slate-200/90 pl-2 dark:border-slate-800", children: [A && j ? s.jsxs(s.Fragment, { children: [s.jsx("button", { type: "button", onClick: m, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u4E0B\u8F7D Markdown", children: "\u4E0B\u8F7D MD" }), s.jsx("button", { type: "button", onClick: g, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA Word", children: u === "word" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA Word" }), s.jsx("button", { type: "button", onClick: x, disabled: u !== null, className: "rounded px-2 py-1 text-[11px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200", title: "\u5BFC\u51FA PDF", children: u === "pdf" ? "\u5BFC\u51FA\u4E2D\u2026" : "\u5BFC\u51FA PDF" })] }) : null, ee ? s.jsxs(s.Fragment, { children: [s.jsx("button", { type: "button", onClick: () => i((l) => l + 1), className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u5237\u65B0", children: s.jsx(fe, { size: 13 }) }), s.jsx("a", { href: d.url, target: "_blank", rel: "noopener noreferrer", className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u65B0\u7A97\u53E3\u6253\u5F00", children: s.jsx(me, { size: 13 }) }), s.jsx("button", { type: "button", onClick: S, className: "rounded p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800", title: "\u4E0B\u8F7D HTML", children: s.jsx(xe, { size: 13 }) })] }) : null] }) : null] }), s.jsx("div", { className: "relative flex min-h-0 flex-1 flex-col overflow-hidden bg-white dark:bg-slate-900", children: d ? A ? s.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: k ? s.jsxs("div", { className: "flex h-full items-center justify-center text-sm text-slate-500", children: [s.jsx("span", { className: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-600" }), "\u6B63\u5728\u52A0\u8F7D Markdown\u2026"] }) : w ? s.jsx("div", { className: "flex h-full flex-col items-center justify-center gap-2 text-sm text-slate-500", children: s.jsxs("p", { children: ["\u52A0\u8F7D\u5931\u8D25: ", w] }) }) : s.jsx(he, { content: h.trim() || "\u65E0\u5185\u5BB9" }) }) : s.jsx("iframe", { src: d.url, className: "min-h-0 w-full flex-1 border-0", title: d.title, sandbox: "allow-scripts allow-same-origin" }, `${d.id}-${o}`) : s.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-400", children: s.jsx("div", { className: "text-center text-sm", children: "\u8BF7\u4ECE\u4E0B\u62C9\u83DC\u5355\u9009\u62E9\u62A5\u544A" }) }) })] });
}
function I(e, t) {
  return t == null || t === "" ? false : Array.isArray(t) ? t.length > 0 : true;
}
function Le(e, t) {
  const r = { ...t };
  for (const a of e) !I(a, r[a.name]) && a.default !== void 0 && (r[a.name] = a.default);
  return r;
}
function De(e, t) {
  for (const r of e) if (r.required && !I(r, t[r.name] ?? r.default)) return false;
  return true;
}
function vt({ fields: e, onSubmit: t, disabled: r = false, stepMode: a = true }) {
  const [n, o] = f.useState(() => D(e)), [i, u] = f.useState(0), b = e.map((m) => m.name).join("\0");
  if (f.useEffect(() => {
    o(D(e)), u(0);
  }, [b]), e.length === 0) return s.jsx("p", { className: "text-xs text-slate-500", children: "form_schema \u65E0\u6709\u6548 fields" });
  const c = () => {
    t(Le(e, n));
  };
  if (!a) return s.jsxs("div", { className: "space-y-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900", children: [s.jsx(W, { fields: e, formData: n, onChange: (m, g) => o((x) => ({ ...x, [m]: g })), compact: true }), s.jsxs("button", { type: "button", onClick: c, disabled: r || !De(e, n), className: "flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", children: [s.jsx(U, { size: 14 }), "\u63D0\u4EA4"] })] });
  const d = e[i], h = i >= e.length - 1, k = n[d.name], w = !d.required || I(d, k ?? d.default), j = () => {
    h ? c() : u((m) => m + 1);
  }, S = () => {
    h ? c() : u((m) => m + 1);
  };
  return s.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900", children: [s.jsxs("div", { className: "mb-4 flex items-center gap-1.5", children: [e.map((m, g) => s.jsx("div", { className: `h-1 flex-1 rounded-full transition-colors ${g < i ? "bg-blue-600 dark:bg-blue-500" : g === i ? "bg-blue-400 dark:bg-blue-400/70" : "bg-slate-200 dark:bg-slate-700"}` }, g)), s.jsxs("span", { className: "ml-1 text-xs text-slate-500 dark:text-slate-400", children: [i + 1, "/", e.length] })] }), s.jsx(W, { fields: [d], formData: n, onChange: (m, g) => o((x) => ({ ...x, [m]: g })), compact: true }), s.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [s.jsxs("button", { type: "button", onClick: () => u((m) => Math.max(0, m - 1)), disabled: r || i === 0, className: "flex items-center gap-1 px-3 py-2 text-xs text-slate-500 transition-colors hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-400 dark:hover:text-slate-200", children: [s.jsx(be, { size: 14 }), "\u4E0A\u4E00\u6B65"] }), s.jsx("div", { className: "flex-1" }), d.required ? null : s.jsxs("button", { type: "button", onClick: S, disabled: r, className: "flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-300", children: [s.jsx(pe, { size: 14 }), "\u8DF3\u8FC7"] }), s.jsx("button", { type: "button", onClick: j, disabled: r || !w, className: "flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-blue-600 dark:hover:bg-blue-500", children: h ? s.jsxs(s.Fragment, { children: [s.jsx(U, { size: 14 }), "\u5F00\u59CB\u6267\u884C"] }) : s.jsxs(s.Fragment, { children: ["\u4E0B\u4E00\u6B65", s.jsx(ge, { size: 14 })] }) })] })] });
}
function We({ topic: e, onSelect: t, disabled: r }) {
  return s.jsx("button", { type: "button", disabled: r, onClick: () => t(e), title: e.text, className: "inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/40 dark:hover:text-blue-300", children: s.jsx("span", { className: "truncate", children: e.text }) });
}
function Ue({ topics: e, onSelect: t, disabled: r }) {
  return e.length ? s.jsx("div", { className: "flex flex-wrap gap-1.5", children: e.map((a) => s.jsx(We, { topic: a, onSelect: t, disabled: r }, a.text)) }) : null;
}
const ze = { active: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u63A8\u8350\u8FFD\u95EE", used: "\u6DF1\u5EA6\u8C03\u7814 \xB7 \u5DF2\u9009\u7528" };
function Nt({ topics: e, status: t, onSelect: r, disabled: a = false }) {
  const n = t === "active" ? "border-violet-300/70 bg-violet-50/80 dark:border-violet-800 dark:bg-violet-950/25" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "active" ? "bg-violet-500" : "bg-slate-400";
  return s.jsx("div", { className: `max-w-[92%] rounded-lg border ${n}`, children: s.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), s.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: ze[t] })] }), s.jsx(Ue, { topics: e, onSelect: r, disabled: a || t === "used" })] }) });
}
const Be = 4, He = 200;
function Oe(e) {
  const t = e.trim();
  return !(!t || t.length > He || /你是一个.{0,24}(助手|专家|模型|AI|智能体)/.test(t));
}
function Ge(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    if (r.role !== "w6") continue;
    const a = r.followUpQuestions;
    if (a == null ? void 0 : a.length) return a;
  }
  return [];
}
function Ke(e, t) {
  const r = (t == null ? void 0 : t.trim()) || "\u672C\u6B21\u7814\u7A76\u4E3B\u9898";
  return e === "info_research" ? [`\u9488\u5BF9\u300C${r}\u300D\u8FD8\u6709\u54EA\u4E9B\u4FE1\u606F\u7F3A\u53E3\u9700\u8981\u8865\u5145\u8C03\u7814\uFF1F`, "\u8BF7\u68B3\u7406\u62A5\u544A\u4E2D\u7684\u5173\u952E\u5B9E\u4F53\u53CA\u5176\u5173\u8054\u5173\u7CFB", "\u5BF9\u6BD4\u4E0D\u540C\u4FE1\u6E90\u5BF9\u8BE5\u4E3B\u9898\u7684\u8BF4\u6CD5\u5DEE\u5F02", "\u8BF7\u7ED9\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u540E\u7EED\u5F00\u6E90\u8C03\u67E5\u65B9\u5411"] : e === "data_collection" ? [`\u300C${r}\u300D\u76F8\u5173\u516C\u5F00\u6570\u636E\u8FD8\u6709\u54EA\u4E9B\u672A\u6536\u5F55\uFF1F`, "\u8BF7\u9A8C\u8BC1\u62A5\u544A\u4E2D\u5173\u952E\u6570\u636E\u7684\u539F\u59CB\u51FA\u5904", "\u54EA\u4E9B\u6307\u6807\u503C\u5F97\u5EFA\u7ACB\u6301\u7EED\u76D1\u6D4B\uFF1F", "\u8BF7\u5217\u51FA\u53EF\u590D\u7528\u7684\u6570\u636E\u91C7\u96C6\u6E20\u9053\u4E0E\u65B9\u6CD5"] : [`\u62A5\u544A\u4E2D\u5BF9\u300C${r}\u300D\u7684\u6838\u5FC3\u7ED3\u8BBA\u662F\u4EC0\u4E48\uFF1F`, "\u6709\u54EA\u4E9B\u5173\u952E\u8BC1\u636E\u4ECD\u9700\u8981\u8FDB\u4E00\u6B65\u6838\u5B9E\uFF1F", "\u5982\u679C\u8BE5\u4E3B\u5F20\u5728\u793E\u4EA4\u5A92\u4F53\u4F20\u64AD\uFF0C\u5E94\u5982\u4F55\u8F9F\u8C23\u6216\u6807\u6CE8\uFF1F", "\u8BF7\u5217\u51FA 3 \u6761\u53EF\u6267\u884C\u7684\u4E0B\u4E00\u6B65\u8C03\u67E5\u5EFA\u8BAE\u3002"];
}
function Xe(e) {
  const t = e.limit ?? Be, r = /* @__PURE__ */ new Set(), a = [], n = (o) => {
    const i = o.trim();
    !i || !Oe(i) || r.has(i) || a.length >= t || (r.add(i), a.push({ text: i, mode: "w6" }));
  };
  for (const o of e.followUpQuestions) n(o);
  for (const o of e.w6FollowUps ?? []) n(o);
  for (const o of Ge(e.messages)) n(o);
  if (a.length < t) {
    for (const o of Ke(e.skillKey, e.reportTitle)) if (n(o), a.length >= t) break;
  }
  return a;
}
function St(e) {
  return Xe(e);
}
const Ye = { tool: "\u5DE5\u5177", status: "\u72B6\u6001", phase: "\u9636\u6BB5", log: "\u65E5\u5FD7", token: "\u8F93\u51FA" };
function Q(e) {
  var _a, _b;
  const t = ((_a = e.message) == null ? void 0 : _a.trim()) || ((_b = e.token) == null ? void 0 : _b.trim()) || (e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "stopped" ? "\u5DF2\u624B\u52A8\u505C\u6B62 W6 \u8C03\u7814" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "");
  if (!t) return "";
  const r = Ye[e.type];
  return r ? `[${r}] ${t}` : t;
}
function Tt(e, t = 8) {
  const r = [];
  for (const a of e) {
    const n = Q(a);
    n && r.push(n);
  }
  return r.length <= t ? r : r.slice(-t);
}
function $t(e, t = 8) {
  var _a;
  const r = [];
  let a = "";
  const n = () => {
    if (!a) return;
    const o = a.length > 160 ? `\u2026${a.slice(-160)}` : a;
    r.push(`[\u8F93\u51FA] ${o}`), a = "";
  };
  for (const o of e) {
    if (o.type === "token" && ((_a = o.token) == null ? void 0 : _a.trim())) {
      a += o.token;
      continue;
    }
    n();
    const i = Q(o);
    i && r.push(i);
  }
  return n(), r.length <= t ? r : r.slice(-t);
}
function _t(e, t, r, a = []) {
  const n = a.some((i) => i.type === "done" || i.type === "stopped"), o = a.some((i) => i.type === "error");
  if (r) return e === "running" ? t === "error" || o ? "error" : t === "running" ? "running" : n && t === "idle" ? "done" : "running" : t === "running" ? "running" : t === "error" || o ? "error" : n || e === "stopped" || e === "done" && n ? "done" : e === "done" ? "running" : "idle";
  switch (e) {
    case "running":
      return o ? "error" : n ? "done" : "running";
    case "error":
      return "error";
    case "done":
      return n ? "done" : "running";
    case "stopped":
      return "done";
    default:
      return "idle";
  }
}
const Ve = { idle: "\u5F85\u547D", running: "\u8FD0\u884C\u4E2D", done: "\u5DF2\u5B8C\u6210", error: "\u51FA\u9519" }, Je = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D\u2026", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" }, Qe = { log: "\u65E5\u5FD7", tool: "\u5DE5\u5177", token: "\u8F93\u51FA", status: "\u72B6\u6001", done: "\u5B8C\u6210", error: "\u9519\u8BEF" };
function Ze(e) {
  return e.message ? e.message : e.token ? e.token : e.type === "done" ? "\u8C03\u7814\u5B8C\u6210" : e.type === "error" ? "\u6267\u884C\u5931\u8D25" : "";
}
function Ct({ open: e, onClose: t, events: r, status: a, connection: n }) {
  const o = f.useRef(null);
  return f.useEffect(() => {
    var _a;
    e && ((_a = o.current) == null ? void 0 : _a.scrollTo({ top: o.current.scrollHeight, behavior: "smooth" }));
  }, [r, e]), e ? s.jsx("div", { className: "fixed inset-0 z-50 flex justify-end bg-black/40", onClick: t, role: "presentation", children: s.jsxs("div", { className: "flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900", onClick: (i) => i.stopPropagation(), role: "dialog", "aria-labelledby": "subagent-title", children: [s.jsxs("header", { className: "flex shrink-0 items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800", children: [s.jsx("h2", { id: "subagent-title", className: "flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100", children: "\u5B50 Agent \xB7 W6" }), s.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${a === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" : a === "error" ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300" : a === "done" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`, children: Ve[a] ?? a }), s.jsx("span", { className: "text-[10px] text-slate-500", children: Je[n] }), s.jsx("button", { type: "button", onClick: t, className: "rounded p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200", "aria-label": "\u5173\u95ED", children: s.jsx(K, { size: 18 }) })] }), s.jsx("div", { ref: o, className: "flex-1 overflow-y-auto px-4 py-3 font-mono text-xs", children: r.length === 0 ? s.jsx("p", { className: "italic text-slate-500", children: "\u7B49\u5F85 W6 \u8F93\u51FA\u2026" }) : r.map((i, u) => s.jsxs("div", { className: "flex gap-2 border-b border-slate-100 py-2 last:border-0 dark:border-slate-800", children: [s.jsx("span", { className: "w-10 shrink-0 text-[10px] font-bold uppercase text-blue-600/90 dark:text-blue-400/90", children: Qe[i.type] ?? i.type }), s.jsx("span", { className: "flex-1 break-words text-slate-700 dark:text-slate-300", children: Ze(i) }), i.progress != null && i.progress > 0 ? s.jsxs("span", { className: "shrink-0 text-slate-500", children: [i.progress, "%"] }) : null] }, `${i.timestamp ?? u}-${u}`)) })] }) }) : null;
}
const qe = { pending: "\u53C2\u6570\u914D\u7F6E \xB7 \u5F85\u586B\u5199", submitted: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u63D0\u4EA4", cancelled: "\u53C2\u6570\u914D\u7F6E \xB7 \u5DF2\u53D6\u6D88" };
function Et({ title: e, status: t, submittedSummary: r, children: a }) {
  const n = t === "pending" ? "border-amber-300/70 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/25" : t === "submitted" ? "border-emerald-300/60 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/50 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30", o = t === "pending" ? "bg-amber-500" : t === "submitted" ? "bg-emerald-500" : "bg-slate-400";
  return s.jsx("div", { className: `max-w-[92%] rounded-lg border ${n}`, children: s.jsxs("div", { className: "flex flex-col gap-2 px-3 py-2.5", children: [s.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [s.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o}` }), s.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: qe[t] }), s.jsx("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: e })] }), t === "submitted" && r ? s.jsx("pre", { className: "whitespace-pre-wrap rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 font-sans text-[11px] leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400", children: r }) : null, t === "pending" && a ? s.jsx("div", { children: a }) : null] }) });
}
const Rt = [{ id: "auto", label: "\u667A\u80FD\u63A8\u8350", hint: "\u6839\u636E\u62A5\u544A\u5185\u5BB9\u81EA\u52A8\u9009\u62E9\u7248\u5F0F" }, { id: "magazine", label: "\u6742\u5FD7\u7F16\u8F91\u98CE", hint: "\u886C\u7EBF\u6807\u9898 \xB7 \u6696\u8272 editorial\uFF08guizang \u98CE\u683C A\uFF09" }, { id: "swiss", label: "\u745E\u58EB\u56FD\u9645\u4E3B\u4E49", hint: "\u7F51\u683C\u70B9\u9635 \xB7 \u9AD8\u5BF9\u6BD4\u529F\u80FD\u8272\uFF08guizang \u98CE\u683C B\uFF09" }], Z = "osint-dashboard-report-style:";
function At(e) {
  if (!e) return "auto";
  try {
    const t = localStorage.getItem(`${Z}${e}`);
    if (t === "magazine" || t === "swiss" || t === "auto") return t;
  } catch {
  }
  return "auto";
}
function Mt(e, t) {
  if (e) try {
    localStorage.setItem(`${Z}${e}`, t);
  } catch {
  }
}
export {
  St as A,
  _t as B,
  yt as C,
  vt as D,
  ct as E,
  Ct as F,
  Nt as G,
  Mt as H,
  nt as I,
  Xe as J,
  jt as K,
  M as L,
  Rt as R,
  Et as S,
  ve as W,
  pt as a,
  bt as b,
  H as c,
  wt as d,
  dt as e,
  mt as f,
  ut as g,
  at as h,
  ht as i,
  Se as j,
  Ne as k,
  ot as l,
  kt as m,
  it as n,
  we as o,
  lt as p,
  ye as q,
  gt as r,
  X as s,
  $ as t,
  xt as u,
  st as v,
  ft as w,
  $t as x,
  Tt as y,
  At as z
};
