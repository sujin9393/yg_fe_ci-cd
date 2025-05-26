import { useState } from "react";
import FilterSelector from "../filteringSelector/FilteringSelector";
import * as S from "./MyList.styled";
import MyListCard from "./myListCard/MyListCard";
import EmptySection from "../emptySection/EmptySection";
import { useOrderList } from "../../../hooks/queries/useOrderQuery";
import { useHostList } from "../../../hooks/queries/useHostList";

const statusMap = {
  공구중: "open",
  모집마감: "closed",
  공구종료: "ended",
} as const;

type StatusKey = keyof typeof statusMap;

interface MyListProps {
  activeTab: "참여목록" | "주최목록" | "관심목록";
}

const MyList = ({ activeTab }: MyListProps) => {
  const [status, setStatus] = useState<StatusKey>("공구중");

  const commonParams = { sort: statusMap[status] };

  // ✅ Hook은 조건 없이 항상 호출
  const orderQuery = useOrderList(commonParams);
  const hostQuery = useHostList(commonParams);

  // ✅ 조건에 따라 데이터를 선택
  const items = activeTab === "참여목록" ? orderQuery.data : hostQuery.data;
  console.log(items);

  return (
    <S.Container>
      <S.FilteringSection>
        <FilterSelector
          options={["공구중", "모집마감", "공구종료"]}
          selected={status}
          onSelect={setStatus}
        />
      </S.FilteringSection>
      {!items || items.length === 0 ? (
        <EmptySection
          category={activeTab === "참여목록" ? "참여한" : "주최한"}
        />
      ) : (
        items.map((item) => <MyListCard key={item.postId} item={item} />)
      )}
    </S.Container>
  );
};

export default MyList;
