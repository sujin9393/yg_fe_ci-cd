import { z } from "zod";

export const writePostSchema = z.object({
  title: z.string().min(2, "공구 제목은 2자 이상이어야 해요."),
  name: z.string().min(1, "상품 이름을 입력해 주세요."),
  totalAmount: z.coerce.number().min(1, "상품 전체 가격을 입력해 주세요."),
  unitAmount: z.string().min(1, "주문 단위를 선택해 주세요."),
  dueDate: z.coerce.date({
    errorMap: () => ({ message: "마감 일자를 선택해 주세요." }),
  }),
  pickupDate: z.coerce.date({
    errorMap: () => ({ message: "픽업 일자를 선택해 주세요." }),
  }),
  url: z
    .string()
    .url("올바른 URL 형식이 아니에요.")
    .optional()
    .or(z.literal("")),
  price: z.coerce.number().min(1, "개당 가격을 입력해 주세요."),
  description: z.string().min(1, "자세한 설명을 입력해 주세요."),
  imageUrls: z
    .array(z.string().url())
    .min(1, "이미지를 1장 이상 업로드해 주세요."),
});

export type PostFormData = z.infer<typeof writePostSchema>;
