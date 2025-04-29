import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import Main from "./pages/main/Main";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <S.HeaderLine />
      <Main />
    </S.MainContainer>
  );
};

export default App;
