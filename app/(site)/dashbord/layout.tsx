"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}