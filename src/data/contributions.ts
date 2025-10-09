import type { Contribution } from '@components/ContributionsGrid'

export const contributions: Contribution[] = [
  {
    title: 'awesome-lib: Improve DX and add tests',
    description: 'Refactored API, added types, and increased coverage by 22%.',
    repoUrl: 'https://github.com/example/awesome-lib',
    stars: 124,
    issuesClosed: 8,
    pullRequests: 3,
  },
  {
    title: 'internal-service: Observability overhaul',
    description: 'Introduced tracing and metrics. PR links are private.',
    isPrivate: true,
    pullRequests: 5,
  },
  {
    title: 'docs-site: Accessibility fixes',
    description: 'Contrast, focus states, and landmark roles improved.',
    repoUrl: 'https://github.com/example/docs-site',
    issuesClosed: 6,
  },
]


