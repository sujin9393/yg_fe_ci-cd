import axios, { AxiosError } from "axios";
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
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      alert(error.response.data.message); // 서버 메시지 직접 사용자에게 표시
    } else {
      alert("회원가입 중 오류가 발생했습니다.");
    }
  }
};

/**
 * 이메일 중복확인
 * @returns
 */
export const confirmEmail = async (email: string) => {
  try {
    const res = await api.get("/api/users/check-email", {
      params: { email },
    });

    if (res.data.data) {
      return res.data.data;
    } else {
      throw new Error("응답에 data가 없습니다");
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.response?.data?.message) {
      throw new Error(error.response.data.message); // 서버 메시지를 직접 전달
    }
    throw new Error("닉네임 확인 중 오류가 발생했습니다.");
  }
};

/**
 * 닉네임 중복확인
 * @returns
 */
export const confirmNickname = async (nickname: string) => {
  try {
    const res = await api.get("/api/users/check-nickname", {
      params: { nickname },
    });

    if (res.data.data) {
      return res.data.data;
    } else {
      throw new Error("응답에 data가 없습니다");
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.response?.data?.message) {
      throw new Error(error.response.data.message); // 서버 메시지를 직접 전달
    }
    throw new Error("닉네임 확인 중 오류가 발생했습니다.");
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
    } else {
      throw new Error("응답에 data가 없습니다");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error; // 🔥 다시 던지기!
  }
};

/**
 * 로그아웃
 * @returns
 */

export const logout = async () => {
  try {
    const res = await api.delete("/api/users/token");

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw error;
  }
};

/**
 * 프로필 정보 조회
 * @returns
 */
// user.ts
export const getMyInfo = async () => {
  try {
    const res = await api.get("/api/users/profile");
    if (res.data.data) return res.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("로그인 필요");
    } else {
      console.log("알 수 없는 에러");
    }
    throw new Error("회원 정보를 불러오는 데 실패했습니다.");
  }
};

/*} // ✅ AccessToken 만료인 경우
    if (error instanceof AxiosError && error.response?.status === 403) {
      try {
        await getRefreshToken(); // ✅ 새 토큰 발급받고
        const retry = await api.get("/api/users/profile"); // ✅ 재요청
        return retry.data.data;
      } catch {
        throw new Error("로그인이 만료되었습니다. 다시 로그인해주세요.");
      }
    }*/

/**
 * 토큰 재발행
 * @returns 회원정보
 */
export const getRefreshToken = async () => {
  try {
    const res = await api.post("/api/users/token/refresh");

    if (res.data) {
      return res.data;
    } else {
      throw new Error("응답에 data가 없습니다");
    }
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError && error.response?.data?.message) {
      throw new Error(error.response.data.message); // 서버 메시지를 직접 전달
    }
    throw new Error("토큰 발행 중 알 수 없는 오류 발생");
  }
};

/**
 * 회원탈퇴
 * @returns
 */

export const deleteUser = async () => {
  try {
    const res = await api.delete("/api/users");

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.error("탈퇴 실패:", error);
    throw error;
  }
};
