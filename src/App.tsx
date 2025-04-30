import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import AppRouter from "./Router";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <S.HeaderLine />
      <AppRouter />
    </S.MainContainer>
  );
};

export default App;
