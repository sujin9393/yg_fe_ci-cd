import { forwardRef } from "react";
import * as S from "./AgreeCheckBox.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
}

const AgreeCheckBox = forwardRef<HTMLInputElement, Props>(
  ({ helperText, ...props }, ref) => {
    const isChecked = props.checked ?? false;

    return (
      <S.Wrapper>
        <S.PartName>개인정보 수집 동의</S.PartName>
        <S.Row>
          <S.AgreePart>
            <S.HiddenInput type="checkbox" ref={ref} {...props} />
            {isChecked ? <S.StyledCheckCircle /> : <S.StyledNonCheckCircle />}
            <S.LabelText>동의</S.LabelText>
          </S.AgreePart>
          {helperText && <S.ErrorText>{helperText}</S.ErrorText>}
        </S.Row>
      </S.Wrapper>
    );
  }
);

AgreeCheckBox.displayName = "AgreeCheckbox";

export default AgreeCheckBox;
