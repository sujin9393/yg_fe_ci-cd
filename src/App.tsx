import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import SearchBar from "./components/common/searchBar/SearchBar";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <SearchBar />
    </S.MainContainer>
  );
};

export default App;
