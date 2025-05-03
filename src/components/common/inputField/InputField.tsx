import * as S from "./InputField.styled";

type InputFieldProps = {
  label: string;
  placeholder: string;
  helperText?: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>; // ✅ 모든 기본 input 속성 포함;

const InputField = ({
  label,
  placeholder,
  helperText,
  type = "text",
  required = false,
  ...rest // ✅ 여기로 register가 넘겨주는 props(value, onChange 등)가 들어옴
}: InputFieldProps) => {
  return (
    <S.InputFieldContainer>
      <S.InputLabel>
        {label}
        {required && "*"}
      </S.InputLabel>
      <S.InputBox
        type={type}
        placeholder={placeholder}
        {...rest} // ✅ 여기가 핵심
      />
      {helperText && <S.InputHelperText>{helperText}</S.InputHelperText>}
    </S.InputFieldContainer>
  );
};

export default InputField;
