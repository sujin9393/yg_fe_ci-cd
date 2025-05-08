import styled from "styled-components";
import { Colors } from "./styles";
import MasterButtonIcon from "./assets/icons/MasterButton.svg?react";

export const MainContainer = styled.div<{ $modalOpen: boolean }>`
  width: 390px;
  height: 100%;
  background-color: ${Colors.Grayscale0};
  display: flex;
  flex-direction: column;
  overflow-y: ${({ $modalOpen }) => ($modalOpen ? "hidden" : "auto")};
  @media (max-width: 390px) {
    width: 100%;
  }
  position: relative;
`;

export const MasterButton = styled(MasterButtonIcon)`
  position: fixed; // 👈 무조건 화면 하단 고정
  bottom: 20px;
  right: calc((100vw - 390px) / 2 + 20px); // 👈 390px 중앙 기준 맞춤
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 390px) {
    right: 20px;
  }
`;
