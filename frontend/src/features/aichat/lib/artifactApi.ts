import { API_CONFIG } from '@/osint/config/api'
import { getOsintAccessToken } from '@/osint/auth'

function apiUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${API_CONFIG.baseUrl}${p}`
}

/** Extract artifact resource id from preview URL or raw id. */
export function extractArtifactResourceId(urlOrId: string): string {
  if (!urlOrId) return ''
  const bare = urlOrId.split('#')[0]
  const match = bare.match(/\/artifacts\/([^/?]+)\/preview/)
  if (match?.[1]) return decodeURIComponent(match[1])
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(bare)) {
    return bare
  }
  return bare
}

export function resolveArtifactDownloadUrl(resourceId: string): string {
  if (!resourceId) return ''
  const base = apiUrl(`/artifacts/${encodeURIComponent(resourceId)}/download`)
  const token = getOsintAccessToken()
  if (!token) return base
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}token=${encodeURIComponent(token)}`
}

export function resolveReportPreviewUrl(urlOrId: string): string {
  if (!urlOrId) return ''
  if (urlOrId.startsWith('http') || urlOrId.startsWith('/')) return urlOrId
  const base = apiUrl(`/artifacts/${encodeURIComponent(urlOrId)}/preview`)
  const token = getOsintAccessToken()
  if (!token) return base
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}token=${encodeURIComponent(token)}`
}
