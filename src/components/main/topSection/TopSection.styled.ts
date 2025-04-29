import styled from "styled-components";
import { FontStyles } from "../../../styles";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px 20px 5px 20px;
`;

export const SectionName = styled.p`
  ${FontStyles.MD1_Bold};
`;

export const ImagePart = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const BigImage = styled.img`
  width: calc(50% - 20px);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const SmallImagePart = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

export const ImageContainer = styled.img`
  width: calc((100% - 10px) / 2); // 한 줄에 2개씩 (gap 고려)
  height: 70px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;
