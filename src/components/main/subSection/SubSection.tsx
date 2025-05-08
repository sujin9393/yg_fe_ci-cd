import MainCard from "../mainCard/MainCard";
import * as S from "./SubSection.styled";
//import 참치1 from "../../../assets/images/참치1.png";
//import 참치2 from "../../../assets/images/참치2.png";
//import tomato from "../../../assets/images/Tomato.png";
//import 샤프란 from "../../../assets/images/샤프란.png";
//import yummy from "../../../assets/images/Yummy.png";
import { useEffect, useState } from "react";
import { getGroupBuyList } from "../../../api/product";
import { useNavigate } from "react-router-dom";

interface SubSectionProps {
  title: string;
  categoryId?: number;
}

export interface GroupBuyImage {
  imageKey: string;
  isThumbnail: boolean;
  orderIndex: number;
}

interface GroupBuyItem {
  postId: number;
  title: string;
  imageKeys: GroupBuyImage[];
  unitPrice: number;
  unitAmount: number;
  // 필요한 필드 추가로 작성 가능
}

const SubSection = ({ title, categoryId }: SubSectionProps) => {
  const [groupBuys, setGroupBuys] = useState<GroupBuyItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGroupBuyList({
        sort: "latest",
        category: categoryId,
        limit: 10,
      });
      if (res) {
        setGroupBuys(res);
      }
    };
    fetchData();
  }, [title, categoryId]);

  return (
    <S.RowScrollSection>
      <S.SectionName>{title}</S.SectionName>
      <S.RowScrollContainer>
        {groupBuys.map((item) => (
          <MainCard
            onClick={() => {
              navigate(`/products/${item.postId}`);
            }}
            key={item.postId}
            imageKey={item.imageKeys[0]?.imageKey}
            title={item.title}
            unitPrice={item.unitPrice.toLocaleString()}
            unitAmount={item.unitAmount}
          />
        ))}
      </S.RowScrollContainer>
    </S.RowScrollSection>
  );
};

export default SubSection;
