import Link from 'next/link'

import { Container } from '@/components/Container'
import { ParticleBackground } from '@/components/ParticleBackground'
import { AnimatedGradientText } from '@/components/AnimatedGradientText'
import { BlurFade } from '@/components/BlurFade'
import { GlowCard } from '@/components/GlowCard'
import { MeteorShower } from '@/components/MeteorShower'
import { OrbitalCircles } from '@/components/OrbitalCircles'
import { GlowingPlanet } from '@/components/GlowingPlanet'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function SocialLink({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-400/10"
    >
      <Icon className="h-5 w-5 fill-zinc-400 transition group-hover:fill-cyan-400" />
    </a>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      <ParticleBackground />
      <MeteorShower count={6} />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 mx-auto max-w-[2500px]">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text (Takes up 3 columns) */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.1}>
              <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-wider uppercase mb-3 sm:mb-4">
                Co-Founder &amp; CTO · Nexplore Technologies
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight text-white leading-tight">
                Hi, I&apos;m{' '}
                <AnimatedGradientText>Ahmed Amer</AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.35}>
              <p className="mt-4 sm:mt-6 font-mono text-sm sm:text-base text-zinc-400 italic">
                &ldquo;Stateless in the realm of stateful minds&rdquo;
              </p>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-zinc-300 leading-relaxed">
                I&apos;m a builder by nature. I love building software systems that scale and have direct influence
                in people&apos;s lives. 10+ years of coding, from AWS IAM to NLP products to fintech platforms
                — across Egypt, Germany, the US, and Canada.
              </p>
            </BlurFade>

            <BlurFade delay={0.65}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <SocialLink
                  href="https://github.com/amere"
                  icon={GitHubIcon}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/ahmed-amer-7a7309152/"
                  icon={LinkedInIcon}
                  label="LinkedIn"
                />
                <a
                  href="mailto:ahmedamermousa@gmail.com"
                  className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-400/10"
                  aria-label="Email"
                >
                  <MailIcon className="h-5 w-5 text-zinc-400 transition group-hover:text-cyan-400" />
                </a>
                <a
                  href="tel:+201142222513"
                  className="group rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-400/10"
                  aria-label="Phone"
                >
                  <PhoneIcon className="h-5 w-5 text-zinc-400 transition group-hover:text-cyan-400" />
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.8}>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                >
                  View Experience
                  <ArrowRightIcon className="h-4 w-4 stroke-white" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  My Projects
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Planet (Takes up 2 columns, floats right) */}
          <BlurFade delay={1.0} className="hidden lg:flex lg:col-span-2 items-center justify-end">
            <GlowingPlanet color="cyan" />
          </BlurFade>
        </div>
      </div>
    </div>
  )
}

const experienceHighlights = [
  {
    company: 'Nexplore Technologies',
    role: 'Co-Founder & CTO',
    period: '2025 — Present',
    location: 'Egypt',
    highlight: 'Building the next generation of technology solutions.',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    borderColor: 'hover:border-fuchsia-400/30',
  },
  {
    company: 'Payrails',
    role: 'Staff Software Engineer',
    period: 'Apr 2024 — Jun 2025',
    location: 'Berlin, Germany',
    highlight: 'Fintech payments infrastructure at scale.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-400/30',
  },
  {
    company: 'Amazon Web Services',
    role: 'SDE 2 — IAM Services',
    period: 'Dec 2022 — Jan 2024',
    location: 'Vancouver, Canada',
    highlight: 'Built the IAM Control Plane Proxy-Router. First service to reach 100% automation across 30+ regions.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-400/30',
  },
  {
    company: '100Worte',
    role: 'Software Engineer → CTO',
    period: 'Oct 2018 — Oct 2020',
    location: 'Heidelberg, Germany',
    highlight: 'Scaled from 1 product to 7 NLP products in a single year. Led data science & engineering teams.',
    gradient: 'from-violet-500/20 to-indigo-500/20',
    borderColor: 'hover:border-violet-400/30',
  },
]

