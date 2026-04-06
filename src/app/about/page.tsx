import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BlurFade } from '@/components/BlurFade'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={className}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Ahmed Amer. Co-Founder & CTO at Nexplore Technologies, with 10+ years building scalable software systems across the globe.",
}

export default function About() {
  return (
    <Container className="mt-6 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <BlurFade delay={0.2}>
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Ahmed Amer"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl border border-white/10 bg-zinc-800 object-cover"
              />
            </div>
          </BlurFade>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <BlurFade>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              I&apos;m Ahmed Amer.{' '}
              <span className="text-gradient-static">Builder, engineer, polyglot programmer.</span>
            </h1>
          </BlurFade>

          <div className="mt-6 space-y-7 text-base text-zinc-400">
            <BlurFade delay={0.1}>
              <p>
                I&apos;m a builder by nature and I love building software systems that scale and have
                direct influence in people&apos;s lives. I&apos;ve been coding for 10+ years with around
                8 years of professional experience in startups as well as big corporations. I&apos;m very
                enthusiastic about different programming paradigms and where to put each of them in
                bigger systems.
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p>
                My journey has taken me across continents — from Cairo to Heidelberg, from Palo Alto
                to Vancouver, and to Berlin. At <strong className="text-zinc-200">Amazon Web Services</strong>,
                I was the first member of the IAM Control Plane Platform team, where I built a Proxy-Router
                service that became the first IAM service to achieve 100% automated deployment across
                30+ regions, with P99 latency under 3 milliseconds.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p>
                At <strong className="text-zinc-200">100Worte</strong> in Germany, I helped scale from
                1 product to 7 NLP products in a single year, working with Clojure, temporal databases,
                and Python for data science. The transitional CTO period was one of the most formative
                experiences — leading both data scientists and software engineers to ship innovative
                language analysis tools.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p>
                Most recently, I served as <strong className="text-zinc-200">Staff Software Engineer at Payrails</strong> in
                Berlin, building fintech payment infrastructure. Now, I&apos;m channeling everything I&apos;ve
                learned into <strong className="text-zinc-200">Nexplore Technologies</strong> as Co-Founder & CTO —
                building the next generation of technology solutions.
              </p>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p>
                I studied Computer Science at the <strong className="text-zinc-200">German University in Cairo</strong>,
                graduating with Honors. My thesis on KUKA Robot control interfaces for BMW carbon fiber
                QA was completed in Aachen, Germany, earning an Excellent grade. I also have a background
                in competitive programming — placing 2nd in the ACM GUC contest and qualifying for
                ACM Arab & Middle East regionals.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="lg:pl-20">
          <BlurFade delay={0.6}>
            <ul role="list">
              <SocialLink href="https://github.com/amere" icon={GitHubIcon}>
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ahmed-amer-7a7309152/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ahmedamermousa@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-white/10 pt-8"
              >
                ahmedamermousa@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+201142222513"
                icon={PhoneIcon}
                className="mt-4"
              >
                (+20) 114 222 2513
              </SocialLink>
            </ul>
          </BlurFade>
        </div>
      </div>
    </Container>
  )
}
