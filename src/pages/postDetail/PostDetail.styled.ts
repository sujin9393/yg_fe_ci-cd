import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";
import UserIcon from "../../assets/icons/User.svg?react";

export const PostDetailContainer = styled.div`
  width: 100%;
`;

export const TopSection = styled.div`
  margin: 20px 30px 10px 30px;
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

export const AccountInfo = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const SectionLine = styled.hr`
  border: none;
  border-top: 0.5px solid ${Colors.Grayscale30};
  width: 100%;
  flex: 1;
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
  color: ${Colors.Grayscale70};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const PickupDate = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const unitPrice = styled.p`
  ${FontStyles.SM_SemiBold};
  color: ${Colors.Main30};
`;

export const unitAmount = styled.p`
  ${FontStyles.XXXS_Medium};
  color: ${Colors.Grayscale60};
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const OrderButton = styled.button`
  ${FontStyles.SM_SemiBold};
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  margin-bottom: 3px;
  background-color: ${Colors.Main10};
  color: ${Colors.Grayscale0};
`;

export const AmountPart = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  margin-top: 5px;
`;

export const Amount = styled.p`
  ${FontStyles.XXS_Bold};
  color: ${Colors.Main30};
`;

export const PartCount = styled.div`
  display: flex;
  gap: 2px;
`;

export const PartCountMent = styled.p`
  ${FontStyles.XXXS_Bold};
  color: ${Colors.Main60};
  padding-top: 8px;
`;

export const StyledUserIcon = styled(UserIcon)`
  color: ${Colors.Main60};
  width: 18px;
`;

export const Ddate = styled.p`
  ${FontStyles.XXXS_Regular};
  color: ${Colors.Main10};
  margin-top: 3px;
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

export const DetailInfo = styled.div`
  ${FontStyles.XS_Medium};
`;
