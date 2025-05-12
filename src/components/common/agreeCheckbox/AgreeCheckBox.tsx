import { forwardRef, useState } from "react";
import * as S from "./AgreeCheckBox.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message: string;
  helperText?: string;
}

const AgreeCheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, helperText, message, ...props }, ref) => {
    const isChecked = props.checked ?? false;
    const [open, setOpen] = useState(false);

    return (
      <S.Wrapper>
        <S.PartName onClick={() => setOpen((prev) => !prev)}>
          {label}
        </S.PartName>
        {open && (
          <S.Info>
            입력하신 정보는 서비스 운영을 위한 본인 확인, 주문 처리 및 환불 안내
            목적으로만 사용되며, 어떠한 경우에도 동의 없이 제3자에게 제공되지
            않습니다. 개인정보의 수집 및 이용에 관한 보다 자세한 내용은
            **[개인정보처리방침]**에서 확인하실 수 있으며, 해당 방침은 관련
            법률에 따라 안전하게 관리되고 있습니다.
          </S.Info>
        )}

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
