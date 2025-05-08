import * as S from "./TopSection.styled";
import { useEffect, useState } from "react";
import { GroupBuyImage } from "../subSection/SubSection";
import { getGroupBuyList } from "../../../api/product";

interface MainTopItem {
  postId: number;
  imageUrls: GroupBuyImage[];
}

const TopSection = () => {
  const [items, setItems] = useState<MainTopItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGroupBuyList({
        sort: "ending_soon",
        limit: 5,
      });
      if (res) {
        setItems(res);
        console.log(res);
      }
    };
    fetchData();
  }, []);

  return (
    <S.SectionContainer>
      <S.SectionName>마감 임박!!</S.SectionName>
      <S.ImagePart>
        <S.BigImage
          src={`https://moongsan.com/${items[0]?.imageUrls[0]?.imageUrl}`}
        />
        <S.SmallImagePart>
          {items.slice(1).map((item) => (
            <S.ImageContainer
              key={item.postId}
              src={`https://moongsan.com/${item?.imageUrls[0]?.imageUrl}`}
            />
          ))}
        </S.SmallImagePart>
      </S.ImagePart>
    </S.SectionContainer>
  );
};

export default TopSection;
