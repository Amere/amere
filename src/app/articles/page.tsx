import { type Metadata } from 'next'

import { BlurFade } from '@/components/BlurFade'
import { GlowCard } from '@/components/GlowCard'
import { Container } from '@/components/Container'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

function Article({ article, index }: { article: ArticleWithSlug; index: number }) {
  return (
    <BlurFade delay={0.08 * index}>
      <article>
        <GlowCard>
          <Link href={`/articles/${article.slug}`}>
            <time
              dateTime={article.date}
              className="font-mono text-xs text-cyan-400/60"
            >
              {formatDate(article.date)}
            </time>
            <h3 className="mt-2 text-base font-semibold text-white">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              {article.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-400">
              Read article →
            </span>
          </Link>
        </GlowCard>
      </article>
    </BlurFade>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on distributed systems, functional programming, cloud architecture, and building software at scale.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <Container className="mt-6 sm:mt-16">
      <BlurFade>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Articles
        </h1>
        <p className="mt-4 text-base text-zinc-400 max-w-2xl">
          Thoughts on distributed systems, functional programming, cloud architecture,
          and building software that scales — collected from years of building across
          different paradigms and platforms.
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Article key={article.slug} article={article} index={i} />
        ))}
      </div>
    </Container>
  )
}
