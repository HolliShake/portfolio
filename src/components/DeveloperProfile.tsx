type DeveloperProfileProps = {
  name: string
  role: string
  location?: string
  summary: string
  links?: { label: string; href: string }[]
}

function LinkIcon({ label, href }: { label: string; href: string }) {
  const key = label.toLowerCase()
  const is = (s: string) => key.includes(s) || href.includes(s)

  if (is('github')) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 00-3.162 19.492c.5.093.682-.217.682-.483 0-.237-.009-.866-.014-1.701-2.776.603-3.362-1.34-3.362-1.34-.454-1.154-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.217-.252-4.55-1.108-4.55-4.936 0-1.09.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.706.115 2.506.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.838-2.337 4.682-4.563 4.93.36.31.68.923.68 1.86 0 1.343-.012 2.427-.012 2.759 0 .268.18.58.688.481A10.002 10.002 0 0012 2z" />
      </svg>
    )
  }
  if (is('linkedin')) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.983 3.5C4.983 4.604 4.09 5.5 2.992 5.5 1.89 5.5 1 4.604 1 3.5 1 2.396 1.89 1.5 2.992 1.5c1.098 0 1.991.896 1.991 2zM1.5 22h3V7.5h-3V22zM8.5 7.5h-3V22h3v-7.5c0-1.989.522-3.5 2.49-3.5 1.968 0 1.99 2.125 1.99 3.625V22h3v-8.625c0-4.125-2.206-6.038-5.156-6.038-2.375 0-3.437 1.313-4.024 2.231h.04V7.5z" />
      </svg>
    )
  }
  if (is('mailto') || is('email')) {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    )
  }
  // globe / website fallback
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  )
}

export default function DeveloperProfile({ name, role, location, summary, links = [] }: DeveloperProfileProps) {
  return (
    <section className="rounded-xl border border-surface bg-surface p-6 shadow-sm glass-surface glow-border">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground neon-text">{name}</h2>
          <p className="text-surface-primary">{role}{location ? ` • ${location}` : ''}</p>
        </div>
        {links.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-surface bg-surface px-3 py-1.5 text-sm font-medium text-surface-primary shadow-sm transition hover:bg-muted hover:shadow-md focus:outline-none focus:ring-2 ring-surface"
              >
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-md bg-primary/15 text-primary">
                  <LinkIcon label={link.label} href={link.href} />
                </span>
                <span>{link.label}</span>
                <svg className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <p className="mt-4 leading-7 text-surface-primary">{summary}</p>
    </section>
  )
}


