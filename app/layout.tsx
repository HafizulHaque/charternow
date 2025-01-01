import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "CHARTERNOW | Best car rental app",
  description: "CHARTERNOW is a car rental web application providing a wide range of cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AppProvider>
          <Navbar/>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
