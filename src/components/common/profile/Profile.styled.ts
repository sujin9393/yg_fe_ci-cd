import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const ProfilePart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImg = styled.img<{ $type: "mypage" | "post" }>`
  width: ${({ $type }) => ($type === "mypage" ? "70px" : "36px")};
  height: ${({ $type }) => ($type === "mypage" ? "70px" : "36px")};
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameInfo = styled.p`
  ${FontStyles.XXS_SemiBold};
`;

export const RealName = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const Email = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const PhoneNumber = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const AccountInfo = styled.p`
  ${FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;