function ExperienceSection() {
  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <BlurFade>
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white sm:text-3xl">
            Experience
          </h2>
          <Link
            href="/experience"
            className="group flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            View all
            <ArrowRightIcon className="h-4 w-4 stroke-cyan-400 transition group-hover:translate-x-0.5 group-hover:stroke-cyan-300" />
          </Link>
        </div>
      </BlurFade>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2">
        {experienceHighlights.map((exp, i) => (
          <BlurFade key={exp.company} delay={0.1 * i}>
            <GlowCard className={`h-full ${exp.borderColor}`}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br ${exp.gradient} text-xs font-bold text-white`}
                >
                  {exp.company.substring(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{exp.company}</p>
                  <p className="text-xs text-zinc-500 truncate">{exp.role}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{exp.highlight}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-600">
                <span>{exp.period}</span>
                <span>·</span>
                <span>{exp.location}</span>
              </div>
            </GlowCard>
          </BlurFade>
        ))}
      </div>
    </Container>
  )
}

const featuredProjects = [
  {
    name: 'IAM Proxy-Router',
    description:
      'Microservices gateway for AWS IAM Control Plane. P99 latency < 3ms with custom thread pooling. First IAM service with 100% automated deployment across 30+ regions.',
    tech: ['Java', 'AWS', 'IaC'],
    link: null,
    gradient: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    name: 'IGCSE Learning Platform',
    description:
      'Full-stack e-learning system for English IGCSE prep. Auto-graded exams, teacher portal, blue/green deployment with Terraform.',
    tech: ['React', 'Node.js', 'MongoDB', 'Terraform'],
    link: null,
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    name: '100Worte NLP Suite',
    description:
      'Rich-text editor with real-time AI writing suggestions, voice-to-text categorizer, and email sentiment parser. Scaled from 1→7 products.',
    tech: ['Clojure', 'React', 'Python', 'Datomic'],
    link: null,
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    name: 'Codeforces Tools',
    description:
      'Open-source competitive programming toolkit for the Codeforces platform.',
    tech: ['Java'],
    link: 'https://github.com/Amere/codeforces-tools',
    gradient: 'from-orange-500/10 to-amber-500/10',
  },
]

function ProjectsSection() {
  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <BlurFade>
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white sm:text-3xl">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="group flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            View all
            <ArrowRightIcon className="h-4 w-4 stroke-cyan-400 transition group-hover:translate-x-0.5 group-hover:stroke-cyan-300" />
          </Link>
        </div>
      </BlurFade>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <BlurFade key={project.name} delay={0.1 * i}>
            <GlowCard className="h-full">
              <h3 className="text-sm sm:text-base font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-zinc-300"
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
                  className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs text-cyan-400 transition hover:text-cyan-300"
                >
                  View on GitHub
                  <ArrowRightIcon className="h-3 w-3 stroke-cyan-400" />
                </a>
              )}
            </GlowCard>
          </BlurFade>
        ))}
      </div>
    </Container>
  )
}

function TechStackSection() {
  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <BlurFade>
        <h2 className="text-center text-xl sm:text-2xl font-bold text-white sm:text-3xl">
          Tech Stack
        </h2>
        <p className="mt-2 text-center text-xs sm:text-sm text-zinc-500">
          A decade of polyglot engineering across paradigms and platforms
        </p>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="mt-8 sm:mt-12 overflow-hidden">
          <OrbitalCircles />
        </div>
      </BlurFade>
    </Container>
  )
}

function ArticleCard({ article }: { article: ArticleWithSlug }) {
  return (
    <GlowCard>
      <Link href={`/articles/${article.slug}`}>
        <time
          dateTime={article.date}
          className="font-mono text-xs text-cyan-400/60"
        >
          {formatDate(article.date)}
        </time>
        <h3 className="mt-2 text-sm sm:text-base font-semibold text-white transition group-hover:text-cyan-400">
          {article.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {article.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-400">
          Read article
          <ArrowRightIcon className="h-3 w-3 stroke-cyan-400" />
        </span>
      </Link>
    </GlowCard>
  )
}

function ArticlesSection({ articles }: { articles: ArticleWithSlug[] }) {
  if (articles.length === 0) return null

  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <BlurFade>
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white sm:text-3xl">
            Latest Articles
          </h2>
          <Link
            href="/articles"
            className="group flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            View all
            <ArrowRightIcon className="h-4 w-4 stroke-cyan-400 transition group-hover:translate-x-0.5 group-hover:stroke-cyan-300" />
          </Link>
        </div>
      </BlurFade>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <BlurFade key={article.slug} delay={0.1 * i}>
            <ArticleCard article={article} />
          </BlurFade>
        ))}
      </div>
    </Container>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 3)

  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ArticlesSection articles={articles} />
      <div className="h-16 sm:h-24" />
    </>
  )
}
