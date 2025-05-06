import * as S from "./Header.styled";
import Logo from "../../../assets/icons/Logo.svg";
import Service from "../../../assets/icons/Service.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useModalStore } from "../../../stores/useModalStore";

const Header = () => {
  const openModal = useModalStore((s) => s.openModal);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.HeaderContainer>
      {pathname !== "/" && <S.GoBack onClick={() => navigate(-1)} />}
      <S.LogoPart
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="logo" />
        <S.ServiceName src={Service} />
      </S.LogoPart>
      <S.SidePart>
        {/*<S.AlertIcon src={Bell} alt="alert" />*/}
        <S.ProfileIcon
          onClick={() =>
            openModal("confirm", {
              confirmTitle: "정말 나가시겠어요?",
              confirmDescription: "작성 중인 정보가 저장되지 않습니다.",
              confirmText: "나가기",
              cancelText: "계속 작성하기",
              onConfirm: () => navigate("/"),
            })
          }
        />
      </S.SidePart>
    </S.HeaderContainer>
  );
};

export default Header;
