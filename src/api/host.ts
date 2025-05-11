import axios from "axios";
import api from "./instance";
import { PostRequestData } from "../types/productType";

/**
 * 공구글 작성
 * @param data
 * @returns
 */

export const writePost = async (data: PostRequestData) => {
  try {
    const res = await api.post("/api/group-buys", data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("게시 실패:", error.response?.data || error.message);
    } else {
      console.error("게시 실패: 알 수 없는 에러", error);
    }
    throw error;
  }
};

/**
 * 상품 설명 생성 - AI
 * @returns
 */

export const getAI = async (url: string) => {
  try {
    const res = await api.post("/generation/description", url);
    return res.data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("설명 생성 실패:", error.response?.data || error.message);
    } else {
      console.error("알 수 없는 에러", error);
    }
    throw error;
  }
};
