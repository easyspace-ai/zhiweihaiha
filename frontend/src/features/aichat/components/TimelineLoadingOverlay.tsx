import { Loader2 } from 'lucide-react'

export function TimelineLoadingOverlay() {
  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center bg-white/75 backdrop-blur-[2px] dark:bg-[#212121]/80"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="正在加载会话"
    >
      <div className="flex flex-col items-center gap-3">
        <Loader2
          size={32}
          strokeWidth={2}
          className="animate-spin text-slate-500 dark:text-slate-400"
        />
      </div>
    </div>
  )
}
