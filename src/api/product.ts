import { GetGroupBuysParams, PostRequestData } from "../types/productTypes";
import api from "./instance";

/**
 * 공동구매 전체 리스트 조회
 * @param params - 정렬, 카테고리, 커서 정보, 개수 제한 등
 * @returns 공동구매 게시글 리스트
 */
export const getGroupBuyList = async (params?: GetGroupBuysParams) => {
  try {
    const res = await api.get("/api/group-buys", { params });

    if (res.data.data) {
      console.log(res.data.data.posts);
      return res.data.data.posts; // 백엔드 응답 구조에 따라 수정
    }
  } catch (error) {
    console.error("공동구매 리스트 조회 실패:", error);
  }
};

/**
 * 상세 게시글 조회
 * @param postId
 * @returns
 */
export const getPost = async (postId: number) => {
  try {
    const res = await api.get(`/api/group-buys/${postId}`);

    if (res.data.data) {
      return res.data.data; // 백엔드 응답 구조에 따라 수정
    }
  } catch (error) {
    console.error("공동구매 리스트 조회 실패:", error);
  }
};

/**
 * 공구글 작성
 * @param data
 * @returns
 */
import axios from "axios";

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
