import LikeToggle from "../../likeToggle/LikeToggle";
import * as S from "./ImageContainer.styled";

interface ImageContainerProps {
  imageUrl: string;
  postId: number;
}

const ImageContainer = ({ imageUrl, postId }: ImageContainerProps) => {
  return (
    <S.ImageContainer>
      <S.CardImage src={imageUrl} alt="상품 이미지" />
      <LikeToggle postId={postId} />
    </S.ImageContainer>
  );
};

export default ImageContainer;
