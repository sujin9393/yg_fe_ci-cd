import styled from "styled-components";
import { FontStyles } from "../../../styles";

export const RowScrollSection = styled.div`
  //background-color: red;
  display: flex;
  flex-direction: column;
  margin: 15px 0px 10px 20px;
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
`;
