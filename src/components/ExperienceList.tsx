import Timeline, { type TimelineItem } from '@components/Timeline'

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  details?: string[]
}

type ExperienceListProps = {
  items: ExperienceItem[]
  title?: string
}

export default function ExperienceList({ items, title = 'Work Experience' }: ExperienceListProps) {
  const timelineItems: TimelineItem[] = items.map((e) => ({
    id: `${e.company}-${e.role}`,
    title: e.role,
    subtitle: `${e.company}${e.location ? ` • ${e.location}` : ''}`,
    period: e.period,
    details: e.details,
  }))

  return <Timeline title={title} items={timelineItems} />
}


