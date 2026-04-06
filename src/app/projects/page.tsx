import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BlurFade } from '@/components/BlurFade'
import { GlowCard } from '@/components/GlowCard'

const projects = [
  {
    name: 'IAM Proxy-Router',
    description:
      'Microservices gateway for AWS IAM Control Plane. Custom thread pooling for I/O-heavy workloads achieving P99 latency under 3 milliseconds. First IAM service to reach 100% automated build-to-deployment pipeline across 30+ AWS regions. Includes fail-to-disk IP-based throttling and percentage-based traffic cut-over with automatic rollback.',
    tech: ['Java', 'AWS', 'IaC', 'Performance Testing'],
    link: null,
    type: 'proprietary',
  },
  {
    name: 'IGCSE Learning Platform',
    description:
      'Full-stack e-learning platform for English IGCSE exam preparation. Features auto-graded exams (MCQ, fill-in, listening), teacher portal for question management and student administration, and real-time quiz scheduling. Infrastructure fully automated with Terraform, blue/green deployment with Ansible and Packer.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Terraform', 'Ansible', 'AWS Lambda', 'S3', 'CloudFront'],
    link: null,
    type: 'freelance',
  },
  {
    name: '100Worte NLP Product Suite',
    description:
      'Suite of 7 NLP products including a rich-text editor with real-time AI-powered word suggestions and complex sentence removal, a voice-to-text categorizer using Clojure async channels for parallel audio processing, a customer-satisfaction email parser, and a job posting optimizer. Parallel HTML DOM for in-editor interactions.',
    tech: ['Clojure', 'React', 'Python', 'Datomic', 'Cassandra'],
    link: null,
    type: 'proprietary',
  },
  {
    name: 'Plural.com Backend',
    description:
      'Backend systems for Plural.com including Neo4j graph database optimization, PostgreSQL-to-Neo4j synchronization for strong consistency requirements, GraphQL API layer, and reusable geometry/location algorithms module used across multiple client applications.',
    tech: ['Neo4j', 'PostgreSQL', 'GraphQL', 'React', 'Node.js'],
    link: null,
    type: 'proprietary',
  },
  {
    name: 'BMW Carbon Fiber QA System',
    description:
      'Quality assurance software for BMW Leipzig factory combining KUKA Robot IIWA R800 control interface (C#) with MATLAB-based image processing for detecting deficiencies in carbon fiber car parts from live camera frames.',
    tech: ['C#', 'MATLAB', 'Computer Vision', 'KUKA Robotics'],
    link: null,
    type: 'research',
  },
  {
    name: 'Codeforces Tools',
    description:
      'Open-source competitive programming toolkit for the Codeforces platform. Provides an advanced experience for competitive programmers managing their practice and contest participation.',
    tech: ['Java'],
    link: 'https://github.com/Amere/codeforces-tools',
    type: 'open-source',
  },
  {
    name: 'YuGiOh Card Game',
    description:
      'Pure Java-based implementation of the Yu-Gi-Oh card game with game mechanics, card database, and player interaction system.',
    tech: ['Java'],
    link: 'https://github.com/Amere/YuGiOh',
    type: 'open-source',
  },
  {
    name: 'Airline Reservation System',
    description:
      'Full reservation booking system for airline management with seat allocation and booking flow.',
    tech: ['JavaScript'],
    link: 'https://github.com/Amere/AirlineReservationSystem',
    type: 'open-source',
  },
]

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const typeLabels: Record<string, { label: string; color: string }> = {
  'proprietary': { label: 'Proprietary', color: 'text-violet-400 border-violet-400/30' },
  'open-source': { label: 'Open Source', color: 'text-green-400 border-green-400/30' },
  'freelance': { label: 'Freelance', color: 'text-amber-400 border-amber-400/30' },
  'research': { label: 'Research', color: 'text-cyan-400 border-cyan-400/30' },
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Projects I've built — from AWS infrastructure and NLP products to competitive programming tools.",
}

export default function Projects() {
  return (
    <Container className="mt-6 sm:mt-16">
      <BlurFade>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-base text-zinc-400 max-w-2xl">
          Things I&apos;ve built across a decade of engineering — from cloud infrastructure and
          NLP products to robotics and competitive programming tools. Many are proprietary,
          but the open-source ones are linked.
        </p>
      </BlurFade>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <BlurFade key={project.name} delay={0.08 * i}>
            <GlowCard className="h-full flex flex-col">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-white">
                  {project.name}
                </h2>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-mono ${typeLabels[project.type].color}`}
                >
                  {typeLabels[project.type].label}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>View on GitHub</span>
                  <ArrowIcon className="h-3 w-3 stroke-cyan-400" />
                </a>
              )}
            </GlowCard>
          </BlurFade>
        ))}
      </div>
    </Container>
  )
}
