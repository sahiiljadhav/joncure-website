import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { Section } from "@/components/section"

function RegionCard({ title, items }: { title: string; items: { name: string; note: string }[] }) {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="font-semibold text-zinc-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-700">
        {items.map((it, idx) => (
          <li key={idx}>
            <div className="font-medium">{it.name}</div>
            <div className="text-zinc-600">{it.note}</div>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-block mt-3 text-sm text-red-700 underline">
        Download Complete list
      </a>
    </div>
  )
}

export default function FellowshipsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner
          slides={[
            {
              title: "Launch Your STEM Career with Top Fellowships/Scholarships",
              subtitle: "Discover opportunities across disciplines and countries.",
              cta: { label: "Explore Now", href: "/register" },
            },
            {
              title: "Fund Your Masters, PhD, and Post-Doc",
              subtitle: "Get insights to secure competitive funding.",
              cta: { label: "Enquire Now", href: "/contact" },
            },
          ]}
        />

        <Section>
          <p className="text-sm text-zinc-700">
            We support applications across Europe, North America, GCC, Japan, South Korea, and Singapore. Other
            resources:{" "}
            <a className="text-red-700 underline" href="https://daadscholarship.com/" target="_blank" rel="noreferrer">
              daadscholarship.com
            </a>
            ,{" "}
            <a className="text-red-700 underline" href="http://scholaridea.com/" target="_blank" rel="noreferrer">
              scholaridea.com
            </a>
            ,{" "}
            <a className="text-red-700 underline" href="http://scholarshipdb.net/" target="_blank" rel="noreferrer">
              scholarshipdb.net
            </a>
            .
          </p>
        </Section>

        <Section title="Featured Regions">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RegionCard
              title="Germany"
              items={[
                { name: "DAAD EPOS", note: "≈€1,200/mo + travel & insurance" },
                { name: "DKFZ International PhD Program", note: "Fully funded cancer biology" },
                { name: "Heisenberg Programme (DFG)", note: "Support for junior faculty/postdocs" },
              ]}
            />
            <RegionCard
              title="France"
              items={[
                { name: "Eiffel Excellence Scholarship", note: "For international doctoral candidates" },
                { name: "INSPIRE Fellowship (USPC)", note: "Fully funded 3-year contract" },
                { name: "BIENVENÜE (MSCA)", note: "75 international postdocs in Brittany" },
              ]}
            />
            <RegionCard
              title="United Kingdom"
              items={[
                { name: "Gates Cambridge", note: "Full tuition + stipend" },
                { name: "Warwick Chancellor’s", note: "Covers fees + stipend" },
                { name: "Royal Society URF", note: "Early-career natural sciences" },
              ]}
            />
            <RegionCard
              title="USA"
              items={[
                { name: "Fulbright Foreign Student Program", note: "Graduate study/research; stipend" },
                { name: "IBM PhD Fellowship", note: "2 years tuition + stipend" },
                { name: "Faculty for the Future", note: "Women in STEM PhD/Postdoc" },
              ]}
            />
            <RegionCard
              title="Italy"
              items={[
                { name: "Scuola Normale Superiore PhD", note: "Fully funded, accommodation + stipend" },
                { name: "UNIPhD (MSCA-COFUND)", note: "50 fellowships; competitive salary" },
                { name: "FUV Postdoctoral Fellowships", note: "Up to €33,000/year" },
              ]}
            />
            <RegionCard
              title="Switzerland"
              items={[
                { name: "Swiss Government Excellence", note: "CHF 1,920–3,500/mo + benefits" },
                { name: "ETH4D Doctoral Mentorship", note: "Up to CHF 15,000 grant" },
                { name: "SNSF Postdoctoral Fellowships", note: "Salary + research funding" },
              ]}
            />
            <RegionCard
              title="Sweden"
              items={[
                { name: "Government Excellence Scholarships", note: "PhD employment model" },
                { name: "OWSD PhD Fellowships", note: "Women in developing countries" },
                { name: "STINT International Postdoc", note: "SEK 1,000,000 for 12+ months" },
              ]}
            />
            <RegionCard
              title="Netherlands"
              items={[
                { name: "NWO-Funded PhD Positions", note: "Salary + benefits" },
                { name: "ISS PhD Fellowships", note: "Development Studies" },
                { name: "NIAS Fellowships (KNAW)", note: "Humanities & Social Sciences" },
              ]}
            />
            <RegionCard
              title="Other Countries"
              items={[
                { name: "UAEU PhD Fellowship", note: "Full tuition, stipend, insurance" },
                { name: "Takeda Science Foundation", note: "For medical/PhD researchers in Japan" },
                { name: "AI Singapore PhD Fellowship", note: "Up to SGD 6,700/mo + tuition" },
              ]}
            />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
