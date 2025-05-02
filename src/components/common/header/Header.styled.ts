import styled from "styled-components";
import { FontStyles } from "../../../styles";

export const HeaderContainer = styled.div`
  position: relative;
  height: 54px;
  display: flex;
  align-items: center;
`;

export const LogoPart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  ${FontStyles.MD1_SemiBold};
  cursor: pointer;
`;

export const ServiceName = styled.img`
  width: 100px;
`;

export const SidePart = styled.div`
  display: flex;
  margin-left: auto;
  padding: 20px;
  align-items: center;
  gap: 10px;
`;

export const AlertIcon = styled.img`
  width: 24px;
`;

export const ProfileIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;
