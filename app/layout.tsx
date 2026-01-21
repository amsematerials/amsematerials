import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* 상단 네비게이션 */}
        <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/60">
          <nav className="w-full px-6 py-3 flex items-center">
            {/* LEFT: 풀로고 (왼쪽 끝) */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo-amse-s.png"
                alt="AMSE"
                width={160}
                height={32}
                priority
                className="h-6 w-auto opacity-90"
              />
            </Link>

            {/* MID/RIGHT: 메뉴 (오른쪽으로 밀기) */}
            <div className="ml-auto flex items-center gap-6">
              <div className="hidden md:flex gap-7 text-sm text-white/80">
                {/* <Link href="/research" className="hover:text-white transition">
                 Research
                </Link> */}

                <Link href="/news" className="hover:text-white transition">
                  News &amp; media
                </Link>
                <Link
                  href="/publications"
                  className="hover:text-white transition"
                >
                  Publications
                </Link>
                <Link href="/members" className="hover:text-white transition">
                  Members
                </Link>
                <Link href="/board" className="hover:text-white transition">
                   Photo
                </Link>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </div>

              {/* RIGHT END: 지구본 (한/영 전환 자리) - Server Component라 onClick 금지 */}
              <div
                aria-label="Language"
                className="w-9 h-9 grid place-items-center rounded-full border border-white/15 bg-white/5 opacity-90"
                title="Language (coming soon)"
              >
                <span className="text-base">🌐</span>
              </div>
            </div>
          </nav>
        </header>

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
