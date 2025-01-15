import type { Metadata } from "next";
import "./globals.css";
import {CMUNFont} from "@/lib/fonts/font";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Barbershop Brzytwa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${CMUNFont.className} antialiased`}
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
