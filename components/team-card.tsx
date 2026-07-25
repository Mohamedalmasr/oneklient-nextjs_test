import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, type LucideIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TeamCardProps = {
  title: string
  description: string
  href?: string
  icon?: LucideIcon
}

function TeamCardContent({
  title,
  description,
  icon: Icon = BriefcaseBusiness,
  interactive,
}: TeamCardProps & { interactive: boolean }) {
  return (
    <Card
      className={cn(
        "h-full min-h-48 justify-between overflow-hidden p-6 transition-[transform,box-shadow,border-color] duration-200",
        interactive &&
          "group hover:-translate-y-0.5 hover:border-brand-teal/30 hover:shadow-[0_14px_38px_rgba(23,38,61,0.09)]",
        !interactive && "bg-white/65 shadow-none",
      )}
    >
      <div className="flex items-start">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-xl",
            interactive ? "bg-brand-teal/10 text-brand-teal-deep" : "bg-muted text-muted-foreground",
          )}
        >
          <Icon className="size-5" strokeWidth={1.8} />
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>

      {interactive ? (
        <div className="mt-6 flex min-h-6 items-center justify-end">
          <ArrowRight className="size-4 text-brand-blue transition-transform group-hover:translate-x-1" />
        </div>
      ) : null}
    </Card>
  )
}

export function TeamCard(props: TeamCardProps) {
  if (props.href) {
    return (
      <Link
        href={props.href}
        className="block rounded-xl focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <TeamCardContent {...props} interactive />
      </Link>
    )
  }

  return <TeamCardContent {...props} interactive={false} />
}
