import styled from "styled-components";
import { Colors, FontStyles } from "../../../../styles";

export const Container = styled.div`
  background-color: ${Colors.Grayscale0};
  width: 350px;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Message = styled.p`
  margin-top: 5px;
  ${FontStyles.MD1_SemiBold}
`;

export const Info = styled.p`
  ${FontStyles.XXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const ButtonPart = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
`;
