import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMyInfo } from "../../api/user";
import { useUserStore } from "../../stores/useUserStore";

export const useMyInfoQuery = () => {
  const { setUser, clearUser } = useUserStore();

  // ✅ 쿠키에 AccessToken이 있는지 확인
  const hasAccessToken =
    typeof document !== "undefined" && document.cookie.includes("AccessToken");

  const { data, isSuccess } = useQuery({
    queryKey: ["myInfo"],
    queryFn: getMyInfo,
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: hasAccessToken, // ✅ 조건부 실행
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data);
    } else if (!hasAccessToken) {
      clearUser(); // 쿠키 없으면 명시적으로 로그아웃 상태로 초기화
    }
  }, [isSuccess, data, hasAccessToken, setUser, clearUser]);

  return { data, isSuccess };
};
