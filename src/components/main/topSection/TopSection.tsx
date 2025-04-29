import * as S from "./TopSection.styled";
import 참치1 from "../../../assets/images/참치1.png";
import 참치2 from "../../../assets/images/참치2.png";
import tomato from "../../../assets/images/Tomato.png";
import 샤프란 from "../../../assets/images/샤프란.png";
import yummy from "../../../assets/images/yummy.png";

const TopSection = () => {
  return (
    <S.SectionContainer>
      <S.SectionName>마감 임박!!</S.SectionName>
      <S.ImagePart>
        <S.BigImage src={참치1} />
        <S.SmallImagePart>
          <S.ImageContainer src={샤프란} />
          <S.ImageContainer src={참치2} />
          <S.ImageContainer src={tomato} />
          <S.ImageContainer src={yummy} />
        </S.SmallImagePart>
      </S.ImagePart>
    </S.SectionContainer>
  );
};

export default TopSection;
