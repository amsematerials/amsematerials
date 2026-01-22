export type BoardPhoto = {
  id: number;
  src: string;        // public 아래 경로
  alt: string;
  title?: string;     // hover 시 짧은 제목
  date?: string;      // "2025.07" 같은 표시(선택)
  place?: string;     // "KTS 2025" 같은 표시(선택)
};

export const boardPhotos: BoardPhoto[] = [
  // ✅ 예시 (네가 public/board 에 파일 넣고 이름만 맞춰주면 됨)
  { id: 1, src: "/board/board-01.jpg", alt: "Lab activity photo 01", title: "Lecture", date: "2025.07", place: "Changwon national university" },
  { id: 2, src: "/board/board-02.jpg", alt: "Lab activity photo 02", title: "Session", date: "2025.07" },
  { id: 3, src: "/board/board-03.jpg", alt: "Lab activity photo 03", title: "Group photo", date: "2025.07" },
  { id: 4, src: "/board/board-04.jpg", alt: "Lab activity photo 04" },
  { id: 5, src: "/board/board-05.jpg", alt: "Lab activity photo 05" },
  { id: 6, src: "/board/board-06.jpg", alt: "Lab activity photo 06" },
  { id: 7, src: "/board/board-07.jpg", alt: "Lab activity photo 07" },
  { id: 8, src: "/board/board-08.jpg", alt: "Lab activity photo 08" },
  { id: 9, src: "/board/board-09.jpg", alt: "Lab activity photo 09" },
  { id: 11, src: "/board/board-11.jpg", alt: "Lab activity photo 11" },
  { id: 12, src: "/board/board-12.jpg", alt: "Lab activity photo 12" },
  { id: 13, src: "/board/board-13.jpg", alt: "Lab activity photo 13" },
  { id: 14, src: "/board/board-14.jpg", alt: "Lab activity photo 14" },
  { id: 15, src: "/board/board-15.jpg", alt: "Lab activity photo 15" },
  { id: 16, src: "/board/board-16.jpg", alt: "Lab activity photo 16" },
  { id: 17, src: "/board/board-17.jpg", alt: "Lab activity photo 17" },
  { id: 18, src: "/board/board-18.jpg", alt: "Lab activity photo 18" },
  { id: 19, src: "/board/board-19.jpg", alt: "Lab activity photo 19" },
  { id: 20, src: "/board/board-20.jpg", alt: "Lab activity photo 20" },
  { id: 21, src: "/board/board-21.jpg", alt: "Lab activity photo 21" },
  { id: 22, src: "/board/board-22.jpg", alt: "Lab activity photo 22" },
  { id: 23, src: "/board/board-23.jpg", alt: "Lab activity photo 23" },
];
