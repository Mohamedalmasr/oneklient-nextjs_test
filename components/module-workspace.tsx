import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type WorkspaceAction = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  label?: string
  status?: string
}

type ModuleWorkspaceProps = {
  actions: WorkspaceAction[]
}

export function ModuleWorkspace({ actions }: ModuleWorkspaceProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {actions.map((action) => {
        const Icon = action.icon

        return (
          <Card
            key={action.title}
            className={cn(
              "group relative overflow-hidden",
              action.href && "transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-[0_14px_36px_rgba(23,38,61,0.08)]",
            )}
          >
            <CardHeader className="flex min-h-44 flex-row items-start gap-4 space-y-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-lg leading-6">{action.title}</CardTitle>
                  {action.status ? <Badge variant="outline">{action.status}</Badge> : null}
                </div>
                <CardDescription className="mt-2">{action.description}</CardDescription>
                {action.href ? (
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link href={action.href}>
                      {action.label ?? "Open"}
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                ) : (
                  <span className="mt-5 inline-flex text-xs font-semibold text-muted-foreground">
                    Ready for application logic
                  </span>
                )}
              </div>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}
