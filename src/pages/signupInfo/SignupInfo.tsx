import { useForm } from "react-hook-form";
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
import { postUser, SignupRequestData } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";

const inputFields = [
  {
    name: "nickname",
    label: "닉네임",
    placeholder: "사용할 닉네임 입력",
  },
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
  //const [user, setGroupBuys] = useState<GroupBuyItem[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupInfoFormData>({
    resolver: zodResolver(signupInfoSchema),
  });

  const handleSignup = async (data: SignupRequestData) => {
    try {
      const res = await postUser(data); // 서버에 요청
      console.log("회원가입 성공", res);
      useUserStore.getState().setUser(res); // ✅ 상태 저장
      navigate("/");
    } catch (err) {
      console.error("회원가입 실패", err);
    }
  };

  const onSubmit = (data: SignupInfoFormData) => {
    const step1Data = localStorage.getItem("signupStep1");
    if (!step1Data) return alert("이메일/비밀번호 정보가 없습니다.");

    const step1 = JSON.parse(step1Data);
    const { agree, ...infoData } = data;
    void agree; // 👈 사용하지 않는다는 걸 명시적으로 처리

    const requestData = {
      ...step1, // email, password
      ...infoData, // nickname, name, phoneNumber, accountBank, accountNumber
    };

    console.log("최종 제출:", requestData);
    handleSignup(requestData);
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

        {inputFields.map(({ name, label, placeholder }) => (
          <InputField
            key={name}
            label={label}
            placeholder={placeholder}
            {...register(name)}
            helperText={errors?.[name]?.message}
          />
        ))}
        <Dropdown
          label="은행 선택"
          options={[
            { value: "", label: "은행 선택" },
            { value: "kakao", label: "카카오뱅크" },
            { value: "shinhan", label: "신한은행" },
          ]}
          {...register("accountBank")}
          helperText={errors.accountBank?.message}
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
        <Button type="submit">지금부터 뭉치기</Button>
      </S.SignupForm>
    </S.SignupSection>
  );
};

export default Signup;
