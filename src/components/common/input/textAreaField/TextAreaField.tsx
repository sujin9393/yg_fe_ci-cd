import { forwardRef } from "react";
import * as S from "./TextAreaField.styled";

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder: string;
  helperText?: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, helperText, placeholder, ...props }, ref) => {
    return (
      <S.Container>
        {label && <S.Label>{label}</S.Label>}
        <S.TextArea placeholder={placeholder} ref={ref} {...props} />
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  }
);

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;
