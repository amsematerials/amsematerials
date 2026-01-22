"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageMenu from "./LanguageMenu";

function withPrefix(path: string, prefix: string) {
  // prefix: "" or "/en"
  if (!prefix) return path;
  // "/" -> "/en"
  if (path === "/") return "/en";
  return `${prefix}${path}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const prefix = isEn ? "/en" : "";

  return (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/60">
      <nav className="w-full px-6 py-3 flex items-center">
        {/* LEFT: 로고 */}
        <Link href={withPrefix("/", prefix)} className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-amse-s.png"
            alt="AMSE"
            width={160}
            height={32}
            priority
            className="h-6 w-auto opacity-90"
          />
        </Link>

        {/* MID/RIGHT: 메뉴 */}
        <div className="ml-auto flex items-center gap-6">
          <div className="hidden md:flex gap-7 text-sm text-white/80">
            <Link href={withPrefix("/news", prefix)} className="hover:text-white transition">
              News &amp; media
            </Link>
            <Link href={withPrefix("/publications", prefix)} className="hover:text-white transition">
              Publications
            </Link>
            <Link href={withPrefix("/members", prefix)} className="hover:text-white transition">
              Members
            </Link>
            <Link href={withPrefix("/board", prefix)} className="hover:text-white transition">
              Photo
            </Link>
            <Link href={withPrefix("/contact", prefix)} className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* 🌐 언어 메뉴 */}
          <LanguageMenu />
        </div>
      </nav>
    </header>
  );
}
