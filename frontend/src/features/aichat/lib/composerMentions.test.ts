import { describe, expect, it } from 'vitest'
import { filterComposerMentions, parseComposerMention } from './composerMentions'
import { resolveSendRoute } from './sendRoute'

describe('parseComposerMention', () => {
  it('parses @w6 and @edit-html prefixes', () => {
    expect(parseComposerMention('@w6 调研主题')).toEqual({
      mention: 'w6',
      body: '调研主题',
      raw: '@w6 调研主题',
    })
    expect(parseComposerMention('@edit-html 增加表格')).toEqual({
      mention: 'edit-html',
      body: '增加表格',
      raw: '@edit-html 增加表格',
    })
  })
})

describe('resolveSendRoute', () => {
  const targets = { htmlResourceId: 'html-1', mdResourceId: 'md-1' }

  it('routes @edit-html to html patch', () => {
    expect(resolveSendRoute('@edit-html 重新布局', true, targets)).toEqual({
      kind: 'edit_html',
      message: '重新布局',
      target_resource_id: 'html-1',
    })
  })

  it('routes plain text with context to discuss markdown', () => {
    expect(resolveSendRoute('报告讲了什么', true, targets)).toEqual({
      kind: 'discuss',
      message: '报告讲了什么',
      target_resource_id: 'md-1',
    })
  })

  it('does not auto-route layout keywords without @edit-html', () => {
    expect(resolveSendRoute('重新布局，增加表格', true, targets)).toEqual({
      kind: 'discuss',
      message: '重新布局，增加表格',
      target_resource_id: 'md-1',
    })
  })

  it('requires html target for @edit-html', () => {
    expect(resolveSendRoute('@edit-html 改标题', true, { mdResourceId: 'md-1' })).toEqual({
      error: '请先选择一份 HTML 报告预览，再使用 @edit-html',
    })
  })
})

describe('filterComposerMentions', () => {
  it('hides edit-html when unavailable', () => {
    const items = filterComposerMentions('', { editHtmlAvailable: false })
    expect(items.map((m) => m.id)).toEqual(['w6'])
  })
})
