import { forwardRef } from "react";
import * as S from "./AgreeCheckBox.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message: string;
  helperText?: string;
}

const AgreeCheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, helperText, message, ...props }, ref) => {
    const isChecked = props.checked ?? false;

    return (
      <S.Wrapper>
        <S.PartName>{label}</S.PartName>
        <S.Row>
          <S.AgreePart>
            <S.HiddenInput type="checkbox" ref={ref} {...props} />
            {isChecked ? <S.StyledCheckCircle /> : <S.StyledNonCheckCircle />}
            <S.LabelText>{message}</S.LabelText>
          </S.AgreePart>
          {helperText && <S.ErrorText>{helperText}</S.ErrorText>}
        </S.Row>
      </S.Wrapper>
    );
  }
);

AgreeCheckBox.displayName = "AgreeCheckbox";

export default AgreeCheckBox;
