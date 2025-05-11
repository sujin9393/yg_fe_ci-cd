import styled from "styled-components";
import { Colors } from "./styles";
import MasterButtonIcon from "./assets/icons/MasterButton.svg?react";

export const Whole = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.Web10};
  overflow: hidden;
  justify-content: center;
  display: flex;
  gap: 100px;
  @media (max-width: 1140px) {
    justify-content: space-between;
    gap: 0px;
  }
`;

export const MainContainer = styled.div<{ $modalOpen: boolean }>`
  width: 390px;
  height: 100%;
  background-color: ${Colors.Grayscale0};
  display: flex;
  flex-direction: column;
  overflow-y: ${({ $modalOpen }) => ($modalOpen ? "hidden" : "auto")};
  @media (max-width: 1040px) {
    margin: 0 auto;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
  position: relative;
`;

export const MasterButton = styled(MasterButtonIcon)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 10;

  @media (max-width: 390px) {
    right: 20px;
  }
`;
