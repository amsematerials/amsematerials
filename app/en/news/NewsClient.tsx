// app/news/NewsClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getNewsSorted } from "@/data/news.en"; // 너 프로젝트 경로에 맞춤

export default function NewsClient() {
  const searchParams = useSearchParams();
  const p = searchParams.get("p"); // 필요하면 사용
  const items = getNewsSorted();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          News &amp; media
        </h1>
        <Link href="/en" className="text-white/60 hover:text-white transition">
          {/* Home → */}
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {items.map((item) => (
          <Link key={item.slug} href={`/en/news/${item.slug}`} className="group block">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-white/20 transition">
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-[11px] tracking-[0.28em] text-white/60 uppercase">
                  {item.category}
                </div>
                <div
                  className="mt-3 text-white font-semibold leading-snug text-xl line-clamp-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.title}
                </div>
                <div className="mt-3 text-white/55 text-sm">{item.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* p 쿼리 쓰는 UI가 있다면 여기에서만 처리 */}
      {p ? <div className="mt-10 text-white/50">Selected: {p}</div> : null}
    </div>
  );
}
