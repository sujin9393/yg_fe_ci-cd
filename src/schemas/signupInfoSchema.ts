import { z } from "zod";

export const signupInfoSchema = z.object({
  profileImage: z.any().optional(),
  nickname: z.string().min(2, "닉네임은 2자 이상이어야 해요."),
  name: z.string().min(1, "이름을 입력해 주세요."),
  phoneNumber: z
    .string()
    .regex(/^010\d{8}$/, "올바른 휴대폰 번호 형식이어야 해요."),
  accountBank: z.string().min(1, "서비스에서 사용할 은행을 선택해 주세요."),
  accountNumber: z.string().min(10, "계좌번호를 입력해 주세요."),
  agree: z.literal(true, {
    errorMap: () => ({
      message: "개인정보 수집에 동의해주세요",
    }),
  }),
});

export type SignupInfoFormData = z.infer<typeof signupInfoSchema>;
