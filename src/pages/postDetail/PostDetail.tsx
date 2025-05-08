import * as S from "./PostDetail.styled";
import CurrentParti from "../../components/common/currentParti/CurrentParti";
import { SectionLine } from "../../components/common/SectionLine.styled";
import Profile from "../../components/common/profile/Profile";
import ImageSlider from "../../components/common/image/imageSlider/ImageSlider";
import { useModalStore } from "../../stores/useModalStore";
import { useParams } from "react-router-dom";
import { formatDateTime, formatRelativeTime, getDday } from "../../utils/date";
import { useOrderStore } from "../../stores/useOrderStore";
import { useProductDetail } from "../../hooks/queries/product/useProductDetail";
import { useUserStore } from "../../stores/useUserStore";

const PostDetail = () => {
  const openModal = useModalStore((s) => s.openModal);

  const setOrderInfo = useOrderStore((s) => s.setOrderInfo);
  const { postId } = useParams();
  const user = useUserStore((s) => s.user);
  const { data: post, isLoading, isError } = useProductDetail(Number(postId));

  const handleOrderClick = () => {
    if (!post) return;

    if (!user) {
      openModal("login");
      return;
    }

    setOrderInfo({
      postId: post.postId,
      productName: post.name,
      unitPrice: post.unitPrice,
      unitAmount: post.unitAmount,
      totalAmount: post.totalAmount,
      hostAccountBank: post.userProfileResponse.accountBank ?? "정보없음",
      hostAccountNumber: post.userProfileResponse.accountNumber ?? "정보없음",
    });

    openModal("order");
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError || !post) return <div>에러 발생</div>;

  return (
    <S.PostDetailContainer>
      {post && (
        <>
          <S.TopSection>
            <ImageSlider images={post.imageKeys?.map((img) => img.imageKey)} />
            <Profile type="post" user={post.userProfileResponse} />
          </S.TopSection>
          <SectionLine />
          <S.PostInfo>
            <S.TitlePart>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.ProductTitle>{post.name}</S.ProductTitle>
            </S.TitlePart>
            <S.InfoPart>
              <S.ProductInfo>
                <S.PickupDate>
                  픽업 {formatDateTime(post.pickupDate)} / {post.location}
                </S.PickupDate>
                <S.unitPrice>{post.unitPrice.toLocaleString()}원</S.unitPrice>
                <S.unitAmount>(주문 단위: {post.unitAmount})</S.unitAmount>
              </S.ProductInfo>
              <S.OrderInfo>
                <S.OrderButton onClick={handleOrderClick}>
                  주문참여
                </S.OrderButton>
                <CurrentParti
                  soldAmount={post.soldAmount}
                  totalAmount={post.totalAmount}
                  participantCount={post.participantCount}
                />
                <S.Ddate>마감까지 {getDday(post.dueDate)}</S.Ddate>
              </S.OrderInfo>
            </S.InfoPart>
            <S.DetailPart>
              <S.SectionDivider>
                <S.SectionName>상품 설명</S.SectionName>
                <SectionLine />
              </S.SectionDivider>
              <S.DetailInfo>{post.description}</S.DetailInfo>
              <S.PostDate>{formatRelativeTime(post.createdAt)}</S.PostDate>
            </S.DetailPart>
          </S.PostInfo>
        </>
      )}
    </S.PostDetailContainer>
  );
};

export default PostDetail;
