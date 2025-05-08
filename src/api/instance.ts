import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // ✅ 쿠키 자동 포함
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터 불필요 (쿠키 자동 처리되므로)
export default api;
