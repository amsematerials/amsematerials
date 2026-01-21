"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { newsItems } from "@/data/news";

function parseDate(dateStr: string) {
  const [y, m, d] = dateStr.split(".").map((v) => parseInt(v, 10));
  return y * 10000 + m * 100 + d;
}

// ✅ 카테고리 표기 통일 (news/media -> NEWS/MEDIA)
function labelOf(category?: string) {
  const c = (category ?? "news").toLowerCase().trim();
  return c === "media" ? "MEDIA" : "NEWS";
}

export default function NewsSection() {
  const latest = [...newsItems]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 4);

  return (
    <Section light>
      {/* Header */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            News &amp; media
          </h2>
        </div>

        <Link
          href="/news"
          className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <span className="tracking-[0.12em] uppercase">View more</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 group-hover:border-white/45 transition">
            →
          </span>
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {latest.map((item) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/news/${item.slug}`} className="group block">
              {/* top line */}
              <div className="h-px w-full bg-white/20 mb-6" />

              {/* ✅ NEWS / MEDIA */}
              <div className="text-xs tracking-[0.22em] uppercase text-white/65">
                {labelOf(item.category)}
              </div>

              {/* ✅ 제목: 3줄 넘어가면 ... + 높이 통일 */}
              <div className="news-title mt-4 text-lg font-semibold leading-snug text-white/90 group-hover:text-white transition line-clamp-3 min-h-[4.5em]">
                {item.title}
              </div>

              <div className="mt-3 text-xs text-white/55">{item.date}</div>

              {/* thumb */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition duration-500" />
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/10 group-hover:bg-white/25 transition" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
