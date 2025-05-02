import * as S from "./Profile.styled";
import yummy from "../../../assets/images/Yummy.png";

interface ProfileProps {
  type: "mypage" | "post";
}

/**
 *
 * @param type - 사용하는 페이지에 따라 'mypage' | 'post'
 * @returns
 */

const Profile = ({ type }: ProfileProps) => {
  return (
    <div>
      <S.ProfilePart>
        <S.ProfileImg $type={type} src={yummy} alt="프로필 이미지" />
        <S.ProfileInfo>
          <S.NameInfo>토마토녀</S.NameInfo>
          {type === "mypage" && (
            <>
              <S.RealName>이정수</S.RealName>
              <S.Email>abc@ff</S.Email>
              <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
            </>
          )}

          <S.AccountInfo>주최자 계좌번호 : ~!~!0101010</S.AccountInfo>
        </S.ProfileInfo>
      </S.ProfilePart>
    </div>
  );
};

export default Profile;
