import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { AppHeader } from "@/components/app-header"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"

const configuredBasePath = process.env.BASE_PATH?.trim() ?? ""
const normalizedBasePath = configuredBasePath.replace(/^\/+|\/+$/g, "")
const basePath = normalizedBasePath ? `/${normalizedBasePath}` : ""

export const metadata: Metadata = {
  title: {
    default: "ONEklient Portal",
    template: "%s | ONEklient",
  },
  description: "A responsive ONEklient administration portal rebuilt with Next.js, Tailwind CSS, and shadcn/ui.",
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
}

export const viewport: Viewport = {
  themeColor: "#0759ae",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <main className="dashboard-grid flex-1">
            <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
