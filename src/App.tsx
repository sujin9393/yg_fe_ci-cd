import { useNavigate } from "react-router-dom";
import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import ConfirmModal from "./components/common/modal/confirmModal/ConfirmModal";
import LoginModal from "./components/common/modal/loginModal/LoginModal";
import OrderModal from "./components/common/modal/orderModal/OrderModal";
import { SectionLine } from "./components/common/SectionLine.styled";
import AppRouter from "./Router";
import { useModalStore } from "./stores/useModalStore";
import { useUserStore } from "./stores/useUserStore";

const App = () => {
  const openModal = useModalStore((s) => s.openModal);
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const openedModal = useModalStore((s) => s.openedModal);
  const isModalOpen = Boolean(openedModal);

  return (
    <>
      <S.MainContainer $modalOpen={isModalOpen}>
        <Header />
        <SectionLine />
        <AppRouter />
        <S.MasterButton
          onClick={() => {
            if (!user) {
              openModal("login"); // 로그인 안 한 경우
            } else {
              navigate("/writePost"); // 로그인 한 경우
            }
          }}
        />
        {openedModal === "login" && <LoginModal />}
        {openedModal === "confirm" && <ConfirmModal />}
        {openedModal === "order" && <OrderModal />}
      </S.MainContainer>
    </>
  );
};

export default App;
