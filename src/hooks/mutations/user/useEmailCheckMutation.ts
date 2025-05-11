import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { confirmEmail } from "../../../api/user";

type EmailCheckResponse = { isDuplication: "YES" | "NO" };

export const useEmailCheckMutation = (
  options?: UseMutationOptions<EmailCheckResponse, Error, string>
) => {
  return useMutation({
    mutationFn: confirmEmail,

    onSuccess: (data, variables, context) => {
      // ✅ 기본 alert 동작 유지
      if (data.isDuplication === "NO") {
        alert("✅ 사용 가능한 이메일입니다.");
      } else {
        alert("❌ 이미 등록된 이메일입니다.");
      }

      // ✅ 외부에서 넘긴 onSuccess도 실행
      options?.onSuccess?.(data, variables, context);
    },

    onError: (error, variables, context) => {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }

      options?.onError?.(error, variables, context);
    },
  });
};
