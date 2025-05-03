import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  ${FontStyles.SM_Regular};
  margin-bottom: 5px;
`;

export const InputBox = styled.input`
  border-radius: 8px;
  height: 40px;
  border: 1px solid ${Colors.Grayscale50};
  padding: 15px;
  &::placeholder {
    ${FontStyles.XS_Medium};
  }
`;

export const InputHelperText = styled.p`
  ${FontStyles.XXS_Regular};
  color: ${Colors.Main20};
`;
