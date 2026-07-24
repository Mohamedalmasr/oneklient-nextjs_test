import {
  Calculator,
  ContactRound,
  Files,
  House,
  type LucideIcon,
} from "lucide-react"

export type NavigationItem = {
  label: string
  href: string
  icon: LucideIcon
}

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/", icon: House },
  { label: "CRM", href: "/crm", icon: ContactRound },
  { label: "Accounting", href: "/accounting", icon: Calculator },
  { label: "Documents", href: "/documents", icon: Files },
]
