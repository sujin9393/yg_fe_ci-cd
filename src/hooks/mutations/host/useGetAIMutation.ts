import { useMutation } from "@tanstack/react-query";
import { getAI } from "../../../api/host";
import { AIResponse } from "../../../types/hostType";
import { UseFormSetValue } from "react-hook-form";
import { PostFormData } from "../../../schemas/writePostSchema";

export const useGetAIMutation = (
  setValue: UseFormSetValue<PostFormData> // ✅ 타입 안전하게 정의
) => {
  return useMutation<AIResponse, Error, string>({
    mutationFn: getAI,

    onSuccess: (data) => {
      alert("✅ 설명 생성이 완료되었습니다.");
      console.log("설명:", data);

      // ✅ 설명 필드 자동 입력
      setValue("description", data.summary, { shouldValidate: true });
      setValue("title", data.product_name, { shouldValidate: true });
      setValue("name", data.product_lower_name, { shouldValidate: true });
      setValue("price", data.total_price, { shouldValidate: true });
      setValue("totalAmount", data.count, { shouldValidate: true });
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
