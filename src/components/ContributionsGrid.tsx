import ContributionCard from '@components/ContributionCard'

export type Contribution = {
  title: string
  description?: string
  repoUrl?: string
  stars?: number
  issuesClosed?: number
  pullRequests?: number
  isPrivate?: boolean
}

export default function ContributionsGrid({ items }: { items: Contribution[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((c) => (
        <ContributionCard key={`${c.title}-${c.repoUrl ?? 'local'}`} {...c} />
      ))}
    </section>
  )
}


