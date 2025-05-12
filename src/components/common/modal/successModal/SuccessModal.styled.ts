import styled from "styled-components";
import { Colors, FontStyles } from "../../../../styles";

export const Container = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.Grayscale0};
  border-radius: 20px;
  border: none;
  width: 360px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  > button {
    width: 135px;
  }
`;

export const Box = styled.img`
  width: 52px;
`;

export const Title = styled.p`
  ${FontStyles.MD1_SemiBold};
`;

export const Account = styled.p`
  border: 1px solid ${Colors.Grayscale50};
  ${FontStyles.XS_SemiBold};
  border-radius: 10px;
  padding: 5px 15px;
`;

export const Info = styled.p`
  ${FontStyles.XXS_Regular};
  color: ${Colors.Grayscale60};
  text-align: center;
  > span {
    ${FontStyles.XXS_Bold};
  }
`;
