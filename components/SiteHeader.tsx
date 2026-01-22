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

  // ✅ 페이지 이동 시 자동 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ✅ ESC로 닫기
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // ✅ 바깥 클릭으로 닫기
  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

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

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          {/* 데스크탑 메뉴 */}
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

          {/* ✅ 모바일 메뉴 버튼 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white/85"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* 🌐 언어 메뉴 */}
          <LanguageMenu />
        </div>
      </nav>

      {/* ✅ 오프화이트 느낌: 오른쪽 슬라이드 메뉴 */}
      {/* 오버레이 */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* 배경(어둡게) */}
        <div className="absolute inset-0 bg-black/80" />

        {/* 패널 */}
        <div
          ref={panelRef}
          style={{
           paddingTop: "env(safe-area-inset-top)",
           paddingBottom: "env(safe-area-inset-bottom)",
         }}
         className={`absolute right-0 top-0 h-[100dvh] w-[78vw] max-w-[360px]
         border-l border-white/10 bg-[#0b0b0c]
         transition-transform duration-200 ease-out
         ${open ? "translate-x-0" : "translate-x-full"}`}
         role="dialog"
         aria-modal="true"
         aria-label="Mobile navigation"
        >
          {/* 상단 */}
          <div className="h-px bg-white/10 mx-6" />

          {/* 메뉴 링크 */}
          <div className="px-6 py-5 flex flex-col gap-2 text-white/85">
            <Link
              onClick={() => setOpen(false)}
              href={withPrefix("/news", prefix)}
              className="py-3 text-base border-b border-white/10 hover:text-white transition"
            >
              News &amp; media
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={withPrefix("/publications", prefix)}
              className="py-3 text-base border-b border-white/10 hover:text-white transition"
            >
              Publications
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={withPrefix("/members", prefix)}
              className="py-3 text-base border-b border-white/10 hover:text-white transition"
            >
              Members
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={withPrefix("/board", prefix)}
              className="py-3 text-base border-b border-white/10 hover:text-white transition"
            >
              Photo
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href={withPrefix("/contact", prefix)}
              className="py-3 text-base hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* 하단(옵션) */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="h-px bg-white/10 mb-5" />
            <div className="text-xs text-white/55 leading-relaxed">
              AMSE Laboratory <br />
              Changwon National University
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
