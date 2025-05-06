import styled from "styled-components";
import { Colors, FontStyles } from "../../../../styles";
import XIcon from "../../../../assets/icons/XIcon.svg?react";

export const Container = styled.div`
  background-color: ${Colors.Grayscale0};
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  gap: 10px;
  padding: 40px 30px;
  border-radius: 20px;
  position: relative;
`;

export const StyledXIcon = styled(XIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const LogoPart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ServiceName = styled.img`
  width: 100px;
`;

export const Label = styled.label`
  ${FontStyles.MD2_Bold};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  > button {
    margin-top: 10px;
  }
`;

export const NaviSignup = styled.div`
  ${FontStyles.MD2_SemiBold};
  color: ${Colors.Grayscale60};
  text-decoration: underline;
  cursor: pointer;
`;
