"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({
  title,
  children,
  light = false,
  align = "left",
  titleAlign,
  divider = false,
}: {
  title?: string;
  children: React.ReactNode;
  light?: boolean;
  align?: "left" | "right" | "center";
  titleAlign?: "left" | "right" | "center";
  divider?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  // ✅ 직접 inView 감지 (whileInView보다 안정적)
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const initialX = align === "right" ? 28 : align === "left" ? -28 : 0;
  const initialY = align === "center" ? 24 : 0;

  const contentAlignClass =
    align === "right"
      ? "text-right"
      : align === "center"
      ? "text-center"
      : "text-left";

  const resolvedTitleAlign = titleAlign ?? align;
  const titleAlignClass =
    resolvedTitleAlign === "right"
      ? "text-right"
      : resolvedTitleAlign === "center"
      ? "text-center"
      : "text-left";

  return (
    <motion.section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 pt-20 pb-14 ${contentAlignClass} ${
        light ? "text-white" : "text-white"
      }`}
      // ✅ 핵심: "보이는 안전장치" — 기본은 항상 보이게
      initial={{ opacity: 1, x: 0, y: 0}}
      // ✅ inView가 감지되면 애니메이션 상태로 "한 번만" 전환
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0}
          : { opacity: 1, x: initialX, y: initialY}
      }
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {title && (
        <h2
          className={`text-2xl md:text-4xl font-semibold mb-6 leading-tight ${titleAlignClass}`}
        >
          {title}
        </h2>
      )}

      {children}

      {divider && (
        <div className="mt-14">
          <div className="h-px w-full bg-white/20" />
        </div>
      )}
    </motion.section>
  );
}
