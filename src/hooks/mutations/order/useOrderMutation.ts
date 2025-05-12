import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postOrder } from "../../../api/order";
import { useModalStore } from "../../../stores/useModalStore";

export const useOrderMutation = (postId: number) => {
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postOrder,
    onSuccess: (data) => {
      console.log("주문 성공:", data);

      // ✅ post detail refetch
      queryClient.invalidateQueries({
        queryKey: ["postDetail", postId],
      });

      closeModal();
      openModal("success");
    },
    onError: (err) => {
      console.error("주문 실패", err);
    },
  });
};
