import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s — Ahmed Amer',
    default:
      'Ahmed Amer — Co-Founder & CTO · Software Engineer · System Builder',
  },
  description:
    "I'm Ahmed Amer, a Co-Founder & CTO at Nexplore Technologies with 10+ years of coding experience. I build software systems that scale and have direct influence in people's lives — from AWS IAM to NLP products to fintech platforms.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-full antialiased dark overflow-y-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="flex min-h-full flex-col bg-[#09090b] overflow-x-hidden"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
