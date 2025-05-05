import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Button = styled.button<{ $buttonStyle?: "round" | "square" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Main10};
  color: ${Colors.Grayscale0};
  ${FontStyles.MD2_Bold};
  border: none;
  border-radius: ${({ $buttonStyle }) =>
    $buttonStyle === "round" ? "50px" : "10px"};
  width: 230px;
  padding: 5px;
  cursor: pointer;

  &:disabled {
    color: ${Colors.Grayscale60};
    background-color: ${Colors.Grayscale40};
    cursor: default;
  }
`;
