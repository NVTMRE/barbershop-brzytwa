import type { Metadata } from "next";
import "./globals.css";
import {CMUNFont} from "@/lib/fonts/font";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Barbershop Brzytwa",
    description: "Witaj w Brzytwie, miejscu, gdzie tradycja spotyka się z nowoczesnością",
    icons: {
        icon: '/logo.png',
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${CMUNFont.className} antialiased selection:text-white selection:bg-primary`}
      >
        <div className={'flex flex-col'}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
