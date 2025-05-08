import ImageContainer from "../../common/image/imageContainer/ImageContainer";
import * as S from "./MainCard.styled";

interface MainCardProps {
  imageUrl: string;
  title: string;
  unitPrice: number;
  unitAmount: number;
  onClick?: () => void;
}

const MainCard = ({
  imageUrl,
  title,
  unitPrice,
  unitAmount,
  onClick,
}: MainCardProps) => {
  return (
    <S.MainCardContainer onClick={onClick}>
      <ImageContainer imageUrl={`https://moongsan.com/${imageUrl}`} />
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
