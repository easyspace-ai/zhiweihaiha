import { parseComposerMention, type ComposerMentionId } from './composerMentions'
import type { PreviewReportTargets } from './reportItems'

export type SendRoute =
  | { kind: 'w6_manual'; message: string }
  | { kind: 'deepseek'; message: string }
  | { kind: 'discuss'; message: string; target_resource_id?: string }
  | { kind: 'edit_html'; message: string; target_resource_id: string }

export function resolveSendRoute(
  text: string,
  contextEnabled: boolean,
  targets?: PreviewReportTargets,
): SendRoute | { error: string } {
  const parsed = parseComposerMention(text)
  const message = parsed.body || parsed.raw

  if (parsed.mention === 'w6') {
    if (!message) return { error: '请在 @w6 后输入调研主题或问题' }
    return { kind: 'w6_manual', message: parsed.raw }
  }

  if (parsed.mention === 'edit-html') {
    if (!message) return { error: '请在 @edit-html 后说明要如何改版式' }
    const htmlId = targets?.htmlResourceId?.trim()
    if (!htmlId) return { error: '请先选择一份 HTML 报告预览，再使用 @edit-html' }
    return { kind: 'edit_html', message, target_resource_id: htmlId }
  }

  if (!contextEnabled) {
    return { kind: 'deepseek', message: parsed.body }
  }

  const mdId = targets?.mdResourceId?.trim()
  if (mdId) {
    return { kind: 'discuss', message: parsed.body, target_resource_id: mdId }
  }
  return { kind: 'discuss', message: parsed.body }
}

export function isEditHtmlMention(mention: ComposerMentionId | null): boolean {
  return mention === 'edit-html'
}
