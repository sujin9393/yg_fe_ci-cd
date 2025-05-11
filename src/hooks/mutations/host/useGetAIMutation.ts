import { useMutation } from "@tanstack/react-query";
import { getAI } from "../../../api/host";
import { AIResponse } from "../../../types/hostType";

export const useGetAIMutation = (
  setValue: (
    field: "description",
    value: string,
    options?: { shouldValidate?: boolean }
  ) => void
) => {
  return useMutation<AIResponse, Error, string>({
    mutationFn: getAI,

    onSuccess: (data) => {
      alert("✅ 설명 생성이 완료되었습니다.");
      console.log("설명:", data.summary);

      // ✅ 설명 필드 자동 입력
      setValue("description", data.summary, { shouldValidate: true });
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
