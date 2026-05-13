// KPI Metrics
export const metrics = [
  {
    title: "Monthly Revenue",
    value: "$48,500",
    change: "+12.5%",
    trend: "up" as const,
  },
  {
    title: "Active Customers",
    value: "2,420",
    change: "+8.2%",
    trend: "up" as const,
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    change: "-0.5%",
    trend: "down" as const,
  },
  {
    title: "Revenue Growth",
    value: "+12.5%",
    change: "+3.1%",
    trend: "up" as const,
  },
];

// Monthly Revenue Data (12 months)
export const revenueData = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 34500 },
  { month: "Mar", revenue: 36200 },
  { month: "Apr", revenue: 35800 },
  { month: "May", revenue: 38400 },
  { month: "Jun", revenue: 40100 },
  { month: "Jul", revenue: 41800 },
  { month: "Aug", revenue: 43200 },
  { month: "Sep", revenue: 44500 },
  { month: "Oct", revenue: 45900 },
  { month: "Nov", revenue: 47200 },
  { month: "Dec", revenue: 48500 },
];

// Revenue by Source
export const revenueBySource = [
  { source: "Subscriptions", amount: 28000 },
  { source: "One-time Sales", amount: 9500 },
  { source: "Consulting", amount: 7000 },
  { source: "Add-ons", amount: 4000 },
];

// Navigation items
export const navItems = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" },
  { label: "Customers", href: "/customers", icon: "Users" },
  { label: "Revenue", href: "/revenue", icon: "DollarSign" },
  { label: "Settings", href: "/settings", icon: "Settings" },
];