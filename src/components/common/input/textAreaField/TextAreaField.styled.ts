import styled from "styled-components";
import { Colors, FontStyles } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${FontStyles.MD2_Bold};
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  padding: 12px 15px;
  resize: none;
  min-height: 100px;
  border: 1px solid ${Colors.Grayscale50};
  border-radius: 8px;
  color: ${Colors.Grayscale60};
  ${FontStyles.XS_SemiBold};

  &::placeholder {
    ${FontStyles.XS_Medium};
    color: ${Colors.Grayscale50};
  }
`;

export const HelperText = styled.span`
  color: ${Colors.Main20};
  ${FontStyles.XXS_Regular};
  margin-top: 2px;
`;
