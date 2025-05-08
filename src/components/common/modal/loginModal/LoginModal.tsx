import { useModalStore } from "../../../../stores/useModalStore";
import Button from "../../button/Button";
import InputField from "../../input/inputField/InputField";
import Modal from "../Modal";
import Logo from "../../../../assets/icons/Logo.svg";
import Service from "../../../../assets/icons/Service.svg";
import * as S from "./LoginModal.stlyed";
import { useNavigate } from "react-router-dom";
import { LoginFormData, loginSchema } from "../../../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "../../../../api/user";
import { useUserStore } from "../../../../stores/useUserStore";

const LoginModal = () => {
  const navigate = useNavigate();
  const closeModal = useModalStore((s) => s.closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    try {
      const res = await login(data); // 서버에 요청
      console.log("로그인 성공", res);
      useUserStore.getState().setUser(res); // ✅ 상태 저장
      closeModal();
    } catch (err) {
      console.error("로그인 실패", err);
    }
  };

  const onSubmit = (data: LoginFormData) => {
    handleLogin(data);
  };

  const handleSignupClick = () => {
    closeModal(); // 모달 닫기
    navigate("/signup"); // 페이지 이동
  };

  return (
    <Modal onClose={closeModal}>
      <S.Container>
        <S.StyledXIcon onClick={closeModal} />
        <S.LogoPart>
          <img src={Logo} alt="logo" />
          <S.ServiceName src={Service} />
        </S.LogoPart>
        <S.Label>로그인</S.Label>
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder="이메일을 입력해주세요"
            styleType="login"
            {...register("email")}
            helperText={errors.email?.message}
          />
          <InputField
            placeholder="PW"
            type="password"
            styleType="login"
            {...register("password")}
            helperText={errors.password?.message}
          />
          <Button type="submit">로그인</Button>
        </S.LoginForm>
        <S.NaviSignup onClick={handleSignupClick}>회원가입</S.NaviSignup>
      </S.Container>
    </Modal>
  );
};

export default LoginModal;
