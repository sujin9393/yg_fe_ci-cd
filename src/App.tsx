import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import ConfirmModal from "./components/common/modal/confirmModal/ConfirmModal";
import LoginModal from "./components/common/modal/loginModal/LoginModal";
import OrderModal from "./components/common/modal/orderModal/OrderModal";
import { SectionLine } from "./components/common/SectionLine.styled";
import AppRouter from "./Router";
import { useModalStore } from "./stores/useModalStore";

const App = () => {
  const openedModal = useModalStore((s) => s.openedModal);
  const isModalOpen = Boolean(openedModal);

  return (
    <S.MainContainer $modalOpen={isModalOpen}>
      <Header />
      <SectionLine />
      <AppRouter />
      {openedModal === "login" && <LoginModal />}
      {openedModal === "confirm" && <ConfirmModal />}
      {openedModal === "order" && <OrderModal />}
    </S.MainContainer>
  );
};

export default App;
