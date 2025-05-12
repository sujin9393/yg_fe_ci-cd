import { useMutation } from "@tanstack/react-query";
import { getAI } from "../../../api/host";
import { AIResponse } from "../../../types/hostType";
import { UseFormSetValue } from "react-hook-form";
import { PostFormData } from "../../../schemas/writePostSchema";

export const useGetAIMutation = (
  setValue: UseFormSetValue<PostFormData>, // ✅ 타입 안전하게 정의
  setIsAISubmitted: (v: boolean) => void
) => {
  return useMutation<AIResponse, Error, string>({
    mutationFn: getAI,

    onSuccess: (data) => {
      setValue("description", data.summary, { shouldValidate: true });
      setValue("title", data.title, { shouldValidate: true });
      setValue("name", data.product_name, { shouldValidate: true });
      setValue("price", data.total_price, { shouldValidate: true });
      setValue("totalAmount", data.count, { shouldValidate: true });
      setIsAISubmitted(true);
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
