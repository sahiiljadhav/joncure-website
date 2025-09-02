import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">Connect with IonCure - Across All Inquiries</h1>
              <p className="mt-3 text-zinc-300 max-w-prose">We’re here to help with admissions guidance, AI research collaborations, media, partnerships, and more. Choose an inquiry type and we’ll get back to you.</p>
              <div className="mt-5 flex gap-3">
                <Link href="#contact-form" className="inline-flex">
                  <span className="sr-only">Go to contact form</span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-zinc-800">
              <img src="/placeholder.jpg" alt="Professional and welcoming team imagery" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <Section title="Send us a message">
          <div id="contact-form">
            <ContactForm />
          </div>
        </Section>

        <Section title="Direct Contact Information" subtitle="Reach out to the right team directly if you prefer.">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-700">
            <div>
              <div className="font-medium text-zinc-900">General</div>
              <ul className="mt-2 space-y-1">
                <li>contact@ioncurerx.com</li>
                <li>contact@ioncurex.com</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-zinc-900">Admissions & Jobs</div>
              <ul className="mt-2 space-y-1">
                <li>PhD: phd@ioncurerx.com</li>
                <li>Masters: masters@ioncurerx.com</li>
                <li>Bachelors: bachelors@ioncurerx.com</li>
                <li>Jobs: jobs@ioncurex.com</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-zinc-900">Work With Us</div>
              <ul className="mt-2 space-y-1">
                <li>volunteer@ioncurerx.com</li>
                <li>volunteer@ioncurex.com</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-zinc-900">Social</div>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    className="text-red-700 underline"
                    href="https://in.linkedin.com/company/ioncure"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="text-red-700 underline"
                    href="https://www.facebook.com/p/IonCure-100057245237815/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-red-700 underline"
                    href="https://www.instagram.com/ioncurerx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-red-700 underline"
                    href="https://www.youtube.com/@ioncurerxpvtltd4431"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Visit us" subtitle="If you’d like to meet or mail us.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden ring-1 ring-border">
              <iframe
                title="IonCure Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353159043!3d-37.8162797420141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1614031234567!5m2!1sen!2s"
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <div className="text-sm text-zinc-700">
              <div className="font-medium text-zinc-900">Phone</div>
              <p className="mt-1">(Add applicable phone number)</p>
              <div className="font-medium text-zinc-900 mt-4">Mailing Address</div>
              <p className="mt-1">(Add applicable mailing address)</p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <Link href="/" className="text-primary underline">Return to Homepage</Link>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
