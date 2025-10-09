type SkillsProps = {
  title?: string
  // Support both flat and grouped inputs for backward compatibility
  skills: string[] | { label: string; skills: string[] }[]
}

export default function Skills({ title = 'Skills', skills }: SkillsProps) {
  const grouped = Array.isArray(skills) && typeof skills[0] === 'string'
    ? [{ label: 'Skills', skills: skills as string[] }]
    : (skills as { label: string; skills: string[] }[])

  return (
    <section id="skills" className="group relative rounded-2xl border border-muted bg-surface p-6 shadow-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,136,255,0.15)] glow-border">
      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"></div>
      
      {/* Glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true"></div>
      
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-2xl font-bold tracking-tight text-transparent">{title}</h3>
        <div className="space-y-4">
          {grouped.map((group) => (
            <div key={group.label} className="group/item">
              <div className="mb-2 flex items-center gap-2">
                <div className="text-xs font-bold uppercase tracking-widest text-surface-secondary">{group.label}</div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="group/skill relative inline-flex items-center overflow-hidden rounded-lg border border-muted bg-gradient-to-br from-background/50 to-background/30 px-3 py-1.5 text-sm font-medium text-surface-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-[0_0_20px_rgba(0,136,255,0.3)] hover:text-foreground"
                  >
                    {/* Shimmer effect on hover */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-700 group-hover/skill:translate-x-full" aria-hidden="true"></span>
                    <span className="relative z-10">{s}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
