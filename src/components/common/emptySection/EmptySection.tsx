import * as S from "./EmptySection.styled";

interface EmptySectionProps {
  category?: string;
}

const EmptySection = ({ category = "해당" }: EmptySectionProps) => {
  return <S.Container>앗, 아직 {category} 상품이 없어요!</S.Container>;
};

export default EmptySection;
