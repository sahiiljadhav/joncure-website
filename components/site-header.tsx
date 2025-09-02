"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/empowering-futures", label: "Empowering Futures" },
  { href: "/careers-in-europe", label: "Careers in Europe" },
  { href: "/ai-driven-innovation", label: "AI-Driven Innovation" },
]

const ABOUT_LINKS = [
  { href: "/our-expertise", label: "Our Expertise" },
  { href: "/our-team", label: "Our Team" },
  { href: "/news", label: "News & Insights" },
]

const SUPPORT_LINKS = [
  { href: "/register", label: "Register Now" },
  { href: "/contact", label: "Contact Us" },
  { href: "/fellowships-scholarships", label: "Top Fellowships/Scholarships" },
  { href: "/conference", label: "Conference" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="IonCure Home">
            {/* User requested to embed the logo with Source URL directly */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Ioncure-removebg-preview-zp1D0j9BGS5ESBJAhYeRns12zLvR1h.png"
              alt="IonCure"
              className="h-8 w-auto"
            />
            <span className="sr-only">IonCure</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-700 hover:text-red-700">
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="text-sm font-medium text-zinc-700 hover:text-red-700">About</button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute right-0 mt-3 w-64 rounded-md border bg-white shadow-lg p-2">
                {ABOUT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="text-sm font-medium text-zinc-700 hover:text-red-700">Support</button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute right-0 mt-3 w-72 rounded-md border bg-white shadow-lg p-2">
                {SUPPORT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/register">Register</Link>
            </Button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border text-zinc-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden border-t bg-white", open ? "block" : "hidden")}>
        <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm py-2 font-medium text-zinc-800">
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <div className="text-xs uppercase text-zinc-500">About</div>
            <div className="grid">
              {ABOUT_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm py-2 text-zinc-800">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xs uppercase text-zinc-500">Support</div>
            <div className="grid">
              {SUPPORT_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm py-2 text-zinc-800">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
