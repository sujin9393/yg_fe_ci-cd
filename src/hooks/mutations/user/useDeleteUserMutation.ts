import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../../api/user";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../stores/useUserStore";

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
      alert("앗! 탈퇴 실패했습니다 😓");
      console.error("회원탈퇴 실패", error);
    },
  });
};
