// app/news/page.tsx (Server Component)
import { Suspense } from "react";
import NewsClient from "./NewsClient";

export const dynamic = "force-static";

export default function NewsPage() {
  return (
    <main className="bg-black min-h-screen px-6 md:px-12 py-16">
      <Suspense fallback={<div className="text-white/60">Loading...</div>}>
        <NewsClient />
      </Suspense>
    </main>
  );
}
