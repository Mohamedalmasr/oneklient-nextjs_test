import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight, House } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
  label: string
  href?: string
}

type PageHeadingProps = {
  title: string
  description?: string
  eyebrow?: string
  badge?: string
  breadcrumbs?: BreadcrumbItem[]
  action?: ReactNode
  className?: string
}

export function PageHeading({
  title,
  description,
  eyebrow,
  badge,
  breadcrumbs,
  action,
  className,
}: PageHeadingProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {breadcrumbs?.length ? (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Link
            href="/"
            aria-label="Home"
            className="rounded-md p-1 transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:outline-none"
          >
            <House className="size-3.5" />
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1.5">
              <ChevronRight className="size-3.5 shrink-0 text-border" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="truncate rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="truncate text-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {eyebrow ? (
              <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">
                {eyebrow}
              </p>
            ) : null}
            {badge ? <Badge variant="teal">{badge}</Badge> : null}
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-[-0.035em] text-brand-ink sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  )
}
