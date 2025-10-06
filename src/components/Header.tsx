export interface HeaderProps {
  name: string;
  role: string;
  imageUrl?: string;
  bio?: string;
  location?: string;
  availability?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

import Button from '@components/Button'

export default function Header({ 
  name, 
  role, 
  imageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  bio,
  location,
  availability,
  socialLinks
}: HeaderProps) {
  return (
    <header className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      {/* Top nav */}
      <nav className="mb-6 flex items-center justify-between gap-4" aria-label="Primary">
        <a href="#" className="text-xl font-semibold text-surface-primary hover:text-primary transition-colors">{name}</a>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#about" className="rounded-md px-3 py-1.5 text-surface-primary hover:text-primary transition-colors">About</a>
          <a href="#skills" className="rounded-md px-3 py-1.5 text-surface-primary hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="rounded-md px-3 py-1.5 text-surface-primary hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="rounded-md px-3 py-1.5 text-surface-primary hover:text-primary transition-colors">Contact</a>
        </div>
        <Button onClick={() => { window.location.hash = 'contact' }}>
          Let's talk
        </Button>
      </nav>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Profile Image with Gradient Border */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-success)] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
          <img 
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover ring-4 ring-[var(--bg-background)] transition-transform duration-300 group-hover:scale-105"
          />
          {availability && (
            <div className="absolute -bottom-1 -right-1 px-3 py-1 bg-[var(--bg-success)] text-[var(--text-success)] text-xs font-semibold rounded-full shadow-lg">
              {availability}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-4">
          {/* Name and Role */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-surface-primary)] mb-2 bg-gradient-to-r from-[var(--text-surface-primary)] to-[var(--text-surface-secondary)] bg-clip-text">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-surface-secondary)] font-medium">{role}</p>
          </div>

          {/* Location Badge */}
          {location && (
            <div className="flex items-center gap-2 text-[var(--text-surface-muted)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{location}</span>
            </div>
          )}

          {/* Bio */}
          {bio && (
            <p className="text-[var(--text-surface-primary)] leading-relaxed max-w-3xl text-base sm:text-lg">
              {bio}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={() => { window.location.hash = 'projects' }}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => { window.location.hash = 'contact' }}>
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          {socialLinks && (
            <div className="flex gap-3 pt-2">
              {socialLinks.github && (
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-primary)] text-[var(--text-surface-primary)] transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-primary)] text-[var(--text-surface-primary)] transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-primary)] text-[var(--text-surface-primary)] transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {socialLinks.email && (
                <a 
                  href={`mailto:${socialLinks.email}`}
                  className="p-2 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-primary)] text-[var(--text-surface-primary)] transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}