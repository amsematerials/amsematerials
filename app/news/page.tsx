import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { newsItems } from "@/data/news";

function parseDate(dateStr: string) {
  const [y, m, d] = dateStr.split(".").map((v) => parseInt(v, 10));
  return y * 10000 + m * 100 + d;
}

function labelOf(category?: string) {
  const c = (category ?? "news").toLowerCase().trim();
  return c === "media" ? "MEDIA" : "NEWS";
}

export default function NewsPage() {
  const sorted = [...newsItems].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <div className="min-h-screen bg-black">
      <Section light title="News &amp; media">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {sorted.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/25 transition"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-5 bottom-4 right-5">
                  <div className="text-xs tracking-[0.22em] uppercase text-white/70">
                    {labelOf(item.category)}
                  </div>

                  {/* ✅ 2~3줄 넘어가면 ... */}
                  <div className="mt-2 text-lg font-semibold text-white line-clamp-2">
                    {item.title}
                  </div>

                  <div className="mt-2 text-xs text-white/60">{item.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
