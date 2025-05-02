import * as S from "./MyList.styled";
import MyListCard from "./myListCard/MyListCard";

const MyList = () => {
  return (
    <div>
      <S.ListName>참여목록</S.ListName>
      <MyListCard />
      <MyListCard />
      <MyListCard />
      <MyListCard />
      <MyListCard />
    </div>
  );
};

export default MyList;
