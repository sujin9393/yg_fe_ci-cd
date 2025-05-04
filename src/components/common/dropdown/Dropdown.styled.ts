import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${FontStyles.SM_Regular};
  margin-bottom: 5px;
`;

export const Select = styled.select`
  border-radius: 8px;
  height: 40px;
  border: 1px solid ${Colors.Grayscale50};
  padding: 0px 10px;
  ${FontStyles.XS_Medium};
  color: ${Colors.Grayscale50};
`;

export const Option = styled.option`
  color: ${Colors.Grayscale60};
`;

export const HelperText = styled.span`
  color: ${Colors.Main20};
  ${FontStyles.XXS_Regular};
  margin-top: 2px;
`;
