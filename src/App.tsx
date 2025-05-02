import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import { SectionLine } from "./components/common/SectionLine.styled";
import AppRouter from "./Router";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <SectionLine />
      <AppRouter />
    </S.MainContainer>
  );
};

export default App;
