import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Button = styled.button<{ $buttonStyle?: "round" | "square" }>`
  background-color: ${Colors.Main10};
  color: ${Colors.Grayscale0};
  ${FontStyles.MD2_Bold};
  border: none;
  border-radius: 50px;
  width: 230px;
  padding: 5px;
  cursor: pointer;
`;
