import { CheckCircle2 } from "lucide-react"

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-0">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-start gap-1">
          <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5" />
          <span className="text-zinc-800 text-base md:text-lg leading-tight">{it}</span>
        </li>
      ))}
    </ul>
  )
}
