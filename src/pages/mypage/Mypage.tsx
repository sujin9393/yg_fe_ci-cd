import MyList from "../../components/common/myList/MyList";
import Profile from "../../components/common/profile/Profile";
import * as S from "./Mypage.styled";
import { useDeleteUserMutation } from "../../hooks/mutations/user/useDeleteUserMutation";
import { useMyInfoQuery } from "../../hooks/queries/useMyInfoQuery";
import { useModalStore } from "../../stores/useModalStore";
import Loading from "../../components/common/loading/Loding";

const Mypage = () => {
  const { mutate: deleteUser } = useDeleteUserMutation();
  const { data: user, isLoading } = useMyInfoQuery();
  const openModal = useModalStore((s) => s.openModal);

  const handleDeleteUser = () => {
    openModal("confirm", {
      confirmTitle: "정말 탈퇴하시겠습니까?",
      confirmDescription: "탈퇴하시면 회원 정보가 저장되지 않습니다.",
      confirmText: "탈퇴하기",
      cancelText: "돌아가기",
      onConfirm: () => {
        deleteUser();
      },
    });
  };

  if (isLoading) return <Loading message="탈퇴 처리중입니다" />;

  return (
    <S.MypageContainer>
      <S.PageName>마이페이지</S.PageName>
      <S.ProfileSection>
        {user && <Profile type="mypage" user={user} />}
      </S.ProfileSection>
      <MyList />
      <S.DeleteUser onClick={handleDeleteUser}>회원탈퇴</S.DeleteUser>
    </S.MypageContainer>
  );
};

export default Mypage;
