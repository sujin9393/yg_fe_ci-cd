import { forwardRef } from "react";
import * as S from "./InputField.styled";

type InputFieldProps = {
  label?: string;
  styleType?: "signup" | "post" | "login";
  placeholder?: string;
  helperText?: React.ReactNode;
  type?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>; // ✅ 기본 input 속성 포함

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      styleType = "signup",
      placeholder,
      helperText,
      type = "text",
      prefix,
      suffix,
      ...rest // ✅ register가 넘겨주는 props(value, onChange, ref 등)
    },
    ref
  ) => {
    return (
      <S.InputFieldContainer>
        {label && <S.InputLabel $styleType={styleType}>{label}</S.InputLabel>}
        <S.InputWrapper>
          {prefix && <S.Prefix>{prefix}</S.Prefix>}
          <S.InputBox
            $styleType={styleType}
            ref={ref} // ✅ ref 연결됨!
            type={type}
            placeholder={placeholder}
            {...rest}
            $prefix={prefix}
          />
          {suffix && <S.Suffix>{suffix}</S.Suffix>}
        </S.InputWrapper>
        {helperText && <S.InputHelperText>{helperText}</S.InputHelperText>}
      </S.InputFieldContainer>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
