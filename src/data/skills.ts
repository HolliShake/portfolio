export type SkillGroup = {
  label: string
  skills: string[]
}

const skills: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      'TypeScript','JavaScript','Python','Java','C#','C','Go','Dart','Php','SQL','HTML','CSS'
    ],
  },
  {
    label: 'Frontend',
    skills: [
      'React','Next.js','Vue.js','Redux','Zustand','React Query','Tailwind CSS','CSS Modules','Sass/SCSS','styled-components','shadcn/ui','Vite','Webpack'
    ],
  },
  {
    label: 'Backend',
    skills: [
      'Node.js','ElysiaJS','NestJS','FastAPI','Django','Flask','ASP.NET Core','REST APIs','SignalR','WebSockets'
    ],
  },
  {
    label: 'Databases',
    skills: [
      'MySQL','MsSQL','SQLite'
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      'Docker/Compose','CI/CD','GitHub Actions','Linux','Bash/Shell Scripting','Git'
    ],
  },
  {
    label: 'Testing & Quality',
    skills: [
      'ESLint','Prettier'
    ],
  },
  {
    label: 'Methodologies & Practices',
    skills: [
      'Design Patterns','Clean Architecture','PWA','Responsive Design','Mobile-First Design'
    ],
  },
  {
    label: 'Other',
    skills: [
      'Storybook','OpenAPI/Swagger','OAuth/JWT','OrvalJS rest client generator','NSwag rest client generator'
    ],
  },
]

export default skills;