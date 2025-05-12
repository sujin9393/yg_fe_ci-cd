import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../../api/user";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../stores/useUserStore";
import { AxiosError } from "axios";

export const useDeleteUserMutation = () => {
  const navigate = useNavigate();
  const clearUser = useUserStore((s) => s.clearUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteUser(),
    onSuccess: (data) => {
      alert(data.message);
      clearUser();
      queryClient.clear();
      navigate("/");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response?.status === 409) {
        alert("공구 참여 중에는 탈퇴하실 수 없습니다.");
      } else {
        alert("앗! 탈퇴 실패했습니다 😓");
      }

      console.error("회원탈퇴 실패", error);
    },
  });
};
