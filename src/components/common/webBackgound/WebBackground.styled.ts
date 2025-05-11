// WebBackground.styled.ts
import styled from "styled-components";
import { Colors } from "../../../styles";

export const Container = styled.div`
  //position: absolute;
  //top: 0;
  //left: 0;
  //bottom: 0;
  background-color: none;
  //width: 100%;
  z-index: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const LogoPart = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceName = styled.img`
  width: 100px;
`;

export const MainPart = styled.div`
  padding: 20px;
`;

export const MainMent = styled.p`
  color: ${Colors.Web20};
  font-family: "BMJUA";
  font-size: 70px;

  > span {
    color: ${Colors.Web40};
  }
`;

export const SubMent = styled.p`
  color: ${Colors.Web30};
  font-family: "BMJUA";
  font-size: 30px;
`;

export const Bottom = styled.div`
  display: flex;
`;
