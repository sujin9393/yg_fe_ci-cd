export interface OrderRequestData {
  postId: number;
  price: number;
  quantity: number;
  name?: string;
}

export interface GetOrderParams {
  sort?: "open" | "closed" | "endede";
  cursor?: number;
  limit?: number;
}

export interface OrderListProps {
  posts: OrderPostProps[];
  nextCursor: number;
  hasMore: boolean;
}

export interface OrderPostProps {
  postId: number;
  title: string;
  postStatus: string;
  location: string;
  imageKey: string;
  price: number;
  orderQuantity: number;
  soldAmount: number;
  totalAmount: number;
  participantCount: number;
  orderStatus: string;
  dueSoon: boolean;
  wish: boolean;
}
