import { forwardRef, useState, useRef } from "react";
import * as S from "./ImageUploader.styled";

interface ImageUploaderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  styleType?: "circle" | "rect";
  defaultPreview?: string; // 수정 시 기존 이미지 보여주기
}

const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  ({ helperText, styleType = "rect", defaultPreview = "", ...props }, ref) => {
    const [preview, setPreview] = useState<string | null>(
      defaultPreview || null
    );
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { onChange, ...restProps } = props;

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          console.log("reader result:", result); // ✅ 실제 이미지 DataURL 찍힘
          setPreview(result);
        };
        reader.readAsDataURL(file);
      }

      // react-hook-form 연결
      if (ref) {
        if (typeof ref === "function") ref(e.target);
        else ref.current = e.target;
      }
    };

    return (
      <S.Container>
        <S.Input
          type="file"
          accept="image/*"
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          onChange={(e) => {
            handleChange(e); // 🔥 확실하게 우리 미리보기 로직 실행
            onChange?.(e); // ✅ form에도 등록되도록 실행
          }}
          {...restProps} // ✅ 나머지 props는 안전하게 전달
        />
        <S.ImageBox $styleType={styleType} onClick={handleClick}>
          {preview ? <img src={preview} alt="미리보기" /> : <S.StyledUser />}
          <S.StyledCamera />
        </S.ImageBox>
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  }
);

ImageUploader.displayName = "ImageUploader";

export default ImageUploader;
