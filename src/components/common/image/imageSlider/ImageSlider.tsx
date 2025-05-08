import * as S from "./ImageSlider.styled";
//import 참치1 from "../../../../assets/images/참치1.png";
//import 참치2 from "../../../../assets/images/참치2.png";
import { useState } from "react";
//import { GroupBuyImage } from "../../../main/subSection/SubSection";

//const images = [참치1, 참치2];

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 터치 시작
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  // 터치 움직임
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  // 터치 끝났을 때
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;

      if (diff > 50) {
        // 오른쪽으로 넘김 (다음 슬라이드)
        handleNext();
      }
      if (diff < -50) {
        // 왼쪽으로 넘김 (이전 슬라이드)
        handlePrev();
      }
    }

    // 초기화
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <S.ImageSliderContainer>
      <S.ImagePart
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {currentIndex !== 0 && <S.StyledLeftArrow onClick={handlePrev} />}
        <S.ImageContainer
          src={`https://moongsan.com/${images[currentIndex]}`}
        ></S.ImageContainer>
        {currentIndex !== images.length - 1 && (
          <S.StyledRightArrow onClick={handlePrev} />
        )}
      </S.ImagePart>
      <S.SlideIcon>
        {images.map((_, index) => (
          <S.Indicator key={index} $isSelected={currentIndex === index} />
        ))}
      </S.SlideIcon>
    </S.ImageSliderContainer>
  );
};

export default ImageSlider;
