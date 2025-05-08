export interface GetGroupBuysParams {
  sort?: "latest" | "price_asc" | "ending_soon";
  category?: number;
  cursorId?: number;
  cursorPrice?: number;
  cursorCreatedAt?: string;
  limit?: number;
}

export interface PostRequestData {
  title: string;
  name: string;
  price: number;
  totalAmount: number;
  unitAmount: number;
  hostQuantity: number;
  description: string;
  dueDate: string;
  location: string;
  pickupDate: string;
  imageUrls: string[];
  url?: string;
}
