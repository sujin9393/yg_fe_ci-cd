import * as S from "./Profile.styled";
import tomato from "../../../assets/images/Tomato.png";
import { UserInfo } from "../../../types/userTypes";

interface ProfileProps {
  type: "mypage" | "post";
  user: UserInfo &
    Partial<{
      name: string;
      email: string;
      phoneNumber: string;
    }>;
}

/**
 *
 * @param type - 사용하는 페이지에 따라 'mypage' | 'post'
 * @returns
 */

const Profile = ({ type, user }: ProfileProps) => {
  return (
    <div>
      <S.ProfilePart>
        <S.ProfileImg $type={type} src={tomato} alt="프로필 이미지" />
        <S.ProfileInfo>
          <S.NameInfo>{user.nickName}</S.NameInfo>
          {type === "mypage" && (
            <>
              <S.RealName>{user.name}</S.RealName>
              <S.Email>{user.email}</S.Email>
              <S.PhoneNumber>{user.phoneNumber}</S.PhoneNumber>
            </>
          )}

          <S.AccountInfo>주최자 계좌번호 : {user.accountNumber}</S.AccountInfo>
        </S.ProfileInfo>
      </S.ProfilePart>
    </div>
  );
};

export default Profile;
