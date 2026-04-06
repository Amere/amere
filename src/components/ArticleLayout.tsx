'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { ArticleReactions } from '@/components/ArticleReactions'
import { ViewCounter } from '@/components/ViewCounter'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { usePathname } from 'next/navigation'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let pathname = usePathname()
  let { previousPathname } = useContext(AppContext)
  
  const currentSlug = pathname.split('/').filter(Boolean).pop() || 'unknown'

  return (
    <Container className="mt-6 lg:mt-16">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-cyan-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {article.title}
              </h1>
              <div className="order-first flex items-center font-mono text-sm text-cyan-400/60">
                <time dateTime={article.date} className="flex items-center">
                  <span className="h-4 w-0.5 rounded-full bg-cyan-400/40" />
                  <span className="ml-3 mr-4">{formatDate(article.date)}</span>
                </time>
                <div className="h-1 w-1 rounded-full bg-cyan-400/20 mr-4" />
                <ViewCounter slug={currentSlug} />
              </div>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
            <ArticleReactions slug={currentSlug} />
          </article>
        </div>
      </div>
    </Container>
  )
}
