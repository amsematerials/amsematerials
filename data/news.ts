// data/news.ts
export type NewsItem = {
  slug: string;
  category: "news" | "media";
  title: string;
  date: string;
  thumbnail: string;
  excerpt?: string;
  content?: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "img"; src: string; alt?: string; caption?: string }
    | { type: "ul"; items: string[] }
  >;
};

// ✅ 기존에 있던 배열 이름이 newsItems라면 유지
export const newsItems: NewsItem[] = [
  {
    slug: "amse-website-2026",
    category: "news",
    title: "AMSE, 신규 연구실 웹사이트\n오픈",
    date: "2026.01.22",
    thumbnail: "/images/news/news-260122.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "AMSE 연구실 신규 웹사이트를 공개했습니다." },
      { type: "p", text: "연구 분야/구성원/논문/소식을 한 곳에서 확인할 수 있습니다." },
    ],
  },

  {
    slug: "amse-newyear-2026",
    category: "media",
    title: "AMSE, 신년 회식 실시",
    date: "2026.01.16",
    thumbnail: "/images/news/news-260116.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "AMSE 새해 기념 단체 회식 실시했습니다." },
      { type: "p", text: "잘먹었습니다!" },
    ],
  },

  {
    slug: "amse-tour0105-2026",
    category: "media",
    title: "엔젤럭스 및 세기원 견학 실시",
    date: "2026.01.22",
    thumbnail: "/images/news/news-260105.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "엔젤럭스 및 세기원 견학을 실시했습니다." },
      { type: "p", text: "백문이 불여일견." },
    ],
  },
  
  {
    slug: "park-amse-cocrcufeni",
    category: "news",
    title: "CoCrCuFeNi HEA 논문\nEngineering Failure\nAnalysis 게재",
    date: "2025.11.13",
    thumbnail: "/images/news/news-251113.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "CoCrCuFeNi HEA EFA 논문 최종 게재에 성공했습니다." },
      { type: "p", text: "대박." },
    ],
  },  
  // ...나머지
];

// ✅ 내가 쓰는 이름(NEWS)도 alias로 제공 (breaking change 없이 해결)
export const NEWS = newsItems;

export function getNewsSorted() {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestNews(count = 4) {
  return getNewsSorted().slice(0, count);
}

export function getNewsBySlug(slug: string) {
  return newsItems.find((n) => n.slug === slug);
}