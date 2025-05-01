import styled from "styled-components";
import { FontStyles } from "../../../styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommonSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;

export const OrderState = styled.p`
  ${FontStyles.XXS_SemiBold};
`;

export const productInfo = styled.div``;

export const pickupPlace = styled.p`
  ${FontStyles.XXXS_SemiBold}
`;

export const unitPrice = styled.p`
  ${FontStyles.XS_SemiBold}
`;

export const postTitle = styled.p`
  ${FontStyles.XS_Regular}
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyOrder = styled.p`
  ${FontStyles.XXS_SemiBold}
`;

export const TotalAmount = styled.p`
  display: flex;
  justify-content: end;
  ${FontStyles.XXS_Bold}
`;

export const ButtonSection = styled.div``;
