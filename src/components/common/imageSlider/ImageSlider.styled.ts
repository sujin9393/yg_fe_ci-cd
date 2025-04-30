import styled from "styled-components";
import { Colors } from "../../../styles";

export const ImageSliderContainer = styled.div`
  position: relative;
  border-radius: 10px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
  gap: 10px;
`;

export const ImagePart = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: background-color 0.2s;
  cursor: pointer;
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: background-color 0.2s;
  cursor: pointer;
`;

export const SlideIcon = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export const Indicator = styled.div<{ isActive: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? "black" : Colors.Grayscale10};
  transition: background-color 0.3s;
`;
