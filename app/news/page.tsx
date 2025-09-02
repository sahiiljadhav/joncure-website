import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
            <h1 className="text-3xl md:text-4xl font-semibold">News & Insights</h1>
            <p className="text-zinc-300 mt-2">Updates, stories, and perspectives from IonCure.</p>
          </div>
        </section>

        <Section title="Coming Soon" subtitle="We’re preparing articles, announcements, and resources.">
          <div className="rounded-lg border p-6 bg-white">Stay tuned.</div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}


