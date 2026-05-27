// ✅ data/members.ts (FINAL)

export type Member = {
  id: string;
  nameEn: string;
  nameKr?: string;
  role: string;
  photo: string; // "/members/xxx.jpg"
  info: { label: string; value: string }[];
};

export const professor: Member = {
  id: "prof-sungmin-yoon",
  nameEn: "Sungmin Yoon",
  nameKr: "윤성민",
  role: "Professor, Ph.D (Nagoya University, Japan)",
  photo: "/members/sungmin_yoon.jpg",
  info: [
    { label: "Birthplace", value: "Jinhae-gu, Changwon-si" },
    { label: "Favorite Pastime", value: "Electric guitar" },
    { label: "High School", value: " Busan Haeundae High School" },
    {
      label: "Research field",
      value: "Advanced materials (high entropy alloys and composites) and material strength",
    },
  ],
};

export const phds: Member[] = [
  {
    id: "phd-sungwoo-shin",
    nameEn: "Sungwoo Shin",
    nameKr: "신성우",
    role:
      "Research Institute of DNA+, Ph.D",
    photo: "/members/sungwoo_shin.jpg",
    info: [
      { label: "Birthplace", value: "Changwon-si" },
      { label: "High School", value: "Gyeongsang High School" },
      { label: "Favorite Pastime", value: "-" },
      { label: "Research field", value: "Machine tools" },
    ],
  },
];

export const students: Member[] = [
  {
    id: "stu-kihyun-yoon",
    nameEn: "Kihyun Yoon",
    nameKr: "윤기현",
    role: "Second-Year Student in the Integrated M.S./Ph.D. Program",
    photo: "/members/kihyun_yoon.jpg",
    info: [
      { label: "Birthplace", value: "Masanhoewon-gu, Changwon-si" },
      { label: "High School", value: "Masan Jungang High School" },
      { label: "Favorite Pastime", value: "Weight training" },
      { label: "Research field", value: "Composite material (carbon fiber, basalt fiber)" },
    ],
  },
  {
    id: "stu-minho-kim",
    nameEn: "Minho Kim",
    nameKr: "김민호",
    role: "Second-Year M.S. Student",
    photo: "/members/minho_kim.jpg",
    info: [
      { label: "Birthplace", value: "Masanhoewon-gu, Changwon-si" },
      { label: "High School", value: "Masan Jungang High School" },
      { label: "Favorite Pastime", value: "Camping" },
      { label: "Research field", value: "Structural analysis" },
    ],
  },
  {
    id: "stu-jeongwon-ha",
    nameEn: "Jeongwon Ha",
    nameKr: "허정원",
    role: "First-Year M.S. Student",
    photo: "/members/jeongwon_ha.jpg",
    info: [
      { label: "Birthplace", value: "Masanhoewon-gu, Changwon-si" },
      { label: "High School", value: "Masan Yongma High School" },
      { label: "Favorite Pastime", value: "Swimming" },
      { label: "Research field", value: "Metal Matrix Composite, MMC" },
    ],
  },
  {
    id: "stu-taemin-kim",
    nameEn: "Taemin Kim",
    nameKr: "김태민",
    role: "Senior Undergraduate Researcher",
    photo: "/members/taemin_kim.jpg",
    info: [
      { label: "Birthplace", value: "Jinhae-gu, Changwon-si" },
      { label: "High School", value: "Jinhae high school" },
      { label: "Favorite Pastime", value: "Listening to music" },
      { label: "Research field", value: "Fatigue analysis (metal, composite)" },
    ],
  },
  {
    id: "stu-minheon-chu",
    nameEn: "Minheon Chu",
    nameKr: "추민헌",
    role: "Senior Undergraduate Researcher",
    photo: "/members/minheon_chu.jpg",
    info: [
      { label: "Birthplace", value: "Uichang-gu, Changwon-si" },
      { label: "High School", value: "ChangWon DaeSan High School" },
      { label: "Favorite Pastime", value: "sound system" },
      { label: "Research field", value: "Computer Aided Engineering (CAE)" },
    ],
  },
  {
    id: "stu-chanui-park",
    nameEn: "Chanui Park",
    nameKr: "박찬의",
    role: "Senior Undergraduate Researcher",
    photo: "/members/chanui_park.jpg",
    info: [
      { label: "Birthplace", value: "Jinhae-gu, Changwon-si" },
      { label: "High School", value: "Jinhae high school" },
      { label: "Favorite Pastime", value: "Music, coding, and traveling" },
      {
        label: "Research field",
        value: "AI-Assisted Computer Aided Engineering (AIA CAE)",
      },
    ],
  },
  {
    id: "stu-joohan-jo",
    nameEn: "Joohan Jo",
    nameKr: "조주한",
    role: "Senior Undergraduate Researcher",
    photo: "/members/joohan_jo.jpg",
    info: [
      { label: "Birthplace", value: "Seongsan-gu, Changwon-si" },
      { label: "High School", value: "Changwon-NamSan High School" },
      {
        label: "Favorite Pastime",
        value:
          "Walk, explore cultural heritage, travel, bike, design, regulation, F1, piano, and indie musician discovery",
      },
      { label: "Research field", value: "Composite Materials (Carbon Fiber, Basalt Fiber)" },
    ],
  },
];
