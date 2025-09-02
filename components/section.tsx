import type { ReactNode } from "react"

export function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">{title}</h2>
            {subtitle && <p className="text-zinc-600 mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
