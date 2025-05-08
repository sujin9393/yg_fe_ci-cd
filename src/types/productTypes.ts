import { GroupBuyImage } from "../components/main/subSection/SubSection";
import { UserInfo } from "./userTypes";

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
  imageKeys: string[];
  url?: string;
}

export interface PostProps {
  postId: number;
  title: string;
  name: string;
  postStatus: string;
  description: string;
  url: string;
  imageKeys: GroupBuyImage[];
  location: string;
  pickupDate: string;
  unitPrice: number;
  unitAmount: number;
  soldAmount: number;
  totalAmount: number;
  participant: boolean;
  participantCount: number;
  dueDate: string;
  dueSoon: boolean;
  Wish: boolean;
  createdAt: string;
  userProfileResponse: UserInfo;
}
