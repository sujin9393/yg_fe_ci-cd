import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const ProfilePart = styled.div<{ $type: "mypage" | "post" }>`
  display: flex;
  align-items: center;
  gap: ${({ $type }) => ($type === "mypage" ? "15px" : "10px")};
`;

export const ProfileImg = styled.img<{ $type: "mypage" | "post" }>`
  width: ${({ $type }) => ($type === "mypage" ? "80px" : "36px")};
  height: ${({ $type }) => ($type === "mypage" ? "80px" : "36px")};
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameInfo = styled.p<{ $type: "mypage" | "post" }>`
  ${({ $type }) =>
    $type === "mypage" ? FontStyles.SM_SemiBold : FontStyles.XXS_SemiBold};
`;

const SubText = styled.p`
  ${FontStyles.XXS_SemiBold};
  color: ${Colors.Grayscale60};
`;

export const RealName = styled(SubText)``;
export const Email = styled(SubText)``;
export const PhoneNumber = styled(SubText)``;

export const AccountInfo = styled.p<{ $type: "mypage" | "post" }>`
  ${({ $type }) =>
    $type === "mypage" ? FontStyles.XXS_SemiBold : FontStyles.XXXS_SemiBold};
  color: ${Colors.Grayscale60};
`;
