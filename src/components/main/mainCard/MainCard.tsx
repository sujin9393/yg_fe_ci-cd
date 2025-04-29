import * as S from "./MainCard.styled";

interface MainCardProps {
  imageUrl: string;
  title: string;
  unitPrice: number;
  unitAmount: number;
}

const MainCard = ({
  imageUrl,
  title,
  unitPrice,
  unitAmount,
}: MainCardProps) => {
  return (
    <S.MainCardContainer>
      <S.ImageContainer>
        <S.CardImage src={imageUrl} alt="상품 이미지" />
      </S.ImageContainer>
      <S.CardInfo>
        <S.CardTitle>{title}</S.CardTitle>
        <S.UnitInfo>
          <S.UnitPrice>{unitPrice}원</S.UnitPrice>
          <S.UnitAmount>(주문단위:{unitAmount})</S.UnitAmount>
        </S.UnitInfo>
      </S.CardInfo>
    </S.MainCardContainer>
  );
};

export default MainCard;
