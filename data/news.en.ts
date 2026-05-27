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
    slug: "amse-KSMPEspring-2026",
    category: "news",
    title: "Attending the 2026 Spring KSMPE",
    date: "2026.04.30",
    thumbnail: "/images/news/news-260430.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "Researchers attended the 2026 Spring KSMPE." },
      { type: "p", text: "The total number of students in the laboratory conducted a oral presentation." },
    ],
  },

  {
    slug: "amse-tribospring-2026",
    category: "news",
    title: "2026 Spring Trivology Attendance\nand awards at conferences",
    date: "2026.04.24",
    thumbnail: "/images/news/news-260424.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "Researchers attended the 2026 Spring Trivology Conference." },
      { type: "p", text: "Yoon Ki-hyun, a student in the Integrated M.S./Ph.D. Program, won the Excellence Award in the field of excellent thesis." },
    ],
  },

  {
    slug: "amse-website-2026",
    category: "news",
    title: "AMSE, New Lab Website Open",
    date: "2026.01.22",
    thumbnail: "/images/news/news-260122.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "We've released a new AMSE lab website," },
      { type: "p", text: "where you can find research/members/paper/news in one place." },
    ],
  },

  {
    slug: "amse-newyear-2026",
    category: "media",
    title: "AMSE Holds New Year's Dinner Together",
    date: "2026.01.16",
    thumbnail: "/images/news/news-260116e.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "AMSE New Year's celebration group dinner was held." },
      { type: "p", text: "" },
    ],
  },

  {
    slug: "amse-tour0105-2026",
    category: "media",
    title: "Conducted a field trip to Angel Lux and KICET",
    date: "2026.01.05",
    thumbnail: "/images/news/news-260105e.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "We conducted a tour of Angel Lux and KICET." },
      { type: "p", text: "A thousand hearings are not worth one seeing." },
    ],
  },
  
  {
    slug: "park-amse-cocrcufeni",
    category: "news",
    title: "CoCrCuFeNi HEA paper published by Engineering Failure Analysis",
    date: "2025.11.13",
    thumbnail: "/images/news/news-251113e.jpg",
    excerpt: " ",
    content: [
      { type: "p", text: "The final publication of the CoCrCuFeNi HEA EFA paper was successful." },
      { type: "p", text: "" },
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