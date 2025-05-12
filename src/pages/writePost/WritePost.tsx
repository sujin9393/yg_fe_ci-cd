import { zodResolver } from "@hookform/resolvers/zod";
import MultiImageUploader from "../../components/writePost/multiImageUploader/MultiImageUploader";
import { PostFormData, writePostSchema } from "../../schemas/writePostSchema";
import * as S from "./WritePost.styled";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "../../components/common/button/Button";
import Send from "../../assets/icons/LightSend.svg";
import UnitAmountSelector from "../../components/writePost/unitAmountSelector/UnitAmountSelector";
import InputField from "../../components/common/input/inputField/InputField";
import DateInput from "../../components/common/input/dateInput/DateInput";
import TextAreaField from "../../components/common/input/textAreaField/TextAreaField";
import { HelperText } from "../../components/common/HelperText.styled";
import { formatDateTimeForDTO } from "../../utils/date";
import { useUserStore } from "../../stores/useUserStore";
import { uploadImages } from "../../api/image";
import { useEffect, useState } from "react";
import ControlledNumberInput from "../../components/common/input/controlledNumberInput/ControlledNumberInput";
import { useGetAIMutation } from "../../hooks/mutations/host/useGetAIMutation";
import Loading from "../../components/common/loading/Loding";
import { usePostMutation } from "../../hooks/mutations/host/usePostMutation";

const WritePost = () => {
  const user = useUserStore((s) => s.user);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isAISubmitted, setIsAISubmitted] = useState(false);

  const methods = useForm<PostFormData>({
    resolver: zodResolver(writePostSchema),
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = methods;

  const url = watch("url");
  const { mutate: getAIMutate, isPending: isGeneratingAI } = useGetAIMutation(
    setValue,
    setIsAISubmitted
  );
  const { mutate: writePostMutate, isPending: isPosting } = usePostMutation();

  if (isGeneratingAI) {
    setValue("price", -1);
  }

  useEffect(() => {
    setIsAISubmitted(false);
  }, [url]);

  const handleFormSubmit = async (data: PostFormData) => {
    try {
      // 1. 이미지 업로드 (key만 반환됨)
      const imageKeys = await uploadImages(imageFiles); // ← File[]은 외부 상태에서 가져오는 것으로 가정
      console.log("업로드 결과 (S3 keys):", imageKeys);

      // 2. 최종 payload 구성
      const payload = {
        ...data,
        imageKeys: imageKeys,
        location: "카카오테크 부트캠프장",
        dueDate: formatDateTimeForDTO(data.dueDate),
        pickupDate: formatDateTimeForDTO(data.pickupDate),
      };
      if (payload.url === "") {
        delete payload.url; // 명시적으로 삭제
      }

      console.log("최종 payload:", payload);

      writePostMutate(payload);
    } catch (err) {
      console.error("전체 게시 실패", err);
    }
  };

  const onSubmit = (data: PostFormData) => {
    if (!user) {
      console.warn("로그인 필요");
      return;
    }
    handleFormSubmit(data);
  };

  if (isPosting) return <Loading message="공구글 게시중입니다..." />;

  return (
    <S.Container>
      <FormProvider {...methods}>
        <S.PostForm onSubmit={handleSubmit(onSubmit)}>
          <MultiImageUploader
            value={watch("imageUrls")}
            onChange={(urls, files) => {
              setValue("imageUrls", urls);
              setImageFiles(files);
            }}
            helperText={errors.imageUrls?.message}
          />
          <S.URL>
            <InputField
              label="URL (선택)"
              styleType="post"
              placeholder="상품 URL을 입력해주세요"
              {...register("url")}
            />
            <Button
              disabled={!url || isGeneratingAI || isAISubmitted || !!errors.url}
              onClick={() => {
                if (!url || errors?.url || isGeneratingAI || isAISubmitted)
                  return;
                getAIMutate(url);
              }}
              buttonStyle="square"
            >
              <img src={Send} />
            </Button>
          </S.URL>
          <HelperText>
            {isGeneratingAI
              ? "AI 답변 생성은 1분정도 소요됩니다."
              : errors.url?.message}
          </HelperText>
          <InputField
            label="공구 제목"
            styleType="post"
            placeholder="공구 제목을 입력해주세요"
            disabled={isGeneratingAI}
            {...register("title")}
            value={isGeneratingAI ? "AI 답변 생성중입니다..." : watch("title")}
            helperText={errors.title?.message}
          />
          <InputField
            label="상품 이름"
            styleType="post"
            placeholder="상품 이름을 입력해주세요"
            disabled={isGeneratingAI}
            {...register("name")}
            value={isGeneratingAI ? "AI 답변 생성중입니다..." : watch("name")}
            helperText={errors.name?.message}
          />
          <S.Label>계좌번호</S.Label>
          <S.AccountPart>
            <Button disabled>우리</Button>
            <InputField required={false} placeholder="1002-0202" disabled />
          </S.AccountPart>

          <ControlledNumberInput
            name="price"
            control={methods.control}
            label="상품 전체 가격"
            placeholder="가격을 입력해주세요"
            prefix="₩"
            maxDigits={9}
            disabled={isGeneratingAI}
            helperText={errors.price}
          />
          <UnitAmountSelector disabled={isGeneratingAI} />
          <TextAreaField
            label="자세한 설명"
            placeholder="공구방에 올릴 게시글 내용을 작성해주세요."
            {...register("description")}
            disabled={isGeneratingAI}
            helperText={errors.description?.message}
            value={
              isGeneratingAI ? "AI 답변 생성중입니다..." : watch("description")
            }
          />
          <Controller
            control={methods.control}
            name="dueDate"
            render={({ field, fieldState }) => (
              <DateInput
                label="공구 마감 일자"
                value={field.value}
                placeholder="마감 일자를 선택해주세요"
                onChange={field.onChange}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <div>
            <S.Pickup>
              <Controller
                control={methods.control}
                name="pickupDate" // 너의 form schema 기준 name
                render={({ field }) => (
                  <DateInput
                    label="픽업 일자 / 거래 장소"
                    value={field.value}
                    placeholder="픽업 일자를 선택해주세요"
                    onChange={field.onChange}
                  />
                )}
              />
              <InputField
                styleType="post"
                placeholder="카테부 교육장"
                disabled
              />
            </S.Pickup>
            {errors.pickupDate?.message && (
              <HelperText>{errors.pickupDate.message}</HelperText>
            )}
          </div>
          <S.ButtonWrapper>
            <Button type="submit">작성 완료</Button>
          </S.ButtonWrapper>
        </S.PostForm>
      </FormProvider>
    </S.Container>
  );
};

export default WritePost;
