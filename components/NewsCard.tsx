// components/NewsCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { NewsItem } from "@/data/news";

type Props = {
  item: Pick<NewsItem, "slug" | "category" | "title" | "date" | "thumbnail">;
};

export default function NewsCard({ item }: Props) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition"
      aria-label={`${item.title} 기사 보기`}
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {/* 한화/너 스타일 그대로: 아래로 갈수록 진해지는 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="text-[11px] tracking-[0.25em] uppercase text-white/70">
            {item.category}
          </div>

          <div className="mt-2 text-lg font-semibold leading-snug text-white/90 group-hover:text-white transition line-clamp-3">
            {item.title}
          </div>

          <div className="mt-3 text-sm text-white/60">{item.date}</div>
        </div>
      </div>
    </Link>
  );
}
