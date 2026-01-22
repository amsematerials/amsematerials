// components/newssection.tsx
import Link from "next/link";
import Image from "next/image";
import { getLatestNews } from "@/data/news.en";

export default function NewsSection() {
  const latest = getLatestNews(4);

  return (
    <section className="px-6 md:px-12 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-start justify-between">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            News &amp; media
          </h2>

          <Link
            href="/en/news"
            className="mt-3 inline-flex items-center gap-3 text-white/70 hover:text-white transition"
          >
            <span className="tracking-[0.18em] uppercase text-xs">VIEW MORE</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
              →
            </span>
          </Link>
        </div>

        {/* 카드 그리드 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {latest.map((item) => (
            <Link
              key={item.slug}
              href={`/en/news/${item.slug}/`}
              className="group block"
              aria-label={`${item.title} 기사 보기`}
            >
              {/* 상단 라벨 / 타이틀 */}
              <div className="border-t border-white/15 pt-5">
                <div className="text-[11px] tracking-[0.28em] text-white/55 uppercase">
                  {item.category}
                </div>

                {/* 제목 3줄 고정 + \n 유지 */}
                <div
                  className="news-title mt-4 text-lg font-semibold leading-snug text-white/90 group-hover:text-white transition line-clamp-3 min-h-[4.5em]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.title}
                </div>

                <div className="mt-8 text-xs text-white/50">{item.date}</div>

                {/* 썸네일 */}
                <div className="mt-6">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-white/20 transition">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover scale-[1.02] group-hover:scale-[1.04] transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-90" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
