import styled, { keyframes } from "styled-components";
import { Colors, FontStyles } from "../../../styles";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh; /* ✅ 모바일 대응도 가능 */
  background-color: ${Colors.Grayscale0};
  overflow: visible; /* ✅ 잘림 방지 */
`;

export const BouncingIcon = styled.div`
  width: 100px;
  height: 100px;
  animation: ${bounce} 1.2s ease-in-out infinite;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Message = styled.div`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-top: 20px;
  ${FontStyles.MD2_Medium};
`;
