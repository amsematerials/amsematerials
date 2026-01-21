import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS, getNewsBySlug } from "@/data/news";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = getNewsBySlug(slug);
  if (!item) return notFound();

  return (
    <main className="bg-black min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/news/" className="text-white/60 hover:text-white transition">
          ← Back to News
        </Link>

        <div className="mt-10 text-[11px] tracking-[0.28em] text-white/55 uppercase">
          {item.category}
        </div>

        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white leading-tight">
          {item.title}
        </h1>

        <div className="mt-4 text-white/55">{item.date}</div>

        <div className="mt-10 relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Image src={item.thumbnail} alt={item.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>

        {/* ✅ excerpt: 공백이면 출력하지 않기 */}
        {item.excerpt?.trim() ? (
          <p className="mt-8 text-white/80 leading-relaxed">{item.excerpt}</p>
        ) : null}

        {/* ✅ 본문(content) 렌더링: 이게 없어서 본문이 안 보였던 것 */}
        <article className="mt-10 text-white/80 leading-relaxed space-y-6">
          {(item.content ?? []).map((block, i) => {
            if (block.type === "p") return <p key={i}>{block.text}</p>;

            if (block.type === "h2")
              return (
                <h2 key={i} className="pt-6 text-xl md:text-2xl font-semibold text-white">
                  {block.text}
                </h2>
              );

            if (block.type === "ul")
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {block.items.map((t: string, j: number) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              );

            if (block.type === "img")
              return (
                <figure key={i} className="pt-2">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <Image
                      src={block.src}
                      alt={block.alt ?? item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {block.caption ? (
                    <figcaption className="mt-2 text-sm text-white/50">{block.caption}</figcaption>
                  ) : null}
                </figure>
              );

            return null;
          })}
        </article>
      </div>
    </main>
  );
}
