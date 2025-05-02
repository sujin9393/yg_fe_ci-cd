import MyList from "../../components/common/myList/MyList";
import Profile from "../../components/common/profile/Profile";
import * as S from "./Mypage.styled";

const Mypage = () => {
  return (
    <S.MypageContainer>
      <S.PageName>마이페이지</S.PageName>
      <S.ProfileSection>
        <Profile type="mypage" />
      </S.ProfileSection>
      <MyList />
    </S.MypageContainer>
  );
};

export default Mypage;
