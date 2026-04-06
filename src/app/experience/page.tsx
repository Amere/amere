import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { BlurFade } from '@/components/BlurFade'
import { GlowCard } from '@/components/GlowCard'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    "Ahmed Amer's professional journey — from AWS and Payrails to founding Nexplore Technologies.",
}

const experiences = [
  {
    company: 'Nexplore Technologies',
    role: 'Co-Founder & CTO',
    type: 'Self-employed',
    period: 'Jul 2025 — Present',
    location: 'Egypt',
    description:
      'Building the next generation of technology solutions. Applying a decade of engineering experience across distributed systems, cloud infrastructure, and product development to create impactful technology.',
    highlights: [],
    tech: [],
    accentColor: 'from-fuchsia-500 to-purple-600',
    dotColor: 'bg-fuchsia-400',
  },
  {
    company: 'Payrails',
    role: 'Staff Software Engineer',
    type: 'Full-time',
    period: 'Apr 2024 — Jun 2025',
    location: 'Berlin, Germany',
    description:
      'Staff engineer building fintech payment infrastructure at scale. Working on core payment orchestration systems handling high-throughput transaction processing.',
    highlights: [],
    tech: [],
    accentColor: 'from-green-500 to-emerald-600',
    dotColor: 'bg-green-400',
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Development Engineer 2',
    type: 'IAM Control Plane Platform',
    period: 'Dec 2022 — Jan 2024',
    location: 'Vancouver, BC, Canada',
    description:
      'First team member of the IAM Control Plane Platform team. Onboarded and scaled the team to 10 members, leading the re-architecture of IAM\'s control plane organization.',
    highlights: [
      'Developed Proxy-Router — the starting point of migrating IAM Control Plane into microservices architecture',
      'First IAM service to reach 100% automation from build to deployment across 30+ regions',
      'Custom thread pooling solution for I/O-heavy proxy workloads with P99 latency < 3ms',
      'Planned and executed performance testing on parallel infrastructure using identical IaC code',
      'Implemented fail-to-disk IP-based throttling preserving state during third-party downtime',
      'Percentage-based traffic cut-over with automatic rollback on fault metrics',
      'Led release of new IAM services behind the Proxy, from penetration testing to operational readiness',
      'Security certifier for IAM Control Plane services',
    ],
    tech: ['Java', 'AWS', 'IaC', 'Performance Testing'],
    accentColor: 'from-cyan-500 to-blue-600',
    dotColor: 'bg-cyan-400',
  },
  {
    company: 'IGCSE Learning Platform',
    role: 'Freelancer — Full Stack Engineer',
    type: 'Learning Management Service',
    period: 'Oct 2020 — Aug 2021',
    location: 'Cairo, Egypt',
    description:
      'Designed and built a full-stack e-learning platform for IGCSE English exam preparation. Single-handedly handled everything from design to deployment with full infrastructure automation.',
    highlights: [
      'Built all IGCSE question types in React: fill-in, MCQ, listening, speaking',
      'Auto-corrected exams with teacher override for speaking questions',
      'Teacher portal for question management, exam scheduling, and student administration',
      'Blue/Green deployment using Terraform + Ansible + Packer. AWS Lambdas, S3, CloudFront',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Terraform', 'Ansible', 'AWS'],
    accentColor: 'from-amber-500 to-orange-600',
    dotColor: 'bg-amber-400',
  },
  {
    company: '100Worte Sprachanalyse GmbH',
    role: 'Software Engineer → Transitional CTO',
    type: 'NLP & Language Analysis',
    period: 'Oct 2018 — Oct 2020',
    location: 'Heidelberg, Germany',
    description:
      'Helped 100Worte scale from 1 product in 6 years of development into 7 different products in a single year. Held the CTO position for ~6 months, leading both data scientists and software engineers.',
    highlights: [
      'Designed and implemented 3 new NLP products: job posting editor, email parser, voice-to-text categorizer',
      'Full migration of jinja2 templates into React SPAs',
      'Audio-to-text tool using Clojure async channels for parallel audio chunk processing',
      'Main maintainer for Datomic temporal database; migrated Datoms & Cassandra entries to JSON',
      'TestDrivenDevelopment achieving ~95% backend test coverage',
      'Rich-text editor with real-time AI-powered word suggestions and complex sentence removal',
    ],
    tech: ['Clojure', 'React', 'Python', 'Datomic', 'Cassandra'],
    accentColor: 'from-violet-500 to-indigo-600',
    dotColor: 'bg-violet-400',
  },
  {
    company: 'Plural.com',
    role: 'Backend Developer',
    type: 'Graph Database & APIs',
    period: 'Apr 2018 — Sep 2018',
    location: 'Palo Alto, California, USA',
    description:
      'Backend engineer focusing on Neo4j graph database optimization and GraphQL API development.',
    highlights: [
      'Main maintainer for Neo4j database — new queries and optimizations',
      'Synchronized PostgreSQL with Neo4j for tables requiring strong consistency',
      'GraphQL implementation for new functionalities and React consumers',
      'Built geometry and location algorithms module used across multiple clients',
    ],
    tech: ['Neo4j', 'PostgreSQL', 'GraphQL', 'React'],
    accentColor: 'from-teal-500 to-cyan-600',
    dotColor: 'bg-teal-400',
  },
  {
    company: 'Apodius GmbH / Hexagon Manufacturing Intelligence',
    role: 'Software Engineering Intern',
    type: 'Robotics & Computer Vision',
    period: 'Feb 2017 — Aug 2017',
    location: 'Aachen, Germany',
    description:
      'Built QA software for BMW Leipzig factory combining robot control interfaces with computer vision for carbon fiber defect detection.',
    highlights: [
      'KUKA Robot IIWA R800 control interface in C# with OO design',
      'Image processing in MATLAB for carbon fiber defect detection from live camera feeds',
      'QA software for BMW Leipzig factory integrating both solutions',
    ],
    tech: ['C#', 'MATLAB', 'Computer Vision', 'Robotics'],
    accentColor: 'from-rose-500 to-pink-600',
    dotColor: 'bg-rose-400',
  },
]

export default function Experience() {
  return (
    <Container className="mt-6 sm:mt-16">
      <BlurFade>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Experience
        </h1>
        <p className="mt-4 text-base text-zinc-400 max-w-2xl">
          A journey across continents and paradigms — from competitive programming in Cairo
          to building AWS infrastructure in Vancouver, NLP products in Heidelberg, fintech in Berlin,
          and now founding my own venture.
        </p>
      </BlurFade>

      <div className="relative mt-16">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent sm:left-[23px]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <BlurFade key={exp.company} delay={0.1 * i}>
              <div className="relative pl-12 sm:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-[15px] top-1.5 h-[11px] w-[11px] rounded-full ${exp.dotColor} ring-4 ring-zinc-900 sm:left-[19px]`}
                />

                <GlowCard>
                  {/* Header */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                      <p className="text-sm text-zinc-300">{exp.role}</p>
                      <p className="text-xs text-zinc-500 font-mono">{exp.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 font-mono">{exp.period}</p>
                      <p className="text-xs text-zinc-600">{exp.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-zinc-500">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-zinc-700" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech badges */}
                  {exp.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </GlowCard>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <BlurFade delay={0.5}>
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-white">Education</h2>
          <div className="mt-8 space-y-6">
            <GlowCard>
              <h3 className="text-lg font-semibold text-white">
                German University in Cairo
              </h3>
              <p className="text-sm text-zinc-300">
                Computer Science, Bachelor&apos;s Degree — Graduated with Honors
              </p>
              <p className="text-xs text-zinc-500 font-mono mt-1">2013 — 2018 · Cairo, Egypt</p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-lg font-semibold text-white">
                Bachelor&apos;s Thesis — Hexagon Manufacturing Intelligence
              </h3>
              <p className="text-sm text-zinc-300">
                KUKA Robot IIWA R800 Control Interface for Carbon Fibre QA at BMW
              </p>
              <p className="text-xs text-zinc-500 font-mono mt-1">2017 · Aachen, Germany · Grade: Excellent</p>
            </GlowCard>
          </div>
        </div>
      </BlurFade>
    </Container>
  )
}
