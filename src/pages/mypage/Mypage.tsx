import { useEffect, useState } from "react";
import MyList from "../../components/common/myList/MyList";
import Profile from "../../components/common/profile/Profile";
import * as S from "./Mypage.styled";
import { getMyInfo } from "../../api/user";
import { MyPageInfo } from "../../types/userType";

const Mypage = () => {
  const [user, setUser] = useState<MyPageInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMyInfo();
      if (res) {
        console.log(res);
        setUser(res);
      }
    };
    fetchData();
  }, []);

  return (
    <S.MypageContainer>
      <S.PageName>마이페이지</S.PageName>
      <S.ProfileSection>
        {user && <Profile type="mypage" user={user} />}
      </S.ProfileSection>
      <MyList />
    </S.MypageContainer>
  );
};

export default Mypage;
