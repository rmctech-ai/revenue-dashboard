"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Map icon names to their components for dynamic rendering
const iconMap = {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
};

// Define all navigation items with labels, routes, and icon names
const navItems = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" as const },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" as const },
  { label: "Customers", href: "/customers", icon: "Users" as const },
  { label: "Revenue", href: "/revenue", icon: "DollarSign" as const },
  { label: "Settings", href: "/settings", icon: "Settings" as const },
];

export function Sidebar() {
  // Get current path to highlight the active nav item
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 border-r bg-card">
      <div className="flex h-14 items-center border-b px-6">
        <span className="font-semibold text-lg">RevenueApp</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}