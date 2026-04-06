'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]" aria-label="Toggle menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-cyan-400">
          <path d="M4 7h16M4 12h10M4 17h16" />
        </svg>
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl border border-white/10 bg-zinc-900/95 p-8 backdrop-blur-xl duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-cyan-400">
            Explorer
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-white/5 text-base text-zinc-200">
            <MobileNavItem href="/articles">Articles</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
            <MobileNavItem href="/experience">Experience</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li className="flex items-center gap-2">
      <Link
        href={href}
        className={clsx(
          'group relative block px-2 py-2 transition font-mono text-xs uppercase tracking-widest',
          isActive
            ? 'text-cyan-400'
            : 'text-zinc-500 hover:text-zinc-300',
        )}
      >
        <span className="text-zinc-800 mr-1.5 transition-colors group-hover:text-zinc-600">[</span>
        {children}
        <span className="text-zinc-800 ml-1.5 transition-colors group-hover:text-zinc-600">]</span>
        {isActive && (
          <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-2 md:gap-4 px-3 text-sm font-medium">
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/about">About</NavItem>
      </ul>
    </nav>
  )
}

function Avatar() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="pointer-events-auto"
    >
      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 p-0.5 shadow-lg backdrop-blur-xl">
        <Image
          src={avatarImage}
          alt=""
          sizes="2.25rem"
          className="h-9 w-9 rounded-full bg-zinc-800 object-cover grayscale-[0.35] contrast-125 hover:grayscale-0 transition-all duration-500"
          priority
        />
      </div>
    </Link>
  )
}

export function Header() {
  let isHomePage = usePathname() === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'pointer-events-none fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300',
        scrolled && 'bg-zinc-900/80 backdrop-blur-xl border-b border-white/5'
      )}
    >
      <div className="mx-auto w-full max-w-[2500px] px-6 sm:px-8 lg:px-16 xl:px-24 h-full flex items-center justify-between">
        {/* Left: Avatar */}
        <div className="flex flex-1 items-center justify-start pointer-events-auto">
          {(scrolled || !isHomePage) ? <Avatar /> : null}
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center pointer-events-auto">
          <DesktopNavigation />
        </div>

        {/* Right: Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end pointer-events-auto">
          <MobileNavigation className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
