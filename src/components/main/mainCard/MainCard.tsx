import ImageContainer from "../../common/image/imageContainer/ImageContainer";
import * as S from "./MainCard.styled";
import { getImageUrl } from "./../../../utils/image";

interface MainCardProps {
  imageKey: string;
  title: string;
  unitPrice: string;
  unitAmount: number;
  onClick?: () => void;
}

const MainCard = ({
  imageKey,
  title,
  unitPrice,
  unitAmount,
  onClick,
}: MainCardProps) => {
  return (
    <S.MainCardContainer onClick={onClick}>
      <ImageContainer imageUrl={getImageUrl(imageKey)} />
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
