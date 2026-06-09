import { j as o, c as at } from "./three-BECTMk9d.js";
import { a as m } from "./monaco-BSfMmt4N.js";
import { a0 as lt, O as K, a1 as dt, a2 as ct, a3 as Ie, w as Ce, a4 as ut, a5 as ft, M as mt, o as pt, T as ht, E as bt, a6 as xt, K as gt, u as kt, p as yt, Q as vt, R as he, U as wt, G as St, V as jt, W as _t, Y as Rt, P as Tt } from "./main-BCk3siLD.js";
import { q as It, J as Ct, x as Nt, y as Et, S as Ne, F as At, G as qt, D as Pt, e as Ee, z as be, K as Mt, c as Y, L as xe, I as $t, C as Lt } from "./reportStyle-DinFtS7l.js";
import "./charts-Cx7lSOSv.js";
function Ae(e) {
  const t = e.trim();
  return t ? /(?:改版式|报告排版|视觉风格|章节结构)|(?:改成|改为|换成)|(?:调整|优化|修改).{0,12}(?:排版|布局|样式|风格|配色|颜色|字体|章节|字号|边距|间距|对齐)|(?:背景色?|配色方案)|(?:字体|字号|边距|间距|对齐|居中|加粗).{0,6}(?:调整|修改|改|换|大|小)|(?:缩小|放大).{0,6}(?:字体|标题|字号)/.test(t) : false;
}
function Dt(e, t, s) {
  var _a, _b;
  if (!t) return { kind: "deepseek" };
  const n = (_a = s == null ? void 0 : s.htmlResourceId) == null ? void 0 : _a.trim(), r = (_b = s == null ? void 0 : s.mdResourceId) == null ? void 0 : _b.trim();
  return n && Ae(e) ? { kind: "discuss", mode: "edit_html", target_resource_id: n } : r ? { kind: "discuss", target_resource_id: r } : { kind: "discuss" };
}
const qe = "aichat:report-context-dismiss";
function le() {
  try {
    const e = sessionStorage.getItem(qe);
    if (!e) return {};
    const t = JSON.parse(e);
    return !t || typeof t != "object" ? {} : t;
  } catch {
    return {};
  }
}
function Pe(e) {
  try {
    sessionStorage.setItem(qe, JSON.stringify(e));
  } catch {
  }
}
function Ot(e) {
  var _a;
  return e && ((_a = le()[e]) == null ? void 0 : _a.trim()) || null;
}
function Ft(e, t) {
  const s = le();
  s[e] = t, Pe(s);
}
function Kt(e) {
  const t = le();
  delete t[e], Pe(t);
}
function ge(e, t, s) {
  return !e || !t ? false : s !== t;
}
function Ut({ title: e, previewKind: t, enabled: s, disabled: n, onDismiss: r, onEnable: l }) {
  const d = t === "markdown" ? "Markdown" : "HTML \u9884\u89C8", u = t === "markdown" ? dt : ct;
  return s ? o.jsxs("div", { className: K("flex items-start gap-2 rounded-lg border border-sky-200/80 bg-sky-50/60 px-3 py-2", "dark:border-sky-500/25 dark:bg-sky-950/30"), children: [o.jsx(u, { size: 14, className: "mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" }), o.jsxs("div", { className: "min-w-0 flex-1", children: [o.jsx("p", { className: "text-xs font-medium text-sky-900 dark:text-sky-100", children: "\u57FA\u4E8E\u5F53\u524D\u9884\u89C8\u8FFD\u95EE" }), o.jsxs("p", { className: "truncate text-xs text-sky-800/80 dark:text-sky-200/80", children: [e, o.jsxs("span", { className: "text-sky-600/70 dark:text-sky-400/70", children: [" \xB7 ", d] })] })] }), o.jsx("button", { type: "button", disabled: n, onClick: r, "aria-label": "\u5173\u95ED\u62A5\u544A\u4E0A\u4E0B\u6587", className: K("shrink-0 rounded p-1 text-sky-700/70 hover:bg-sky-100/80 hover:text-sky-900", "disabled:opacity-40 dark:text-sky-300/70 dark:hover:bg-sky-900/50 dark:hover:text-sky-100"), children: o.jsx(Ie, { size: 14 }) })] }) : o.jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900/50", children: [o.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF0C\u4E0D\u9644\u5E26\u62A5\u544A\u4E0A\u4E0B\u6587" }), o.jsxs("button", { type: "button", disabled: n, onClick: l, className: K("inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 font-medium text-slate-700", "hover:bg-white disabled:opacity-40 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"), children: [o.jsx(lt, { size: 12 }), "\u7ED1\u5B9A\u300C", e, "\u300D"] })] });
}
const Wt = "/aichat";
function O(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${Wt}${t}`;
}
function Me(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${ft.baseUrl}${t}`;
}
async function D(e, t) {
  const s = Ce(), n = { "Content-Type": "application/json", ...t == null ? void 0 : t.headers };
  s && (n.Authorization = `Bearer ${s}`);
  const r = await fetch(Me(e), { ...t, headers: n });
  if (r.status === 401) throw ut(401), new Error("Unauthorized");
  if (!r.ok) {
    const l = await r.json().catch(() => ({}));
    throw new Error(l.detail || r.statusText);
  }
  return r.json();
}
function ke(e, t = {}) {
  const s = new URLSearchParams(), n = t.sinceSeq ?? 0;
  n > 0 ? s.set("sinceSeq", String(n)) : (s.set("limit_rounds", String(t.limitRounds ?? 10)), t.beforeSeq && t.beforeSeq > 0 && s.set("before_seq", String(t.beforeSeq)));
  const r = s.toString() ? `?${s.toString()}` : "";
  return D(`/aichat/sessions/${encodeURIComponent(e)}/timeline${r}`);
}
function Bt(e, t) {
  return D(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts`, { method: "POST", body: JSON.stringify(t) });
}
function Gt(e, t) {
  return D(`/aichat/sessions/${encodeURIComponent(e)}/form-drafts/${encodeURIComponent(t)}/cancel`, { method: "POST", body: "{}" });
}
function F(e, t, s) {
  return D(`/aichat/sessions/${encodeURIComponent(e)}/rounds`, { method: "POST", body: JSON.stringify(t), signal: s });
}
function ye(e, t) {
  return D(`/aichat/sessions/${encodeURIComponent(e)}/rounds/${encodeURIComponent(t)}/stop`, { method: "POST", body: "{}" });
}
function zt(e, t) {
  const s = new URLSearchParams({ fromSeq: String(t) }), n = Ce();
  return n && s.set("token", n), `${Me(`/aichat/sessions/${encodeURIComponent(e)}/stream`)}?${s.toString()}`;
}
function Jt(e) {
  return D(`/aichat/sessions/${encodeURIComponent(e)}/reports`);
}
function $e(e) {
  return It(e);
}
const ve = 1e3, Ht = 3e4;
function Vt(e, t, s, n) {
  let r = false, l = null, d = null, u = ve;
  const p = () => {
    d !== null && (clearTimeout(d), d = null);
  }, b = () => {
    if (r) return;
    p(), l == null ? void 0 : l.close(), l = null;
    const h = zt(e, t()), w = new EventSource(h);
    l = w, w.addEventListener("event_appended", (y) => {
      if (!(r || l !== w)) try {
        const c = JSON.parse(y.data);
        u = ve, s(c);
      } catch {
      }
    }), w.onerror = () => {
      if (r || l !== w) return;
      w.close(), l = null;
      const y = u;
      u = Math.min(u * 2, Ht), d = setTimeout(() => {
        d = null, b();
      }, y);
    };
  };
  return b(), () => {
    r = true, p(), l == null ? void 0 : l.close(), l = null;
  };
}
function X(e) {
  var _a, _b, _c;
  const t = (_a = e.draft_id) == null ? void 0 : _a.trim();
  return t || ((_c = (_b = e.payload) == null ? void 0 : _b.draft_id) == null ? void 0 : _c.trim()) || "";
}
function we(e) {
  const t = e.payload ?? {};
  return { draft_id: X(e) || t.draft_id, skill_id: t.skill_id, skill_key: t.skill_key, skill_name: t.skill_name || e.topic || e.body, form_schema: t.form_schema, round_id: t.round_id || e.round_id };
}
function Yt(e) {
  return Ct({ followUpQuestions: e.questions, messages: [], skillKey: e.skillKey ?? null, reportTitle: e.reportTitle }).map((s) => s.text);
}
function Se(e, t, s, n) {
  for (let r = e.length - 1; r >= 0; r--) e[r].roundId === t && e[r].kind === s && e.splice(r, 1);
  e.push({ ...n, roundId: t, kind: s });
}
function je() {
  return { status: "running", logs: [], progress: 0, lastLine: "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026" };
}
function q(e, t) {
  let s = e.get(t);
  return s || (s = { id: t, kind: "w6_manual", topic: "", anchorText: "", anchorKind: "user", sealed: false }, e.set(t, s)), s;
}
function Q(e, t = null, s = 1) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
  const n = [], r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = [];
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
        const a = we(c), g = X(c);
        if (!g) break;
        const R = { id: g, skillId: ((_b = a.skill_id) == null ? void 0 : _b.trim()) || "", skillKey: ((_c = a.skill_key) == null ? void 0 : _c.trim()) || "", skillName: ((_d = a.skill_name) == null ? void 0 : _d.trim()) || "\u6280\u80FD\u4EFB\u52A1", formSchema: a.form_schema || "", status: "pending" };
        l.set(g, R), h(R);
        break;
      }
      case "form_cancelled": {
        const a = X(c);
        if (!a) break;
        const g = l.get(a);
        g && (g.status = "cancelled", w(a));
        break;
      }
      case "form_draft_submitted": {
        const a = X(c);
        if (!a) break;
        const g = l.get(a);
        g && (g.status = "submitted", g.submittedRoundId = f || we(c).round_id, w(a));
        break;
      }
      case "session_title":
        ((_e2 = c.title) == null ? void 0 : _e2.trim()) && (u = c.title.trim());
        break;
      case "round_started": {
        if (!f) break;
        const a = q(r, f);
        n.includes(f) || n.push(f), a.kind = c.kind || a.kind, a.topic = ((_f = c.topic) == null ? void 0 : _f.trim()) || ((_g = c.body) == null ? void 0 : _g.trim()) || a.topic, a.anchorText = ((_h = c.body) == null ? void 0 : _h.trim()) || a.anchorText, a.anchorKind = a.kind === "w6_form" ? "form" : a.kind === "discuss" ? "discuss" : "user", a.sealed = false, b(f);
        break;
      }
      case "form_submitted": {
        if (!f) break;
        const a = q(r, f);
        n.includes(f) || n.push(f), a.anchorText = ((_i = c.body) == null ? void 0 : _i.trim()) || a.anchorText, a.anchorKind = "form";
        break;
      }
      case "w6_status": {
        if (!f) break;
        const a = q(r, f);
        a.w6 || (a.w6 = je()), a.w6.status = c.status || a.w6.status;
        break;
      }
      case "w6_log": {
        if (!f) break;
        const a = q(r, f);
        a.w6 || (a.w6 = je());
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
        R && Se(p, f, "html", { id: R, resourceId: R, title: g }), _ && _ !== R && Se(p, f, "markdown", { id: _, resourceId: _, title: `${g} (MD)` });
        break;
      }
      case "follow_ups": {
        if (!f) break;
        const a = q(r, f);
        ((_m = c.questions) == null ? void 0 : _m.length) && (a.guidedTopics = Yt({ questions: c.questions, reportTitle: a.reportTitle }));
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
  const y = n.map((c) => r.get(c)).filter(Boolean);
  return { entries: d, rounds: y, activeRoundId: t, sessionTitle: u, reports: p, nextSeq: s };
}
function Qt(e) {
  return e.rounds.filter((t) => {
    var _a;
    return ((_a = t.w6) == null ? void 0 : _a.status) === "running" && !t.sealed;
  }).length;
}
const _e = () => ({ entries: [], rounds: [], activeRoundId: null, sessionTitle: "", reports: [], nextSeq: 1 });
function Re(e, t) {
  const s = /* @__PURE__ */ new Map();
  for (const n of e) s.set(n.seq, n);
  for (const n of t) s.set(n.seq, n);
  return [...s.values()].sort((n, r) => n.seq - r.seq);
}
const j = at((e, t) => ({ sessionId: null, events: [], projected: _e(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null, setSessionId: (s) => e({ sessionId: s }), reset: () => e({ sessionId: null, events: [], projected: _e(), loading: false, loadingEarlier: false, hasMore: false, oldestSeq: 0, error: null }), setEvents: (s, n = null, r = 1) => {
  e({ events: s, projected: Q(s, n, r) });
}, applyEvent: (s) => {
  const { events: n, projected: r, sessionId: l } = t();
  if (n.some((b) => b.seq === s.seq)) return;
  const d = r.nextSeq;
  if (d > 1 && s.seq > d) {
    l && t().loadTimeline(l, { silent: true });
    return;
  }
  const u = [...n, s].sort((b, h) => b.seq - h.seq), p = s.type === "round_started" ? s.round_id ?? r.activeRoundId : s.type === "round_sealed" && s.round_id === r.activeRoundId ? null : r.activeRoundId;
  e({ events: u, projected: Q(u, p, Math.max(r.nextSeq, s.seq + 1)) });
}, loadTimeline: async (s, n) => {
  const r = (n == null ? void 0 : n.silent) === true;
  e((l) => ({ loading: r ? l.loading : true, error: null, sessionId: s }));
  try {
    const l = await ke(s), d = Array.isArray(l.events) ? l.events : [];
    e((u) => ({ events: d, projected: Q(d, l.active_round_id, l.next_seq), hasMore: l.has_more === true, oldestSeq: l.oldest_seq ?? 0, loading: r ? u.loading : false }));
  } catch (l) {
    e((d) => ({ loading: r ? d.loading : false, error: l instanceof Error ? l.message : "\u52A0\u8F7D\u5931\u8D25" }));
  }
}, loadEarlierTimeline: async (s) => {
  const { oldestSeq: n, loadingEarlier: r, hasMore: l } = t();
  if (!(!l || r || n <= 0)) {
    e({ loadingEarlier: true, error: null });
    try {
      const d = await ke(s, { beforeSeq: n }), u = Array.isArray(d.events) ? d.events : [];
      e((p) => ({ events: Re(p.events, u), projected: Q(Re(p.events, u), d.active_round_id, d.next_seq), hasMore: d.has_more === true, oldestSeq: d.oldest_seq ?? p.oldestSeq, loadingEarlier: false }));
    } catch (d) {
      e({ loadingEarlier: false, error: d instanceof Error ? d.message : "\u52A0\u8F7D\u5931\u8D25" });
    }
  }
} })), Xt = 300;
function Zt(e) {
  const t = j((h) => h.loadTimeline), s = j((h) => h.applyEvent), n = j((h) => h.reset), r = j((h) => h.projected), l = j((h) => h.sessionId), d = j((h) => h.loading), u = j((h) => h.error), p = m.useRef(null), b = m.useCallback(() => {
    const { projected: h } = j.getState();
    return h.nextSeq > 1 ? h.nextSeq - 1 : 0;
  }, []);
  return m.useLayoutEffect(() => {
    if (!e) {
      n();
      return;
    }
    n();
  }, [e, n]), m.useEffect(() => {
    if (e) return t(e), () => {
      var _a;
      (_a = p.current) == null ? void 0 : _a.call(p), p.current = null;
    };
  }, [e, t]), m.useEffect(() => {
    var _a;
    if (!(!e || d || l !== e)) return (_a = p.current) == null ? void 0 : _a.call(p), p.current = Vt(e, b, s), () => {
      var _a2;
      (_a2 = p.current) == null ? void 0 : _a2.call(p), p.current = null;
    };
  }, [e, d, l, s, b]), m.useEffect(() => {
    if (!e) return;
    let h = null;
    const w = () => {
      document.visibilityState === "visible" && j.getState().sessionId === e && t(e, { silent: true });
    }, y = () => {
      h !== null && clearTimeout(h), h = setTimeout(w, Xt);
    };
    return document.addEventListener("visibilitychange", y), window.addEventListener("focus", y), () => {
      h !== null && clearTimeout(h), document.removeEventListener("visibilitychange", y), window.removeEventListener("focus", y);
    };
  }, [e, t]), { projected: r, loading: d, error: u, loadedSessionId: l };
}
function es({ sessions: e, activeId: t, onSelect: s, onRename: n, onDelete: r }) {
  const l = [...e].sort((d, u) => new Date(u.created_at).getTime() - new Date(d.created_at).getTime());
  return o.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: l.length === 0 ? o.jsx("div", { className: "px-3 py-6 text-center text-xs text-slate-500", children: "\u6682\u65E0\u4F1A\u8BDD" }) : l.map((d) => o.jsx(ts, { session: d, isActive: t === d.id, onClick: () => s(d.id), onRename: () => n(d.id), onDelete: () => r(d.id) }, d.id)) });
}
function ts({ session: e, isActive: t, onClick: s, onRename: n, onDelete: r }) {
  return o.jsxs("div", { onClick: s, className: K("group flex cursor-pointer items-center gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-2", t ? "border-blue-600 bg-blue-50/90 dark:border-blue-500 dark:bg-blue-950/35" : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:bg-slate-800/60"), children: [o.jsx(mt, { size: 13, className: "shrink-0" }), o.jsx("span", { className: "flex-1 truncate text-[13px]", children: e.title }), o.jsxs("div", { className: "relative opacity-0 group-hover:opacity-100", children: [o.jsx("button", { type: "button", className: "p-1", onClick: (l) => {
    l.stopPropagation(), n();
  }, children: o.jsx(pt, { size: 12 }) }), o.jsx("button", { type: "button", className: "p-1", onClick: (l) => {
    l.stopPropagation(), r();
  }, children: o.jsx(ht, { size: 12 }) }), o.jsx(bt, { size: 12, className: "hidden" })] })] });
}
function ss({ content: e }) {
  return o.jsx("pre", { className: "whitespace-pre-wrap font-sans text-inherit", children: e });
}
function rs({ content: e }) {
  return e ? o.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600", children: o.jsx(xt, { content: e }) }) : null;
}
function ns({ label: e }) {
  return o.jsx("div", { className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-600 dark:bg-slate-900", role: "status", "aria-live": "polite", children: o.jsx("span", { className: "italic text-slate-500 dark:text-slate-400", children: e }) });
}
const os = { idle: "\u672A\u8FDE\u63A5", connecting: "\u8FDE\u63A5\u4E2D", open: "\u5DF2\u8FDE\u63A5", closed: "\u5DF2\u7ED3\u675F", error: "\u8FDE\u63A5\u5F02\u5E38" };
function is(e, t) {
  return (t == null ? void 0 : t.trim()) ? t.trim() : e === "connecting" ? "\u6B63\u5728\u8FDE\u63A5 W6 \u8F93\u51FA\u6D41\u2026" : e === "open" ? "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85 W6 \u8F93\u51FA\u2026" : e === "error" ? "\u8FDE\u63A5\u5F02\u5E38\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026" : "\u6B63\u5728\u542F\u52A8 W6 \u5B50 Agent\u2026";
}
function as({ status: e, progress: t, lastLine: s, finalizing: n = false, connection: r, events: l = [], onClick: d, onStop: u, stopping: p = false }) {
  const b = n ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u6536\u5C3E\u4E2D\u2026" : e === "running" ? "W6 \u6DF1\u5EA6\u8C03\u7814 \xB7 \u8FD0\u884C\u4E2D" : e === "error" ? "W6 \u5B50 Agent \xB7 \u51FA\u9519" : e === "done" ? "W6 \u5B50 Agent \xB7 \u5DF2\u5B8C\u6210" : "W6 \u5B50 Agent \xB7 \u5F85\u547D", h = n ? "border-amber-300/60 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/30" : e === "running" ? "border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30" : e === "error" ? "border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30" : e === "done" ? "border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20" : "border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30", w = e === "running" && !!u, y = e === "running" || n, c = y ? Nt(l, 8) : Et(l, 4), f = m.useRef(null), a = n && !s.trim() ? "\u62A5\u544A\u8349\u7A3F\u5C31\u7EEA\uFF0C\u7B49\u5F85\u6536\u5C3E\u2026" : s, g = c.length > 0 ? c : y ? [is(n ? "closed" : r, a)] : [];
  m.useEffect(() => {
    !y || !f.current || (f.current.scrollTop = f.current.scrollHeight);
  }, [g, y]);
  const R = (e === "running" || n) && t > 0;
  return o.jsxs("div", { className: `relative max-w-[85%] rounded-lg border ${h}`, children: [w ? o.jsx("button", { type: "button", onClick: (_) => {
    _.stopPropagation(), u == null ? void 0 : u();
  }, disabled: p, title: "\u505C\u6B62 W6 \u8C03\u7814", "aria-label": "\u505C\u6B62 W6 \u8C03\u7814", className: "absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400", children: o.jsx(gt, { size: 14 }) }) : null, o.jsxs("button", { type: "button", onClick: d, className: `flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${w ? "pr-9" : ""}`, children: [o.jsxs("div", { className: "flex w-full flex-wrap items-center gap-x-2 gap-y-1", children: [o.jsx("span", { className: `h-2 w-2 shrink-0 rounded-full ${n ? "animate-pulse bg-amber-500" : e === "running" ? "animate-pulse bg-blue-500" : e === "error" ? "bg-red-500" : e === "done" ? "bg-emerald-500" : "bg-slate-400"}` }), o.jsx("span", { className: "text-xs font-semibold text-slate-800 dark:text-slate-200", children: b }), R ? o.jsxs("span", { className: `text-[10px] ${n ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"}`, children: [t, "%"] }) : null, r && e === "running" ? o.jsx("span", { className: "text-[10px] text-slate-500", children: os[r] ?? r }) : null, o.jsx("span", { className: "ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80", children: "\u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u8F93\u51FA" })] }), g.length > 0 ? o.jsx("div", { ref: f, className: `w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${y ? "min-h-[4.5rem] max-h-32 overflow-y-auto" : ""}`, children: g.map((_, U) => {
    const $ = y && U === g.length - 1, Z = y && c.length === 0;
    return o.jsxs("p", { className: `text-[11px] leading-relaxed ${$ ? "text-slate-700 dark:text-slate-200" : "truncate text-slate-500 dark:text-slate-500"} ${Z && $ ? "animate-pulse" : ""}`, title: _, children: [_, $ && y && c.length > 0 ? o.jsx("span", { className: `ml-0.5 inline-block h-3 w-0.5 animate-pulse align-middle ${n ? "bg-amber-500" : "bg-blue-500"}` }) : null] }, `${U}-${_.slice(0, 24)}`);
  }) }) : a ? o.jsx("p", { className: "w-full truncate text-[11px] text-slate-500", children: a }) : null] })] });
}
function ls(e) {
  var _a;
  return e.sealed || e.w6 || e.kind !== "deepseek" && e.kind !== "discuss" ? false : !((_a = e.assistantText) == null ? void 0 : _a.trim());
}
function ds(e) {
  return ls(e) ? e.kind === "deepseek" ? "\u601D\u8003\u4E2D\u2026" : e.kind === "discuss" ? Ae(e.anchorText) ? "\u6539\u7248\u5F0F\u4E2D\u2026" : "\u5206\u6790\u62A5\u544A\u4E2D\u2026" : null : null;
}
function cs(e) {
  return e.map((t, s) => ({ type: t.logType === "token" ? "token" : "log", message: t.body, token: t.logType === "token" ? t.body : void 0, progress: t.progress, timestamp: s }));
}
function us(e, t) {
  return e === "error" ? "error" : e === "stopped" || t ? "done" : e === "running" ? "running" : e === "idle" ? "idle" : e === "done" ? "done" : "idle";
}
function fs({ round: e, isActive: t, onStop: s, onSelectTopic: n, chipsDisabled: r = false }) {
  var _a;
  const [l, d] = m.useState(false), u = e.w6, p = us(u == null ? void 0 : u.status, e.sealed), b = p === "idle" && !e.sealed && !!u, h = u ? cs(u.logs) : [], w = b ? "running" : p === "idle" ? "idle" : p, y = t && (p === "running" || b) ? "open" : "closed", c = ds(e);
  return o.jsxs("div", { className: "space-y-3", children: [e.anchorKind === "form" ? o.jsx(Ne, { title: e.topic || "\u6280\u80FD\u4EFB\u52A1", status: "submitted", submittedSummary: e.anchorText }) : e.anchorText ? o.jsx("div", { className: "flex justify-end", children: o.jsx("div", { className: "max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-3 py-2 text-xs text-white dark:bg-slate-100 dark:text-slate-900", children: o.jsx(ss, { content: e.anchorText }) }) }) : null, u ? o.jsxs(o.Fragment, { children: [o.jsx(as, { status: p, finalizing: b, connection: t && p === "running" ? "open" : "closed", progress: u.progress, lastLine: u.lastLine, events: h, onClick: () => d(true), onStop: p === "running" ? s : void 0 }), o.jsx(At, { open: l, onClose: () => d(false), events: h, status: w, connection: y })] }) : null, e.assistantText ? o.jsx(rs, { content: e.assistantText }) : c ? o.jsx(ns, { label: c }) : null, e.sealed && ((_a = e.guidedTopics) == null ? void 0 : _a.length) ? o.jsx(qt, { topics: e.guidedTopics.map((f) => ({ text: f, mode: "w6" })), status: "active", onSelect: (f) => n == null ? void 0 : n(f.text), disabled: r }) : null] });
}
function ms(e) {
  try {
    return JSON.parse(e).fields || [];
  } catch {
    return [];
  }
}
function ps({ draft: e, disabled: t, onSubmit: s, onCancel: n }) {
  const r = ms(e.formSchema);
  return r.length === 0 ? o.jsx("p", { className: "text-xs text-slate-500", children: "\u6280\u80FD\u8868\u5355\u914D\u7F6E\u65E0\u6548\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002" }) : o.jsxs("div", { className: "relative", children: [o.jsx("button", { type: "button", disabled: t, onClick: n, "aria-label": "\u53D6\u6D88\u6280\u80FD\u8868\u5355", className: "absolute right-2 top-2 z-10 rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-40 dark:hover:bg-slate-800 dark:hover:text-slate-200", children: o.jsx(Ie, { size: 14 }) }), o.jsx(Ne, { title: e.skillName || "\u6280\u80FD\u4EFB\u52A1", status: "pending", children: o.jsx(Pt, { fields: r, onSubmit: s, disabled: t }) })] });
}
function hs({ disabled: e, busy: t = false, isStreaming: s = false, onSend: n, onStop: r, placeholder: l = "\u8F93\u5165\u6D88\u606F\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" }) {
  const [d, u] = m.useState(""), p = () => {
    const b = d.trim();
    !b || e || t || s || (n(b), u(""));
  };
  return o.jsx("div", { className: "border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950", children: o.jsxs("div", { className: "flex gap-2", children: [o.jsx("textarea", { value: d, onChange: (b) => u(b.target.value), onKeyDown: (b) => {
    if (b.key === "Enter" && !b.shiftKey) {
      if (b.preventDefault(), s) {
        r == null ? void 0 : r();
        return;
      }
      p();
    }
  }, rows: 2, disabled: e && !s, placeholder: l, className: K("min-h-[44px] flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm", "dark:border-slate-700 dark:bg-slate-900") }), s ? o.jsx("button", { type: "button", onClick: r, className: "rounded-lg border border-red-200 bg-red-50 px-4 text-sm text-red-600 hover:bg-red-100 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-400", children: "\u505C\u6B62" }) : o.jsx("button", { type: "button", disabled: e || t || !d.trim(), onClick: p, className: "rounded-lg bg-slate-900 px-4 text-sm text-white disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900", children: "\u53D1\u9001" })] }) });
}
function bs(e) {
  if (!e) return [];
  try {
    return JSON.parse(e.form_schema).fields || [];
  } catch {
    return [];
  }
}
const xs = 15e3;
function gs(e) {
  const t = (e || "").toLowerCase();
  return t === "document" || t.includes("markdown") || t === "md" ? "markdown" : "html";
}
function ks(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const n of e) {
    const r = Ee(n.url || n.id);
    !r || s.has(r) || (s.add(r), t.push({ id: r, url: n.url || $e(r), resourceId: r, title: n.name || n.title || "\u62A5\u544A", timestamp: Date.now(), kind: gs(n.type) }));
  }
  return t;
}
function ys(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const [n, r] of e.entries()) {
    const l = Ee(r.resourceId);
    !l || s.has(l) || (s.add(l), t.push({ id: l, url: $e(l), resourceId: l, title: r.title || "\u62A5\u544A", timestamp: n * 1e3, kind: r.kind, roundId: r.roundId }));
  }
  return t;
}
function Te(e, t, s) {
  if (e.roundId) {
    const u = t.find((p) => p.roundId === e.roundId && p.kind === s);
    if (u) return u;
  }
  const n = e.timestamp ?? 0;
  let r, l = Number.POSITIVE_INFINITY;
  for (const u of t) {
    if (u.kind !== s) continue;
    const p = Math.abs((u.timestamp ?? 0) - n);
    p < l && (l = p, r = u);
  }
  if (r && l <= xs) return r;
  const d = t.findIndex((u) => u.id === e.id);
  if (d >= 0) for (let u = 1; u <= 2; u++) {
    const p = t[d - u], b = t[d + u];
    if ((p == null ? void 0 : p.kind) === s) return p;
    if ((b == null ? void 0 : b.kind) === s) return b;
  }
}
function vs(e, t) {
  var _a, _b, _c, _d;
  if (!e) return {};
  const s = ((_a = e.resourceId) == null ? void 0 : _a.trim()) || ((_b = e.id) == null ? void 0 : _b.trim());
  if (!s) return {};
  const n = t.find((l) => l.id === e.id) ?? { ...e };
  if (n.kind === "markdown") {
    const l = Te(n, t, "html");
    return { mdResourceId: s, htmlResourceId: (_c = l == null ? void 0 : l.resourceId) == null ? void 0 : _c.trim() };
  }
  const r = Te(n, t, "markdown");
  return { htmlResourceId: s, mdResourceId: (_d = r == null ? void 0 : r.resourceId) == null ? void 0 : _d.trim() };
}
function ws(e) {
  var _a, _b;
  const t = e.activeRoundId;
  if (!t) return { kind: null, roundId: null };
  const s = e.rounds.find((n) => n.id === t);
  return !s || s.sealed ? { kind: null, roundId: null } : ((_a = s.w6) == null ? void 0 : _a.status) === "running" || Qt(e) > 0 ? { kind: "w6", roundId: ((_b = e.rounds.find((r) => {
    var _a2;
    return ((_a2 = r.w6) == null ? void 0 : _a2.status) === "running" && !r.sealed;
  })) == null ? void 0 : _b.id) ?? t } : s.kind === "discuss" ? { kind: "discuss", roundId: t } : s.kind === "deepseek" ? { kind: "deepseek", roundId: t } : { kind: null, roundId: null };
}
function Is() {
  const e = kt(), { sessionId: t } = yt(), { user: s } = vt(), n = s == null ? void 0 : s.id, { sessions: r, fetchSessions: l, createSession: d, updateSession: u, deleteSession: p, fetchIntelligenceSkills: b, intelligenceSkills: h, executeIntelligenceSkill: w } = he(), { prompt: y, confirm: c } = wt(), { addToast: f } = St(), a = jt(), g = (a == null ? void 0 : a.leftCollapsed) ?? false, R = a == null ? void 0 : a.setRightCollapsed, [_, U] = m.useState(false), [$, Z] = m.useState(() => be(n)), [Le, De] = m.useState([]), [Oe, Fe] = m.useState(null), [de, ee] = m.useState([]), [W, te] = m.useState(null), [se, re] = m.useState(null), [P, E] = m.useState(false), I = m.useRef(null), ce = m.useRef(null), { projected: S, loading: ue, error: fe, loadedSessionId: Ke } = Zt(t), Ue = j((i) => i.hasMore), me = j((i) => i.loadingEarlier), We = j((i) => i.loadEarlierTimeline), B = j((i) => i.loadTimeline), G = !!(t && Ke === t && !ue), z = m.useMemo(() => ws(S), [S]), C = z.kind != null, ne = P || C, v = m.useMemo(() => {
    const i = ys(S.reports);
    return i.length > 0 ? i : de.map((k, x) => ({ ...k, timestamp: x * 1e3 }));
  }, [de, S.reports]);
  m.useEffect(() => {
    b(), _t.listGroups().then(De).catch(() => {
    }), l().finally(() => U(true));
  }, [b, l]), m.useEffect(() => {
    Z(be(n));
  }, [n]), m.useEffect(() => {
    if (!t) {
      ee([]);
      return;
    }
    Jt(t).then((i) => {
      ee(ks(i));
    });
  }, [t]), m.useEffect(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null, E(false), re(Ot(t));
  }, [t]), m.useEffect(() => () => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null;
  }, []);
  const N = m.useMemo(() => Mt({ sessionTitle: S.sessionTitle, rounds: S.rounds }), [S.sessionTitle, S.rounds]);
  m.useEffect(() => {
    if (!G || !t) return;
    const i = r.find((k) => k.id === t);
    i && Y(i.title) && N.trim() && !Y(N) && N !== i.title && u(t, N.trim());
  }, [G, t, N, r, u]), m.useEffect(() => {
    v.length !== 0 && (te((i) => i && v.some((k) => k.id === i) ? i : v[v.length - 1].id), R == null ? void 0 : R(false));
  }, [v, R]);
  const oe = m.useMemo(() => t ? r.find((i) => i.id === t) : void 0, [r, t]), Be = m.useMemo(() => {
    var _a, _b;
    if (!G) return (oe == null ? void 0 : oe.title) || "\u65B0\u4F1A\u8BDD";
    if (!Y(N)) return N;
    const i = S.rounds[S.rounds.length - 1], x = (_b = (_a = S.activeRoundId ? S.rounds.find((M) => M.id === S.activeRoundId) : i) == null ? void 0 : _a.topic) == null ? void 0 : _b.trim();
    return x && !Y(x) ? x : (oe == null ? void 0 : oe.title) || N || "\u65B0\u4F1A\u8BDD";
  }, [G, N, S.rounds, S.activeRoundId, oe == null ? void 0 : oe.title]), Ge = v.length > 0, ie = m.useCallback(async () => {
    j.getState().reset();
    const i = await d("\u65B0\u4F1A\u8BDD");
    e(O(`/sessions/${i.id}`));
  }, [d, e]), ze = m.useCallback(async (i) => {
    var _a, _b;
    const x = ((_b = (_a = r.find((ae) => ae.id === i)) == null ? void 0 : _a.title) == null ? void 0 : _b.trim()) || "\u672A\u547D\u540D\u4F1A\u8BDD";
    if (!await c({ title: "\u5220\u9664\u4F1A\u8BDD", message: `\u786E\u5B9A\u5220\u9664\u4F1A\u8BDD\u300C${x}\u300D\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002`, variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) || (await p(i), i !== t)) return;
    j.getState().reset();
    const L = he.getState().sessions;
    if (L.length > 0) {
      e(O(`/sessions/${L[0].id}`));
      return;
    }
    const A = await d("\u65B0\u4F1A\u8BDD");
    e(O(`/sessions/${A.id}`), { replace: true });
  }, [r, c, p, t, e, d]);
  m.useEffect(() => {
    _ && !t && r.length > 0 ? e(O(`/sessions/${r[0].id}`), { replace: true }) : _ && !t && r.length === 0 && ie();
  }, [_, t, r, e, ie]);
  const J = m.useCallback(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort();
    const i = new AbortController();
    return I.current = i, E(true), i;
  }, []), H = m.useCallback(() => {
    I.current = null, E(false);
  }, []), Je = m.useCallback(() => {
    var _a;
    (_a = I.current) == null ? void 0 : _a.abort(), I.current = null, E(false), t && z.roundId && ye(t, z.roundId);
  }, [z, t]), V = m.useCallback(async (i) => {
    if (!t) return;
    const k = J();
    try {
      const x = i.replace(/^@w6\s*/i, "").trim();
      await F(t, { kind: "w6_manual", message: x || i }, k.signal);
    } catch (x) {
      if (x instanceof Error && x.name === "AbortError") return;
      throw x;
    } finally {
      H();
    }
  }, [t, J, H]), He = m.useCallback((i) => {
    if (P || C) {
      f("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    V(i);
  }, [P, C, V, f]), Ve = m.useCallback(async (i) => {
    if (!t || C) return;
    if (/^@w6\b/i.test(i)) {
      await V(i);
      return;
    }
    const k = J();
    try {
      const x = v.length > 0 ? v.find((ae) => ae.id === W) ?? v[v.length - 1] : void 0, M = vs(x, v), L = ge(t, x == null ? void 0 : x.id, se), A = Dt(i, L, M);
      A.kind === "discuss" && A.mode === "edit_html" ? await F(t, { kind: "discuss", message: i, mode: "edit_html", target_resource_id: A.target_resource_id }, k.signal) : A.kind === "discuss" ? await F(t, { kind: "discuss", message: i, ...A.target_resource_id ? { target_resource_id: A.target_resource_id } : {} }, k.signal) : await F(t, { kind: "deepseek", message: i }, k.signal);
    } catch (x) {
      if (x instanceof Error && x.name === "AbortError") return;
      throw x;
    } finally {
      H();
    }
  }, [t, C, V, v, W, se, J, H]), Ye = m.useCallback(async (i) => {
    if (!t) return;
    if (P || C) {
      f("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    if (bs(i).length === 0) {
      f("error", "\u8BE5\u6280\u80FD\u672A\u914D\u7F6E\u8868\u5355\u5B57\u6BB5");
      return;
    }
    E(true);
    try {
      await Bt(t, { skill_id: i.id, skill_key: i.key, skill_name: i.name, form_schema: i.form_schema }), await B(t, { silent: true }), requestAnimationFrame(() => {
        var _a;
        (_a = ce.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      });
    } catch (x) {
      f("error", x instanceof Error ? x.message : "\u65E0\u6CD5\u6253\u5F00\u6280\u80FD\u8868\u5355");
    } finally {
      E(false);
    }
  }, [t, P, C, f, B]), Qe = m.useCallback(async (i, k, x, M) => {
    if (t) {
      E(true);
      try {
        const L = await w(k, M);
        await F(t, { kind: "w6_form", skill_key: x, form_data: M, rendered_prompt: L, report_style: $, draft_id: i });
      } finally {
        E(false);
      }
    }
  }, [t, w, $]), Xe = m.useCallback(async (i) => {
    if (t) try {
      await Gt(t, i), await B(t, { silent: true });
    } catch (k) {
      f("error", k instanceof Error ? k.message : "\u53D6\u6D88\u5931\u8D25");
    }
  }, [t, f, B]), T = v.find((i) => i.id === W) ?? v[v.length - 1], pe = ge(t, T == null ? void 0 : T.id, se), Ze = T ? xe(T, v.findIndex((i) => i.id === T.id), v) : "", et = n ? `aichat-panels:${n}` : void 0, tt = m.useCallback(() => {
    !t || !(T == null ? void 0 : T.id) || (re(T.id), Ft(t, T.id));
  }, [t, T == null ? void 0 : T.id]), st = m.useCallback(() => {
    t && (re(null), Kt(t));
  }, [t]), rt = o.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [o.jsx("div", { className: "border-b border-slate-200 p-3 dark:border-slate-800", children: o.jsxs("button", { type: "button", onClick: () => void ie(), className: "flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900", children: [o.jsx(Tt, { size: 16 }), " \u65B0\u4F1A\u8BDD"] }) }), o.jsx(es, { sessions: r, activeId: t, onSelect: (i) => e(O(`/sessions/${i}`)), onRename: (i) => {
    const k = r.find((x) => x.id === i);
    y({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: (k == null ? void 0 : k.title) ?? "", placeholder: "\u4F1A\u8BDD\u540D\u79F0" }).then((x) => {
      (x == null ? void 0 : x.trim()) && u(i, x.trim());
    });
  }, onDelete: (i) => void ze(i) })] }), nt = o.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [o.jsx("div", { className: "border-b border-slate-200 px-4 py-3 text-sm font-medium dark:border-slate-800", children: Be }), o.jsxs("div", { className: "min-h-0 flex-1 space-y-6 overflow-y-auto px-4 py-4", children: [ue ? o.jsx("p", { className: "text-sm text-slate-500", children: "\u52A0\u8F7D\u65F6\u95F4\u7EBF\u2026" }) : null, fe ? o.jsx("p", { className: "text-sm text-red-600", children: fe }) : null, Ue && t ? o.jsx("div", { className: "flex justify-center pb-2", children: o.jsx("button", { type: "button", disabled: me, onClick: () => void We(t), className: "rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900", children: me ? "\u52A0\u8F7D\u4E2D\u2026" : "\u52A0\u8F7D\u66F4\u65E9\u7684\u5BF9\u8BDD" }) }) : null, S.entries.map((i) => i.entryKind === "form_draft" ? o.jsx(ps, { draft: i.draft, disabled: P || C, onSubmit: (k) => void Qe(i.draft.id, i.draft.skillId, i.draft.skillKey, k), onCancel: () => void Xe(i.draft.id) }, i.draft.id) : o.jsx(fs, { round: i.round, isActive: i.round.id === S.activeRoundId, onStop: t ? () => void ye(t, i.round.id) : void 0, onSelectTopic: He, chipsDisabled: ne }, i.round.id)), o.jsx("div", { ref: ce })] }), o.jsx("div", { className: "shrink-0 border-t border-zinc-200/70 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#212121]", children: o.jsxs("div", { className: "mx-auto max-w-3xl space-y-2", children: [o.jsx($t, { skillGroups: Le, activeGroupId: Oe, onActiveGroupChange: Fe, intelligenceSkills: h, onSkillClick: Ye, disabled: ne }), v.length > 0 && T ? o.jsx(Ut, { title: Ze, previewKind: T.kind === "markdown" ? "markdown" : "html", enabled: pe, disabled: ne, onDismiss: tt, onEnable: st }) : null, o.jsx(hs, { disabled: !t, busy: P, isStreaming: C, onStop: Je, onSend: (i) => void Ve(i), placeholder: v.length > 0 ? pe ? "\u9488\u5BF9\u4E0A\u65B9\u9884\u89C8\u5185\u5BB9\u8FFD\u95EE\uFF1B\u6539\u7248\u5F0F\u8BF7\u8BF4\u660E\u5177\u4F53\u8C03\u6574\uFF1B@w6 \u4E3A\u6DF1\u5EA6\u8C03\u7814" : "\u7EAF\u5BF9\u8BDD\u6A21\u5F0F\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" : "\u8F93\u5165\u8FFD\u95EE\uFF1B@w6 \u5F00\u5934\u4E3A\u6DF1\u5EA6\u8C03\u7814" })] }) })] }), ot = v.map((i, k) => ({ ...i, title: xe(i, k, v) })), it = o.jsx(Lt, { reports: ot, activeReportId: (T == null ? void 0 : T.id) ?? null, onActiveChange: te, onReportClose: (i) => {
    ee((k) => k.filter((x) => x.id !== i)), W === i && te(null);
  } });
  return o.jsx(Rt, { className: "h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", innerClassName: "h-full min-h-0 border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", leftPanelId: "aichat-left", mainPanelId: "aichat-main", rightPanelId: "aichat-right", left: rt, main: nt, right: it, leftMinPx: 200, leftMaxPx: 400, leftDefaultPx: 240, rightMinPx: 320, rightMaxPx: 1200, rightDefaultPct: 50, leftSidebarVisible: !g, rightSidebarVisible: Ge, storageKey: et, resizeHandleWithGrip: true });
}
export {
  Is as default
};
