import { j as n, c as lt } from "./three-BECTMk9d.js";
import { a as m } from "./monaco-BSfMmt4N.js";
import { a0 as dt, O as U, a1 as ct, a2 as ut, a3 as Ce, w as Ne, a4 as ft, a5 as mt, M as pt, o as ht, T as bt, E as xt, a6 as gt, K as kt, L as yt, u as vt, p as wt, Q as St, R as be, U as jt, G as _t, V as Rt, W as Tt, Y as It, P as Ct } from "./main-C-CoRse3.js";
import { q as Nt, J as Et, x as At, y as qt, S as Ee, F as Pt, G as Lt, D as $t, e as Ae, z as xe, K as Mt, c as Q, L as ge, I as Dt, C as Ot } from "./reportStyle-DSpUgWD8.js";
import "./charts-Cx7lSOSv.js";
function qe(e) {
  const t = e.trim();
  return t ? /(?:改版式|报告排版|视觉风格|章节结构)|(?:改成|改为|换成)|(?:调整|优化|修改).{0,12}(?:排版|布局|样式|风格|配色|颜色|字体|章节|字号|边距|间距|对齐)|(?:背景色?|配色方案)|(?:字体|字号|边距|间距|对齐|居中|加粗).{0,6}(?:调整|修改|改|换|大|小)|(?:缩小|放大).{0,6}(?:字体|标题|字号)/.test(t) : false;
}
function Ft(e, t, s) {
  var _a, _b;
  if (!t) return { kind: "deepseek" };
  const o = (_a = s == null ? void 0 : s.htmlResourceId) == null ? void 0 : _a.trim(), r = (_b = s == null ? void 0 : s.mdResourceId) == null ? void 0 : _b.trim();
  return o && qe(e) ? { kind: "discuss", mode: "edit_html", target_resource_id: o } : r ? { kind: "discuss", target_resource_id: r } : { kind: "discuss" };
}
const Pe = "aichat:report-context-dismiss";
function de() {
  try {
    const e = sessionStorage.getItem(Pe);
    if (!e) return {};
    const t = JSON.parse(e);
    return !t || typeof t != "object" ? {} : t;
  } catch {
    return {};
  }
}
function Le(e) {
  try {
    sessionStorage.setItem(Pe, JSON.stringify(e));
  } catch {
  }
}
function Kt(e) {
  var _a;
  return e && ((_a = de()[e]) == null ? void 0 : _a.trim()) || null;
}
function Ut(e, t) {
  const s = de();
  s[e] = t, Le(s);
}
function Wt(e) {
  const t = de();
  delete t[e], Le(t);
}
function ke(e, t, s) {
  return !e || !t ? false : s !== t;
}
function Bt({ title: e, previewKind: t, enabled: s, disabled: o, onDismiss: r, onEnable: l }) {
  const d = t === "markdown" ? "Markdown" : "HTML \u9884\u89C8", u = t === "markdown" ? ct : ut;
  return s ? n.jsxs("div", { className: U("flex items-start gap-2 rounded-lg border border-sky-200/80 bg-sky-50/60 px-3 py-2", "dark:border-sky-500/25 dark:bg-sky-950/30"), children: [n.jsx(u, { size: 14, className: "mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" }), n.jsxs("div", { className: "min-w-0 flex-1", children: [n.jsx("p", { className: "text-xs font-medium text-sky-900 dark:text-sky-100", children: "\u57FA\u4E8E\u5F53\u524D\u9884\u89C8\u8FFD\u95EE" }), n.jsxs("p", { className: "truncate text-xs text-sky-800/80 dark:text-sky-200/80", children: [e, n.jsxs("span", { className: "text-sky-600/70 dark:text-sky-400/70", children: [" \xB7 ", d] })] })] }), n.jsx("button", { type: "button", disabled: o, onClick: r, "aria-label": "\u5173\u95ED\u62A5\u544A\u4E0A\u4E0B\u6587", className: U("shrink-0 rounded p-1 text-sky-700/70 hover:bg-sky-100/80 hover:text-sky-900", "disabled:opacity-40 dark:text-sky-300/70 dark:hover:bg-sky-900/50 dark:hover:text-sky-100"), children: n.jsx(Ce, { size: 14 }) })] }) : n.jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900/50", children: [n.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF0C\u4E0D\u9644\u5E26\u62A5\u544A\u4E0A\u4E0B\u6587" }), n.jsxs("button", { type: "button", disabled: o, onClick: l, className: U("inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 font-medium text-slate-700", "hover:bg-white disabled:opacity-40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"), children: [n.jsx(dt, { size: 12 }), "\u7ED1\u5B9A\u300C", e, "\u300D"] })] });
}
const Gt = "/aichat";
function F(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Gt}${t}`;
}
function $e(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${mt.baseUrl}${t}`;
}
async function O(e, t) {
  const s = Ne(), o = { "Content-Type": "application/json", ...t == null ? void 0 : t.headers };
  s && (o.Authorization = `Bearer ${s}`);
  const r = await fetch($e(e), { ...t, headers: o });
  if (r.status === 401) throw ft(401), new Error("Unauthorized");
  if (!r.ok) {
    const l = await r.json().catch(() => ({}));
    throw new Error(l.detail || r.statusText);
  }
  return r.json();
}
function ye(e, t = {}) {
  const s = new URLSearchParams(), o = t.sinceSeq ?? 0;
  o > 0 ? s.set("sinceSeq", String(o)) : (s.set("limit_rounds", String(t.limitRounds ?? 10)), t.beforeSeq && t.beforeSeq > 0 && s.set("before_seq", String(t.beforeSeq)));
  const r = s.toString() ? `?${s.toString()}` : "";
  return O(`/aichat/sessions/${encodeURIComponent(e)}/timeline${r}`);
}
function zt(e, t) {
  return O(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts`, { method: "POST", body: JSON.stringify(t) });
}
function Jt(e, t) {
  return O(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts/${encodeURIComponent(t)}/cancel`, { method: "POST", body: "{}" });
}
function K(e, t, s) {
  return O(`/aichat/sessions/${encodeURIComponent(e)}/rounds`, { method: "POST", body: JSON.stringify(t), signal: s });
}
function ve(e, t) {
  return O(`/aichat/sessions/${encodeURIComponent(e)}/rounds/${encodeURIComponent(t)}/stop`, { method: "POST", body: "{}" });
}
function Ht(e, t) {
  const s = new URLSearchParams({ fromSeq: String(t) }), o = Ne();
  return o && s.set("token", o), `${$e(`/aichat/sessions/${encodeURIComponent(e)}/stream`)}?${s.toString()}`;
}
function Vt(e) {
  return O(`/aichat/sessions/${encodeURIComponent(e)}/reports`);
}
function Me(e) {
  return Nt(e);
}
const we = 1e3, Yt = 3e4;
function Qt(e, t, s, o) {
  let r = false, l = null, d = null, u = we;
  const p = () => {
    d !== null && (clearTimeout(d), d = null);
  }, b = () => {
    if (r) return;
    p(), l == null ? void 0 : l.close(), l = null;
    const h = Ht(e, t()), w = new EventSource(h);
    l = w, w.addEventListener("event_appended", (y) => {
      if (!(r || l !== w)) try {
        const c = JSON.parse(y.data);
        u = we, s(c);
      } catch {
      }
    }), w.onerror = () => {
      if (r || l !== w) return;
      w.close(), l = null;
      const y = u;
      u = Math.min(u * 2, Yt), d = setTimeout(() => {
        d = null, b();
      }, y);
    };
  };
  return b(), () => {
    r = true, p(), l == null ? void 0 : l.close(), l = null;
  };
}
function Z(e) {
  var _a, _b, _c;
  const t = (_a = e.draft_id) == null ? void 0 : _a.trim();
  return t || ((_c = (_b = e.payload) == null ? void 0 : _b.draft_id) == null ? void 0 : _c.trim()) || "";
}
function Se(e) {
  const t = e.payload ?? {};
  return { draft_id: Z(e) || t.draft_id, skill_id: t.skill_id, skill_key: t.skill_key, skill_name: t.skill_name || e.topic || e.body, form_schema: t.form_schema, round_id: t.round_id || e.round_id };
}
function Xt(e) {
  return Et({ followUpQuestions: e.questions, messages: [], skillKey: e.skillKey ?? null, reportTitle: e.reportTitle }).map((s) => s.text);
}
function je(e, t, s, o) {
  for (let r = e.length - 1; r >= 0; r--) e[r].roundId === t && e[r].kind === s && e.splice(r, 1);
  e.push({ ...o, roundId: t, kind: s });
}
function _e() {
  return { status: "running", logs: [], progress: 0, lastLine: "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026" };
}
function q(e, t) {
  let s = e.get(t);
  return s || (s = { id: t, kind: "w6_manual", topic: "", anchorText: "", anchorKind: "user", sealed: false }, e.set(t, s)), s;
}
function X(e, t = null, s = 1) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
  const o = [], r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = [];
  let u = "";
  const p = [], b = (c) => {
    const f = r.get(c);
    if (!f) return;
    const a = d.findIndex((g) => g.entryKind === "round" && g.round.id === c);
    a >= 0 ? d[a] = { entryKind: "round", round: f } : d.push({ entryKind: "round", round: f });
  }, h = (c) => {
    if (c.status !== "pending") return;
    const f = d.findIndex((a) => a.entryKind === "form_draft" && a.draft.id === c.id);
    f >= 0 ? d[f] = { entryKind: "form_draft", draft: c } : d.push({ entryKind: "form_draft", draft: c });
  }, w = (c) => {
    const f = d.findIndex((a) => a.entryKind === "form_draft" && a.draft.id === c);
    f >= 0 && d.splice(f, 1);
  };
  for (const c of e ?? []) {
    const f = (_a = c.round_id) == null ? void 0 : _a.trim();
    switch (c.type) {
      case "form_presented": {
        const a = Se(c), g = Z(c);
        if (!g) break;
        const R = { id: g, skillId: ((_b = a.skill_id) == null ? void 0 : _b.trim()) || "", skillKey: ((_c = a.skill_key) == null ? void 0 : _c.trim()) || "", skillName: ((_d = a.skill_name) == null ? void 0 : _d.trim()) || "\u6280\u80FD\u4EFB\u52A1", formSchema: a.form_schema || "", status: "pending" };
        l.set(g, R), h(R);
        break;
      }
      case "form_cancelled": {
        const a = Z(c);
        if (!a) break;
        const g = l.get(a);
        g && (g.status = "cancelled", w(a));
        break;
      }
      case "form_draft_submitted": {
        const a = Z(c);
        if (!a) break;
        const g = l.get(a);
        g && (g.status = "submitted", g.submittedRoundId = f || Se(c).round_id, w(a));
        break;
      }
      case "session_title":
        ((_e2 = c.title) == null ? void 0 : _e2.trim()) && (u = c.title.trim());
        break;
      case "round_started": {
        if (!f) break;
        const a = q(r, f);
        o.includes(f) || o.push(f), a.kind = c.kind || a.kind, a.topic = ((_f = c.topic) == null ? void 0 : _f.trim()) || ((_g = c.body) == null ? void 0 : _g.trim()) || a.topic, a.anchorText = ((_h = c.body) == null ? void 0 : _h.trim()) || a.anchorText, a.anchorKind = a.kind === "w6_form" ? "form" : a.kind === "discuss" ? "discuss" : "user", a.sealed = false, b(f);
        break;
      }
      case "form_submitted": {
        if (!f) break;
        const a = q(r, f);
        o.includes(f) || o.push(f), a.anchorText = ((_i = c.body) == null ? void 0 : _i.trim()) || a.anchorText, a.anchorKind = "form";
        break;
      }
      case "w6_status": {
        if (!f) break;
        const a = q(r, f);
        a.w6 || (a.w6 = _e()), a.w6.status = c.status || a.w6.status;
        break;
      }
      case "w6_log": {
        if (!f) break;
        const a = q(r, f);
        a.w6 || (a.w6 = _e());
        const g = ((_j = c.body) == null ? void 0 : _j.trim()) || "";
        g && (a.w6.logs.push({ logType: c.log_type || "log", body: g, progress: c.progress }), a.w6.lastLine = g.slice(0, 120)), c.progress != null && (a.w6.progress = c.progress);
        break;
      }
      case "assistant_delta": {
        if (!f) break;
        const a = q(r, f);
        a.assistantText = (a.assistantText || "") + (c.delta || "");
        break;
      }
      case "report_ready": {
        if (!f) break;
        const a = q(r, f);
        a.reportHtmlId = c.html_id || a.reportHtmlId, a.reportTitle = c.title || a.reportTitle;
        const g = c.title || "\u62A5\u544A", R = (_k = c.html_id) == null ? void 0 : _k.trim(), _ = (_l = c.md_id) == null ? void 0 : _l.trim();
        R && je(p, f, "html", { id: R, resourceId: R, title: g }), _ && _ !== R && je(p, f, "markdown", { id: _, resourceId: _, title: `${g} (MD)` });
        break;
      }
      case "follow_ups": {
        if (!f) break;
        const a = q(r, f);
        ((_m = c.questions) == null ? void 0 : _m.length) && (a.guidedTopics = Xt({ questions: c.questions, reportTitle: a.reportTitle }));
        break;
      }
      case "round_sealed": {
        if (!f) break;
        const a = q(r, f);
        a.sealed = true, a.w6 && a.w6.status === "running" && (a.w6.status = "done");
        break;
      }
    }
  }
  const y = o.map((c) => r.get(c)).filter(Boolean);
  return { entries: d, rounds: y, activeRoundId: t, sessionTitle: u, reports: p, nextSeq: s };
}
function Zt(e) {
  return e.rounds.filter((t) => {
    var _a;
    return ((_a = t.w6) == null ? void 0 : _a.status) === "running" && !t.sealed;
  }).length;
}
const Re = () => ({ entries: [], rounds: [], activeRoundId: null, sessionTitle: "", reports: [], nextSeq: 1 });
function Te(e, t) {
  const s = /* @__PURE__ */ new Map();
  for (const o of e) s.set(o.seq, o);
  for (const o of t) s.set(o.seq, o);
  return [...s.values()].sort((o, r) => o.seq - r.seq);
}
const j = lt((e, t) => ({ sessionId: null, events: [], projected: Re(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null, setSessionId: (s) => e({ sessionId: s }), reset: () => e({ sessionId: null, events: [], projected: Re(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null }), setEvents: (s, o = null, r = 1) => {
  e({ events: s, projected: X(s, o, r) });
}, applyEvent: (s) => {
  const { events: o, projected: r, sessionId: l } = t();
  if (o.some((b) => b.seq === s.seq)) return;
  const d = r.nextSeq;
  if (d > 1 && s.seq > d) {
    l && t().loadTimeline(l, { silent: true });
    return;
  }
  const u = [...o, s].sort((b, h) => b.seq - h.seq), p = s.type === "round_started" ? s.round_id ?? r.activeRoundId : s.type === "round_sealed" && s.round_id === r.activeRoundId ? null : r.activeRoundId;
  e({ events: u, projected: X(u, p, Math.max(r.nextSeq, s.seq + 1)) });
}, loadTimeline: async (s, o) => {
  const r = (o == null ? void 0 : o.silent) === true;
  e((l) => ({ loading: r ? l.loading : true, error: null, sessionId: s }));
  try {
    const l = await ye(s), d = Array.isArray(l.events) ? l.events : [];
    e((u) => ({ events: d, projected: X(d, l.active_round_id, l.next_seq), hasMore: l.has_more === true, oldestSeq: l.oldest_seq ?? 0, loading: r ? u.loading : false }));
  } catch (l) {
    e((d) => ({ loading: r ? d.loading : false, error: l instanceof Error ? l.message : "\u52A0\u8F7D\u5931\u8D25" }));
  }
}, loadEarlierTimeline: async (s) => {
  const { oldestSeq: o, loadingEarlier: r, hasMore: l } = t();
  if (!(!l || r || o <= 0)) {
    e({ loadingEarlier: true, error: null });
    try {
      const d = await ye(s, { beforeSeq: o }), u = Array.isArray(d.events) ? d.events : [];
      e((p) => ({ events: Te(p.events, u), projected: X(Te(p.events, u), d.active_round_id, d.next_seq), hasMore: d.has_more === true, oldestSeq: d.oldest_seq ?? p.oldestSeq, loadingEarlier: false }));
    } catch (d) {
      e({ loadingEarlier: false, error: d instanceof Error ? d.message : "\u52A0\u8F7D\u5931\u8D25" });
    }
  }
} })), es = 300;
function ts(e) {
  const t = j((h) => h.loadTimeline), s = j((h) => h.applyEvent), o = j((h) => h.reset), r = j((h) => h.projected), l = j((h) => h.sessionId), d = j((h) => h.loading), u = j((h) => h.error), p = m.useRef(null), b = m.useCallback(() => {
    const { projected: h } = j.getState();
    return h.nextSeq > 1 ? h.nextSeq - 1 : 0;
  }, []);
  return m.useLayoutEffect(() => {
    if (!e) {
      o();
      return;
    }
    o();
  }, [e, o]), m.useEffect(() => {
    if (e) return t(e), () => {
      var _a;
      (_a = p.current) == null ? void 0 : _a.call(p), p.current = null;
    };
  }, [e, t]), m.useEffect(() => {
    var _a;
    if (!(!e || d || l !== e)) return (_a = p.current) == null ? void 0 : _a.call(p), p.current = Qt(e, b, s), () => {
      var _a2;
      (_a2 = p.current) == null ? void 0 : _a2.call(p), p.current = null;
    };
  }, [e, d, l, s, b]), m.useEffect(() => {
    if (!e) return;
    let h = null;
    const w = () => {
      document.visibilityState === "visible" && j.getState().sessionId === e && t(e, { silent: true });
    }, y = () => {
      h !== null && clearTimeout(h), h = setTimeout(w, es);
    };
    return document.addEventListener("visibilitychange", y), window.addEventListener("focus", y), () => {
      h !== null && clearTimeout(h), document.removeEventListener("visibilitychange", y), window.removeEventListener("focus", y);
    };
  }, [e, t]), { projected: r, loading: d, error: u, loadedSessionId: l };
}
function ss({ sessions: e, activeId: t, onSelect: s, onRename: o, onDelete: r }) {
  const l = [...e].sort((d, u) => new Date(u.created_at).getTime() - new Date(d.created_at).getTime());
  return n.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: l.length === 0 ? n.jsx("div", { className: "px-3 py-6 text-center text-xs text-slate-500", children: "\u6682\u65E0\u4F1A\u8BDD" }) : l.map((d) => n.jsx(rs, { session: d, isActive: t === d.id, onClick: () => s(d.id), onRename: () => o(d.id), onDelete: () => r(d.id) }, d.id)) });
}
function rs({ session: e, isActive: t, onClick: s, onRename: o, onDelete: r }) {
  return n.jsxs("div", { onClick: s, className: U("group flex cursor-pointer items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-2", t ? "border-blue-600 bg-blue-50/90 dark:border-blue-500 dark:bg-blue-950/35" : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-slate-800/60"), children: [n.jsx(pt, { size: 13, className: "shrink-0" }), n.jsx("span", { className: "flex-1 truncate text-[13px]", children: e.title }), n.jsxs("div", { className: "relative opacity-0 group-hover:opacity-100", children: [n.jsx("button", { type: "button", className: "p-1", onClick: (l) => {
    l.stopPropagation(), o();
  }, children: n.jsx(ht, { size: 12 }) }), n.jsx("button", { type: "button", className: "p-1", onClick: (l) => {
    l.stopPropagation(), r();
  }, children: n.jsx(bt, { size: 12 }) }), n.jsx(xt, { size: 12, className: "hidden" })] })] });
}
function ns({ content: e }) {
  return n.jsx("pre", { className: "whitespace-pre-wrap font-sans text-inherit", children: e });
}
function os({ content: e }) {
  return e ? n.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600", children: n.jsx(gt, { content: e }) }) : null;
}
function is({ label: e }) {
  return n.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600 dark:bg-slate-900", role: "status", "aria-live": "polite", children: n.jsx("span", { className: "italic text-slate-500 dark:text-slate-400", children: e }) });
}
const as = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" };
function ls(e, t) {
  return (t == null ? void 0 : t.trim()) ? t.trim() : e === "connecting" ? "\u6B63\u5728\u8FDE\u63A5 W6 \u8F93\u51FA\u6D41\u2026" : e === "open" ? "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85 W6 \u8F93\u51FA\u2026" : e === "error" ? "\u8FDE\u63A5\u5F02\u5E38\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026" : "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026";
}
function ds({ status: e, progress: t, lastLine: s, finalizing: o = false, connection: r, events: l = [], onClick: d, onStop: u, stopping: p = false }) {
  const b = o ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u6536\u5C3E\u4E2D\u2026" : e === "running" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u8FD0\u884C\u4E2D" : e === "error" ? "W6 \u5B50 Agent \xB7 \u51FA\u9519" : e === "done" ? "W6 \u5B50 Agent \xB7 \u5DF2\u5B8C\u6210" : "W6 \u5B50 Agent \xB7 \u5F85\u547D", h = o ? "border-amber-300/60 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/30" : e === "running" ? "border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30" : e === "error" ? "border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30" : e === "done" ? "border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30", w = e === "running" && !!u, y = e === "running" || o, c = y ? At(l, 8) : qt(l, 4), f = m.useRef(null), a = o && !s.trim() ? "\u62A5\u544A\u8349\u7A3F\u5C31\u7EEA\uFF0C\u7B49\u5F85\u6536\u5C3E\u2026" : s, g = c.length > 0 ? c : y ? [ls(o ? "closed" : r, a)] : [];
  m.useEffect(() => {
    !y || !f.current || (f.current.scrollTop = f.current.scrollHeight);
  }, [g, y]);
  const R = (e === "running" || o) && t > 0;
  return n.jsxs("div", { className: `relative max-w-[85%] rounded-lg border ${h}`, children: [w ? n.jsx("button", { type: "button", onClick: (_) => {
    _.stopPropagation(), u == null ? void 0 : u();
  }, disabled: p, title: "\u505C\u6B62 W6 \u8C03\u7814", "aria-label": "\u505C\u6B62 W6 \u8C03\u7814", className: "absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400", children: n.jsx(kt, { size: 14 }) }) : null, n.jsxs("button", { type: "button", onClick: d, className: `flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${w ? "pr-9" : ""}`, children: [n.jsxs("div", { className: "flex w-full flex-wrap items-center gap-x-2 gap-y-1", children: [n.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${o ? "animate-pulse bg-amber-500" : e === "running" ? "animate-pulse bg-blue-500" : e === "error" ? "bg-red-500" : e === "done" ? "bg-emerald-500" : "bg-slate-400"}` }), n.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: b }), R ? n.jsxs("span", { className: `text-[10px] ${o ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"}`, children: [t, "%"] }) : null, r && e === "running" ? n.jsx("span", { className: "text-[10px] text-slate-500", children: as[r] ?? r }) : null, n.jsx("span", { className: "ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80", children: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u8F93\u51FA" })] }), g.length > 0 ? n.jsx("div", { ref: f, className: `w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${y ? "min-h-[4.5rem] max-h-32 overflow-y-auto" : ""}`, children: g.map((_, W) => {
    const $ = y && W === g.length - 1, ee = y && c.length === 0;
    return n.jsxs("p", { className: `text-[11px] leading-relaxed ${$ ? "text-slate-700 dark:text-slate-200" : "truncate text-slate-500 dark:text-slate-500"} ${ee && $ ? "animate-pulse" : ""}`, title: _, children: [_, $ && y && c.length > 0 ? n.jsx("span", { className: `ml-0.5 inline-block h-3 w-0.5 animate-pulse align-middle ${o ? "bg-amber-500" : "bg-blue-500"}` }) : null] }, `${W}-${_.slice(0, 24)}`);
  }) }) : a ? n.jsx("p", { className: "w-full truncate text-[11px] text-slate-500", children: a }) : null] })] });
}
function cs(e) {
  var _a;
  return e.sealed || e.w6 || e.kind !== "deepseek" && e.kind !== "discuss" ? false : !((_a = e.assistantText) == null ? void 0 : _a.trim());
}
function us(e) {
  return cs(e) ? e.kind === "deepseek" ? "\u601D\u8003\u4E2D\u2026" : e.kind === "discuss" ? qe(e.anchorText) ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u5206\u6790\u62A5\u544A\u4E2D\u2026" : null : null;
}
function fs(e) {
  return e.map((t, s) => ({ type: t.logType === "token" ? "token" : "log", message: t.body, token: t.logType === "token" ? t.body : void 0, progress: t.progress, timestamp: s }));
}
function ms(e, t) {
  return e === "error" ? "error" : e === "stopped" || t ? "done" : e === "running" ? "running" : e === "idle" ? "idle" : e === "done" ? "done" : "idle";
}
function ps({ round: e, isActive: t, onStop: s, onSelectTopic: o, chipsDisabled: r = false }) {
  var _a;
  const [l, d] = m.useState(false), u = e.w6, p = ms(u == null ? void 0 : u.status, e.sealed), b = p === "idle" && !e.sealed && !!u, h = u ? fs(u.logs) : [], w = b ? "running" : p === "idle" ? "idle" : p, y = t && (p === "running" || b) ? "open" : "closed", c = us(e);
  return n.jsxs("div", { className: "space-y-3", children: [e.anchorKind === "form" ? n.jsx(Ee, { title: e.topic || "\u6280\u80FD\u4EFB\u52A1", status: "submitted", submittedSummary: e.anchorText }) : e.anchorText ? n.jsx("div", { className: "flex justify-end", children: n.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-3 py-2 text-xs text-white dark:bg-slate-100 dark:text-slate-900", children: n.jsx(ns, { content: e.anchorText }) }) }) : null, u ? n.jsxs(n.Fragment, { children: [n.jsx(ds, { status: p, finalizing: b, connection: t && p === "running" ? "open" : "closed", progress: u.progress, lastLine: u.lastLine, events: h, onClick: () => d(true), onStop: p === "running" ? s : void 0 }), n.jsx(Pt, { open: l, onClose: () => d(false), events: h, status: w, connection: y })] }) : null, e.assistantText ? n.jsx(os, { content: e.assistantText }) : c ? n.jsx(is, { label: c }) : null, e.sealed && ((_a = e.guidedTopics) == null ? void 0 : _a.length) ? n.jsx(Lt, { topics: e.guidedTopics.map((f) => ({ text: f, mode: "w6" })), status: "active", onSelect: (f) => o == null ? void 0 : o(f.text), disabled: r }) : null] });
}
function hs(e) {
  try {
    return JSON.parse(e).fields || [];
  } catch {
    return [];
  }
}
function bs({ draft: e, disabled: t, onSubmit: s, onCancel: o }) {
  const r = hs(e.formSchema);
  return r.length === 0 ? n.jsx("p", { className: "text-xs text-slate-500", children: "\u6280\u80FD\u8868\u5355\u914D\u7F6E\u65E0\u6548\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002" }) : n.jsxs("div", { className: "relative", children: [n.jsx("button", { type: "button", disabled: t, onClick: o, "aria-label": "\u53D6\u6D88\u6280\u80FD\u8868\u5355", className: "absolute right-2 top-2 z-10 rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-200", children: n.jsx(Ce, { size: 14 }) }), n.jsx(Ee, { title: e.skillName || "\u6280\u80FD\u4EFB\u52A1", status: "pending", children: n.jsx($t, { fields: r, onSubmit: s, disabled: t }) })] });
}
function xs() {
  return n.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-white/75 backdrop-blur-[2px] dark:bg-[#212121]/80", role: "status", "aria-live": "polite", "aria-busy": "true", "aria-label": "\u6B63\u5728\u52A0\u8F7D\u4F1A\u8BDD", children: n.jsx("div", { className: "flex flex-col items-center gap-3", children: n.jsx(yt, { size: 32, strokeWidth: 2, className: "animate-spin text-slate-500 dark:text-slate-400" }) }) });
}
function gs({ disabled: e, busy: t = false, isStreaming: s = false, onSend: o, onStop: r, placeholder: l = "\u8F93\u5165\u6D88\u606F\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" }) {
  const [d, u] = m.useState(""), p = () => {
    const b = d.trim();
    !b || e || t || s || (o(b), u(""));
  };
  return n.jsx("div", { className: "border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950", children: n.jsxs("div", { className: "flex gap-2", children: [n.jsx("textarea", { value: d, onChange: (b) => u(b.target.value), onKeyDown: (b) => {
    if (b.key === "Enter" && !b.shiftKey) {
      if (b.preventDefault(), s) {
        r == null ? void 0 : r();
        return;
      }
      p();
    }
  }, rows: 2, disabled: e && !s, placeholder: l, className: U("min-h-[44px] flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm", "dark:border-slate-700 dark:bg-slate-900") }), s ? n.jsx("button", { type: "button", onClick: r, className: "rounded-lg border border-red-200 bg-red-50 px-4 text-sm text-red-600 hover:bg-red-100 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-400", children: "\u505C\u6B62" }) : n.jsx("button", { type: "button", disabled: e || t || !d.trim(), onClick: p, className: "rounded-lg bg-slate-900 px-4 text-sm text-white disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900", children: "\u53D1\u9001" })] }) });
}
function ks(e) {
  if (!e) return [];
  try {
    return JSON.parse(e.form_schema).fields || [];
  } catch {
    return [];
  }
}
const ys = 15e3;
function vs(e) {
  const t = (e || "").toLowerCase();
  return t === "document" || t.includes("markdown") || t === "md" ? "markdown" : "html";
}
function ws(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const o of e) {
    const r = Ae(o.url || o.id);
    !r || s.has(r) || (s.add(r), t.push({ id: r, url: o.url || Me(r), resourceId: r, title: o.name || o.title || "\u62A5\u544A", timestamp: Date.now(), kind: vs(o.type) }));
  }
  return t;
}
function Ss(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const [o, r] of e.entries()) {
    const l = Ae(r.resourceId);
    !l || s.has(l) || (s.add(l), t.push({ id: l, url: Me(l), resourceId: l, title: r.title || "\u62A5\u544A", timestamp: o * 1e3, kind: r.kind, roundId: r.roundId }));
  }
  return t;
}
function Ie(e, t, s) {
  if (e.roundId) {
    const u = t.find((p) => p.roundId === e.roundId && p.kind === s);
    if (u) return u;
  }
  const o = e.timestamp ?? 0;
  let r, l = Number.POSITIVE_INFINITY;
  for (const u of t) {
    if (u.kind !== s) continue;
    const p = Math.abs((u.timestamp ?? 0) - o);
    p < l && (l = p, r = u);
  }
  if (r && l <= ys) return r;
  const d = t.findIndex((u) => u.id === e.id);
  if (d >= 0) for (let u = 1; u <= 2; u++) {
    const p = t[d - u], b = t[d + u];
    if ((p == null ? void 0 : p.kind) === s) return p;
    if ((b == null ? void 0 : b.kind) === s) return b;
  }
}
function js(e, t) {
  var _a, _b, _c, _d;
  if (!e) return {};
  const s = ((_a = e.resourceId) == null ? void 0 : _a.trim()) || ((_b = e.id) == null ? void 0 : _b.trim());
  if (!s) return {};
  const o = t.find((l) => l.id === e.id) ?? { ...e };
  if (o.kind === "markdown") {
    const l = Ie(o, t, "html");
    return { mdResourceId: s, htmlResourceId: (_c = l == null ? void 0 : l.resourceId) == null ? void 0 : _c.trim() };
  }
  const r = Ie(o, t, "markdown");
  return { htmlResourceId: s, mdResourceId: (_d = r == null ? void 0 : r.resourceId) == null ? void 0 : _d.trim() };
}
function _s(e) {
  var _a, _b;
  const t = e.activeRoundId;
  if (!t) return { kind: null, roundId: null };
  const s = e.rounds.find((o) => o.id === t);
  return !s || s.sealed ? { kind: null, roundId: null } : ((_a = s.w6) == null ? void 0 : _a.status) === "running" || Zt(e) > 0 ? { kind: "w6", roundId: ((_b = e.rounds.find((r) => {
    var _a2;
    return ((_a2 = r.w6) == null ? void 0 : _a2.status) === "running" && !r.sealed;
  })) == null ? void 0 : _b.id) ?? t } : s.kind === "discuss" ? { kind: "discuss", roundId: t } : s.kind === "deepseek" ? { kind: "deepseek", roundId: t } : { kind: null, roundId: null };
}
function Es() {
  const e = vt(), { sessionId: t } = wt(), { user: s } = St(), o = s == null ? void 0 : s.id, { sessions: r, fetchSessions: l, createSession: d, updateSession: u, deleteSession: p, fetchIntelligenceSkills: b, intelligenceSkills: h, executeIntelligenceSkill: w } = be(), { prompt: y, confirm: c } = jt(), { addToast: f } = _t(), a = Rt(), g = (a == null ? void 0 : a.leftCollapsed) ?? false, R = a == null ? void 0 : a.setRightCollapsed, [_, W] = m.useState(false), [$, ee] = m.useState(() => xe(o)), [De, Oe] = m.useState([]), [Fe, Ke] = m.useState(null), [ce, te] = m.useState([]), [B, se] = m.useState(null), [re, ne] = m.useState(null), [P, E] = m.useState(false), I = m.useRef(null), ue = m.useRef(null), { projected: S, loading: fe, error: me, loadedSessionId: Ue } = ts(t), We = j((i) => i.hasMore), pe = j((i) => i.loadingEarlier), Be = j((i) => i.loadEarlierTimeline), G = j((i) => i.loadTimeline), M = !!(t && Ue === t && !fe), z = m.useMemo(() => _s(S), [S]), C = z.kind != null, oe = !M || P || C, J = !!(t && fe), v = m.useMemo(() => {
    const i = Ss(S.reports);
    return i.length > 0 ? i : ce.map((k, x) => ({ ...k, timestamp: x * 1e3 }));
  }, [ce, S.reports]);
  m.useEffect(() => {
    b(), Tt.listGroups().then(Oe).catch(() => {
    }), l().finally(() => W(true));
  }, [b, l]), m.useEffect(() => {
    ee(xe(o));
  }, [o]), m.useEffect(() => {
    if (!t) {
      te([]);
      return;
    }
    Vt(t).then((i) => {
      te(ws(i));
    });
  }, [t]), m.useEffect(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null, E(false), ne(Kt(t));
  }, [t]), m.useEffect(() => () => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null;
  }, []);
  const N = m.useMemo(() => Mt({ sessionTitle: S.sessionTitle, rounds: S.rounds }), [S.sessionTitle, S.rounds]);
  m.useEffect(() => {
    if (!M || !t) return;
    const i = r.find((k) => k.id === t);
    i && Q(i.title) && N.trim() && !Q(N) && N !== i.title && u(t, N.trim());
  }, [M, t, N, r, u]), m.useEffect(() => {
    v.length !== 0 && (se((i) => i && v.some((k) => k.id === i) ? i : v[v.length - 1].id), R == null ? void 0 : R(false));
  }, [v, R]);
  const ie = m.useMemo(() => t ? r.find((i) => i.id === t) : void 0, [r, t]), Ge = m.useMemo(() => {
    var _a, _b;
    if (!M) return (ie == null ? void 0 : ie.title) || "\u65B0\u4F1A\u8BDD";
    if (!Q(N)) return N;
    const i = S.rounds[S.rounds.length - 1], x = (_b = (_a = S.activeRoundId ? S.rounds.find((L) => L.id === S.activeRoundId) : i) == null ? void 0 : _a.topic) == null ? void 0 : _b.trim();
    return x && !Q(x) ? x : (ie == null ? void 0 : ie.title) || N || "\u65B0\u4F1A\u8BDD";
  }, [M, N, S.rounds, S.activeRoundId, ie == null ? void 0 : ie.title]), ze = v.length > 0, ae = m.useCallback(async () => {
    j.getState().reset();
    const i = await d("\u65B0\u4F1A\u8BDD");
    e(F(`/sessions/${i.id}`));
  }, [d, e]), Je = m.useCallback(async (i) => {
    var _a, _b;
    const x = ((_b = (_a = r.find((le) => le.id === i)) == null ? void 0 : _a.title) == null ? void 0 : _b.trim()) || "\u672A\u547D\u540D\u4F1A\u8BDD";
    if (!await c({ title: "\u5220\u9664\u4F1A\u8BDD", message: `\u786E\u5B9A\u5220\u9664\u4F1A\u8BDD\u300C${x}\u300D\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002`, variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) || (await p(i), i !== t)) return;
    j.getState().reset();
    const D = be.getState().sessions;
    if (D.length > 0) {
      e(F(`/sessions/${D[0].id}`));
      return;
    }
    const A = await d("\u65B0\u4F1A\u8BDD");
    e(F(`/sessions/${A.id}`), { replace: true });
  }, [r, c, p, t, e, d]);
  m.useEffect(() => {
    _ && !t && r.length > 0 ? e(F(`/sessions/${r[0].id}`), { replace: true }) : _ && !t && r.length === 0 && ae();
  }, [_, t, r, e, ae]);
  const H = m.useCallback(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort();
    const i = new AbortController();
    return I.current = i, E(true), i;
  }, []), V = m.useCallback(() => {
    I.current = null, E(false);
  }, []), He = m.useCallback(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null, E(false), t && z.roundId && ve(t, z.roundId);
  }, [z, t]), Y = m.useCallback(async (i) => {
    if (!t) return;
    const k = H();
    try {
      const x = i.replace(/^@w6\s*/i, "").trim();
      await K(t, { kind: "w6_manual", message: x || i }, k.signal);
    } catch (x) {
      if (x instanceof Error && x.name === "AbortError") return;
      throw x;
    } finally {
      V();
    }
  }, [t, H, V]), Ve = m.useCallback((i) => {
    if (P || C) {
      f("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    Y(i);
  }, [P, C, Y, f]), Ye = m.useCallback(async (i) => {
    if (!t || C) return;
    if (/^@w6\b/i.test(i)) {
      await Y(i);
      return;
    }
    const k = H();
    try {
      const x = v.length > 0 ? v.find((le) => le.id === B) ?? v[v.length - 1] : void 0, L = js(x, v), D = ke(t, x == null ? void 0 : x.id, re), A = Ft(i, D, L);
      A.kind === "discuss" && A.mode === "edit_html" ? await K(t, { kind: "discuss", message: i, mode: "edit_html", target_resource_id: A.target_resource_id }, k.signal) : A.kind === "discuss" ? await K(t, { kind: "discuss", message: i, ...A.target_resource_id ? { target_resource_id: A.target_resource_id } : {} }, k.signal) : await K(t, { kind: "deepseek", message: i }, k.signal);
    } catch (x) {
      if (x instanceof Error && x.name === "AbortError") return;
      throw x;
    } finally {
      V();
    }
  }, [t, C, Y, v, B, re, H, V]), Qe = m.useCallback(async (i) => {
    if (!t) return;
    if (P || C) {
      f("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    if (ks(i).length === 0) {
      f("error", "\u8BE5\u6280\u80FD\u672A\u914D\u7F6E\u8868\u5355\u5B57\u6BB5");
      return;
    }
    E(true);
    try {
      await zt(t, { skill_id: i.id, skill_key: i.key, skill_name: i.name, form_schema: i.form_schema }), await G(t, { silent: true }), requestAnimationFrame(() => {
        var _a;
        (_a = ue.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      });
    } catch (x) {
      f("error", x instanceof Error ? x.message : "\u65E0\u6CD5\u6253\u5F00\u6280\u80FD\u8868\u5355");
    } finally {
      E(false);
    }
  }, [t, P, C, f, G]), Xe = m.useCallback(async (i, k, x, L) => {
    if (t) {
      E(true);
      try {
        const D = await w(k, L);
        await K(t, { kind: "w6_form", skill_key: x, form_data: L, rendered_prompt: D, report_style: $, draft_id: i });
      } finally {
        E(false);
      }
    }
  }, [t, w, $]), Ze = m.useCallback(async (i) => {
    if (t) try {
      await Jt(t, i), await G(t, { silent: true });
    } catch (k) {
      f("error", k instanceof Error ? k.message : "\u53D6\u6D88\u5931\u8D25");
    }
  }, [t, f, G]), T = v.find((i) => i.id === B) ?? v[v.length - 1], he = ke(t, T == null ? void 0 : T.id, re), et = T ? ge(T, v.findIndex((i) => i.id === T.id), v) : "", tt = o ? `aichat-panels:${o}` : void 0, st = m.useCallback(() => {
    !t || !(T == null ? void 0 : T.id) || (ne(T.id), Ut(t, T.id));
  }, [t, T == null ? void 0 : T.id]), rt = m.useCallback(() => {
    t && (ne(null), Wt(t));
  }, [t]), nt = n.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [n.jsx("div", { className: "border-b border-slate-200 p-3 dark:border-slate-800", children: n.jsxs("button", { type: "button", onClick: () => void ae(), className: "flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900", children: [n.jsx(Ct, { size: 16 }), " \u65B0\u4F1A\u8BDD"] }) }), n.jsx(ss, { sessions: r, activeId: t, onSelect: (i) => e(F(`/sessions/${i}`)), onRename: (i) => {
    const k = r.find((x) => x.id === i);
    y({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: (k == null ? void 0 : k.title) ?? "", placeholder: "\u4F1A\u8BDD\u540D\u79F0" }).then((x) => {
      (x == null ? void 0 : x.trim()) && u(i, x.trim());
    });
  }, onDelete: (i) => void Je(i) })] }), ot = n.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [n.jsx("div", { className: "border-b border-slate-200 px-4 py-3 text-sm font-medium dark:border-slate-800", children: Ge }), n.jsxs("div", { className: "relative flex min-h-0 flex-1 flex-col", children: [J ? n.jsx(xs, {}) : null, n.jsxs("div", { className: `min-h-0 flex-1 space-y-6 overflow-y-auto px-4 py-4 ${J ? "pointer-events-none select-none" : ""}`, children: [me && !J ? n.jsx("p", { className: "text-sm text-red-600", children: me }) : null, We && t ? n.jsx("div", { className: "flex justify-center pb-2", children: n.jsx("button", { type: "button", disabled: pe, onClick: () => void Be(t), className: "rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900", children: pe ? "\u52A0\u8F7D\u4E2D\u2026" : "\u52A0\u8F7D\u66F4\u65E9\u7684\u5BF9\u8BDD" }) }) : null, S.entries.map((i) => i.entryKind === "form_draft" ? n.jsx(bs, { draft: i.draft, disabled: P || C, onSubmit: (k) => void Xe(i.draft.id, i.draft.skillId, i.draft.skillKey, k), onCancel: () => void Ze(i.draft.id) }, i.draft.id) : n.jsx(ps, { round: i.round, isActive: i.round.id === S.activeRoundId, onStop: t ? () => void ve(t, i.round.id) : void 0, onSelectTopic: Ve, chipsDisabled: oe }, i.round.id)), n.jsx("div", { ref: ue })] }), n.jsx("div", { className: `shrink-0 border-t border-zinc-200/70 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#212121] ${J ? "pointer-events-none" : ""}`, children: n.jsxs("div", { className: "mx-auto max-w-3xl space-y-2", children: [n.jsx(Dt, { skillGroups: De, activeGroupId: Fe, onActiveGroupChange: Ke, intelligenceSkills: h, onSkillClick: Qe, disabled: oe }), v.length > 0 && T ? n.jsx(Bt, { title: et, previewKind: T.kind === "markdown" ? "markdown" : "html", enabled: he, disabled: oe, onDismiss: st, onEnable: rt }) : null, n.jsx(gs, { disabled: !t || !M, busy: P, isStreaming: C, onStop: He, onSend: (i) => void Ye(i), placeholder: v.length > 0 ? he ? "\u9488\u5BF9\u4E0A\u65B9\u9884\u89C8\u5185\u5BB9\u8FFD\u95EE\uFF1B\u6539\u7248\u5F0F\u8BF7\u8BF4\u660E\u5177\u4F53\u8C03\u6574\uFF1B@w6 \u4E3A\u6DF1\u5EA6\u8C03\u7814" : "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" : "\u8F93\u5165\u8FFD\u95EE\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" })] }) })] })] }), it = v.map((i, k) => ({ ...i, title: ge(i, k, v) })), at = n.jsx(Ot, { reports: it, activeReportId: (T == null ? void 0 : T.id) ?? null, onActiveChange: se, onReportClose: (i) => {
    te((k) => k.filter((x) => x.id !== i)), B === i && se(null);
  } });
  return n.jsx(It, { className: "h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", innerClassName: "h-full min-h-0 border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", leftPanelId: "aichat-left", mainPanelId: "aichat-main", rightPanelId: "aichat-right", left: nt, main: ot, right: at, leftMinPx: 200, leftMaxPx: 400, leftDefaultPx: 240, rightMinPx: 320, rightMaxPx: 1200, rightDefaultPct: 50, leftSidebarVisible: !g, rightSidebarVisible: ze, storageKey: tt, resizeHandleWithGrip: true });
}
export {
  Es as default
};
