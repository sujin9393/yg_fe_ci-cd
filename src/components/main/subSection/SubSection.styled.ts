import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const RowScrollSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 20px 20px;
  gap: 10px;
`;

export const SectionName = styled.p`
  ${FontStyles.MD1_Bold};
`;

export const RowScrollContainer = styled.div`
  overflow-x: auto;
  display: flex;
  padding-right: 20px;
  padding-bottom: 15px;
  gap: 16px;

  /* 스크롤바 전체 (높이/두께 지정) */
  &::-webkit-scrollbar {
    height: 7px; /* 가로 스크롤 */
  }

  /* 스크롤바 트랙 (배경) */
  &::-webkit-scrollbar-track {
    background: ${Colors.Grayscale40};
    border-radius: 12px;
  }

  /* 스크롤바 썸(움직이는 막대) */
  &::-webkit-scrollbar-thumb {
    background: ${Colors.Main10};
    border-radius: 12px;
  }
`;
