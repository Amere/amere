import { Container } from '@/components/Container'
import { BlurFade } from '@/components/BlurFade'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-6 sm:pt-16">
      <BlurFade>
        <div className="flex flex-col items-center">
          <p className="text-7xl font-bold text-gradient-static">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Go back home
          </a>
        </div>
      </BlurFade>
    </Container>
  )
}
