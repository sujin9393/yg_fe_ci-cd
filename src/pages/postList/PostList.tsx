import { useState } from "react";
import FilterSelector from "../../components/common/filteringSelector/FilteringSelector";
import * as S from "./PostList.styled";
import { SectionLine } from "../../components/common/SectionLine.styled";
import CardList from "../../components/postList/cardList/CardList";
import SearchBar from "../../components/common/searchBar/SearchBar";
import { GetGroupBuysParams } from "../../types/productType";
import { useGroupBuysList } from "../../hooks/queries/useProductQuery";
import Loading from "../../components/common/loading/Loding";
import EmptySection from "../../components/common/emptySection/EmptySection";
import { useLocation, useParams } from "react-router-dom";

const filterOptions = ["최신순", "가격 낮은 순", "마감 임박 순"] as const;
type StatusKey = (typeof filterOptions)[number]; // "최신순" | "가격 낮은 순" | "마감 임박 순"

const statusMap: Record<StatusKey, "latest" | "price_asc" | "ending_soon"> = {
  최신순: "latest",
  "가격 낮은 순": "price_asc",
  "마감 임박 순": "ending_soon",
};

const categoryMap: Record<string, number> = {
  moongsanPick: 1,
  food: 2,
  life: 3,
};

const PostList = () => {
  const [status, setStatus] = useState<StatusKey>("최신순");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { category } = useParams();
  const categoryId = category ? categoryMap[category] : undefined;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchKeyword = searchParams.get("search");

  const handleToggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  const params: GetGroupBuysParams = {
    orderBy: statusMap[status],
    ...(categoryId ? { category: categoryId } : {}),
    ...(isChecked ? { postStatus: "open" } : {}),
    ...(searchKeyword ? { keyword: searchKeyword } : {}),
  };

  const { data: groupBuyList, isLoading } = useGroupBuysList(params);
  console.log(searchKeyword);
  console.log(groupBuyList);

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
      {isLoading ? (
        <Loading />
      ) : groupBuyList ? (
        <CardList list={groupBuyList} />
      ) : (
        <EmptySection category="전체" />
      )}
    </div>
  );
};

export default PostList;
