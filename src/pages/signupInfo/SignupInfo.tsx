import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./SignupInfo.styled";
import Button from "../../components/common/button/Button";
import {
  SignupInfoFormData,
  signupInfoSchema,
} from "../../schemas/signupInfoSchema";
import InputField from "../../components/common/input/inputField/InputField";
import Dropdown from "../../components/common/input/dropdown/Dropdown";
//import ImageUploader from "../../components/common/image/imageUploader/ImageUploader";
import AgreeCheckBox from "../../components/common/agreeCheckbox/AgreeCheckBox";
import { SignupRequestData } from "../../api/user";
import { useNicknameCheckMutation } from "../../hooks/mutations/user/useNicknameCheckMutation";
import { useEffect, useState } from "react";
import { BANK_OPTIONS } from "../../constants";
import { useSignupMutation } from "../../hooks/mutations/user/useSignupMutation";

const inputFields = [
  {
    name: "name",
    label: "실명",
    placeholder: "이름 입력",
  },
  {
    name: "phoneNumber",
    label: "전화번호",
    placeholder: "사용할 전화번호 입력",
  },
] as const;

const Signup = () => {
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const { mutate: signup } = useSignupMutation();
  const { mutate: checkNickname } = useNicknameCheckMutation({
    onSuccess: (data) => {
      if (data.isDuplication === "NO") {
        setIsNicknameChecked(true);
        setIsNicknameDuplicated(false);
      } else {
        setIsNicknameChecked(false);
        setIsNicknameDuplicated(true);
      }
    },
    onError: () => {
      setIsNicknameChecked(false);
      setIsNicknameDuplicated(false);
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signupInfoSchema),
    mode: "onChange",
    shouldUnregister: true,
  });

  const nickname = watch("nickname") || "";
  const isNicknameValid = !errors.nickname;
  const isFormValid =
    Object.keys(errors).length === 0 &&
    watch("nickname") &&
    isNicknameChecked &&
    watch("name") &&
    watch("phoneNumber") &&
    watch("accountBank") &&
    watch("accountNumber") &&
    watch("agree") === true;

  const handleClick = () => {
    checkNickname(nickname);
  };

  useEffect(() => {
    setIsNicknameChecked(false);
    setIsNicknameDuplicated(false);
  }, [nickname]);

  const onSubmit = (data: SignupInfoFormData) => {
    const step1Data = localStorage.getItem("signupStep1");
    if (!step1Data) return alert("이메일/비밀번호 정보가 없습니다.");

    const step1 = JSON.parse(step1Data);
    const requestData: SignupRequestData = {
      ...step1,
      nickname: data.nickname,
      name: data.name,
      phoneNumber: data.phoneNumber,
      accountBank: data.accountBank?.value ?? "", // ✅ string으로 변환
      accountNumber: data.accountNumber,
    };

    signup(requestData);
  };

  return (
    <S.SignupSection>
      <S.SectionName>가입 정보 수집</S.SectionName>
      <S.SectionInfo>
        회원가입을 완료하려면 아래 정보를 입력해주세요.
        <br />
        입력이 완료되면 가입이 정상적으로 처리됩니다.
      </S.SectionInfo>
      <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
        {/* <ImageUploader {...register("imageUrl")} styleType="circle" /> */}
        <InputField
          label="닉네임"
          placeholder="사용할 닉네임 입력"
          {...register("nickname")}
          helperText={
            errors.nickname?.message ||
            (isNicknameDuplicated
              ? "이미 사용 중인 닉네임입니다. 다시 입력해주세요."
              : !isNicknameChecked && nickname.length >= 2
                ? "닉네임 중복 확인을 해주세요"
                : "")
          }
          suffix={
            !isNicknameChecked && ( // ✅ 중복 확인 완료되면 버튼 숨김
              <S.ConfirmButton
                type="button"
                onClick={handleClick}
                disabled={!isNicknameValid}
              >
                중복 확인
              </S.ConfirmButton>
            )
          }
        />
        {inputFields.map(({ name, label, placeholder }) => (
          <InputField
            key={name}
            label={label}
            placeholder={placeholder}
            {...register(name)}
            helperText={errors?.[name]?.message}
          />
        ))}
        <Controller
          name="accountBank"
          control={control}
          render={({ field }) => (
            <Dropdown
              label="은행 선택"
              options={[{ label: "은행 선택", value: "" }, ...BANK_OPTIONS]}
              {...field}
              value={field.value ?? null}
              placeholder="은행 선택"
              helperText={errors.accountBank?.message}
            />
          )}
        />
        <InputField
          label="계좌번호"
          placeholder="사용할 계좌번호 입력"
          {...register("accountNumber")}
          helperText={errors.accountNumber?.message}
        />
        <AgreeCheckBox
          label="개인정보 수집 동의"
          message="동의"
          {...register("agree")}
          checked={watch("agree") ?? false} // watch로 체크 여부 관리
          helperText={errors.agree?.message}
        />
        <Button type="submit" disabled={!isFormValid}>
          지금부터 뭉치기
        </Button>
      </S.SignupForm>
    </S.SignupSection>
  );
};

export default Signup;
