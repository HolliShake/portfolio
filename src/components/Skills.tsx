type SkillsProps = {
  title?: string
  skills: string[]
}

export default function Skills({ title = 'Skills', skills }: SkillsProps) {
  return (
    <section id="skills" className="rounded-xl border border-muted bg-surface p-6 shadow-sm transition-all hover:shadow-lg">
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-full border border-primary/30 bg-background/30 px-3 py-1 text-sm text-surface-primary shadow-sm hover:border-primary hover:text-foreground transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}


