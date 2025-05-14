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
      openModal("success", data);
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.log(error.message);
        if (error.message === "Access Denied") {
          alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
          closeModal();
          openModal("login");
        } else {
          alert("오류가 발생했습니다. 인스타그램으로 문의해주세요.");
        }
      } else {
        alert("알 수 없는 오류가 발생했습니다. 인스타그램으로 문의해주세요.");
      }
    },
  });
};
