type ContactSectionProps = {
  email: string
  subtitle?: string
}

import Button from '@components/Button'

export default function ContactSection({ email, subtitle = 'Interested in working together?' }: ContactSectionProps) {
  return (
    <section id="contact" className="rounded-xl border border-muted bg-surface p-6 shadow-sm transition-all hover:shadow-lg">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">Contact</h3>
      <p className="text-surface-primary mb-4">{subtitle}</p>
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => { window.location.href = `mailto:${email}` }}>
          Email Me
        </Button>
        <Button variant="outline" onClick={() => { window.location.hash = 'projects' }}>
          See Projects
        </Button>
      </div>
    </section>
  )
}


