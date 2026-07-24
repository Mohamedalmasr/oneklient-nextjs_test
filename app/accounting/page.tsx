import type { Metadata } from "next"
import {
  BadgeDollarSign,
  BanknoteArrowDown,
  BanknoteArrowUp,
  ChartNoAxesCombined,
  FileChartColumn,
  Landmark,
  ReceiptText,
} from "lucide-react"

import { MetricCard } from "@/components/metric-card"
import { ModuleWorkspace } from "@/components/module-workspace"
import { PageHeading } from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const accountingActions = [
  {
    title: "Receivables",
    description: "Organize customer invoices, payment status, and outstanding balances.",
    icon: BanknoteArrowDown,
    status: "UI scaffold",
  },
  {
    title: "Payables",
    description: "Track vendor bills, approval states, due dates, and outgoing payments.",
    icon: BanknoteArrowUp,
    status: "UI scaffold",
  },
  {
    title: "Transactions",
    description: "Provide a searchable ledger view with filters, categories, and source references.",
    icon: ReceiptText,
    status: "UI scaffold",
  },
  {
    title: "Reports",
    description: "Add financial summaries and export-ready views for your reporting workflow.",
    icon: FileChartColumn,
    status: "UI scaffold",
  },
]

export const metadata: Metadata = { title: "Accounting" }

export default function AccountingPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <PageHeading
        title="Accounting"
        eyebrow="Financial operations"
        description="A clean dashboard shell for receivables, payables, transactions, and reporting."
        breadcrumbs={[{ label: "Accounting" }]}
        badge="Dashboard"
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Data source" value="Not connected" detail="Connect your accounting API or database." icon={Landmark} tone="blue" />
        <MetricCard label="Receivables" value="Ready" detail="UI surface prepared for live balances." icon={BanknoteArrowDown} tone="teal" />
        <MetricCard label="Payables" value="Ready" detail="UI surface prepared for vendor bills." icon={BanknoteArrowUp} tone="slate" />
        <MetricCard label="Reporting" value="Ready" detail="Add charts after connecting real data." icon={ChartNoAxesCombined} tone="blue" />
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="teal">
                <BadgeDollarSign />
                Accounting overview
              </Badge>
            </div>
            <CardTitle className="text-xl">Financial workspace</CardTitle>
            <CardDescription>
              This page preserves the original dashboard entry point while providing a production-friendly component structure for future accounting features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid min-h-56 place-items-center rounded-xl border border-dashed bg-muted/30 p-6 text-center">
              <div>
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm">
                  <ChartNoAxesCombined className="size-6" />
                </span>
                <p className="mt-4 text-sm font-semibold">Your financial chart goes here</p>
                <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-muted-foreground">
                  Render verified transaction data rather than sample numbers when the backend is available.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Implementation checklist</CardTitle>
            <CardDescription>Recommended integration order.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {["Connect the ledger data source", "Add account and date filters", "Map permissions to user roles", "Validate totals and exports"].map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-brand-blue">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <div className="mb-5">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">Accounting navigation</p>
          <h2 className="mt-1 text-2xl font-bold tracking-[-0.035em]">Core workspaces</h2>
        </div>
        <ModuleWorkspace actions={accountingActions} />
      </section>
    </div>
  )
}
