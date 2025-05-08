import * as S from "./TopSection.styled";
import { useEffect, useState } from "react";
import { GroupBuyImage } from "../subSection/SubSection";
import { getGroupBuyList } from "../../../api/product";
import { getImageUrl } from "./../../../utils/image";

interface MainTopItem {
  postId: number;
  imageKeys: GroupBuyImage[];
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
      }
    };
    fetchData();
  }, []);

  return (
    <S.SectionContainer>
      <S.SectionName>마감 임박!!</S.SectionName>
      <S.ImagePart>
        <S.BigImage src={getImageUrl(items[0]?.imageKeys[0]?.imageKey)} />
        <S.SmallImagePart>
          {items.slice(1).map((item) => (
            <S.ImageContainer
              key={item.postId}
              src={getImageUrl(item?.imageKeys[0]?.imageKey)}
            />
          ))}
        </S.SmallImagePart>
      </S.ImagePart>
    </S.SectionContainer>
  );
};

export default TopSection;
