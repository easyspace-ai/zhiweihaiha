import { describe, expect, it } from 'vitest'
import { isReportEditIntent } from './reportEditIntent'

describe('isReportEditIntent', () => {
  it('only matches explicit @edit-html mention', () => {
    expect(isReportEditIntent('@edit-html 增加表格')).toBe(true)
    expect(isReportEditIntent('重新布局，增加表格')).toBe(false)
    expect(isReportEditIntent('调整报告布局')).toBe(false)
  })
})
