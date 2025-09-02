import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

function Person({
  name,
  title,
  bio,
  links,
  imageSrc,
  imageAlt,
}: {
  name: string
  title: string
  bio: string
  links?: { label: string; href: string }[]
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="flex items-center gap-4">
        <img
          src={imageSrc ?? "/portrait.png"}
          alt={imageAlt ?? "Team member portrait"}
          className="h-20 w-20 rounded-full ring-1 ring-zinc-200 object-cover bg-zinc-100"
        />
        <div>
          <div className="font-semibold text-zinc-900">{name}</div>
          <div className="text-sm text-zinc-600">{title}</div>
        </div>
      </div>
      <p className="text-sm text-zinc-700 mt-3">{bio}</p>
      {links && (
        <div className="mt-3 flex flex-wrap gap-3">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="text-sm text-red-700 underline">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function OurTeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative">
          <img src="/placeholder-logo.png" alt="" className="w-full h-60 object-contain bg-white" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-white">
              <div className="text-sm">Founder,</div>
              <h1 className="text-3xl md:text-4xl font-semibold">Dr. Sukant Khurana, PhD</h1>
            </div>
          </div>
        </section>

        <Section title="Leadership & Advisors">
          <div className="grid md:grid-cols-2 gap-6">
            <Person
              name="Dr. Sukant Khurana"
              title="Founder & CEO"
              bio="Multidisciplinary researcher and entrepreneur; 15+ years of research; PhD in Neuroscience (UT Austin). Worked with Nobel Laureate Prof. James D. Watson. 17 TED/TEDx talks; mentors 15,000+ students; leads AI-tech ventures at IonCure."
              imageSrc="/sukant-khurana.jpg"
              imageAlt="Team member portrait"
              links={[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/sukant-khurana/" },
                { label: "Medium", href: "https://medium.com/@sukantkhurana" },
                { label: "Google Scholar", href: "https://scholar.google.com/citations?user=LiTpdBYAAAAJ&hl=en" },
                {
                  label: "TED Talk 1",
                  href: "https://www.youtube.com/watch?v=ffBxImJnfrU&pp=ygUOc3VrYW50IGtodXJhbmE%3D",
                },
                {
                  label: "TED Talk 2",
                  href: "https://www.youtube.com/watch?v=NV8kh2OGHqo&pp=ygUOc3VrYW50IGtodXJhbmE%3D",
                },
              ]}
            />
            <Person
              name="Dr. Ravi C. Nayar"
              title="Senior Advisor"
              bio="ENT specialist with leadership roles at St. John’s Medical College and HCG Cancer Hospital. Biomedical innovation, startup co-founder, and academic consulting. Publications on ResearchGate."
              imageSrc="/placeholder-user.jpg"
              imageAlt="Team member portrait"
              links={[{ label: "LinkedIn", href: "https://www.linkedin.com/in/ravi-nayar-8a417a12/" }]}
            />
            <Person
              name="Prof. Alfredo Ghezzi"
              title="Molecular Biologist"
              bio="PhD (UT Austin); postdoc at Brandeis & UT Austin. Research on neurobiological mechanisms of behavior, drug abuse, neuroadaptation, and gene expression."
              imageSrc="/alfredo-ghezzi.jpg"
              imageAlt="Team member portrait"
              links={[{ label: "Profile", href: "https://cicim.upr.edu/faculty-members/alfredo-ghezzi/" }]}
            />
            <Person
              name="Dr. Brooks Robinson"
              title="Neuroscientist, Research Assistant Professor (OHSU)"
              bio="PhD (UT Austin) studying alcohol-related behavior and epigenetics; research on effects of opioids and psychostimulants on neuronal excitability."
              imageSrc="/Brooks%20Robinson.webp"
              imageAlt="Team member portrait"
              links={[{ label: "Profile", href: "https://resilience.uccs.edu/staff/brooks-robinson-phd" }]}
            />
            <Person
              name="Raamesh Gowri Raghavan"
              title="Director"
              bio="15+ years in digital marketing; leads academic programming at India Centre Trust. Background in biochemistry and genetics; multilingual."
              imageSrc="/placeholder-user.jpg"
              imageAlt="Team member portrait"
              links={[{ label: "LinkedIn", href: "https://www.linkedin.com/in/raameshgowriraghavan/" }]}
            />
          </div>
        </Section>

        <Section title="Extended Team">
          <p className="text-sm text-zinc-700">
            Other senior team members—Dr. Karthik, Ms. Zeenat Firdaus, Mr. Arsh Goyal, and Ms. Rittika Dutta—advance
            innovation, research excellence, and impact across our initiatives.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
