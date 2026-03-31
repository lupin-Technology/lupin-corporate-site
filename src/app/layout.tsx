import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP } from "next/font/google";

import {
  ContactButton,
  Footer,
  Header,
  ScrollObserver,
} from "@/components/common";

import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp-narrow.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://use.typekit.net/epv2gdf.css" />
      </head>
      <body
        className={`${notoSansJP.variable} ${geistMono.variable} font-(--font-noto-sans-jp) antialiased`}
      >
        <ScrollObserver />
        <Header />
        {children}
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
