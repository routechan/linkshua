import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "リンクシュア | みんなでリンク集を作れるツール",
  description: "リンク集を複数人で管理できるツール。旅行で行きたい場所やご飯屋さんのサイトを友達と集めて管理するのに役立ちます。",
  openGraph: {
    title: "リンク集を共同で管理しよう",
    description: "このURLからサイトに行くと共同でリンク集を管理できます。",
    images: [
      {
        url: "https://example.com/ogp.png", // フルURLである必要あり
        width: 1200,
        height: 630,
        alt: "リンクシュア",
      },
    ],
    locale: "ja_JP",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
      suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <div className="mx-auto bg-white sm:w-full md:w-full lg:w-1/3 ">
        <Header/>
        <div className="min-h-[80vh] px-5 mt-5 mb-10">
        {children}
        </div>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
