import CardGrid, { type PortfolioItem } from '@components/CardGrid'
import { useReveal } from '@hooks/useReveal'
import DeveloperProfile from '@components/DeveloperProfile'
import ExperienceList, { type ExperienceItem } from '@components/ExperienceList'
import EducationList, { type EducationItem } from '@components/EducationList'
import Header from '@components/Header'
import Skills from '@components/Skills'
import ContactSection from '@components/ContactSection'

const items: PortfolioItem[] = [
  {
    title: 'Client Dashboard (Private)',
    description: 'Embedded preview. Full app is private; thumbnail is a live iframe.',
    href: 'https://example.com',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    private: true,
  },
  {
    title: 'Internal Admin (Private)',
    description: 'Role-based admin with audits. Previewed via sandboxed iframe.',
    href: 'https://developer.mozilla.org',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    private: true,
  },
  {
    title: 'Design System (React + Tailwind)',
    description: 'Composable UI kit with tokens, theming, and accessibility baked-in.',
    href: 'https://example.com/design-system',
    imageUrl: 'https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time metrics, role-based access, and CSV export.',
    href: 'https://example.com/saas-dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551281044-8b63b4219bc5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Type-Safe API Layer',
    description: 'End-to-end typed contracts with input/output validation.',
    href: 'https://example.com/type-safe-api',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Open Source CLI',
    description: 'Scaffolds apps with best practices and sensible defaults.',
    href: 'https://example.com/oss-cli',
    imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Personal Portfolio',
    description: 'Fast, accessible, and content-driven site built with Vite.',
    href: 'https://example.com/portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Blog Platform (MDX)',
    description: 'MDX-based authoring with syntax highlighting and search.',
    href: 'https://example.com/blog-platform',
    imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'PWA: Offline Notes',
    description: 'Installable, offline-first notes app with sync and conflict handling.',
    href: 'https://example.com/pwa-notes',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Testing Toolkit',
    description: 'Test utilities for component and API integration testing.',
    href: 'https://example.com/testing-toolkit',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
  },
]

const experience: ExperienceItem[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    location: 'Remote',
    details: [
      'Led migration to a type-safe React stack with SWC and Vite.',
      'Built design system components and documentation.',
      'Improved performance and accessibility scores across key surfaces.'
    ]
  },
  {
    company: 'Globex',
    role: 'Full-Stack Engineer',
    period: '2021 — 2023',
    location: 'Hybrid',
    details: [
      'Delivered features across Node, Postgres, and React.',
      'Introduced end-to-end validation for API contracts.'
    ]
  }
]

const education: EducationItem[] = [
  {
    school: 'State University',
    degree: 'B.S. Computer Science',
    period: '2017 — 2021',
    location: 'City, Country',
    details: ['Focused on distributed systems and HCI.']
  }
]

function App() {
  useReveal()
  return (
    <>
      <div className="min-h-dvh bg-background text-foreground relative overflow-hidden">
        {/* ambient background layers */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true"></div>
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden="true"></div>
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-soft-light" aria-hidden="true"></div>
        <Header 
          name="Your Name" 
          role="Full-Stack Developer" 
          bio="Building fast, accessible web apps with React, TypeScript, and modern tooling."
        />

        <main className="max-w-6xl mx-auto px-4 pb-16">
          <div id="about" className="mb-8">
            <h2 className="sr-only">Developer Profile</h2>
            <DeveloperProfile
              name="Your Name"
              role="Full-Stack Developer"
              location="Remote / City, Country"
              summary="I design and build thoughtful, performant web applications. My background spans frontend architecture, type-safe APIs, and developer experience. I care deeply about clarity, accessibility, and maintainable systems."
              links={[
                { label: 'GitHub', href: 'https://github.com/' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
                { label: 'Email', href: 'mailto:you@example.com' },
              ]}
            />
          </div>

          {/* Content Column: Experience, Education, Skills */}
          <section className="mt-10 grid grid-cols-1 gap-6" aria-labelledby="experience-education-skills">
            <h2 id="experience-education-skills" className="sr-only">Experience, Education, and Skills</h2>
            <div className="flex flex-col gap-6">
              <ExperienceList items={experience} />
              <EducationList items={education} />
              <div id="skills">
                <Skills skills={[
                  'TypeScript','React','Node.js','PostgreSQL','Tailwind CSS','Vite','Testing','CI/CD','Accessibility'
                ]} />
              </div>
            </div>
          </section>

          {/* Parallax Divider */}
          <section className="mt-14 rounded-2xl overflow-hidden parallax-section">
            <div className="parallax-overlay">
              <div className="max-w-6xl mx-auto px-4 py-16 flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Highlighted Work</h2>
                  <p className="text-surface-secondary mt-2">A selection of shipped projects and experiments.</p>
                </div>
                {/* <a href="#projects" className="hidden sm:inline-block rounded-lg px-4 py-2 bg-primary text-primary font-medium hover:opacity-90 transition-opacity">Jump to Projects</a> */}
              </div>
            </div>
          </section>

          {/* Full-width Projects Section */}
          <section id="projects" className="mt-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Projects</h2>
            {/* Personal (non-private) projects */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-surface-secondary mb-3">Personal</h3>
              <CardGrid items={items.filter((i) => !i.private)} />
            </div>
            {/* Private projects */}
            <div>
              <h3 className="text-lg font-semibold text-surface-secondary mb-3">Private</h3>
              <CardGrid items={items.filter((i) => i.private)} />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-12">
            <ContactSection email="you@example.com" />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
