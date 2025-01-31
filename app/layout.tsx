import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AgroData Mapper",
  description: "Advanced Agricultural Data Management and Mapping System",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
