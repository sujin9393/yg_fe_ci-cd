import { LoginFormData } from "../schemas/loginSchema";
import api from "./instance";

export interface SignupRequestData {
  //imageUrl?: string;
  email: string;
  password: string;
  nickname: string;
  name: string;
  phoneNumber: string;
  accountBank: string;
  accountNumber: string;
}

/**
 * 회원가입
 * @param data - 회원가입 요청 데이터
 * @returns 회원정보
 */
export const postUser = async (data: SignupRequestData) => {
  try {
    const res = await api.post("/api/users", data);

    if (res.data.data) {
      return res.data.data;
    }
  } catch (error) {
    console.error("회원가입 실패:", error);
  }
};

/**
 * 로그인
 * @param email
 * @param password
 * @returns 회원정보
 */
export const login = async (data: LoginFormData) => {
  try {
    const res = await api.post("/api/users/token", data);

    if (res.data.data) {
      return res.data.data;
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

/**
 * 마이페이지 정보 조회
 * @returns
 */
export const getMyInfo = async () => {
  try {
    const res = await api.get("/api/users/profile");

    if (res.data.data) {
      return res.data.data; // 백엔드 응답 구조에 따라 수정
    }
  } catch (error) {
    console.error("공동구매 리스트 조회 실패:", error);
  }
};
