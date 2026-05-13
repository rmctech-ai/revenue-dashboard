import { StatCard } from "@/components/stat-card";
import { metrics } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Your business performance at a glance.
        </p>
      </div>

      {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <StatCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
          />
        ))}
      </div>
    </div>
  );
}