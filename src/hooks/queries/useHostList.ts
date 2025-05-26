import { useQuery } from "@tanstack/react-query";
import {
  GetMyListParams,
  ListPostProps,
  MyListProps,
} from "../../types/userType";
import { getHostList } from "../../api/host";

export const useHostList = (params?: GetMyListParams) => {
  return useQuery<MyListProps, Error, ListPostProps[]>({
    queryKey: ["hostList", params],
    queryFn: () => getHostList(params),
    select: (data) => data.posts,
  });
};
