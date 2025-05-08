import api from "./instance";

export const uploadImages = async (files: File[]) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("imageFiles", file); // ✅ ← 정확한 키 이름
  });

  try {
    const res = await api.post("/api/image", formData, {
      headers: {
        "Content-Type": undefined, // ✅ axios가 자동으로 multipart/form-data 설정
      },
    });
    return res.data.imageUrls; // 이미지 URL 배열 등 서버 응답
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
};
