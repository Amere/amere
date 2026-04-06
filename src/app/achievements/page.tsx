import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { BlurFade } from '@/components/BlurFade'
import { GlowCard } from '@/components/GlowCard'

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    "Ahmed Amer's awards, competitive programming achievements, and notable accomplishments.",
}

const competitiveProgramming = [
  {
    title: '2nd Place — ACM GUC Collegiate Programming Contest',
    year: '2016',
    description:
      'Placed 2nd in the ACM International Collegiate Programming Contest at the German University in Cairo, competing in algorithmic problem-solving under time pressure.',
    icon: '🥈',
  },
  {
    title: 'Qualified — ACM Arab & Middle East Collegiate Programming Contest',
    year: '2017',
    description:
      'Qualified for the regional ACM-ICPC Arab & Middle East contest, competing against top university teams across the region.',
    icon: '🏆',
  },
]

const academicAchievements = [
  {
    title: '1st Place — Luxor Governorate, Egypt',
    year: '2013',
    description:
      'Ranked 1st student over the entire Luxor Governorate with 99% overall score in the General Certificate of Secondary Education (Thanawya Amma).',
    icon: '🏅',
  },
  {
    title: 'Full-Tuition Scholarship — German University in Cairo',
    year: '2013',
    description:
      'Awarded a full-tuition scholarship at the German University in Cairo (GUC) based on outstanding academic performance.',
    icon: '🎓',
  },
  {
    title: 'Graduated with Honors — Computer Science',
    year: '2018',
    description:
      'Completed Bachelor\'s degree in Computer Science at the German University in Cairo with Honors distinction.',
    icon: '✨',
  },
  {
    title: 'Thesis Grade: Excellent',
    year: '2017',
    description:
      'Bachelor\'s thesis at Hexagon Manufacturing Intelligence, Aachen — KUKA Robot IIWA R800 Control Interface for Carbon Fibre QA at BMW. Graded Excellent.',
    icon: '📝',
  },
]

const professionalMilestones = [
  {
    title: 'First IAM Service to 100% Deployment Automation',
    year: '2023',
    description:
      'Built the Proxy-Router service at AWS that became the first IAM service to achieve fully automated deployment pipeline from build to production across 30+ AWS regions.',
    icon: '🚀',
  },
  {
    title: 'Scaled 1 Product → 7 Products in One Year',
    year: '2019',
    description:
      'At 100Worte, helped scale from a single NLP product (that took 6 years to build) into 7 different products within a single year as the team\'s technical leader.',
    icon: '📈',
  },
  {
    title: 'IAM Security Certifier',
    year: '2023',
    description:
      'Became a security certifier for IAM Control Plane services at Amazon Web Services, responsible for security review and approval of service releases.',
    icon: '🔐',
  },
]

function AchievementSection({
  title,
  items,
}: {
  title: string
  items: typeof competitiveProgramming
}) {
  return (
    <div>
      <BlurFade>
        <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
      </BlurFade>
      <div className="mt-6 space-y-4">
        {items.map((item, i) => (
          <BlurFade key={item.title} delay={0.1 * i}>
            <GlowCard>
              <div className="flex gap-4">
                <div className="flex-none text-2xl">{item.icon}</div>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <span
                      className="text-xs text-cyan-400/60 font-mono"
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <Container className="mt-6 sm:mt-16">
      <BlurFade>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-4 text-base text-zinc-400 max-w-2xl">
          From competitive programming contests to leading engineering teams at scale —
          milestones along my journey as a software engineer.
        </p>
      </BlurFade>

      <div className="mt-16 space-y-16">
        <AchievementSection
          title="🏁 Competitive Programming"
          items={competitiveProgramming}
        />
        <AchievementSection
          title="🎯 Professional Milestones"
          items={professionalMilestones}
        />
        <AchievementSection
          title="🎓 Academic Achievements"
          items={academicAchievements}
        />
      </div>
    </Container>
  )
}
