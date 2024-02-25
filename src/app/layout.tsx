import type { Metadata } from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import {cmun} from "@/lib/custom-font";
import React from "react";

export const metadata: Metadata = {
  title: "Barbershop Brzytwa",
  description: "",
  icons: {
      icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={cn(cmun.className, 'bg-background text-black')}>
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
      >
          <Navbar/>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
