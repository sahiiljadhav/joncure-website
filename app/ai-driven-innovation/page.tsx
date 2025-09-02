import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { Section } from "@/components/section"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AREAS = [
  "Healthcare & Brain Health",
  "Phytopharmaceuticals & Ayurveda Research",
  "Materials & Chemistry",
  "Engineering & Architecture",
  "Blockchain & Supply Chain",
  "Drones & Robotics",
  "AGI Development",
]

export default function AIDrivenInnovationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner
          slides={[
            {
              title: "Synergising Science & Society",
              subtitle: "Shaping the future of healthcare and industry with AI",
              cta: { label: "Let’s Talk Today", href: "/contact" },
            },
            {
              title: "Where Intuition Meets Intelligence",
              subtitle: "Explore IonCure’s AI-driven discovery engine",
              cta: { label: "Contact Us", href: "/contact" },
            },
            {
              title: "Bridging Tradition, Technology and Transcendence",
              subtitle: "Using AI to drive healthier outcomes worldwide",
              cta: { label: "Collaborate Now", href: "/contact" },
            },
          ]}
        />

        <Section title="Focus Areas">
          <div className="grid md:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <div key={a} className="border rounded-lg p-5 bg-white">
                <div className="font-medium text-zinc-900">{a}</div>
                <img src="/abstract-ai-sector-visual.png" alt="" className="mt-4 w-full rounded" />
                <Link href="/our-expertise" className="inline-block mt-4 text-sm text-red-700 underline">
                  Know our Expertise
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">Collaborate with IonCure</Link>
          </Button>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
