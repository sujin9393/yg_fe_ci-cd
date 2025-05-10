import { useQuery } from "@tanstack/react-query";
import { getGroupBuyList, getPost } from "../../api/product";
import {
  GetGroupBuysParams,
  GroupBuyItem,
  PostProps,
} from "../../types/productType";

export const useProductDetail = (postId: number) => {
  return useQuery<PostProps>({
    queryKey: ["postDetail", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
  });
};

export const useGroupBuysList = (params?: GetGroupBuysParams) => {
  return useQuery<GroupBuyItem[]>({
    queryKey: ["groupBuyList", params],
    queryFn: () => getGroupBuyList(params),
  });
};
