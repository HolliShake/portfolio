import Timeline, { type TimelineItem } from '@components/Timeline'

export type EducationItem = {
  school: string
  degree: string
  period: string
  location?: string
  details?: string[]
}

type EducationListProps = {
  items: EducationItem[]
  title?: string
}

export default function EducationList({ items, title = 'Education' }: EducationListProps) {
  const timelineItems: TimelineItem[] = items.map((e) => ({
    id: `${e.school}-${e.degree}`,
    title: e.degree,
    subtitle: `${e.school}${e.location ? ` • ${e.location}` : ''}`,
    period: e.period,
    details: e.details,
  }))

  return <Timeline title={title} items={timelineItems} />
}


