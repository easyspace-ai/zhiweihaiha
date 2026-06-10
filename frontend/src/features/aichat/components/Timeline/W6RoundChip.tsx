import { useEffect, useRef, useState } from 'react'
import { FileCode, Loader2, StopCircle } from 'lucide-react'
import type { W6StreamEvent } from '../../types/report'
import { w6LogLines, w6PreviewLines } from '../../lib/w6MessageView'
import { shortenReportTitle } from '../../lib/reportTitleDisplay'

const CONN_LABEL: Record<string, string> = {
  idle: '未连接',
  connecting: '连接中',
  open: '已连接',
  closed: '已结束',
  error: '连接异常',
}

/** Cycles `.` → `..` → `...` so users see the task is still alive. */
function LiveEllipsis({
  active,
  tone = 'emerald',
}: {
  active: boolean
  tone?: 'emerald' | 'amber' | 'blue'
}) {
  const [dots, setDots] = useState(1)

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      setDots((n) => (n % 3) + 1)
    }, 420)
    return () => clearInterval(timer)
  }, [active])

  if (!active) return null

  const color =
    tone === 'amber'
      ? 'text-amber-600 dark:text-amber-400'
      : tone === 'blue'
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-emerald-600 dark:text-emerald-400'

  return (
    <span
      className={`inline-block min-w-[1.25rem] text-left text-[11px] font-bold leading-none tracking-widest ${color}`}
      aria-hidden
    >
      {'.'.repeat(dots)}
    </span>
  )
}

function ConnectionBadge({ connection }: { connection: string }) {
  const label = CONN_LABEL[connection] ?? connection
  const tone =
    connection === 'error'
      ? 'border-red-200/80 bg-red-50/90 text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400'
      : connection === 'connecting'
        ? 'border-amber-200/80 bg-amber-50/90 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
        : 'border-emerald-200/80 bg-emerald-50/90 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400'

  const dotTone =
    connection === 'error'
      ? 'bg-red-500'
      : connection === 'connecting'
        ? 'bg-amber-500'
        : 'bg-emerald-500'

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${tone}`}
      title={label}
    >
      {connection === 'connecting' ? (
        <Loader2 size={10} className="animate-spin" aria-hidden />
      ) : (
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotTone}`} aria-hidden />
      )}
      <span>{label}</span>
    </span>
  )
}

function runningPlaceholder(connection?: string, lastLine?: string): string {
  if (lastLine?.trim()) return lastLine.trim()
  if (connection === 'connecting') return '正在连接 W6 输出流…'
  if (connection === 'open') return '已连接，等待 W6 输出…'
  if (connection === 'error') return '连接异常，正在重试…'
  return '正在启动 W6 子 Agent…'
}

type W6RoundChipProps = {
  status: 'idle' | 'running' | 'done' | 'error' | 'stopped'
  progress: number
  lastLine: string
  finalizing?: boolean
  connection?: string
  events?: W6StreamEvent[]
  onClick: () => void
  onStop?: () => void
  stopping?: boolean
  htmlReportId?: string
  htmlReportTitle?: string
  onOpenHtmlReport?: (resourceId: string) => void
}

