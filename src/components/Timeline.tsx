export type TimelineItem = {
  id: string
  title: string
  subtitle?: string
  period?: string
  details?: string[]
}

type TimelineProps = {
  items: TimelineItem[]
  title?: string
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <section className="rounded-xl border border-muted bg-surface p-6 shadow-sm transition-all hover:shadow-lg relative overflow-hidden" role="region" aria-label={title ?? 'Timeline'}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,136,255,0.06)] to-transparent opacity-60"></div>
      {title ? (
        <h3 className="mb-8 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
      ) : null}
      <div className="relative space-y-14 pl-16" role="list">
        {items.map((item, index) => (
          <div key={item.id} className="group relative" role="listitem" tabIndex={0}>
            {/* dashed line connecting items */}
            {index < items.length - 1 && (
              <div className="absolute left-[-11px] top-6 bottom-[-56px] w-0 border-l-2 border-dashed border-primary/30" aria-hidden="true" />
            )}
            
            {/* marker */}
            <div 
              className="absolute -left-[21px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-surface bg-primary shadow-md ring-4 ring-surface transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:ring-primary/20 animate-pulse-glow" 
              aria-hidden="true"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-background transition-all duration-300 group-hover:h-2 group-hover:w-2" />
            </div>
            
            <div className="flex flex-col ms-4 gap-3 rounded-xl border border-transparent p-5 transition-all duration-300 sm:flex-row sm:items-start sm:justify-between sm:gap-4 glass-surface glow-border hover-raise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              <div className="pointer-events-none absolute -left-1 top-3 h-10 w-[2px] bg-gradient-to-b from-[var(--bg-primary)]/70 to-transparent opacity-70 rounded-full" aria-hidden="true"></div>
              <div className="flex-1 space-y-2">
                <h4 className="text-lg font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h4>
                {item.subtitle ? (
                  <p className="text-sm font-medium text-surface-secondary">{item.subtitle}</p>
                ) : null}
              </div>
              {item.period ? (
                <div className="mt-1 sm:mt-0 flex items-center gap-2 rounded-md border border-dashed border-muted bg-surface/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground transition-all duration-200 group-hover:border-primary/50 group-hover:bg-surface group-hover:text-surface-secondary sm:text-sm sm:px-4 sm:py-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.period}</span>
                </div>
              ) : null}
            </div>
            
            {item.details && item.details.length > 0 ? (
              <ul className="mt-4 space-y-2 pl-3">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-surface-primary transition-colors duration-200 hover:text-foreground">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform duration-200 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
