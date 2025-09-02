"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Slide = {
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
  imageSrc?: string
  imageAlt?: string
}

export function HeroBanner({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-balance">{slides[index].title}</h1>
          {slides[index].subtitle && <p className="text-muted-foreground text-pretty">{slides[index].subtitle}</p>}
          {slides[index].cta && (
            <Button asChild>
              <Link href={slides[index].cta.href}>{slides[index].cta.label}</Link>
            </Button>
          )}
        </div>
        <div className="rounded-lg overflow-hidden ring-1 ring-border">
          <img
            src={slides[0]?.imageSrc ?? "/placeholder.svg?height=420&width=700&query=Students%20and%20abstract%20AI%20visuals"}
            alt={slides[0]?.imageAlt ?? "Hero visual"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6 flex gap-2 justify-center items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${i === index ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </section>
  )
}
