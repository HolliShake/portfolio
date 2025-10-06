import { ReactNode } from 'react'

type PrivateCardProps = {
  title: string
  description?: string
  href: string
  thumbnailUrl?: string
  note?: ReactNode
}

function getHostnameIconUrl(href: string) {
  try {
    const url = new URL(href)
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`
  } catch {
    return ''
  }
}

export default function PrivateCard({ title, description, href, thumbnailUrl, note }: PrivateCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-surface bg-surface shadow-sm transition hover:shadow-md focus-within:ring-2 ring-surface relative hover-raise">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        {/* Try thumbnail first; if not provided, fallback to a simple branded panel */}
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnailUrl} alt="" loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={getHostnameIconUrl(href)} alt="" className="h-6 w-6 opacity-80" />
            <span className="text-sm text-surface-secondary truncate max-w-[70%]">{href}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] to-transparent"></div>
      </div>
      <div className="p-4 glass-surface glow-border">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-warning text-warning px-2 py-0.5 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--bg-background)]"></span>
            Private
          </span>
          {note ? <span className="text-xs text-surface-muted">{note}</span> : null}
        </div>
        <h3 className="text-lg font-semibold text-foreground neon-text">{title}</h3>
        {description ? <p className="mt-1 text-sm text-surface-secondary">{description}</p> : null}
      </div>
    </div>
  )
}


