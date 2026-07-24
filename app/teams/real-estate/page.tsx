import type { Metadata } from "next"
import {
  Building2,
  ClipboardCheck,
  FileText,
  Handshake,
  ListChecks,
  Plus,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

import { MetricCard } from "@/components/metric-card"
import { ModuleWorkspace } from "@/components/module-workspace"
import { PageHeading } from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const brokerageActions = [
  {
    title: "Trade Report",
    description: "Open the Vitals form and guide brokerage users through a consistent trade reporting flow.",
    icon: FileText,
    status: "Service",
  },
  {
    title: "Active files",
    description: "Organize current transactions, responsible agents, milestones, and required documents.",
    icon: ListChecks,
    status: "UI scaffold",
  },
  {
    title: "Compliance review",
    description: "Create a review queue for mandatory forms, approvals, and brokerage checks.",
    icon: ClipboardCheck,
    status: "UI scaffold",
  },
  {
    title: "Partners",
    description: "Maintain a controlled directory of legal, finance, and service partners.",
    icon: Handshake,
    status: "UI scaffold",
  },
]

export const metadata: Metadata = { title: "Real Estate Brokerage" }

export default function RealEstateTeamPage() {
  return (
    <>
      <PageHeading
        title="Real Estate Brokerage"
        eyebrow="Team workspace"
        description="Coordinate members, roles, brokerage services, and transaction workflows."
        breadcrumbs={[{ label: "Teams", href: "/" }, { label: "Real Estate Brokerage" }]}
        badge="Active"
        action={<Button><Plus /> Invite member</Button>}
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Members" value="8" detail="Sample presentation value." icon={UsersRound} tone="teal" />
        <MetricCard label="Workspace" value="Active" detail="Ready for role-based access." icon={Building2} tone="blue" />
        <MetricCard label="Compliance" value="Structured" detail="Add your brokerage validation rules." icon={ShieldCheck} tone="slate" />
        <MetricCard label="Services" value="1 mapped" detail="Trade Report from the current portal." icon={FileText} tone="blue" />
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardHeader>
            <div className="mb-2"><Badge variant="teal"><Building2 /> Brokerage overview</Badge></div>
            <CardTitle className="text-xl">Shared operating space</CardTitle>
            <CardDescription>
              Keep the familiar service entry points while expanding into a role-aware team dashboard with reusable components.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {[{ title: "Broker of record", value: "Owner role" }, { title: "Agents", value: "Member role" }, { title: "Reviewers", value: "Approver role" }].map((role) => (
              <div key={role.title} className="rounded-xl border bg-muted/25 p-4">
                <p className="text-xs font-semibold text-muted-foreground">{role.title}</p>
                <p className="mt-2 text-sm font-bold">{role.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Members &amp; roles</CardTitle>
            <CardDescription>Connect this panel to your identity provider.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Lenzi Aziz", "Brokerage Admin", "Document Reviewer"].map((member, index) => (
              <div key={member} className="flex items-center gap-3 rounded-xl border p-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-xs font-bold text-white">
                  {index === 0 ? "LA" : index === 1 ? "BA" : "DR"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{member}</p>
                  <p className="truncate text-xs text-muted-foreground">{index === 0 ? "Owner" : "Member"}</p>
                </div>
                <Badge variant="outline">{index === 0 ? "Admin" : "Active"}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <div className="mb-5">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">Brokerage services</p>
          <h2 className="mt-1 text-2xl font-bold tracking-[-0.035em]">Choose a service to proceed</h2>
        </div>
        <ModuleWorkspace actions={brokerageActions} />
      </section>
    </>
  )
}
