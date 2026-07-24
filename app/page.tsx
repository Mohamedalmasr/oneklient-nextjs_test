import {
  Building2,
  Calculator,
  ContactRound,
  Files,
  FolderKanban,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { ModuleCard } from "@/components/module-card"
import { PageHeading } from "@/components/page-heading"
import { TeamCard } from "@/components/team-card"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const modules = [
  {
    title: "CRM",
    description: "Manage customer records, services, account onboarding, and client documents from one workspace.",
    href: "/crm",
    actionLabel: "Open CRM module",
    icon: ContactRound,
    meta: "Clients",
    tone: "blue" as const,
  },
  {
    title: "Accounting",
    description: "Keep financial workflows organized with a focused dashboard ready for transactions, invoices, and reports.",
    href: "/accounting",
    actionLabel: "Go to Accounting",
    icon: Calculator,
    meta: "Finance",
    tone: "teal" as const,
  },
  {
    title: "Documents",
    description: "Control files, folders, naming rules, retention settings, keywords, and uploads in a central library.",
    href: "/documents",
    actionLabel: "Open Documents center",
    icon: Files,
    meta: "Library",
    tone: "slate" as const,
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <PageHeading title="Home" breadcrumbs={[{ label: "Home" }]} />

      <section className="relative mt-7 overflow-hidden rounded-2xl border bg-white shadow-[0_16px_48px_rgba(23,38,61,0.07)]">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,165,165,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(7,89,174,0.1),transparent_38%)]" />
        <div aria-hidden="true" className="absolute -top-16 -right-16 size-48 rounded-full border-[28px] border-brand-teal/5" />
        <div className="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="teal">
                <Sparkles />
                Portal overview
              </Badge>
              <Badge variant="outline" className="bg-white/70 text-muted-foreground">
                Account 813786944
              </Badge>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-[-0.045em] text-brand-ink sm:text-4xl">
              Welcome, Lenzi.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Pick a module to get started. Your customer, accounting, document, and team workspaces are organized below.
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[320px] lg:grid-cols-1">
            <div className="flex items-center gap-3 rounded-xl border border-brand-blue/10 bg-white/75 p-3.5 backdrop-blur-sm">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Secure portal</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Centralized module access</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-brand-teal/10 bg-white/75 p-3.5 backdrop-blur-sm">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal-deep">
                <UsersRound className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Team ready</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Members, roles, and workspaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="modules-heading">
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">Workspace</p>
            <h2 id="modules-heading" className="mt-1 text-2xl font-bold tracking-[-0.035em]">
              Business modules
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Choose a workspace to continue.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="teams-heading">
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">Organization</p>
            <h2 id="teams-heading" className="mt-1 text-2xl font-bold tracking-[-0.035em]">
              Teams
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Manage members &amp; roles</p>
        </div>

        <Card className="border-dashed bg-white/50 p-4 shadow-none sm:p-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <TeamCard
              title="Real Estate Brokerage"
              description="Coordinate agents, active files, brokerage services, and transaction reporting."
              href="/teams/real-estate"
              status="Active"
              members={8}
              icon={Building2}
            />
            <TeamCard
              title="Project Management"
              description="Plan deliverables, owners, milestones, and approvals in a shared project workspace."
              status="Coming soon"
              icon={FolderKanban}
            />
            <TeamCard
              title="Property Management"
              description="Organize properties, tenants, service requests, and operational documentation."
              status="Coming soon"
              icon={Building2}
            />
          </div>
        </Card>
      </section>
    </div>
  )
}
