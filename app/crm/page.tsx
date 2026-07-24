import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ContactRound,
  FileUser,
  LayoutDashboard,
  Plus,
  ScrollText,
  Sparkles,
  UserPlus,
  Wrench,
} from "lucide-react"

import { ModuleWorkspace } from "@/components/module-workspace"
import { PageHeading } from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const crmActions = [
  {
    title: "Dashboard",
    description: "Monitor client records, open requests, and the next actions across the CRM workspace.",
    icon: LayoutDashboard,
    href: "/crm#dashboard",
    label: "View dashboard",
  },
  {
    title: "Services",
    description: "Choose an available client service and move into its guided workflow.",
    icon: Wrench,
    href: "/crm#services",
    label: "Browse services",
  },
  {
    title: "Open A New Account",
    description: "Start a structured intake flow for a new customer or business account.",
    icon: UserPlus,
    href: "/crm#new-account",
    label: "Start onboarding",
  },
  {
    title: "Customer Docs",
    description: "Review documents associated with a customer while keeping context close to the record.",
    icon: FileUser,
    href: "/documents",
    label: "Open customer docs",
  },
]

export const metadata: Metadata = { title: "CRM" }

export default function CRMPage() {
  return (
    <>
      <PageHeading
        title="CRM"
        eyebrow="Customer relationship management"
        description="A polished workspace for clients, services, onboarding, and customer documents."
        breadcrumbs={[{ label: "CRM" }]}
        action={
          <Button asChild>
            <Link href="#new-account">
              <Plus />
              Open a new account
            </Link>
          </Button>
        }
      />

      <section id="dashboard" className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="relative overflow-hidden border-brand-blue/15 bg-gradient-to-br from-white via-white to-secondary/55">
          <div aria-hidden="true" className="absolute top-0 right-0 size-48 translate-x-16 -translate-y-20 rounded-full bg-brand-blue/5" />
          <CardHeader className="relative">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="teal">
                <Sparkles />
                CRM overview
              </Badge>
            </div>
            <CardTitle className="text-2xl tracking-[-0.035em]">Dashboard</CardTitle>
            <CardDescription className="max-w-2xl">
              Connect this presentation layer to your customer data source, authentication, and service APIs. The routes and components are ready for integration.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border bg-white/75 p-4">
              <ContactRound className="size-5 text-brand-blue" />
              <p className="mt-5 text-sm font-semibold">Customer records</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Searchable profile and account surfaces.</p>
            </div>
            <div className="rounded-xl border bg-white/75 p-4">
              <ScrollText className="size-5 text-brand-teal-deep" />
              <p className="mt-5 text-sm font-semibold">Guided services</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Consistent forms and process steps.</p>
            </div>
            <div className="rounded-xl border bg-white/75 p-4">
              <Activity className="size-5 text-slate-600" />
              <p className="mt-5 text-sm font-semibold">Activity stream</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">A clear audit trail for each client.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent activity</CardTitle>
            <CardDescription>Waiting for your CRM data connection.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/35 px-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-muted-foreground shadow-sm">
                <Activity className="size-5" />
              </span>
              <p className="mt-4 text-sm font-semibold">No activity yet</p>
              <p className="mt-1 max-w-56 text-xs leading-5 text-muted-foreground">
                Customer events will appear here after the backend is connected.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="services" className="mt-10">
        <div className="mb-5">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">CRM navigation</p>
          <h2 className="mt-1 text-2xl font-bold tracking-[-0.035em]">Choose a workspace</h2>
        </div>
        <ModuleWorkspace actions={crmActions} />
      </section>

      <section id="new-account" className="mt-10">
        <Card className="overflow-hidden border-brand-teal/20 bg-brand-teal/[0.035]">
          <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal-deep">
                <UserPlus className="size-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">New account intake</h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Replace this call-to-action with your validated intake form or connect it to an existing account-opening workflow.
                </p>
              </div>
            </div>
            <Button>
              Begin intake
              <Plus />
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
