export type ComposerMentionId = 'w6' | 'edit-html'

export type ComposerMention = {
  id: ComposerMentionId
  tag: string
  title: string
  description: string
}

export const COMPOSER_MENTIONS: ComposerMention[] = [
  {
    id: 'w6',
    tag: '@w6',
    title: '深度调研',
    description: '启动 W6 子 Agent，生成新的调研报告',
  },
  {
    id: 'edit-html',
    tag: '@edit-html',
    title: '改版式',
    description: '按指令更新右侧 HTML 预览（不改 Markdown 讨论）',
  },
]

export type ParsedComposerMention = {
  mention: ComposerMentionId | null
  body: string
  raw: string
}

const MENTION_PATTERNS: Array<{ id: ComposerMentionId; re: RegExp }> = [
  { id: 'w6', re: /^@w6\b/i },
  { id: 'edit-html', re: /^@edit-html\b/i },
]

export function parseComposerMention(text: string): ParsedComposerMention {
  const raw = text.trim()
  if (!raw) return { mention: null, body: '', raw }
  for (const { id, re } of MENTION_PATTERNS) {
    if (re.test(raw)) {
      const body = raw.replace(re, '').trim()
      return { mention: id, body, raw }
    }
  }
  return { mention: null, body: raw, raw }
}

export function filterComposerMentions(
  query: string,
  options?: { editHtmlAvailable?: boolean },
): ComposerMention[] {
  const q = query.trim().toLowerCase().replace(/^@/, '')
  return COMPOSER_MENTIONS.filter((m) => {
    if (m.id === 'edit-html' && options?.editHtmlAvailable === false) return false
    if (!q) return true
    const hay = `${m.tag} ${m.id} ${m.title}`.toLowerCase()
    return hay.includes(q)
  })
}

export function mentionInsertText(id: ComposerMentionId): string {
  const item = COMPOSER_MENTIONS.find((m) => m.id === id)
  return item ? `${item.tag} ` : ''
}
