import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMyInfo } from "../../api/user";
import { useUserStore } from "../../stores/useUserStore";

export const useMyInfoQuery = () => {
  const setUser = useUserStore((s) => s.setUser);

  const { data, isSuccess } = useQuery({
    queryKey: ["myInfo"],
    queryFn: getMyInfo,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data); // zustand에 저장
    }
  }, [isSuccess, data, setUser]);

  return { data, isSuccess };
};
