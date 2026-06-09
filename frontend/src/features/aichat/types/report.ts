export type W6MessageStatus = 'running' | 'done' | 'error' | 'stopped'

export type FormMessageStatus = 'pending' | 'submitted' | 'cancelled'

export type GuidedTopicMode = 'w6' | 'discuss'

export type GuidedTopicsStatus = 'active' | 'used'

export type GuidedTopicSnap = {
  text: string
  mode: GuidedTopicMode
}

export type DashboardReportKind = 'html' | 'markdown'

export interface DashboardReportItem {
  id: string
  url: string
  /** Artifact resource id for preview/edit API. */
  resourceId: string
  title: string
  timestamp: number
  /** Preview mode: HTML iframe or rendered Markdown. */
  kind: DashboardReportKind
  /** Inline markdown from SSE / W6 stream (optional). */
  markdown?: string
}

export interface W6StreamEvent {
  type: 'log' | 'tool' | 'token' | 'status' | 'phase' | 'done' | 'error' | 'stopped'
  message?: string
  token?: string
  progress?: number
  markdown?: string
  reportHtml?: string
  previewFile?: string
  reportUrl?: string
  roundTitle?: string
  followUps?: string[]
  timestamp?: number
}

export type SubAgentConnection = 'idle' | 'connecting' | 'open' | 'closed' | 'error'
export type SubAgentStatus = 'idle' | 'running' | 'done' | 'error'
