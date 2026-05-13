import { StatCard } from "@/components/stat-card";
import { RevenueChart } from "@/components/revenue-chart";
import { SourceChart } from "@/components/source-chart";
import { TransactionsTable } from "@/components/transactions-table";
import { metrics } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Your business performance at a glance.
        </p>
      </div>

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

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <RevenueChart />
        <SourceChart />
      </div>

      <TransactionsTable />
    </div>
  );
}