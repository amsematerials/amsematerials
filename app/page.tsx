"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import NewsSection from "@/components/newssection";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // 히어로 스크롤 시 살짝 줄어들고 페이드아웃 (Hero 전용)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  // ===== 3번(이미지/비주얼) 섹션 전용 progress =====
  const showcaseRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-black min-h-screen">
      {/* ===== 1. 풀스크린 비디오 히어로 ===== */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-[100vh] w-full overflow-hidden"
      >
        {/* 배경 비디오 */}
        <video
          src="/hero2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "blur(2px) brightness(1.02) contrast(1.05)",
            transform: "scale(1.06)",
          }}
        />

        {/* 오버레이(가독성 + 깊이감) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />

        {/* 가운데 콘텐츠 */}
        <motion.div
          style={{ y: heroTextY }}
          className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-center text-white"
        >
          {/* (1) 자막 없는 로고 크게 */}
          <div className="mx-auto mb-6">
            <Image
              src="/logo-amse-s.png"
              alt="AMSE"
              width={520}
              height={160}
              priority
              className="w-[240px] sm:w-[320px] md:w-[420px] h-auto opacity-95 drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
            />
          </div>

          {/* (2) 한글 메인 타이틀 */}
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-5 drop-shadow-xl">
            첨단소재 및 재료강도평가학 연구실
          </h1>

          {/* (3) 영문 설명 */}
          <p className="text-sm md:text-base text-white/80 max-w-3xl mx-auto">
            고온 및 기타 극한 환경에서 구조적 안정성을 유지할 수 있는 재료의 개발과 기계적 강도 평가
          </p>

          {/* (4) 구분선 */}
          <div className="mt-8 max-w-3xl mx-auto w-full">
            <div className="h-px w-full bg-white/20" />
          </div>

          {/* (5) Scroll (한화처럼 미니멀) */}
          <div className="mt-7 text-white/70 text-xs flex flex-col items-center gap-2">
            <span className="tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-white/35" />
          </div>
        </motion.div>
      </motion.section>

      {/* ===== 2. 자막/문단 블록: 문단 간격 크게 ===== */}
        <div className="space-y-16 md:space-y-20">
         <Section light title="가장 매력적인 첨단소재를 향하여" divider>
           <p className="text-base md:text-lg text-white/70 max-w-3xl">
              본 연구실은 「가장 매력적인 첨단소재를 만들고 기계적 특성을 평가해보자」라는 연구 정책 아래,
             <br />
             고체역학을 중심으로 한 기초 물리 이해를 바탕으로 새로운 금속, 나노, 복합재료를 창출하고 그 성능을
             검증하는 연구를 수행하고 있다.
           </p>
         </Section>

         {/* 우측 정렬(제목+본문) */}
          <Section light align="right" divider>
            <div className="ml-auto max-w-3xl">
             <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
               미시 구조에서 거시 물성으로
              </h2>
             <p className="text-base md:text-lg text-white/70">
               보이지 않는 재료 내부 구조가 전체 물성을 결정하지만,
               <br />
                그 연결 메커니즘은 여전히 미해결 과제로 남아 있다.
             </p>
           </div>
         </Section>

         <Section light title="보이지 않는 것에서 실제 성능으로">
            <p className="text-base md:text-lg text-white/70 max-w-3xl">
             AMSE는 나노 스케일부터 실제 스케일까지의 재료를 직접 구현하고 평가함으로써,
             <br />
              미시 구조와 거시 물성 간의 연결 메커니즘을 밝히는 것을 목표로 한다.
            </p>
         </Section>
        </div>

      {/* ===== 3. 이미지/비주얼 영역 (한화 Protect 섹션 느낌) ===== */}
      <section ref={showcaseRef} className="relative h-[360vh] bg-black">
        {/* sticky stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* --- BG 1: 금속 트라이볼로지 --- */}
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: useTransform(showcaseProgress, [0.0, 0.3, 0.4], [1, 1, 0]),
              scale: useTransform(showcaseProgress, [0.0, 0.4], [1.03, 1.0]),
            }}
          >
            <div className="absolute inset-0 bg-[url('/tribo.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* --- BG 2: 현무암 섬유 복합재 --- */}
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: useTransform(showcaseProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]),
              scale: useTransform(showcaseProgress, [0.3, 0.7], [1.04, 1.0]),
            }}
          >
            <div className="absolute inset-0 bg-[url('/basalt.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* --- BG 3: 분자동역학 시뮬레이션 --- */}
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: useTransform(showcaseProgress, [0.6, 0.7, 1.0], [0, 1, 1]),
              scale: useTransform(showcaseProgress, [0.6, 1.0], [1.04, 1.0]),
            }}
          >
            <div className="absolute inset-0 bg-[url('/md.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Right-aligned captions (fade in/out per scene) */}
          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
            <div className="ml-auto w-full max-w-xl text-right">
              {/* Caption 1 */}
              <motion.div
                className="absolute right-6"
                style={{
                  opacity: useTransform(showcaseProgress, [0.0, 0.3, 0.4], [1, 1, 0]),
                  y: useTransform(showcaseProgress, [0.0, 0.4], [0, -12]),
                }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
                  연구 중점 분야
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  금속 트라이볼로지
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  고온·고하중 조건에서의 마찰/마모 거동을 정량화하고, 표면·코팅 설계로 내구성과 신뢰성을
                  향상합니다.
                </p>
              </motion.div>

              {/* Caption 2 */}
              <motion.div
                className="absolute right-6"
                style={{
                  opacity: useTransform(showcaseProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]),
                  y: useTransform(showcaseProgress, [0.3, 0.4, 0.7], [12, 0, -12]),
                }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
                  연구 중점 분야
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  현무암 섬유 복합재 연구
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  경량 구조 및 EMI 차폐를 위한 섬유 복합재 설계와 금속 코팅 기반 기능성 향상을 연구합니다.
                </p>
              </motion.div>

              {/* Caption 3 */}
              <motion.div
                className="absolute right-6"
                style={{
                  opacity: useTransform(showcaseProgress, [0.6, 0.7, 1.0], [0, 1, 1]),
                  y: useTransform(showcaseProgress, [0.6, 0.7, 1.0], [12, 0, 0]),
                }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
                  연구 중점 분야
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  분자동역학 시뮬레이션
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  LAMMPS 기반 원자 스케일 해석으로 결정립·전위·상변태 메커니즘을 규명하고, 실험 결과와
                  연결합니다.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Optional: subtle progress line (Hanwha-like minimal) */}
          <div className="absolute left-0 right-0 bottom-10 z-20 px-8">
            <div className="h-px w-full bg-white/15" />
            <motion.div
              className="h-px bg-white/45"
              style={{
                width: useTransform(showcaseProgress, [0.0, 1.0], ["0%", "100%"]),
              }}
            />
          </div>
        </div>
      </section>

      <NewsSection />

      {/* ===== 4. Join 섹션 (연구실 모집 안내) ===== */}
      <Section title="AMSE와 연구를 시작하세요">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: main text */}
          <div className="md:col-span-8 space-y-6 text-white/80 leading-relaxed">
            <p>
             본 연구실은 전자현미경 관찰과 수치 계산 기술뿐만 아니라,
              <br />
             기계적 특성 평가 연구를 통해 축적된 지식을 바탕으로
              <br />
              고체 내부의 상호작용과 소재 간 화학적 반응을 탐구하고,
              <br />
             이를 통해 새로운 금속·나노·복합재료를 설계하고자 합니다.
           </p>

           <p>
              이 과정에서 다양한 실험적·해석적 방법론을 함께 개발하며,
              <br />
              재료 거동에 대한 근본적인 이해를 추구하는 연구에
              <br />
              학생 연구원들의 적극적인 참여를 환영합니다.
            </p>

            <p>
             고체 및 구조 거동에 흥미가 있거나,
             <br />
              마이크로–나노 스케일의 세계에 관심이 있는 학생,
             <br />
             새로운 기술과 지식을 접하며 스스로 질문하고 현상을 이해하는 연구를 선호하는 학생이라면
             <br />
             전공과 학년을 불문하고 부담 없이 문의해 주시기 바랍니다.
           </p>

            <p>연구실 견학 및 면담은 언제든지 열려 있습니다.</p>

          {/* Contact button (scroll to contact section) */}
            <Link href="/contact">
             <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:border-white/30 transition"
              >
               Contact <span className="text-white/60">~&gt;</span>
              </button>
            </Link>
          </div>

          {/* Right: lab mark (logo) */}
           <div className="md:col-span-4 flex md:justify-end mt-30">
            <div className="w-full max-w-[520px]">
              <Image
               src="/logo-amse.png"
                alt="Lab Mark"
                width={520}
               height={160}
               className="w-full h-auto opacity-90 drop-shadow-[0_18px_50px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
       </div>
      </Section>

    </div>
  );
}
