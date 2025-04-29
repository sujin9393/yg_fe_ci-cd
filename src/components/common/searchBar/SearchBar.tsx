import * as S from "./SearchBar.styled";
import Search from "../../../assets/icons/Search.svg";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchLine />
      <S.SearchBox>
        <S.SearchText placeholder="검색어를 입력해주세요" />
        <S.SearchIcon src={Search} alt="search icon" />
      </S.SearchBox>
      <S.SearchLine />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
