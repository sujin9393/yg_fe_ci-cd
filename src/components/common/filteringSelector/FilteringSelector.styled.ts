import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const Container = styled.div<{ $type: "postList" | "myList" }>`
  display: flex;
  gap: 10px;
  //margin: ${({ $type }) => ($type === "postList" ? "0px 20px" : "0px 30px")};
`;

export const Button = styled.button<{
  $isSelected: boolean;
}>`
  width: fit-content;
  height: 24px;
  border-radius: 20px;
  padding: 0px 15px;
  border: none;
  ${FontStyles.XS_SemiBold};
  background-color: ${({ $isSelected }) =>
    $isSelected ? Colors.Main10 : Colors.Grayscale10};
  color: ${({ $isSelected }) =>
    $isSelected ? Colors.Grayscale0 : Colors.Grayscale60};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
