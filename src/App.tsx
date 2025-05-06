import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import ConfirmModal from "./components/common/modal/confirmModal/ConfirmModal";
import LoginModal from "./components/common/modal/loginModal/LoginModal";
import { SectionLine } from "./components/common/SectionLine.styled";
import AppRouter from "./Router";
import { useModalStore } from "./stores/useModalStore";

const App = () => {
  const openedModal = useModalStore((s) => s.openedModal);
  return (
    <S.MainContainer>
      <Header />
      <SectionLine />
      <AppRouter />
      {openedModal === "login" && <LoginModal />}
      {openedModal === "confirm" && <ConfirmModal />}
    </S.MainContainer>
  );
};

export default App;
