import ImageSlider from "../../common/image/imageSlider/ImageSlider";
import * as S from "./ProductCard.styled";
import 참치1 from "../../../assets/images/참치1.png";
import 참치2 from "../../../assets/images/참치2.png";
import CurrentParti from "../../common/currentParti/CurrentParti";
import { SectionLine } from "../../common/SectionLine.styled";

const ProductCard = () => {
  return (
    <>
      <S.Container>
        <S.Title>꼭 사야돼요..</S.Title>
        <S.Date>게시글 업로드 날짜 2025~</S.Date>
        <ImageSlider images={[참치1, 참치2]} />
        <S.ProductName>상품명</S.ProductName>
        <S.Info>
          <S.PriceInfo>
            1,400원 <span>(주문단위 : 3)</span>
          </S.PriceInfo>
          <CurrentParti soldAmount={45} totalAmount={80} participantCount={5} />
        </S.Info>
      </S.Container>
      <SectionLine />
    </>
  );
};

export default ProductCard;
