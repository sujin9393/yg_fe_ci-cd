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

const WritePost = () => {
  const methods = useForm<PostFormData>({
    resolver: zodResolver(writePostSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = methods;

  const onSubmit = (data: PostFormData) => {
    console.log("제출된 데이터:", data);
  };

  return (
    <S.Container>
      <FormProvider {...methods}>
        <S.PostForm onSubmit={handleSubmit(onSubmit)}>
          <MultiImageUploader
            value={watch("imageUrls")}
            onChange={(urls) => setValue("imageUrls", urls)}
          />
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
          <S.URL>
            <InputField
              label="URL (선택)"
              styleType="post"
              placeholder="상품 URL을 입력해주세요"
              {...register("url")}
              helperText={errors.url?.message}
            />
            <Button buttonStyle="square">
              <img src={Send} />
            </Button>
          </S.URL>
          <InputField
            label="상품 전체 가격"
            styleType="post"
            placeholder="가격을 입력해주세요"
            prefix="₩"
            {...register("price")}
            helperText={errors.totalAmount?.message}
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
        </S.PostForm>
      </FormProvider>
    </S.Container>
  );
};

export default WritePost;
