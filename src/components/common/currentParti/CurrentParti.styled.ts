import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";
import UserIcon from "../../../assets/icons/User.svg?react";

export const CurrentParticipation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const AmountPart = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
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
