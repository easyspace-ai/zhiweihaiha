import { useCallback, useRef, useState } from 'react'
import { cn } from '@/osint/utils'
import {
  filterComposerMentions,
  mentionInsertText,
  parseComposerMention,
  type ComposerMentionId,
} from '../../lib/composerMentions'
import { ComposerMentionMenu } from './ComposerMentionMenu'

function getMentionQuery(value: string, caret: number): string | null {
  const before = value.slice(0, caret)
  const match = before.match(/@([a-z0-9-]*)$/i)
  if (!match) return null
  return match[1] ?? ''
}

export function AiChatComposer({
  disabled,
  busy = false,
  isStreaming = false,
  editHtmlAvailable = true,
  onSend,
  onStop,
  placeholder = '输入消息；输入 @ 选择深度调研或改版式',
}: {
  disabled?: boolean
  busy?: boolean
  isStreaming?: boolean
  editHtmlAvailable?: boolean
  onSend: (text: string) => void
  onStop?: () => void
  placeholder?: string
}) {
  const [text, setText] = useState('')
  const [mentionOpen, setMentionOpen] = useState(false)
  const [mentionQuery, setMentionQuery] = useState('')
  const [mentionIndex, setMentionIndex] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const mentionItems = filterComposerMentions(mentionQuery, { editHtmlAvailable })

  const syncMentionMenu = useCallback((value: string, caret: number) => {
    const q = getMentionQuery(value, caret)
    if (q === null) {
      setMentionOpen(false)
      setMentionQuery('')
      setMentionIndex(0)
      return
    }
    setMentionOpen(true)
    setMentionQuery(q)
    setMentionIndex(0)
  }, [])

  const insertMention = useCallback((id: ComposerMentionId) => {
    const el = textareaRef.current
    if (!el) return
    const caret = el.selectionStart ?? text.length
    const before = text.slice(0, caret)
    const after = text.slice(caret)
    const atMatch = before.match(/@([a-z0-9-]*)$/i)
    const prefix = atMatch ? before.slice(0, before.length - atMatch[0].length) : before
    const next = `${prefix}${mentionInsertText(id)}${after}`
    setText(next)
    setMentionOpen(false)
    setMentionQuery('')
    const nextCaret = prefix.length + mentionInsertText(id).length
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(nextCaret, nextCaret)
    })
  }, [text])

  const submit = () => {
    const v = text.trim()
    if (!v || disabled || busy || isStreaming) return
    onSend(v)
    setText('')
    setMentionOpen(false)
  }

  const activeMention = parseComposerMention(text).mention

  return (
    <div className="relative">
      {activeMention ? (
        <div className="mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-md bg-sky-50 px-2 py-0.5 font-mono text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
            @{activeMention === 'edit-html' ? 'edit-html' : 'w6'}
          </span>
          <span>
            {activeMention === 'w6' ? '将启动深度调研' : '将更新右侧 HTML 预览'}
          </span>
        </div>
      ) : null}
      {mentionOpen && mentionItems.length > 0 ? (
        <ComposerMentionMenu
          items={mentionItems}
          activeIndex={mentionIndex}
          onPick={insertMention}
        />
      ) : null}
      <div className="flex gap-2">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            syncMentionMenu(e.target.value, e.target.selectionStart ?? e.target.value.length)
          }}
          onClick={(e) =>
            syncMentionMenu(e.currentTarget.value, e.currentTarget.selectionStart ?? 0)
          }
          onKeyDown={(e) => {
            if (mentionOpen && mentionItems.length > 0) {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setMentionIndex((i) => (i + 1) % mentionItems.length)
                return
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault()
                setMentionIndex((i) => (i - 1 + mentionItems.length) % mentionItems.length)
                return
              }
              if (e.key === 'Tab' || e.key === 'Enter') {
                e.preventDefault()
                const pick = mentionItems[mentionIndex] ?? mentionItems[0]
                if (pick) insertMention(pick.id)
                return
              }
              if (e.key === 'Escape') {
                e.preventDefault()
                setMentionOpen(false)
                return
              }
            }
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              if (isStreaming) {
                onStop?.()
                return
              }
              submit()
            }
          }}
          rows={2}
          disabled={disabled && !isStreaming}
          placeholder={placeholder}
          className={cn(
            'min-h-[44px] flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm',
            'dark:border-slate-700 dark:bg-slate-900',
          )}
        />
        {isStreaming ? (
          <button
            type="button"
            onClick={onStop}
            className="rounded-lg border border-red-200 bg-red-50 px-4 text-sm text-red-600 hover:bg-red-100 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-400"
          >
            停止
          </button>
        ) : (
          <button
            type="button"
            disabled={disabled || busy || !text.trim()}
            onClick={submit}
            className="rounded-lg bg-slate-900 px-4 text-sm text-white disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900"
          >
            发送
          </button>
        )}
      </div>
    </div>
  )
}
