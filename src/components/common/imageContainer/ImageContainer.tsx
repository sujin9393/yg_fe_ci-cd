import * as S from "./ImageContainer.styled";

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer = ({ imageUrl }: ImageContainerProps) => {
  return (
    <S.ImageContainer>
      <S.CardImage src={imageUrl} alt="상품 이미지" />
    </S.ImageContainer>
  );
};

export default ImageContainer;
