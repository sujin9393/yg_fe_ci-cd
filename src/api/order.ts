import { OrderRequestData } from "../types/orderTypes";
import api from "./instance";

/**
 * 주문 등록
 * @param data
 * @returns
 */

export const postOrder = async (data: OrderRequestData) => {
  try {
    const res = await api.post("/api/orders", data);

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.error("주문 실패:", error);
    throw error;
  }
};

export const deleteOrder = async (postId: number) => {
  try {
    const res = await api.delete(`/api/orders/postId/${postId}`);

    if (res.data.data) {
      return res.data.data;
    }
  } catch (error) {
    console.error("회원가입 실패:", error);
  }
};
