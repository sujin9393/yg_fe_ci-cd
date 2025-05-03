import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "../../schemas/signupSchema";
import InputField from "../../components/common/inputField/InputField";
import * as S from "./Signup.styled";
import Button from "../../components/common/button/Button";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("제출된 데이터:", data);
  };

  return (
    <S.SignupSection>
      <S.SectionName>가입 정보 입력</S.SectionName>
      <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="이메일"
          placeholder="이메일 입력"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호 입력"
          {...register("password")}
          helperText={errors.password?.message}
        />
        <InputField
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호 확인"
          {...register("confirmPassword")}
          helperText={errors.confirmPassword?.message}
        />
        <Button type="submit">다음</Button>
      </S.SignupForm>
    </S.SignupSection>
  );
};

export default Signup;
