import { useState } from "react";
import { useOrderList } from "../../../hooks/queries/useOrderQuery";
import FilterSelector from "../filteringSelector/FilteringSelector";
import * as S from "./MyList.styled";
import MyListCard from "./myListCard/MyListCard";
import EmptySection from "../emptySection/EmptySection";

const statusMap = {
  공구중: "open",
  모집마감: "closed",
  공구종료: "ended",
} as const;

const MyList = () => {
  type StatusKey = keyof typeof statusMap;
  const [status, setStatus] = useState<StatusKey>("공구중");
  const { data: items } = useOrderList({ sort: statusMap[status] });
  console.log(items);

  return (
    <div>
      <S.ListName>참여목록</S.ListName>
      <FilterSelector
        options={["공구중", "모집마감", "공구종료"]}
        selected={status}
        onSelect={setStatus}
      />
      {!items || items.length === 0 ? (
        <EmptySection category="참여한" />
      ) : (
        items.map((item) => <MyListCard key={item.postId} item={item} />)
      )}
    </div>
  );
};

export default MyList;
