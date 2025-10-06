import Card from '@components/Card'
import PrivateCard from '@components/PrivateCard'

export type PortfolioItem = {
  title: string
  description?: string
  href?: string
  imageUrl?: string
  private?: boolean
  thumbnailUrl?: string
}

type CardGridProps = {
  items: PortfolioItem[]
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => {
        const delayStyle: React.CSSProperties = { animationDelay: `${Math.min(idx, 8) * 80}ms` }
        const className = 'reveal-hidden will-change-transform'
        return (
          <div key={item.title} className={className} style={delayStyle}>
            {item.private && item.href ? (
              <PrivateCard
                title={item.title}
                description={item.description}
                href={item.href}
                thumbnailUrl={item.thumbnailUrl}
              />
            ) : (
              <Card
                title={item.title}
                description={item.description}
                href={item.href}
                imageUrl={item.imageUrl}
              />
            )}
          </div>
        )
      })}
    </section>
  )
}


