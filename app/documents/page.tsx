import type { Metadata } from "next"
import {
  Archive,
  ChevronRight,
  CloudUpload,
  File,
  FileArchive,
  Folder,
  FolderOpen,
  Plus,
  Save,
  Search,
  Tag,
  Upload,
} from "lucide-react"

import { PageHeading } from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const libraries = ["Default Library", "Company Drive", "Accounting - AR", "Accounting - AP", "Projects"]
const keywords = ["Client", "Contract", "Invoice", "Property", "Tax"]
const folders = [
  { name: "Company Drive", detail: "Default library", icon: FolderOpen },
  { name: "Accounting - AR", detail: "Receivables", icon: Folder },
  { name: "Accounting - AP", detail: "Payables", icon: Folder },
  { name: "Projects", detail: "Shared workspace", icon: FileArchive },
]

export const metadata: Metadata = { title: "Documents" }

export default function DocumentsPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <PageHeading
        title="Documents"
        eyebrow="Document center"
        description="Manage files, folders & tags with clear defaults, naming rules, retention settings, and uploads."
        breadcrumbs={[{ label: "Documents" }]}
        action={
          <Button>
            <Upload />
            Upload file
          </Button>
        }
      />

      <div className="mt-8 grid gap-5 xl:grid-cols-[0.86fr_1.34fr]">
        <div className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-lg">Defaults</CardTitle>
                  <CardDescription className="mt-1">Set organization-wide document behavior.</CardDescription>
                </div>
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-brand-blue">
                  <Archive className="size-4.5" />
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label htmlFor="default-library" className="text-sm font-semibold">Default Library</label>
                <select id="default-library" className="mt-2 h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/25">
                  {libraries.map((library) => <option key={library}>{library}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="naming-template" className="text-sm font-semibold">File Naming Template</label>
                <input id="naming-template" defaultValue="{date}_{module}_{name}" className="mt-2 h-10 w-full rounded-lg border bg-white px-3 font-mono text-xs outline-none transition-shadow focus:ring-2 focus:ring-ring/25" />
                <p className="mt-2 text-xs text-muted-foreground">Placeholders: <code>{"{date}"}</code>, <code>{"{module}"}</code>, <code>{"{name}"}</code></p>
              </div>

              <div>
                <label htmlFor="retention" className="text-sm font-semibold">Retention Period</label>
                <select id="retention" className="mt-2 h-10 w-full rounded-lg border bg-white px-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/25">
                  {["None", "1 Year", "3 Years", "7 Years"].map((period) => <option key={period}>{period}</option>)}
                </select>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border bg-muted/30 p-3.5">
                <input type="checkbox" className="mt-0.5 size-4 accent-brand-teal" />
                <span>
                  <span className="block text-sm font-semibold">Require keywords before upload</span>
                  <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">Help keep the library searchable and consistently organized.</span>
                </span>
              </label>

              <Button className="w-full">
                <Save />
                Save Defaults
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Keywords</CardTitle>
              <CardDescription>Use keywords to improve search and organize documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <div className="relative min-w-0 flex-1">
                  <Tag className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input aria-label="New keyword" placeholder="Add a keyword" className="h-10 w-full rounded-lg border bg-white pr-3 pl-9 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/25" />
                </div>
                <Button variant="outline">
                  <Plus />
                  Add
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {keywords.map((keyword) => <Badge key={keyword} variant="teal">{keyword}</Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
              <div>
                <CardTitle className="text-lg">Folder</CardTitle>
                <CardDescription className="mt-1">Browse your current document library.</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Plus />
                New Folder
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 rounded-lg border bg-muted/25 px-3 py-2.5">
                <Search className="size-4 text-muted-foreground" />
                <input aria-label="Search files and folders" placeholder="Search files and folders" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border">
                <div className="hidden grid-cols-[1fr_120px_90px_120px] gap-3 bg-muted/45 px-4 py-3 text-[11px] font-bold tracking-wide text-muted-foreground uppercase sm:grid">
                  <span>Name</span><span>Type</span><span>Size</span><span>Modified</span>
                </div>
                <div className="divide-y">
                  {folders.map((folder) => {
                    const Icon = folder.icon
                    return (
                      <button key={folder.name} type="button" className="grid w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-muted/35 sm:grid-cols-[1fr_120px_90px_120px]">
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand-blue"><Icon className="size-4" /></span>
                          <span className="min-w-0"><span className="block truncate text-sm font-semibold">{folder.name}</span><span className="block truncate text-xs text-muted-foreground sm:hidden">{folder.detail}</span></span>
                        </span>
                        <span className="hidden text-xs text-muted-foreground sm:block">Folder</span>
                        <span className="hidden text-xs text-muted-foreground sm:block">—</span>
                        <span className="hidden items-center justify-between text-xs text-muted-foreground sm:flex">Today <ChevronRight className="size-4" /></span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <File className="size-3.5" />
                No files yet. Use Upload below.
              </div>
            </CardContent>
          </Card>

          <Card className="border-brand-teal/20">
            <CardHeader>
              <CardTitle className="text-lg">Upload</CardTitle>
              <CardDescription>Add files to the current folder.</CardDescription>
            </CardHeader>
            <CardContent>
              <label className="group flex min-h-60 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-teal/25 bg-brand-teal/[0.025] p-8 text-center transition-colors hover:border-brand-teal/45 hover:bg-brand-teal/[0.045]">
                <input type="file" multiple className="sr-only" />
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-teal-deep shadow-sm transition-transform group-hover:-translate-y-0.5">
                  <CloudUpload className="size-6" />
                </span>
                <span className="mt-5 text-base font-semibold">Drop files or folders here</span>
                <span className="mt-1 text-sm text-muted-foreground">They will be added to the current folder</span>
                <Separator className="my-5 max-w-44" />
                <span className="flex flex-wrap justify-center gap-2">
                  <Button type="button" variant="outline" size="sm"><Folder /> Upload Folder</Button>
                  <Button type="button" size="sm"><Upload /> Upload File</Button>
                </span>
              </label>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
