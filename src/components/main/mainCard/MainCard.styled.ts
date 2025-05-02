import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 115px;
  gap: 5px;
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
  color: ${Colors.Main30};
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
