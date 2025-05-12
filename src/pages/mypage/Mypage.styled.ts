import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";

export const MypageContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageName = styled.p`
  ${FontStyles.MD1_Bold};
  margin: 20px 30px;
`;

export const ProfileSection = styled.div`
  border: 1px solid ${Colors.Grayscale50};
  border-radius: 10px;
  padding: 20px;
  margin: 0px 30px;
  margin-bottom: 20px;
`;

export const DeleteUser = styled.p`
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  justify-content: end;
  color: ${Colors.Grayscale60};
  ${FontStyles.MD2_Regular};
  text-decoration: underline;
  cursor: pointer;
`;
