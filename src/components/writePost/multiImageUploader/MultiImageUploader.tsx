import { useEffect, useRef, useState } from "react";
import * as S from "./MultiImageUploader.styled";
import PlusButton from "../../../assets/icons/PlusSquare.svg?react";
import { HelperText } from "../../common/HelperText.styled";

interface ImageData {
  id: string;
  file: File;
  preview: string;
  isMain: boolean;
}

interface MultiImageUploaderProps {
  value: string[]; // 이미지 URL 목록 (예: preview 또는 S3 URL)
  onChange: (urls: string[], files: File[]) => void;
  helperText?: string;
}

const MultiImageUploader = ({
  value,
  onChange,
  helperText,
}: MultiImageUploaderProps) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || images.length >= 5) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage: ImageData = {
        id: crypto.randomUUID(),
        file,
        preview: reader.result as string,
        isMain: images.length === 0,
      };
      setImages((prev) => [...prev, newImage]);
      e.target.value = ""; // 같은 파일 재선택 가능
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    setImages((prev) => {
      const updated = prev.filter((img) => img.id !== id);
      if (!updated.some((img) => img.isMain) && updated.length > 0) {
        updated[0].isMain = true;
      }
      return updated;
    });
  };

  useEffect(() => {
    const urls = images.map((img) => img.preview);
    if (JSON.stringify(urls) !== JSON.stringify(value)) {
      const urls = images.map((img) => img.preview);
      const files = images.map((img) => img.file);
      onChange(urls, files); // ✅ 파일도 같이 전달
    }
  }, [images]);

  return (
    <S.Container>
      <S.ScrollWrapper>
        {images.length < 5 && (
          <S.AddBox onClick={() => inputRef.current?.click()}>
            <PlusButton />
            <div>{images.length}/5</div>
          </S.AddBox>
        )}

        {images.map((img) => (
          <S.ImageBox key={img.id}>
            <S.DeleteBtn onClick={() => handleDelete(img.id)}>X</S.DeleteBtn>
            <img src={img.preview} alt="preview" />
            {img.isMain && <S.Label>대표 사진</S.Label>}
          </S.ImageBox>
        ))}
      </S.ScrollWrapper>
      <HelperText>{helperText}</HelperText>
      {/* 숨겨진 input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleUpload}
      />
    </S.Container>
  );
};

export default MultiImageUploader;
