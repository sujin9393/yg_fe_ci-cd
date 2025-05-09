import { GetOrderParams, OrderRequestData } from "../types/orderType";
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

/**
 * 주문 취소
 * @param postId
 * @returns
 */

export const deleteOrder = async (postId: number) => {
  try {
    const res = await api.delete(`/api/group-buys/${postId}/participants`);

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.error("주문 취소 실패:", error);
  }
};

/**
 * 참여목록 조회
 * @returns
 */
export const getOrderList = async (params?: GetOrderParams) => {
  try {
    const res = await api.get("/api/group-buys/user/participants", { params });

    if (res.data.data) {
      return res.data.data;
    }
  } catch (error) {
    console.error("공동구매 리스트 조회 실패:", error);
    throw error;
  }
};
