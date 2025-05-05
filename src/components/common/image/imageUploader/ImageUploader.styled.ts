import styled from "styled-components";
import { Colors } from "../../../../styles";
import User from "../../../../assets/icons/User.svg?react";
import Camera from "../../../../assets/icons/Camera.svg?react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  display: none;
`;

export const ImageBox = styled.div<{ $styleType: "circle" | "rect" }>`
  width: 90px;
  height: 90px;
  border: none;
  border-radius: ${({ $styleType }) =>
    $styleType === "circle" ? "50%" : "8px"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  //overflow: hidden;
  background-color: ${Colors.Grayscale40};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ $styleType }) =>
      $styleType === "circle" ? "50%" : "8px"};
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const StyledUser = styled(User)`
  width: 60px;
  height: 60px;
  stroke-width: 1px;
`;

export const StyledCamera = styled(Camera)`
  position: absolute;
  right: 0px;
  bottom: 3px;
`;

export const HelperText = styled.span`
  color: red;
  font-size: 12px;
`;
