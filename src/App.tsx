import CardGrid from '@components/CardGrid'
import { useReveal } from '@hooks/useReveal'
import DeveloperProfile from '@components/DeveloperProfile'
import ExperienceList from '@components/ExperienceList'
import EducationList from '@components/EducationList'
import Header from '@components/Header'
import Skills from '@components/Skills'
import ContactSection from '@components/ContactSection'
import ContributionsGrid from '@components/ContributionsGrid'
import { profile, projects, contributions, experience, education } from '@data/index'


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
          name={profile.name}
          role={profile.role}
          bio={profile.bio}
        />

        <main className="max-w-6xl mx-auto px-4 pb-16">
          <div id="about" className="mb-8">
            <h2 className="sr-only">Developer Profile</h2>
            <DeveloperProfile
              name={profile.name}
              role={profile.role}
              location={profile.location}
              summary="I design and build thoughtful, performant web applications. My background spans frontend architecture, type-safe APIs, and developer experience. I care deeply about clarity, accessibility, and maintainable systems."
              links={profile.links}
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
              <CardGrid items={projects.filter((i) => !i.private)} />
            </div>
            {/* Private projects */}
            <div>
              <h3 className="text-lg font-semibold text-surface-secondary mb-3">Private</h3>
              <CardGrid items={projects.filter((i) => i.private)} />
            </div>
          </section>

          {/* Contributions */}
          <section id="contributions" className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contributions</h2>
            <ContributionsGrid items={contributions} />
          </section>

          {/* Contact */}
          <section id="contact" className="mt-12">
            <ContactSection email={profile.links.find(link => link.label === 'Email')?.href.replace('mailto:', '') || 'you@example.com'} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
