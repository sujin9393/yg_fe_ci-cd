import styled from "styled-components";
import { Colors } from "./styles";

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
