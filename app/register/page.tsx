import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
            <h1 className="text-3xl md:text-4xl font-semibold">Register with IonCure</h1>
            <p className="text-zinc-300 mt-2">
              Create a profile that shines—across STEM, Humanities, Arts, and Business.
            </p>
          </div>
        </section>
        <Section title="Tell us about yourself">
          <RegisterForm />
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
