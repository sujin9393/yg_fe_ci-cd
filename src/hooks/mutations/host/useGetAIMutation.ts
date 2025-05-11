import { useMutation } from "@tanstack/react-query";
import { getAI } from "../../../api/host";
import { AIResponse } from "../../../types/hostType";

export const useGetAIMutation = () => {
  return useMutation<AIResponse, Error, string>({
    mutationFn: getAI,

    onSuccess: (data) => {
      alert("✅ 설명 생성이 완료되었습니다.");
      console.log("설명:", data.summary);
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
