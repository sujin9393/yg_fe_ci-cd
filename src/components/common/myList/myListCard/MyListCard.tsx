import * as S from "./MyListCard.styled";
import ShoppingBag from "../../../../assets/icons/ShoppingBag.svg";
import CurrentParti from "../../currentParti/CurrentParti";
import { SectionLine } from "../../SectionLine.styled";
import ImageContainer from "../../image/imageContainer/ImageContainer";
import { OrderPostProps } from "../../../../types/orderType";
import { getImageUrl } from "../../../../utils/image";

interface MyListCardItem {
  item: OrderPostProps;
}

const MyListCard = ({ item }: MyListCardItem) => {
  return (
    <S.CardContainer>
      <S.CommonSection>
        <ImageContainer imageUrl={getImageUrl(item.imageKey)} />
        <S.CardInfo>
          <S.OrderState>입금확인완료</S.OrderState>
          <S.productInfo>
            <S.pickupPlace>{item.location}</S.pickupPlace>
            <S.unitPrice>{item.price?.toLocaleString()}원</S.unitPrice>
            <S.postTitle>{item.title}</S.postTitle>
          </S.productInfo>
          <S.OrderInfo>
            <S.MyOrder>
              <img src={ShoppingBag} alt="쇼핑백" /> 구매수량 :{" "}
              {item.orderQuantity}
            </S.MyOrder>
            <CurrentParti
              soldAmount={item.soldAmount}
              totalAmount={item.totalAmount}
              participantCount={item.participantCount}
            />
          </S.OrderInfo>
        </S.CardInfo>
      </S.CommonSection>
      <S.ButtonSection></S.ButtonSection>
      <SectionLine />
    </S.CardContainer>
  );
};

export default MyListCard;
