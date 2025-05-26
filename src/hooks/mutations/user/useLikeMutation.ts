// hooks/mutations/user/usePostLikeMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteLike, postLike } from "../../../api/user";

export const usePostLikeMutation = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postLike(postId),
    onSuccess: () => {
      // 예: 관심 공구 목록이나 post 상세 refetch
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
    },
    onError: (error: AxiosError) => {
      console.error("관심 등록 실패", error);
    },
  });
};

export const useDeleteLikeMutation = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteLike(postId),
    onSuccess: () => {
      // 예: 관심 공구 목록이나 post 상세 refetch
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
    },
    onError: (error: AxiosError) => {
      console.error("관심 취소 실패", error);
    },
  });
};
