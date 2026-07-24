import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white/60">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 ONEklient Solutions Inc.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
