import ImageContainer from "../imageContainer/ImageContainer";
import * as S from "./MyListCard.styled";
import 참치 from "../../../assets/images/참치1.png";

const MyListCard = () => {
  return (
    <S.CardContainer>
      <S.CommonSection>
        <ImageContainer imageUrl={참치} />
        <S.CardInfo>
          <S.OrderState>입금확인완료</S.OrderState>
          <S.productInfo>
            <S.pickupPlace>카카오테크 교육장</S.pickupPlace>
            <S.unitPrice>25,900원</S.unitPrice>
            <S.postTitle>구매해라!!!!!</S.postTitle>
          </S.productInfo>
          <S.OrderInfo>
            <S.MyOrder>구매수량 : 10</S.MyOrder>
            <S.TotalAmount>45/80</S.TotalAmount>
          </S.OrderInfo>
        </S.CardInfo>
      </S.CommonSection>
      <S.ButtonSection></S.ButtonSection>
    </S.CardContainer>
  );
};

export default MyListCard;
