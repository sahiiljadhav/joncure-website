import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const COUNTRIES = [
  { name: "Germany", blurb: "Engineering powerhouse, Max Planck Society, Blue Card residency.", href: "#" },
  { name: "France", blurb: "Aerospace, AI, energy. ERC funding, Paris and Grenoble hubs.", href: "#" },
  { name: "United Kingdom", blurb: "Oxford, Cambridge, tech/finance/pharma, Global Talent Visa.", href: "#" },
  { name: "Spain", blurb: "Biotech & renewables, Barcelona & Madrid universities.", href: "#" },
  { name: "Italy", blurb: "Physics, chemistry, automotive research hubs.", href: "#" },
  { name: "Switzerland", blurb: "Novartis, high-paying roles, strong research funding.", href: "#" },
  { name: "Sweden", blurb: "Sustainability & tech leadership, inclusive policies.", href: "#" },
  { name: "Netherlands", blurb: "AI, biotech, knowledge migrant visa.", href: "#" },
]

export default function CareersEuropePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner
          slides={[
            {
              title: "Launch Your STEM Career in Innovative Europe",
              subtitle: "Discover stable academic and industry jobs in top European cities.",
              cta: { label: "Explore Now", href: "#help" },
            },
            {
              title: "Unlock Europe’s Best STEM Jobs with Confidence",
              subtitle: "Get insights on jobs, grants, and residency.",
              cta: { label: "Enquire Now", href: "/contact" },
            },
            {
              title: "Your Path to a Thriving Career Starts Here",
              subtitle: "Let IonCure guide you to stable roles across Europe.",
              cta: { label: "Start Today", href: "/register" },
            },
          ]}
        />

        <Section title="Why Europe?">
          <div className="prose prose-zinc max-w-none">
            <p>
              Europe offers a vibrant ecosystem for STEM PhDs and Post-docs, with world-class universities, cutting-edge
              industries, and generous funding. IonCure helps you find stable, rewarding jobs across Europe’s leading
              innovation hubs with tailored guidance.
            </p>
          </div>
          <div className="mt-6" id="help">
            <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/register">Here’s How We Help</Link>
            </Button>
          </div>
        </Section>

        <Section title="Country Dossiers" subtitle="Download concise guides for each destination">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="border rounded-lg p-5 bg-white">
                <div className="font-semibold text-zinc-900">{c.name}</div>
                <p className="text-sm text-zinc-600 mt-2">{c.blurb}</p>
                <a className="inline-block mt-4 text-sm text-red-700 underline" href={c.href}>
                  Download Dossier
                </a>
              </div>
            ))}
            <div className="border rounded-lg p-5 bg-white">
              <div className="font-semibold text-zinc-900">Other Countries</div>
              <p className="text-sm text-zinc-600 mt-2">
                We also advise for other European countries. Talk to us for a personalized consultancy.
              </p>
              <Link className="inline-block mt-4 text-sm text-red-700 underline" href="/register">
                Sign Up here
              </Link>
            </div>
          </div>
        </Section>

        <Section title="What our dossiers include">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Social and cultural norms",
              "Available grants and funding",
              "Jobs in academia and industry",
              "Residency & citizenship requirements",
            ].map((t) => (
              <div key={t} className="border rounded-lg p-5 bg-white text-sm text-zinc-700">
                {t}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/brooks-robinson-b2649035"
              target="_blank"
              rel="noreferrer"
              className="text-red-700 underline"
            >
              Dr. Brooks Robinson - Click Here
            </a>
            <a
              href="https://cicim.upr.edu/faculty-members/alfredo-ghezzi/"
              target="_blank"
              rel="noreferrer"
              className="text-red-700 underline"
            >
              Dr. Alfredo Ghezzi - Click Here
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
