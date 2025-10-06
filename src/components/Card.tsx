import { ReactNode } from 'react'

type CardProps = {
  title: string
  description?: string
  href?: string
  imageUrl?: string
  children?: ReactNode
}

export default function Card({ title, description, href, imageUrl, children }: CardProps) {
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
      className="group block overflow-hidden rounded-xl border border-surface bg-surface shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 ring-surface relative hover-raise interactive-tilt"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[var(--bg-primary)]/20 via-transparent to-[var(--bg-success)]/20 blur-md"></div>
      </div>
      {imageUrl ? (
        <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="" loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
        </div>
      ) : null}

      <div className="p-4 glass-surface glow-border">
        <h3 className="text-lg font-semibold text-foreground neon-text">{title}</h3>
        {description ? <p className="mt-1 text-sm text-surface-secondary">{description}</p> : null}
        {children ? <div className="mt-3 text-sm text-surface-primary">{children}</div> : null}
        {href ? (
          <div className="mt-3 inline-flex items-center gap-1 text-xs text-surface-muted">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
            <span>Open</span>
          </div>
        ) : null}
      </div>
    </Wrapper>
  )
}


