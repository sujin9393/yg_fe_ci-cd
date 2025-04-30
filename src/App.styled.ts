import styled from "styled-components";
import { Colors } from "./styles";

export const MainContainer = styled.div`
  width: 390px;
  min-height: 100vh;
  background-color: #fff;
  overflow-y: auto;
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const HeaderLine = styled.hr`
  border: none;
  border-top: 1px solid ${Colors.Main10};
  width: 100%;
`;
