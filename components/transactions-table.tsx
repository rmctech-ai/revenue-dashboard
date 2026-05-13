"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { transactions } from "@/lib/data";
import { cn } from "@/lib/utils";

type SortKey = "client" | "amount" | "status" | "date" | "type";
type SortDirection = "asc" | "desc";

export function TransactionsTable() {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filtered = transactions
    .filter((t) =>
      t.client.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const modifier = sortDirection === "asc" ? 1 : -1;
      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * modifier;
      }
      return String(aVal).localeCompare(String(bVal)) * modifier;
    });

  const statusColor = (status: string) =>
    cn(
      "inline-block rounded-full px-2 py-1 text-xs font-semibold",
      status === "Paid" &&
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      status === "Pending" &&
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      status === "Overdue" &&
        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <input
          type="text"
          placeholder="Filter by client name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-2 w-full max-w-sm rounded-md border bg-background px-3 py-2 text-sm"
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {(["client", "amount", "status", "date", "type"] as SortKey[]).map(
                (key) => (
                  <TableHead
                    key={key}
                    onClick={() => handleSort(key)}
                    className="cursor-pointer select-none hover:text-foreground"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                    {sortKey === key
                      ? sortDirection === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((t) => (
              <TableRow key={t.id}>
                <TableCell className="font-medium">{t.client}</TableCell>
                <TableCell>${t.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <span className={statusColor(t.status)}>{t.status}</span>
                </TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}