import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser, SignupRequestData } from "../../../api/user";
import { useUserStore } from "../../../stores/useUserStore";
import { useNavigate } from "react-router-dom";

export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupRequestData) => postUser(data),
    onSuccess: (res) => {
      alert(`반갑습니다. ${res.nickname}님🥳`);
      useUserStore.getState().setUser(res); // 유저 저장
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["myInfo"] });
    },
    onError: (err) => {
      console.error("회원가입 실패:", err);
    },
  });
};
