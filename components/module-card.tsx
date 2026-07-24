import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ModuleCardProps = {
  title: string
  description: string
  href: string
  actionLabel: string
  icon: LucideIcon
  meta: string
  tone?: "blue" | "teal" | "slate"
}

const toneClasses = {
  blue: {
    icon: "bg-brand-blue/10 text-brand-blue",
    accent: "from-brand-blue to-brand-blue-deep",
  },
  teal: {
    icon: "bg-brand-teal/10 text-brand-teal-deep",
    accent: "from-brand-teal to-brand-teal-deep",
  },
  slate: {
    icon: "bg-slate-100 text-slate-600",
    accent: "from-slate-500 to-slate-700",
  },
}

export function ModuleCard({
  title,
  description,
  href,
  actionLabel,
  icon: Icon,
  meta,
  tone = "blue",
}: ModuleCardProps) {
  const toneClass = toneClasses[tone]

  return (
    <Card className="group relative overflow-hidden transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-brand-teal/25 hover:shadow-[0_18px_45px_rgba(23,38,61,0.1)]">
      <div
        aria-hidden="true"
        className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-90", toneClass.accent)}
      />
      <CardHeader className="gap-4 pt-7">
        <div className="flex items-start justify-between gap-4">
          <span className={cn("flex size-12 items-center justify-center rounded-2xl", toneClass.icon)}>
            <Icon className="size-5.5" strokeWidth={1.8} />
          </span>
          <Badge variant="outline" className="border-border/80 bg-muted/40 font-medium text-muted-foreground">
            {meta}
          </Badge>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl tracking-[-0.025em]">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-2">
        <div className="h-px bg-gradient-to-r from-border via-border/70 to-transparent" />
      </CardContent>
      <CardFooter className="pt-3">
        <Button asChild variant="ghost" className="-ml-3 text-brand-blue hover:text-brand-blue-deep">
          <Link href={href}>
            {actionLabel}
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
