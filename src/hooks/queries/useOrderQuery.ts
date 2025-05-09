import { useQuery } from "@tanstack/react-query";
import {
  GetOrderParams,
  OrderListProps,
  OrderPostProps,
} from "../../types/orderType";
import { getOrderList } from "../../api/order";

export const useOrderList = (params?: GetOrderParams) => {
  return useQuery<OrderListProps, Error, OrderPostProps[]>({
    queryKey: ["partiList", params],
    queryFn: () => getOrderList(params),
    select: (data) => data.posts,
  });
};
