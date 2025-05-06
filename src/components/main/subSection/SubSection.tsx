import MainCard from "../mainCard/MainCard";
import * as S from "./SubSection.styled";
import 참치1 from "../../../assets/images/참치1.png";
import 참치2 from "../../../assets/images/참치2.png";
import tomato from "../../../assets/images/Tomato.png";
import 샤프란 from "../../../assets/images/샤프란.png";
import yummy from "../../../assets/images/Yummy.png";

const SubSection = () => {
  return (
    <S.RowScrollSection>
      <S.SectionName>전체</S.SectionName>
      <S.RowScrollContainer>
        <MainCard
          imageUrl={샤프란}
          title="이거오늘사면"
          unitPrice={5000000000}
          unitAmount={2}
        />
        <MainCard
          imageUrl={참치2}
          title="이거오늘사면미쳐버려너무sjansj"
          unitPrice={5000}
          unitAmount={2}
        />
        <MainCard
          imageUrl={참치1}
          title="이거오늘사면못참치"
          unitPrice={5000}
          unitAmount={2}
        />
        <MainCard
          imageUrl={tomato}
          title="이거오늘사면"
          unitPrice={5000}
          unitAmount={2}
        />
        <MainCard
          imageUrl={yummy}
          title="이거오늘사면"
          unitPrice={5000}
          unitAmount={2}
        />
      </S.RowScrollContainer>
    </S.RowScrollSection>
  );
};

export default SubSection;
