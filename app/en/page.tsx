"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import NewsSection from "@/components/newssection.en";
import ScrollToTop from "@/components/ScrollToTop";

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
            Advanced Materials and Material Strength Evaluation Laboratory
          </h1>

          {/* (3) 영문 설명 */}
          <p className="text-sm md:text-base text-white/80 max-w-3xl mx-auto">
            Development and mechanical strength assessment of materials capable of maintaining structural stability in high temperature and other extreme environments
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
         <Section light title="Toward the most attractive high-tech materials" divider>
           <p className="text-base md:text-lg text-white/70 max-w-3xl">
              Under the research policy of 
             <br /> 
              "Let's make the most attractive high-tech materials and evaluate mechanical properties,"
             <br />
             this lab is conducting research to create new metals, nano, and composite materials and verify their performance based on basic physical understanding centered on solid mechanics.
           </p>
         </Section>

         {/* 우측 정렬(제목+본문) */}
          <Section light align="right" divider>
            <div className="ml-auto max-w-3xl">
             <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
               From microstructure to macroscopic properties
              </h2>
             <p className="text-base md:text-lg text-white/70">
               Although the invisible material internal structure determines the overall physical properties
               <br />
                its connection mechanism remains an open question.
             </p>
           </div>
         </Section>

         <Section light title="From invisible to actual performance">
            <p className="text-base md:text-lg text-white/70 max-w-3xl">
             AMSE aims to reveal the mechanism of connection 
             <br />
             between microstructure and macroscopic properties
             <br />
              by directly implementing and evaluating materials from nanoscale to real scale.
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
                  Research focus
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  Metal Tribology
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  Quantifies friction/wear behavior under high-temperature and high-load conditions, and improves durability and reliability with surface and coating design.
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
                  Research focus
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  Basalt Fiber Composite Materials
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  We study fiber composite design for lightweight structure and EMI shielding and metal coating-based functionality enhancements.
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
                  Research focus
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  Molecular Dynamics
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80">
                  The crystal grain, potential, and phase transformation mechanisms are identified by LAMMPS-based atomic scale analysis and linked to experimental results.
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
      <Section title="Start researching with AMSE">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left: main text */}
          <div className="md:col-span-8 space-y-6 text-white/80 leading-relaxed">
            <p>
             Our laboratory aims to explore interactions within solids and chemical reactions between materials,
              <br />
             drawing on accumulated expertise in electron microscopy observations, numerical simulations,
              <br />
              and mechanical property evaluation.
              <br />
             Through this approach, we seek to design novel metallic, nano-, and composite materials.
           </p>

           <p>
              In this process, we develop a wide range of experimental and analytical methodologies in parallel
              <br />
              and pursue research that fosters a fundamental understanding of material behavior.
              <br />
              We warmly welcome the active participation of student researchers who share this interest.
            </p>

            <p>
             Students who are interested in solid and structural behavior,
             <br />
              curious about the micro- to nanoscale world,
             <br />
             and eager to engage with new technologies and knowledge—
             <br />
             especially those who enjoy asking questions and understanding physical phenomena—
             <br />
             are encouraged to contact us freely, regardless of major or academic year.
           </p>

            <p>Laboratory tours and meetings are always open and available.</p>

          {/* Contact button (scroll to contact section) */}
            <Link href="/en/contact">
             <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:border-white/30 transition"
              >
               Contact <span className="text-white/60">→</span>
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

    <ScrollToTop />

    </div>
  );
}
