"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageMenu from "./LanguageMenu";
import { useEffect, useRef, useState } from "react";

function withPrefix(path: string, prefix: string) {
  if (!prefix) return path;
  if (path === "/") return "/en";
  return `${prefix}${path}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const prefix = isEn ? "/en" : "";

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  /* ✅ 페이지 이동 시 메뉴 자동 닫기 */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ✅ 메뉴 열리면 body 스크롤 완전 차단 */
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* ================= HEADER ================= */
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="w-full px-6 py-3 flex items-center">
        {/* LEFT: 로고 */}
        <Link href={withPrefix("/", prefix)} className="flex items-center shrink-0">
          <Image
            src="/logo-amse-s.png"
            alt="AMSE"
            width={160}
            height={32}
            priority
            className="h-6 w-auto opacity-90"
          />
        </Link>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex gap-7 text-sm text-white/80">
            <Link href={withPrefix("/news", prefix)} className="hover:text-white">News &amp; media</Link>
            <Link href={withPrefix("/publications", prefix)} className="hover:text-white">Publications</Link>
            <Link href={withPrefix("/members", prefix)} className="hover:text-white">Members</Link>
            <Link href={withPrefix("/board", prefix)} className="hover:text-white">Photo</Link>
            <Link href={withPrefix("/contact", prefix)} className="hover:text-white">Contact</Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-full
                       border border-white/15 bg-white/5 text-white/85"
            aria-label="Open menu"
          >
            ☰
          </button>

          <LanguageMenu />
        </div>
      </nav>

      {/* ================= MOBILE SLIDE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* 어두운 배경 (클릭 시 닫힘) */}
          <button
            type="button"
            className="absolute inset-0 bg-black/80"
            aria-label="Close menu backdrop"
            onClick={() => setOpen(false)}
          />

          {/* 슬라이드 패널 */}
          <div
            ref={panelRef}
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
            className="
              fixed top-0 right-0 z-[70]
              h-[100dvh] w-[78vw] max-w-[360px]
              bg-[#0b0b0c] border-l border-white/10
              flex flex-col
            "
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* 상단 */}
            <div className="px-6 pt-6 pb-4 flex justify-between items-center">
              <span className="text-xs tracking-[0.3em] uppercase text-white/70">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 grid place-items-center rounded-full
                           border border-white/15 bg-white/5 text-white/85"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="h-px bg-white/10 mx-6" />

            {/* 메뉴 */}
            <div className="px-6 py-5 flex flex-col text-white/85">
              {[
                ["News & media", "/news"],
                ["Publications", "/publications"],
                ["Members", "/members"],
                ["Photo", "/board"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  href={withPrefix(path, prefix)}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* 하단 */}
            <div className="mt-auto px-6 pb-8">
              <div className="h-px bg-white/10 mb-4" />
              <div className="text-xs text-white/55 leading-relaxed">
                AMSE Laboratory <br />
                Changwon National University
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
