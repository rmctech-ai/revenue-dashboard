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

export const transactions = [
  { id: "TXN001", client: "Acme Corp", amount: 2500, status: "Paid" as const, date: "2024-03-15", type: "Subscription" as const },
  { id: "TXN002", client: "TechFlow Solutions", amount: 4200, status: "Paid" as const, date: "2024-03-14", type: "Consulting" as const },
  { id: "TXN003", client: "CloudNine Digital", amount: 1800, status: "Pending" as const, date: "2024-03-13", type: "One-time" as const },
  { id: "TXN004", client: "Summit Analytics", amount: 3100, status: "Paid" as const, date: "2024-03-12", type: "Subscription" as const },
  { id: "TXN005", client: "BrightPath Media", amount: 950, status: "Overdue" as const, date: "2024-03-10", type: "One-time" as const },
  { id: "TXN006", client: "Nexus Innovations", amount: 3750, status: "Paid" as const, date: "2024-03-09", type: "Consulting" as const },
  { id: "TXN007", client: "Vertex Labs", amount: 2200, status: "Pending" as const, date: "2024-03-08", type: "Subscription" as const },
  { id: "TXN008", client: "Aurora Enterprises", amount: 4800, status: "Paid" as const, date: "2024-03-07", type: "Consulting" as const },
  { id: "TXN009", client: "Pinnacle Systems", amount: 1500, status: "Paid" as const, date: "2024-03-06", type: "One-time" as const },
  { id: "TXN010", client: "Horizon Ventures", amount: 2900, status: "Paid" as const, date: "2024-03-05", type: "Subscription" as const },
  { id: "TXN011", client: "Redwood Analytics", amount: 3300, status: "Pending" as const, date: "2024-03-04", type: "Consulting" as const },
  { id: "TXN012", client: "Atlas Digital", amount: 1200, status: "Overdue" as const, date: "2024-03-03", type: "One-time" as const },
];