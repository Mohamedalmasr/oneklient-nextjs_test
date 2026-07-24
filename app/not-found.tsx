import Link from "next/link"
import { ArrowLeft, FileQuestion } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] w-full place-items-center">
      <Card className="w-full max-w-lg items-center p-8 text-center sm:p-10">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
          <FileQuestion className="size-6" />
        </span>
        <p className="mt-5 text-xs font-bold tracking-[0.16em] text-brand-teal-deep uppercase">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em]">Page not found</h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          The page may have moved, or the module route has not been connected yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/"><ArrowLeft /> Return home</Link>
        </Button>
      </Card>
    </div>
  )
}
