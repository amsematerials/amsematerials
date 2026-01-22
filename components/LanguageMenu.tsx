"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

function toEnglish(path: string) {
  if (path.startsWith("/en")) return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}
function toKorean(path: string) {
  if (!path.startsWith("/en")) return path;
  const next = path.replace(/^\/en/, "");
  return next === "" ? "/" : next;
}

export default function LanguageMenu() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const koHref = useMemo(() => toKorean(pathname), [pathname]);
  const enHref = useMemo(() => toEnglish(pathname), [pathname]);

  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // 바깥 클릭하면 닫기
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={boxRef} className="relative">
      {/* 🌐 버튼: 클릭 토글 */}
      <button
        type="button"
        aria-label="Language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-9 h-9 grid place-items-center rounded-full border border-white/15 bg-white/5 opacity-90 hover:bg-white/10 transition"
      >
        <span className="text-base">🌐</span>
      </button>

      {/* 메뉴 */}
      <div
        className={[
          "absolute right-0 mt-2 w-36 rounded-xl border border-white/15 bg-black/85 backdrop-blur shadow-lg",
          "transition origin-top-right",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 -translate-y-1 pointer-events-none scale-95",
        ].join(" ")}
      >
        <div className="p-1">
          <Link
            href={koHref}
            onClick={() => setOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition ${
              !isEn ? "text-white" : "text-white/75"
            }`}
          >
            한국어
          </Link>
          <Link
            href={enHref}
            onClick={() => setOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition ${
              isEn ? "text-white" : "text-white/75"
            }`}
          >
            English
          </Link>
        </div>
      </div>
    </div>
  );
}
