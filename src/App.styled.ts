import styled from "styled-components";
import { Colors } from "./styles";

export const MainContainer = styled.div`
  width: 390px;
  height: 100%;
  background-color: ${Colors.Grayscale0};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 390px) {
    width: 100%;
  }
`;
