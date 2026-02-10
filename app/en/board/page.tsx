"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionStatic from "@/components/SectionStatic";
import PageEnter from "@/components/PageEnter";
import { boardPhotos } from "@/data/board.en";

function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
          Click on the picture to see it larger.
        </p>
      </div>
    </div>
  );
}

type Photo = {
  id: string | number;
  src: string;
  alt: string;
  title?: string;
  date?: string;
  place?: string;
};

function PhotoCard({
  photo,
  onOpen,
}: {
  photo: Photo;
  onOpen: (p: Photo) => void;
}) {
  const { src, alt, title, date, place } = photo;

  return (
    <button
      type="button"
      onClick={() => onOpen(photo)}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left focus:outline-none focus:ring-2 focus:ring-white/30"
      aria-label={`Open photo: ${title ?? alt}`}
    >
      <div className="relative w-full">
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
    </button>
  );
}

function PhotoModal({
  photo,
  onClose,
}: {
  photo: Photo | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!photo) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog">
      {/* 배경 (클릭하면 닫기) */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
        aria-label="Close modal backdrop"
      />

      {/* ✅ X 버튼: 화면 우측 상단 고정 */}
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white/80 hover:bg-black/90 hover:text-white transition"
        aria-label="Close"
      >
        ✕
      </button>

      {/* ✅ 컨텐츠: 항상 한 화면에 들어오게 */}
      <div className="absolute inset-0 z-[105] flex items-center justify-center p-4 md:p-8">
        {/* 카드 전체 높이를 뷰포트에 맞춰 제한 */}
        <div className="w-full max-w-6xl max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-6rem)] overflow-hidden rounded-2xl border border-white/10 bg-black">
          {/* 이미지 영역: 캡션 공간을 미리 빼고, 그 안에서만 꽉 맞춤 */}
          <div className="flex items-center justify-center p-2">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={2400}
              height={1600}
              sizes="100vw"
              priority
              className="
                w-auto
                h-auto
                max-w-[calc(100vw-2rem)]
                md:max-w-[calc(100vw-4rem)]
                max-h-[calc(100vh-7.5rem)]
                md:max-h-[calc(100vh-9.5rem)]
                object-contain
              "
            />
          </div>

          {/* 캡션(있을 때만) */}
          {(photo.title || photo.date || photo.place) && (
            <div className="border-t border-white/10 bg-black/70 px-5 py-4">
              <div className="text-sm font-semibold text-white">
                {photo.title ?? "Activity"}
              </div>
              <div className="mt-1 text-xs text-white/70">
                {[photo.date, photo.place].filter(Boolean).join(" · ")}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default function BoardPage() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <PageEnter>
      <SectionStatic title="Photo" light titleAlign="left">
        <Banner />

        <div className="mt-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {boardPhotos.map((p) => (
              <PhotoCard key={p.id} photo={p as Photo} onOpen={setSelected} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-xs text-white/40">
          {/* * 사진은 public/board 폴더에 추가하고, data/board.ts에 항목만 늘리면 자동으로 반영됩니다. */}
        </div>
      </SectionStatic>
      </PageEnter>
      
      {/* 모달 */}
      <PhotoModal photo={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
