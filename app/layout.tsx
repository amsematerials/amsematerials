import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AMSE | Advanced Materials & Strength Evaluation Lab",
  description: "첨단소재 및 재료강도평가학 연구실 (AMSE) 공식 웹사이트",
  metadataBase: new URL("https://amsematerials.vercel.app"), // ✅ 너의 실제 주소
  openGraph: {
    title: "AMSE | Advanced Materials & Strength Evaluation Lab",
    description: "첨단소재 및 재료강도평가학 연구실 (AMSE) 공식 웹사이트",
    url: "https://amsematerials.vercel.app",
    siteName: "AMSE",
    images: [
      {
        url: "/og.jpg", // ✅ public/og.jpg
        width: 1200,
        height: 630,
        alt: "AMSE",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMSE | Advanced Materials & Strength Evaluation Lab",
    description: "첨단소재 및 재료강도평가학 연구실 (AMSE) 공식 웹사이트",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SiteHeader />
        <main>{children}</main>
        {/* 푸터 */}
        <footer className="border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-white/60">
          AMSE Laboratory
          <br />
          Departmnet of Mechanical Engineering
          <br />
          Changwon National University
          <br />
          <br />
            © {new Date().getFullYear()} AMSE Laboratory.
            All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
