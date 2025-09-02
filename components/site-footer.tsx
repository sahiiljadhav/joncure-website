import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-zinc-900">IonCure</div>
            <p className="text-sm text-zinc-600">Empowering Minds & Pioneering AI Innovation since 2020.</p>
            <p className="text-sm text-zinc-600">contact@ioncurerx.com</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900 mb-2">Explore</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link className="hover:text-red-700" href="/empowering-futures">
                  Empowering Futures
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/careers-in-europe">
                  Careers in Europe
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/ai-driven-innovation">
                  AI-Driven Innovation
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/our-expertise">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/our-team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/fellowships-scholarships">
                  Fellowships/Scholarships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900 mb-2">Support</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link className="hover:text-red-700" href="/register">
                  Register Now
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700" href="/conference">
                  Conference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900 mb-2">Social</div>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  className="hover:text-red-700"
                  href="https://in.linkedin.com/company/ioncure"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-700"
                  href="https://www.facebook.com/p/IonCure-100057245237815/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-700"
                  href="https://www.instagram.com/ioncurerx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-700"
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

        <div className="mt-8 border-t pt-4 text-xs text-zinc-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} IonCure. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-red-700">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
