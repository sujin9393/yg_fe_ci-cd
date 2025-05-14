import styled, { css } from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Button = styled.button<{
  $buttonStyle?: "round" | "square";
  $buttonState?: "confirm" | "cancel";
  $isMove?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $buttonState }) =>
    $buttonState === "cancel" ? Colors.Grayscale10 : Colors.Main10};
  color: ${({ $buttonState }) =>
    $buttonState === "cancel" ? Colors.Grayscale60 : Colors.Grayscale0};
  ${FontStyles.MD2_Bold};
  border: none;
  border-radius: ${({ $buttonStyle }) =>
    $buttonStyle === "round" ? "50px" : "10px"};
  width: 230px;
  padding: 5px;
  cursor: pointer;
  ${({ $isMove }) =>
    $isMove &&
    css`
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    `}

  &:disabled {
    color: ${Colors.Grayscale60};
    background-color: ${Colors.Grayscale40};
    cursor: default;
  }
`;
