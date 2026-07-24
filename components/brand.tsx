import Image from "next/image"
import Link from "next/link"

import logo from "@/public/logo.png"
import { cn } from "@/lib/utils"

type BrandProps = {
  className?: string
  compact?: boolean
}

export function Brand({ className, compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="ONEklient home"
      className={cn(
        "inline-flex shrink-0 items-center rounded-md focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:outline-none",
        className,
      )}
    >
      <Image
        src={logo}
        alt="ONEklient Solutions Inc."
        priority
        className={cn("h-auto w-[96px] object-contain", compact && "w-[80px]")}
        sizes={compact ? "80px" : "96px"}
      />
    </Link>
  )
}
