"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Wrapper component that passes all props to NextThemesProvider
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}