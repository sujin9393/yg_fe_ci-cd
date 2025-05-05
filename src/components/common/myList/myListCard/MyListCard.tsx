import * as S from "./MyListCard.styled";
import 참치 from "../../../../assets/images/참치1.png";
import ShoppingBag from "../../../../assets/icons/ShoppingBag.svg";
import CurrentParti from "../../currentParti/CurrentParti";
import { SectionLine } from "../../SectionLine.styled";
import ImageContainer from "../../image/imageContainer/ImageContainer";

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
            <S.MyOrder>
              <img src={ShoppingBag} alt="쇼핑백" /> 구매수량 : 10
            </S.MyOrder>
            <CurrentParti />
          </S.OrderInfo>
        </S.CardInfo>
      </S.CommonSection>
      <S.ButtonSection></S.ButtonSection>
      <SectionLine />
    </S.CardContainer>
  );
};

export default MyListCard;
