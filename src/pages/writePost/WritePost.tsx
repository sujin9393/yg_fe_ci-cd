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
import { PostRequestData } from "../../types/productType";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { uploadImages } from "../../api/image";
import { useState } from "react";
import ControlledNumberInput from "../../components/common/input/controlledNumberInput/ControlledNumberInput";
import { writePost } from "../../api/host";
import { useGetAIMutation } from "../../hooks/mutations/host/useGetAIMutation";
import Loading from "../../components/common/loading/Loding";

const WritePost = () => {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

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
  const { mutate: getAIMutate, isPending } = useGetAIMutation(setValue);

  const handlePost = async (data: PostRequestData) => {
    console.log(data);
    try {
      const res = await writePost(data); // 서버에 요청
      console.log("공구글 게시 성공", res);
      navigate(`/products/${res.data.postId}`);
    } catch (err) {
      console.error("공구글 게시 실패", err);
    }
  };

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

      // 3. 게시글 작성
      await handlePost(payload);
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
              helperText={errors.url?.message}
            />
            <Button
              disabled={!url}
              onClick={() => getAIMutate(url!)}
              buttonStyle="square"
            >
              <img src={Send} />
            </Button>
          </S.URL>
          {isPending ? (
            <Loading message="공구글 생성중입니다." />
          ) : (
            <>
              <InputField
                label="공구 제목"
                styleType="post"
                placeholder="공구 제목을 입력해주세요"
                {...register("title")}
                helperText={errors.title?.message}
              />
              <InputField
                label="상품 이름"
                styleType="post"
                placeholder="상품 이름을 입력해주세요"
                {...register("name")}
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
                helperText={errors.price}
              />

              <UnitAmountSelector />
              <TextAreaField
                label="자세한 설명"
                placeholder="공구방에 올릴 게시글 내용을 작성해주세요."
                {...register("description")}
                helperText={errors.description?.message}
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
            </>
          )}
        </S.PostForm>
      </FormProvider>
    </S.Container>
  );
};

export default WritePost;
