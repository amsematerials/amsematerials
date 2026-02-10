export default function SectionStatic({
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
  const contentAlignClass =
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";

  const resolvedTitleAlign = titleAlign ?? align;
  const titleAlignClass =
    resolvedTitleAlign === "right"
      ? "text-right"
      : resolvedTitleAlign === "center"
      ? "text-center"
      : "text-left";

  return (
    <section
      className={`max-w-6xl mx-auto px-6 pt-20 pb-14 ${contentAlignClass} ${
        light ? "text-white" : "text-white"
      }`}
    >
      {title && (
        <h2 className={`text-2xl md:text-4xl font-semibold mb-6 leading-tight ${titleAlignClass}`}>
          {title}
        </h2>
      )}

      {children}

      {divider && (
        <div className="mt-14">
          <div className="h-px w-full bg-white/20" />
        </div>
      )}
    </section>
  );
}
