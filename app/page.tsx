import {
  Building2,
  Calculator,
  ContactRound,
  Files,
  FolderKanban,
} from "lucide-react"

import { ModuleCard } from "@/components/module-card"
import { PageHeading } from "@/components/page-heading"
import { TeamCard } from "@/components/team-card"
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
    <>
      <PageHeading title="Home" breadcrumbs={[{ label: "Home" }]} />

      <section className="mt-8" aria-labelledby="modules-heading">
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

      <section className="mt-10" aria-labelledby="teams-heading">
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    </>
  )
}
