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
    { label: "Favorite Pastime", value: "electric guitar" },
    { label: "High School", value: " Busan Haeundae High School" },
    {
      label: "Research field",
      value: "Advanced materials (high entropy alloys and composites) and material strength",
    },
  ],
};

export const phds: Member[] = [
  {
    id: "phd-dogyun-byeon",
    nameEn: "Dogyun Byeon",
    nameKr: "변도균",
    role:
      "G-LAMP Postdoctoral Researcher (Oh–Yoon Shared Lab), Ph.D (Toyota Technological Institute)",
    photo: "/members/dogyun_byeon.jpg",
    info: [
      { label: "Birthplace", value: "Dongdaemun-gu, Seoul" },
      { label: "High School", value: "Kyungdong High School, Seoul" },
      { label: "Favorite Pastime", value: "Band drum, billiards" },
      {
        label: "Research field",
        value: "Multi-element material design (high entropy alloy, composite material)",
      },
    ],
  },
  {
    id: "phd-seongu-sin",
    nameEn: "Seong U Sin",
    nameKr: "신성우",
    role:
      "Ph.D",
    photo: "/members/default.jpg",
    info: [
      { label: "Birthplace", value: "000" },
      { label: "High School", value: "000" },
      { label: "Favorite Pastime", value: "000" },
      { label: "Research field", value: "000" },
    ],
  },
];

export const students: Member[] = [
  {
    id: "stu-kihyun-yoon",
    nameEn: "Kihyun Yoon",
    nameKr: "윤기현",
    role: "Master's–Doctoral Program",
    photo: "/members/kihyun_yoon.jpg",
    info: [
      { label: "Birthplace", value: "Masanhoewon-gu, Changwon-si" },
      { label: "High School", value: "Masan Jungang High School" },
      { label: "Favorite Pastime", value: "weight training" },
      { label: "Research field", value: "Composite material (carbon fiber, basalt fiber)" },
    ],
  },
  {
    id: "stu-minho-kim",
    nameEn: "Minho Kim",
    nameKr: "김민호",
    role: "M.1",
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
    role: "B.4",
    photo: "/members/jeongwon_ha.jpg",
    info: [
      { label: "Birthplace", value: "Masanhoewon-gu, Changwon-si" },
      { label: "High School", value: "Masan Yongma High School" },
      { label: "Favorite Pastime", value: "swimming" },
      { label: "Research field", value: "Metal Matrix Composite, MMC" },
    ],
  },
  {
    id: "stu-taemin-kim",
    nameEn: "Taemin Kim",
    nameKr: "김태민",
    role: "B.3",
    photo: "/members/taemin_kim.jpg",
    info: [
      { label: "Birthplace", value: "Jinhae-gu, Changwon-si" },
      { label: "High School", value: "Jinhae high school" },
      { label: "Favorite Pastime", value: "Rap" },
      { label: "Research field", value: "Fatigue analysis (metal, composite)" },
    ],
  },
  {
    id: "stu-minheon-chu",
    nameEn: "Minheon Chu",
    nameKr: "추민헌",
    role: "B.3",
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
    role: "B.3",
    photo: "/members/chanui_park.jpg",
    info: [
      { label: "Birthplace", value: "Jinhae-gu, Changwon-si" },
      { label: "High School", value: "Jinhae high school" },
      { label: "Favorite Pastime", value: "Listening to music, coding, and editing videos" },
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
    role: "B.3",
    photo: "/members/joohan_jo.jpg",
    info: [
      { label: "Birthplace", value: "Seongsan-gu, Changwon-si" },
      { label: "High School", value: "Changwon-NamSan High School" },
      {
        label: "Favorite Pastime",
        value:
          "Walk, explore cultural heritage, travel, bike, design, regulation, F1, piano, indie musician discovery",
      },
      { label: "Research field", value: "Composite Materials (Carbon Fiber, Basalt Fiber)" },
    ],
  },
];
