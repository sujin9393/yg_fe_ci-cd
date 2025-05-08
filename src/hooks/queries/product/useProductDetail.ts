import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../../api/product";
import { PostProps } from "../../../types/productTypes";

export const useProductDetail = (postId: number) => {
  return useQuery<PostProps>({
    queryKey: ["postDetail", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
  });
};
