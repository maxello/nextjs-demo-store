import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Next.js shop demo",
  description: "Generated by create next app",
};

import StoreProvider from "@/app/redux/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col h-screen justify-between`}>
        <StoreProvider>
          <Navbar />
          <main className="mb-auto">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
