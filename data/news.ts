// /data/news.ts
export type NewsCategory = "news" | "media";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  title: string;
  date: string; // "YYYY.MM.DD"
  thumbnail: string; // "/news/xxx.jpg"
  excerpt?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "amse-website-2026",
    category: "news",
    title: "신규 연구실 웹사이트 오픈",
    date: "2026.01.19",
    thumbnail: "/news/news-260119_2.jpg",
    excerpt: " ",
  },
  {
    slug: "2026-new-year",
    category: "media",
    title: "신년 맞이 회식 실시",
    date: "2026.01.16",
    thumbnail: "/news/news-260116.jpg",
  },
  {
    slug: "2615-field-tour",
    category: "media",
    title: "엔젤럭스 & 세기원 견학 실시",
    date: "2026.01.05",
    thumbnail: "/news/news-260105.jpg",
  },
  {
    slug: "CoCrCuFeNi-EFA-Paper",
    category: "news",
    title: "CoCrCuFeNi HEA 논문 Engineering Failure Analysis 게재",
    date: "2025.11.13",
    thumbnail: "/news/news-251113.jpg",
  },
];
