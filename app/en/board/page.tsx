import Image from "next/image";
import Section from "@/components/Section";
import { boardPhotos } from "@/data/board.en";

function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <div className="text-xs uppercase tracking-[0.22em] text-white/55">
          AMSE Photo
        </div>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-white leading-tight">
          Activities & Moments
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-white/70 leading-relaxed">
          This is a space for collecting photos of activities <br />
          such as conferences, presentations, seminars, and visits/visits in the lab. <br />
          Simply put your mouse over the picture and it will show you some information.
        </p>
      </div>
    </div>
  );
}

function PhotoCard({
  src,
  alt,
  title,
  date,
  place,
}: {
  src: string;
  alt: string;
  title?: string;
  date?: string;
  place?: string;
}) {
  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* ✅ 높이는 이미지 비율 따라가게: Image fill + aspect 고정 안 함
          -> wrapper에 "relative"만 두고, 실제 높이는 이미지 로딩 후 자연스럽게 잡기 어려우니
             여기서는 "img" 방식보다 Next/Image를 쓰되
             sizes + width/height를 주는 방식(추천)으로 감.
      */}
      <div className="relative w-full">
        {/* 너가 사진 크기가 들쑥날쑥일 때도 예쁘게 보이게:
            object-cover + hover zoom + 살짝 그라데이션 */}
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition" />

        {/* hover caption */}
        {(title || date || place) && (
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
            <div className="text-sm font-semibold text-white">
              {title ?? "Activity"}
            </div>
            <div className="mt-1 text-xs text-white/70">
              {[date, place].filter(Boolean).join(" · ")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-black">
      <Section title="Photo" light titleAlign="left">
        <Banner />

        <div className="mt-10">
          {/* ✅ Masonry 느낌: CSS columns가 제일 간단하고 예쁘다 */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {boardPhotos.map((p) => (
              <PhotoCard
                key={p.id}
                src={p.src}
                alt={p.alt}
                title={p.title}
                date={p.date}
                place={p.place}
              />
            ))}
          </div>
        </div>

        {/* 하단 여백 */}
        <div className="mt-10 text-xs text-white/40">
          * 사진은 public/board 폴더에 추가하고, data/board.ts에 항목만 늘리면 자동으로 반영됩니다.
        </div>
      </Section>
    </div>
  );
}
