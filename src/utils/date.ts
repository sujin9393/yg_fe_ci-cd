// utils/date.ts에 추가하거나 임시로 함수 교체
export const formatDateTimeForDTO = (date: Date): string => {
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${MM}-${dd}T${HH}:${mm}`;
};

/**
 * YYYY.MM.DD HH:mm 형식으로 날짜+시간 포맷
 */
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours < 12 ? "오전" : "오후";
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;

  return `${yyyy}.${mm}.${dd} ${ampm} ${String(displayHour).padStart(2, "0")}:${minutes}`;
}

/**
 * 몇 시간 전, 몇 분 전처럼 상대 시간 표시
 */
export function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const target = new Date(dateString);
  const diff = (now.getTime() - target.getTime()) / 1000; // 초 차이

  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;

  return target.toLocaleDateString("ko-KR"); // 오래됐으면 날짜 출력
}

/**
 * D-day 계산
 */
export function getDday(targetDateString: string): string {
  const today = new Date();
  const targetDate = new Date(targetDateString);

  // 시간 무시하고 날짜만 비교
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const targetMidnight = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
  );

  const diffTime = targetMidnight.getTime() - todayMidnight.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return "D-DAY";
  return `D+${Math.abs(diffDays)}`;
}
