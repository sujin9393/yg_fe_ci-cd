import MainCard from "../mainCard/MainCard";
import * as S from "./SubSection.styled";
//import 참치1 from "../../../assets/images/참치1.png";
//import 참치2 from "../../../assets/images/참치2.png";
//import tomato from "../../../assets/images/Tomato.png";
//import 샤프란 from "../../../assets/images/샤프란.png";
//import yummy from "../../../assets/images/Yummy.png";
import { useNavigate } from "react-router-dom";
import { useGroupBuysList } from "../../../hooks/queries/useProductQuery";
import EmptySection from "../../common/emptySection/EmptySection";

interface SubSectionProps {
  title: string;
  orderBy: "latest" | "price_asc" | "ending_soon" | "due_soon_only";
  categoryId?: number;
}

const SubSection = ({ title, orderBy, categoryId }: SubSectionProps) => {
  const { data: groupBuys, isError } = useGroupBuysList({
    orderBy: orderBy,
    category: categoryId,
  });
  const navigate = useNavigate();

  return (
    <S.RowScrollSection>
      <S.SectionName>{title}</S.SectionName>
      {isError || !groupBuys || groupBuys.length === 0 ? (
        <EmptySection category={title} />
      ) : (
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
      )}
    </S.RowScrollSection>
  );
};

export default SubSection;
