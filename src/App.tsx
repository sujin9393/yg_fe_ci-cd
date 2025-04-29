import * as S from "./App.styled";
import Header from "./components/common/header/Header";
import ImageSlider from "./components/common/imageSlider/ImageSlider";
import SearchBar from "./components/common/searchBar/SearchBar";

const App = () => {
  return (
    <S.MainContainer>
      <Header />
      <SearchBar />
      <ImageSlider />
    </S.MainContainer>
  );
};

export default App;
