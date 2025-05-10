import MainCard from "../mainCard/MainCard";
import * as S from "./SubSection.styled";
//import 참치1 from "../../../assets/images/참치1.png";
//import 참치2 from "../../../assets/images/참치2.png";
//import tomato from "../../../assets/images/Tomato.png";
//import 샤프란 from "../../../assets/images/샤프란.png";
//import yummy from "../../../assets/images/Yummy.png";
import { useNavigate } from "react-router-dom";
import { useGroupBuysList } from "../../../hooks/queries/useProductQuery";
import Loading from "../../common/loading/Loding";

interface SubSectionProps {
  title: string;
  categoryId?: number;
}

const SubSection = ({ title, categoryId }: SubSectionProps) => {
  const {
    data: groupBuys,
    isLoading,
    isError,
  } = useGroupBuysList({
    sort: "latest",
    category: categoryId,
    limit: 10,
  });
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (isError || !groupBuys) return <div>에러 발생</div>;

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
