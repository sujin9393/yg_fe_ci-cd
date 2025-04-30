import ImageSlider from "../../components/common/imageSlider/ImageSlider";
import * as S from "./PostDetail.styled";
import tomato from "../../assets/images/Tomato.png";
import Box from "../../assets/icons/Box.svg";

const PostDetail = () => {
  return (
    <S.PostDetailContainer>
      <S.TopSection>
        <ImageSlider />
        <S.WriterInfo>
          <S.ProfileImg src={tomato} alt="프로필 이미지" />
          <S.ProfileInfo>
            <S.NameInfo>토마토녀</S.NameInfo>
            <S.PlaceInfo>카카오테크 교육장</S.PlaceInfo>
            <S.AccountInfo>주최자 계좌번호 : ~!~!0101010</S.AccountInfo>
          </S.ProfileInfo>
        </S.WriterInfo>
      </S.TopSection>
      <S.SectionLine />
      <S.PostInfo>
        <S.TitlePart>
          <S.PostTitle>
            꼭 이번달에 사야 돼요...제발 같이 구매해주세요...{" "}
          </S.PostTitle>
          <S.ProductTitle>
            [동원] 라이트스탠다드 참치 85g X 25캔{" "}
          </S.ProductTitle>
        </S.TitlePart>
        <S.InfoPart>
          <S.ProductInfo>
            <S.PickupDate>픽업일자 2025.04.15</S.PickupDate>
            <S.unitPrice>35,900원</S.unitPrice>
            <S.unitAmount>(주문 단위: 5)</S.unitAmount>
          </S.ProductInfo>
          <S.OrderInfo>
            <S.OrderButton>주문참여</S.OrderButton>
            <S.AmountPart>
              <S.Amount>45/80</S.Amount>
              <img src={Box} alt="박스 아이콘" />
            </S.AmountPart>
            <S.PartCount>5명 참여 중!</S.PartCount>
            <S.Ddate>마감까지 D-2</S.Ddate>
          </S.OrderInfo>
        </S.InfoPart>
        <S.DetailPart>
          <S.SectionDivider>
            <S.SectionName>상품 설명</S.SectionName>
            <S.Line />
          </S.SectionDivider>
          <S.DetailInfo>
            대한민국 국민 참치 동원! <br />
            참치는 역시 동원 이죠~^^ <br />
            활용도 만점 참치로
            <br /> 반찬걱정 안녕~q(≧▽≦q)동원 고추 참치!! <br />
            1. [동원] 고추참치 85g X 25캔 <br />
            *유통기한
            <br /> 상시제조 상품 /제조일로부터60개월
          </S.DetailInfo>
        </S.DetailPart>
      </S.PostInfo>
    </S.PostDetailContainer>
  );
};

export default PostDetail;
