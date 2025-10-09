type Contribution = {
  title: string
  description?: string
  repoUrl?: string
  stars?: number
  issuesClosed?: number
  pullRequests?: number
  isPrivate?: boolean
}

type ContributionCardProps = Contribution

export default function ContributionCard({ title, description, repoUrl, stars, issuesClosed, pullRequests, isPrivate }: ContributionCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-surface bg-surface shadow-sm transition hover:shadow-md focus-within:ring-2 ring-surface relative hover-raise">
      <div className="p-4 glass-surface glow-border">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-foreground neon-text line-clamp-2">{title}</h3>
          {isPrivate ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-warning text-warning px-2 py-0.5 text-xs font-semibold shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--bg-background)]"></span>
              Private
            </span>
          ) : null}
        </div>
        {description ? <p className="text-sm text-surface-secondary mb-3 line-clamp-3">{description}</p> : null}

        <div className="flex items-center gap-4 text-xs text-surface-muted">
          {typeof stars === 'number' ? (
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              {stars}
            </span>
          ) : null}
          {typeof issuesClosed === 'number' ? (
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              {issuesClosed}
            </span>
          ) : null}
          {typeof pullRequests === 'number' ? (
            <span className="inline-flex items-center gap-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 3.13a4 4 0 010 7.75"/><path d="M2 12h8"/><path d="M5 9l-3 3 3 3"/></svg>
              {pullRequests}
            </span>
          ) : null}
        </div>

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs text-surface-primary hover:text-primary transition"
          >
            View repository
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  )
}


