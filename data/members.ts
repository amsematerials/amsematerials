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
    { label: "Birthplace", value: "창원특례시 진해구" },
    { label: "Favorite Pastime", value: "일렉기타" },
    { label: "High School", value: "부산해운대고" },
    {
      label: "Research field",
      value: "첨단소재(고엔트로피 합금 및 복합재료) 및 재료 강도학",
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
      { label: "Birthplace", value: "서울특별시 동대문구" },
      { label: "High School", value: "서울시 경동고등학교" },
      { label: "Favorite Pastime", value: "밴드드럼, 당구" },
      {
        label: "Research field",
        value: "다중원소재료디자인(고엔트로피합금, 복합재료)",
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
      { label: "Birthplace", value: "창원특례시 마산회원구" },
      { label: "High School", value: "마산 중앙고등학교" },
      { label: "Favorite Pastime", value: "웨이트 트레이닝" },
      { label: "Research field", value: "복합재료(탄소섬유, 현무암섬유)" },
    ],
  },
  {
    id: "stu-minho-kim",
    nameEn: "Minho Kim",
    nameKr: "김민호",
    role: "M.1",
    photo: "/members/minho_kim.jpg",
    info: [
      { label: "Birthplace", value: "창원특례시 마산회원구" },
      { label: "High School", value: "마산 중앙고등학교" },
      { label: "Favorite Pastime", value: "캠핑" },
      { label: "Research field", value: "구조해석" },
    ],
  },
  {
    id: "stu-jeongwon-ha",
    nameEn: "Jeongwon Ha",
    nameKr: "허정원",
    role: "B.4",
    photo: "/members/jeongwon_ha.jpg",
    info: [
      { label: "Birthplace", value: "창원특례시 마산회원구" },
      { label: "High School", value: "마산 용마고등학교" },
      { label: "Favorite Pastime", value: "수영" },
      { label: "Research field", value: "금속기지복합재" },
    ],
  },
  {
    id: "stu-taemin-kim",
    nameEn: "Taemin Kim",
    nameKr: "김태민",
    role: "B.3",
    photo: "/members/taemin_kim.jpg",
    info: [
      { label: "Birthplace", value: "창원특례시 진해구" },
      { label: "High School", value: "진해고등학교" },
      { label: "Favorite Pastime", value: "음악청취" },
      { label: "Research field", value: "피로해석(금속, 복합재)" },
    ],
  },
  {
    id: "stu-minheon-chu",
    nameEn: "Minheon Chu",
    nameKr: "추민헌",
    role: "B.3",
    photo: "/members/minheon_chu.jpg",
    info: [
      { label: "Birthplace", value: "창원특례시 의창구" },
      { label: "High School", value: "창원 대산고등학교" },
      { label: "Favorite Pastime", value: "음향기기" },
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
      { label: "Birthplace", value: "창원특례시 진해구" },
      { label: "High School", value: "진해고등학교" },
      { label: "Favorite Pastime", value: "음악 감상, 코딩, 영상편집" },
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
      { label: "Birthplace", value: "창원특례시 성산구" },
      { label: "High School", value: "창원 남산고등학교" },
      {
        label: "Favorite Pastime",
        value:
          "산책, 문화유산 탐방, 여행, 자전거, 설계, 규정, F1, 피아노, 인디 뮤지션 발굴",
      },
      { label: "Research field", value: "복합재료(탄소섬유, 현무암섬유)" },
    ],
  },
];
