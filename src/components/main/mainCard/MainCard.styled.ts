import styled from "styled-components";
import { FontStyles } from "../../../styles";

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 115px;
  gap: 5px;
`;

export const ImageContainer = styled.div`
  //background-color: red;
  width: 115px;
  height: 115px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  object-fit: contain;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 2px;
`;

export const CardTitle = styled.p`
  ${FontStyles.XS_Medium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UnitInfo = styled.p`
  ${FontStyles.XXS_Regular};
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const UnitPrice = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1; /* 줄어들 수 있음 */
  min-width: 0; /* shrink 해도 text-overflow 작동하려면 필요 */
`;

export const UnitAmount = styled.span`
  flex-shrink: 0; /* 절대 줄어들지 않게 고정 */
  margin-left: 2px;
`;
