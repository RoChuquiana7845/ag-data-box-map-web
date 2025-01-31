import type React from "react";
import { ProtectedLayout } from "@/components/auth/protected-layout";

interface DashboardLayoutProps {
  readonly children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
