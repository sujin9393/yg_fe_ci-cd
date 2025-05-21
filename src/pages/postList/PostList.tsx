import { useState } from "react";
import FilterSelector from "../../components/common/filteringSelector/FilteringSelector";
import * as S from "./PostList.styled";
import { SectionLine } from "../../components/common/SectionLine.styled";
import CardList from "../../components/postList/cardList/CardList";
import SearchBar from "../../components/common/searchBar/SearchBar";

const filterOptions = ["최신순", "가격 낮은 순", "마감 임박 순"] as const;
type StatusKey = (typeof filterOptions)[number]; // "최신순" | "가격 낮은 순" | "마감 임박 순"

const statusMap: Record<StatusKey, "latest" | "price_asc" | "ending_soon"> = {
  최신순: "latest",
  "가격 낮은 순": "price_asc",
  "마감 임박 순": "ending_soon",
};

const PostList = () => {
  const [status, setStatus] = useState<StatusKey>("최신순");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div>
      <SearchBar />
      <S.FilteringContainer>
        <FilterSelector
          options={filterOptions.slice()} // ✅ readonly → mutable 로 캐스팅
          selected={status}
          onSelect={setStatus}
          type="postList"
        />
        <S.SelectBox onClick={handleToggleCheck}>
          {isChecked ? <S.StyledCheckBox /> : <S.StyledNonCheckBox />}
          공구중
        </S.SelectBox>
      </S.FilteringContainer>
      <SectionLine />
      <CardList />
    </div>
  );
};

export default PostList;
