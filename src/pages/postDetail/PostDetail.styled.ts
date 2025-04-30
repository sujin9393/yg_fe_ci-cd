import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";

export const PostDetailContainer = styled.div`
  width: 100%;
`;

export const TopSection = styled.div`
  margin: 20px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameInfo = styled.p`
  ${FontStyles.XXS_SemiBold};
`;

export const PlaceInfo = styled.p`
  ${FontStyles.XXXS_SemiBold};
`;

export const AccountInfo = styled.p`
  ${FontStyles.XXXS_SemiBold};
`;

export const SectionLine = styled.hr`
  border: none;
  border-top: 2px solid ${Colors.Grayscale10};
  width: 100%;
  margin-top: 10px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
`;

export const TitlePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const InfoPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PostTitle = styled.p`
  ${FontStyles.MD2_SemiBold};
`;

export const ProductTitle = styled.p`
  ${FontStyles.SM_SemiBold};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PickupDate = styled.p`
  ${FontStyles.XXXS_SemiBold};
`;

export const unitPrice = styled.p`
  ${FontStyles.SM_SemiBold}
`;

export const unitAmount = styled.p`
  ${FontStyles.XXXS_Medium}
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
`;

export const OrderButton = styled.button`
  ${FontStyles.SM_SemiBold};
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  margin-bottom: 3px;
`;

export const AmountPart = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const Amount = styled.p`
  ${FontStyles.XXS_Bold};
`;

export const PartCount = styled.p`
  ${FontStyles.XXXS_Bold}
`;

export const Ddate = styled.p`
  ${FontStyles.XXXS_Regular};
`;

export const DetailPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionDivider = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  margin: 10px 0px;
`;

export const SectionName = styled.p`
  ${FontStyles.XS_SemiBold}
`;

export const Line = styled.hr`
  flex: 1;
  height: 1px;
`;

export const DetailInfo = styled.div`
  ${FontStyles.XS_Medium};
`;
