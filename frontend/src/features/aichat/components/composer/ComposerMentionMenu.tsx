import { cn } from '@/osint/utils'
import type { ComposerMention } from '../../lib/composerMentions'

export function ComposerMentionMenu({
  items,
  activeIndex,
  onPick,
}: {
  items: ComposerMention[]
  activeIndex: number
  onPick: (id: ComposerMention['id']) => void
}) {
  if (items.length === 0) return null

  return (
    <div
      role="listbox"
      className="absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          role="option"
          aria-selected={index === activeIndex}
          onMouseDown={(e) => {
            e.preventDefault()
            onPick(item.id)
          }}
          className={cn(
            'flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left transition-colors',
            index === activeIndex
              ? 'bg-slate-100 dark:bg-slate-800'
              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60',
          )}
        >
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
            <span className="font-mono text-sky-700 dark:text-sky-400">{item.tag}</span>
            <span className="ml-2 text-slate-600 dark:text-slate-300">{item.title}</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{item.description}</span>
        </button>
      ))}
    </div>
  )
}
