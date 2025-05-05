import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const TotalAmount = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const HelperText = styled.p`
  color: ${Colors.Main20};
  ${FontStyles.XXS_Regular};
  margin-top: 2px;
`;

export const MyParti = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Label = styled.label`
  ${FontStyles.MD2_Bold};
`;
