import ImageContainer from "../../common/imageContainer/ImageContainer";
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
      <ImageContainer imageUrl={imageUrl} />
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
