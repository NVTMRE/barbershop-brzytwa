import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={cn(montserrat.className, 'bg-background text-black')}>
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
