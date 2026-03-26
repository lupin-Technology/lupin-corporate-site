import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { HubSpotScript } from "@/components/common/HubSpotScript";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社Lupin Technology",
  description: "株式会社Lupin Technologyのコーポレートサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <HubSpotScript />
      </body>
    </html>
  );
}
