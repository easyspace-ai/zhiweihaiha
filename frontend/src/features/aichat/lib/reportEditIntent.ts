import { parseComposerMention } from './composerMentions'

/** True when the round used @edit-html (explicit HTML patch). */
export function isReportEditIntent(text: string): boolean {
  return parseComposerMention(text).mention === 'edit-html'
}
