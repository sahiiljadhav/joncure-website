"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { Section } from "@/components/section"
import { FeatureList } from "@/components/feature-list"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EmpoweringFuturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner
          slides={[
            {
              title: "Open the Doors to Global Education",
              subtitle: "Make an unbeatable academic profile today!",
              cta: { label: "Sign Up Today", href: "/register" },
            },
            {
              title: "Your Path to Elite Global Education",
              subtitle: "Begins with making a profile designed to impress!",
              cta: { label: "Start Now", href: "/register" },
            },
            {
              title: "Help across STEM, Humanities, Arts and Business",
              subtitle: "Study in top countries with an impeccable profile",
              cta: { label: "Register Now", href: "/register" },
            },
          ]}
        />

        <Section>
          <p className="text-sm text-zinc-700">
            Reach us at{" "}
            <a className="text-red-700" href="mailto:contact@ioncurerx.com">
              contact@ioncurerx.com
            </a>
            .{" "}
            <a className="text-red-700 underline" href="#" onClick={(e) => e.preventDefault()}>
              2025 Scholarship Information
            </a>
          </p>
        </Section>

        <Section title="Admissions Guidance">
          <FeatureList
            items={[
              "In-depth application processes",
              "Essay writing workshops per discipline",
              "Interview preparation",
              "University selection strategies",
            ]}
          />
        </Section>

        <Section title="Scholarship & Funding Resources">
          <FeatureList
            items={["Customized list of scholarships and grants", "1:1 guidance on application processes"]}
          />
        </Section>

        <Section title="Interdisciplinary Research Proposal Development">
          <FeatureList
            items={[
              "Workshops on best practices",
              "Resources to draft strong proposals",
              "Mentorship for global collaboration",
            ]}
          />
        </Section>

        <Section title="Networking & Mentorship">
          <FeatureList items={["Access to a diverse expert network", "Mentorship tailored to career paths"]} />
        </Section>

        <Section title="Career Pathways">
          <FeatureList
            items={[
              "Resources for exploring career paths after higher education",
              "Connections to industries and research institutions",
            ]}
          />
          <div className="mt-6">
            <Link href="/register">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Register Now</Button>
            </Link>
          </div>
        </Section>

        <Section title="Learn From Experts">
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
