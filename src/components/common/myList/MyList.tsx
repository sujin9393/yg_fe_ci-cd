import { useState } from "react";
import { useOrderList } from "../../../hooks/queries/useOrderQuery";
import FilterSelector from "../filteringSelector/FilteringSelector";
import * as S from "./MyList.styled";
import MyListCard from "./myListCard/MyListCard";

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
    <>
      <S.ListName>참여목록</S.ListName>
      <FilterSelector
        options={["공구중", "모집마감", "공구종료"]}
        selected={status}
        onSelect={setStatus}
      />
      {items &&
        items.map((item) => <MyListCard key={item.postId} item={item} />)}
    </>
  );
};

export default MyList;
