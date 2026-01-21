import Image from "next/image";
import Section from "@/components/Section";
import { publications } from "@/data/publications";
import CoverImage from "@/components/CoverImage";

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-black">
      <Section light title="Publications">
        {/* ✅ 디버그: 여기 숫자가 0이면 data가 비어있거나 import가 잘못된 것 */}
        <p className="text-xs text-white/50 mb-6">
          Loaded items: {sorted.length}
        </p>

        {sorted.length === 0 ? (
          <div className="text-white/70 text-sm">
            publications 데이터가 비어있습니다. <br />
            `data/publications.ts` 경로/exports를 확인하세요.
          </div>
        ) : (
          <div className="mt-10">
            {sorted.map((p) => (
              <div key={p.id} className="py-10">
                <div className="h-px w-full bg-white/15 mb-10" />

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <div className="relative w-full max-w-[260px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
{p.cover ? (
  <CoverImage
    src={p.cover}
    alt={`${p.venue} cover`}
    className="absolute inset-0 h-full w-full object-cover"
  />
) : (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-xs tracking-[0.18em] uppercase text-white/40">
      Journal Cover
    </div>
  </div>
)}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs tracking-[0.22em] uppercase text-white/55">
                        {p.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="text-sm text-white/80">{p.venue}</span>
                      {p.note && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-white/20" />
                          <span className="text-xs text-white/55">{p.note}</span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-snug text-white">
                      {p.title}
                    </h3>

                    <p className="mt-4 text-sm text-white/70 leading-relaxed">
                      {p.authors}
                    </p>

                    {p.doiUrl && (
                      <div className="mt-6">
                        <a
                          href={p.doiUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:border-white/30 transition"
                        >
                          DOI <span className="text-white/60">↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mt-10" />
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
