import { type LucideIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type MetricCardProps = {
  label: string
  value: string
  detail: string
  icon: LucideIcon
  tone?: "blue" | "teal" | "slate"
}

const toneClasses = {
  blue: "bg-brand-blue/10 text-brand-blue",
  teal: "bg-brand-teal/10 text-brand-teal-deep",
  slate: "bg-slate-100 text-slate-600",
}

export function MetricCard({ label, value, detail, icon: Icon, tone = "blue" }: MetricCardProps) {
  return (
    <Card className="p-5 shadow-[0_8px_24px_rgba(23,38,61,0.045)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-brand-ink">{value}</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
        </div>
        <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", toneClasses[tone])}>
          <Icon className="size-4.5" />
        </span>
      </div>
    </Card>
  )
}
