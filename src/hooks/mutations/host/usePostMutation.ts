import { useMutation } from "@tanstack/react-query";
import { writePost } from "../../../api/host";
import { PostRequestData } from "../../../types/productType";
import { useNavigate } from "react-router-dom";

export const usePostMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PostRequestData) => writePost(data),
    onSuccess: (data) => {
      console.log("공구글 게시 성공:", data);
      alert("공구글이 게시되었습니다 🎉");
      navigate(`/products/${data.data.postId}`);
    },
    onError: (err) => {
      console.error("공구글 게시 실패", err);
    },
  });
};
