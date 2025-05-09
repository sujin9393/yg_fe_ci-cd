import { useOrderList } from "../../../hooks/queries/useOrderQuery";
import * as S from "./MyList.styled";
import MyListCard from "./myListCard/MyListCard";

const MyList = () => {
  const { data: items } = useOrderList({ sort: "open" });
  console.log(items);

  return (
    <div>
      <S.ListName>참여목록</S.ListName>
      {items &&
        items.map((item) => <MyListCard key={item.postId} item={item} />)}
    </div>
  );
};

export default MyList;
