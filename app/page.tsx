import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { Section } from "@/components/section"
import { FeatureList } from "@/components/feature-list"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "IonCure: An AI-First Education Organization",
  description:
    "Empowering Minds & Pioneering AI Innovation since 2020. With IonCure, go from AI anxiety to AI authority.",
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner
          slides={[
            {
              title: "Guidance for Higher Studies in All Disciplines",
              subtitle: "Committed to enabling students and researchers across academic disciplines.",
              cta: { label: "Register Now", href: "/register" },
              imageSrc: "/ioncure-students-and-ai-innovation.png",
              imageAlt: "Students exploring AI innovation with IonCure",
            },
            {
              title: "Path to a Career Abroad",
              subtitle: "Let your dream take flight today!",
              cta: { label: "Explore Careers", href: "/careers-in-europe" },
              imageSrc: "/ioncure-team-banner.png",
              imageAlt: "IonCure team banner",
            },
            {
              title: "Revolutionizing Industries through AI-Driven Innovation",
              subtitle: "Unlock Your Potential now!",
              cta: { label: "Discover AI Innovation", href: "/ai-driven-innovation" },
              imageSrc: "/abstract-ai-sector-visual.png",
              imageAlt: "Abstract visualization of AI transforming industries",
            },
          ]}
        />

        <Section
          title="About IonCure"
          subtitle="AI, education, epilepsy care, and technology—driving real-world impact."
        >
          <div className="grid gap-6 md:gap-8">
            <div className="prose prose-zinc max-w-none">
              <p>
                IonCure is a group of companies led by Dr. Sukant Khurana, working across diverse domains including AI,
                epilepsy care, education, study abroad initiatives, and technology. We combine research, innovation, and
                practical solutions to create real-world impact.
              </p>
              <p>
                Key collaborators include Dr. Brooks Robinson, Prof. Alfredo Ghezzi, and Dr. Ravi Nayar—contributing to
                our mission of driving positive change across sectors.
              </p>
              <p>
                Reach out at{" "}
                <a className="text-primary" href="mailto:contact@ioncurerx.com">
                  contact@ioncurerx.com
                </a>
                .
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-secondary bg-transparent">
                  <Link href="/empowering-futures">Empowering Futures</Link>
                </Button>
                <Button asChild>
                  <Link href="/ai-driven-innovation">AI Innovation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Guidance for Higher Studies">
          <div className="grid md:grid-cols-2 gap-10">
            <FeatureList
              items={[
                "Admissions Guidance across all fields",
                "Conferences, podcasts, live Q&A with experts",
                "Scholarship & Funding resources",
                "Research Proposal Development",
                "Networking & Mentorship with experts and LOR opportunities",
                "Career Pathways across industries",
              ]}
            />
            <div className="grid gap-4">
              <div className="rounded-lg overflow-hidden ring-1 ring-border">
                <img
                  src="/admissions-guidance-workshop.png"
                  alt="Admissions guidance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/brooks-robinson-b2649035"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary underline"
                >
                  Learn More from Dr. Brooks Robinson
                </a>
                <a
                  href="https://cicim.upr.edu/faculty-members/alfredo-ghezzi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary underline"
                >
                  Dr. Alfredo Ghezzi
                </a>
              </div>
              <Button asChild className="w-fit">
                <Link href="/register">Explore your options</Link>
              </Button>
            </div>
          </div>
        </Section>

        <Section
          title="Shape the Future with IonCure"
          subtitle="AI-driven approach to driving innovation across sectors"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Healthcare & Brain Health",
              "Phytopharmaceuticals & Ayurveda",
              "Materials & Chemistry",
              "Engineering & Architecture",
              "Blockchain & Supply Chain",
              "Drones & Robotics",
              "AGI Development",
            ].map((t) => (
              <div key={t} className="border rounded-lg p-5 bg-card">
                <div className="text-foreground font-medium">{t}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/ai-driven-innovation">Discover Our AI Innovation</Link>
            </Button>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
