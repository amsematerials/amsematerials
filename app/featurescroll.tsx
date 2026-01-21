"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Item = {
  image: string;   // "/tribo.jpg" 같은 public 경로
  title: string;
  desc: string;
};

export default function FeatureScroll({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 이 섹션 전체를 스크롤할 때 진행률 0~1
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const n = items.length;

  return (
    <section ref={ref} className="relative h-[260vh] bg-black">
      {/* sticky 화면 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 이미지 레이어들 (서로 페이드 교체 + 살짝 확대) */}
        {items.map((it, i) => {
          const center = i / (n - 1); // 0~1 사이 중심점
          const opacity = useTransform(
            scrollYProgress,
            [Math.max(0, center - 0.18), center, Math.min(1, center + 0.18)],
            [0, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [Math.max(0, center - 0.18), center, Math.min(1, center + 0.18)],
            [1.06, 1.0, 1.06]
          );

          return (
            <motion.div
              key={it.title}
              style={{ opacity, scale }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${it.image})` }}
              />
              {/* 가독성용 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/20 to-black/10" />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          );
        })}

        {/* 텍스트 (우측 정렬) */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
          <div className="ml-auto w-full max-w-xl text-right">
            {items.map((it, i) => {
              const center = i / (n - 1);
              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, center - 0.18), center, Math.min(1, center + 0.18)],
                [0, 1, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [Math.max(0, center - 0.18), center, Math.min(1, center + 0.18)],
                [14, 0, -14]
              );

              return (
                <motion.div key={it.desc} style={{ opacity, y }} className="absolute right-6">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
                    Research Focus
                  </p>
                  <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-white/80">
                    {it.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
