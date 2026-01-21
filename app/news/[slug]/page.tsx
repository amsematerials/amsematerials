import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "@/components/Section";
import { newsItems } from "@/data/news";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

function labelOf(category?: string) {
  const c = (category ?? "news").toLowerCase().trim();
  return c === "media" ? "MEDIA" : "NEWS";
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="min-h-screen bg-black">
      <Section light>
        <div className="max-w-4xl">
          <div className="text-xs tracking-[0.22em] uppercase text-white/60">
            {labelOf(item.category)}
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-white">
            {item.title}
          </h1>

          <div className="mt-4 text-sm text-white/55">{item.date}</div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9]">
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
            </div>
          </div>

          <div className="mt-10 text-white/75 leading-relaxed space-y-4">
            <p>{item.excerpt ?? "내용은 추후 기사 작성/연동 방식 확정 후 채워넣으면 됩니다."}</p>
            <p className="text-white/50 text-sm">
              * 지금은 정적 데이터 기반. 나중에 MDX/Notion/Headless CMS로 갈아타도 구조 유지 가능.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
