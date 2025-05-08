import * as S from "./App.styled";
import Header from "./components/common/header/Header";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <div>💡 이것은 테스트입니다</div> 
    </S.MainContainer>
  );
};

export default App;