export function W6RoundChip({
  status,
  progress,
  lastLine,
  finalizing = false,
  connection,
  events = [],
  onClick,
  onStop,
  stopping = false,
  htmlReportId,
  htmlReportTitle,
  onOpenHtmlReport,
}: W6RoundChipProps) {
  const label = finalizing
    ? 'W6 深度调研 · 收尾中…'
    : status === 'running'
      ? 'W6 深度调研 · 运行中'
      : status === 'error'
        ? 'W6 子 Agent · 出错'
        : status === 'stopped'
          ? 'W6 深度调研 · 已手动停止'
          : status === 'done'
            ? 'W6 子 Agent · 已完成'
            : 'W6 子 Agent · 待命'

  const borderTone = finalizing
    ? 'border-amber-300/60 bg-amber-50/80 dark:border-amber-700 dark:bg-amber-950/30'
    : status === 'running'
      ? 'border-blue-300/60 bg-blue-50/80 dark:border-blue-700 dark:bg-blue-950/30'
      : status === 'error'
        ? 'border-red-300/60 bg-red-50/80 dark:border-red-800 dark:bg-red-950/30'
        : status === 'stopped'
          ? 'border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30'
          : status === 'done'
          ? 'border-emerald-300/60 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/20'
          : 'border-slate-300/60 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/30'

  const showStop = status === 'running' && Boolean(onStop)
  const showLivePreview = status === 'running' || finalizing
  const logLines = showLivePreview ? w6PreviewLines(events, 8) : w6LogLines(events, 4)
  const previewRef = useRef<HTMLDivElement>(null)
  const displayLastLine = finalizing && !lastLine.trim() ? '报告草稿就绪，等待收尾…' : lastLine
  const previewLines =
    logLines.length > 0
      ? logLines
      : showLivePreview
        ? [runningPlaceholder(finalizing ? 'closed' : connection, displayLastLine)]
        : []

  useEffect(() => {
    if (!showLivePreview || !previewRef.current) return
    previewRef.current.scrollTop = previewRef.current.scrollHeight
  }, [previewLines, showLivePreview])

  const showProgress = (status === 'running' || finalizing) && progress > 0
  const showConnection =
    Boolean(connection) &&
    connection !== 'idle' &&
    connection !== 'closed' &&
    (status === 'running' || finalizing)
  const htmlId = htmlReportId?.trim()
  const htmlLinkLabel = shortenReportTitle(htmlReportTitle || '调研报告', 28)
  const ellipsisTone = finalizing ? 'amber' : connection === 'connecting' ? 'amber' : 'emerald'

  return (
    <div className={`relative max-w-[85%] rounded-lg border ${borderTone}`}>
      {showStop ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onStop?.()
          }}
          disabled={stopping}
          title="停止 W6 调研"
          aria-label="停止 W6 调研"
          className="absolute right-2 top-2 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-white/80 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-900/80 dark:hover:text-red-400"
        >
          <StopCircle size={14} />
        </button>
      ) : null}
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-shadow hover:shadow-md ${showStop ? 'pr-9' : ''}`}
      >
        <div className="flex w-full flex-wrap items-center gap-x-2 gap-y-1">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${
              finalizing
                ? 'animate-pulse bg-amber-500'
                : status === 'running'
                  ? 'animate-pulse bg-blue-500'
                  : status === 'error'
                    ? 'bg-red-500'
                    : status === 'stopped'
                      ? 'bg-slate-400'
                      : status === 'done'
                        ? 'bg-emerald-500'
                        : 'bg-slate-400'
            }`}
          />
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{label}</span>
          {showProgress ? (
            <span
              className={`text-[10px] ${finalizing ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'}`}
            >
              {progress}%
            </span>
          ) : null}
          {showConnection && connection ? (
            <span className="inline-flex items-center gap-0.5">
              <ConnectionBadge connection={connection} />
              <LiveEllipsis active tone={ellipsisTone} />
            </span>
          ) : finalizing ? (
            <LiveEllipsis active tone="amber" />
          ) : null}
          <span className="ml-auto text-[10px] text-blue-600/80 dark:text-blue-400/80">点击查看完整输出</span>
        </div>

        {previewLines.length > 0 ? (
          <div
            ref={previewRef}
            className={`w-full rounded-md border border-slate-200/80 bg-white/70 px-2 py-1.5 text-left dark:border-slate-700 dark:bg-slate-900/50 ${
              showLivePreview ? 'min-h-[4.5rem] max-h-32 overflow-y-auto' : ''
            }`}
          >
            {previewLines.map((line, i) => {
              const isLatest = showLivePreview && i === previewLines.length - 1
              const isPlaceholder = showLivePreview && logLines.length === 0
              return (
                <p
                  key={`${i}-${line.slice(0, 24)}`}
                  className={`text-[11px] leading-relaxed ${
                    isLatest
                      ? 'text-slate-700 dark:text-slate-200'
                      : 'truncate text-slate-500 dark:text-slate-500'
                  } ${isPlaceholder && isLatest ? 'animate-pulse' : ''}`}
                  title={line}
                >
                  {line}
                  {isLatest && showLivePreview && logLines.length > 0 ? (
                    <span
                      className={`ml-0.5 inline-block h-3 w-0.5 animate-pulse align-middle ${finalizing ? 'bg-amber-500' : 'bg-blue-500'}`}
                    />
                  ) : null}
                </p>
              )
            })}
          </div>
        ) : displayLastLine ? (
          <p className="w-full truncate text-[11px] text-slate-500">{displayLastLine}</p>
        ) : null}
      </button>
      {htmlId && onOpenHtmlReport && status !== 'stopped' && status !== 'error' ? (
        <button
          type="button"
          onClick={() => onOpenHtmlReport(htmlId)}
          className="flex w-full items-center gap-2 border-t border-slate-200/80 px-3 py-2 text-left text-[11px] text-blue-700 transition-colors hover:bg-blue-50/80 dark:border-slate-700 dark:text-blue-400 dark:hover:bg-blue-950/30"
        >
          <FileCode size={13} className="shrink-0" aria-hidden />
          <span className="truncate">
            在预览区打开 HTML 报告
            <span className="text-slate-500 dark:text-slate-400"> · {htmlLinkLabel}</span>
          </span>
        </button>
      ) : null}
    </div>
  )
}
