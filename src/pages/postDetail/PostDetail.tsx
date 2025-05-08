import * as S from "./PostDetail.styled";
import CurrentParti from "../../components/common/currentParti/CurrentParti";
import { SectionLine } from "../../components/common/SectionLine.styled";
import Profile from "../../components/common/profile/Profile";
import ImageSlider from "../../components/common/image/imageSlider/ImageSlider";
import { useModalStore } from "../../stores/useModalStore";
import { useEffect, useState } from "react";
import { getPost } from "../../api/product";
import { GroupBuyImage } from "../../components/main/subSection/SubSection";
import { useParams } from "react-router-dom";
import { UserInfo } from "../../types/userTypes";
import { formatDateTime, formatRelativeTime } from "../../utils/date";

interface PostProps {
  title: string;
  name: string;
  postStatus: string;
  description: string;
  url: string;
  imageUrls: GroupBuyImage[];
  location: string;
  unitPrice: number;
  unitAmount: number;
  soldAmount: number;
  totalAmount: number;
  participantCount: number;
  dueSoon: boolean;
  isWish: boolean;
  isParticipant: boolean;
  createdAt: string;
  userProfileResponse: UserInfo;
}

const PostDetail = () => {
  const openModal = useModalStore((s) => s.openModal);
  const [post, setPost] = useState<PostProps | null>(null);
  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;
    const fetchData = async () => {
      const res = await getPost(Number(postId));
      if (res) {
        setPost(res);
        console.log(res);
        console.log(res.userProfileResponse);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <S.PostDetailContainer>
      {post && (
        <>
          <S.TopSection>
            <ImageSlider images={post.imageUrls?.map((img) => img.imageUrl)} />
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
                  픽업 {formatDateTime(post.createdAt)} / {post.location}
                </S.PickupDate>
                <S.unitPrice>{post.unitPrice.toLocaleString()}원</S.unitPrice>
                <S.unitAmount>(주문 단위: {post.unitAmount})</S.unitAmount>
              </S.ProductInfo>
              <S.OrderInfo>
                <S.OrderButton onClick={() => openModal("order")}>
                  주문참여
                </S.OrderButton>
                <CurrentParti />
                <S.Ddate>마감까지 D-2</S.Ddate>
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
