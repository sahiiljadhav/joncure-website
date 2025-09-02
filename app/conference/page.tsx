import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import Link from "next/link"

export default function ConferencePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
            <h1 className="text-3xl md:text-4xl font-semibold">Conference</h1>
            <p className="text-zinc-300 mt-2 text-sm md:text-base">We help individuals achieve their dream goals. Reach out to us at: <a href="mailto:contact@ioncurerx.com" className="underline">contact@ioncurerx.com</a>.</p>
          </div>
        </section>

        <Section>
          <div className="border rounded-lg p-6 md:p-8 bg-white text-center">
            <div className="text-zinc-900 text-lg md:text-xl font-semibold">Coming Soon</div>
            <p className="text-sm md:text-base text-zinc-700 mt-2">Conference details will be announced shortly. Stay tuned!</p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
