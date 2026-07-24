"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  UserRound,
} from "lucide-react"

import { Brand } from "@/components/brand"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { primaryNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const currentUser = {
  name: "Lenzi Aziz",
  accountId: "813786944",
  initials: "LA",
}

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function AppHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/88">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 lg:min-w-[186px]">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[310px] bg-white p-0">
                <SheetHeader className="border-b px-5 py-5 text-left">
                  <Brand compact />
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate between ONEklient modules.
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile navigation">
                  {primaryNavigation.map((item) => {
                    const active = isCurrentPath(pathname, item.href)
                    const Icon = item.icon

                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                            active &&
                              "bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 text-brand-blue",
                          )}
                        >
                          <Icon className="size-4.5" />
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  })}
                </nav>

                <SheetFooter className="border-t bg-muted/35">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarFallback>{currentUser.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{currentUser.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        Account {currentUser.accountId}
                      </p>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <Brand className="hidden sm:inline-flex" />
          <Brand compact className="sm:hidden" />
        </div>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => {
            const active = isCurrentPath(pathname, item.href)
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:outline-none",
                  active && "bg-accent text-brand-teal-deep",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:min-w-[250px] lg:justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground"
            aria-label="Notifications, 1 unread"
          >
            <Bell className="size-5" />
            <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand-teal text-[9px] font-bold text-white ring-2 ring-white">
              1
            </span>
          </Button>

          <Separator orientation="vertical" className="mx-1 hidden h-8 sm:block" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl px-1.5 py-1 transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:outline-none"
                aria-label="Open account menu"
              >
                <Avatar className="size-9">
                  <AvatarFallback>{currentUser.initials}</AvatarFallback>
                </Avatar>
                <span className="hidden min-w-0 text-left sm:block">
                  <span className="block max-w-28 truncate text-sm font-semibold leading-4">
                    {currentUser.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-muted-foreground">
                    {currentUser.accountId}
                  </span>
                </span>
                <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <span className="block text-foreground">{currentUser.name}</span>
                <span className="mt-0.5 block font-normal text-muted-foreground">
                  Account {currentUser.accountId}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserRound />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
